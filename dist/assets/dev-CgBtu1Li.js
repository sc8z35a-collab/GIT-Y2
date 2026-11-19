(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bs="174",bl=0,aa=1,Ml=2,T0=1,R0=2,yn=3,mn=0,ze=1,on=2,Gn=0,Di=1,la=2,ca=3,ua=4,_l=5,ri=100,Sl=101,vl=102,wl=103,yl=104,El=200,Tl=201,Rl=202,Al=203,jo=204,Jo=205,Cl=206,Pl=207,Ll=208,Il=209,Dl=210,kl=211,Ul=212,Fl=213,Nl=214,Qo=0,ts=1,es=2,zi=3,ns=4,is=5,rs=6,os=7,A0=0,zl=1,Ol=2,Vn=0,Bl=1,Hl=2,Wl=3,C0=4,Gl=5,Vl=6,Yl=7,P0=300,Oi=301,Bi=302,ss=303,as=304,uo=306,si=1e3,ai=1001,ls=1002,Xe=1003,Xl=1004,_r=1005,an=1006,go=1007,Wn=1008,Ln=1009,L0=1010,I0=1011,fr=1012,Hs=1013,ci=1014,pn=1015,mr=1016,Ws=1017,Gs=1018,Hi=1020,D0=35902,k0=1021,U0=1022,ln=1023,F0=1024,N0=1025,ki=1026,Wi=1027,Vs=1028,Ys=1029,z0=1030,Xs=1031,Zs=1033,jr=33776,Jr=33777,Qr=33778,to=33779,cs=35840,us=35841,ds=35842,hs=35843,fs=36196,ps=37492,ms=37496,xs=37808,gs=37809,bs=37810,Ms=37811,_s=37812,Ss=37813,vs=37814,ws=37815,ys=37816,Es=37817,Ts=37818,Rs=37819,As=37820,Cs=37821,eo=36492,Ps=36494,Ls=36495,O0=36283,Is=36284,Ds=36285,ks=36286,Zl=3200,ql=3201,B0=0,$l=1,Bn="",Ne="srgb",Gi="srgb-linear",ro="linear",se="srgb",fi=7680,da=519,Kl=512,jl=513,Jl=514,H0=515,Ql=516,tc=517,ec=518,nc=519,ha=35044,fa="300 es",Rn=2e3,oo=2001;class Xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bo=Math.PI/180,Us=180/Math.PI;function xr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[e&255]+Ie[e>>8&255]+"-"+Ie[e>>16&15|64]+Ie[e>>24&255]+"-"+Ie[t&63|128]+Ie[t>>8&255]+"-"+Ie[t>>16&255]+Ie[t>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function jt(i,e,t){return Math.max(e,Math.min(t,i))}function ic(i,e){return(i%e+e)%e}function Mo(i,e,t){return(1-t)*i+t*e}function ji(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Be(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Jt{constructor(e=0,t=0){Jt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=jt(this.x,e.x,t.x),this.y=jt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=jt(this.x,e,t),this.y=jt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*r+e.x,this.y=o*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(e,t,n,r,o,s,a,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c)}set(e,t,n,r,o,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],p=n[5],x=n[8],g=r[0],m=r[3],f=r[6],_=r[1],v=r[4],b=r[7],P=r[2],E=r[5],A=r[8];return o[0]=s*g+a*_+l*P,o[3]=s*m+a*v+l*E,o[6]=s*f+a*b+l*A,o[1]=c*g+u*_+d*P,o[4]=c*m+u*v+d*E,o[7]=c*f+u*b+d*A,o[2]=h*g+p*_+x*P,o[5]=h*m+p*v+x*E,o[8]=h*f+p*b+x*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-n*o*u+n*a*l+r*o*c-r*s*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*s-a*c,h=a*l-u*o,p=c*o-s*l,x=t*d+n*h+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return e[0]=d*g,e[1]=(r*c-u*n)*g,e[2]=(a*n-r*s)*g,e[3]=h*g,e[4]=(u*t-r*l)*g,e[5]=(r*o-a*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(s*t-n*o)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_o.makeScale(e,t)),this}rotate(e){return this.premultiply(_o.makeRotation(-e)),this}translate(e,t){return this.premultiply(_o.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _o=new qt;function W0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rc(){const i=pr("canvas");return i.style.display="block",i}const pa={};function ei(i){i in pa||(pa[i]=!0,console.warn(i))}function oc(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function sc(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ac(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ma=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xa=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lc(){const i={enabled:!0,workingColorSpace:Gi,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===se&&(r.r=Cn(r.r),r.g=Cn(r.g),r.b=Cn(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===se&&(r.r=Ui(r.r),r.g=Ui(r.g),r.b=Ui(r.b))),r},fromWorkingColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},toWorkingColorSpace:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Bn?ro:this.spaces[r].transfer},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Gi]:{primaries:e,whitePoint:n,transfer:ro,toXYZ:ma,fromXYZ:xa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:e,whitePoint:n,transfer:se,toXYZ:ma,fromXYZ:xa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),i}const ee=lc();function Cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ui(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let pi;class cc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{pi===void 0&&(pi=pr("canvas")),pi.width=e.width,pi.height=e.height;const n=pi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=pi}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Cn(o[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Cn(t[n]/255)*255):t[n]=Cn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uc=0;class qs{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uc++}),this.uuid=xr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(So(r[s].image)):o.push(So(r[s]))}else o=So(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function So(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dc=0;class ke extends Xi{constructor(e=ke.DEFAULT_IMAGE,t=ke.DEFAULT_MAPPING,n=ai,r=ai,o=an,s=Wn,a=ln,l=Ln,c=ke.DEFAULT_ANISOTROPY,u=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dc++}),this.uuid=xr(),this.name="",this.source=new qs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Jt(0,0),this.repeat=new Jt(1,1),this.center=new Jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==P0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case si:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case ls:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case si:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case ls:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=P0;ke.DEFAULT_ANISOTROPY=1;class _e{constructor(e=0,t=0,n=0,r=1){_e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],x=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+g)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,b=(p+1)/2,P=(f+1)/2,E=(u+h)/4,A=(d+g)/4,T=(x+m)/4;return v>b&&v>P?v<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(v),r=E/n,o=A/n):b>P?b<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(b),n=E/r,o=T/r):P<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(P),n=A/o,r=T/o),this.set(n,r,o,t),this}let _=Math.sqrt((m-x)*(m-x)+(d-g)*(d-g)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-x)/_,this.y=(d-g)/_,this.z=(h-u)/_,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=jt(this.x,e.x,t.x),this.y=jt(this.y,e.y,t.y),this.z=jt(this.z,e.z,t.z),this.w=jt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=jt(this.x,e,t),this.y=jt(this.y,e,t),this.z=jt(this.z,e,t),this.w=jt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hc extends Xi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _e(0,0,e,t),this.scissorTest=!1,this.viewport=new _e(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new ke(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new qs(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends hc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class G0 extends ke{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fc extends ke{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,s,a){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const h=o[s+0],p=o[s+1],x=o[s+2],g=o[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=x,e[t+3]=g;return}if(d!==g||l!==h||c!==p||u!==x){let m=1-a;const f=l*h+c*p+u*x+d*g,_=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const P=Math.sqrt(v),E=Math.atan2(P,f*_);m=Math.sin(m*E)/P,a=Math.sin(a*E)/P}const b=a*_;if(l=l*m+h*b,c=c*m+p*b,u=u*m+x*b,d=d*m+g*b,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=P,c*=P,u*=P,d*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,o,s){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=o[s],h=o[s+1],p=o[s+2],x=o[s+3];return e[t]=a*x+u*d+l*p-c*h,e[t+1]=l*x+u*h+c*d-a*p,e[t+2]=c*x+u*p+a*h-l*d,e[t+3]=u*x-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),d=a(o/2),h=l(n/2),p=l(r/2),x=l(o/2);switch(s){case"XYZ":this._x=h*u*d+c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d-h*p*x;break;case"YXZ":this._x=h*u*d+c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d+h*p*x;break;case"ZXY":this._x=h*u*d-c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d-h*p*x;break;case"ZYX":this._x=h*u*d-c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d+h*p*x;break;case"YZX":this._x=h*u*d+c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d-h*p*x;break;case"XZY":this._x=h*u*d-c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d+h*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(o-c)*p,this._z=(s-r)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(o-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(s-r)/p,this._x=(o+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*a+r*c-o*l,this._y=r*u+s*l+o*a-n*c,this._z=o*u+s*c+n*l-r*a,this._w=s*u-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+n*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=s*d+this._w*h,this._x=n*d+this._x*h,this._y=r*d+this._y*h,this._z=o*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ot{constructor(e=0,t=0,n=0){ot.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ga.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ga.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*n),u=2*(a*t-o*r),d=2*(o*n-s*t);return this.x=t+l*c+s*d-a*u,this.y=n+l*u+a*c-o*d,this.z=r+l*d+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=jt(this.x,e.x,t.x),this.y=jt(this.y,e.y,t.y),this.z=jt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=jt(this.x,e,t),this.y=jt(this.y,e,t),this.z=jt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vo.copy(this).projectOnVector(e),this.sub(vo)}reflect(e){return this.sub(vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vo=new ot,ga=new Zi;class In{constructor(e=new ot(1/0,1/0,1/0),t=new ot(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,en):en.fromBufferAttribute(o,s),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sr.copy(n.boundingBox)),Sr.applyMatrix4(e.matrixWorld),this.union(Sr)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ji),vr.subVectors(this.max,Ji),mi.subVectors(e.a,Ji),xi.subVectors(e.b,Ji),gi.subVectors(e.c,Ji),Dn.subVectors(xi,mi),kn.subVectors(gi,xi),Xn.subVectors(mi,gi);let t=[0,-Dn.z,Dn.y,0,-kn.z,kn.y,0,-Xn.z,Xn.y,Dn.z,0,-Dn.x,kn.z,0,-kn.x,Xn.z,0,-Xn.x,-Dn.y,Dn.x,0,-kn.y,kn.x,0,-Xn.y,Xn.x,0];return!wo(t,mi,xi,gi,vr)||(t=[1,0,0,0,1,0,0,0,1],!wo(t,mi,xi,gi,vr))?!1:(wr.crossVectors(Dn,kn),t=[wr.x,wr.y,wr.z],wo(t,mi,xi,gi,vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bn=[new ot,new ot,new ot,new ot,new ot,new ot,new ot,new ot],en=new ot,Sr=new In,mi=new ot,xi=new ot,gi=new ot,Dn=new ot,kn=new ot,Xn=new ot,Ji=new ot,vr=new ot,wr=new ot,Zn=new ot;function wo(i,e,t,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){Zn.fromArray(i,o);const a=r.x*Math.abs(Zn.x)+r.y*Math.abs(Zn.y)+r.z*Math.abs(Zn.z),l=e.dot(Zn),c=t.dot(Zn),u=n.dot(Zn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const pc=new In,Qi=new ot,yo=new ot;class di{constructor(e=new ot,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):pc.setFromPoints(e).getCenter(n);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);const t=Qi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Qi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(yo)),this.expandByPoint(Qi.copy(e.center).sub(yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new ot,Eo=new ot,yr=new ot,Un=new ot,To=new ot,Er=new ot,Ro=new ot;class V0{constructor(e=new ot,t=new ot(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Eo.copy(e).add(t).multiplyScalar(.5),yr.copy(t).sub(e).normalize(),Un.copy(this.origin).sub(Eo);const o=e.distanceTo(t)*.5,s=-this.direction.dot(yr),a=Un.dot(this.direction),l=-Un.dot(yr),c=Un.lengthSq(),u=Math.abs(1-s*s);let d,h,p,x;if(u>0)if(d=s*l-a,h=s*a-l,x=o*u,d>=0)if(h>=-x)if(h<=x){const g=1/u;d*=g,h*=g,p=d*(d+s*h+2*a)+h*(s*d+h+2*l)+c}else h=o,d=Math.max(0,-(s*h+a)),p=-d*d+h*(h+2*l)+c;else h=-o,d=Math.max(0,-(s*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-x?(d=Math.max(0,-(-s*o+a)),h=d>0?-o:Math.min(Math.max(-o,-l),o),p=-d*d+h*(h+2*l)+c):h<=x?(d=0,h=Math.min(Math.max(-o,-l),o),p=h*(h+2*l)+c):(d=Math.max(0,-(s*o+a)),h=d>0?o:Math.min(Math.max(-o,-l),o),p=-d*d+h*(h+2*l)+c);else h=s>0?-o:o,d=Math.max(0,-(s*h+a)),p=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Eo).addScaledVector(yr,h),p}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const n=Mn.dot(this.direction),r=Mn.dot(Mn)-n*n,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(o=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(o=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,n,r,o){To.subVectors(t,e),Er.subVectors(n,e),Ro.crossVectors(To,Er);let s=this.direction.dot(Ro),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Un.subVectors(this.origin,e);const l=a*this.direction.dot(Er.crossVectors(Un,Er));if(l<0)return null;const c=a*this.direction.dot(To.cross(Un));if(c<0||l+c>s)return null;const u=-a*Un.dot(Ro);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(e,t,n,r,o,s,a,l,c,u,d,h,p,x,g,m){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,l,c,u,d,h,p,x,g,m)}set(e,t,n,r,o,s,a,l,c,u,d,h,p,x,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=o,f[5]=s,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=x,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/bi.setFromMatrixColumn(e,0).length(),o=1/bi.setFromMatrixColumn(e,1).length(),s=1/bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const h=s*u,p=s*d,x=a*u,g=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+x*c,t[5]=h-g*c,t[9]=-a*l,t[2]=g-h*c,t[6]=x+p*c,t[10]=s*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,x=c*u,g=c*d;t[0]=h+g*a,t[4]=x*a-p,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-a,t[2]=p*a-x,t[6]=g+h*a,t[10]=s*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,x=c*u,g=c*d;t[0]=h-g*a,t[4]=-s*d,t[8]=x+p*a,t[1]=p+x*a,t[5]=s*u,t[9]=g-h*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const h=s*u,p=s*d,x=a*u,g=a*d;t[0]=l*u,t[4]=x*c-p,t[8]=h*c+g,t[1]=l*d,t[5]=g*c+h,t[9]=p*c-x,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const h=s*l,p=s*c,x=a*l,g=a*c;t[0]=l*u,t[4]=g-h*d,t[8]=x*d+p,t[1]=d,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+x,t[10]=h-g*d}else if(e.order==="XZY"){const h=s*l,p=s*c,x=a*l,g=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+g,t[5]=s*u,t[9]=p*d-x,t[2]=x*d-p,t[6]=a*u,t[10]=g*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mc,e,xc)}lookAt(e,t,n){const r=this.elements;return Ve.subVectors(e,t),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Fn.crossVectors(n,Ve),Fn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Fn.crossVectors(n,Ve)),Fn.normalize(),Tr.crossVectors(Ve,Fn),r[0]=Fn.x,r[4]=Tr.x,r[8]=Ve.x,r[1]=Fn.y,r[5]=Tr.y,r[9]=Ve.y,r[2]=Fn.z,r[6]=Tr.z,r[10]=Ve.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],p=n[13],x=n[2],g=n[6],m=n[10],f=n[14],_=n[3],v=n[7],b=n[11],P=n[15],E=r[0],A=r[4],T=r[8],S=r[12],M=r[1],I=r[5],O=r[9],k=r[13],U=r[2],D=r[6],w=r[10],y=r[14],F=r[3],q=r[7],Y=r[11],X=r[15];return o[0]=s*E+a*M+l*U+c*F,o[4]=s*A+a*I+l*D+c*q,o[8]=s*T+a*O+l*w+c*Y,o[12]=s*S+a*k+l*y+c*X,o[1]=u*E+d*M+h*U+p*F,o[5]=u*A+d*I+h*D+p*q,o[9]=u*T+d*O+h*w+p*Y,o[13]=u*S+d*k+h*y+p*X,o[2]=x*E+g*M+m*U+f*F,o[6]=x*A+g*I+m*D+f*q,o[10]=x*T+g*O+m*w+f*Y,o[14]=x*S+g*k+m*y+f*X,o[3]=_*E+v*M+b*U+P*F,o[7]=_*A+v*I+b*D+P*q,o[11]=_*T+v*O+b*w+P*Y,o[15]=_*S+v*k+b*y+P*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],x=e[3],g=e[7],m=e[11],f=e[15];return x*(+o*l*d-r*c*d-o*a*h+n*c*h+r*a*p-n*l*p)+g*(+t*l*p-t*c*h+o*s*h-r*s*p+r*c*u-o*l*u)+m*(+t*c*d-t*a*p-o*s*d+n*s*p+o*a*u-n*c*u)+f*(-r*a*u-t*l*d+t*a*h+r*s*d-n*s*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],x=e[12],g=e[13],m=e[14],f=e[15],_=d*m*c-g*h*c+g*l*p-a*m*p-d*l*f+a*h*f,v=x*h*c-u*m*c-x*l*p+s*m*p+u*l*f-s*h*f,b=u*g*c-x*d*c+x*a*p-s*g*p-u*a*f+s*d*f,P=x*d*l-u*g*l-x*a*h+s*g*h+u*a*m-s*d*m,E=t*_+n*v+r*b+o*P;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=_*A,e[1]=(g*h*o-d*m*o-g*r*p+n*m*p+d*r*f-n*h*f)*A,e[2]=(a*m*o-g*l*o+g*r*c-n*m*c-a*r*f+n*l*f)*A,e[3]=(d*l*o-a*h*o-d*r*c+n*h*c+a*r*p-n*l*p)*A,e[4]=v*A,e[5]=(u*m*o-x*h*o+x*r*p-t*m*p-u*r*f+t*h*f)*A,e[6]=(x*l*o-s*m*o-x*r*c+t*m*c+s*r*f-t*l*f)*A,e[7]=(s*h*o-u*l*o+u*r*c-t*h*c-s*r*p+t*l*p)*A,e[8]=b*A,e[9]=(x*d*o-u*g*o-x*n*p+t*g*p+u*n*f-t*d*f)*A,e[10]=(s*g*o-x*a*o+x*n*c-t*g*c-s*n*f+t*a*f)*A,e[11]=(u*a*o-s*d*o-u*n*c+t*d*c+s*n*p-t*a*p)*A,e[12]=P*A,e[13]=(u*g*r-x*d*r+x*n*h-t*g*h-u*n*m+t*d*m)*A,e[14]=(x*a*r-s*g*r-x*n*l+t*g*l+s*n*m-t*a*m)*A,e[15]=(s*d*r-u*a*r+u*n*l-t*d*l-s*n*h+t*a*h)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*s,0,c*l-r*a,u*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,s){return this.set(1,n,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,u=s+s,d=a+a,h=o*c,p=o*u,x=o*d,g=s*u,m=s*d,f=a*d,_=l*c,v=l*u,b=l*d,P=n.x,E=n.y,A=n.z;return r[0]=(1-(g+f))*P,r[1]=(p+b)*P,r[2]=(x-v)*P,r[3]=0,r[4]=(p-b)*E,r[5]=(1-(h+f))*E,r[6]=(m+_)*E,r[7]=0,r[8]=(x+v)*A,r[9]=(m-_)*A,r[10]=(1-(h+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let o=bi.set(r[0],r[1],r[2]).length();const s=bi.set(r[4],r[5],r[6]).length(),a=bi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],nn.copy(this);const c=1/o,u=1/s,d=1/a;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=d,nn.elements[9]*=d,nn.elements[10]*=d,t.setFromRotationMatrix(nn),n.x=o,n.y=s,n.z=a,this}makePerspective(e,t,n,r,o,s,a=Rn){const l=this.elements,c=2*o/(t-e),u=2*o/(n-r),d=(t+e)/(t-e),h=(n+r)/(n-r);let p,x;if(a===Rn)p=-(s+o)/(s-o),x=-2*s*o/(s-o);else if(a===oo)p=-s/(s-o),x=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,o,s,a=Rn){const l=this.elements,c=1/(t-e),u=1/(n-r),d=1/(s-o),h=(t+e)*c,p=(n+r)*u;let x,g;if(a===Rn)x=(s+o)*d,g=-2*d;else if(a===oo)x=o*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const bi=new ot,nn=new Xt,mc=new ot(0,0,0),xc=new ot(1,1,1),Fn=new ot,Tr=new ot,Ve=new ot,ba=new Xt,Ma=new Zi;class dn{constructor(e=0,t=0,n=0,r=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-jt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ba.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ba,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ma.setFromEuler(this),this.setFromQuaternion(Ma,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class Y0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gc=0;const _a=new ot,Mi=new Zi,_n=new Xt,Rr=new ot,tr=new ot,bc=new ot,Mc=new Zi,Sa=new ot(1,0,0),va=new ot(0,1,0),wa=new ot(0,0,1),ya={type:"added"},_c={type:"removed"},_i={type:"childadded",child:null},Ao={type:"childremoved",child:null};class ye extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gc++}),this.uuid=xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const e=new ot,t=new dn,n=new Zi,r=new ot(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Xt},normalMatrix:{value:new qt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Y0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.premultiply(Mi),this}rotateX(e){return this.rotateOnAxis(Sa,e)}rotateY(e){return this.rotateOnAxis(va,e)}rotateZ(e){return this.rotateOnAxis(wa,e)}translateOnAxis(e,t){return _a.copy(e).applyQuaternion(this.quaternion),this.position.add(_a.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sa,e)}translateY(e){return this.translateOnAxis(va,e)}translateZ(e){return this.translateOnAxis(wa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rr.copy(e):Rr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(tr,Rr,this.up):_n.lookAt(Rr,tr,this.up),this.quaternion.setFromRotationMatrix(_n),r&&(_n.extractRotation(r.matrixWorld),Mi.setFromRotationMatrix(_n),this.quaternion.premultiply(Mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ya),_i.child=e,this.dispatchEvent(_i),_i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_c),Ao.child=e,this.dispatchEvent(Ao),Ao.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ya),_i.child=e,this.dispatchEvent(_i),_i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,e,bc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,Mc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),h=s(e.skeletons),p=s(e.animations),x=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=r,n;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ye.DEFAULT_UP=new ot(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new ot,Sn=new ot,Co=new ot,vn=new ot,Si=new ot,vi=new ot,Ea=new ot,Po=new ot,Lo=new ot,Io=new ot,Do=new _e,ko=new _e,Uo=new _e;class sn{constructor(e=new ot,t=new ot,n=new ot){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),rn.subVectors(e,t),r.cross(rn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){rn.subVectors(r,t),Sn.subVectors(n,t),Co.subVectors(e,t);const s=rn.dot(rn),a=rn.dot(Sn),l=rn.dot(Co),c=Sn.dot(Sn),u=Sn.dot(Co),d=s*c-a*a;if(d===0)return o.set(0,0,0),null;const h=1/d,p=(c*l-a*u)*h,x=(s*u-a*l)*h;return o.set(1-p-x,x,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(e,t,n,r,o,s,a,l){return this.getBarycoord(e,t,n,r,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,vn.x),l.addScaledVector(s,vn.y),l.addScaledVector(a,vn.z),l)}static getInterpolatedAttribute(e,t,n,r,o,s){return Do.setScalar(0),ko.setScalar(0),Uo.setScalar(0),Do.fromBufferAttribute(e,t),ko.fromBufferAttribute(e,n),Uo.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Do,o.x),s.addScaledVector(ko,o.y),s.addScaledVector(Uo,o.z),s}static isFrontFacing(e,t,n,r){return rn.subVectors(n,t),Sn.subVectors(e,t),rn.cross(Sn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),rn.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return sn.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let s,a;Si.subVectors(r,n),vi.subVectors(o,n),Po.subVectors(e,n);const l=Si.dot(Po),c=vi.dot(Po);if(l<=0&&c<=0)return t.copy(n);Lo.subVectors(e,r);const u=Si.dot(Lo),d=vi.dot(Lo);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(Si,s);Io.subVectors(e,o);const p=Si.dot(Io),x=vi.dot(Io);if(x>=0&&p<=x)return t.copy(o);const g=p*c-l*x;if(g<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(n).addScaledVector(vi,a);const m=u*x-p*d;if(m<=0&&d-u>=0&&p-x>=0)return Ea.subVectors(o,r),a=(d-u)/(d-u+(p-x)),t.copy(r).addScaledVector(Ea,a);const f=1/(m+g+h);return s=g*f,a=h*f,t.copy(n).addScaledVector(Si,s).addScaledVector(vi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const X0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function Fo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Vt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ne){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ee.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ee.workingColorSpace){return this.r=e,this.g=t,this.b=n,ee.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ee.workingColorSpace){if(e=ic(e,1),t=jt(t,0,1),n=jt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=Fo(s,o,e+1/3),this.g=Fo(s,o,e),this.b=Fo(s,o,e-1/3)}return ee.toWorkingColorSpace(this,r),this}setStyle(e,t=Ne){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ne){const n=X0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cn(e.r),this.g=Cn(e.g),this.b=Cn(e.b),this}copyLinearToSRGB(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ne){return ee.fromWorkingColorSpace(De.copy(this),e),Math.round(jt(De.r*255,0,255))*65536+Math.round(jt(De.g*255,0,255))*256+Math.round(jt(De.b*255,0,255))}getHexString(e=Ne){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ee.workingColorSpace){ee.fromWorkingColorSpace(De.copy(this),t);const n=De.r,r=De.g,o=De.b,s=Math.max(n,r,o),a=Math.min(n,r,o);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const d=s-a;switch(c=u<=.5?d/(s+a):d/(2-s-a),s){case n:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-n)/d+2;break;case o:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ee.workingColorSpace){return ee.fromWorkingColorSpace(De.copy(this),t),e.r=De.r,e.g=De.g,e.b=De.b,e}getStyle(e=Ne){ee.fromWorkingColorSpace(De.copy(this),e);const t=De.r,n=De.g,r=De.b;return e!==Ne?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Nn),this.setHSL(Nn.h+e,Nn.s+t,Nn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(Ar);const n=Mo(Nn.h,Ar.h,t),r=Mo(Nn.s,Ar.s,t),o=Mo(Nn.l,Ar.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new Vt;Vt.NAMES=X0;let Sc=0;class qi extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sc++}),this.uuid=xr(),this.name="",this.type="Material",this.blending=Di,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jo,this.blendDst=Jo,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=da,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jo&&(n.blendSrc=this.blendSrc),this.blendDst!==Jo&&(n.blendDst=this.blendDst),this.blendEquation!==ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==da&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(t){const o=r(e.textures),s=r(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Z0 extends qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=A0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const we=new ot,Cr=new Jt;let vc=0;class pe{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ha,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyMatrix3(e),this.setXY(t,Cr.x,Cr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)we.fromBufferAttribute(this,t),we.applyMatrix3(e),this.setXYZ(t,we.x,we.y,we.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)we.fromBufferAttribute(this,t),we.applyMatrix4(e),this.setXYZ(t,we.x,we.y,we.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)we.fromBufferAttribute(this,t),we.applyNormalMatrix(e),this.setXYZ(t,we.x,we.y,we.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)we.fromBufferAttribute(this,t),we.transformDirection(e),this.setXYZ(t,we.x,we.y,we.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ji(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Be(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=Be(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=Be(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Be(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=Be(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Be(t,this.array),n=Be(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Be(t,this.array),n=Be(n,this.array),r=Be(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=Be(t,this.array),n=Be(n,this.array),r=Be(r,this.array),o=Be(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ha&&(e.usage=this.usage),e}}class q0 extends pe{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $0 extends pe{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ue extends pe{constructor(e,t,n){super(new Float32Array(e),t,n)}}let wc=0;const Ke=new Xt,No=new ye,wi=new ot,Ye=new In,er=new In,Ce=new ot;class Ee extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wc++}),this.uuid=xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(W0(e)?$0:q0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new qt().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ke.makeRotationFromQuaternion(e),this.applyMatrix4(Ke),this}rotateX(e){return Ke.makeRotationX(e),this.applyMatrix4(Ke),this}rotateY(e){return Ke.makeRotationY(e),this.applyMatrix4(Ke),this}rotateZ(e){return Ke.makeRotationZ(e),this.applyMatrix4(Ke),this}translate(e,t,n){return Ke.makeTranslation(e,t,n),this.applyMatrix4(Ke),this}scale(e,t,n){return Ke.makeScale(e,t,n),this.applyMatrix4(Ke),this}lookAt(e){return No.lookAt(e),No.updateMatrix(),this.applyMatrix4(No.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new ue(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ot(-1/0,-1/0,-1/0),new ot(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];Ye.setFromBufferAttribute(o),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ot,1/0);return}if(e){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const a=t[o];er.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors(Ye.min,er.min),Ye.expandByPoint(Ce),Ce.addVectors(Ye.max,er.max),Ye.expandByPoint(Ce)):(Ye.expandByPoint(er.min),Ye.expandByPoint(er.max))}Ye.getCenter(n);let r=0;for(let o=0,s=e.count;o<s;o++)Ce.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(Ce));if(t)for(let o=0,s=t.length;o<s;o++){const a=t[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ce.fromBufferAttribute(a,c),l&&(wi.fromBufferAttribute(e,c),Ce.add(wi)),r=Math.max(r,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pe(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new ot,l[T]=new ot;const c=new ot,u=new ot,d=new ot,h=new Jt,p=new Jt,x=new Jt,g=new ot,m=new ot;function f(T,S,M){c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,M),h.fromBufferAttribute(o,T),p.fromBufferAttribute(o,S),x.fromBufferAttribute(o,M),u.sub(c),d.sub(c),p.sub(h),x.sub(h);const I=1/(p.x*x.y-x.x*p.y);isFinite(I)&&(g.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(I),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(I),a[T].add(g),a[S].add(g),a[M].add(g),l[T].add(m),l[S].add(m),l[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let T=0,S=_.length;T<S;++T){const M=_[T],I=M.start,O=M.count;for(let k=I,U=I+O;k<U;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const v=new ot,b=new ot,P=new ot,E=new ot;function A(T){P.fromBufferAttribute(r,T),E.copy(P);const S=a[T];v.copy(S),v.sub(P.multiplyScalar(P.dot(S))).normalize(),b.crossVectors(E,S);const I=b.dot(l[T])<0?-1:1;s.setXYZW(T,v.x,v.y,v.z,I)}for(let T=0,S=_.length;T<S;++T){const M=_[T],I=M.start,O=M.count;for(let k=I,U=I+O;k<U;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const r=new ot,o=new ot,s=new ot,a=new ot,l=new ot,c=new ot,u=new ot,d=new ot;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),o.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ce.fromBufferAttribute(e,t),Ce.normalize(),e.setXYZ(t,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,x=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*u;for(let f=0;f<u;f++)h[x++]=c[p++]}return new pe(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ee,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const o=e.morphAttributes;for(const c in o){const u=[],d=o[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ta=new Xt,qn=new V0,Pr=new di,Ra=new ot,Lr=new ot,Ir=new ot,Dr=new ot,zo=new ot,kr=new ot,Aa=new ot,Ur=new ot;class It extends ye{constructor(e=new Ee,t=new Z0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){kr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],d=o[l];u!==0&&(zo.fromBufferAttribute(d,e),s?kr.addScaledVector(zo,u):kr.addScaledVector(zo.sub(t),u))}t.add(kr)}return t}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(o),qn.copy(e.ray).recast(e.near),!(Pr.containsPoint(qn.origin)===!1&&(qn.intersectSphere(Pr,Ra)===null||qn.origin.distanceToSquared(Ra)>(e.far-e.near)**2))&&(Ta.copy(o).invert(),qn.copy(e.ray).applyMatrix4(Ta),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qn)))}_computeIntersections(e,t,n){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,h=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let x=0,g=h.length;x<g;x++){const m=h[x],f=s[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=_,P=v;b<P;b+=3){const E=a.getX(b),A=a.getX(b+1),T=a.getX(b+2);r=Fr(this,f,e,n,c,u,d,E,A,T),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=x,f=g;m<f;m+=3){const _=a.getX(m),v=a.getX(m+1),b=a.getX(m+2);r=Fr(this,s,e,n,c,u,d,_,v,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,g=h.length;x<g;x++){const m=h[x],f=s[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=_,P=v;b<P;b+=3){const E=b,A=b+1,T=b+2;r=Fr(this,f,e,n,c,u,d,E,A,T),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=x,f=g;m<f;m+=3){const _=m,v=m+1,b=m+2;r=Fr(this,s,e,n,c,u,d,_,v,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function yc(i,e,t,n,r,o,s,a){let l;if(e.side===ze?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,e.side===mn,a),l===null)return null;Ur.copy(a),Ur.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ur);return c<t.near||c>t.far?null:{distance:c,point:Ur.clone(),object:i}}function Fr(i,e,t,n,r,o,s,a,l,c){i.getVertexPosition(a,Lr),i.getVertexPosition(l,Ir),i.getVertexPosition(c,Dr);const u=yc(i,e,t,n,Lr,Ir,Dr,Aa);if(u){const d=new ot;sn.getBarycoord(Aa,Lr,Ir,Dr,d),r&&(u.uv=sn.getInterpolatedAttribute(r,a,l,c,d,new Jt)),o&&(u.uv1=sn.getInterpolatedAttribute(o,a,l,c,d,new Jt)),s&&(u.normal=sn.getInterpolatedAttribute(s,a,l,c,d,new ot),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new ot,materialIndex:0};sn.getNormal(Lr,Ir,Dr,h.normal),u.face=h,u.barycoord=d}return u}class Yt extends Ee{constructor(e=1,t=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],d=[];let h=0,p=0;x("z","y","x",-1,-1,n,t,e,s,o,0),x("z","y","x",1,-1,n,t,-e,s,o,1),x("x","z","y",1,1,e,n,t,r,s,2),x("x","z","y",1,-1,e,n,-t,r,s,3),x("x","y","z",1,-1,e,t,n,r,o,4),x("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(d,2));function x(g,m,f,_,v,b,P,E,A,T,S){const M=b/A,I=P/T,O=b/2,k=P/2,U=E/2,D=A+1,w=T+1;let y=0,F=0;const q=new ot;for(let Y=0;Y<w;Y++){const X=Y*I-k;for(let L=0;L<D;L++){const $=L*M-O;q[g]=$*_,q[m]=X*v,q[f]=U,c.push(q.x,q.y,q.z),q[g]=0,q[m]=0,q[f]=E>0?1:-1,u.push(q.x,q.y,q.z),d.push(L/A),d.push(1-Y/T),y+=1}}for(let Y=0;Y<T;Y++)for(let X=0;X<A;X++){const L=h+X+D*Y,$=h+X+D*(Y+1),N=h+(X+1)+D*(Y+1),H=h+(X+1)+D*Y;l.push(L,$,H),l.push($,N,H),F+=6}a.addGroup(p,F,S),p+=F,h+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Fe(i){const e={};for(let t=0;t<i.length;t++){const n=Vi(i[t]);for(const r in n)e[r]=n[r]}return e}function Ec(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function K0(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ee.workingColorSpace}const Tc={clone:Vi,merge:Fe};var Rc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ac=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rc,this.fragmentShader=Ac,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vi(e.uniforms),this.uniformsGroups=Ec(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class j0 extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Rn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new ot,Ca=new Jt,Pa=new Jt;class je extends j0{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zn.x,zn.y).multiplyScalar(-e/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-e/zn.z)}getViewSize(e,t){return this.getViewBounds(e,Ca,Pa),t.subVectors(Pa,Ca)}setViewOffset(e,t,n,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(bo*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const yi=-90,Ei=1;class Cc extends ye{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new je(yi,Ei,e,t);r.layers=this.layers,this.add(r);const o=new je(yi,Ei,e,t);o.layers=this.layers,this.add(o);const s=new je(yi,Ei,e,t);s.layers=this.layers,this.add(s);const a=new je(yi,Ei,e,t);a.layers=this.layers,this.add(a);const l=new je(yi,Ei,e,t);l.layers=this.layers,this.add(l);const c=new je(yi,Ei,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,o,s,a,l]=t;for(const c of t)this.remove(c);if(e===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,o),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class J0 extends ke{constructor(e,t,n,r,o,s,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Oi,super(e,t,n,r,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pc extends ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new J0(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:an}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Yt(5,5,5),o=new xn({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:Gn});o.uniforms.tEquirect.value=t;const s=new It(r,o),a=t.minFilter;return t.minFilter===Wn&&(t.minFilter=an),new Cc(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(o)}}class fe extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lc={type:"move"};class Oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ot,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ot),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ot,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ot),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lc)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new fe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class $s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Vt(e),this.density=t}clone(){return new $s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ic extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Dc extends ke{constructor(e=null,t=1,n=1,r,o,s,a,l,c=Xe,u=Xe,d,h){super(null,s,a,l,c,u,r,o,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class La extends pe{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ti=new Xt,Ia=new Xt,Nr=[],Da=new In,kc=new Xt,nr=new It,ir=new di;class ka extends It{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new La(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,kc)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new In),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ti),Da.copy(e.boundingBox).applyMatrix4(Ti),this.boundingBox.union(Da)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new di),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ti),ir.copy(e.boundingSphere).applyMatrix4(Ti),this.boundingSphere.union(ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,o=n.length+1,s=e*o+1;for(let a=0;a<n.length;a++)n[a]=r[s+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(n),e.ray.intersectsSphere(ir)!==!1))for(let o=0;o<r;o++){this.getMatrixAt(o,Ti),Ia.multiplyMatrices(n,Ti),nr.matrixWorld=Ia,nr.raycast(e,Nr);for(let s=0,a=Nr.length;s<a;s++){const l=Nr[s];l.instanceId=o,l.object=this,t.push(l)}Nr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new La(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Dc(new Float32Array(r*this.count),r,this.count,Vs,pn));const o=this.morphTexture.source.data.data;let s=0;for(let c=0;c<n.length;c++)s+=n[c];const a=this.geometry.morphTargetsRelative?1:1-s,l=r*e;o[l]=a,o.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Bo=new ot,Uc=new ot,Fc=new qt;class ni{constructor(e=new ot(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Bo.subVectors(n,t).cross(Uc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Bo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Fc.getNormalMatrix(e),r=this.coplanarPoint(Bo).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $n=new di,zr=new ot;class Ks{constructor(e=new ni,t=new ni,n=new ni,r=new ni,o=new ni,s=new ni){this.planes=[e,t,n,r,o,s]}set(e,t,n,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rn){const n=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],p=r[8],x=r[9],g=r[10],m=r[11],f=r[12],_=r[13],v=r[14],b=r[15];if(n[0].setComponents(l-o,h-c,m-p,b-f).normalize(),n[1].setComponents(l+o,h+c,m+p,b+f).normalize(),n[2].setComponents(l+s,h+u,m+x,b+_).normalize(),n[3].setComponents(l-s,h-u,m-x,b-_).normalize(),n[4].setComponents(l-a,h-d,m-g,b-v).normalize(),t===Rn)n[5].setComponents(l+a,h+d,m+g,b+v).normalize();else if(t===oo)n[5].setComponents(a,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(e){return $n.center.set(0,0,0),$n.radius=.7071067811865476,$n.applyMatrix4(e.matrixWorld),this.intersectsSphere($n)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(zr.x=r.normal.x>0?e.max.x:e.min.x,zr.y=r.normal.y>0?e.max.y:e.min.y,zr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Q0 extends qi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const so=new ot,ao=new ot,Ua=new Xt,rr=new V0,Or=new di,Ho=new ot,Fa=new ot;class Nc extends ye{constructor(e=new Ee,t=new Q0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,o=t.count;r<o;r++)so.fromBufferAttribute(t,r-1),ao.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=so.distanceTo(ao);e.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(r),Or.radius+=o,e.ray.intersectsSphere(Or)===!1)return;Ua.copy(r).invert(),rr.copy(e.ray).applyMatrix4(Ua);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const p=Math.max(0,s.start),x=Math.min(u.count,s.start+s.count);for(let g=p,m=x-1;g<m;g+=c){const f=u.getX(g),_=u.getX(g+1),v=Br(this,e,rr,l,f,_,g);v&&t.push(v)}if(this.isLineLoop){const g=u.getX(x-1),m=u.getX(p),f=Br(this,e,rr,l,g,m,x-1);f&&t.push(f)}}else{const p=Math.max(0,s.start),x=Math.min(h.count,s.start+s.count);for(let g=p,m=x-1;g<m;g+=c){const f=Br(this,e,rr,l,g,g+1,g);f&&t.push(f)}if(this.isLineLoop){const g=Br(this,e,rr,l,x-1,p,x-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Br(i,e,t,n,r,o,s){const a=i.geometry.attributes.position;if(so.fromBufferAttribute(a,r),ao.fromBufferAttribute(a,o),t.distanceSqToSegment(so,ao,Ho,Fa)>n)return;Ho.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ho);if(!(c<e.near||c>e.far))return{distance:c,point:Fa.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class tl extends ke{constructor(e,t,n,r,o,s,a,l,c,u=ki){if(u!==ki&&u!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ki&&(n=ci),n===void 0&&u===Wi&&(n=Hi),super(null,r,o,s,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Xe,this.minFilter=l!==void 0?l:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class We extends Ee{constructor(e=1,t=1,n=1,r=32,o=1,s=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),o=Math.floor(o);const u=[],d=[],h=[],p=[];let x=0;const g=[],m=n/2;let f=0;_(),s===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new ue(d,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(p,2));function _(){const b=new ot,P=new ot;let E=0;const A=(t-e)/n;for(let T=0;T<=o;T++){const S=[],M=T/o,I=M*(t-e)+e;for(let O=0;O<=r;O++){const k=O/r,U=k*l+a,D=Math.sin(U),w=Math.cos(U);P.x=I*D,P.y=-M*n+m,P.z=I*w,d.push(P.x,P.y,P.z),b.set(D,A,w).normalize(),h.push(b.x,b.y,b.z),p.push(k,1-M),S.push(x++)}g.push(S)}for(let T=0;T<r;T++)for(let S=0;S<o;S++){const M=g[S][T],I=g[S+1][T],O=g[S+1][T+1],k=g[S][T+1];(e>0||S!==0)&&(u.push(M,I,k),E+=3),(t>0||S!==o-1)&&(u.push(I,O,k),E+=3)}c.addGroup(f,E,0),f+=E}function v(b){const P=x,E=new Jt,A=new ot;let T=0;const S=b===!0?e:t,M=b===!0?1:-1;for(let O=1;O<=r;O++)d.push(0,m*M,0),h.push(0,M,0),p.push(.5,.5),x++;const I=x;for(let O=0;O<=r;O++){const U=O/r*l+a,D=Math.cos(U),w=Math.sin(U);A.x=S*w,A.y=m*M,A.z=S*D,d.push(A.x,A.y,A.z),h.push(0,M,0),E.x=D*.5+.5,E.y=w*.5*M+.5,p.push(E.x,E.y),x++}for(let O=0;O<r;O++){const k=P+O,U=I+O;b===!0?u.push(U,U+1,k):u.push(U+1,U,k),T+=3}c.addGroup(f,T,b===!0?1:2),f+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new We(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class js extends We{constructor(e=1,t=1,n=32,r=1,o=!1,s=0,a=Math.PI*2){super(0,e,t,n,r,o,s,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:s,thetaLength:a}}static fromJSON(e){return new js(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ho extends Ee{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const o=[],s=[];a(r),c(n),u(),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(o.slice(),3)),this.setAttribute("uv",new ue(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const v=new ot,b=new ot,P=new ot;for(let E=0;E<t.length;E+=3)p(t[E+0],v),p(t[E+1],b),p(t[E+2],P),l(v,b,P,_)}function l(_,v,b,P){const E=P+1,A=[];for(let T=0;T<=E;T++){A[T]=[];const S=_.clone().lerp(b,T/E),M=v.clone().lerp(b,T/E),I=E-T;for(let O=0;O<=I;O++)O===0&&T===E?A[T][O]=S:A[T][O]=S.clone().lerp(M,O/I)}for(let T=0;T<E;T++)for(let S=0;S<2*(E-T)-1;S++){const M=Math.floor(S/2);S%2===0?(h(A[T][M+1]),h(A[T+1][M]),h(A[T][M])):(h(A[T][M+1]),h(A[T+1][M+1]),h(A[T+1][M]))}}function c(_){const v=new ot;for(let b=0;b<o.length;b+=3)v.x=o[b+0],v.y=o[b+1],v.z=o[b+2],v.normalize().multiplyScalar(_),o[b+0]=v.x,o[b+1]=v.y,o[b+2]=v.z}function u(){const _=new ot;for(let v=0;v<o.length;v+=3){_.x=o[v+0],_.y=o[v+1],_.z=o[v+2];const b=m(_)/2/Math.PI+.5,P=f(_)/Math.PI+.5;s.push(b,1-P)}x(),d()}function d(){for(let _=0;_<s.length;_+=6){const v=s[_+0],b=s[_+2],P=s[_+4],E=Math.max(v,b,P),A=Math.min(v,b,P);E>.9&&A<.1&&(v<.2&&(s[_+0]+=1),b<.2&&(s[_+2]+=1),P<.2&&(s[_+4]+=1))}}function h(_){o.push(_.x,_.y,_.z)}function p(_,v){const b=_*3;v.x=e[b+0],v.y=e[b+1],v.z=e[b+2]}function x(){const _=new ot,v=new ot,b=new ot,P=new ot,E=new Jt,A=new Jt,T=new Jt;for(let S=0,M=0;S<o.length;S+=9,M+=6){_.set(o[S+0],o[S+1],o[S+2]),v.set(o[S+3],o[S+4],o[S+5]),b.set(o[S+6],o[S+7],o[S+8]),E.set(s[M+0],s[M+1]),A.set(s[M+2],s[M+3]),T.set(s[M+4],s[M+5]),P.copy(_).add(v).add(b).divideScalar(3);const I=m(P);g(E,M+0,_,I),g(A,M+2,v,I),g(T,M+4,b,I)}}function g(_,v,b,P){P<0&&_.x===1&&(s[v]=_.x-1),b.x===0&&b.z===0&&(s[v]=P/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ho(e.vertices,e.indices,e.radius,e.details)}}class Tn extends ho{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,s,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Tn(e.radius,e.detail)}}class Js extends ho{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Js(e.radius,e.detail)}}class Yi extends Ee{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,s=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=t/l,p=[],x=[],g=[],m=[];for(let f=0;f<u;f++){const _=f*h-s;for(let v=0;v<c;v++){const b=v*d-o;x.push(b,-_,0),g.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const v=_+c*f,b=_+c*(f+1),P=_+1+c*(f+1),E=_+1+c*f;p.push(v,b,E),p.push(b,P,E)}this.setIndex(p),this.setAttribute("position",new ue(x,3)),this.setAttribute("normal",new ue(g,3)),this.setAttribute("uv",new ue(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qs extends Ee{constructor(e=1,t=32,n=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(s+a,Math.PI);let c=0;const u=[],d=new ot,h=new ot,p=[],x=[],g=[],m=[];for(let f=0;f<=n;f++){const _=[],v=f/n;let b=0;f===0&&s===0?b=.5/t:f===n&&l===Math.PI&&(b=-.5/t);for(let P=0;P<=t;P++){const E=P/t;d.x=-e*Math.cos(r+E*o)*Math.sin(s+v*a),d.y=e*Math.cos(s+v*a),d.z=e*Math.sin(r+E*o)*Math.sin(s+v*a),x.push(d.x,d.y,d.z),h.copy(d).normalize(),g.push(h.x,h.y,h.z),m.push(E+b,1-v),_.push(c++)}u.push(_)}for(let f=0;f<n;f++)for(let _=0;_<t;_++){const v=u[f][_+1],b=u[f][_],P=u[f+1][_],E=u[f+1][_+1];(f!==0||s>0)&&p.push(v,b,E),(f!==n-1||l<Math.PI)&&p.push(b,P,E)}this.setIndex(p),this.setAttribute("position",new ue(x,3)),this.setAttribute("normal",new ue(g,3)),this.setAttribute("uv",new ue(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fi extends qi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=B0,this.normalScale=new Jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zc extends qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Oc extends qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Na={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Bc{constructor(e,t,n){const r=this;let o=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const p=c[d],x=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return x}return null}}}const Hc=new Bc;class ta{constructor(e){this.manager=e!==void 0?e:Hc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ta.DEFAULT_MATERIAL_NAME="__DEFAULT";class Wc extends ta{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=Na.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0),s;const a=pr("img");function l(){u(),Na.add(e,this),t&&t(this),o.manager.itemEnd(e)}function c(d){u(),r&&r(d),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class Gc extends ta{constructor(e){super(e)}load(e,t,n,r){const o=new ke,s=new Wc(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}}class el extends ye{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Vc extends el{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Wo=new Xt,za=new ot,Oa=new ot;class Yc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Jt(512,512),this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ks,this._frameExtents=new Jt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;za.setFromMatrixPosition(e.matrixWorld),t.position.copy(za),Oa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Oa),t.updateMatrixWorld(),Wo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class nl extends j0{constructor(e=-1,t=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,s=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xc extends Yc{constructor(){super(new nl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zc extends el{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new Xc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qc extends je{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function Ba(i,e,t,n){const r=$c(n);switch(t){case k0:return i*e;case F0:return i*e;case N0:return i*e*2;case Vs:return i*e/r.components*r.byteLength;case Ys:return i*e/r.components*r.byteLength;case z0:return i*e*2/r.components*r.byteLength;case Xs:return i*e*2/r.components*r.byteLength;case U0:return i*e*3/r.components*r.byteLength;case ln:return i*e*4/r.components*r.byteLength;case Zs:return i*e*4/r.components*r.byteLength;case jr:case Jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qr:case to:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case us:case hs:return Math.max(i,16)*Math.max(e,8)/4;case cs:case ds:return Math.max(i,8)*Math.max(e,8)/2;case fs:case ps:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ms:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gs:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case bs:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ms:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case _s:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ss:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case vs:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ws:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ys:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Es:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ts:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Rs:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case As:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Cs:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case eo:case Ps:case Ls:return Math.ceil(i/4)*Math.ceil(e/4)*16;case O0:case Is:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ds:case ks:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $c(i){switch(i){case Ln:case L0:return{byteLength:1,components:1};case fr:case I0:case mr:return{byteLength:2,components:1};case Ws:case Gs:return{byteLength:2,components:4};case ci:case Hs:case pn:return{byteLength:4,components:1};case D0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bs);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function il(){let i=null,e=!1,t=null,n=null;function r(o,s){t(o,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Kc(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<d.length;p++){const x=d[h],g=d[p];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++h,d[h]=g)}d.length=h+1;for(let p=0,x=d.length;p<x;p++){const g=d[p];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}var jc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jc=`#ifdef USE_ALPHAHASH
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
#endif`,Qc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iu=`#ifdef USE_AOMAP
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
#endif`,ru=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ou=`#ifdef USE_BATCHING
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
#endif`,su=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,au=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uu=`#ifdef USE_IRIDESCENCE
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
#endif`,du=`#ifdef USE_BUMPMAP
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
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_u=`#define PI 3.141592653589793
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
} // validated`,Su=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vu=`vec3 transformedNormal = objectNormal;
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
#endif`,wu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Eu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ru="gl_FragColor = linearToOutputTexel( gl_FragColor );",Au=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cu=`#ifdef USE_ENVMAP
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
#endif`,Pu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lu=`#ifdef USE_ENVMAP
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
#endif`,Iu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Du=`#ifdef USE_ENVMAP
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
#endif`,ku=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zu=`#ifdef USE_GRADIENTMAP
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
}`,Ou=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wu=`uniform bool receiveShadow;
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
#endif`,Gu=`#ifdef USE_ENVMAP
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
#endif`,Vu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qu=`PhysicalMaterial material;
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
#endif`,$u=`struct PhysicalMaterial {
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
}`,Ku=`
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
#endif`,ju=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ju=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,td=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ed=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,id=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,od=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sd=`#if defined( USE_POINTS_UV )
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
#endif`,ad=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ld=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ud=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hd=`#ifdef USE_MORPHTARGETS
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
#endif`,fd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,md=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Md=`#ifdef USE_NORMALMAP
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
#endif`,_d=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ed=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Td=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ad=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ld=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Id=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ud=`float getShadowMask() {
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
}`,Fd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nd=`#ifdef USE_SKINNING
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
#endif`,zd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Od=`#ifdef USE_SKINNING
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
#endif`,Bd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vd=`#ifdef USE_TRANSMISSION
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
#endif`,Yd=`#ifdef USE_TRANSMISSION
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
#endif`,Xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$d=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jd=`uniform sampler2D t2D;
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
}`,Jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,th=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nh=`#include <common>
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
}`,ih=`#if DEPTH_PACKING == 3200
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
}`,rh=`#define DISTANCE
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
}`,oh=`#define DISTANCE
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
}`,sh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ah=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lh=`uniform float scale;
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
}`,ch=`uniform vec3 diffuse;
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
}`,uh=`#include <common>
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
}`,dh=`uniform vec3 diffuse;
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
}`,hh=`#define LAMBERT
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
}`,fh=`#define LAMBERT
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
}`,ph=`#define MATCAP
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
}`,mh=`#define MATCAP
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
}`,xh=`#define NORMAL
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
}`,gh=`#define NORMAL
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
}`,bh=`#define PHONG
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
}`,Mh=`#define PHONG
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
}`,_h=`#define STANDARD
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
}`,Sh=`#define STANDARD
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
}`,vh=`#define TOON
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
}`,wh=`#define TOON
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
}`,yh=`uniform float size;
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
}`,Eh=`uniform vec3 diffuse;
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
}`,Th=`#include <common>
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
}`,Rh=`uniform vec3 color;
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
}`,Ah=`uniform float rotation;
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
}`,Ch=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:jc,alphahash_pars_fragment:Jc,alphamap_fragment:Qc,alphamap_pars_fragment:tu,alphatest_fragment:eu,alphatest_pars_fragment:nu,aomap_fragment:iu,aomap_pars_fragment:ru,batching_pars_vertex:ou,batching_vertex:su,begin_vertex:au,beginnormal_vertex:lu,bsdfs:cu,iridescence_fragment:uu,bumpmap_pars_fragment:du,clipping_planes_fragment:hu,clipping_planes_pars_fragment:fu,clipping_planes_pars_vertex:pu,clipping_planes_vertex:mu,color_fragment:xu,color_pars_fragment:gu,color_pars_vertex:bu,color_vertex:Mu,common:_u,cube_uv_reflection_fragment:Su,defaultnormal_vertex:vu,displacementmap_pars_vertex:wu,displacementmap_vertex:yu,emissivemap_fragment:Eu,emissivemap_pars_fragment:Tu,colorspace_fragment:Ru,colorspace_pars_fragment:Au,envmap_fragment:Cu,envmap_common_pars_fragment:Pu,envmap_pars_fragment:Lu,envmap_pars_vertex:Iu,envmap_physical_pars_fragment:Gu,envmap_vertex:Du,fog_vertex:ku,fog_pars_vertex:Uu,fog_fragment:Fu,fog_pars_fragment:Nu,gradientmap_pars_fragment:zu,lightmap_pars_fragment:Ou,lights_lambert_fragment:Bu,lights_lambert_pars_fragment:Hu,lights_pars_begin:Wu,lights_toon_fragment:Vu,lights_toon_pars_fragment:Yu,lights_phong_fragment:Xu,lights_phong_pars_fragment:Zu,lights_physical_fragment:qu,lights_physical_pars_fragment:$u,lights_fragment_begin:Ku,lights_fragment_maps:ju,lights_fragment_end:Ju,logdepthbuf_fragment:Qu,logdepthbuf_pars_fragment:td,logdepthbuf_pars_vertex:ed,logdepthbuf_vertex:nd,map_fragment:id,map_pars_fragment:rd,map_particle_fragment:od,map_particle_pars_fragment:sd,metalnessmap_fragment:ad,metalnessmap_pars_fragment:ld,morphinstance_vertex:cd,morphcolor_vertex:ud,morphnormal_vertex:dd,morphtarget_pars_vertex:hd,morphtarget_vertex:fd,normal_fragment_begin:pd,normal_fragment_maps:md,normal_pars_fragment:xd,normal_pars_vertex:gd,normal_vertex:bd,normalmap_pars_fragment:Md,clearcoat_normal_fragment_begin:_d,clearcoat_normal_fragment_maps:Sd,clearcoat_pars_fragment:vd,iridescence_pars_fragment:wd,opaque_fragment:yd,packing:Ed,premultiplied_alpha_fragment:Td,project_vertex:Rd,dithering_fragment:Ad,dithering_pars_fragment:Cd,roughnessmap_fragment:Pd,roughnessmap_pars_fragment:Ld,shadowmap_pars_fragment:Id,shadowmap_pars_vertex:Dd,shadowmap_vertex:kd,shadowmask_pars_fragment:Ud,skinbase_vertex:Fd,skinning_pars_vertex:Nd,skinning_vertex:zd,skinnormal_vertex:Od,specularmap_fragment:Bd,specularmap_pars_fragment:Hd,tonemapping_fragment:Wd,tonemapping_pars_fragment:Gd,transmission_fragment:Vd,transmission_pars_fragment:Yd,uv_pars_fragment:Xd,uv_pars_vertex:Zd,uv_vertex:qd,worldpos_vertex:$d,background_vert:Kd,background_frag:jd,backgroundCube_vert:Jd,backgroundCube_frag:Qd,cube_vert:th,cube_frag:eh,depth_vert:nh,depth_frag:ih,distanceRGBA_vert:rh,distanceRGBA_frag:oh,equirect_vert:sh,equirect_frag:ah,linedashed_vert:lh,linedashed_frag:ch,meshbasic_vert:uh,meshbasic_frag:dh,meshlambert_vert:hh,meshlambert_frag:fh,meshmatcap_vert:ph,meshmatcap_frag:mh,meshnormal_vert:xh,meshnormal_frag:gh,meshphong_vert:bh,meshphong_frag:Mh,meshphysical_vert:_h,meshphysical_frag:Sh,meshtoon_vert:vh,meshtoon_frag:wh,points_vert:yh,points_frag:Eh,shadow_vert:Th,shadow_frag:Rh,sprite_vert:Ah,sprite_frag:Ch},Pt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},hn={basic:{uniforms:Fe([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Fe([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Fe([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Fe([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Fe([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Fe([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Fe([Pt.points,Pt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Fe([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Fe([Pt.common,Pt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Fe([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Fe([Pt.sprite,Pt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Fe([Pt.common,Pt.displacementmap,{referencePosition:{value:new ot},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Fe([Pt.lights,Pt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};hn.physical={uniforms:Fe([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Hr={r:0,b:0,g:0},Kn=new dn,Ph=new Xt;function Lh(i,e,t,n,r,o,s){const a=new Vt(0);let l=o===!0?0:1,c,u,d=null,h=0,p=null;function x(v){let b=v.isScene===!0?v.background:null;return b&&b.isTexture&&(b=(v.backgroundBlurriness>0?t:e).get(b)),b}function g(v){let b=!1;const P=x(v);P===null?f(a,l):P&&P.isColor&&(f(P,1),b=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,b){const P=x(b);P&&(P.isCubeTexture||P.mapping===uo)?(u===void 0&&(u=new It(new Yt(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:Vi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Kn.copy(b.backgroundRotation),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ph.makeRotationFromEuler(Kn)),u.material.toneMapped=ee.getTransfer(P.colorSpace)!==se,(d!==P||h!==P.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=P,h=P.version,p=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new It(new Yi(2,2),new xn({name:"BackgroundMaterial",uniforms:Vi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ee.getTransfer(P.colorSpace)!==se,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(d!==P||h!==P.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=P,h=P.version,p=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function f(v,b){v.getRGB(Hr,K0(i)),n.buffers.color.setClear(Hr.r,Hr.g,Hr.b,b,s)}function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),l=b,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,f(a,l)},render:g,addToRenderList:m,dispose:_}}function Ih(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let o=r,s=!1;function a(M,I,O,k,U){let D=!1;const w=d(k,O,I);o!==w&&(o=w,c(o.object)),D=p(M,k,O,U),D&&x(M,k,O,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(D||s)&&(s=!1,b(M,I,O,k),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function d(M,I,O){const k=O.wireframe===!0;let U=n[M.id];U===void 0&&(U={},n[M.id]=U);let D=U[I.id];D===void 0&&(D={},U[I.id]=D);let w=D[k];return w===void 0&&(w=h(l()),D[k]=w),w}function h(M){const I=[],O=[],k=[];for(let U=0;U<t;U++)I[U]=0,O[U]=0,k[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:k,object:M,attributes:{},index:null}}function p(M,I,O,k){const U=o.attributes,D=I.attributes;let w=0;const y=O.getAttributes();for(const F in y)if(y[F].location>=0){const Y=U[F];let X=D[F];if(X===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(X=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(X=M.instanceColor)),Y===void 0||Y.attribute!==X||X&&Y.data!==X.data)return!0;w++}return o.attributesNum!==w||o.index!==k}function x(M,I,O,k){const U={},D=I.attributes;let w=0;const y=O.getAttributes();for(const F in y)if(y[F].location>=0){let Y=D[F];Y===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(Y=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(Y=M.instanceColor));const X={};X.attribute=Y,Y&&Y.data&&(X.data=Y.data),U[F]=X,w++}o.attributes=U,o.attributesNum=w,o.index=k}function g(){const M=o.newAttributes;for(let I=0,O=M.length;I<O;I++)M[I]=0}function m(M){f(M,0)}function f(M,I){const O=o.newAttributes,k=o.enabledAttributes,U=o.attributeDivisors;O[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),U[M]!==I&&(i.vertexAttribDivisor(M,I),U[M]=I)}function _(){const M=o.newAttributes,I=o.enabledAttributes;for(let O=0,k=I.length;O<k;O++)I[O]!==M[O]&&(i.disableVertexAttribArray(O),I[O]=0)}function v(M,I,O,k,U,D,w){w===!0?i.vertexAttribIPointer(M,I,O,U,D):i.vertexAttribPointer(M,I,O,k,U,D)}function b(M,I,O,k){g();const U=k.attributes,D=O.getAttributes(),w=I.defaultAttributeValues;for(const y in D){const F=D[y];if(F.location>=0){let q=U[y];if(q===void 0&&(y==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),y==="instanceColor"&&M.instanceColor&&(q=M.instanceColor)),q!==void 0){const Y=q.normalized,X=q.itemSize,L=e.get(q);if(L===void 0)continue;const $=L.buffer,N=L.type,H=L.bytesPerElement,K=N===i.INT||N===i.UNSIGNED_INT||q.gpuType===Hs;if(q.isInterleavedBufferAttribute){const V=q.data,G=V.stride,Z=q.offset;if(V.isInstancedInterleavedBuffer){for(let B=0;B<F.locationSize;B++)f(F.location+B,V.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let B=0;B<F.locationSize;B++)m(F.location+B);i.bindBuffer(i.ARRAY_BUFFER,$);for(let B=0;B<F.locationSize;B++)v(F.location+B,X/F.locationSize,N,Y,G*H,(Z+X/F.locationSize*B)*H,K)}else{if(q.isInstancedBufferAttribute){for(let V=0;V<F.locationSize;V++)f(F.location+V,q.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let V=0;V<F.locationSize;V++)m(F.location+V);i.bindBuffer(i.ARRAY_BUFFER,$);for(let V=0;V<F.locationSize;V++)v(F.location+V,X/F.locationSize,N,Y,X*H,X/F.locationSize*V*H,K)}}else if(w!==void 0){const Y=w[y];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(F.location,Y);break;case 3:i.vertexAttrib3fv(F.location,Y);break;case 4:i.vertexAttrib4fv(F.location,Y);break;default:i.vertexAttrib1fv(F.location,Y)}}}}_()}function P(){T();for(const M in n){const I=n[M];for(const O in I){const k=I[O];for(const U in k)u(k[U].object),delete k[U];delete I[O]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const I=n[M.id];for(const O in I){const k=I[O];for(const U in k)u(k[U].object),delete k[U];delete I[O]}delete n[M.id]}function A(M){for(const I in n){const O=n[I];if(O[M.id]===void 0)continue;const k=O[M.id];for(const U in k)u(k[U].object),delete k[U];delete O[M.id]}}function T(){S(),s=!0,o!==r&&(o=r,c(o.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:_}}function Dh(i,e,t){let n;function r(c){n=c}function o(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function s(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x];t.update(p,n,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)s(c[x],u[x],h[x]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let x=0;for(let g=0;g<d;g++)x+=u[g]*h[g];t.update(x,n,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function kh(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==ln&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const T=A===mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ln&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==pn&&!T)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=x>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:b,vertexTextures:P,maxSamples:E}}function Uh(i){const e=this;let t=null,n=0,r=!1,o=!1;const s=new ni,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||r;return r=h,n=d.length,p},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const x=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!r||x===null||x.length===0||o&&!m)o?u(null):c();else{const _=o?0:n,v=_*4;let b=f.clippingState||null;l.value=b,b=u(x,h,v,p);for(let P=0;P!==v;++P)b[P]=t[P];f.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,p,x){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,x!==!0||m===null){const f=p+g*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,b=p;v!==g;++v,b+=4)s.copy(d[v]).applyMatrix4(_,a),s.normal.toArray(m,b),m[b+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Fh(i){let e=new WeakMap;function t(s,a){return a===ss?s.mapping=Oi:a===as&&(s.mapping=Bi),s}function n(s){if(s&&s.isTexture){const a=s.mapping;if(a===ss||a===as)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Pc(l.height);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}const Ii=4,Ha=[.125,.215,.35,.446,.526,.582],oi=20,Go=new nl,Wa=new Vt;let Vo=null,Yo=0,Xo=0,Zo=!1;const ii=(1+Math.sqrt(5))/2,Ri=1/ii,Ga=[new ot(-ii,Ri,0),new ot(ii,Ri,0),new ot(-Ri,0,ii),new ot(Ri,0,ii),new ot(0,ii,-Ri),new ot(0,ii,Ri),new ot(-1,1,-1),new ot(1,1,-1),new ot(-1,1,1),new ot(1,1,1)],Nh=new ot;class Va{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,o={}){const{size:s=256,position:a=Nh}=o;Vo=this._renderer.getRenderTarget(),Yo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),Zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Za(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vo,Yo,Xo),this._renderer.xr.enabled=Zo,e.scissorTest=!1,Wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oi||e.mapping===Bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vo=this._renderer.getRenderTarget(),Yo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),Zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:mr,format:ln,colorSpace:Gi,depthBuffer:!1},r=Ya(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ya(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zh(o)),this._blurMaterial=Oh(o,e,t)}return r}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,Go)}_sceneToCubeUV(e,t,n,r,o){const l=new je(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Wa),d.toneMapping=Vn,d.autoClear=!1;const x=new Z0({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),g=new It(new Yt,x);let m=!1;const f=e.background;f?f.isColor&&(x.color.copy(f),e.background=null,m=!0):(x.color.copy(Wa),m=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(l.up.set(0,c[_],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+u[_],o.y,o.z)):v===1?(l.up.set(0,0,c[_]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+u[_],o.z)):(l.up.set(0,c[_],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+u[_]));const b=this._cubeSize;Wr(r,v*b,_>2?b:0,b,b),d.setRenderTarget(r),m&&d.render(g,l),d.render(e,l)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=p,d.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Oi||e.mapping===Bi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Za()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xa());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new It(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Wr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Go)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Ga[(r-o-1)%Ga.length];this._blur(e,o-1,o,s,a)}t.autoClear=n}_blur(e,t,n,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",o),this._halfBlur(s,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new It(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*oi-1),g=o/x,m=isFinite(o)?1+Math.floor(u*g):oi;m>oi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${oi}`);const f=[];let _=0;for(let A=0;A<oi;++A){const T=A/g,S=Math.exp(-T*T/2);f.push(S),A===0?_+=S:A<m&&(_+=2*S)}for(let A=0;A<f.length;A++)f[A]=f[A]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=x,h.mipInt.value=v-n;const b=this._sizeLods[r],P=3*b*(r>v-Ii?r-v+Ii:0),E=4*(this._cubeSize-b);Wr(t,P,E,3*b,2*b),l.setRenderTarget(t),l.render(d,Go)}}function zh(i){const e=[],t=[],n=[];let r=i;const o=i-Ii+1+Ha.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);t.push(a);let l=1/a;s>i-Ii?l=Ha[s-i+Ii-1]:s===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,x=6,g=3,m=2,f=1,_=new Float32Array(g*x*p),v=new Float32Array(m*x*p),b=new Float32Array(f*x*p);for(let E=0;E<p;E++){const A=E%3*2/3-1,T=E>2?0:-1,S=[A,T,0,A+2/3,T,0,A+2/3,T+1,0,A,T,0,A+2/3,T+1,0,A,T+1,0];_.set(S,g*x*E),v.set(h,m*x*E);const M=[E,E,E,E,E,E];b.set(M,f*x*E)}const P=new Ee;P.setAttribute("position",new pe(_,g)),P.setAttribute("uv",new pe(v,m)),P.setAttribute("faceIndex",new pe(b,f)),e.push(P),r>Ii&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ya(i,e,t){const n=new ui(i,e,t);return n.texture.mapping=uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Oh(i,e,t){const n=new Float32Array(oi),r=new ot(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ea(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Xa(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ea(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Za(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function ea(){return`

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
	`}function Bh(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ss||l===as,u=l===Oi||l===Bi;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Va(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Va(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function Hh(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ei("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Wh(i,e,t,n){const r={},o=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",s),delete r[h.id];const p=o.get(h);p&&(e.remove(p),o.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],i.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,x=d.attributes.position;let g=0;if(p!==null){const _=p.array;g=p.version;for(let v=0,b=_.length;v<b;v+=3){const P=_[v+0],E=_[v+1],A=_[v+2];h.push(P,E,E,A,A,P)}}else if(x!==void 0){const _=x.array;g=x.version;for(let v=0,b=_.length/3-1;v<b;v+=3){const P=v+0,E=v+1,A=v+2;h.push(P,E,E,A,A,P)}}else return;const m=new(W0(h)?$0:q0)(h,1);m.version=g;const f=o.get(d);f&&e.remove(f),o.set(d,m)}function u(d){const h=o.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Gh(i,e,t){let n;function r(h){n=h}let o,s;function a(h){o=h.type,s=h.bytesPerElement}function l(h,p){i.drawElements(n,p,o,h*s),t.update(p,n,1)}function c(h,p,x){x!==0&&(i.drawElementsInstanced(n,p,o,h*s,x),t.update(p,n,x))}function u(h,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,o,h,0,x);let m=0;for(let f=0;f<x;f++)m+=p[f];t.update(m,n,1)}function d(h,p,x,g){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/s,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,o,h,0,g,0,x);let f=0;for(let _=0;_<x;_++)f+=p[_]*g[_];t.update(f,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Vh(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Yh(i,e,t){const n=new WeakMap,r=new _e;function o(s,a,l){const c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let M=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;h!==void 0&&h.texture.dispose();const x=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let b=0;x===!0&&(b=1),g===!0&&(b=2),m===!0&&(b=3);let P=a.attributes.position.count*b,E=1;P>e.maxTextureSize&&(E=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const A=new Float32Array(P*E*4*d),T=new G0(A,P,E,d);T.type=pn,T.needsUpdate=!0;const S=b*4;for(let I=0;I<d;I++){const O=f[I],k=_[I],U=v[I],D=P*E*4*I;for(let w=0;w<O.count;w++){const y=w*S;x===!0&&(r.fromBufferAttribute(O,w),A[D+y+0]=r.x,A[D+y+1]=r.y,A[D+y+2]=r.z,A[D+y+3]=0),g===!0&&(r.fromBufferAttribute(k,w),A[D+y+4]=r.x,A[D+y+5]=r.y,A[D+y+6]=r.z,A[D+y+7]=0),m===!0&&(r.fromBufferAttribute(U,w),A[D+y+8]=r.x,A[D+y+9]=r.y,A[D+y+10]=r.z,A[D+y+11]=U.itemSize===4?r.w:1)}}h={count:d,texture:T,size:new Jt(P,E)},n.set(a,h),a.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const g=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:o}}function Xh(i,e,t,n){let r=new WeakMap;function o(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:s}}const rl=new ke,qa=new tl(1,1),ol=new G0,sl=new fc,al=new J0,$a=[],Ka=[],ja=new Float32Array(16),Ja=new Float32Array(9),Qa=new Float32Array(4);function $i(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let o=$a[r];if(o===void 0&&(o=new Float32Array(r),$a[r]=o),e!==0){n.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(o,a)}return o}function Te(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Re(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fo(i,e){let t=Ka[e];t===void 0&&(t=new Int32Array(e),Ka[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Zh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function qh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Te(t,e))return;i.uniform2fv(this.addr,e),Re(t,e)}}function $h(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Te(t,e))return;i.uniform3fv(this.addr,e),Re(t,e)}}function Kh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Te(t,e))return;i.uniform4fv(this.addr,e),Re(t,e)}}function jh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Te(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Re(t,e)}else{if(Te(t,n))return;Qa.set(n),i.uniformMatrix2fv(this.addr,!1,Qa),Re(t,n)}}function Jh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Te(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Re(t,e)}else{if(Te(t,n))return;Ja.set(n),i.uniformMatrix3fv(this.addr,!1,Ja),Re(t,n)}}function Qh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Te(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Re(t,e)}else{if(Te(t,n))return;ja.set(n),i.uniformMatrix4fv(this.addr,!1,ja),Re(t,n)}}function tf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ef(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Te(t,e))return;i.uniform2iv(this.addr,e),Re(t,e)}}function nf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Te(t,e))return;i.uniform3iv(this.addr,e),Re(t,e)}}function rf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Te(t,e))return;i.uniform4iv(this.addr,e),Re(t,e)}}function of(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function sf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Te(t,e))return;i.uniform2uiv(this.addr,e),Re(t,e)}}function af(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Te(t,e))return;i.uniform3uiv(this.addr,e),Re(t,e)}}function lf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Te(t,e))return;i.uniform4uiv(this.addr,e),Re(t,e)}}function cf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(qa.compareFunction=H0,o=qa):o=rl,t.setTexture2D(e||o,r)}function uf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||sl,r)}function df(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||al,r)}function hf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ol,r)}function ff(i){switch(i){case 5126:return Zh;case 35664:return qh;case 35665:return $h;case 35666:return Kh;case 35674:return jh;case 35675:return Jh;case 35676:return Qh;case 5124:case 35670:return tf;case 35667:case 35671:return ef;case 35668:case 35672:return nf;case 35669:case 35673:return rf;case 5125:return of;case 36294:return sf;case 36295:return af;case 36296:return lf;case 35678:case 36198:case 36298:case 36306:case 35682:return cf;case 35679:case 36299:case 36307:return uf;case 35680:case 36300:case 36308:case 36293:return df;case 36289:case 36303:case 36311:case 36292:return hf}}function pf(i,e){i.uniform1fv(this.addr,e)}function mf(i,e){const t=$i(e,this.size,2);i.uniform2fv(this.addr,t)}function xf(i,e){const t=$i(e,this.size,3);i.uniform3fv(this.addr,t)}function gf(i,e){const t=$i(e,this.size,4);i.uniform4fv(this.addr,t)}function bf(i,e){const t=$i(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Mf(i,e){const t=$i(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function _f(i,e){const t=$i(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Sf(i,e){i.uniform1iv(this.addr,e)}function vf(i,e){i.uniform2iv(this.addr,e)}function wf(i,e){i.uniform3iv(this.addr,e)}function yf(i,e){i.uniform4iv(this.addr,e)}function Ef(i,e){i.uniform1uiv(this.addr,e)}function Tf(i,e){i.uniform2uiv(this.addr,e)}function Rf(i,e){i.uniform3uiv(this.addr,e)}function Af(i,e){i.uniform4uiv(this.addr,e)}function Cf(i,e,t){const n=this.cache,r=e.length,o=fo(t,r);Te(n,o)||(i.uniform1iv(this.addr,o),Re(n,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||rl,o[s])}function Pf(i,e,t){const n=this.cache,r=e.length,o=fo(t,r);Te(n,o)||(i.uniform1iv(this.addr,o),Re(n,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||sl,o[s])}function Lf(i,e,t){const n=this.cache,r=e.length,o=fo(t,r);Te(n,o)||(i.uniform1iv(this.addr,o),Re(n,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||al,o[s])}function If(i,e,t){const n=this.cache,r=e.length,o=fo(t,r);Te(n,o)||(i.uniform1iv(this.addr,o),Re(n,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||ol,o[s])}function Df(i){switch(i){case 5126:return pf;case 35664:return mf;case 35665:return xf;case 35666:return gf;case 35674:return bf;case 35675:return Mf;case 35676:return _f;case 5124:case 35670:return Sf;case 35667:case 35671:return vf;case 35668:case 35672:return wf;case 35669:case 35673:return yf;case 5125:return Ef;case 36294:return Tf;case 36295:return Rf;case 36296:return Af;case 35678:case 36198:case 36298:case 36306:case 35682:return Cf;case 35679:case 36299:case 36307:return Pf;case 35680:case 36300:case 36308:case 36293:return Lf;case 36289:case 36303:case 36311:case 36292:return If}}class kf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ff(t.type)}}class Uf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Df(t.type)}}class Ff{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,t[a.id],n)}}}const qo=/(\w+)(\])?(\[|\.)?/g;function t0(i,e){i.seq.push(e),i.map[e.id]=e}function Nf(i,e,t){const n=i.name,r=n.length;for(qo.lastIndex=0;;){const o=qo.exec(n),s=qo.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){t0(t,c===void 0?new kf(a,i,e):new Uf(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Ff(a),t0(t,d)),t=d}}}class no{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);Nf(o,s,this)}}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,s=t.length;o!==s;++o){const a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function e0(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const zf=37297;let Of=0;function Bf(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){const a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}const n0=new qt;function Hf(i){ee._getMatrix(n0,ee.workingColorSpace,i);const e=`mat3( ${n0.elements.map(t=>t.toFixed(4))} )`;switch(ee.getTransfer(i)){case ro:return[e,"LinearTransferOETF"];case se:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function i0(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Bf(i.getShaderSource(e),s)}else return r}function Wf(i,e){const t=Hf(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Gf(i,e){let t;switch(e){case Bl:t="Linear";break;case Hl:t="Reinhard";break;case Wl:t="Cineon";break;case C0:t="ACESFilmic";break;case Vl:t="AgX";break;case Yl:t="Neutral";break;case Gl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Gr=new ot;function Vf(){ee.getLuminanceCoefficients(Gr);const i=Gr.x.toFixed(4),e=Gr.y.toFixed(4),t=Gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function Xf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Zf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(e,r),s=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function dr(i){return i!==""}function r0(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function o0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fs(i){return i.replace(qf,Kf)}const $f=new Map;function Kf(i,e){let t=$t[e];if(t===void 0){const n=$f.get(e);if(n!==void 0)t=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Fs(t)}const jf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function s0(i){return i.replace(jf,Jf)}function Jf(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function a0(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qf(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===T0?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===R0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yn&&(e="SHADOWMAP_TYPE_VSM"),e}function tp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Oi:case Bi:e="ENVMAP_TYPE_CUBE";break;case uo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ep(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bi:e="ENVMAP_MODE_REFRACTION";break}return e}function np(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case A0:e="ENVMAP_BLENDING_MULTIPLY";break;case zl:e="ENVMAP_BLENDING_MIX";break;case Ol:e="ENVMAP_BLENDING_ADD";break}return e}function ip(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function rp(i,e,t,n){const r=i.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=Qf(t),c=tp(t),u=ep(t),d=np(t),h=ip(t),p=Yf(t),x=Xf(o),g=r.createProgram();let m,f,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(dr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(dr).join(`
`),f.length>0&&(f+=`
`)):(m=[a0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),f=[a0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?$t.tonemapping_pars_fragment:"",t.toneMapping!==Vn?Gf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Wf("linearToOutputTexel",t.outputColorSpace),Vf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),s=Fs(s),s=r0(s,t),s=o0(s,t),a=Fs(a),a=r0(a,t),a=o0(a,t),s=s0(s),a=s0(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===fa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=_+m+s,b=_+f+a,P=e0(r,r.VERTEX_SHADER,v),E=e0(r,r.FRAGMENT_SHADER,b);r.attachShader(g,P),r.attachShader(g,E),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(I){if(i.debug.checkShaderErrors){const O=r.getProgramInfoLog(g).trim(),k=r.getShaderInfoLog(P).trim(),U=r.getShaderInfoLog(E).trim();let D=!0,w=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,P,E);else{const y=i0(r,P,"vertex"),F=i0(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+y+`
`+F)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(k===""||U==="")&&(w=!1);w&&(I.diagnostics={runnable:D,programLog:O,vertexShader:{log:k,prefix:m},fragmentShader:{log:U,prefix:f}})}r.deleteShader(P),r.deleteShader(E),T=new no(r,g),S=Zf(r,g)}let T;this.getUniforms=function(){return T===void 0&&A(this),T};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(g,zf)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Of++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=E,this}let op=0;class sp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ap(e),t.set(e,n)),n}}class ap{constructor(e){this.id=op++,this.code=e,this.usedTimes=0}}function lp(i,e,t,n,r,o,s){const a=new Y0,l=new sp,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,I,O,k){const U=O.fog,D=k.geometry,w=S.isMeshStandardMaterial?O.environment:null,y=(S.isMeshStandardMaterial?t:e).get(S.envMap||w),F=y&&y.mapping===uo?y.image.height:null,q=x[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const Y=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,X=Y!==void 0?Y.length:0;let L=0;D.morphAttributes.position!==void 0&&(L=1),D.morphAttributes.normal!==void 0&&(L=2),D.morphAttributes.color!==void 0&&(L=3);let $,N,H,K;if(q){const ne=hn[q];$=ne.vertexShader,N=ne.fragmentShader}else $=S.vertexShader,N=S.fragmentShader,l.update(S),H=l.getVertexShaderID(S),K=l.getFragmentShaderID(S);const V=i.getRenderTarget(),G=i.state.buffers.depth.getReversed(),Z=k.isInstancedMesh===!0,B=k.isBatchedMesh===!0,J=!!S.map,lt=!!S.matcap,ht=!!y,z=!!S.aoMap,ut=!!S.lightMap,et=!!S.bumpMap,rt=!!S.normalMap,ct=!!S.displacementMap,Q=!!S.emissiveMap,j=!!S.metalnessMap,C=!!S.roughnessMap,R=S.anisotropy>0,tt=S.clearcoat>0,it=S.dispersion>0,ft=S.iridescence>0,st=S.sheen>0,yt=S.transmission>0,gt=R&&!!S.anisotropyMap,Mt=tt&&!!S.clearcoatMap,zt=tt&&!!S.clearcoatNormalMap,_t=tt&&!!S.clearcoatRoughnessMap,Tt=ft&&!!S.iridescenceMap,Dt=ft&&!!S.iridescenceThicknessMap,Ft=st&&!!S.sheenColorMap,wt=st&&!!S.sheenRoughnessMap,Nt=!!S.specularMap,Et=!!S.specularColorMap,Ht=!!S.specularIntensityMap,nt=yt&&!!S.transmissionMap,vt=yt&&!!S.thicknessMap,mt=!!S.gradientMap,bt=!!S.alphaMap,Rt=S.alphaTest>0,At=!!S.alphaHash,Ct=!!S.extensions;let Zt=Vn;S.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Zt=i.toneMapping);const me={shaderID:q,shaderType:S.type,shaderName:S.name,vertexShader:$,fragmentShader:N,defines:S.defines,customVertexShaderID:H,customFragmentShaderID:K,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:B,batchingColor:B&&k._colorsTexture!==null,instancing:Z,instancingColor:Z&&k.instanceColor!==null,instancingMorph:Z&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:V===null?i.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Gi,alphaToCoverage:!!S.alphaToCoverage,map:J,matcap:lt,envMap:ht,envMapMode:ht&&y.mapping,envMapCubeUVHeight:F,aoMap:z,lightMap:ut,bumpMap:et,normalMap:rt,displacementMap:h&&ct,emissiveMap:Q,normalMapObjectSpace:rt&&S.normalMapType===$l,normalMapTangentSpace:rt&&S.normalMapType===B0,metalnessMap:j,roughnessMap:C,anisotropy:R,anisotropyMap:gt,clearcoat:tt,clearcoatMap:Mt,clearcoatNormalMap:zt,clearcoatRoughnessMap:_t,dispersion:it,iridescence:ft,iridescenceMap:Tt,iridescenceThicknessMap:Dt,sheen:st,sheenColorMap:Ft,sheenRoughnessMap:wt,specularMap:Nt,specularColorMap:Et,specularIntensityMap:Ht,transmission:yt,transmissionMap:nt,thicknessMap:vt,gradientMap:mt,opaque:S.transparent===!1&&S.blending===Di&&S.alphaToCoverage===!1,alphaMap:bt,alphaTest:Rt,alphaHash:At,combine:S.combine,mapUv:J&&g(S.map.channel),aoMapUv:z&&g(S.aoMap.channel),lightMapUv:ut&&g(S.lightMap.channel),bumpMapUv:et&&g(S.bumpMap.channel),normalMapUv:rt&&g(S.normalMap.channel),displacementMapUv:ct&&g(S.displacementMap.channel),emissiveMapUv:Q&&g(S.emissiveMap.channel),metalnessMapUv:j&&g(S.metalnessMap.channel),roughnessMapUv:C&&g(S.roughnessMap.channel),anisotropyMapUv:gt&&g(S.anisotropyMap.channel),clearcoatMapUv:Mt&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:zt&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:wt&&g(S.sheenRoughnessMap.channel),specularMapUv:Nt&&g(S.specularMap.channel),specularColorMapUv:Et&&g(S.specularColorMap.channel),specularIntensityMapUv:Ht&&g(S.specularIntensityMap.channel),transmissionMapUv:nt&&g(S.transmissionMap.channel),thicknessMapUv:vt&&g(S.thicknessMap.channel),alphaMapUv:bt&&g(S.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(rt||R),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!D.attributes.uv&&(J||bt),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:G,skinning:k.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:L,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Zt,decodeVideoTexture:J&&S.map.isVideoTexture===!0&&ee.getTransfer(S.map.colorSpace)===se,decodeVideoTextureEmissive:Q&&S.emissiveMap.isVideoTexture===!0&&ee.getTransfer(S.emissiveMap.colorSpace)===se,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===on,flipSided:S.side===ze,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ct&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&S.extensions.multiDraw===!0||B)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function f(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)M.push(I),M.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(_(M,S),v(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function _(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function v(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function b(S){const M=x[S.type];let I;if(M){const O=hn[M];I=Tc.clone(O.uniforms)}else I=S.uniforms;return I}function P(S,M){let I;for(let O=0,k=u.length;O<k;O++){const U=u[O];if(U.cacheKey===M){I=U,++I.usedTimes;break}}return I===void 0&&(I=new rp(i,M,S,o),u.push(I)),I}function E(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function A(S){l.remove(S)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:P,releaseProgram:E,releaseShaderCache:A,programs:u,dispose:T}}function cp(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,l){i.get(s)[a]=l}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function up(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function l0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function c0(){const i=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function s(d,h,p,x,g,m){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},i[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=g,f.group=m),e++,f}function a(d,h,p,x,g,m){const f=s(d,h,p,x,g,m);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(d,h,p,x,g,m){const f=s(d,h,p,x,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||up),n.length>1&&n.sort(h||l0),r.length>1&&r.sort(h||l0)}function u(){for(let d=e,h=i.length;d<h;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:a,unshift:l,finish:u,sort:c}}function dp(){let i=new WeakMap;function e(n,r){const o=i.get(n);let s;return o===void 0?(s=new c0,i.set(n,[s])):r>=o.length?(s=new c0,o.push(s)):s=o[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function hp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ot,color:new Vt};break;case"SpotLight":t={position:new ot,direction:new ot,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ot,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ot,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":t={color:new Vt,position:new ot,halfWidth:new ot,halfHeight:new ot};break}return i[e.id]=t,t}}}function fp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let pp=0;function mp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function xp(i){const e=new hp,t=fp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new ot);const r=new ot,o=new Xt,s=new Xt;function a(c){let u=0,d=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,x=0,g=0,m=0,f=0,_=0,v=0,b=0,P=0,E=0,A=0;c.sort(mp);for(let S=0,M=c.length;S<M;S++){const I=c[S],O=I.color,k=I.intensity,U=I.distance,D=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=O.r*k,d+=O.g*k,h+=O.b*k;else if(I.isLightProbe){for(let w=0;w<9;w++)n.probe[w].addScaledVector(I.sh.coefficients[w],k);A++}else if(I.isDirectionalLight){const w=e.get(I);if(w.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const y=I.shadow,F=t.get(I);F.shadowIntensity=y.intensity,F.shadowBias=y.bias,F.shadowNormalBias=y.normalBias,F.shadowRadius=y.radius,F.shadowMapSize=y.mapSize,n.directionalShadow[p]=F,n.directionalShadowMap[p]=D,n.directionalShadowMatrix[p]=I.shadow.matrix,_++}n.directional[p]=w,p++}else if(I.isSpotLight){const w=e.get(I);w.position.setFromMatrixPosition(I.matrixWorld),w.color.copy(O).multiplyScalar(k),w.distance=U,w.coneCos=Math.cos(I.angle),w.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),w.decay=I.decay,n.spot[g]=w;const y=I.shadow;if(I.map&&(n.spotLightMap[P]=I.map,P++,y.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[g]=y.matrix,I.castShadow){const F=t.get(I);F.shadowIntensity=y.intensity,F.shadowBias=y.bias,F.shadowNormalBias=y.normalBias,F.shadowRadius=y.radius,F.shadowMapSize=y.mapSize,n.spotShadow[g]=F,n.spotShadowMap[g]=D,b++}g++}else if(I.isRectAreaLight){const w=e.get(I);w.color.copy(O).multiplyScalar(k),w.halfWidth.set(I.width*.5,0,0),w.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=w,m++}else if(I.isPointLight){const w=e.get(I);if(w.color.copy(I.color).multiplyScalar(I.intensity),w.distance=I.distance,w.decay=I.decay,I.castShadow){const y=I.shadow,F=t.get(I);F.shadowIntensity=y.intensity,F.shadowBias=y.bias,F.shadowNormalBias=y.normalBias,F.shadowRadius=y.radius,F.shadowMapSize=y.mapSize,F.shadowCameraNear=y.camera.near,F.shadowCameraFar=y.camera.far,n.pointShadow[x]=F,n.pointShadowMap[x]=D,n.pointShadowMatrix[x]=I.shadow.matrix,v++}n.point[x]=w,x++}else if(I.isHemisphereLight){const w=e.get(I);w.skyColor.copy(I.color).multiplyScalar(k),w.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[f]=w,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const T=n.hash;(T.directionalLength!==p||T.pointLength!==x||T.spotLength!==g||T.rectAreaLength!==m||T.hemiLength!==f||T.numDirectionalShadows!==_||T.numPointShadows!==v||T.numSpotShadows!==b||T.numSpotMaps!==P||T.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=x,n.hemi.length=f,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=b+P-E,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,T.directionalLength=p,T.pointLength=x,T.spotLength=g,T.rectAreaLength=m,T.hemiLength=f,T.numDirectionalShadows=_,T.numPointShadows=v,T.numSpotShadows=b,T.numSpotMaps=P,T.numLightProbes=A,n.version=pp++)}function l(c,u){let d=0,h=0,p=0,x=0,g=0;const m=u.matrixWorldInverse;for(let f=0,_=c.length;f<_;f++){const v=c[f];if(v.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),d++}else if(v.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const b=n.rectArea[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),s.identity(),o.copy(v.matrixWorld),o.premultiply(m),s.extractRotation(o),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),x++}else if(v.isPointLight){const b=n.point[h];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const b=n.hemi[g];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function u0(i){const e=new xp(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function o(u){t.push(u)}function s(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function gp(i){let e=new WeakMap;function t(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new u0(i),e.set(r,[a])):o>=s.length?(a=new u0(i),s.push(a)):a=s[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const bp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mp=`uniform sampler2D shadow_pass;
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
}`;function _p(i,e,t){let n=new Ks;const r=new Jt,o=new Jt,s=new _e,a=new zc({depthPacking:ql}),l=new Oc,c={},u=t.maxTextureSize,d={[mn]:ze,[ze]:mn,[on]:on},h=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Jt},radius:{value:4}},vertexShader:bp,fragmentShader:Mp}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new Ee;x.setAttribute("position",new pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new It(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=T0;let f=this.type;this.render=function(E,A,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Gn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=f!==yn&&this.type===yn,U=f===yn&&this.type!==yn;for(let D=0,w=E.length;D<w;D++){const y=E[D],F=y.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",y,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const q=F.getFrameExtents();if(r.multiply(q),o.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/q.x),r.x=o.x*q.x,F.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/q.y),r.y=o.y*q.y,F.mapSize.y=o.y)),F.map===null||k===!0||U===!0){const X=this.type!==yn?{minFilter:Xe,magFilter:Xe}:{};F.map!==null&&F.map.dispose(),F.map=new ui(r.x,r.y,X),F.map.texture.name=y.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const Y=F.getViewportCount();for(let X=0;X<Y;X++){const L=F.getViewport(X);s.set(o.x*L.x,o.y*L.y,o.x*L.z,o.y*L.w),O.viewport(s),F.updateMatrices(y,X),n=F.getFrustum(),b(A,T,F.camera,y,this.type)}F.isPointLightShadow!==!0&&this.type===yn&&_(F,T),F.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,I)};function _(E,A){const T=e.update(g);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ui(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,T,h,g,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,T,p,g,null)}function v(E,A,T,S){let M=null;const I=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)M=I;else if(M=T.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const O=M.uuid,k=A.uuid;let U=c[O];U===void 0&&(U={},c[O]=U);let D=U[k];D===void 0&&(D=M.clone(),U[k]=D,A.addEventListener("dispose",P)),M=D}if(M.visible=A.visible,M.wireframe=A.wireframe,S===yn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,T.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=i.properties.get(M);O.light=T}return M}function b(E,A,T,S,M){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===yn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);const k=e.update(E),U=E.material;if(Array.isArray(U)){const D=k.groups;for(let w=0,y=D.length;w<y;w++){const F=D[w],q=U[F.materialIndex];if(q&&q.visible){const Y=v(E,q,S,M);E.onBeforeShadow(i,E,A,T,k,Y,F),i.renderBufferDirect(T,null,k,Y,E,F),E.onAfterShadow(i,E,A,T,k,Y,F)}}}else if(U.visible){const D=v(E,U,S,M);E.onBeforeShadow(i,E,A,T,k,D,null),i.renderBufferDirect(T,null,k,D,E,null),E.onAfterShadow(i,E,A,T,k,D,null)}}const O=E.children;for(let k=0,U=O.length;k<U;k++)b(O[k],A,T,S,M)}function P(E){E.target.removeEventListener("dispose",P);for(const T in c){const S=c[T],M=E.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Sp={[Qo]:ts,[es]:rs,[ns]:os,[zi]:is,[ts]:Qo,[rs]:es,[os]:ns,[is]:zi};function vp(i,e){function t(){let nt=!1;const vt=new _e;let mt=null;const bt=new _e(0,0,0,0);return{setMask:function(Rt){mt!==Rt&&!nt&&(i.colorMask(Rt,Rt,Rt,Rt),mt=Rt)},setLocked:function(Rt){nt=Rt},setClear:function(Rt,At,Ct,Zt,me){me===!0&&(Rt*=Zt,At*=Zt,Ct*=Zt),vt.set(Rt,At,Ct,Zt),bt.equals(vt)===!1&&(i.clearColor(Rt,At,Ct,Zt),bt.copy(vt))},reset:function(){nt=!1,mt=null,bt.set(-1,0,0,0)}}}function n(){let nt=!1,vt=!1,mt=null,bt=null,Rt=null;return{setReversed:function(At){if(vt!==At){const Ct=e.get("EXT_clip_control");vt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT);const Zt=Rt;Rt=null,this.setClear(Zt)}vt=At},getReversed:function(){return vt},setTest:function(At){At?V(i.DEPTH_TEST):G(i.DEPTH_TEST)},setMask:function(At){mt!==At&&!nt&&(i.depthMask(At),mt=At)},setFunc:function(At){if(vt&&(At=Sp[At]),bt!==At){switch(At){case Qo:i.depthFunc(i.NEVER);break;case ts:i.depthFunc(i.ALWAYS);break;case es:i.depthFunc(i.LESS);break;case zi:i.depthFunc(i.LEQUAL);break;case ns:i.depthFunc(i.EQUAL);break;case is:i.depthFunc(i.GEQUAL);break;case rs:i.depthFunc(i.GREATER);break;case os:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}bt=At}},setLocked:function(At){nt=At},setClear:function(At){Rt!==At&&(vt&&(At=1-At),i.clearDepth(At),Rt=At)},reset:function(){nt=!1,mt=null,bt=null,Rt=null,vt=!1}}}function r(){let nt=!1,vt=null,mt=null,bt=null,Rt=null,At=null,Ct=null,Zt=null,me=null;return{setTest:function(ne){nt||(ne?V(i.STENCIL_TEST):G(i.STENCIL_TEST))},setMask:function(ne){vt!==ne&&!nt&&(i.stencilMask(ne),vt=ne)},setFunc:function(ne,Ae,Qe){(mt!==ne||bt!==Ae||Rt!==Qe)&&(i.stencilFunc(ne,Ae,Qe),mt=ne,bt=Ae,Rt=Qe)},setOp:function(ne,Ae,Qe){(At!==ne||Ct!==Ae||Zt!==Qe)&&(i.stencilOp(ne,Ae,Qe),At=ne,Ct=Ae,Zt=Qe)},setLocked:function(ne){nt=ne},setClear:function(ne){me!==ne&&(i.clearStencil(ne),me=ne)},reset:function(){nt=!1,vt=null,mt=null,bt=null,Rt=null,At=null,Ct=null,Zt=null,me=null}}}const o=new t,s=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,p=[],x=null,g=!1,m=null,f=null,_=null,v=null,b=null,P=null,E=null,A=new Vt(0,0,0),T=0,S=!1,M=null,I=null,O=null,k=null,U=null;const D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let w=!1,y=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(y=parseFloat(/^WebGL (\d)/.exec(F)[1]),w=y>=1):F.indexOf("OpenGL ES")!==-1&&(y=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),w=y>=2);let q=null,Y={};const X=i.getParameter(i.SCISSOR_BOX),L=i.getParameter(i.VIEWPORT),$=new _e().fromArray(X),N=new _e().fromArray(L);function H(nt,vt,mt,bt){const Rt=new Uint8Array(4),At=i.createTexture();i.bindTexture(nt,At),i.texParameteri(nt,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(nt,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<mt;Ct++)nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,bt,0,i.RGBA,i.UNSIGNED_BYTE,Rt):i.texImage2D(vt+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Rt);return At}const K={};K[i.TEXTURE_2D]=H(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=H(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=H(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=H(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),V(i.DEPTH_TEST),s.setFunc(zi),et(!1),rt(aa),V(i.CULL_FACE),z(Gn);function V(nt){u[nt]!==!0&&(i.enable(nt),u[nt]=!0)}function G(nt){u[nt]!==!1&&(i.disable(nt),u[nt]=!1)}function Z(nt,vt){return d[nt]!==vt?(i.bindFramebuffer(nt,vt),d[nt]=vt,nt===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=vt),nt===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function B(nt,vt){let mt=p,bt=!1;if(nt){mt=h.get(vt),mt===void 0&&(mt=[],h.set(vt,mt));const Rt=nt.textures;if(mt.length!==Rt.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let At=0,Ct=Rt.length;At<Ct;At++)mt[At]=i.COLOR_ATTACHMENT0+At;mt.length=Rt.length,bt=!0}}else mt[0]!==i.BACK&&(mt[0]=i.BACK,bt=!0);bt&&i.drawBuffers(mt)}function J(nt){return x!==nt?(i.useProgram(nt),x=nt,!0):!1}const lt={[ri]:i.FUNC_ADD,[Sl]:i.FUNC_SUBTRACT,[vl]:i.FUNC_REVERSE_SUBTRACT};lt[wl]=i.MIN,lt[yl]=i.MAX;const ht={[El]:i.ZERO,[Tl]:i.ONE,[Rl]:i.SRC_COLOR,[jo]:i.SRC_ALPHA,[Dl]:i.SRC_ALPHA_SATURATE,[Ll]:i.DST_COLOR,[Cl]:i.DST_ALPHA,[Al]:i.ONE_MINUS_SRC_COLOR,[Jo]:i.ONE_MINUS_SRC_ALPHA,[Il]:i.ONE_MINUS_DST_COLOR,[Pl]:i.ONE_MINUS_DST_ALPHA,[kl]:i.CONSTANT_COLOR,[Ul]:i.ONE_MINUS_CONSTANT_COLOR,[Fl]:i.CONSTANT_ALPHA,[Nl]:i.ONE_MINUS_CONSTANT_ALPHA};function z(nt,vt,mt,bt,Rt,At,Ct,Zt,me,ne){if(nt===Gn){g===!0&&(G(i.BLEND),g=!1);return}if(g===!1&&(V(i.BLEND),g=!0),nt!==_l){if(nt!==m||ne!==S){if((f!==ri||b!==ri)&&(i.blendEquation(i.FUNC_ADD),f=ri,b=ri),ne)switch(nt){case Di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case la:i.blendFunc(i.ONE,i.ONE);break;case ca:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ua:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",nt);break}else switch(nt){case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case la:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ca:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ua:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",nt);break}_=null,v=null,P=null,E=null,A.set(0,0,0),T=0,m=nt,S=ne}return}Rt=Rt||vt,At=At||mt,Ct=Ct||bt,(vt!==f||Rt!==b)&&(i.blendEquationSeparate(lt[vt],lt[Rt]),f=vt,b=Rt),(mt!==_||bt!==v||At!==P||Ct!==E)&&(i.blendFuncSeparate(ht[mt],ht[bt],ht[At],ht[Ct]),_=mt,v=bt,P=At,E=Ct),(Zt.equals(A)===!1||me!==T)&&(i.blendColor(Zt.r,Zt.g,Zt.b,me),A.copy(Zt),T=me),m=nt,S=!1}function ut(nt,vt){nt.side===on?G(i.CULL_FACE):V(i.CULL_FACE);let mt=nt.side===ze;vt&&(mt=!mt),et(mt),nt.blending===Di&&nt.transparent===!1?z(Gn):z(nt.blending,nt.blendEquation,nt.blendSrc,nt.blendDst,nt.blendEquationAlpha,nt.blendSrcAlpha,nt.blendDstAlpha,nt.blendColor,nt.blendAlpha,nt.premultipliedAlpha),s.setFunc(nt.depthFunc),s.setTest(nt.depthTest),s.setMask(nt.depthWrite),o.setMask(nt.colorWrite);const bt=nt.stencilWrite;a.setTest(bt),bt&&(a.setMask(nt.stencilWriteMask),a.setFunc(nt.stencilFunc,nt.stencilRef,nt.stencilFuncMask),a.setOp(nt.stencilFail,nt.stencilZFail,nt.stencilZPass)),Q(nt.polygonOffset,nt.polygonOffsetFactor,nt.polygonOffsetUnits),nt.alphaToCoverage===!0?V(i.SAMPLE_ALPHA_TO_COVERAGE):G(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(nt){M!==nt&&(nt?i.frontFace(i.CW):i.frontFace(i.CCW),M=nt)}function rt(nt){nt!==bl?(V(i.CULL_FACE),nt!==I&&(nt===aa?i.cullFace(i.BACK):nt===Ml?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):G(i.CULL_FACE),I=nt}function ct(nt){nt!==O&&(w&&i.lineWidth(nt),O=nt)}function Q(nt,vt,mt){nt?(V(i.POLYGON_OFFSET_FILL),(k!==vt||U!==mt)&&(i.polygonOffset(vt,mt),k=vt,U=mt)):G(i.POLYGON_OFFSET_FILL)}function j(nt){nt?V(i.SCISSOR_TEST):G(i.SCISSOR_TEST)}function C(nt){nt===void 0&&(nt=i.TEXTURE0+D-1),q!==nt&&(i.activeTexture(nt),q=nt)}function R(nt,vt,mt){mt===void 0&&(q===null?mt=i.TEXTURE0+D-1:mt=q);let bt=Y[mt];bt===void 0&&(bt={type:void 0,texture:void 0},Y[mt]=bt),(bt.type!==nt||bt.texture!==vt)&&(q!==mt&&(i.activeTexture(mt),q=mt),i.bindTexture(nt,vt||K[nt]),bt.type=nt,bt.texture=vt)}function tt(){const nt=Y[q];nt!==void 0&&nt.type!==void 0&&(i.bindTexture(nt.type,null),nt.type=void 0,nt.texture=void 0)}function it(){try{i.compressedTexImage2D(...arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function ft(){try{i.compressedTexImage3D(...arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function st(){try{i.texSubImage2D(...arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function yt(){try{i.texSubImage3D(...arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function gt(){try{i.compressedTexSubImage2D(...arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function Mt(){try{i.compressedTexSubImage3D(...arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function zt(){try{i.texStorage2D(...arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function _t(){try{i.texStorage3D(...arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function Tt(){try{i.texImage2D(...arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function Dt(){try{i.texImage3D(...arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function Ft(nt){$.equals(nt)===!1&&(i.scissor(nt.x,nt.y,nt.z,nt.w),$.copy(nt))}function wt(nt){N.equals(nt)===!1&&(i.viewport(nt.x,nt.y,nt.z,nt.w),N.copy(nt))}function Nt(nt,vt){let mt=c.get(vt);mt===void 0&&(mt=new WeakMap,c.set(vt,mt));let bt=mt.get(nt);bt===void 0&&(bt=i.getUniformBlockIndex(vt,nt.name),mt.set(nt,bt))}function Et(nt,vt){const bt=c.get(vt).get(nt);l.get(vt)!==bt&&(i.uniformBlockBinding(vt,bt,nt.__bindingPointIndex),l.set(vt,bt))}function Ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},q=null,Y={},d={},h=new WeakMap,p=[],x=null,g=!1,m=null,f=null,_=null,v=null,b=null,P=null,E=null,A=new Vt(0,0,0),T=0,S=!1,M=null,I=null,O=null,k=null,U=null,$.set(0,0,i.canvas.width,i.canvas.height),N.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:V,disable:G,bindFramebuffer:Z,drawBuffers:B,useProgram:J,setBlending:z,setMaterial:ut,setFlipSided:et,setCullFace:rt,setLineWidth:ct,setPolygonOffset:Q,setScissorTest:j,activeTexture:C,bindTexture:R,unbindTexture:tt,compressedTexImage2D:it,compressedTexImage3D:ft,texImage2D:Tt,texImage3D:Dt,updateUBOMapping:Nt,uniformBlockBinding:Et,texStorage2D:zt,texStorage3D:_t,texSubImage2D:st,texSubImage3D:yt,compressedTexSubImage2D:gt,compressedTexSubImage3D:Mt,scissor:Ft,viewport:wt,reset:Ht}}function wp(i,e,t,n,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Jt,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,R){return p?new OffscreenCanvas(C,R):pr("canvas")}function g(C,R,tt){let it=1;const ft=j(C);if((ft.width>tt||ft.height>tt)&&(it=tt/Math.max(ft.width,ft.height)),it<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const st=Math.floor(it*ft.width),yt=Math.floor(it*ft.height);d===void 0&&(d=x(st,yt));const gt=R?x(st,yt):d;return gt.width=st,gt.height=yt,gt.getContext("2d").drawImage(C,0,0,st,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+st+"x"+yt+")."),gt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){i.generateMipmap(C)}function _(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(C,R,tt,it,ft=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let st=R;if(R===i.RED&&(tt===i.FLOAT&&(st=i.R32F),tt===i.HALF_FLOAT&&(st=i.R16F),tt===i.UNSIGNED_BYTE&&(st=i.R8)),R===i.RED_INTEGER&&(tt===i.UNSIGNED_BYTE&&(st=i.R8UI),tt===i.UNSIGNED_SHORT&&(st=i.R16UI),tt===i.UNSIGNED_INT&&(st=i.R32UI),tt===i.BYTE&&(st=i.R8I),tt===i.SHORT&&(st=i.R16I),tt===i.INT&&(st=i.R32I)),R===i.RG&&(tt===i.FLOAT&&(st=i.RG32F),tt===i.HALF_FLOAT&&(st=i.RG16F),tt===i.UNSIGNED_BYTE&&(st=i.RG8)),R===i.RG_INTEGER&&(tt===i.UNSIGNED_BYTE&&(st=i.RG8UI),tt===i.UNSIGNED_SHORT&&(st=i.RG16UI),tt===i.UNSIGNED_INT&&(st=i.RG32UI),tt===i.BYTE&&(st=i.RG8I),tt===i.SHORT&&(st=i.RG16I),tt===i.INT&&(st=i.RG32I)),R===i.RGB_INTEGER&&(tt===i.UNSIGNED_BYTE&&(st=i.RGB8UI),tt===i.UNSIGNED_SHORT&&(st=i.RGB16UI),tt===i.UNSIGNED_INT&&(st=i.RGB32UI),tt===i.BYTE&&(st=i.RGB8I),tt===i.SHORT&&(st=i.RGB16I),tt===i.INT&&(st=i.RGB32I)),R===i.RGBA_INTEGER&&(tt===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),tt===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),tt===i.UNSIGNED_INT&&(st=i.RGBA32UI),tt===i.BYTE&&(st=i.RGBA8I),tt===i.SHORT&&(st=i.RGBA16I),tt===i.INT&&(st=i.RGBA32I)),R===i.RGB&&tt===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),R===i.RGBA){const yt=ft?ro:ee.getTransfer(it);tt===i.FLOAT&&(st=i.RGBA32F),tt===i.HALF_FLOAT&&(st=i.RGBA16F),tt===i.UNSIGNED_BYTE&&(st=yt===se?i.SRGB8_ALPHA8:i.RGBA8),tt===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),tt===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&e.get("EXT_color_buffer_float"),st}function b(C,R){let tt;return C?R===null||R===ci||R===Hi?tt=i.DEPTH24_STENCIL8:R===pn?tt=i.DEPTH32F_STENCIL8:R===fr&&(tt=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===ci||R===Hi?tt=i.DEPTH_COMPONENT24:R===pn?tt=i.DEPTH_COMPONENT32F:R===fr&&(tt=i.DEPTH_COMPONENT16),tt}function P(C,R){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Xe&&C.minFilter!==an?Math.log2(Math.max(R.width,R.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?R.mipmaps.length:1}function E(C){const R=C.target;R.removeEventListener("dispose",E),T(R),R.isVideoTexture&&u.delete(R)}function A(C){const R=C.target;R.removeEventListener("dispose",A),M(R)}function T(C){const R=n.get(C);if(R.__webglInit===void 0)return;const tt=C.source,it=h.get(tt);if(it){const ft=it[R.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&S(C),Object.keys(it).length===0&&h.delete(tt)}n.remove(C)}function S(C){const R=n.get(C);i.deleteTexture(R.__webglTexture);const tt=C.source,it=h.get(tt);delete it[R.__cacheKey],s.memory.textures--}function M(C){const R=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(R.__webglFramebuffer[it]))for(let ft=0;ft<R.__webglFramebuffer[it].length;ft++)i.deleteFramebuffer(R.__webglFramebuffer[it][ft]);else i.deleteFramebuffer(R.__webglFramebuffer[it]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[it])}else{if(Array.isArray(R.__webglFramebuffer))for(let it=0;it<R.__webglFramebuffer.length;it++)i.deleteFramebuffer(R.__webglFramebuffer[it]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let it=0;it<R.__webglColorRenderbuffer.length;it++)R.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[it]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const tt=C.textures;for(let it=0,ft=tt.length;it<ft;it++){const st=n.get(tt[it]);st.__webglTexture&&(i.deleteTexture(st.__webglTexture),s.memory.textures--),n.remove(tt[it])}n.remove(C)}let I=0;function O(){I=0}function k(){const C=I;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),I+=1,C}function U(C){const R=[];return R.push(C.wrapS),R.push(C.wrapT),R.push(C.wrapR||0),R.push(C.magFilter),R.push(C.minFilter),R.push(C.anisotropy),R.push(C.internalFormat),R.push(C.format),R.push(C.type),R.push(C.generateMipmaps),R.push(C.premultiplyAlpha),R.push(C.flipY),R.push(C.unpackAlignment),R.push(C.colorSpace),R.join()}function D(C,R){const tt=n.get(C);if(C.isVideoTexture&&ct(C),C.isRenderTargetTexture===!1&&C.version>0&&tt.__version!==C.version){const it=C.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(tt,C,R);return}}t.bindTexture(i.TEXTURE_2D,tt.__webglTexture,i.TEXTURE0+R)}function w(C,R){const tt=n.get(C);if(C.version>0&&tt.__version!==C.version){N(tt,C,R);return}t.bindTexture(i.TEXTURE_2D_ARRAY,tt.__webglTexture,i.TEXTURE0+R)}function y(C,R){const tt=n.get(C);if(C.version>0&&tt.__version!==C.version){N(tt,C,R);return}t.bindTexture(i.TEXTURE_3D,tt.__webglTexture,i.TEXTURE0+R)}function F(C,R){const tt=n.get(C);if(C.version>0&&tt.__version!==C.version){H(tt,C,R);return}t.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture,i.TEXTURE0+R)}const q={[si]:i.REPEAT,[ai]:i.CLAMP_TO_EDGE,[ls]:i.MIRRORED_REPEAT},Y={[Xe]:i.NEAREST,[Xl]:i.NEAREST_MIPMAP_NEAREST,[_r]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[go]:i.LINEAR_MIPMAP_NEAREST,[Wn]:i.LINEAR_MIPMAP_LINEAR},X={[Kl]:i.NEVER,[nc]:i.ALWAYS,[jl]:i.LESS,[H0]:i.LEQUAL,[Jl]:i.EQUAL,[ec]:i.GEQUAL,[Ql]:i.GREATER,[tc]:i.NOTEQUAL};function L(C,R){if(R.type===pn&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===an||R.magFilter===go||R.magFilter===_r||R.magFilter===Wn||R.minFilter===an||R.minFilter===go||R.minFilter===_r||R.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,q[R.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,q[R.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,q[R.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Y[R.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Y[R.minFilter]),R.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,X[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Xe||R.minFilter!==_r&&R.minFilter!==Wn||R.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const tt=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function $(C,R){let tt=!1;C.__webglInit===void 0&&(C.__webglInit=!0,R.addEventListener("dispose",E));const it=R.source;let ft=h.get(it);ft===void 0&&(ft={},h.set(it,ft));const st=U(R);if(st!==C.__cacheKey){ft[st]===void 0&&(ft[st]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,tt=!0),ft[st].usedTimes++;const yt=ft[C.__cacheKey];yt!==void 0&&(ft[C.__cacheKey].usedTimes--,yt.usedTimes===0&&S(R)),C.__cacheKey=st,C.__webglTexture=ft[st].texture}return tt}function N(C,R,tt){let it=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(it=i.TEXTURE_3D);const ft=$(C,R),st=R.source;t.bindTexture(it,C.__webglTexture,i.TEXTURE0+tt);const yt=n.get(st);if(st.version!==yt.__version||ft===!0){t.activeTexture(i.TEXTURE0+tt);const gt=ee.getPrimaries(ee.workingColorSpace),Mt=R.colorSpace===Bn?null:ee.getPrimaries(R.colorSpace),zt=R.colorSpace===Bn||gt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let _t=g(R.image,!1,r.maxTextureSize);_t=Q(R,_t);const Tt=o.convert(R.format,R.colorSpace),Dt=o.convert(R.type);let Ft=v(R.internalFormat,Tt,Dt,R.colorSpace,R.isVideoTexture);L(it,R);let wt;const Nt=R.mipmaps,Et=R.isVideoTexture!==!0,Ht=yt.__version===void 0||ft===!0,nt=st.dataReady,vt=P(R,_t);if(R.isDepthTexture)Ft=b(R.format===Wi,R.type),Ht&&(Et?t.texStorage2D(i.TEXTURE_2D,1,Ft,_t.width,_t.height):t.texImage2D(i.TEXTURE_2D,0,Ft,_t.width,_t.height,0,Tt,Dt,null));else if(R.isDataTexture)if(Nt.length>0){Et&&Ht&&t.texStorage2D(i.TEXTURE_2D,vt,Ft,Nt[0].width,Nt[0].height);for(let mt=0,bt=Nt.length;mt<bt;mt++)wt=Nt[mt],Et?nt&&t.texSubImage2D(i.TEXTURE_2D,mt,0,0,wt.width,wt.height,Tt,Dt,wt.data):t.texImage2D(i.TEXTURE_2D,mt,Ft,wt.width,wt.height,0,Tt,Dt,wt.data);R.generateMipmaps=!1}else Et?(Ht&&t.texStorage2D(i.TEXTURE_2D,vt,Ft,_t.width,_t.height),nt&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_t.width,_t.height,Tt,Dt,_t.data)):t.texImage2D(i.TEXTURE_2D,0,Ft,_t.width,_t.height,0,Tt,Dt,_t.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Et&&Ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Ft,Nt[0].width,Nt[0].height,_t.depth);for(let mt=0,bt=Nt.length;mt<bt;mt++)if(wt=Nt[mt],R.format!==ln)if(Tt!==null)if(Et){if(nt)if(R.layerUpdates.size>0){const Rt=Ba(wt.width,wt.height,R.format,R.type);for(const At of R.layerUpdates){const Ct=wt.data.subarray(At*Rt/wt.data.BYTES_PER_ELEMENT,(At+1)*Rt/wt.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,At,wt.width,wt.height,1,Tt,Ct)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,wt.width,wt.height,_t.depth,Tt,wt.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,mt,Ft,wt.width,wt.height,_t.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Et?nt&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,wt.width,wt.height,_t.depth,Tt,Dt,wt.data):t.texImage3D(i.TEXTURE_2D_ARRAY,mt,Ft,wt.width,wt.height,_t.depth,0,Tt,Dt,wt.data)}else{Et&&Ht&&t.texStorage2D(i.TEXTURE_2D,vt,Ft,Nt[0].width,Nt[0].height);for(let mt=0,bt=Nt.length;mt<bt;mt++)wt=Nt[mt],R.format!==ln?Tt!==null?Et?nt&&t.compressedTexSubImage2D(i.TEXTURE_2D,mt,0,0,wt.width,wt.height,Tt,wt.data):t.compressedTexImage2D(i.TEXTURE_2D,mt,Ft,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Et?nt&&t.texSubImage2D(i.TEXTURE_2D,mt,0,0,wt.width,wt.height,Tt,Dt,wt.data):t.texImage2D(i.TEXTURE_2D,mt,Ft,wt.width,wt.height,0,Tt,Dt,wt.data)}else if(R.isDataArrayTexture)if(Et){if(Ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Ft,_t.width,_t.height,_t.depth),nt)if(R.layerUpdates.size>0){const mt=Ba(_t.width,_t.height,R.format,R.type);for(const bt of R.layerUpdates){const Rt=_t.data.subarray(bt*mt/_t.data.BYTES_PER_ELEMENT,(bt+1)*mt/_t.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,bt,_t.width,_t.height,1,Tt,Dt,Rt)}R.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,Tt,Dt,_t.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,_t.width,_t.height,_t.depth,0,Tt,Dt,_t.data);else if(R.isData3DTexture)Et?(Ht&&t.texStorage3D(i.TEXTURE_3D,vt,Ft,_t.width,_t.height,_t.depth),nt&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,Tt,Dt,_t.data)):t.texImage3D(i.TEXTURE_3D,0,Ft,_t.width,_t.height,_t.depth,0,Tt,Dt,_t.data);else if(R.isFramebufferTexture){if(Ht)if(Et)t.texStorage2D(i.TEXTURE_2D,vt,Ft,_t.width,_t.height);else{let mt=_t.width,bt=_t.height;for(let Rt=0;Rt<vt;Rt++)t.texImage2D(i.TEXTURE_2D,Rt,Ft,mt,bt,0,Tt,Dt,null),mt>>=1,bt>>=1}}else if(Nt.length>0){if(Et&&Ht){const mt=j(Nt[0]);t.texStorage2D(i.TEXTURE_2D,vt,Ft,mt.width,mt.height)}for(let mt=0,bt=Nt.length;mt<bt;mt++)wt=Nt[mt],Et?nt&&t.texSubImage2D(i.TEXTURE_2D,mt,0,0,Tt,Dt,wt):t.texImage2D(i.TEXTURE_2D,mt,Ft,Tt,Dt,wt);R.generateMipmaps=!1}else if(Et){if(Ht){const mt=j(_t);t.texStorage2D(i.TEXTURE_2D,vt,Ft,mt.width,mt.height)}nt&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Dt,_t)}else t.texImage2D(i.TEXTURE_2D,0,Ft,Tt,Dt,_t);m(R)&&f(it),yt.__version=st.version,R.onUpdate&&R.onUpdate(R)}C.__version=R.version}function H(C,R,tt){if(R.image.length!==6)return;const it=$(C,R),ft=R.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+tt);const st=n.get(ft);if(ft.version!==st.__version||it===!0){t.activeTexture(i.TEXTURE0+tt);const yt=ee.getPrimaries(ee.workingColorSpace),gt=R.colorSpace===Bn?null:ee.getPrimaries(R.colorSpace),Mt=R.colorSpace===Bn||yt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const zt=R.isCompressedTexture||R.image[0].isCompressedTexture,_t=R.image[0]&&R.image[0].isDataTexture,Tt=[];for(let bt=0;bt<6;bt++)!zt&&!_t?Tt[bt]=g(R.image[bt],!0,r.maxCubemapSize):Tt[bt]=_t?R.image[bt].image:R.image[bt],Tt[bt]=Q(R,Tt[bt]);const Dt=Tt[0],Ft=o.convert(R.format,R.colorSpace),wt=o.convert(R.type),Nt=v(R.internalFormat,Ft,wt,R.colorSpace),Et=R.isVideoTexture!==!0,Ht=st.__version===void 0||it===!0,nt=ft.dataReady;let vt=P(R,Dt);L(i.TEXTURE_CUBE_MAP,R);let mt;if(zt){Et&&Ht&&t.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Nt,Dt.width,Dt.height);for(let bt=0;bt<6;bt++){mt=Tt[bt].mipmaps;for(let Rt=0;Rt<mt.length;Rt++){const At=mt[Rt];R.format!==ln?Ft!==null?Et?nt&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Rt,0,0,At.width,At.height,Ft,At.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Rt,Nt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Et?nt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Rt,0,0,At.width,At.height,Ft,wt,At.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Rt,Nt,At.width,At.height,0,Ft,wt,At.data)}}}else{if(mt=R.mipmaps,Et&&Ht){mt.length>0&&vt++;const bt=j(Tt[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Nt,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(_t){Et?nt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Tt[bt].width,Tt[bt].height,Ft,wt,Tt[bt].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,Nt,Tt[bt].width,Tt[bt].height,0,Ft,wt,Tt[bt].data);for(let Rt=0;Rt<mt.length;Rt++){const Ct=mt[Rt].image[bt].image;Et?nt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Rt+1,0,0,Ct.width,Ct.height,Ft,wt,Ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Rt+1,Nt,Ct.width,Ct.height,0,Ft,wt,Ct.data)}}else{Et?nt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Ft,wt,Tt[bt]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,Nt,Ft,wt,Tt[bt]);for(let Rt=0;Rt<mt.length;Rt++){const At=mt[Rt];Et?nt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Rt+1,0,0,Ft,wt,At.image[bt]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Rt+1,Nt,Ft,wt,At.image[bt])}}}m(R)&&f(i.TEXTURE_CUBE_MAP),st.__version=ft.version,R.onUpdate&&R.onUpdate(R)}C.__version=R.version}function K(C,R,tt,it,ft,st){const yt=o.convert(tt.format,tt.colorSpace),gt=o.convert(tt.type),Mt=v(tt.internalFormat,yt,gt,tt.colorSpace),zt=n.get(R),_t=n.get(tt);if(_t.__renderTarget=R,!zt.__hasExternalTextures){const Tt=Math.max(1,R.width>>st),Dt=Math.max(1,R.height>>st);ft===i.TEXTURE_3D||ft===i.TEXTURE_2D_ARRAY?t.texImage3D(ft,st,Mt,Tt,Dt,R.depth,0,yt,gt,null):t.texImage2D(ft,st,Mt,Tt,Dt,0,yt,gt,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),rt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,ft,_t.__webglTexture,0,et(R)):(ft===i.TEXTURE_2D||ft>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,ft,_t.__webglTexture,st),t.bindFramebuffer(i.FRAMEBUFFER,null)}function V(C,R,tt){if(i.bindRenderbuffer(i.RENDERBUFFER,C),R.depthBuffer){const it=R.depthTexture,ft=it&&it.isDepthTexture?it.type:null,st=b(R.stencilBuffer,ft),yt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=et(R);rt(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,st,R.width,R.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,st,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,st,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,C)}else{const it=R.textures;for(let ft=0;ft<it.length;ft++){const st=it[ft],yt=o.convert(st.format,st.colorSpace),gt=o.convert(st.type),Mt=v(st.internalFormat,yt,gt,st.colorSpace),zt=et(R);tt&&rt(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,Mt,R.width,R.height):rt(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt,Mt,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function G(C,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const it=n.get(R.depthTexture);it.__renderTarget=R,(!it.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),D(R.depthTexture,0);const ft=it.__webglTexture,st=et(R);if(R.depthTexture.format===ki)rt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ft,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ft,0);else if(R.depthTexture.format===Wi)rt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ft,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ft,0);else throw new Error("Unknown depthTexture format")}function Z(C){const R=n.get(C),tt=C.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==C.depthTexture){const it=C.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),it){const ft=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,it.removeEventListener("dispose",ft)};it.addEventListener("dispose",ft),R.__depthDisposeCallback=ft}R.__boundDepthTexture=it}if(C.depthTexture&&!R.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");G(R.__webglFramebuffer,C)}else if(tt){R.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[it]),R.__webglDepthbuffer[it]===void 0)R.__webglDepthbuffer[it]=i.createRenderbuffer(),V(R.__webglDepthbuffer[it],C,!1);else{const ft=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=R.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,st)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),V(R.__webglDepthbuffer,C,!1);else{const it=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,ft)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function B(C,R,tt){const it=n.get(C);R!==void 0&&K(it.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),tt!==void 0&&Z(C)}function J(C){const R=C.texture,tt=n.get(C),it=n.get(R);C.addEventListener("dispose",A);const ft=C.textures,st=C.isWebGLCubeRenderTarget===!0,yt=ft.length>1;if(yt||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=R.version,s.memory.textures++),st){tt.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(R.mipmaps&&R.mipmaps.length>0){tt.__webglFramebuffer[gt]=[];for(let Mt=0;Mt<R.mipmaps.length;Mt++)tt.__webglFramebuffer[gt][Mt]=i.createFramebuffer()}else tt.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){tt.__webglFramebuffer=[];for(let gt=0;gt<R.mipmaps.length;gt++)tt.__webglFramebuffer[gt]=i.createFramebuffer()}else tt.__webglFramebuffer=i.createFramebuffer();if(yt)for(let gt=0,Mt=ft.length;gt<Mt;gt++){const zt=n.get(ft[gt]);zt.__webglTexture===void 0&&(zt.__webglTexture=i.createTexture(),s.memory.textures++)}if(C.samples>0&&rt(C)===!1){tt.__webglMultisampledFramebuffer=i.createFramebuffer(),tt.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let gt=0;gt<ft.length;gt++){const Mt=ft[gt];tt.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,tt.__webglColorRenderbuffer[gt]);const zt=o.convert(Mt.format,Mt.colorSpace),_t=o.convert(Mt.type),Tt=v(Mt.internalFormat,zt,_t,Mt.colorSpace,C.isXRRenderTarget===!0),Dt=et(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,Tt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,tt.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(tt.__webglDepthRenderbuffer=i.createRenderbuffer(),V(tt.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){t.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),L(i.TEXTURE_CUBE_MAP,R);for(let gt=0;gt<6;gt++)if(R.mipmaps&&R.mipmaps.length>0)for(let Mt=0;Mt<R.mipmaps.length;Mt++)K(tt.__webglFramebuffer[gt][Mt],C,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Mt);else K(tt.__webglFramebuffer[gt],C,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);m(R)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(yt){for(let gt=0,Mt=ft.length;gt<Mt;gt++){const zt=ft[gt],_t=n.get(zt);t.bindTexture(i.TEXTURE_2D,_t.__webglTexture),L(i.TEXTURE_2D,zt),K(tt.__webglFramebuffer,C,zt,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),m(zt)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let gt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(gt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(gt,it.__webglTexture),L(gt,R),R.mipmaps&&R.mipmaps.length>0)for(let Mt=0;Mt<R.mipmaps.length;Mt++)K(tt.__webglFramebuffer[Mt],C,R,i.COLOR_ATTACHMENT0,gt,Mt);else K(tt.__webglFramebuffer,C,R,i.COLOR_ATTACHMENT0,gt,0);m(R)&&f(gt),t.unbindTexture()}C.depthBuffer&&Z(C)}function lt(C){const R=C.textures;for(let tt=0,it=R.length;tt<it;tt++){const ft=R[tt];if(m(ft)){const st=_(C),yt=n.get(ft).__webglTexture;t.bindTexture(st,yt),f(st),t.unbindTexture()}}}const ht=[],z=[];function ut(C){if(C.samples>0){if(rt(C)===!1){const R=C.textures,tt=C.width,it=C.height;let ft=i.COLOR_BUFFER_BIT;const st=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(C),gt=R.length>1;if(gt)for(let Mt=0;Mt<R.length;Mt++)t.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Mt=0;Mt<R.length;Mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ft|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ft|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[Mt]);const zt=n.get(R[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,zt,0)}i.blitFramebuffer(0,0,tt,it,0,0,tt,it,ft,i.NEAREST),l===!0&&(ht.length=0,z.length=0,ht.push(i.COLOR_ATTACHMENT0+Mt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ht.push(st),z.push(st),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let Mt=0;Mt<R.length;Mt++){t.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[Mt]);const zt=n.get(R[Mt]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,zt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const R=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function et(C){return Math.min(r.maxSamples,C.samples)}function rt(C){const R=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function ct(C){const R=s.render.frame;u.get(C)!==R&&(u.set(C,R),C.update())}function Q(C,R){const tt=C.colorSpace,it=C.format,ft=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||tt!==Gi&&tt!==Bn&&(ee.getTransfer(tt)===se?(it!==ln||ft!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),R}function j(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=O,this.setTexture2D=D,this.setTexture2DArray=w,this.setTexture3D=y,this.setTextureCube=F,this.rebindTextures=B,this.setupRenderTarget=J,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=K,this.useMultisampledRTT=rt}function yp(i,e){function t(n,r=Bn){let o;const s=ee.getTransfer(r);if(n===Ln)return i.UNSIGNED_BYTE;if(n===Ws)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gs)return i.UNSIGNED_SHORT_5_5_5_1;if(n===D0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===L0)return i.BYTE;if(n===I0)return i.SHORT;if(n===fr)return i.UNSIGNED_SHORT;if(n===Hs)return i.INT;if(n===ci)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===mr)return i.HALF_FLOAT;if(n===k0)return i.ALPHA;if(n===U0)return i.RGB;if(n===ln)return i.RGBA;if(n===F0)return i.LUMINANCE;if(n===N0)return i.LUMINANCE_ALPHA;if(n===ki)return i.DEPTH_COMPONENT;if(n===Wi)return i.DEPTH_STENCIL;if(n===Vs)return i.RED;if(n===Ys)return i.RED_INTEGER;if(n===z0)return i.RG;if(n===Xs)return i.RG_INTEGER;if(n===Zs)return i.RGBA_INTEGER;if(n===jr||n===Jr||n===Qr||n===to)if(s===se)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===jr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===to)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===jr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===to)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cs||n===us||n===ds||n===hs)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===cs)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===us)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ds)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hs)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fs||n===ps||n===ms)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===fs||n===ps)return s===se?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===ms)return s===se?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xs||n===gs||n===bs||n===Ms||n===_s||n===Ss||n===vs||n===ws||n===ys||n===Es||n===Ts||n===Rs||n===As||n===Cs)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===xs)return s===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gs)return s===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bs)return s===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ms)return s===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_s)return s===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ss)return s===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vs)return s===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ws)return s===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ys)return s===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Es)return s===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ts)return s===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rs)return s===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===As)return s===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cs)return s===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===eo||n===Ps||n===Ls)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===eo)return s===se?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ps)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ls)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===O0||n===Is||n===Ds||n===ks)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===eo)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Is)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ds)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ks)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Ep=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tp=`
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

}`;class Rp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new ke,o=e.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new xn({vertexShader:Ep,fragmentShader:Tp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new Yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ap extends Xi{constructor(e,t){super();const n=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,x=null;const g=new Rp,m=t.getContextAttributes();let f=null,_=null;const v=[],b=[],P=new Jt;let E=null;const A=new je;A.viewport=new _e;const T=new je;T.viewport=new _e;const S=[A,T],M=new qc;let I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let H=v[N];return H===void 0&&(H=new Oo,v[N]=H),H.getTargetRaySpace()},this.getControllerGrip=function(N){let H=v[N];return H===void 0&&(H=new Oo,v[N]=H),H.getGripSpace()},this.getHand=function(N){let H=v[N];return H===void 0&&(H=new Oo,v[N]=H),H.getHandSpace()};function k(N){const H=b.indexOf(N.inputSource);if(H===-1)return;const K=v[H];K!==void 0&&(K.update(N.inputSource,N.frame,c||s),K.dispatchEvent({type:N.type,data:N.inputSource}))}function U(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",D);for(let N=0;N<v.length;N++){const H=b[N];H!==null&&(b[N]=null,v[N].disconnect(H))}I=null,O=null,g.reset(),e.setRenderTarget(f),p=null,h=null,d=null,r=null,_=null,$.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){o=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",U),r.addEventListener("inputsourceschange",D),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,V=null,G=null;m.depth&&(G=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=m.stencil?Wi:ki,V=m.stencil?Hi:ci);const Z={colorFormat:t.RGBA8,depthFormat:G,scaleFactor:o};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Z),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new ui(h.textureWidth,h.textureHeight,{format:ln,type:Ln,depthTexture:new tl(h.textureWidth,h.textureHeight,V,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new ui(p.framebufferWidth,p.framebufferHeight,{format:ln,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),$.setContext(r),$.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function D(N){for(let H=0;H<N.removed.length;H++){const K=N.removed[H],V=b.indexOf(K);V>=0&&(b[V]=null,v[V].disconnect(K))}for(let H=0;H<N.added.length;H++){const K=N.added[H];let V=b.indexOf(K);if(V===-1){for(let Z=0;Z<v.length;Z++)if(Z>=b.length){b.push(K),V=Z;break}else if(b[Z]===null){b[Z]=K,V=Z;break}if(V===-1)break}const G=v[V];G&&G.connect(K)}}const w=new ot,y=new ot;function F(N,H,K){w.setFromMatrixPosition(H.matrixWorld),y.setFromMatrixPosition(K.matrixWorld);const V=w.distanceTo(y),G=H.projectionMatrix.elements,Z=K.projectionMatrix.elements,B=G[14]/(G[10]-1),J=G[14]/(G[10]+1),lt=(G[9]+1)/G[5],ht=(G[9]-1)/G[5],z=(G[8]-1)/G[0],ut=(Z[8]+1)/Z[0],et=B*z,rt=B*ut,ct=V/(-z+ut),Q=ct*-z;if(H.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Q),N.translateZ(ct),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),G[10]===-1)N.projectionMatrix.copy(H.projectionMatrix),N.projectionMatrixInverse.copy(H.projectionMatrixInverse);else{const j=B+ct,C=J+ct,R=et-Q,tt=rt+(V-Q),it=lt*J/C*j,ft=ht*J/C*j;N.projectionMatrix.makePerspective(R,tt,it,ft,j,C),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function q(N,H){H===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(H.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;let H=N.near,K=N.far;g.texture!==null&&(g.depthNear>0&&(H=g.depthNear),g.depthFar>0&&(K=g.depthFar)),M.near=T.near=A.near=H,M.far=T.far=A.far=K,(I!==M.near||O!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,O=M.far),A.layers.mask=N.layers.mask|2,T.layers.mask=N.layers.mask|4,M.layers.mask=A.layers.mask|T.layers.mask;const V=N.parent,G=M.cameras;q(M,V);for(let Z=0;Z<G.length;Z++)q(G[Z],V);G.length===2?F(M,A,T):M.projectionMatrix.copy(A.projectionMatrix),Y(N,M,V)};function Y(N,H,K){K===null?N.matrix.copy(H.matrixWorld):(N.matrix.copy(K.matrixWorld),N.matrix.invert(),N.matrix.multiply(H.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(H.projectionMatrix),N.projectionMatrixInverse.copy(H.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Us*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(N){l=N,h!==null&&(h.fixedFoveation=N),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=N)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let X=null;function L(N,H){if(u=H.getViewerPose(c||s),x=H,u!==null){const K=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let V=!1;K.length!==M.cameras.length&&(M.cameras.length=0,V=!0);for(let B=0;B<K.length;B++){const J=K[B];let lt=null;if(p!==null)lt=p.getViewport(J);else{const z=d.getViewSubImage(h,J);lt=z.viewport,B===0&&(e.setRenderTargetTextures(_,z.colorTexture,h.ignoreDepthValues?void 0:z.depthStencilTexture),e.setRenderTarget(_))}let ht=S[B];ht===void 0&&(ht=new je,ht.layers.enable(B),ht.viewport=new _e,S[B]=ht),ht.matrix.fromArray(J.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(J.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(lt.x,lt.y,lt.width,lt.height),B===0&&(M.matrix.copy(ht.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),V===!0&&M.cameras.push(ht)}const G=r.enabledFeatures;if(G&&G.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const B=d.getDepthInformation(K[0]);B&&B.isValid&&B.texture&&g.init(e,B,r.renderState)}}for(let K=0;K<v.length;K++){const V=b[K],G=v[K];V!==null&&G!==void 0&&G.update(V,H,c||s)}X&&X(N,H),H.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:H}),x=null}const $=new il;$.setAnimationLoop(L),this.setAnimationLoop=function(N){X=N},this.dispose=function(){}}}const jn=new dn,Cp=new Xt;function Pp(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,K0(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,_,v,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(m,f):f.isMeshToonMaterial?(o(m,f),d(m,f)):f.isMeshPhongMaterial?(o(m,f),u(m,f)):f.isMeshStandardMaterial?(o(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(o(m,f),x(m,f)):f.isMeshDepthMaterial?o(m,f):f.isMeshDistanceMaterial?(o(m,f),g(m,f)):f.isMeshNormalMaterial?o(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ze&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ze&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f),v=_.envMap,b=_.envMapRotation;v&&(m.envMap.value=v,jn.copy(b),jn.x*=-1,jn.y*=-1,jn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),m.envMapRotation.value.setFromMatrix4(Cp.makeRotationFromEuler(jn)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ze&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Lp(i,e,t,n){let r={},o={},s=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const b=v.program;n.uniformBlockBinding(_,b)}function c(_,v){let b=r[_.id];b===void 0&&(x(_),b=u(_),r[_.id]=b,_.addEventListener("dispose",m));const P=v.program;n.updateUBOMapping(_,P);const E=e.render.frame;o[_.id]!==E&&(h(_),o[_.id]=E)}function u(_){const v=d();_.__bindingPointIndex=v;const b=i.createBuffer(),P=_.__size,E=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,P,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,b),b}function d(){for(let _=0;_<a;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const v=r[_.id],b=_.uniforms,P=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,A=b.length;E<A;E++){const T=Array.isArray(b[E])?b[E]:[b[E]];for(let S=0,M=T.length;S<M;S++){const I=T[S];if(p(I,E,S,P)===!0){const O=I.__offset,k=Array.isArray(I.value)?I.value:[I.value];let U=0;for(let D=0;D<k.length;D++){const w=k[D],y=g(w);typeof w=="number"||typeof w=="boolean"?(I.__data[0]=w,i.bufferSubData(i.UNIFORM_BUFFER,O+U,I.__data)):w.isMatrix3?(I.__data[0]=w.elements[0],I.__data[1]=w.elements[1],I.__data[2]=w.elements[2],I.__data[3]=0,I.__data[4]=w.elements[3],I.__data[5]=w.elements[4],I.__data[6]=w.elements[5],I.__data[7]=0,I.__data[8]=w.elements[6],I.__data[9]=w.elements[7],I.__data[10]=w.elements[8],I.__data[11]=0):(w.toArray(I.__data,U),U+=y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,v,b,P){const E=_.value,A=v+"_"+b;if(P[A]===void 0)return typeof E=="number"||typeof E=="boolean"?P[A]=E:P[A]=E.clone(),!0;{const T=P[A];if(typeof E=="number"||typeof E=="boolean"){if(T!==E)return P[A]=E,!0}else if(T.equals(E)===!1)return T.copy(E),!0}return!1}function x(_){const v=_.uniforms;let b=0;const P=16;for(let A=0,T=v.length;A<T;A++){const S=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,I=S.length;M<I;M++){const O=S[M],k=Array.isArray(O.value)?O.value:[O.value];for(let U=0,D=k.length;U<D;U++){const w=k[U],y=g(w),F=b%P,q=F%y.boundary,Y=F+q;b+=q,Y!==0&&P-Y<y.storage&&(b+=P-Y),O.__data=new Float32Array(y.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=b,b+=y.storage}}}const E=b%P;return E>0&&(b+=P-E),_.__size=b,_.__cache={},this}function g(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const b=s.indexOf(v.__bindingPointIndex);s.splice(b,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete o[v.id]}function f(){for(const _ in r)i.deleteBuffer(r[_]);s=[],r={},o={}}return{bind:l,update:c,dispose:f}}class Ip{constructor(e={}){const{canvas:t=rc(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=s;const x=new Uint32Array(4),g=new Int32Array(4);let m=null,f=null;const _=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this.toneMapping=Vn,this.toneMappingExposure=1;const b=this;let P=!1,E=0,A=0,T=null,S=-1,M=null;const I=new _e,O=new _e;let k=null;const U=new Vt(0);let D=0,w=t.width,y=t.height,F=1,q=null,Y=null;const X=new _e(0,0,w,y),L=new _e(0,0,w,y);let $=!1;const N=new Ks;let H=!1,K=!1;this.transmissionResolutionScale=1;const V=new Xt,G=new Xt,Z=new ot,B=new _e,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function ht(){return T===null?F:1}let z=n;function ut(W,at){return t.getContext(W,at)}try{const W={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bs}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",Rt,!1),t.addEventListener("webglcontextcreationerror",At,!1),z===null){const at="webgl2";if(z=ut(at,W),z===null)throw ut(at)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(W){throw console.error("THREE.WebGLRenderer: "+W.message),W}let et,rt,ct,Q,j,C,R,tt,it,ft,st,yt,gt,Mt,zt,_t,Tt,Dt,Ft,wt,Nt,Et,Ht,nt;function vt(){et=new Hh(z),et.init(),Et=new yp(z,et),rt=new kh(z,et,e,Et),ct=new vp(z,et),rt.reverseDepthBuffer&&h&&ct.buffers.depth.setReversed(!0),Q=new Vh(z),j=new cp,C=new wp(z,et,ct,j,rt,Et,Q),R=new Fh(b),tt=new Bh(b),it=new Kc(z),Ht=new Ih(z,it),ft=new Wh(z,it,Q,Ht),st=new Xh(z,ft,it,Q),Ft=new Yh(z,rt,C),_t=new Uh(j),yt=new lp(b,R,tt,et,rt,Ht,_t),gt=new Pp(b,j),Mt=new dp,zt=new gp(et),Dt=new Lh(b,R,tt,ct,st,p,l),Tt=new _p(b,st,rt),nt=new Lp(z,Q,rt,ct),wt=new Dh(z,et,Q),Nt=new Gh(z,et,Q),Q.programs=yt.programs,b.capabilities=rt,b.extensions=et,b.properties=j,b.renderLists=Mt,b.shadowMap=Tt,b.state=ct,b.info=Q}vt();const mt=new Ap(b,z);this.xr=mt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const W=et.get("WEBGL_lose_context");W&&W.loseContext()},this.forceContextRestore=function(){const W=et.get("WEBGL_lose_context");W&&W.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(W){W!==void 0&&(F=W,this.setSize(w,y,!1))},this.getSize=function(W){return W.set(w,y)},this.setSize=function(W,at,pt=!0){if(mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=W,y=at,t.width=Math.floor(W*F),t.height=Math.floor(at*F),pt===!0&&(t.style.width=W+"px",t.style.height=at+"px"),this.setViewport(0,0,W,at)},this.getDrawingBufferSize=function(W){return W.set(w*F,y*F).floor()},this.setDrawingBufferSize=function(W,at,pt){w=W,y=at,F=pt,t.width=Math.floor(W*pt),t.height=Math.floor(at*pt),this.setViewport(0,0,W,at)},this.getCurrentViewport=function(W){return W.copy(I)},this.getViewport=function(W){return W.copy(X)},this.setViewport=function(W,at,pt,xt){W.isVector4?X.set(W.x,W.y,W.z,W.w):X.set(W,at,pt,xt),ct.viewport(I.copy(X).multiplyScalar(F).round())},this.getScissor=function(W){return W.copy(L)},this.setScissor=function(W,at,pt,xt){W.isVector4?L.set(W.x,W.y,W.z,W.w):L.set(W,at,pt,xt),ct.scissor(O.copy(L).multiplyScalar(F).round())},this.getScissorTest=function(){return $},this.setScissorTest=function(W){ct.setScissorTest($=W)},this.setOpaqueSort=function(W){q=W},this.setTransparentSort=function(W){Y=W},this.getClearColor=function(W){return W.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(W=!0,at=!0,pt=!0){let xt=0;if(W){let dt=!1;if(T!==null){const St=T.texture.format;dt=St===Zs||St===Xs||St===Ys}if(dt){const St=T.texture.type,Lt=St===Ln||St===ci||St===fr||St===Hi||St===Ws||St===Gs,kt=Dt.getClearColor(),Ut=Dt.getClearAlpha(),Wt=kt.r,Gt=kt.g,Ot=kt.b;Lt?(x[0]=Wt,x[1]=Gt,x[2]=Ot,x[3]=Ut,z.clearBufferuiv(z.COLOR,0,x)):(g[0]=Wt,g[1]=Gt,g[2]=Ot,g[3]=Ut,z.clearBufferiv(z.COLOR,0,g))}else xt|=z.COLOR_BUFFER_BIT}at&&(xt|=z.DEPTH_BUFFER_BIT),pt&&(xt|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(xt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",Rt,!1),t.removeEventListener("webglcontextcreationerror",At,!1),Dt.dispose(),Mt.dispose(),zt.dispose(),j.dispose(),R.dispose(),tt.dispose(),st.dispose(),Ht.dispose(),nt.dispose(),yt.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",xe),mt.removeEventListener("sessionend",oe),ge.stop()};function bt(W){W.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const W=Q.autoReset,at=Tt.enabled,pt=Tt.autoUpdate,xt=Tt.needsUpdate,dt=Tt.type;vt(),Q.autoReset=W,Tt.enabled=at,Tt.autoUpdate=pt,Tt.needsUpdate=xt,Tt.type=dt}function At(W){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",W.statusMessage)}function Ct(W){const at=W.target;at.removeEventListener("dispose",Ct),Zt(at)}function Zt(W){me(W),j.remove(W)}function me(W){const at=j.get(W).programs;at!==void 0&&(at.forEach(function(pt){yt.releaseProgram(pt)}),W.isShaderMaterial&&yt.releaseShaderCache(W))}this.renderBufferDirect=function(W,at,pt,xt,dt,St){at===null&&(at=J);const Lt=dt.isMesh&&dt.matrixWorld.determinant()<0,kt=hl(W,at,pt,xt,dt);ct.setMaterial(xt,Lt);let Ut=pt.index,Wt=1;if(xt.wireframe===!0){if(Ut=ft.getWireframeAttribute(pt),Ut===void 0)return;Wt=2}const Gt=pt.drawRange,Ot=pt.attributes.position;let Qt=Gt.start*Wt,ie=(Gt.start+Gt.count)*Wt;St!==null&&(Qt=Math.max(Qt,St.start*Wt),ie=Math.min(ie,(St.start+St.count)*Wt)),Ut!==null?(Qt=Math.max(Qt,0),ie=Math.min(ie,Ut.count)):Ot!=null&&(Qt=Math.max(Qt,0),ie=Math.min(ie,Ot.count));const ve=ie-Qt;if(ve<0||ve===1/0)return;Ht.setup(dt,xt,kt,pt,Ut);let be,te=wt;if(Ut!==null&&(be=it.get(Ut),te=Nt,te.setIndex(be)),dt.isMesh)xt.wireframe===!0?(ct.setLineWidth(xt.wireframeLinewidth*ht()),te.setMode(z.LINES)):te.setMode(z.TRIANGLES);else if(dt.isLine){let Bt=xt.linewidth;Bt===void 0&&(Bt=1),ct.setLineWidth(Bt*ht()),dt.isLineSegments?te.setMode(z.LINES):dt.isLineLoop?te.setMode(z.LINE_LOOP):te.setMode(z.LINE_STRIP)}else dt.isPoints?te.setMode(z.POINTS):dt.isSprite&&te.setMode(z.TRIANGLES);if(dt.isBatchedMesh)if(dt._multiDrawInstances!==null)ei("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),te.renderMultiDrawInstances(dt._multiDrawStarts,dt._multiDrawCounts,dt._multiDrawCount,dt._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))te.renderMultiDraw(dt._multiDrawStarts,dt._multiDrawCounts,dt._multiDrawCount);else{const Bt=dt._multiDrawStarts,Le=dt._multiDrawCounts,re=dt._multiDrawCount,tn=Ut?it.get(Ut).bytesPerElement:1,hi=j.get(xt).currentProgram.getUniforms();for(let Ge=0;Ge<re;Ge++)hi.setValue(z,"_gl_DrawID",Ge),te.render(Bt[Ge]/tn,Le[Ge])}else if(dt.isInstancedMesh)te.renderInstances(Qt,ve,dt.count);else if(pt.isInstancedBufferGeometry){const Bt=pt._maxInstanceCount!==void 0?pt._maxInstanceCount:1/0,Le=Math.min(pt.instanceCount,Bt);te.renderInstances(Qt,ve,Le)}else te.render(Qt,ve)};function ne(W,at,pt){W.transparent===!0&&W.side===on&&W.forceSinglePass===!1?(W.side=ze,W.needsUpdate=!0,Mr(W,at,pt),W.side=mn,W.needsUpdate=!0,Mr(W,at,pt),W.side=on):Mr(W,at,pt)}this.compile=function(W,at,pt=null){pt===null&&(pt=W),f=zt.get(pt),f.init(at),v.push(f),pt.traverseVisible(function(dt){dt.isLight&&dt.layers.test(at.layers)&&(f.pushLight(dt),dt.castShadow&&f.pushShadow(dt))}),W!==pt&&W.traverseVisible(function(dt){dt.isLight&&dt.layers.test(at.layers)&&(f.pushLight(dt),dt.castShadow&&f.pushShadow(dt))}),f.setupLights();const xt=new Set;return W.traverse(function(dt){if(!(dt.isMesh||dt.isPoints||dt.isLine||dt.isSprite))return;const St=dt.material;if(St)if(Array.isArray(St))for(let Lt=0;Lt<St.length;Lt++){const kt=St[Lt];ne(kt,pt,dt),xt.add(kt)}else ne(St,pt,dt),xt.add(St)}),f=v.pop(),xt},this.compileAsync=function(W,at,pt=null){const xt=this.compile(W,at,pt);return new Promise(dt=>{function St(){if(xt.forEach(function(Lt){j.get(Lt).currentProgram.isReady()&&xt.delete(Lt)}),xt.size===0){dt(W);return}setTimeout(St,10)}et.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Ae=null;function Qe(W){Ae&&Ae(W)}function xe(){ge.stop()}function oe(){ge.start()}const ge=new il;ge.setAnimationLoop(Qe),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(W){Ae=W,mt.setAnimationLoop(W),W===null?ge.stop():ge.start()},mt.addEventListener("sessionstart",xe),mt.addEventListener("sessionend",oe),this.render=function(W,at){if(at!==void 0&&at.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),at.parent===null&&at.matrixWorldAutoUpdate===!0&&at.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(at),at=mt.getCamera()),W.isScene===!0&&W.onBeforeRender(b,W,at,T),f=zt.get(W,v.length),f.init(at),v.push(f),G.multiplyMatrices(at.projectionMatrix,at.matrixWorldInverse),N.setFromProjectionMatrix(G),K=this.localClippingEnabled,H=_t.init(this.clippingPlanes,K),m=Mt.get(W,_.length),m.init(),_.push(m),mt.enabled===!0&&mt.isPresenting===!0){const St=b.xr.getDepthSensingMesh();St!==null&&gr(St,at,-1/0,b.sortObjects)}gr(W,at,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(q,Y),lt=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,lt&&Dt.addToRenderList(m,W),this.info.render.frame++,H===!0&&_t.beginShadows();const pt=f.state.shadowsArray;Tt.render(pt,W,at),H===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();const xt=m.opaque,dt=m.transmissive;if(f.setupLights(),at.isArrayCamera){const St=at.cameras;if(dt.length>0)for(let Lt=0,kt=St.length;Lt<kt;Lt++){const Ut=St[Lt];he(xt,dt,W,Ut)}lt&&Dt.render(W);for(let Lt=0,kt=St.length;Lt<kt;Lt++){const Ut=St[Lt];mo(m,W,Ut,Ut.viewport)}}else dt.length>0&&he(xt,dt,W,at),lt&&Dt.render(W),mo(m,W,at);T!==null&&A===0&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),W.isScene===!0&&W.onAfterRender(b,W,at),Ht.resetDefaultState(),S=-1,M=null,v.pop(),v.length>0?(f=v[v.length-1],H===!0&&_t.setGlobalState(b.clippingPlanes,f.state.camera)):f=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function gr(W,at,pt,xt){if(W.visible===!1)return;if(W.layers.test(at.layers)){if(W.isGroup)pt=W.renderOrder;else if(W.isLOD)W.autoUpdate===!0&&W.update(at);else if(W.isLight)f.pushLight(W),W.castShadow&&f.pushShadow(W);else if(W.isSprite){if(!W.frustumCulled||N.intersectsSprite(W)){xt&&B.setFromMatrixPosition(W.matrixWorld).applyMatrix4(G);const Lt=st.update(W),kt=W.material;kt.visible&&m.push(W,Lt,kt,pt,B.z,null)}}else if((W.isMesh||W.isLine||W.isPoints)&&(!W.frustumCulled||N.intersectsObject(W))){const Lt=st.update(W),kt=W.material;if(xt&&(W.boundingSphere!==void 0?(W.boundingSphere===null&&W.computeBoundingSphere(),B.copy(W.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),B.copy(Lt.boundingSphere.center)),B.applyMatrix4(W.matrixWorld).applyMatrix4(G)),Array.isArray(kt)){const Ut=Lt.groups;for(let Wt=0,Gt=Ut.length;Wt<Gt;Wt++){const Ot=Ut[Wt],Qt=kt[Ot.materialIndex];Qt&&Qt.visible&&m.push(W,Lt,Qt,pt,B.z,Ot)}}else kt.visible&&m.push(W,Lt,kt,pt,B.z,null)}}const St=W.children;for(let Lt=0,kt=St.length;Lt<kt;Lt++)gr(St[Lt],at,pt,xt)}function mo(W,at,pt,xt){const dt=W.opaque,St=W.transmissive,Lt=W.transparent;f.setupLightsView(pt),H===!0&&_t.setGlobalState(b.clippingPlanes,pt),xt&&ct.viewport(I.copy(xt)),dt.length>0&&br(dt,at,pt),St.length>0&&br(St,at,pt),Lt.length>0&&br(Lt,at,pt),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function he(W,at,pt,xt){if((pt.isScene===!0?pt.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[xt.id]===void 0&&(f.state.transmissionRenderTarget[xt.id]=new ui(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?mr:Ln,minFilter:Wn,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const St=f.state.transmissionRenderTarget[xt.id],Lt=xt.viewport||I;St.setSize(Lt.z*b.transmissionResolutionScale,Lt.w*b.transmissionResolutionScale);const kt=b.getRenderTarget();b.setRenderTarget(St),b.getClearColor(U),D=b.getClearAlpha(),D<1&&b.setClearColor(16777215,.5),b.clear(),lt&&Dt.render(pt);const Ut=b.toneMapping;b.toneMapping=Vn;const Wt=xt.viewport;if(xt.viewport!==void 0&&(xt.viewport=void 0),f.setupLightsView(xt),H===!0&&_t.setGlobalState(b.clippingPlanes,xt),br(W,pt,xt),C.updateMultisampleRenderTarget(St),C.updateRenderTargetMipmap(St),et.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Ot=0,Qt=at.length;Ot<Qt;Ot++){const ie=at[Ot],ve=ie.object,be=ie.geometry,te=ie.material,Bt=ie.group;if(te.side===on&&ve.layers.test(xt.layers)){const Le=te.side;te.side=ze,te.needsUpdate=!0,ra(ve,pt,xt,be,te,Bt),te.side=Le,te.needsUpdate=!0,Gt=!0}}Gt===!0&&(C.updateMultisampleRenderTarget(St),C.updateRenderTargetMipmap(St))}b.setRenderTarget(kt),b.setClearColor(U,D),Wt!==void 0&&(xt.viewport=Wt),b.toneMapping=Ut}function br(W,at,pt){const xt=at.isScene===!0?at.overrideMaterial:null;for(let dt=0,St=W.length;dt<St;dt++){const Lt=W[dt],kt=Lt.object,Ut=Lt.geometry,Wt=xt===null?Lt.material:xt,Gt=Lt.group;kt.layers.test(pt.layers)&&ra(kt,at,pt,Ut,Wt,Gt)}}function ra(W,at,pt,xt,dt,St){W.onBeforeRender(b,at,pt,xt,dt,St),W.modelViewMatrix.multiplyMatrices(pt.matrixWorldInverse,W.matrixWorld),W.normalMatrix.getNormalMatrix(W.modelViewMatrix),dt.onBeforeRender(b,at,pt,xt,W,St),dt.transparent===!0&&dt.side===on&&dt.forceSinglePass===!1?(dt.side=ze,dt.needsUpdate=!0,b.renderBufferDirect(pt,at,xt,dt,W,St),dt.side=mn,dt.needsUpdate=!0,b.renderBufferDirect(pt,at,xt,dt,W,St),dt.side=on):b.renderBufferDirect(pt,at,xt,dt,W,St),W.onAfterRender(b,at,pt,xt,dt,St)}function Mr(W,at,pt){at.isScene!==!0&&(at=J);const xt=j.get(W),dt=f.state.lights,St=f.state.shadowsArray,Lt=dt.state.version,kt=yt.getParameters(W,dt.state,St,at,pt),Ut=yt.getProgramCacheKey(kt);let Wt=xt.programs;xt.environment=W.isMeshStandardMaterial?at.environment:null,xt.fog=at.fog,xt.envMap=(W.isMeshStandardMaterial?tt:R).get(W.envMap||xt.environment),xt.envMapRotation=xt.environment!==null&&W.envMap===null?at.environmentRotation:W.envMapRotation,Wt===void 0&&(W.addEventListener("dispose",Ct),Wt=new Map,xt.programs=Wt);let Gt=Wt.get(Ut);if(Gt!==void 0){if(xt.currentProgram===Gt&&xt.lightsStateVersion===Lt)return sa(W,kt),Gt}else kt.uniforms=yt.getUniforms(W),W.onBeforeCompile(kt,b),Gt=yt.acquireProgram(kt,Ut),Wt.set(Ut,Gt),xt.uniforms=kt.uniforms;const Ot=xt.uniforms;return(!W.isShaderMaterial&&!W.isRawShaderMaterial||W.clipping===!0)&&(Ot.clippingPlanes=_t.uniform),sa(W,kt),xt.needsLights=pl(W),xt.lightsStateVersion=Lt,xt.needsLights&&(Ot.ambientLightColor.value=dt.state.ambient,Ot.lightProbe.value=dt.state.probe,Ot.directionalLights.value=dt.state.directional,Ot.directionalLightShadows.value=dt.state.directionalShadow,Ot.spotLights.value=dt.state.spot,Ot.spotLightShadows.value=dt.state.spotShadow,Ot.rectAreaLights.value=dt.state.rectArea,Ot.ltc_1.value=dt.state.rectAreaLTC1,Ot.ltc_2.value=dt.state.rectAreaLTC2,Ot.pointLights.value=dt.state.point,Ot.pointLightShadows.value=dt.state.pointShadow,Ot.hemisphereLights.value=dt.state.hemi,Ot.directionalShadowMap.value=dt.state.directionalShadowMap,Ot.directionalShadowMatrix.value=dt.state.directionalShadowMatrix,Ot.spotShadowMap.value=dt.state.spotShadowMap,Ot.spotLightMatrix.value=dt.state.spotLightMatrix,Ot.spotLightMap.value=dt.state.spotLightMap,Ot.pointShadowMap.value=dt.state.pointShadowMap,Ot.pointShadowMatrix.value=dt.state.pointShadowMatrix),xt.currentProgram=Gt,xt.uniformsList=null,Gt}function oa(W){if(W.uniformsList===null){const at=W.currentProgram.getUniforms();W.uniformsList=no.seqWithValue(at.seq,W.uniforms)}return W.uniformsList}function sa(W,at){const pt=j.get(W);pt.outputColorSpace=at.outputColorSpace,pt.batching=at.batching,pt.batchingColor=at.batchingColor,pt.instancing=at.instancing,pt.instancingColor=at.instancingColor,pt.instancingMorph=at.instancingMorph,pt.skinning=at.skinning,pt.morphTargets=at.morphTargets,pt.morphNormals=at.morphNormals,pt.morphColors=at.morphColors,pt.morphTargetsCount=at.morphTargetsCount,pt.numClippingPlanes=at.numClippingPlanes,pt.numIntersection=at.numClipIntersection,pt.vertexAlphas=at.vertexAlphas,pt.vertexTangents=at.vertexTangents,pt.toneMapping=at.toneMapping}function hl(W,at,pt,xt,dt){at.isScene!==!0&&(at=J),C.resetTextureUnits();const St=at.fog,Lt=xt.isMeshStandardMaterial?at.environment:null,kt=T===null?b.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Gi,Ut=(xt.isMeshStandardMaterial?tt:R).get(xt.envMap||Lt),Wt=xt.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,Gt=!!pt.attributes.tangent&&(!!xt.normalMap||xt.anisotropy>0),Ot=!!pt.morphAttributes.position,Qt=!!pt.morphAttributes.normal,ie=!!pt.morphAttributes.color;let ve=Vn;xt.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ve=b.toneMapping);const be=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,te=be!==void 0?be.length:0,Bt=j.get(xt),Le=f.state.lights;if(H===!0&&(K===!0||W!==M)){const Ue=W===M&&xt.id===S;_t.setState(xt,W,Ue)}let re=!1;xt.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Le.state.version||Bt.outputColorSpace!==kt||dt.isBatchedMesh&&Bt.batching===!1||!dt.isBatchedMesh&&Bt.batching===!0||dt.isBatchedMesh&&Bt.batchingColor===!0&&dt.colorTexture===null||dt.isBatchedMesh&&Bt.batchingColor===!1&&dt.colorTexture!==null||dt.isInstancedMesh&&Bt.instancing===!1||!dt.isInstancedMesh&&Bt.instancing===!0||dt.isSkinnedMesh&&Bt.skinning===!1||!dt.isSkinnedMesh&&Bt.skinning===!0||dt.isInstancedMesh&&Bt.instancingColor===!0&&dt.instanceColor===null||dt.isInstancedMesh&&Bt.instancingColor===!1&&dt.instanceColor!==null||dt.isInstancedMesh&&Bt.instancingMorph===!0&&dt.morphTexture===null||dt.isInstancedMesh&&Bt.instancingMorph===!1&&dt.morphTexture!==null||Bt.envMap!==Ut||xt.fog===!0&&Bt.fog!==St||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==_t.numPlanes||Bt.numIntersection!==_t.numIntersection)||Bt.vertexAlphas!==Wt||Bt.vertexTangents!==Gt||Bt.morphTargets!==Ot||Bt.morphNormals!==Qt||Bt.morphColors!==ie||Bt.toneMapping!==ve||Bt.morphTargetsCount!==te)&&(re=!0):(re=!0,Bt.__version=xt.version);let tn=Bt.currentProgram;re===!0&&(tn=Mr(xt,at,dt));let hi=!1,Ge=!1,Ki=!1;const de=tn.getUniforms(),qe=Bt.uniforms;if(ct.useProgram(tn.program)&&(hi=!0,Ge=!0,Ki=!0),xt.id!==S&&(S=xt.id,Ge=!0),hi||M!==W){ct.buffers.depth.getReversed()?(V.copy(W.projectionMatrix),sc(V),ac(V),de.setValue(z,"projectionMatrix",V)):de.setValue(z,"projectionMatrix",W.projectionMatrix),de.setValue(z,"viewMatrix",W.matrixWorldInverse);const Oe=de.map.cameraPosition;Oe!==void 0&&Oe.setValue(z,Z.setFromMatrixPosition(W.matrixWorld)),rt.logarithmicDepthBuffer&&de.setValue(z,"logDepthBufFC",2/(Math.log(W.far+1)/Math.LN2)),(xt.isMeshPhongMaterial||xt.isMeshToonMaterial||xt.isMeshLambertMaterial||xt.isMeshBasicMaterial||xt.isMeshStandardMaterial||xt.isShaderMaterial)&&de.setValue(z,"isOrthographic",W.isOrthographicCamera===!0),M!==W&&(M=W,Ge=!0,Ki=!0)}if(dt.isSkinnedMesh){de.setOptional(z,dt,"bindMatrix"),de.setOptional(z,dt,"bindMatrixInverse");const Ue=dt.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),de.setValue(z,"boneTexture",Ue.boneTexture,C))}dt.isBatchedMesh&&(de.setOptional(z,dt,"batchingTexture"),de.setValue(z,"batchingTexture",dt._matricesTexture,C),de.setOptional(z,dt,"batchingIdTexture"),de.setValue(z,"batchingIdTexture",dt._indirectTexture,C),de.setOptional(z,dt,"batchingColorTexture"),dt._colorsTexture!==null&&de.setValue(z,"batchingColorTexture",dt._colorsTexture,C));const $e=pt.morphAttributes;if(($e.position!==void 0||$e.normal!==void 0||$e.color!==void 0)&&Ft.update(dt,pt,tn),(Ge||Bt.receiveShadow!==dt.receiveShadow)&&(Bt.receiveShadow=dt.receiveShadow,de.setValue(z,"receiveShadow",dt.receiveShadow)),xt.isMeshGouraudMaterial&&xt.envMap!==null&&(qe.envMap.value=Ut,qe.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),xt.isMeshStandardMaterial&&xt.envMap===null&&at.environment!==null&&(qe.envMapIntensity.value=at.environmentIntensity),Ge&&(de.setValue(z,"toneMappingExposure",b.toneMappingExposure),Bt.needsLights&&fl(qe,Ki),St&&xt.fog===!0&&gt.refreshFogUniforms(qe,St),gt.refreshMaterialUniforms(qe,xt,F,y,f.state.transmissionRenderTarget[W.id]),no.upload(z,oa(Bt),qe,C)),xt.isShaderMaterial&&xt.uniformsNeedUpdate===!0&&(no.upload(z,oa(Bt),qe,C),xt.uniformsNeedUpdate=!1),xt.isSpriteMaterial&&de.setValue(z,"center",dt.center),de.setValue(z,"modelViewMatrix",dt.modelViewMatrix),de.setValue(z,"normalMatrix",dt.normalMatrix),de.setValue(z,"modelMatrix",dt.matrixWorld),xt.isShaderMaterial||xt.isRawShaderMaterial){const Ue=xt.uniformsGroups;for(let Oe=0,xo=Ue.length;Oe<xo;Oe++){const Yn=Ue[Oe];nt.update(Yn,tn),nt.bind(Yn,tn)}}return tn}function fl(W,at){W.ambientLightColor.needsUpdate=at,W.lightProbe.needsUpdate=at,W.directionalLights.needsUpdate=at,W.directionalLightShadows.needsUpdate=at,W.pointLights.needsUpdate=at,W.pointLightShadows.needsUpdate=at,W.spotLights.needsUpdate=at,W.spotLightShadows.needsUpdate=at,W.rectAreaLights.needsUpdate=at,W.hemisphereLights.needsUpdate=at}function pl(W){return W.isMeshLambertMaterial||W.isMeshToonMaterial||W.isMeshPhongMaterial||W.isMeshStandardMaterial||W.isShadowMaterial||W.isShaderMaterial&&W.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(W,at,pt){j.get(W.texture).__webglTexture=at,j.get(W.depthTexture).__webglTexture=pt;const xt=j.get(W);xt.__hasExternalTextures=!0,xt.__autoAllocateDepthBuffer=pt===void 0,xt.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),xt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(W,at){const pt=j.get(W);pt.__webglFramebuffer=at,pt.__useDefaultFramebuffer=at===void 0};const ml=z.createFramebuffer();this.setRenderTarget=function(W,at=0,pt=0){T=W,E=at,A=pt;let xt=!0,dt=null,St=!1,Lt=!1;if(W){const Ut=j.get(W);if(Ut.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(z.FRAMEBUFFER,null),xt=!1;else if(Ut.__webglFramebuffer===void 0)C.setupRenderTarget(W);else if(Ut.__hasExternalTextures)C.rebindTextures(W,j.get(W.texture).__webglTexture,j.get(W.depthTexture).__webglTexture);else if(W.depthBuffer){const Ot=W.depthTexture;if(Ut.__boundDepthTexture!==Ot){if(Ot!==null&&j.has(Ot)&&(W.width!==Ot.image.width||W.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(W)}}const Wt=W.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Lt=!0);const Gt=j.get(W).__webglFramebuffer;W.isWebGLCubeRenderTarget?(Array.isArray(Gt[at])?dt=Gt[at][pt]:dt=Gt[at],St=!0):W.samples>0&&C.useMultisampledRTT(W)===!1?dt=j.get(W).__webglMultisampledFramebuffer:Array.isArray(Gt)?dt=Gt[pt]:dt=Gt,I.copy(W.viewport),O.copy(W.scissor),k=W.scissorTest}else I.copy(X).multiplyScalar(F).floor(),O.copy(L).multiplyScalar(F).floor(),k=$;if(pt!==0&&(dt=ml),ct.bindFramebuffer(z.FRAMEBUFFER,dt)&&xt&&ct.drawBuffers(W,dt),ct.viewport(I),ct.scissor(O),ct.setScissorTest(k),St){const Ut=j.get(W.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ut.__webglTexture,pt)}else if(Lt){const Ut=j.get(W.texture),Wt=at;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ut.__webglTexture,pt,Wt)}else if(W!==null&&pt!==0){const Ut=j.get(W.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ut.__webglTexture,pt)}S=-1},this.readRenderTargetPixels=function(W,at,pt,xt,dt,St,Lt){if(!(W&&W.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=j.get(W).__webglFramebuffer;if(W.isWebGLCubeRenderTarget&&Lt!==void 0&&(kt=kt[Lt]),kt){ct.bindFramebuffer(z.FRAMEBUFFER,kt);try{const Ut=W.texture,Wt=Ut.format,Gt=Ut.type;if(!rt.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}at>=0&&at<=W.width-xt&&pt>=0&&pt<=W.height-dt&&z.readPixels(at,pt,xt,dt,Et.convert(Wt),Et.convert(Gt),St)}finally{const Ut=T!==null?j.get(T).__webglFramebuffer:null;ct.bindFramebuffer(z.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(W,at,pt,xt,dt,St,Lt){if(!(W&&W.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=j.get(W).__webglFramebuffer;if(W.isWebGLCubeRenderTarget&&Lt!==void 0&&(kt=kt[Lt]),kt){const Ut=W.texture,Wt=Ut.format,Gt=Ut.type;if(!rt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(at>=0&&at<=W.width-xt&&pt>=0&&pt<=W.height-dt){ct.bindFramebuffer(z.FRAMEBUFFER,kt);const Ot=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ot),z.bufferData(z.PIXEL_PACK_BUFFER,St.byteLength,z.STREAM_READ),z.readPixels(at,pt,xt,dt,Et.convert(Wt),Et.convert(Gt),0);const Qt=T!==null?j.get(T).__webglFramebuffer:null;ct.bindFramebuffer(z.FRAMEBUFFER,Qt);const ie=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await oc(z,ie,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ot),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,St),z.deleteBuffer(Ot),z.deleteSync(ie),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(W,at=null,pt=0){W.isTexture!==!0&&(ei("WebGLRenderer: copyFramebufferToTexture function signature has changed."),at=arguments[0]||null,W=arguments[1]);const xt=Math.pow(2,-pt),dt=Math.floor(W.image.width*xt),St=Math.floor(W.image.height*xt),Lt=at!==null?at.x:0,kt=at!==null?at.y:0;C.setTexture2D(W,0),z.copyTexSubImage2D(z.TEXTURE_2D,pt,0,0,Lt,kt,dt,St),ct.unbindTexture()};const xl=z.createFramebuffer(),gl=z.createFramebuffer();this.copyTextureToTexture=function(W,at,pt=null,xt=null,dt=0,St=null){W.isTexture!==!0&&(ei("WebGLRenderer: copyTextureToTexture function signature has changed."),xt=arguments[0]||null,W=arguments[1],at=arguments[2],St=arguments[3]||0,pt=null),St===null&&(dt!==0?(ei("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),St=dt,dt=0):St=0);let Lt,kt,Ut,Wt,Gt,Ot,Qt,ie,ve;const be=W.isCompressedTexture?W.mipmaps[St]:W.image;if(pt!==null)Lt=pt.max.x-pt.min.x,kt=pt.max.y-pt.min.y,Ut=pt.isBox3?pt.max.z-pt.min.z:1,Wt=pt.min.x,Gt=pt.min.y,Ot=pt.isBox3?pt.min.z:0;else{const $e=Math.pow(2,-dt);Lt=Math.floor(be.width*$e),kt=Math.floor(be.height*$e),W.isDataArrayTexture?Ut=be.depth:W.isData3DTexture?Ut=Math.floor(be.depth*$e):Ut=1,Wt=0,Gt=0,Ot=0}xt!==null?(Qt=xt.x,ie=xt.y,ve=xt.z):(Qt=0,ie=0,ve=0);const te=Et.convert(at.format),Bt=Et.convert(at.type);let Le;at.isData3DTexture?(C.setTexture3D(at,0),Le=z.TEXTURE_3D):at.isDataArrayTexture||at.isCompressedArrayTexture?(C.setTexture2DArray(at,0),Le=z.TEXTURE_2D_ARRAY):(C.setTexture2D(at,0),Le=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,at.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,at.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,at.unpackAlignment);const re=z.getParameter(z.UNPACK_ROW_LENGTH),tn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),hi=z.getParameter(z.UNPACK_SKIP_PIXELS),Ge=z.getParameter(z.UNPACK_SKIP_ROWS),Ki=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,be.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,be.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Wt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Gt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ot);const de=W.isDataArrayTexture||W.isData3DTexture,qe=at.isDataArrayTexture||at.isData3DTexture;if(W.isDepthTexture){const $e=j.get(W),Ue=j.get(at),Oe=j.get($e.__renderTarget),xo=j.get(Ue.__renderTarget);ct.bindFramebuffer(z.READ_FRAMEBUFFER,Oe.__webglFramebuffer),ct.bindFramebuffer(z.DRAW_FRAMEBUFFER,xo.__webglFramebuffer);for(let Yn=0;Yn<Ut;Yn++)de&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,j.get(W).__webglTexture,dt,Ot+Yn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,j.get(at).__webglTexture,St,ve+Yn)),z.blitFramebuffer(Wt,Gt,Lt,kt,Qt,ie,Lt,kt,z.DEPTH_BUFFER_BIT,z.NEAREST);ct.bindFramebuffer(z.READ_FRAMEBUFFER,null),ct.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(dt!==0||W.isRenderTargetTexture||j.has(W)){const $e=j.get(W),Ue=j.get(at);ct.bindFramebuffer(z.READ_FRAMEBUFFER,xl),ct.bindFramebuffer(z.DRAW_FRAMEBUFFER,gl);for(let Oe=0;Oe<Ut;Oe++)de?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,$e.__webglTexture,dt,Ot+Oe):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,$e.__webglTexture,dt),qe?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ue.__webglTexture,St,ve+Oe):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ue.__webglTexture,St),dt!==0?z.blitFramebuffer(Wt,Gt,Lt,kt,Qt,ie,Lt,kt,z.COLOR_BUFFER_BIT,z.NEAREST):qe?z.copyTexSubImage3D(Le,St,Qt,ie,ve+Oe,Wt,Gt,Lt,kt):z.copyTexSubImage2D(Le,St,Qt,ie,Wt,Gt,Lt,kt);ct.bindFramebuffer(z.READ_FRAMEBUFFER,null),ct.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else qe?W.isDataTexture||W.isData3DTexture?z.texSubImage3D(Le,St,Qt,ie,ve,Lt,kt,Ut,te,Bt,be.data):at.isCompressedArrayTexture?z.compressedTexSubImage3D(Le,St,Qt,ie,ve,Lt,kt,Ut,te,be.data):z.texSubImage3D(Le,St,Qt,ie,ve,Lt,kt,Ut,te,Bt,be):W.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,St,Qt,ie,Lt,kt,te,Bt,be.data):W.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,St,Qt,ie,be.width,be.height,te,be.data):z.texSubImage2D(z.TEXTURE_2D,St,Qt,ie,Lt,kt,te,Bt,be);z.pixelStorei(z.UNPACK_ROW_LENGTH,re),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,tn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,hi),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ge),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ki),St===0&&at.generateMipmaps&&z.generateMipmap(Le),ct.unbindTexture()},this.copyTextureToTexture3D=function(W,at,pt=null,xt=null,dt=0){return W.isTexture!==!0&&(ei("WebGLRenderer: copyTextureToTexture3D function signature has changed."),pt=arguments[0]||null,xt=arguments[1]||null,W=arguments[2],at=arguments[3],dt=arguments[4]||0),ei('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(W,at,pt,xt,dt)},this.initRenderTarget=function(W){j.get(W).__webglFramebuffer===void 0&&C.setupRenderTarget(W)},this.initTexture=function(W){W.isCubeTexture?C.setTextureCube(W,0):W.isData3DTexture?C.setTexture3D(W,0):W.isDataArrayTexture||W.isCompressedArrayTexture?C.setTexture2DArray(W,0):C.setTexture2D(W,0),ct.unbindTexture()},this.resetState=function(){E=0,A=0,T=null,ct.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ee._getDrawingBufferColorSpace(e),t.unpackColorSpace=ee._getUnpackColorSpace()}}class Dp{loader=new Gc;baseTextures=new Map;variantTextures=new Map;materials=new Map;maxAnisotropy=4;constructor(e){e&&(this.maxAnisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()))}setAnisotropy(e){this.maxAnisotropy=Math.min(8,e)}getTexture(e,t=1,n=1){const r=Math.round(t*100)/100,o=Math.round(n*100)/100,s=`${e}|${r}|${o}`,a=this.variantTextures.get(s);if(a)return a;let l=this.baseTextures.get(e);if(!l){const u=typeof window<"u"&&window.__KUROISO_TEXTURE_BASE__||"./textures/tiles";l=this.loader.load(`${u}/${e}.webp`),l.colorSpace=Ne,l.wrapS=si,l.wrapT=si,l.anisotropy=this.maxAnisotropy,l.generateMipmaps=!0,l.minFilter=Wn,l.magFilter=an,this.baseTextures.set(e,l)}if(r===1&&o===1)return this.variantTextures.set(s,l),l;const c=l.clone();return c.needsUpdate=!0,c.wrapS=si,c.wrapT=si,c.repeat.set(r,o),c.anisotropy=this.maxAnisotropy,c.colorSpace=Ne,this.variantTextures.set(s,c),c}getMaterial(e,t={}){const n=t.repeatX??1,r=t.repeatY??1,o=t.roughness??.88,s=t.metalness??.04,a=t.bumpScale??.035,l=t.doubleSide??!1,c=t.tint??16777215,u=t.opacity??1,d=t.transparent??u<.99,h=t.flatShading??!1,p=`${e}|${n}|${r}|${o}|${s}|${a}|${l?1:0}|${c}|${u}|${h?1:0}`,x=this.materials.get(p);if(x)return x;const g=this.getTexture(e,n,r),m=new Fi({map:g,bumpMap:a>0?g:null,bumpScale:a,roughness:o,metalness:s,color:c,side:l?on:mn,opacity:u,transparent:d,flatShading:h});return this.materials.set(p,m),m}}const ae=1024,le=2560,Kt={x:42,z:2158,yaw:Math.PI*.96},Me={x:80,z:-1480},gn={x:235,z:540},Ze={x:-145,z:-890,y:348},cn={x:430,z:-580,y:376},un={x:-522,z:-1768,y:2.8},Pn={x:-68,z:215,y:242},lo={x:82,z:480};function Vr(i,e){let t=Math.imul(i,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}function Pe(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)}function li(i,e,t){return i<e?e:i>t?t:i}function ll(i,e){const t=Math.floor(i),n=Math.floor(e),r=i-t,o=e-n,s=r*r*(3-2*r),a=o*o*(3-2*o),l=Vr(t,n),c=Vr(t+1,n),u=Vr(t,n+1),d=Vr(t+1,n+1);return(l+(c-l)*s+(u-l)*a+(l-c-u+d)*s*a)*2-1}function co(i,e,t=4){let n=0,r=.5,o=1,s=0;for(let a=0;a<t;a++){const l=i*o*.8-e*o*.6,c=i*o*.6+e*o*.8;n+=ll(l,c)*r,s+=r,r*=.5,o*=2.03}return n/s}function d0(i,e,t=4){let n=0,r=.55,o=1,s=1,a=0;for(let l=0;l<t;l++){const c=i*o*.8-e*o*.6+l*17.3,u=i*o*.6+e*o*.8-l*13.1;let d=1-Math.abs(ll(c,u));d*=d*s,s=li(d*1.8,.25,1),n+=d*r,a+=r,r*=.48,o*=2.06}return n/a}function na(i){return-215*Pe(1400,450,i)+Math.sin(i*.0028)*44+Math.cos(i*.0067+.8)*18+245*Pe(1250,2150,i)}const Ni=[{id:"road_coastal",name:"海岸林道（漂着浜〜黒磯村入口）",kind:"road",halfWidth:2.6,blendWidth:16,points:[[40,2125,3],[28,2030,14],[-55,1920,32],[-145,1805,52],[-65,1690,72],[75,1590,92],[165,1480,114],[85,1365,134],[-55,1255,152],[-125,1135,168],[-30,1020,184],[95,915,199],[148,800,212],[115,685,222],[85,575,230],[82,480,238]]},{id:"road_village_mid",name:"村道黒磯本通り（中段斜面道）",kind:"road",halfWidth:2.5,blendWidth:15,points:[[82,480,238],[165,515,254],[235,540,268],[215,455,263],[165,380,256],[132,315,252],[95,235,249],[58,145,248],[32,55,250],[12,-35,253],[-28,-110,256],[-72,-165,258],[-85,-255,262],[-65,-345,268],[-30,-440,278]]},{id:"road_village_low",name:"下段斜面村道（渓谷・公園通り）",kind:"road",halfWidth:2.3,blendWidth:14,points:[[82,480,238],[20,430,230],[-45,375,224],[-88,305,228],[-68,215,242],[-82,125,234],[-115,30,225],[-125,-75,233],[-112,-135,245],[-92,-162,253],[-72,-165,258]]},{id:"road_village_high",name:"上段山腹道（高台集落通り）",kind:"road",halfWidth:2.2,blendWidth:14,points:[[235,540,268],[268,420,274],[262,290,276],[245,165,278],[228,40,280],[215,-90,282],[210,-210,286],[185,-310,290],[95,-395,286],[-30,-440,278]]},{id:"road_forestry",name:"山の中の道（黒磯林道〜1890年炭鉱谷）",kind:"forestry",halfWidth:2.1,blendWidth:15,points:[[-30,-440,278],[-75,-530,294],[-130,-630,312],[-165,-735,328],[-155,-825,340],[-145,-890,348],[-245,-870,335],[-355,-895,388],[-460,-950,422],[-540,-1035,425]]},{id:"trail_summit_865",name:"黒磯岳山頂への獣道（標高865mルート）",kind:"trail",halfWidth:1.35,blendWidth:15,points:[[185,-310,290],[245,-385,310],[310,-455,320],[352,-525,315],[325,-625,325],[315,-735,360],[355,-850,425],[335,-955,475],[335,-1055,520],[365,-1145,560],[355,-1245,635],[255,-1315,718],[155,-1365,765],[40,-1410,800],[135,-1445,832],[80,-1480,865]]},{id:"trail_secret_base",name:"秘密基地へのけもの道",kind:"trail",halfWidth:1.15,blendWidth:12,points:[[352,-525,315],[395,-510,345],[445,-530,365],[452,-562,374],[430,-580,376]]},{id:"trail_hidden_port",name:"秘境の旧港へのけもの道",kind:"trail",halfWidth:1.35,blendWidth:14,points:[[-540,-1035,425],[-575,-1130,385],[-595,-1230,340],[-600,-1330,300],[-585,-1425,245],[-575,-1505,185],[-545,-1575,130],[-480,-1635,120],[-442,-1690,82],[-455,-1722,42],[-472,-1748,18],[-498,-1764,6],[-522,-1768,2.8]]}],Je=[{id:"K01",name:"黒磯駐在所（交番）予定地",category:"koban",x:82,z:480,y:238,radiusX:7,radiusZ:6,yaw:-.4,blendMargin:13,note:"海岸林道と中段・下段村道の要衝交差点"},{id:"S01",name:"黒磯よろず商店・郵便取扱所",category:"shop",x:132,z:315,y:252,radiusX:8.5,radiusZ:7,yaw:-1.35,blendMargin:14,note:"中段本通り角地・商業施設01予定地"},{id:"S02",name:"炭鉱購買部・食堂「みなとや」",category:"shop",x:-72,z:-165,y:258,radiusX:9.5,radiusZ:7.2,yaw:.45,blendMargin:15,note:"渓谷中央・商業施設02予定地"},{id:"P01",name:"見晴らし村営公園",category:"park",x:-68,z:215,y:242,radiusX:15,radiusZ:12,yaw:.2,blendMargin:16,note:"石垣縁の芝雑草広場・村営公園（1件）"},{id:"B01",name:"子供たちの山奥の秘密基地",category:"secret_base",x:430,z:-580,y:376,radiusX:8,radiusZ:7.5,yaw:-.8,blendMargin:14,note:"東山中・深い杉林とシダの隠れ窪地"},{id:"M01",name:"旧黒磯炭鉱 第一坑口（1890）",category:"mine",x:-145,z:-890,y:348,radiusX:13,radiusZ:11,yaw:.15,blendMargin:16,note:"明治23年開坑予定地・黒岩断崖直下"},{id:"PORT01",name:"秘境の旧港（建設案）",category:"port",x:-522,z:-1768,y:2.8,radiusX:14,radiusZ:4.8,yaw:Math.PI*.25,blendMargin:4.5,note:"けもの道を抜けた先の北西天然入江港"},{id:"H01",name:"民家 01（浜田家・二階建町家）",category:"house",x:49,z:437,y:233,radiusX:6.8,radiusZ:5.8,yaw:-.68,blendMargin:11.5,note:"下段斜面・交差点下・焼杉いぶし銀本瓦二階家"},{id:"H02",name:"民家 02（磯部家・三階建櫓家）",category:"house",x:-32,z:406,y:226,radiusX:6.2,radiusZ:5.8,yaw:2.44,blendMargin:11.5,note:"下段斜面・石州赤茶釉薬瓦三階見張り櫓家"},{id:"H03",name:"民家 03（高木家・L字二階工房邸）",category:"house",x:-79,z:354,y:224,radiusX:7.6,radiusZ:6.4,yaw:2.12,blendMargin:12,note:"下段斜面・L字船大工二階工房（北屋根半崩落）"},{id:"H04",name:"民家 04（岩崎家・石蔵三階民家）",category:"house",x:-108,z:282,y:228,radiusX:6.8,radiusZ:5.8,yaw:1.25,blendMargin:12,note:"下段斜面・1F野面積石壁＋苔黒瓦寄棟三階家"},{id:"H05",name:"民家 05（佐伯家・苔蔦二階廃墟）",category:"house",x:-98,z:152,y:235,radiusX:6.2,radiusZ:5.4,yaw:1.58,blendMargin:12,note:"公園北側・苔と蔦の半壊二階建廃家"},{id:"H06",name:"民家予定地 06（藤原家）",category:"house",x:-132,z:62,y:226,radiusX:6.2,radiusZ:5.4,yaw:1.45,blendMargin:12,note:"沢沿い・半壊家屋予定地"},{id:"H07",name:"民家 07（安藤家・大工棟梁四階櫓邸）",category:"house",x:-145,z:-38,y:228,radiusX:8.2,radiusZ:6.8,yaw:1.62,blendMargin:13.5,note:"1877年築・懸造り基礎＆木工刻み場・360°屋外回廊付四階木組櫓邸"},{id:"H08",name:"民家 08（永井家・分校教員宿舎＆補習教室）",category:"house",x:-130,z:-120,y:239.2,radiusX:8.4,radiusZ:6.4,yaw:1.32,blendMargin:13,note:"1889年築・補習教室＆大黒板・2Fサンルーム・青銅苔瓦丁字切妻二階館"},{id:"H09",name:"民家 09（森本家・赤瓦三階名家）",category:"house",x:212,z:518,y:266,radiusX:7.6,radiusZ:6.4,yaw:-.45,blendMargin:12.5,note:"見晴らし坂手前・赤瓦入母屋三階建＆見晴らし縁側"},{id:"H10",name:"民家 10（白井医院・擬洋風三階館）",category:"house",x:208,z:424,y:260,radiusX:7.2,radiusZ:6,yaw:-1.12,blendMargin:12,note:"明治擬洋風三階木造診療所・いぶし銀本瓦入母屋"},{id:"H11",name:"民家 11（黒田本家・庄屋四階望楼邸）",category:"house",x:162,z:348,y:254,radiusX:8.8,radiusZ:7.2,yaw:-1.18,blendMargin:13.5,note:"1872年築・四重本瓦入母屋＆四階望楼の庄屋本宅"},{id:"H12",name:"民家 12（松岡家・白壁瓦二階家）",category:"house",x:72,z:262,y:248,radiusX:6.8,radiusZ:5.8,yaw:1.85,blendMargin:12.5,note:"参考写真中央・白漆喰＆濃灰いぶし瓦二階家"},{id:"H13",name:"民家 13（神谷家・朱塗冠木門三階社家）",category:"house",x:82,z:175,y:249,radiusX:7.6,radiusZ:6.8,yaw:-1.22,blendMargin:12.5,note:"1879年築・独立朱塗冠木門・苔石坪庭吹抜・千鳥破風本瓦三階邸"},{id:"H14",name:"民家 14（村田家・煉瓦煙突三階邸）",category:"house",x:56,z:88,y:249,radiusX:8.2,radiusZ:6.4,yaw:-1.32,blendMargin:13,note:"1883年築・11.8m赤煉瓦ペチカ煙突・リシン洋間・3F物干し高欄デッキ"},{id:"H15",name:"民家 15（吉田家・空中渡り廊下二棟邸）",category:"house",x:34,z:-10,y:252,radiusX:8.8,radiusZ:6.6,yaw:-1.35,blendMargin:13.5,note:"1880年明治本瓦本屋×1958年昭和トタン車庫をガラス空中渡り廊下で連結"},{id:"H16",name:"民家 16（田辺家・半地下石倉三階豪農）",category:"house",x:-4,z:-92,y:255,radiusX:8.6,radiusZ:6.4,yaw:-1.1,blendMargin:13.5,note:"1878年築・半地下石倉(5段下降)・重鉄防火扉・養蚕3F＆越屋根本瓦"},{id:"H17",name:"民家予定地 17（大野家）",category:"house",x:-52,z:-225,y:260,radiusX:6,radiusZ:5.4,yaw:.6,blendMargin:12,note:"蔦に覆われた全壊寸前家予定地"},{id:"H18",name:"民家予定地 18（杉山家）",category:"house",x:-96,z:-315,y:266,radiusX:6.2,radiusZ:5.4,yaw:.9,blendMargin:12,note:"木こりの丸太小屋予定地"},{id:"H19",name:"民家 19（小川家・懸造り木橋三階茶亭）",category:"house",x:282,z:468,y:273,radiusX:8.2,radiusZ:7.4,yaw:-1.75,blendMargin:13.5,note:"1884年築・清水式懸造り杉柱脚＆4.5m木橋玄関・赤銅錆本瓦三階茶亭"},{id:"H20",name:"民家 20（旧黒磯炭鉱・明治技師館）",category:"house",x:280,z:340,y:275,radiusX:8.4,radiusZ:6.8,yaw:-1.65,blendMargin:13.5,note:"1891年築・青磁色下見板＆宝形本瓦四階角望楼塔屋の洋和折衷官邸"},{id:"H21",name:"民家 21（第一坑夫長屋・三戸連棟）",category:"house",x:262,z:215,y:277,radiusX:11.4,radiusZ:6.4,yaw:-1.48,blendMargin:14,note:"1893年築・島最大幅19.6m三戸連棟炭住長屋（全3戸個別間取り＆21m本瓦大屋根）"},{id:"H22",name:"民家 22（黒岩監督邸・懸造り四階館）",category:"house",x:246,z:95,y:279,radiusX:7.4,radiusZ:6.4,yaw:-1.48,blendMargin:13,note:"高石垣＆懸造り木柱脚・重層瓦屋根の四階監督官邸"},{id:"H23",name:"民家 23（鉄山鍛冶場・越屋根吹抜二階）",category:"house",x:232,z:-45,y:281,radiusX:8.6,radiusZ:6.4,yaw:-1.7,blendMargin:13,note:"1885年築・煙出し越屋根＆12m煉瓦大煙突・6.5m吹抜鍛冶場＆見下ろし回廊"},{id:"H24",name:"民家 24（旧黒磯炭鉱 詰所兼独身寮）",category:"house",x:222,z:-175,y:285,radiusX:10.4,radiusZ:6.8,yaw:-1.58,blendMargin:14,note:"1895年築・幅16.4m現場詰所・青タイル共同浴場・2F独身4個室＆東屋外非常階段・3F組合食堂"},{id:"H25",name:"民家予定地 25（沢田小屋）",category:"house",x:142,z:-362,y:288,radiusX:5.8,radiusZ:5.2,yaw:-2.15,blendMargin:12,note:"落石崩壊小屋・獣道入口近く"}],po=new Set(["H01","H02","H03","H04","H05","H07","H08","H09","H10","H11","H12","H13","H14","H15","H16","H19","H20","H21","H22","H23","H24"]),h0=Je.filter(i=>po.has(i.id));function $o(i,e,t=0){for(let n=0;n<h0.length;n++){const r=h0[n],o=i-r.x,s=e-r.z,a=Math.max(r.radiusX,r.radiusZ)+t+1.5;if(o*o+s*s>a*a)continue;const l=Math.cos(r.yaw),c=Math.sin(r.yaw),u=o*l-s*c,d=o*c+s*l;if(Math.abs(u)<r.radiusX*.94+t&&Math.abs(d)<r.radiusZ*.94+t)return!0}return!1}const ia=128,fn=Math.ceil(ae*2/ia),En=Math.ceil(le*2/ia),Ns=Array.from({length:fn*En},()=>[]),cl=Array.from({length:fn*En},()=>[]);function io(i,e){return e*fn+i}function He(i,e,t){return li(Math.floor((i+e)/ia),0,t-1)}function ul(i,e){const t=i/960,n=e/2410,r=co(i*72e-5,e*72e-5,3)*.13,o=1-.14*Pe(-1350,-2420,e)-.08*Pe(1600,2420,e),s=Math.sqrt(t/o*(t/o)+n*n)+r,a=Math.exp(-(Math.pow((i-42)/215,2)+Math.pow((e-2345)/240,2))),l=Math.exp(-(Math.pow((i+615)/185,2)+Math.pow((e+1820)/175,2))),c=s+a*.36+l*.24,u=1-Pe(.74,1.03,c),d=1-Pe(.95,1.24,c);if(d<=1e-4)return-28;const h=232*Pe(.98,.44,c),p=595*Math.exp(-(Math.pow((i-80)/485,2)+Math.pow((e+1480)/560,2))),x=235*Math.exp(-(Math.pow((i-610)/340,2)+Math.pow((e+1320)/400,2))),g=255*Math.exp(-(Math.pow((i+495)/335,2)+Math.pow((e+1230)/390,2))),m=250*Math.exp(-(Math.pow((i+120)/350,2)+Math.pow((e+2060)/330,2))),f=415*Math.exp(-(Math.pow((i-765)/295,2)+Math.pow((e+60)/680,2))),_=385*Math.exp(-(Math.pow((i+710)/315,2)+Math.pow((e-120)/680,2))),v=275*Math.exp(-(Math.pow((i-650)/335,2)+Math.pow((e-1050)/520,2))),b=255*Math.exp(-(Math.pow((i+610)/335,2)+Math.pow((e-1120)/520,2))),P=145*Math.exp(-(Math.pow((i-310)/240,2)+Math.pow((e-1500)/300,2))),E=130*Math.exp(-(Math.pow((i+250)/240,2)+Math.pow((e-1540)/300,2))),A=155*Math.exp(-(Math.pow((i+520)/240,2)+Math.pow((e-2050)/280,2))),T=180*Math.exp(-(Math.pow((i-550)/250,2)+Math.pow((e-2010)/280,2))),S=98*Math.exp(-(Math.pow((i+560)/115,2)+Math.pow((e+1575)/120,2))),M=Math.exp(-(Math.pow((i-60)/420,2)+Math.pow((e-100)/680,2))),I=na(e),O=Math.abs(i-I),k=-58*Math.exp(-Math.pow(O/72,2))*Pe(-880,-320,e)*Pe(2180,1650,e),U=-112*Math.exp(-(Math.pow((i+150)/165,2)+Math.pow((e+820)/210,2)))*Pe(-965,-895,e),D=M*((i+80)*.145-(e-180)*.032),w=d0(i*.0018,e*.0018,4),y=d0(i*.0054,e*.0054,3),F=co(i*.022,e*.022,2),q=1-M*.58,Y=(w-.36)*(88*q+22)+(y-.42)*(22*q+6)+F*3.2;let X=h+p+x+g+m+f+_+v+b+P+E+A+T+S+k+U+D+Y;const L=Math.hypot(i-Me.x,e-Me.z);if(L<220){const Z=1-Pe(12,220,L),B=865-Math.max(0,L-10)*.58+F*.5;X=X*(1-Z)+B*Z}const $=Math.exp(-(Math.pow((i-10)/185,2)+Math.pow((e-1960)/290,2)));X*=1-$*.72;const N=Math.exp(-(Math.pow((i+530)/86,2)+Math.pow((e+1775)/86,2)));X=X*(1-N*.9)+2.4*(N*.9);const H=-28*(1-d)-2.6*d;let K=H+(X-H)*Math.pow(u,.54);const V=Math.exp(-(Math.pow((i-42)/105,2)+Math.pow((e-2165)/72,2)));if(V>.005){const Z=li((2205-e)*.045+.15,-2.5,6.2);K=K*(1-V)+Z*V}const G=Math.exp(-(Math.pow((i+522)/66,2)+Math.pow((e+1768)/66,2)));if(G>.005){const Z=(i+522+(e+1768))*.7071,B=Z>=-4.8?li(2.8+Math.max(0,Z-4)*.24,2.6,16):li(-2.2+(Z+4.8)*.3,-9,-1.6);K=K*(1-G)+B*G}return K}function or(i,e,t){const n=i.points.length,r=new Array(n),o=new Array(n),s=Math.tan(t*Math.PI/180);for(let l=0;l<n;l++){const[c,u,d]=i.points[l],h=Math.max(1.2,ul(c,u));r[l]=h,o[l]=e.has(l)?d:h}const a=(l,c)=>{const d=Math.hypot(i.points[c][0]-i.points[l][0],i.points[c][1]-i.points[l][1])*s,h=o[c]-o[l];if(Math.abs(h)>d){const p=(Math.abs(h)-d)*Math.sign(h);!e.has(l)&&!e.has(c)?(o[l]+=p*.5,o[c]-=p*.5):e.has(c)?e.has(l)||(o[l]=o[c]-d*Math.sign(h)):o[c]=o[l]+d*Math.sign(h)}};for(let l=0;l<30;l++){for(let c=1;c<n-1;c++){if(e.has(c))continue;const u=(o[c-1]+o[c+1])*.5;o[c]=o[c]*.35+u*.2+r[c]*.45,o[c]=Math.max(1.2,o[c])}for(let c=0;c<n-1;c++)a(c,c+1);for(let c=n-2;c>=0;c--)a(c,c+1)}for(let l=0;l<24;l++){for(let c=0;c<n-1;c++)a(c,c+1);for(let c=n-2;c>=0;c--)a(c,c+1)}for(let l=0;l<n;l++)i.points[l][2]=Math.round(o[l]*10)/10}(function(){const e=new Map(Ni.map(a=>[a.id,a])),t=e.get("road_coastal");t&&or(t,new Set([0,t.points.length-1]),18);const n=e.get("road_forestry");n&&or(n,new Set([0,5]),22);const r=e.get("trail_summit_865");r&&or(r,new Set([0,r.points.length-1]),27);const o=e.get("trail_secret_base");o&&r&&(o.points[0][2]=r.points[3][2],or(o,new Set([0,o.points.length-1]),22));const s=e.get("trail_hidden_port");s&&n&&(s.points[0][2]=n.points[n.points.length-1][2],or(s,new Set([0,s.points.length-1]),27));for(const a of Ni){const l=a.halfWidth+a.blendWidth+4;for(let c=0;c<a.points.length-1;c++){const[u,d,h]=a.points[c],[p,x,g]=a.points[c+1],m=p-u,f=x-d,_={ax:u,az:d,ay:h,bx:p,bz:x,by:g,dx:m,dz:f,len2:m*m+f*f||1,halfWidth:a.halfWidth,blendWidth:a.blendWidth,kind:a.kind},v=He(Math.min(u,p)-l,ae,fn-1),b=He(Math.max(u,p)+l,ae,fn-1),P=He(Math.min(d,x)-l,le,En-1),E=He(Math.max(d,x)+l,le,En-1);for(let A=P;A<=E;A++)for(let T=v;T<=b;T++)Ns[io(T,A)].push(_)}}for(const a of Je){if(!po.has(a.id)||a.id==="H09")continue;let l=1/0,c=a.x,u=a.z,d=a.y;for(const O of Ni)if(O.kind==="road")for(let k=0;k<O.points.length-1;k++){const[U,D,w]=O.points[k],[y,F,q]=O.points[k+1],Y=y-U,X=F-D,L=li(((a.x-U)*Y+(a.z-D)*X)/(Y*Y+X*X||1),0,1),$=U+L*Y,N=D+L*X,H=w+L*(q-w),K=Math.hypot(a.x-$,a.z-N);K<l&&(l=K,c=$,u=N,d=H)}const h=a.id==="H09"?7.35:Math.max(4.6,a.radiusZ-.8);if(l<=h+1)continue;const p=Math.sin(a.yaw),x=Math.cos(a.yaw),g=a.x+p*h,m=a.z+x*h,f=a.id==="H09"?a.y-1.65:a.y,_=c-g,v=u-m,b=a.id==="H09"?2:2.6,P=a.id==="H09"?5.5:10.5,E={ax:g,az:m,ay:f,bx:c,bz:u,by:d,dx:_,dz:v,len2:_*_+v*v||1,halfWidth:b,blendWidth:P,kind:"trail"},A=b+P+4,T=He(Math.min(g,c)-A,ae,fn-1),S=He(Math.max(g,c)+A,ae,fn-1),M=He(Math.min(m,u)-A,le,En-1),I=He(Math.max(m,u)+A,le,En-1);for(let O=M;O<=I;O++)for(let k=T;k<=S;k++)Ns[io(k,O)].push(E)}for(const a of Je){const l=Math.max(a.radiusX,a.radiusZ)+a.blendMargin+4,c=He(a.x-l,ae,fn-1),u=He(a.x+l,ae,fn-1),d=He(a.z-l,le,En-1),h=He(a.z+l,le,En-1);for(let p=d;p<=h;p++)for(let x=c;x<=u;x++)cl[io(x,p)].push(a)}})();function Hn(i,e){let t=ul(i,e);const n=He(i,ae,fn-1),r=He(e,le,En-1),o=io(n,r),s=Ns[o];let a=0,l=0,c=0,u=t;for(let E=0;E<s.length;E++){const A=s[E],T=li(((i-A.ax)*A.dx+(e-A.az)*A.dz)/A.len2,0,1),S=A.ax+A.dx*T,M=A.az+A.dz*T,I=Math.hypot(i-S,e-M),O=A.halfWidth+A.blendWidth;if(I>=O)continue;const k=1-Pe(A.halfWidth,O,I),U=1-Pe(A.halfWidth*.72,A.halfWidth*1.35,I),D=A.ay+(A.by-A.ay)*T;k>c&&(c=k,u=D),A.kind==="trail"?U>l&&(l=U):U>a&&(a=U)}let d=0,h=t;const p=cl[o];let x=0;for(let E=0;E<p.length;E++){const A=p[E],T=i-A.x,S=e-A.z,M=Math.cos(A.yaw),I=Math.sin(A.yaw),O=T*M-S*I,k=T*I+S*M,U=Math.max(0,Math.abs(O)-A.radiusX),D=Math.max(0,Math.abs(k)-A.radiusZ),w=Math.hypot(U,D);if(w<A.blendMargin){const y=1-Pe(0,A.blendMargin,w);y>d&&(d=y,h=A.y),y>x&&(x=y)}}const g=l>0?Math.sin(i*.45+e*.37)*.07:0,m=Math.max(c,d);if(m>0){const E=c+d,A=((u+g)*c+h*d)/E;t=t*(1-m)+A*m}const f=na(e),_=Math.abs(i-f),v=(1-Pe(4.5,18,_))*Pe(-850,-520,e)*Pe(2180,2e3,e),b=Math.hypot(i-Ze.x,e-Ze.z),P=1-Pe(28,145,b);return{height:t,roadWeight:a,trailWeight:l,streamWeight:v,coalWeight:P,terraceWeight:x}}function ce(i,e){return Hn(i,e).height}function hr(i,e,t=2){const n=ce(i-t,e),r=ce(i+t,e),o=ce(i,e-t),s=ce(i,e+t),a=n-r,l=2*t,c=o-s,u=Math.hypot(a,l,c)||1;return[a/u,l/u,c/u]}const Jn=.36,kp=1.72,f0=.58;function Up(i,e,t){if(!i.slopeAxis||i.slopeAxis==="none"||i.yMin===i.yMax)return i.yMax;if(i.slopeAxis==="x"){const o=Math.max(.001,i.maxX-i.minX),s=Math.max(0,Math.min(1,(e-i.minX)/o));return i.slopeDir===-1?i.yMax-(i.yMax-i.yMin)*s:i.yMin+(i.yMax-i.yMin)*s}const n=Math.max(.001,i.maxZ-i.minZ),r=Math.max(0,Math.min(1,(t-i.minZ)/n));return i.slopeDir===-1?i.yMax-(i.yMax-i.yMin)*r:i.yMin+(i.yMax-i.yMin)*r}class Fp{structures=[];registerStructures(e){this.structures=e}getStructures(){return this.structures}worldToLocal(e,t,n,r){const o=t-e.position.x,s=n-e.position.y,a=r-e.position.z,l=Math.cos(e.yaw),c=Math.sin(e.yaw);return[o*l-a*c,s,o*c+a*l]}localDeltaToWorld(e,t,n){const r=Math.cos(e.yaw),o=Math.sin(e.yaw);return[t*r+n*o,-t*o+n*r]}isInsideLocalBox(e,t,n,r){return t>=e.minX&&t<=e.maxX&&n>=e.minY&&n<=e.maxY&&r>=e.minZ&&r<=e.maxZ}resolveMove(e,t,n,r,o=kp){let s=Math.max(-ae+12,Math.min(ae-12,t.x)),a=Math.max(-le+12,Math.min(le-12,t.z)),l=e.y+n*r;const c=[];for(let g=0;g<this.structures.length;g++){const m=this.structures[g],f=m.worldBounds;s>=f.min.x-2&&s<=f.max.x+2&&a>=f.min.z-2&&a<=f.max.z+2&&c.push(m)}for(let g=0;g<2;g++)for(let m=0;m<c.length;m++){const f=c[m],[_,v,b]=this.worldToLocal(f,s,e.y,a),P=v+f0,E=v+o-.12;for(let A=0;A<f.colliders.length;A++){const T=f.colliders[A];if(T.maxY<=P||T.minY>=E)continue;const S=Math.max(T.minX,Math.min(T.maxX,_)),M=Math.max(T.minZ,Math.min(T.maxZ,b)),I=_-S,O=b-M,k=I*I+O*O;if(k<Jn*Jn){let U=0,D=0;if(k>1e-8){const F=Math.sqrt(k),q=Jn-F;U=I/F*q,D=O/F*q}else{const F=_-T.minX+Jn,q=T.maxX-_+Jn,Y=b-T.minZ+Jn,X=T.maxZ-b+Jn,L=Math.min(F,q,Y,X);L===F?U=-F:L===q?U=q:L===Y?D=-Y:D=X}const[w,y]=this.localDeltaToWorld(f,U,D);s+=w,a+=y}}}let u=!1,d=null;for(let g=0;g<c.length;g++){const m=c[g],[f,_,v]=this.worldToLocal(m,s,e.y,a);if(m.caveOverrides){for(let b=0;b<m.caveOverrides.length;b++)if(this.isInsideLocalBox(m.caveOverrides[b],f,_+.8,v)){u=!0,d=m;break}}}let h=u?-999:Math.max(.25,ce(s,a)),p=1/0;for(let g=0;g<c.length;g++){const m=c[g],[f,_,v]=this.worldToLocal(m,s,e.y,a);!d&&s>=m.worldBounds.min.x&&s<=m.worldBounds.max.x&&a>=m.worldBounds.min.z&&a<=m.worldBounds.max.z&&e.y>=m.worldBounds.min.y-.5&&e.y<=m.worldBounds.max.y+1&&(d=m);for(let b=0;b<m.walkSurfaces.length;b++){const P=m.walkSurfaces[b];if(f>=P.minX-.12&&f<=P.maxX+.12&&v>=P.minZ-.12&&v<=P.maxZ+.12){const E=Up(P,f,v),A=m.position.y+E;A<=e.y+f0&&A>h&&(h=A)}}for(let b=0;b<m.colliders.length;b++){const P=m.colliders[b];if(f>=P.minX-.1&&f<=P.maxX+.1&&v>=P.minZ-.1&&v<=P.maxZ+.1){const E=m.position.y+P.minY;E>=e.y+o*.65&&E<p&&(p=E)}}}u&&h<-500&&(h=e.y),l+o>p&&(l=p-o);let x=!1;return(l<=h||n<=0&&l-h<.28&&e.y-h<.55)&&(l=h,x=!0),{position:new ot(s,l,a),grounded:x,insideStructure:d}}}const An=128,Np=ae*2/An,zp=le*2/An,p0=[64,32,16,8],sr=[240,580,1450,9e3];function Op(i){const e=i.getTexture("sand_coarse",1,1),t=i.getTexture("basalt_cliff",1,1),n=i.getTexture("lush_grass",1,1),r=i.getTexture("deep_moss",1,1),o=i.getTexture("gravel_road",1,1),s=i.getTexture("root_earth",1,1),a=i.getTexture("coal_seam_rock",1,1),l=i.getTexture("lichen_rock",1,1),c=new Fi({roughness:.93,metalness:.02});return c.onBeforeCompile=u=>{u.uniforms.uTexSand={value:e},u.uniforms.uTexRock={value:t},u.uniforms.uTexGrass={value:n},u.uniforms.uTexMoss={value:r},u.uniforms.uTexRoad={value:o},u.uniforms.uTexTrail={value:s},u.uniforms.uTexCoal={value:a},u.uniforms.uTexLichen={value:l},u.vertexShader=u.vertexShader.replace("#include <common>",`#include <common>
        attribute vec4 aBiome; // x=road, y=trail, z=stream, w=coal+terrace packed
        varying vec3 vWorldPos;
        varying vec3 vWorldNormal;
        varying vec4 vBiome;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
        vec4 wpTerrain = modelMatrix * vec4(transformed, 1.0);
        vWorldPos = wpTerrain.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * objectNormal);
        vBiome = aBiome;`),u.fragmentShader=u.fragmentShader.replace("#include <common>",`#include <common>
        uniform sampler2D uTexSand;
        uniform sampler2D uTexRock;
        uniform sampler2D uTexGrass;
        uniform sampler2D uTexMoss;
        uniform sampler2D uTexRoad;
        uniform sampler2D uTexTrail;
        uniform sampler2D uTexCoal;
        uniform sampler2D uTexLichen;
        varying vec3 vWorldPos;
        varying vec3 vWorldNormal;
        varying vec4 vBiome;

        vec3 sampleDual(sampler2D tex, vec2 uv, float farMul) {
          vec3 a = texture2D(tex, uv).rgb;
          vec3 b = texture2D(tex, uv * farMul + vec2(0.41, 0.73)).rgb;
          return mix(a, b, 0.36);
        }

        vec3 sampleTriplanar(sampler2D tex, vec3 p, vec3 n, float scale) {
          vec3 bw = pow(abs(n), vec3(3.0));
          bw /= max(bw.x + bw.y + bw.z, 0.0001);
          vec3 cx = texture2D(tex, p.zy * scale).rgb;
          vec3 cy = texture2D(tex, p.xz * scale).rgb;
          vec3 cz = texture2D(tex, p.xy * scale).rgb;
          return cx * bw.x + cy * bw.y + cz * bw.z;
        }`).replace("#include <map_fragment>",`#include <map_fragment>
        vec3 wn = normalize(vWorldNormal);
        float slope = 1.0 - clamp(wn.y, 0.0, 1.0);
        float elev = vWorldPos.y;
        vec2 pXZ = vWorldPos.xz;

        float roadW    = vBiome.x;
        float trailW   = vBiome.y;
        float streamW  = vBiome.z;
        float coalW    = clamp(vBiome.w, 0.0, 1.0);
        float terraceW = clamp(-vBiome.w, 0.0, 1.0);

        vec3 cSand   = sampleDual(uTexSand,   pXZ * 0.34, 0.27);
        vec3 cRock   = sampleTriplanar(uTexRock, vWorldPos, wn, 0.14);
        vec3 cGrass  = sampleDual(uTexGrass,  pXZ * 0.22, 0.24);
        vec3 cMoss   = sampleDual(uTexMoss,   pXZ * 0.24, 0.28);
        vec3 cRoad   = sampleDual(uTexRoad,   pXZ * 0.56, 0.39);
        vec3 cTrail  = sampleDual(uTexTrail,  pXZ * 0.42, 0.34);
        vec3 cCoal   = sampleTriplanar(uTexCoal, vWorldPos, wn, 0.16);
        vec3 cLichen = sampleTriplanar(uTexLichen, vWorldPos, wn, 0.14);

        // Dramatic Japanese mountain ridge variation (rich deep cedar flanks vs sunlit grassy spurs like image.png)
        float ridgeBand = 0.5 + 0.5 * sin(pXZ.x * 0.011 + cos(pXZ.y * 0.009) * 2.1);
        float microVar  = 0.5 + 0.5 * sin(pXZ.x * 0.045 - pXZ.y * 0.039);
        float forestShade = clamp(0.40 + 0.50 * ridgeBand + streamW * 0.50, 0.0, 1.0);

        // Base vegetated slope: authentic Japanese mountain olive-emerald & deep mossy undergrowth
        vec3 sunlitGrass = cGrass * vec3(0.74, 0.84, 0.56);
        vec3 deepForest  = cMoss * vec3(0.44, 0.58, 0.38);
        vec3 col = mix(sunlitGrass, deepForest, forestShade * (0.74 + 0.26 * microVar));

        // Sub-alpine meadow & windswept highland grass transition (560m -> 865m)
        float alpineW = smoothstep(560.0, 790.0, elev);
        vec3 alpineCol = mix(cGrass * vec3(0.84, 0.80, 0.54), cLichen * vec3(0.84, 0.85, 0.80), smoothstep(690.0, 845.0, elev));
        col = mix(col, alpineCol, alpineW * 0.84);

        // Coastal sandy beach & dark wet tidal zone (0m -> 7m)
        float sandW = (1.0 - smoothstep(2.2, 8.5, elev)) * (1.0 - smoothstep(0.18, 0.40, slope));
        col = mix(col, cSand * vec3(0.92, 0.86, 0.75), sandW);
        float wetShore = 1.0 - smoothstep(0.2, 2.4, elev);
        col *= mix(1.0, 0.54, wetShore);

        // Coal-shale dark earth around 1890 Coal Mine gorge
        col = mix(col, cCoal * vec3(0.68, 0.68, 0.70), coalW * 0.72);

        // Graded village terraces (mossy compacted earth/gravel yard pads ready for future houses)
        vec3 terraceCol = mix(cRoad * 0.84, cMoss * 0.74, 0.56);
        col = mix(col, terraceCol, terraceW * 0.66);

        // Narrow animal trails (獣道): unmistakable warm muddy-brown earth & roots cutting through grass
        col = mix(col, cTrail * vec3(0.86, 0.75, 0.62), trailW * 0.88);

        // Hillside village roads & coastal forestry road: weathered 1985 gravel with mossy edges
        float roadCore = smoothstep(0.18, 0.76, roadW);
        float roadVerge = roadW * (1.0 - roadCore);
        col = mix(col, cMoss * vec3(0.62, 0.72, 0.48), roadVerge * 0.75);
        col = mix(col, cRoad * vec3(0.86, 0.84, 0.79), roadCore * 0.92);

        // Steep cliff rock faces (triplanar basalt + alpine lichen at high altitudes)
        float rockW = smoothstep(0.27, 0.55, slope) * (1.0 - roadW * 0.88) * (1.0 - trailW * 0.78);
        vec3 cliffCol = mix(cRock * 0.84, cLichen * 0.88, alpineW * 0.7);
        cliffCol = mix(cliffCol, cCoal * 0.72, coalW * 0.6);
        cliffCol = mix(cliffCol, cMoss * 0.62, streamW * 0.45);
        col = mix(col, cliffCol, rockW);

        // Damp gorge stream bed darkening
        col *= mix(1.0, 0.62, streamW * (1.0 - rockW) * 0.65);

        diffuseColor.rgb *= col;`)},c.customProgramCacheKey=()=>"kuroiso-2x5km-terrain-v3",c}function Bp(i,e,t){const n=-ae+i*An,r=-le+e*An,o=An/t,s=t+1,a=s*s,l=a+4*s,c=new Float32Array(l*3),u=new Float32Array(l*3),d=new Float32Array(l*2),h=new Float32Array(l*4),p=Math.min(3.5,Math.max(1.5,o*.75));for(let S=0;S<=t;S++){const M=r+S*o;for(let I=0;I<=t;I++){const O=n+I*o,k=S*s+I,U=Hn(O,M),[D,w,y]=hr(O,M,p);c[k*3]=O,c[k*3+1]=U.height,c[k*3+2]=M,u[k*3]=D,u[k*3+1]=w,u[k*3+2]=y,d[k*2]=O*.08,d[k*2+1]=M*.08,h[k*4]=U.roadWeight,h[k*4+1]=U.trailWeight,h[k*4+2]=U.streamWeight,h[k*4+3]=U.coalWeight>.05?U.coalWeight:-U.terraceWeight}}const x=t*t*6+4*t*6,g=l>65535?new Uint32Array(x):new Uint16Array(x);let m=0;for(let S=0;S<t;S++)for(let M=0;M<t;M++){const I=S*s+M,O=I+1,k=I+s,U=k+1;g[m++]=I,g[m++]=k,g[m++]=O,g[m++]=O,g[m++]=k,g[m++]=U}const f=o*1.45+3;let _=a;const v=(S,M)=>{const I=_;for(let O=0;O<S.length;O++){const k=S[O],U=_++;c[U*3]=c[k*3],c[U*3+1]=c[k*3+1]-f,c[U*3+2]=c[k*3+2],u[U*3]=u[k*3],u[U*3+1]=u[k*3+1],u[U*3+2]=u[k*3+2],d[U*2]=d[k*2],d[U*2+1]=d[k*2+1],h[U*4]=h[k*4],h[U*4+1]=h[k*4+1],h[U*4+2]=h[k*4+2],h[U*4+3]=h[k*4+3]}for(let O=0;O<S.length-1;O++){const k=S[O],U=S[O+1],D=I+O,w=I+O+1;M?(g[m++]=k,g[m++]=U,g[m++]=D,g[m++]=U,g[m++]=w,g[m++]=D):(g[m++]=k,g[m++]=D,g[m++]=U,g[m++]=U,g[m++]=D,g[m++]=w)}},b=[],P=[],E=[],A=[];for(let S=0;S<s;S++)b.push(S),P.push(t*s+S),E.push(S*s),A.push(S*s+t);v(b,!1),v(P,!0),v(E,!0),v(A,!1);const T=new Ee;return T.setAttribute("position",new pe(c,3)),T.setAttribute("normal",new pe(u,3)),T.setAttribute("uv",new pe(d,2)),T.setAttribute("aBiome",new pe(h,4)),T.setIndex(new pe(g,1)),T.computeBoundingSphere(),T}class Hp{group=new fe;material;chunks=[];lastCamX=Number.NaN;lastCamZ=Number.NaN;pending=[];constructor(e){this.group.name="KuroisoStreamingTerrain",this.material=Op(e);for(let t=0;t<zp;t++)for(let n=0;n<Np;n++){const r=-ae+n*An,o=-le+t*An,s=r+An*.5,a=o+An*.5;let l=-999;for(let c=0;c<=2;c++)for(let u=0;u<=2;u++){const d=Hn(r+u*64,o+c*64).height;d>l&&(l=d)}this.chunks.push({cx:n,cz:t,centerX:s,centerZ:a,isDeepOcean:l<-16,currentLod:-1,mesh:null})}}desiredLodForDist(e){return e<sr[0]?0:e<sr[1]?1:e<sr[2]?2:3}rebuildChunk(e,t){const n=p0[t],r=Bp(e.cx,e.cz,n);if(e.mesh)e.mesh.geometry.dispose(),e.mesh.geometry=r;else{const o=new It(r,this.material);o.receiveShadow=!0,o.castShadow=t<=1,o.matrixAutoUpdate=!1,o.updateMatrix(),this.group.add(o),e.mesh=o}e.mesh.castShadow=t<=1,e.currentLod=t}warmStart(e,t){for(let n=0;n<this.chunks.length;n++){const r=this.chunks[n];if(r.isDeepOcean)continue;const o=Math.hypot(r.centerX-e,r.centerZ-t),s=o<210?0:o<440?1:3;r.currentLod!==s&&this.rebuildChunk(r,s)}this.lastCamX=e,this.lastCamZ=t,this.refreshQueue(e,t)}refreshQueue(e,t){this.pending.length=0;for(let n=0;n<this.chunks.length;n++){const r=this.chunks[n];if(r.isDeepOcean)continue;const o=Math.hypot(r.centerX-e,r.centerZ-t),s=this.desiredLodForDist(o);if(r.currentLod!==s){if(r.currentLod!==-1){const a=sr[r.currentLod],l=r.currentLod>0?sr[r.currentLod-1]:0;if(o>l-36&&o<a+36)continue}this.pending.push({rec:r,desiredLod:s,dist:o})}}this.pending.sort((n,r)=>n.dist-r.dist)}update(e,t,n=4.2){const r=Math.hypot(e-this.lastCamX,t-this.lastCamZ);if((Number.isNaN(r)||r>24||this.pending.length===0)&&(Number.isNaN(r)||r>24)&&(this.lastCamX=e,this.lastCamZ=t,this.refreshQueue(e,t)),this.pending.length===0)return;const o=performance.now();let s=0;for(;this.pending.length>0&&s<4;){const a=this.pending.shift();if(a.rec.currentLod!==a.desiredLod&&(this.rebuildChunk(a.rec,a.desiredLod),s++),performance.now()-o>=n)break}}getStats(){let e=0,t=0,n=0,r=0,o=0,s=0;for(let a=0;a<this.chunks.length;a++){const l=this.chunks[a];if(!l.mesh)continue;e++;const c=p0[l.currentLod];s+=c*c*2+c*8,l.currentLod===0?t++:l.currentLod===1?n++:l.currentLod===2?r++:o++}return{activeChunks:e,lod0Count:t,lod1Count:n,lod2Count:r,lod3Count:o,pendingQueue:this.pending.length,approxTriangles:s}}}const Wp=[{id:0,name:"細身若杉(4枝)",leafGroup:"cedar",style:"conifer_tier",biome:"mountain",height:7.6,trunkRadius:.16,branchCount:4,stems:1,leanX:.25,leanZ:-.15,sCurve:.18,crownStart:.28,branchReach:1.55,branchPitch:-.18,leafRadius:1.45,leafFlatness:.56,deadStubs:0,seed:101},{id:1,name:"根曲がり斜面杉(6枝)",leafGroup:"cedar",style:"conifer_tier",biome:"mountain",height:11.2,trunkRadius:.24,branchCount:6,stems:1,leanX:.85,leanZ:.35,sCurve:.65,crownStart:.3,branchReach:2.15,branchPitch:-.22,leafRadius:1.75,leafFlatness:.52,deadStubs:0,seed:202},{id:2,name:"標準山杉(8枝)",leafGroup:"cedar",style:"conifer_tier",biome:"mountain",height:15.6,trunkRadius:.34,branchCount:8,stems:1,leanX:-.35,leanZ:.28,sCurve:.3,crownStart:.28,branchReach:2.65,branchPitch:-.2,leafRadius:2.05,leafFlatness:.5,deadStubs:0,seed:303},{id:3,name:"双幹夫婦杉(10枝)",leafGroup:"cedar",style:"conifer_tier",biome:"mountain",height:17.4,trunkRadius:.38,branchCount:10,stems:2,leanX:.4,leanZ:-.3,sCurve:.35,crownStart:.26,branchReach:2.55,branchPitch:-.16,leafRadius:1.95,leafFlatness:.52,deadStubs:0,seed:404},{id:4,name:"高枝払い老杉(11枝)",leafGroup:"cedar",style:"conifer_tier",biome:"mountain",height:21.2,trunkRadius:.44,branchCount:11,stems:1,leanX:.3,leanZ:.42,sCurve:.28,crownStart:.46,branchReach:2.95,branchPitch:-.14,leafRadius:2.15,leafFlatness:.48,deadStubs:2,seed:505},{id:5,name:"古檜重層樹冠(13枝)",leafGroup:"cedar",style:"conifer_tier",biome:"mountain",height:19.6,trunkRadius:.42,branchCount:13,stems:1,leanX:-.52,leanZ:-.22,sCurve:.4,crownStart:.24,branchReach:3.15,branchPitch:-.26,leafRadius:2.1,leafFlatness:.46,deadStubs:1,seed:606},{id:6,name:"風衝片枝杉(14枝)",leafGroup:"cedar",style:"conifer_tier",biome:"ridge",height:14.5,trunkRadius:.36,branchCount:14,stems:1,leanX:1.45,leanZ:.55,sCurve:.72,crownStart:.32,branchReach:2.8,branchPitch:-.12,leafRadius:1.8,leafFlatness:.45,deadStubs:2,seed:707},{id:7,name:"御神木級大杉(15枝)",leafGroup:"cedar",style:"conifer_tier",biome:"mountain",height:25.5,trunkRadius:.62,branchCount:15,stems:1,leanX:-.25,leanZ:.32,sCurve:.42,crownStart:.26,branchReach:3.95,branchPitch:-.22,leafRadius:2.55,leafFlatness:.48,deadStubs:2,seed:808},{id:8,name:"岩場盆栽小松(4枝)",leafGroup:"cedar",style:"pine_pad",biome:"coastal",height:5.8,trunkRadius:.19,branchCount:4,stems:1,leanX:1.15,leanZ:-.45,sCurve:.85,crownStart:.38,branchReach:2.1,branchPitch:.14,leafRadius:1.55,leafFlatness:.42,deadStubs:0,seed:909},{id:9,name:"斜傾海岸黒松(6枝)",leafGroup:"cedar",style:"pine_pad",biome:"coastal",height:10.6,trunkRadius:.3,branchCount:6,stems:1,leanX:1.65,leanZ:.6,sCurve:.95,crownStart:.42,branchReach:2.95,branchPitch:.16,leafRadius:1.95,leafFlatness:.4,deadStubs:1,seed:1010},{id:10,name:"S字幹尾根松(8枝)",leafGroup:"cedar",style:"pine_pad",biome:"ridge",height:13.5,trunkRadius:.35,branchCount:8,stems:1,leanX:-.95,leanZ:.85,sCurve:1.15,crownStart:.4,branchReach:3.15,branchPitch:.18,leafRadius:2,leafFlatness:.38,deadStubs:1,seed:1111},{id:11,name:"二股大黒松(10枝)",leafGroup:"cedar",style:"pine_pad",biome:"coastal",height:16,trunkRadius:.44,branchCount:10,stems:2,leanX:.72,leanZ:-.64,sCurve:.78,crownStart:.38,branchReach:3.4,branchPitch:.22,leafRadius:2.15,leafFlatness:.38,deadStubs:1,seed:1212},{id:12,name:"高台傘松(12枝)",leafGroup:"cedar",style:"pine_pad",biome:"ridge",height:18,trunkRadius:.46,branchCount:12,stems:1,leanX:-.6,leanZ:-.45,sCurve:.65,crownStart:.52,branchReach:3.9,branchPitch:.26,leafRadius:2.25,leafFlatness:.36,deadStubs:1,seed:1313},{id:13,name:"懸崖老松(15枝)",leafGroup:"cedar",style:"pine_pad",biome:"coastal",height:14.2,trunkRadius:.48,branchCount:15,stems:1,leanX:2.15,leanZ:-.75,sCurve:1.25,crownStart:.32,branchReach:3.75,branchPitch:.1,leafRadius:1.95,leafFlatness:.38,deadStubs:2,seed:1414},{id:14,name:"林床若木クヌギ(4枝)",leafGroup:"broad",style:"broad_crown",biome:"understory",height:5.2,trunkRadius:.12,branchCount:4,stems:1,leanX:.32,leanZ:.24,sCurve:.28,crownStart:.38,branchReach:1.55,branchPitch:.48,leafRadius:1.55,leafFlatness:.78,deadStubs:0,seed:1515},{id:15,name:"細枝ヒメシャラ(5枝)",leafGroup:"broad",style:"broad_crown",biome:"valley",height:8.2,trunkRadius:.17,branchCount:5,stems:1,leanX:-.48,leanZ:.35,sCurve:.42,crownStart:.42,branchReach:2.05,branchPitch:.52,leafRadius:1.8,leafFlatness:.74,deadStubs:0,seed:1616},{id:16,name:"三又雑木コナラ(7枝)",leafGroup:"broad",style:"broad_crown",biome:"mixed",height:11.6,trunkRadius:.28,branchCount:7,stems:2,leanX:.42,leanZ:-.4,sCurve:.45,crownStart:.34,branchReach:2.75,branchPitch:.44,leafRadius:2.15,leafFlatness:.72,deadStubs:0,seed:1717},{id:17,name:"横張り山ブナ(9枝)",leafGroup:"broad",style:"broad_crown",biome:"valley",height:14.2,trunkRadius:.38,branchCount:9,stems:1,leanX:-.55,leanZ:.48,sCurve:.5,crownStart:.36,branchReach:3.45,branchPitch:.36,leafRadius:2.4,leafFlatness:.66,deadStubs:0,seed:1818},{id:18,name:"斜幹渓谷トチ(11枝)",leafGroup:"broad",style:"broad_crown",biome:"valley",height:16,trunkRadius:.42,branchCount:11,stems:1,leanX:1.25,leanZ:-.55,sCurve:.7,crownStart:.35,branchReach:3.65,branchPitch:.38,leafRadius:2.45,leafFlatness:.68,deadStubs:1,seed:1919},{id:19,name:"扇樹冠ケヤキ(12枝)",leafGroup:"broad",style:"broad_crown",biome:"mixed",height:18.6,trunkRadius:.48,branchCount:12,stems:1,leanX:.25,leanZ:.22,sCurve:.32,crownStart:.34,branchReach:4.1,branchPitch:.62,leafRadius:2.5,leafFlatness:.65,deadStubs:0,seed:2020},{id:20,name:"株立ち雑木(14枝)",leafGroup:"broad",style:"broad_crown",biome:"mixed",height:12.8,trunkRadius:.24,branchCount:14,stems:3,leanX:-.3,leanZ:.45,sCurve:.4,crownStart:.3,branchReach:3.15,branchPitch:.5,leafRadius:2.05,leafFlatness:.72,deadStubs:0,seed:2121},{id:21,name:"巨木古ブナ・楠(15枝)",leafGroup:"broad",style:"broad_crown",biome:"valley",height:22,trunkRadius:.66,branchCount:15,stems:1,leanX:-.65,leanZ:-.45,sCurve:.55,crownStart:.32,branchReach:4.85,branchPitch:.42,leafRadius:2.95,leafFlatness:.64,deadStubs:1,seed:2222},{id:22,name:"林縁小灌木(4枝)",leafGroup:"broad",style:"broad_crown",biome:"understory",height:3.4,trunkRadius:.09,branchCount:4,stems:2,leanX:.2,leanZ:-.18,sCurve:.22,crownStart:.22,branchReach:1.25,branchPitch:.45,leafRadius:1.25,leafFlatness:.8,deadStubs:0,seed:2323},{id:23,name:"株立ち低木(5枝)",leafGroup:"broad",style:"broad_crown",biome:"understory",height:4.5,trunkRadius:.11,branchCount:5,stems:3,leanX:-.22,leanZ:.25,sCurve:.26,crownStart:.24,branchReach:1.5,branchPitch:.48,leafRadius:1.38,leafFlatness:.76,deadStubs:0,seed:2424},{id:24,name:"枝垂れ渓流木(6枝)",leafGroup:"broad",style:"broad_crown",biome:"valley",height:6.8,trunkRadius:.16,branchCount:6,stems:1,leanX:.75,leanZ:.32,sCurve:.55,crownStart:.35,branchReach:2.35,branchPitch:-.05,leafRadius:1.75,leafFlatness:.7,deadStubs:0,seed:2525},{id:25,name:"丸冠中低木(8枝)",leafGroup:"broad",style:"broad_crown",biome:"understory",height:7.8,trunkRadius:.19,branchCount:8,stems:1,leanX:-.28,leanZ:-.24,sCurve:.3,crownStart:.28,branchReach:2.25,branchPitch:.36,leafRadius:1.85,leafFlatness:.75,deadStubs:0,seed:2626},{id:26,name:"広がりヤブツバキ(10枝)",leafGroup:"cedar",style:"broad_crown",biome:"understory",height:6.2,trunkRadius:.18,branchCount:10,stems:2,leanX:.35,leanZ:.28,sCurve:.32,crownStart:.24,branchReach:2.2,branchPitch:.32,leafRadius:1.58,leafFlatness:.72,deadStubs:0,seed:2727},{id:27,name:"台風折れ片枝杉(5枝)",leafGroup:"cedar",style:"conifer_tier",biome:"ridge",height:13.6,trunkRadius:.36,branchCount:5,stems:1,leanX:1.05,leanZ:-.6,sCurve:.62,crownStart:.38,branchReach:2.55,branchPitch:-.15,leafRadius:1.95,leafFlatness:.5,deadStubs:3,seed:2828},{id:28,name:"高幹二層冠杉(7枝)",leafGroup:"cedar",style:"conifer_tier",biome:"mountain",height:17.2,trunkRadius:.34,branchCount:7,stems:1,leanX:-.4,leanZ:.52,sCurve:.38,crownStart:.42,branchReach:2.75,branchPitch:-.2,leafRadius:2.15,leafFlatness:.48,deadStubs:1,seed:2929},{id:29,name:"曲幹古山桜型(9枝)",leafGroup:"broad",style:"broad_crown",biome:"mixed",height:12.2,trunkRadius:.34,branchCount:9,stems:1,leanX:1.35,leanZ:.68,sCurve:.88,crownStart:.36,branchReach:3.35,branchPitch:.24,leafRadius:2.2,leafFlatness:.6,deadStubs:1,seed:3030},{id:30,name:"密生複層ヒバ(12枝)",leafGroup:"cedar",style:"conifer_tier",biome:"mountain",height:15.2,trunkRadius:.36,branchCount:12,stems:1,leanX:-.28,leanZ:-.35,sCurve:.34,crownStart:.2,branchReach:2.75,branchPitch:-.28,leafRadius:1.95,leafFlatness:.52,deadStubs:0,seed:3131},{id:31,name:"原生林絡み古木(15枝)",leafGroup:"broad",style:"broad_crown",biome:"valley",height:20.5,trunkRadius:.58,branchCount:15,stems:2,leanX:.85,leanZ:-.72,sCurve:.82,crownStart:.28,branchReach:4.45,branchPitch:.35,leafRadius:2.65,leafFlatness:.62,deadStubs:2,seed:3232}];function dl(i){let e=i>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}class zs{pos=[];norm=[];uv=[];ao=[];idx=[];addTube(e,t,n,r=.72,o=.96){if(e.length<2)return;const s=this.pos.length/3;let a=0;for(let c=0;c<e.length;c++){const[u,d,h,p]=e[c];c>0&&(a+=Math.hypot(u-e[c-1][0],d-e[c-1][1],h-e[c-1][2]));const x=e[Math.max(0,c-1)],g=e[Math.min(e.length-1,c+1)];let m=g[0]-x[0],f=g[1]-x[1],_=g[2]-x[2];const v=Math.hypot(m,f,_)||1;m/=v,f/=v,_/=v;const b=Math.abs(f)<.92?0:1,P=Math.abs(f)<.92?1:0,E=0;let A=f*E-_*P,T=_*b-m*E,S=m*P-f*b;const M=Math.hypot(A,T,S)||1;A/=M,T/=M,S/=M;const I=f*S-_*T,O=_*A-m*S,k=m*T-f*A,U=c/(e.length-1),D=r+(o-r)*U,w=a*n;for(let y=0;y<=t;y++){const F=y/t*Math.PI*2,q=Math.cos(F),Y=Math.sin(F),X=A*q+I*Y,L=T*q+O*Y,$=S*q+k*Y;this.pos.push(u+X*p,d+L*p,h+$*p),this.norm.push(X,L,$),this.uv.push(y/t,w),this.ao.push(D)}}const l=t+1;for(let c=0;c<e.length-1;c++){const u=s+c*l,d=s+(c+1)*l;for(let h=0;h<t;h++)this.idx.push(u+h,d+h,u+h+1),this.idx.push(u+h+1,d+h,d+h+1)}}addFoliageCluster(e,t,n,r,o,s,a,l,c,u,d,h){const p=u?5:6,x=d()*Math.PI*2,g=Math.cos(l),m=Math.sin(l),f=Math.cos(c),_=Math.sin(c),v=this.pos.length/3,b=(M,I,O,k,U)=>{const D=Math.atan2(O,M);let w=I,y=1;a==="conifer_tier"?(y=1+.22*Math.sin(D*3+x)+.12*Math.cos(D*2-x),w<0?w*=.44:w*=1.12,w-=Math.max(0,.42-Math.abs(I))*.24*(y-.84)):a==="pine_pad"?(y=1+.2*Math.sin(D*3+x)+.13*Math.cos(D*4+x*1.3),w=w<0?w*.3:w*.9):(y=1+.18*Math.sin(D*3+I*1.4+x)+.12*Math.cos(D*2-x),w<0&&(w*=.64));const F=M*r*y,q=w*o*y,Y=O*s*y,X=q*f-Y*_,L=q*_+Y*f,$=F*g+L*m+e,N=-F*m+L*g+n,H=X+t;this.pos.push($,H,N);const K=M*.82,V=I*.72+.68,G=O*.82,Z=V*f-G*_,B=V*_+G*f,J=K*g+B*m,lt=-K*m+B*g,ht=Math.hypot(J,Z,lt)||1;this.norm.push(J/ht,Z/ht,lt/ht),this.uv.push(k,U);const z=.72+Math.max(0,Math.min(1,(I+.85)*.56))*.18+h*.06;this.ao.push(Math.max(.64,Math.min(.96,z)))},P=u?[-.08]:[-.38,.34];b(0,-1,0,.5,0);const E=p+1;for(let M=0;M<P.length;M++){const I=P[M],O=Math.cos(I),k=Math.sin(I),U=(M+1)/(P.length+1)*1.4;for(let D=0;D<=p;D++){const w=D/p*Math.PI*2;b(Math.cos(w)*O,k,Math.sin(w)*O,D/p*1.6,U)}}const A=v+1+P.length*E;b(0,1,0,.5,1.4);const T=v+1;for(let M=0;M<p;M++)this.idx.push(v,T+M,T+M+1);for(let M=0;M<P.length-1;M++){const I=v+1+M*E,O=I+E;for(let k=0;k<p;k++)this.idx.push(I+k,O+k+1,I+k+1),this.idx.push(I+k,O+k,O+k+1)}const S=v+1+(P.length-1)*E;for(let M=0;M<p;M++)this.idx.push(S+M,A,S+M+1)}finalize(){return{positions:new Float32Array(this.pos),normals:new Float32Array(this.norm),uvs:new Float32Array(this.uv),ao:new Float32Array(this.ao),indices:new Uint16Array(this.idx),vertexCount:this.pos.length/3,triCount:this.idx.length/3}}}function Yr(i,e,t,n,r,o,s,a,l){const c=i*e,u=Math.sin(i*Math.PI*1.35+s)*o*i,d=Math.cos(i*Math.PI*1.15-s)*o*.45*i,h=a+n*Math.pow(i,1.25)+u,p=l+r*Math.pow(i,1.25)+d,x=i<.14?1+Math.pow(1-i/.14,2)*.42:1,g=Math.max(.035,t*Math.pow(1-i*.84,.92)*x);return[h,c,p,g]}function m0(i,e){const t=dl(i.seed*7919+17),n=new zs,r=new zs,o=e?2:3,s=e?3:4,a=3,l=[];for(let d=0;d<i.stems;d++){const h=d/i.stems*Math.PI*2+t()*.9,p=i.stems===1?0:(.55+t()*.55)*(i.height*.08),x=i.height*(d===0?1:.78+t()*.18),g=i.trunkRadius*(d===0?1:.72+t()*.18),m=i.leanX+Math.cos(h)*p,f=i.leanZ+Math.sin(h)*p,_=i.sCurve*(.75+t()*.5),v=t()*Math.PI*2,b=i.stems===1?0:Math.cos(h)*g*.75,P=i.stems===1?0:Math.sin(h)*g*.75;l.push({height:x,baseR:g,leanX:m,leanZ:f,sCurve:_,phase:v,ox:b,oz:P});const E=[],A=Yr(0,x,g,m,f,_,v,b,P);E.push([A[0],-.55,A[2],A[3]*1.15]);for(let M=0;M<=o;M++)E.push(Yr(M/o,x,g,m,f,_,v,b,P));n.addTube(E,s,.35,.65,.92);const T=E[E.length-1],S=i.leafRadius*(i.style==="conifer_tier"?.62:.92);r.addFoliageCluster(T[0],T[1]+S*i.leafFlatness*.25,T[2],S,S*(i.style==="conifer_tier"?1.18:i.leafFlatness),S*(.9+t()*.22),i.style,t()*Math.PI*2,0,e,t,1)}const c=2.399963229728653,u=t()*Math.PI*2;for(let d=0;d<i.branchCount;d++){const h=l[d%l.length],p=i.branchCount<=1?.65:d/(i.branchCount-1),x=Math.min(.93,Math.max(i.crownStart*.85,i.crownStart+p*(.91-i.crownStart)+(t()-.5)*.06)),g=Yr(x,h.height,h.baseR,h.leanX,h.leanZ,h.sCurve,h.phase,h.ox,h.oz);let m=u+d*c+(t()-.5)*.55;if(i.biome==="ridge"||i.biome==="coastal"&&Math.hypot(i.leanX,i.leanZ)>1.2){const D=Math.atan2(i.leanZ,i.leanX),w=Math.atan2(Math.sin(D-m),Math.cos(D-m));m+=w*.22}const f=i.style==="conifer_tier"?1.18-p*.62:i.style==="pine_pad"?.92+Math.sin(p*Math.PI)*.34:.84+Math.sin(p*Math.PI*.85)*.36,_=i.branchReach*f*(.76+t()*.48),v=i.branchPitch+(p-.35)*(i.style==="conifer_tier"?.28:.24)+(t()-.5)*.22,b=Math.cos(m)*Math.cos(v),P=Math.sin(v),E=Math.sin(m)*Math.cos(v),A=Math.max(.04,Math.min(g[3]*.68,h.baseR*(.34-p*.14))),T=i.style==="conifer_tier"?-_*.08:_*.1,S=[g[0]+b*_*.52,g[1]+P*_*.52+T,g[2]+E*_*.52,A*.64],M=[g[0]+b*_,g[1]+P*_+(i.style==="pine_pad"?_*.12:0),g[2]+E*_,Math.max(.025,A*.28)];(!e||d%2===0||i.branchCount<=7)&&n.addTube(e?[g,M]:[g,S,M],a,.45,.68,.94);const O=!e&&_>1.85&&(d%2===0||i.branchCount>=10);let k=null;if(O){const D=m+(d%2===0?1:-1)*(.42+t()*.34),w=v+.16+(t()-.5)*.18,y=_*(.46+t()*.18);k=[S[0]+Math.cos(D)*Math.cos(w)*y,S[1]+Math.sin(w)*y,S[2]+Math.sin(D)*Math.cos(w)*y,Math.max(.022,A*.24)],n.addTube([S,k],3,.5,.74,.95)}if(!e||d%2===0||i.branchCount<=8){const D=i.leafRadius*(.72+f*.32)*(.82+t()*.36)*(e?1.24:1),w=D*i.leafFlatness*(.88+t()*.26),y=i.style==="conifer_tier"?.22:(t()-.5)*.18,F=S[0]*.28+M[0]*.72,q=S[1]*.28+M[1]*.72+(i.style==="pine_pad"?w*.35:.12),Y=S[2]*.28+M[2]*.72;if(r.addFoliageCluster(F,q,Y,D*(.92+t()*.22),w,D*(.88+t()*.26),i.style,m,y,e,t,p),k){const X=D*(.68+t()*.16);r.addFoliageCluster(k[0],k[1]+(i.style==="pine_pad"?X*i.leafFlatness*.35:.08),k[2],X,X*i.leafFlatness,X*.94,i.style,m+.5,y*.7,!0,t,p)}}}if(!e&&i.deadStubs>0)for(let d=0;d<i.deadStubs;d++){const h=l[0],p=Math.max(.16,i.crownStart-.04-d*.06),x=Yr(p,h.height,h.baseR,h.leanX,h.leanZ,h.sCurve,h.phase,h.ox,h.oz),g=u+d*2.1+1.1,m=.85+t()*1.15,f=[x[0]+Math.cos(g)*m,x[1]-.18+(t()-.5)*.35,x[2]+Math.sin(g)*m,.025];n.addTube([x,f],3,.5,.62,.8)}return{wood:n.finalize(),leaf:r.finalize()}}function Gp(){const i=(n,r,o)=>{const s=dl(o),a=new zs;for(let l=0;l<r.length;l++){const[c,u,d,h,p,x]=r[l];a.addFoliageCluster(c,u,d,h,p,x,n,s()*Math.PI*2,0,!0,s,l/Math.max(1,r.length-1))}return a.finalize()},e=[i("conifer_tier",[[0,7.5,0,4.8,7.2,4.6],[.4,15.2,-.3,3.1,6.2,3]],5101),i("conifer_tier",[[-1.6,8.8,.4,4.2,7.5,4],[1.9,10.6,-.5,3.8,8.2,3.7]],5202),i("pine_pad",[[.8,9.2,.2,6.2,3.6,5.4],[-1.4,12.6,-.6,4.6,3,4.2]],5303)],t=[i("broad_crown",[[0,7.2,0,5.8,4.8,5.5]],5401),i("broad_crown",[[-2,8.5,.8,4.4,3.8,4.2],[2.1,9.2,-.7,4.6,4,4.3]],5502),i("broad_crown",[[0,4.8,0,5.2,3.6,4.9],[1.8,6.4,1.2,3.4,2.8,3.3]],5603)];return{cedar:e,broad:t}}let Xr=null;function Vp(){return Xr||(Xr=Wp.map(i=>{const e=m0(i,!1),t=m0(i,!0);return{spec:i,woodLod0:e.wood,leafLod0:e.leaf,woodLod1:t.wood,leafLod1:t.leaf}}),Xr)}const wn=64,ar=128,lr=256,Ai=64;function Zr(i,e,t){let n=(Math.imul(i,374761393)^Math.imul(e,668265263)^Math.imul(t,1442695041))>>>0;return()=>{n=n+1831565813|0;let r=Math.imul(n^n>>>15,1|n);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296}}function qr(i,e){const t=[],n=[],r=[],o=[];for(let l=0;l<3;l++){const c=l/3*Math.PI,u=Math.cos(c)*i*.5,d=Math.sin(c)*i*.5,h=-Math.sin(c)*i*.14,p=Math.cos(c)*i*.14,x=l*4;t.push(-u,0,-d,u,0,d,-u*.72+h,e,-d*.72+p,u*.72+h,e,d*.72+p);for(let g=0;g<4;g++)n.push(0,1,0);r.push(0,0,1,0,0,1,1,1),o.push(x,x+1,x+2,x+1,x+3,x+2)}const a=new Ee;return a.setAttribute("position",new ue(t,3)),a.setAttribute("normal",new ue(n,3)),a.setAttribute("uv",new ue(r,2)),a.setIndex(o),a}function $r(i,e,t,n,r,o,s){const a=i.getTexture(e,1,1),l=new Fi({map:a,color:t,roughness:.78,metalness:0,side:on,alphaTest:.34});return l.onBeforeCompile=c=>{c.uniforms.uWindTime=n,c.uniforms.uBladeDensity={value:r},c.uniforms.uMaxFade={value:o},c.uniforms.uWindStr={value:s},c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
        uniform float uWindTime;
        uniform float uWindStr;
        varying vec2 vGrassUv;
        varying float vCamDist;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vGrassUv = uv;
        vec4 instWorld = modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        float phase = instWorld.x * 0.14 + instWorld.z * 0.11;
        float gust = sin(uWindTime * 1.9 + phase) + 0.45 * sin(uWindTime * 3.7 + phase * 1.7);
        float tipFlex = uv.y * uv.y;
        transformed.x += gust * uWindStr * tipFlex;
        transformed.z += cos(uWindTime * 1.45 + phase * 0.8) * (uWindStr * 0.65) * tipFlex;
        vCamDist = distance(cameraPosition, instWorld.xyz);`),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uBladeDensity;
        uniform float uMaxFade;
        varying vec2 vGrassUv;
        varying float vCamDist;`).replace("#include <alphatest_fragment>",`float x = vGrassUv.x;
        float y = vGrassUv.y;
        float blades = sin(x * 3.14159 * uBladeDensity) * 0.5 + 0.5;
        float subBlades = sin(x * 3.14159 * (uBladeDensity * 1.73) + 1.2) * 0.5 + 0.5;
        float arch = sin(x * 3.14159);
        float tipLimit = (0.24 + 0.54 * blades + 0.26 * subBlades) * (0.48 + 0.52 * arch);
        float distFade = 1.0 - smoothstep(uMaxFade * 0.68, uMaxFade, vCamDist);
        float mask = smoothstep(y - 0.09, y + 0.04, tipLimit * distFade);
        diffuseColor.rgb *= mix(0.62, 1.24, smoothstep(0.0, 0.78, y));
        diffuseColor.a = mask;
        #include <alphatest_fragment>`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
        normal = normalize(vNormal);`)},l.customProgramCacheKey=()=>`wind-grass-v2-${e}-${r}-${o}`,l}function On(i,e=1.07){if(i.length===0)return null;let t=0,n=0;for(let b=0;b<i.length;b++){const P=i[b].geo;t+=P.vertexCount,n+=P.indices.length}if(t===0||n===0)return null;const r=new Float32Array(t*3),o=new Float32Array(t*3),s=new Float32Array(t*2),a=new Float32Array(t*3),l=new Uint32Array(n);let c=0,u=0,d=1/0,h=1/0,p=1/0,x=-1/0,g=-1/0,m=-1/0;for(let b=0;b<i.length;b++){const P=i[b],E=P.geo,A=E.positions,T=E.normals,S=E.uvs,M=E.ao,I=E.indices,O=E.vertexCount,k=Math.cos(P.rotY),U=Math.sin(P.rotY),D=Math.cos(P.tiltX),w=Math.sin(P.tiltX),y=Math.cos(P.tiltZ),F=Math.sin(P.tiltZ),q=y*k-F*w*U,Y=-F*D,X=y*U+F*w*k,L=F*k+y*w*U,$=y*D,N=F*U-y*w*k,H=-D*U,K=w,V=D*k,G=P.scXZ,Z=P.scY,B=P.wx,J=P.wy,lt=P.wz,ht=P.rMul,z=P.gMul,ut=P.bMul,et=c;for(let rt=0;rt<O;rt++){const ct=rt*3,Q=rt*2,j=A[ct]*G,C=A[ct+1]*Z,R=A[ct+2]*G,tt=q*j+Y*C+X*R+B,it=L*j+$*C+N*R+J,ft=H*j+K*C+V*R+lt,st=(et+rt)*3,yt=(et+rt)*2;r[st]=tt,r[st+1]=it,r[st+2]=ft,tt<d&&(d=tt),tt>x&&(x=tt),it<h&&(h=it),it>g&&(g=it),ft<p&&(p=ft),ft>m&&(m=ft);const gt=T[ct],Mt=T[ct+1],zt=T[ct+2];o[st]=q*gt+Y*Mt+X*zt,o[st+1]=L*gt+$*Mt+N*zt,o[st+2]=H*gt+K*Mt+V*zt,s[yt]=S[Q],s[yt+1]=S[Q+1];const _t=M[rt]*e;a[st]=ht*_t,a[st+1]=z*_t,a[st+2]=ut*_t}for(let rt=0;rt<I.length;rt++)l[u++]=et+I[rt];c+=O}const f=new Ee;f.setAttribute("position",new pe(r,3)),f.setAttribute("normal",new pe(o,3)),f.setAttribute("uv",new pe(s,2)),f.setAttribute("color",new pe(a,3)),f.setIndex(new pe(l,1)),f.boundingBox=new In(new ot(d,h,p),new ot(x,g,m));const _=new ot((d+x)*.5,(h+g)*.5,(p+m)*.5),v=Math.hypot(x-d,g-h,m-p)*.5;return f.boundingSphere=new di(_,v),f}const x0=[8,9,11,13,1,6,16,19,20,29],Kr=[15,16,17,18,19,20,21,24,29,31],g0=[0,1,2,3,4,5,6,7,10,12,27,28,30],b0=[0,1,2,3,4,5,6,7,9,10,11,12,13,15,16,17,18,19,20,21,27,28,29,30,31],M0=[0,8,14,15,22,23,24,25,26],_0=[6,8,9,10,12,13,22,23,26,27];function S0(i,e,t){return t()<.28?M0[Math.floor(t()*M0.length)]:i<110?x0[Math.floor(t()*x0.length)]:i>=585?_0[Math.floor(t()*_0.length)]:i>=435?t()<.84?g0[Math.floor(t()*g0.length)]:Kr[Math.floor(t()*Kr.length)]:e>.15||t()<.36?Kr[Math.floor(t()*Kr.length)]:b0[Math.floor(t()*b0.length)]}class Yp{group=new fe;windUniform={value:0};archetypes;farCedarShapes;farBroadShapes;barkMat;cedarLeafMat;broadLeafMat;farCedarMat;farBroadMat;boulderGeo;boulderMat;weedGeo;pampasGeo;fernGeo;flowerWeedGeo;weedMat;pampasMat;fernMat;flowerWeedMat;nearCells=new Map;midCells=new Map;farCells=new Map;grassCells=new Map;dummy=new ye;tmpColor=new Vt;constructor(e){this.group.name="KuroisoStreamingFoliage",this.archetypes=Vp();const t=Gp();this.farCedarShapes=t.cedar,this.farBroadShapes=t.broad,this.barkMat=e.getMaterial("tree_bark",{repeatX:1,repeatY:3,roughness:.94,tint:14208706,bumpScale:.06}).clone(),this.barkMat.vertexColors=!0,this.cedarLeafMat=e.getMaterial("foliage_green",{repeatX:2,repeatY:2,roughness:.86,tint:10206606,bumpScale:.04}).clone(),this.cedarLeafMat.vertexColors=!0,this.broadLeafMat=e.getMaterial("shrub_foliage",{repeatX:2,repeatY:2,roughness:.86,tint:14017444,bumpScale:.05}).clone(),this.broadLeafMat.vertexColors=!0,this.farCedarMat=e.getMaterial("foliage_green",{repeatX:2,repeatY:2,roughness:.9,tint:9483140,bumpScale:0}).clone(),this.farCedarMat.vertexColors=!0,this.farBroadMat=e.getMaterial("shrub_foliage",{repeatX:2,repeatY:2,roughness:.88,tint:13163158,bumpScale:0}).clone(),this.farBroadMat.vertexColors=!0,this.boulderGeo=new Tn(1,1),this.boulderMat=e.getMaterial("moss_rock_heavy",{repeatX:2,repeatY:2,roughness:.92,tint:14213072,bumpScale:.08}),this.weedGeo=qr(1.22,.82),this.pampasGeo=qr(1.48,1.58),this.fernGeo=qr(1.38,.94),this.flowerWeedGeo=qr(.98,.65),this.weedMat=$r(e,"tall_grass",12113030,this.windUniform,7,132,.11),this.pampasMat=$r(e,"dry_grass",15260068,this.windUniform,9,145,.22),this.fernMat=$r(e,"dry_ferns",10074224,this.windUniform,6,118,.09),this.flowerWeedMat=$r(e,"meadow_wildflower",12769430,this.windUniform,8,96,.1)}canPlaceTree(e,t,n,r,o){return!(n<9.5||n>760||r<.42||o.roadWeight>.05||o.trailWeight>.06||o.terraceWeight>.05||$o(e,t,2.8)||Math.hypot(e-Me.x,t-Me.z)<95||Math.hypot(e-gn.x,t-gn.z)<32)}buildNearForestCell(e,t){const n=new fe,r=e*wn,o=t*wn,s=Zr(e,t,211),a=[],l=[],c=[],u=[],d=12,h=wn/d;let p=0;for(let _=0;_<d;_++)for(let v=0;v<d;v++){const b=r+(v+.12+s()*.76)*h,P=o+(_+.12+s()*.76)*h;if(Math.abs(b)>ae-16||Math.abs(P)>le-16)continue;const A=.72+co(b*.018,P*.018,2)*.22;if(s()>A)continue;const T=Hn(b,P),[,S]=hr(b,P,2.2);if(!this.canPlaceTree(b,P,T.height,S,T))continue;const M=S0(T.height,T.streamWeight,s),I=this.archetypes[M],O=T.height>580?Math.max(.46,1-(T.height-580)/260):1,k=(.82+s()*.38)*O,U=k*(.9+s()*.2),D=k*(.88+s()*.24),w=s()*Math.PI*2,y=(s()-.5)*.085,F=(s()-.5)*.085,q=T.height-.12,Y=.84+s()*.26;a.push({geo:I.woodLod0,wx:b,wy:q,wz:P,rotY:w,tiltX:y,tiltZ:F,scXZ:U,scY:D,rMul:Y,gMul:Y,bMul:Y});const X=.76+s()*.34;if(I.spec.leafGroup==="cedar")l.push({geo:I.leafLod0,wx:b,wy:q,wz:P,rotY:w,tiltX:y,tiltZ:F,scXZ:U,scY:D,rMul:X*.88,gMul:X*1,bMul:X*.86});else{const L=p%5===0;c.push({geo:I.leafLod0,wx:b,wy:q,wz:P,rotY:w,tiltX:y,tiltZ:F,scXZ:U,scY:D,rMul:L?X*1.08:X*.85,gMul:L?X*.94:X*.99,bMul:L?X*.6:X*.72})}p++}for(let _=0;_<6;_++){const v=r+s()*wn,b=o+s()*wn;if(Math.abs(v)>ae-16||Math.abs(b)>le-16)continue;const P=Hn(v,b);if(P.height<.6||P.roadWeight>.25||P.trailWeight>.35||P.terraceWeight>.35||$o(v,b,2))continue;const E=P.height>720||P.height<12?1.1+s()*2.4:.65+s()*1.55;u.push([v,P.height-E*.22,b,E,s()*Math.PI,s()*Math.PI])}const x=[],g=On(a,1.05);if(g){const _=new It(g,this.barkMat);_.castShadow=!1,_.receiveShadow=!0,n.add(_),x.push(_)}const m=On(l,1);if(m){const _=new It(m,this.cedarLeafMat);_.castShadow=!1,_.receiveShadow=!0,n.add(_),x.push(_)}const f=On(c,1);if(f){const _=new It(f,this.broadLeafMat);_.castShadow=!1,_.receiveShadow=!0,n.add(_),x.push(_)}if(u.length>0){const _=new ka(this.boulderGeo,this.boulderMat,u.length);for(let v=0;v<u.length;v++){const[b,P,E,A,T,S]=u[v];this.dummy.position.set(b,P,E),this.dummy.rotation.set(T,S,T*.5),this.dummy.scale.set(A*1.15,A*.68,A*.95),this.dummy.updateMatrix(),_.setMatrixAt(v,this.dummy.matrix)}_.castShadow=!1,_.receiveShadow=!0,n.add(_)}return{group:n,count:p,cx:e,cz:t,shadowMeshes:x}}buildMidForestCell(e,t){const n=new fe,r=e*ar,o=t*ar,s=Zr(e,t,419),a=[],l=[],c=[],u=15,d=ar/u;let h=0;for(let m=0;m<u;m++)for(let f=0;f<u;f++){const _=r+(f+.14+s()*.72)*d,v=o+(m+.14+s()*.72)*d;if(Math.abs(_)>ae-18||Math.abs(v)>le-18)continue;const b=co(_*.018,v*.018,2);if(s()>.76+b*.18)continue;const P=Hn(_,v),[,E]=hr(_,v,3);if(!this.canPlaceTree(_,v,P.height,E,P))continue;const A=S0(P.height,P.streamWeight,s),T=this.archetypes[A],S=P.height>580?Math.max(.46,1-(P.height-580)/260):1,M=(.94+s()*.42)*S,I=M*(.94+s()*.18),O=M*(.9+s()*.22),k=s()*Math.PI*2,U=P.height-.35,D=.85+s()*.22;a.push({geo:T.woodLod1,wx:_,wy:U,wz:v,rotY:k,tiltX:0,tiltZ:0,scXZ:I,scY:O,rMul:D,gMul:D,bMul:D});const w=.76+s()*.34;if(T.spec.leafGroup==="cedar")l.push({geo:T.leafLod1,wx:_,wy:U,wz:v,rotY:k,tiltX:0,tiltZ:0,scXZ:I,scY:O,rMul:w*.88,gMul:w*1,bMul:w*.86});else{const y=h%5===0;c.push({geo:T.leafLod1,wx:_,wy:U,wz:v,rotY:k,tiltX:0,tiltZ:0,scXZ:I,scY:O,rMul:y?w*1.08:w*.85,gMul:y?w*.94:w*.99,bMul:y?w*.6:w*.72})}h++}const p=On(a,1.05);if(p){const m=new It(p,this.barkMat);m.receiveShadow=!0,n.add(m)}const x=On(l,1);if(x){const m=new It(x,this.cedarLeafMat);m.receiveShadow=!0,n.add(m)}const g=On(c,1);if(g){const m=new It(g,this.broadLeafMat);m.receiveShadow=!0,n.add(m)}return{group:n,count:h,cx:e,cz:t}}buildFarForestCell(e,t){const n=new fe,r=e*lr,o=t*lr,s=Zr(e,t,101),a=[],l=[],c=18,u=lr/c;let d=0;for(let x=0;x<c;x++)for(let g=0;g<c;g++){const m=r+(g+.1+s()*.8)*u,f=o+(x+.1+s()*.8)*u;if(Math.abs(m)>ae-24||Math.abs(f)>le-24)continue;const _=Hn(m,f),[,v]=hr(m,f,4);if(!this.canPlaceTree(m,f,_.height,v,_))continue;const b=_.height>600?Math.max(.48,1-(_.height-600)/260):1,P=(.98+s()*.88)*b,E=P*(.86+s()*.32),A=s()*Math.PI*2,T=.78+s()*.34;if(_.height<460&&s()<.38){const S=this.farBroadShapes[Math.floor(s()*this.farBroadShapes.length)],M=d%5===0;l.push({geo:S,wx:m,wy:_.height-1.4,wz:f,rotY:A,tiltX:0,tiltZ:0,scXZ:P,scY:E,rMul:M?T*1.08:T*.84,gMul:M?T*.95:T*.98,bMul:M?T*.64:T*.72})}else{const S=this.farCedarShapes[Math.floor(s()*this.farCedarShapes.length)];a.push({geo:S,wx:m,wy:_.height-1.6,wz:f,rotY:A,tiltX:0,tiltZ:0,scXZ:P,scY:E,rMul:T*.9,gMul:T*1.02,bMul:T*.88})}d++}const h=On(a,1);h&&n.add(new It(h,this.farCedarMat));const p=On(l,1);return p&&n.add(new It(p,this.farBroadMat)),{group:n,count:d,cx:e,cz:t}}buildGrassCell(e,t){const n=new fe,r=e*Ai,o=t*Ai,s=Zr(e,t,303),a=[],l=[],c=[],u=[];for(let h=0;h<460;h++){const p=r+s()*Ai,x=o+s()*Ai;if(Math.abs(p)>ae-8||Math.abs(x)>le-8)continue;const g=Hn(p,x);if(g.height<3.5||g.height>845||g.roadWeight>.68||g.trailWeight>.62||g.terraceWeight>.25&&$o(p,x,.35))continue;const[,m]=hr(p,x,2);if(m<.56)continue;const f=s()*Math.PI*2,_=.76+s()*.34,v=g.roadWeight>.12||g.trailWeight>.12||g.terraceWeight>.15;if(g.height>610)s()<.62?l.push([p,g.height-.08,x,.7+s()*.65,f,_]):a.push([p,g.height-.06,x,.75+s()*.5,f,_]);else if(v){const b=s();b<.45?a.push([p,g.height-.06,x,.8+s()*.65,f,_]):b<.75?l.push([p,g.height-.08,x,.75+s()*.65,f,_]):u.push([p,g.height-.05,x,.8+s()*.55,f,_])}else if(g.streamWeight>.2||g.height>320)s()<.65?c.push([p,g.height-.06,x,.85+s()*.65,f,_]):a.push([p,g.height-.06,x,.75+s()*.55,f,_]);else{const b=s();b<.52?a.push([p,g.height-.06,x,.85+s()*.7,f,_]):b<.78?l.push([p,g.height-.08,x,.8+s()*.7,f,_]):b<.9?c.push([p,g.height-.06,x,.8+s()*.55,f,_]):u.push([p,g.height-.05,x,.8+s()*.5,f,_])}}const d=(h,p,x)=>{if(h.length===0)return;const g=new ka(p,x,h.length);for(let m=0;m<h.length;m++){const[f,_,v,b,P,E]=h[m];this.dummy.position.set(f,_,v),this.dummy.rotation.set(0,P,0),this.dummy.scale.set(b,b*(.85+m%4*.1),b),this.dummy.updateMatrix(),g.setMatrixAt(m,this.dummy.matrix),this.tmpColor.setRGB(E,E,E*.94),g.setColorAt(m,this.tmpColor)}g.receiveShadow=!0,g.castShadow=!1,n.add(g)};return d(a,this.weedGeo,this.weedMat),d(l,this.pampasGeo,this.pampasMat),d(c,this.fernGeo,this.fernMat),d(u,this.flowerWeedGeo,this.flowerWeedMat),{group:n,count:a.length+l.length+c.length+u.length,cx:e,cz:t}}disposeGroup(e){this.group.remove(e),e.traverse(t=>{t.isInstancedMesh?t.dispose():t.isMesh&&t.geometry.dispose()})}updateNearShadows(e,t){for(const r of this.nearCells.values()){if(!r.shadowMeshes)continue;const o=(r.cx+.5)*wn-e,s=(r.cz+.5)*wn-t,a=o*o+s*s<=15876;for(let l=0;l<r.shadowMeshes.length;l++)r.shadowMeshes[l].castShadow!==a&&(r.shadowMeshes[l].castShadow=a)}}warmStart(e,t){this.streamGrid(e,t,Ai,128,152,this.grassCells,(n,r)=>this.buildGrassCell(n,r),18),this.streamGrid(e,t,wn,155,188,this.nearCells,(n,r)=>this.buildNearForestCell(n,r),22),this.streamGrid(e,t,ar,465,525,this.midCells,(n,r)=>this.buildMidForestCell(n,r),28,136),this.streamGrid(e,t,lr,2500,3e3,this.farCells,(n,r)=>this.buildFarForestCell(n,r),68,425),this.updateNearShadows(e,t)}streamGrid(e,t,n,r,o,s,a,l,c=0){const u=n*.45;for(const[f,_]of s.entries()){const v=Math.hypot((_.cx+.5)*n-e,(_.cz+.5)*n-t);(v>o||c>0&&v<c-u)&&(this.disposeGroup(_.group),s.delete(f))}const d=Math.max(Math.floor(-ae/n),Math.floor((e-r)/n)),h=Math.min(Math.floor(ae/n)-1,Math.floor((e+r)/n)),p=Math.max(Math.floor(-le/n),Math.floor((t-r)/n)),x=Math.min(Math.floor(le/n)-1,Math.floor((t+r)/n)),g=[];for(let f=p;f<=x;f++)for(let _=d;_<=h;_++){const v=Math.hypot((_+.5)*n-e,(f+.5)*n-t);if(v>r||v<c)continue;const b=`${_},${f}`;s.has(b)||g.push({cx:_,cz:f,key:b,dist:v})}if(g.length===0)return;g.sort((f,_)=>f.dist-_.dist);const m=Math.min(l,g.length);for(let f=0;f<m;f++){const _=g[f],v=a(_.cx,_.cz);s.set(_.key,v),this.group.add(v.group)}}update(e,t,n){this.windUniform.value=n,this.streamGrid(e,t,Ai,132,162,this.grassCells,(r,o)=>this.buildGrassCell(r,o),2),this.streamGrid(e,t,wn,160,192,this.nearCells,(r,o)=>this.buildNearForestCell(r,o),2),this.streamGrid(e,t,ar,470,530,this.midCells,(r,o)=>this.buildMidForestCell(r,o),1,136),this.streamGrid(e,t,lr,2550,3050,this.farCells,(r,o)=>this.buildFarForestCell(r,o),2,425),this.updateNearShadows(e,t)}getStats(){let e=0,t=0;for(const n of this.nearCells.values())e+=n.count;for(const n of this.midCells.values())e+=n.count;for(const n of this.farCells.values())e+=n.count;for(const n of this.grassCells.values())t+=n.count;return{farForestCells:this.farCells.size,midForestCells:this.midCells.size,nearForestCells:this.nearCells.size,grassCells:this.grassCells.size,visibleTrees:e,visibleGrassTufts:t,archetypeCount:this.archetypes.length}}}function Xp(i,e){const t=new fe;t.name="SurroundingPacificOcean";const n={uTime:{value:0},uSunDir:{value:e.clone().normalize()},uDeepColor:{value:new Vt(730688)},uShallowColor:{value:new Vt(2057328)},uSkyColor:{value:new Vt(10536678)},uFogColor:{value:new Vt(12112100)},uFogDensity:{value:175e-6}},r=new xn({uniforms:n,vertexShader:`
      uniform float uTime;
      varying vec3 vWorldPos;
      varying float vWaveH;

      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        float w1 = sin(wp.x * 0.04 + uTime * 1.15) * cos(wp.z * 0.03 - uTime * 0.85) * 0.24;
        float w2 = sin((wp.x * 0.085 - wp.z * 0.07) + uTime * 1.8) * 0.10;
        float distFade = 1.0 - smoothstep(2600.0, 9500.0, length(wp.xz));
        float wave = (w1 + w2) * distFade;
        wp.y += wave;
        vWaveH = wave;
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform vec3 uSunDir;
      uniform vec3 uDeepColor;
      uniform vec3 uShallowColor;
      uniform vec3 uSkyColor;
      uniform vec3 uFogColor;
      uniform float uFogDensity;

      varying vec3 vWorldPos;
      varying float vWaveH;

      vec3 waveNormal(vec2 p, float t) {
        float e = 0.28;
        float h0 = sin(p.x * 0.22 + t * 1.55) * 0.08 + cos(p.y * 0.29 - t * 1.3) * 0.07
                 + sin((p.x + p.y) * 0.52 + t * 2.2) * 0.035;
        float hx = sin((p.x + e) * 0.22 + t * 1.55) * 0.08 + cos(p.y * 0.29 - t * 1.3) * 0.07
                 + sin((p.x + e + p.y) * 0.52 + t * 2.2) * 0.035;
        float hz = sin(p.x * 0.22 + t * 1.55) * 0.08 + cos((p.y + e) * 0.29 - t * 1.3) * 0.07
                 + sin((p.x + p.y + e) * 0.52 + t * 2.2) * 0.035;
        return normalize(vec3(-(hx - h0) / e, 1.0, -(hz - h0) / e));
      }

      void main() {
        vec3 viewVec = cameraPosition - vWorldPos;
        float dist = length(viewVec);
        vec3 V = viewVec / max(dist, 0.001);

        float detailFade = 1.0 - smoothstep(320.0, 3800.0, dist);
        vec3 N = normalize(mix(vec3(0.0, 1.0, 0.0), waveNormal(vWorldPos.xz, uTime), 0.3 + 0.7 * detailFade));

        // Coastal shallow turquoise belt hugging the 2km x 5km island perimeter
        vec2 islandUV = vec2(vWorldPos.x / 1040.0, vWorldPos.z / 2520.0);
        float coastalMask = 1.0 - smoothstep(0.90, 1.44, length(islandUV));
        vec3 waterBase = mix(uDeepColor, uShallowColor, coastalMask * 0.72);

        float fresnel = pow(1.0 - max(dot(N, V), 0.0), 4.0);
        fresnel = clamp(0.08 + 0.88 * fresnel, 0.0, 1.0);
        vec3 color = mix(waterBase, uSkyColor, fresnel * 0.82);

        vec3 H = normalize(uSunDir + V);
        float spec = pow(max(dot(N, H), 0.0), 185.0);
        float broadSpec = pow(max(dot(N, H), 0.0), 22.0) * 0.14;
        color += vec3(1.0, 0.96, 0.86) * (spec * 1.3 + broadSpec);

        float foamNoise = sin(vWorldPos.x * 0.36 + uTime * 2.0) * cos(vWorldPos.z * 0.42 - uTime * 1.6);
        float crestFoam = smoothstep(0.18, 0.29, vWaveH + foamNoise * 0.05) * coastalMask * 0.38;
        color = mix(color, vec3(0.92, 0.96, 0.98), crestFoam);

        float fogFactor = 1.0 - exp(-pow(dist * uFogDensity, 2.0));
        color = mix(color, uFogColor, clamp(fogFactor, 0.0, 1.0));

        gl_FragColor = vec4(color, 1.0);
      }
    `,side:mn}),o=new Yi(5400,8200,128,160);o.rotateX(-Math.PI/2);const s=new It(o,r);t.add(s);const a=new Yi(34e3,34e3,24,24);a.rotateX(-Math.PI/2);const l=new It(a,r);l.position.y=-.22,t.add(l);const c=i.getMaterial("basalt_cliff",{repeatX:3,repeatY:3,roughness:.92,bumpScale:.08}),u=[[-390,2440,32,26,26],[435,2410,38,34,28],[195,2540,22,16,18],[-980,-1820,44,38,32],[-895,-2010,36,30,28],[-1120,240,42,36,34],[1140,-320,48,44,38],[-260,-2640,52,58,40],[320,-2680,56,66,44]];for(let d=0;d<u.length;d++){const[h,p,x,g,m]=u[d],f=new Tn(1,1),_=f.attributes.position;for(let b=0;b<_.count;b++){const P=_.getX(b),E=_.getY(b),A=_.getZ(b),T=.8+.34*Math.sin(P*4.1+d*2.1)*Math.cos(A*3.7-E*2.8);_.setXYZ(b,P*x*T,E*g*(E>0?1.15:.7),A*m*T)}f.computeVertexNormals();const v=new It(f,c);v.position.set(h,g*.25,p),v.rotation.y=d*1.17,v.castShadow=!0,v.receiveShadow=!0,t.add(v)}return{group:t,update(d){n.uTime.value=d}}}function Zp(i){const e=new fe;e.name="KuroisoInfrastructureAndSites";const t=i.getMaterial("ishigaki_mossy",{repeatX:3,repeatY:1,roughness:.94,bumpScale:.08}),n=i.getMaterial("ishigaki_rubble",{repeatX:3,repeatY:1,roughness:.95,bumpScale:.08}),r=i.getMaterial("charred_cedar",{repeatX:1,repeatY:3,roughness:.92,bumpScale:.05}),o=i.getMaterial("aged_timber_planks",{repeatX:1,repeatY:1,roughness:.92}),s=i.getMaterial("dark_iron_plate",{repeatX:1,repeatY:1,roughness:.75,metalness:.55}),a=i.getMaterial("peeling_paint_steel",{repeatX:2,repeatY:1,roughness:.78,metalness:.35}),l=i.getMaterial("mossy_aged_concrete",{repeatX:2,repeatY:1,roughness:.94,bumpScale:.05}),c=i.getMaterial("driftwood",{repeatX:2,repeatY:1,roughness:.94,bumpScale:.07}),u=i.getMaterial("seaweed_shore",{repeatX:2,repeatY:2,roughness:.72,bumpScale:.05}),d=i.getMaterial("barnacle_rock",{repeatX:2,repeatY:2,roughness:.9,bumpScale:.08}),h=i.getMaterial("moss_rock_heavy",{repeatX:2,repeatY:2,roughness:.92,bumpScale:.08}),p=i.getMaterial("coal_seam_rock",{repeatX:2,repeatY:2,roughness:.88,bumpScale:.08}),x=new Q0({color:1711136,transparent:!0,opacity:.72}),g=new Yt(.14,1.15,.14),m=new Yt(.45,.36,.45),f={house:9137746,shop:12081983,koban:3894440,park:4949835,secret_base:8162882,mine:4145994,port:3833228};for(let L=0;L<Je.length;L++){const $=Je[L],N=po.has($.id),H=new fe;H.position.set($.x,$.y,$.z),H.rotation.y=$.yaw;const K=new Set(["H07","H08","H09","H13","H14","H15","H16","H19","H20","H21","H22","H23","H24"]);if($.category!=="secret_base"&&$.category!=="port"&&!K.has($.id)){const V=$.category==="park"?3.2:4.2,G=new It(new Yt($.radiusX*1.96,V,$.radiusZ*1.96),L%2===0?t:n);G.position.y=-V*.5-.06,G.receiveShadow=!0,G.castShadow=!0,H.add(G)}if(!N){const V=$.radiusX*.82,G=$.radiusZ*.82;for(const[J,lt]of[[-V,-G],[V,-G],[-V,G],[V,G]]){const ht=new It(m,l);ht.position.set(J,.14,lt),ht.receiveShadow=!0,H.add(ht)}const Z=new It(g,o);Z.position.set(0,.55,G+.25),Z.castShadow=!0;const B=new It(new Yt(.22,.16,.22),new Fi({color:f[$.category]??9137746,roughness:.85}));B.position.set(0,1.16,G+.25),H.add(Z,B)}e.add(H)}{const L=new fe;L.position.set(Pn.x,Pn.y,Pn.z),L.rotation.y=.2;const $=new It(new Yt(28,.72,.55),t);$.position.set(0,.36,-11.2);const N=new It(new Yt(.55,.72,22.4),t);N.position.set(-14,.36,0);const H=new It(new Yt(28,.72,.55),t);H.position.set(0,.36,11.2);for(const V of[-4.5,4.5]){const G=new It(new Yt(2.1,.12,.55),o);G.position.set(-7.5,.48,V);const Z=new It(new Yt(2.1,.42,.1),o);Z.position.set(-7.5,.78,V-.24);const B=new It(new Yt(.14,.48,.48),l);B.position.set(-8.35,.24,V);const J=new It(new Yt(.14,.48,.48),l);J.position.set(-6.65,.24,V),L.add(G,Z,B,J)}const K=new It(new We(.45,.55,.85,8),l);K.position.set(4.5,.42,0),L.add($,N,H,K),e.add(L)}{const L=new fe;L.position.set(cn.x,cn.y,cn.z);const $=[[-5.2,-3.5,2.2],[-2.5,-5.8,2.6],[2.4,-5.4,2.1],[5.5,-2,2.4],[4.8,3.6,1.9],[-5.4,2.8,2]];for(const[N,H,K]of $){const V=new It(new Tn(K,1),h);V.scale.set(1.2,.85,1),V.position.set(N,K*.45,H),V.castShadow=!0,V.receiveShadow=!0,L.add(V)}for(let N=0;N<8;N++){const H=N/8*Math.PI*2,K=new It(new Tn(.24,0),h);K.position.set(Math.cos(H)*.85,.14,Math.sin(H)*.85),L.add(K)}for(const[N,H,K]of[[-2,.8,.3],[1.8,-1.2,-.7],[.4,2.3,1.45]]){const V=new It(new We(.22,.25,2.6,7),c);V.position.set(N,.22,H),V.rotation.set(Math.PI/2,K,0),V.castShadow=!0,L.add(V)}e.add(L)}{const L=new fe;L.position.set(Ze.x,Ze.y,Ze.z);for(const[V,G,Z]of[[-7.5,-5.5,3.2],[7.2,-5,3.5],[0,-8.5,4.2],[-9.2,2.5,2.1]]){const B=new It(new Tn(Z,1),p);B.scale.set(1.25,.9,1),B.position.set(V,Z*.45,G),B.castShadow=!0,B.receiveShadow=!0,L.add(B)}const $=new It(new Yt(1.4,4.2,2.2),t);$.position.set(-2.6,2.1,-6.2);const N=new It(new Yt(1.4,4.2,2.2),t);N.position.set(2.6,2.1,-6.2);const H=new It(new Yt(6.8,1.3,2.4),t);H.position.set(0,4.45,-6.2);const K=new It(new Yt(3.8,3.8,1.2),new Fi({color:460810,roughness:1}));K.position.set(0,1.9,-6.8),L.add($,N,H,K),e.add(L)}{const L=ce(Me.x,Me.z),$=new fe;$.position.set(Me.x,L,Me.z);const N=new It(new Yt(.98,.8,.98),l);N.position.y=-.1,N.castShadow=!0,N.receiveShadow=!0;const H=new It(new Yt(.32,.9,.32),l);H.position.y=.72,H.castShadow=!0;const K=ce(Me.x+2.2,Me.z-1.2)-L,V=new It(new Yt(.16,3,.16),o);V.position.set(2.2,K+.95,-1.2),V.castShadow=!0;const G=new It(new Yt(.34,1.15,.08),o);G.position.set(2.2,K+1.85,-1.12),G.castShadow=!0;const Z=ce(Me.x-2.6,Me.z+1.4)-L,B=[[.74,.14],[.58,.5],[.44,.8],[.3,1.04]];for(const[J,lt]of B){const ht=new It(new Tn(J,0),h);ht.scale.set(1.22,.56,1.12),ht.position.set(-2.6,Z+lt,1.4),ht.castShadow=!0,ht.receiveShadow=!0,$.add(ht)}$.add(N,H,V,G),e.add($)}{const L=new fe;L.position.set(un.x,un.y,un.z),L.rotation.y=Math.PI*.25;const $=new It(new Yt(28,4.2,10),n);$.position.set(0,-1.95,0),$.receiveShadow=!0,$.castShadow=!0;const N=new It(new Yt(28.2,.28,.75),l);N.position.set(0,.24,-4.65),N.receiveShadow=!0;for(const K of[-10,-3.5,3.5,10]){const V=new It(new We(.18,.24,.55,8),s);V.position.set(K,.58,-4.55),V.castShadow=!0,L.add(V)}const H=new It(new Yt(38,5.2,4.8),t);H.position.set(-22,-2,-18),H.rotation.y=.55,H.castShadow=!0,H.receiveShadow=!0;for(let K=0;K<6;K++){const V=-7.5-K*3.2;for(const G of[-2.2,2.2]){const Z=new It(new We(.16,.2,8.6,7),r);Z.position.set(G,-3.6,V),Z.castShadow=!0,L.add(Z)}if(K<4){const G=new It(new Yt(4.8,.16,2.8),o);G.position.set(0,-.08,V),G.rotation.z=(K%2===0?1:-1)*.02,G.receiveShadow=!0,L.add(G)}}L.add($,N,H),e.add(L)}const _=new We(.11,.17,8.8,6);_.translate(0,4.4,0);const v=new Yt(1.75,.11,.11),b=new Set(["road_village_mid","road_village_low","road_village_high"]);for(const L of Ni){if(!b.has(L.id))continue;const $=[],N=[];for(let H=0;H<L.points.length;H++){const[K,V]=L.points[H],G=L.points[Math.min(H+1,L.points.length-1)],Z=L.points[Math.max(H-1,0)],B=G[0]-Z[0],J=G[1]-Z[1],lt=Math.hypot(B,J)||1,ht=-J/lt*3.4,z=B/lt*3.4,ut=K+ht,et=V+z,rt=ce(ut,et)-.35,ct=Math.atan2(B,J),Q=new fe;Q.position.set(ut,rt,et),Q.rotation.y=ct,Q.rotation.z=(H%3-1)*.03;const j=new It(_,r);j.castShadow=!0;const C=new It(v,s);C.position.y=8;const R=new It(v,s);R.position.y=7.3,Q.add(j,C,R),e.add(Q);const tt=Math.cos(ct),it=Math.sin(ct);$.push(new ot(ut-.72*tt,rt+8.05,et+.72*it)),N.push(new ot(ut+.72*tt,rt+8.05,et-.72*it))}for(const H of[$,N])for(let K=0;K<H.length-1;K++){const V=H[K],G=H[K+1],Z=V.distanceTo(G);if(Z>220)continue;const B=Math.min(3.5,Z*.028),J=[];for(let lt=0;lt<=8;lt++){const ht=lt/8,z=new ot().lerpVectors(V,G,ht);z.y-=4*ht*(1-ht)*B,J.push(z)}e.add(new Nc(new Ee().setFromPoints(J),x))}}const P=gn.x+8.5,E=gn.z+10,A=ce(P,E),T=new It(new Yt(7.6,1.4,.72),t);T.position.set(P,A+.35,E),T.rotation.y=-.35,e.add(T);for(const[L,$,N,H]of[[-2,-1.2,.52,1.48],[-.7,-1.7,.42,1.18],[.6,-2.2,.48,1.34]]){const K=P+L,V=E+$,G=ce(K,V),Z=new It(new Yt(N,H,N*.72),t);Z.position.set(K,G+H*.5,V),Z.rotation.y=-.35,Z.castShadow=!0,e.add(Z)}const S=P+2.4,M=E-2.9,I=ce(S,M),O=new It(new We(.22,.34,.85,6),t);O.position.set(S,I+.42,M);const k=new It(new Yt(.46,.42,.46),t);k.position.set(S,I+1.05,M);const U=new It(new js(.58,.36,4),t);U.position.set(S,I+1.42,M),U.rotation.y=Math.PI/4,e.add(O,k,U);const D=Ni.find(L=>L.id==="road_village_mid");if(D)for(let L=1;L<D.points.length-2;L+=2){const[$,N]=D.points[L],[H,K]=D.points[L+1],V=H-$,G=K-N,Z=Math.hypot(V,G)||1,B=-2.8,J=Math.max(3,Math.floor(Z/8));for(let lt=0;lt<J;lt++){const ht=lt/J,z=(lt+1)/J,ut=$+V*ht+B,et=N+G*ht,rt=$+V*z+B,ct=N+G*z,Q=ce(ut,et),j=ce(rt,ct),C=Math.hypot(rt-ut,ct-et),R=new It(new We(.055,.055,.95,5),s);R.position.set(ut,Q+.45,et);const tt=new It(new Yt(.12,.28,C+.08),a);tt.position.set((ut+rt)*.5,(Q+j)*.5+.72,(et+ct)*.5),tt.rotation.y=Math.atan2(rt-ut,ct-et),tt.rotation.x=-Math.atan2(j-Q,C),e.add(R,tt)}}const w=[],y=[];let F=0;for(let L=-760;L<=2140;L+=18){const $=na(L),N=3.8+(L>1400?(L-1400)*.006:0),H=ce($,L)+.55;if(w.push($-N,H,L,$+N,H,L),F>0){const K=(F-1)*2;y.push(K,K+2,K+1,K+1,K+2,K+3)}F++}const q=new Ee;q.setAttribute("position",new ue(w,3)),q.setIndex(y),q.computeVertexNormals();const Y=new It(q,new Fi({color:3894904,roughness:.14,metalness:.22,transparent:!0,opacity:.78}));e.add(Y);const X=[[Kt.x-8,Kt.z-5,4.4,.26,.42],[Kt.x+9,Kt.z-3,5.1,.3,-.68],[Kt.x-16,Kt.z-11,5.6,.32,1.12],[Kt.x+18,Kt.z-9,3.8,.22,2.05],[Kt.x+2,Kt.z+7,3.2,.18,-1.25],[Kt.x-24,Kt.z+2,4.5,.28,-.32]];for(const[L,$,N,H,K]of X){const V=ce(L,$),G=new It(new We(H*.74,H,N,7),c);G.position.set(L,V+H*.55,$),G.rotation.set(Math.PI/2-.05,K,.06),G.castShadow=!0,G.receiveShadow=!0,e.add(G)}for(let L=0;L<14;L++){const $=Kt.x-36+L*5.6,N=Kt.z+9+Math.sin(L*1.9)*4.5,H=ce($,N);if(!(H<.25||H>3.2))if(L%3===0){const K=new It(new Yt(2.1+L%2*.7,.09,.32),c);K.position.set($,H+.02,N),K.rotation.set(.05,L*.85,-.04),K.castShadow=!0,K.receiveShadow=!0,e.add(K)}else{const K=.55+L%4*.22,V=new It(new Js(K,1),L%2===0?u:d);V.scale.set(1.4,.42,1.15),V.position.set($,H-K*.14,N),V.rotation.set(.12*L,L*1.1,.08),V.receiveShadow=!0,e.add(V)}}for(const[L,$,N]of[[Kt.x-56,Kt.z+16,4.8],[Kt.x-72,Kt.z+28,6.8],[Kt.x+62,Kt.z+14,5.2],[Kt.x+78,Kt.z+28,7.2]]){const H=ce(L,$),K=new It(new Tn(N,1),d);K.scale.set(1.25,.72,1.05),K.position.set(L,H+N*.22,$),K.castShadow=!0,K.receiveShadow=!0,e.add(K)}return e}function qp(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),o={},s={},a=i[0].morphTargetsRelative,l=new Ee;let c=0;for(let u=0;u<i.length;++u){const d=i[u];let h=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.attributes[p]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;s[p]===void 0&&(s[p]=[]),s[p].push(d.morphAttributes[p])}if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0;const d=[];for(let h=0;h<i.length;++h){const p=i[h].index;for(let x=0;x<p.count;++x)d.push(p.getX(x)+u);u+=i[h].attributes.position.count}l.setIndex(d)}for(const u in o){const d=v0(o[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(const u in s){const d=s[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){const p=[];for(let g=0;g<s[u].length;++g)p.push(s[u][g][h]);const x=v0(p);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(x)}}return l}function v0(i){let e,t,n,r=-1,o=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=u.count*t}const s=new e(o),a=new pe(s,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const d=l/t;for(let h=0,p=u.count;h<p;h++)for(let x=0;x<t;x++){const g=u.getComponent(h,x);a.setComponent(h+d,x,g)}}else s.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}const Qn=new Xt,Ci=new Zi,Pi=new dn,Li=new ot,Ko=new ot(1,1,1);function $p(i){const e=i.index?i.toNonIndexed():i;if(e.getAttribute("normal")||e.computeVertexNormals(),!e.getAttribute("uv")){const t=e.getAttribute("position").count;e.setAttribute("uv",new pe(new Float32Array(t*2),2))}for(const t of Object.keys(e.attributes))t!=="position"&&t!=="normal"&&t!=="uv"&&e.deleteAttribute(t);return e}function cr(i,e,t,n,r){if(r<=0)return;const o=i.getAttribute("uv"),s=[[n,t],[n,t],[e,n],[e,n],[e,t],[e,t]];for(let a=0;a<6;a++){const[l,c]=s[a],u=a*4;for(let d=0;d<4;d++){const h=u+d;o.setXY(h,o.getX(h)*l*r,o.getY(h)*c*r)}}o.needsUpdate=!0}function Kp(i,e,t,n,r){const o=i*.5,s=e*.5,a=n,l=[-o,0,0],c=[o,0,0],u=[-s,0,t],d=[s,0,t],h=[-o,-a,0],p=[o,-a,0],x=[-s,-a,t],g=[s,-a,t],m=[],f=[],_=(A,T,S,M,I,O)=>{m.push(A[0],A[1],A[2],T[0],T[1],T[2],S[0],S[1],S[2]),f.push(M[0],M[1],I[0],I[1],O[0],O[1])},v=(A,T,S,M,I,O,k,U)=>{_(A,T,S,I,O,k),_(A,S,M,I,k,U)},b=r;v(l,u,d,c,[-o*b,0],[-s*b,t*b],[s*b,t*b],[o*b,0]),v(h,p,g,x,[-o*b,0],[o*b,0],[s*b,t*b],[-s*b,t*b]),v(u,x,g,d,[0,a*b],[0,0],[e*b,0],[e*b,a*b]),i>.01&&v(c,p,h,l,[0,a*b],[0,0],[i*b,0],[i*b,a*b]);const P=Math.hypot(s-o,t);v(l,h,x,u,[0,a*b],[0,0],[P*b,0],[P*b,a*b]),v(d,g,p,c,[0,a*b],[0,0],[P*b,0],[P*b,a*b]);const E=new Ee;return E.setAttribute("position",new ue(m,3)),E.setAttribute("uv",new ue(f,2)),E.computeVertexNormals(),E}function jp(i,e,t,n){const r=i*.5,o=t*.5,s=n,a=[-r,0,o],l=[r,0,o],c=[0,e,o],u=[-r,0,-o],d=[r,0,-o],h=[0,e,-o],p=[],x=[],g=(_,v,b,P,E,A)=>{p.push(_[0],_[1],_[2],v[0],v[1],v[2],b[0],b[1],b[2]),x.push(P[0],P[1],E[0],E[1],A[0],A[1])};g(a,l,c,[0,0],[i*s,0],[r*s,e*s]),g(d,u,h,[0,0],[i*s,0],[r*s,e*s]);const m=Math.hypot(r,e);g(u,a,c,[0,0],[t*s,0],[t*s,m*s]),g(u,c,h,[0,0],[t*s,m*s],[0,m*s]),g(l,d,h,[0,0],[t*s,0],[t*s,m*s]),g(l,h,c,[0,0],[t*s,m*s],[0,m*s]),g(u,d,l,[0,0],[i*s,0],[i*s,t*s]),g(u,l,a,[0,0],[i*s,t*s],[0,t*s]);const f=new Ee;return f.setAttribute("position",new ue(p,3)),f.setAttribute("uv",new ue(x,2)),f.computeVertexNormals(),f}class Se{site;colliders=[];walkSurfaces=[];buckets=new Map;matIds=new WeakMap;nextMatId=1;minX=1/0;maxX=-1/0;minY=1/0;maxY=-1/0;minZ=1/0;maxZ=-1/0;constructor(e){this.site=e}getBucket(e,t,n,r){let o=this.matIds.get(t);o||(o=this.nextMatId++,this.matIds.set(t,o));const s=`${e}|${o}|${n?1:0}|${r?1:0}`;let a=this.buckets.get(s);return a||(a={layer:e,material:t,castShadow:n,receiveShadow:r,geometries:[]},this.buckets.set(s,a)),a}pushGeo(e,t,n,r,o,s){const a=$p(t);a.applyMatrix4(r),a.computeBoundingBox(),a.boundingBox&&(this.minX=Math.min(this.minX,a.boundingBox.min.x),this.maxX=Math.max(this.maxX,a.boundingBox.max.x),this.minY=Math.min(this.minY,a.boundingBox.min.y),this.maxY=Math.max(this.maxY,a.boundingBox.max.y),this.minZ=Math.min(this.minZ,a.boundingBox.min.z),this.maxZ=Math.max(this.maxZ,a.boundingBox.max.z)),this.getBucket(e,n,o,s).geometries.push(a)}collider(e,t,n,r,o,s){this.colliders.push({minX:Math.min(e,t),maxX:Math.max(e,t),minY:Math.min(n,r),maxY:Math.max(n,r),minZ:Math.min(o,s),maxZ:Math.max(o,s)})}floor(e,t,n,r,o){this.walkSurfaces.push({minX:Math.min(e,t),maxX:Math.max(e,t),minZ:Math.min(n,r),maxZ:Math.max(n,r),yMin:o,yMax:o,slopeAxis:"none"})}ramp(e,t,n,r,o,s,a,l){this.walkSurfaces.push({minX:Math.min(e,t),maxX:Math.max(e,t),minZ:Math.min(n,r),maxZ:Math.max(n,r),yMin:o,yMax:s,slopeAxis:a,slopeDir:l})}box(e,t,n,r,o,s,a,l,c={}){const u=new Yt(t,n,r),d=c.uvScale!==void 0?c.uvScale:.48;cr(u,t,n,r,d),Pi.set(c.rx??0,c.ry??0,c.rz??0,"YXZ"),Ci.setFromEuler(Pi),Li.set(o,s,a),Qn.compose(Li,Ci,Ko);const h=c.castShadow??e==="ext",p=c.receiveShadow??!0;if(this.pushGeo(e,u,l,Qn,h,p),c.solid){const x=c.rx??0,g=c.ry??0,m=c.rz??0;if(Math.abs(x)<.01&&Math.abs(g)<.01&&Math.abs(m)<.01)this.collider(o-t*.5,o+t*.5,s-n*.5,s+n*.5,a-r*.5,a+r*.5);else{const f=t*.5,_=n*.5,v=r*.5,b=[[-f,-_,-v],[f,-_,-v],[-f,_,-v],[f,_,-v],[-f,-_,v],[f,-_,v],[-f,_,v],[f,_,v]];let P=1/0,E=-1/0,A=1/0,T=-1/0,S=1/0,M=-1/0;const I=new ot;for(const[O,k,U]of b)I.set(O,k,U).applyMatrix4(Qn),I.x<P&&(P=I.x),I.x>E&&(E=I.x),I.y<A&&(A=I.y),I.y>T&&(T=I.y),I.z<S&&(S=I.z),I.z>M&&(M=I.z);this.collider(P,E,A,T,S,M)}}}cyl(e,t,n,r,o,s,a,l,c,u={}){const d=new We(t,n,r,o);Pi.set(u.rx??0,u.ry??0,u.rz??0,"YXZ"),Ci.setFromEuler(Pi),Li.set(s,a,l),Qn.compose(Li,Ci,Ko),this.pushGeo(e,d,c,Qn,u.castShadow??e==="ext",u.receiveShadow??!0)}gablePrism(e,t,n,r,o,s,a,l,c={}){const u=jp(t,n,r,c.uvScale??.45);Pi.set(0,c.ry??0,0,"YXZ"),Ci.setFromEuler(Pi),Li.set(o,s,a),Qn.compose(Li,Ci,Ko),this.pushGeo(e,u,l,Qn,c.castShadow??!0,!0)}kawaraSlope(e,t){const n=t.bottomWidth,r=t.topWidth??n,o=t.run,s=t.pitch,a=o/Math.cos(s),l=t.deckThickness??.14,c=t.ribSpacing??.38,u=t.castShadow??!0,d=new Xt,h=new Xt().makeRotationY(t.downslopeYaw),p=new Xt().makeRotationX(s),x=new Xt().makeTranslation(t.ridgeX,t.ridgeY,t.ridgeZ);d.multiplyMatrices(x,h).multiply(p);const g=Kp(r,n,a,l,.55);this.pushGeo(e,g,t.tileMat,d,u,!0);const m=t.eaveMat??t.ribMat,f=n*.5,_=r*.5,v=Math.max(.001,f-_),b=Math.max(2,Math.floor((n-.16)/c)+1),P=(n-.24)/Math.max(1,b-1),E=new Xt,A=new Xt,T=new Xt().makeRotationX(Math.PI*.5);for(let S=0;S<b;S++){const M=-f+.12+S*P;if(t.skipRibPredicate&&t.skipRibPredicate(M,S))continue;const I=Math.abs(M);let O=0;I>_&&(O=Math.min(a-.22,a*((I-_)/v)));const k=a+.04,U=Math.max(.18,k-O),D=new Yt(.115,.072,U);cr(D,.115,.072,U,.5),E.makeTranslation(M,.032,O+U*.5),A.multiplyMatrices(d,E),this.pushGeo(e,D,t.ribMat,A,!1,!0);const w=new We(.068,.068,.065,8);E.makeTranslation(M,.028,k+.015).multiply(T),A.multiplyMatrices(d,E),this.pushGeo(e,w,m,A,!1,!0)}if(t.rafters!==!1&&t.rafterMat){const M=Math.max(3,Math.floor((n-.24)/.62)+1),I=(n-.3)/Math.max(1,M-1);for(let U=0;U<M;U++){const D=-f+.15+U*I,w=Math.abs(D);let y=Math.max(0,a-1.35);w>_&&(y=Math.max(y,a*((w-_)/v)));const F=Math.max(.24,a-.06-y),q=new Yt(.075,.085,F);cr(q,.075,.085,F,.5),E.makeTranslation(D,-l-.042,y+F*.5),A.multiplyMatrices(d,E),this.pushGeo(e,q,t.rafterMat,A,!1,!0)}const O=t.fasciaMat??t.rafterMat,k=new Yt(n+.04,.11,.08);cr(k,n+.04,.11,.08,.45),E.makeTranslation(0,-l-.04,a-.16),A.multiplyMatrices(d,E),this.pushGeo(e,k,O,A,!1,!0)}}kawaraRidge(e,t,n,r,o,s,a,l,c,u={}){const d=u.scale??1,h=u.courses??2,p=new ot(t,n,r),x=new ot(o,s,a),g=new ot().subVectors(x,p),m=g.length();if(m<.05)return;g.normalize();const f=new ot().addVectors(p,x).multiplyScalar(.5),_=new ot(0,1,0),v=new ot().crossVectors(_,g);v.lengthSq()<1e-4?v.set(1,0,0):v.normalize();const b=new ot().crossVectors(g,v).normalize(),P=new Xt().makeBasis(v,b,g),E=new Xt().makeTranslation(f.x,f.y,f.z).multiply(P),A=new Xt,T=new Xt;for(let k=0;k<h;k++){const U=(.32-k*.055)*d,D=.095*d,w=(.04+k*.088)*d,y=new Yt(U,D,m+.08*d);cr(y,U,D,m,.6),A.makeTranslation(0,w,0),T.multiplyMatrices(E,A),this.pushGeo(e,y,l,T,!0,!0)}const S=(.05+h*.088+.045)*d,M=new We(.115*d,.125*d,m+.12*d,8),I=new Xt().makeRotationX(Math.PI*.5);A.makeTranslation(0,S,0).multiply(I),T.multiplyMatrices(E,A),this.pushGeo(e,M,l,T,!0,!0);const O=k=>{const U=new Xt().multiplyMatrices(E,new Xt().makeTranslation(0,(.08+h*.088)*d,k)),D=new Yt(.38*d,.44*d,.14*d);this.pushGeo(e,D,c,U,!0,!0);const w=new Yt(.46*d,.14*d,.17*d);A.makeTranslation(0,.18*d,0),T.multiplyMatrices(U,A),this.pushGeo(e,w,c,T,!0,!0);for(const y of[-1,1]){const F=new Yt(.11*d,.24*d,.12*d);A.makeTranslation(y*.18*d,.3*d,0).multiply(new Xt().makeRotationZ(-y*.32)),T.multiplyMatrices(U,A),this.pushGeo(e,F,c,T,!0,!0)}};u.oniStart&&O(-m*.5-.05*d),u.oniEnd&&O(m*.5+.05*d)}stairRun(e,t){const n=t.x1-t.x0,r=t.z1-t.z0,o=Math.abs(n)>=Math.abs(r),s=Math.abs(o?n:r),a=(o?n:r)>=0?1:-1,l=t.y1-t.y0,c=Math.max(4,t.steps),u=t.width*.5,d=s/c,h=l/c,p=t.tiltZ??0;for(let b=0;b<c;b++){const P=(b+.5)/c,E=t.y0+(b+1)*h-.025,A=o?t.x0+n*P:t.x0,T=o?t.z0:t.z0+r*P,S=o?d+.04:t.width,M=o?t.width:d+.04;if(this.box(e,S,.052,M,A,E,T,t.treadMat,{rz:p,castShadow:!1,uvScale:.65}),t.closedRisers){const I=h,O=b/c,k=o?t.x0+n*O:t.x0,U=o?t.z0:t.z0+r*O,D=o?.04:t.width,w=o?t.width:.04;this.box(e,D,I,w,k,t.y0+(b+.5)*h,U,t.stringerMat,{rz:p,castShadow:!1,uvScale:.65})}if(t.boxChestMat){const I=Math.max(.15,(b+1)*h-.05),O=o?d:t.width-.06,k=o?t.width-.06:d;this.box(e,O,I,k,A,t.y0+I*.5,T,t.boxChestMat,{castShadow:!1,uvScale:0})}}const x=Math.atan2(l,s),g=Math.hypot(s,l),m=(t.x0+t.x1)*.5,f=(t.z0+t.z1)*.5,_=(t.y0+t.y1)*.5,v=t.railMat??t.stringerMat;for(const b of[-1,1]){const P=o?0:b*(u+.04),E=o?b*(u+.04):0;if(o?this.box(e,g+.14,.22,.07,m,_-.04,f+E,t.stringerMat,{rz:a*x,castShadow:!1}):this.box(e,.07,.22,g+.14,m+P,_-.04,f,t.stringerMat,{rx:-a*x,castShadow:!1}),b===-1?t.railLeft:t.railRight){for(const S of[.02,.5,.98]){const M=t.x0+n*S+P,I=t.z0+r*S+E,O=t.y0+l*S,k=S===.5?.055:.085;this.box(e,k,.96,k,M,O+.46,I,v,{castShadow:!1})}o?this.box(e,g+.16,.075,.08,m,_+.9,f+E,v,{rz:a*x,castShadow:!1}):this.box(e,.08,.075,g+.16,m+P,_+.9,f,v,{rx:-a*x,castShadow:!1})}if(b===-1?t.guardLeft??!0:t.guardRight??!0){const S=t.y0+.48,M=t.y1+.85,I=b*(u+.07);o?this.collider(Math.min(t.x0,t.x1)+.08,Math.max(t.x0,t.x1)-.08,S,M,t.z0+I-.04,t.z0+I+.04):this.collider(t.x0+I-.04,t.x0+I+.04,S,M,Math.min(t.z0,t.z1)+.08,Math.max(t.z0,t.z1)-.08)}}if(o){const b=Math.min(t.x0,t.x1),P=Math.max(t.x0,t.x1);this.ramp(b,P,t.z0-u+.04,t.z0+u-.04,t.y0,t.y1,"x",a),this.floor(t.x0-a*.25,t.x0+a*.05,t.z0-u,t.z0+u,t.y0),this.floor(t.x1-a*.05,t.x1+a*.25,t.z0-u,t.z0+u,t.y1)}else{const b=Math.min(t.z0,t.z1),P=Math.max(t.z0,t.z1);this.ramp(t.x0-u+.04,t.x0+u-.04,b,P,t.y0,t.y1,"z",a),this.floor(t.x0-u,t.x0+u,t.z0-a*.25,t.z0+a*.05,t.y0),this.floor(t.x0-u,t.x0+u,t.z1-a*.05,t.z1+a*.25,t.y1)}}stoneSteps(e,t,n,r,o,s,a,l,c){const u=r>=n?1:-1,d=Math.abs(r-n),h=s-o,p=d/l,x=h/l;for(let f=0;f<l;f++){const _=(f+1)*x,v=n+u*(f+.5)*p;this.box(e,a,_+.35,p+.04,t,o+_*.5-.175,v,c,{castShadow:!0,receiveShadow:!0,uvScale:.55})}const g=Math.min(n,r),m=Math.max(n,r);this.ramp(t-a*.5,t+a*.5,g,m,o,s,"z",u),this.floor(t-a*.5,t+a*.5,r-u*.05,r+u*.35,s)}kouranRailing(e,t,n,r,o,s,a,l,c=.56){const u=r-t,d=o-n,h=Math.hypot(u,d);if(h<.05)return;const p=(t+r)*.5,x=(n+o)*.5,g=Math.abs(u)>=Math.abs(d),m=Math.atan2(-d,u);this.box(e,h+.08,.085,.115,p,s+a-.04,x,l,{ry:m}),this.box(e,h,.065,.075,p,s+a*.52,x,l,{ry:m}),this.box(e,h,.11,.095,p,s+.055,x,l,{ry:m});const f=Math.max(2,Math.round(h/c)+1);for(let v=0;v<f;v++){const b=v/(f-1),P=t+u*b,E=n+d*b,A=v===0||v===f-1,T=A?.105:.058;this.box(e,T,a+(A?.04:0),T,P,s+a*.5,E,l,{ry:m})}const _=.06;g?this.collider(Math.min(t,r)-_,Math.max(t,r)+_,s,s+a,x-_,x+_):this.collider(p-_,p+_,s,s+a,Math.min(n,o)-_,Math.max(n,o)+_)}build(e){const t=new fe;t.name=`House_${e.id}_${e.name}`,t.position.set(this.site.x,this.site.y,this.site.z),t.rotation.y=this.site.yaw;const n=new fe;n.name=`${e.id}_Exterior`;const r=new fe;r.name=`${e.id}_Interior`;for(const E of this.buckets.values()){if(E.geometries.length===0)continue;const A=E.geometries.length===1?E.geometries[0]:qp(E.geometries,!1);if(!A)continue;if(E.geometries.length>1)for(const S of E.geometries)S.dispose();const T=new It(A,E.material);T.castShadow=E.layer==="ext"&&E.castShadow,T.receiveShadow=E.receiveShadow,E.layer==="ext"?n.add(T):r.add(T)}t.add(n,r);const o=new In,s=Math.cos(this.site.yaw),a=Math.sin(this.site.yaw),l=isFinite(this.minX)?this.minX:-this.site.radiusX,c=isFinite(this.maxX)?this.maxX:this.site.radiusX,u=isFinite(this.minY)?this.minY:-1,d=isFinite(this.maxY)?this.maxY:10,h=isFinite(this.minZ)?this.minZ:-this.site.radiusZ,p=isFinite(this.maxZ)?this.maxZ:this.site.radiusZ,x=new ot;for(const E of[l,c])for(const A of[u,d])for(const T of[h,p])x.set(this.site.x+E*s+T*a,this.site.y+A,this.site.z-E*a+T*s),o.expandByPoint(x);const[g,m,f]=e.entryLocal,_=this.site.x+g*s+f*a,v=this.site.z-g*a+f*s,b=this.site.y+m,P=this.site.yaw+(e.entryLookLocalYaw??0);return{id:e.id,name:e.name,subtitle:e.subtitle,category:e.category,builtYear:e.builtYear,abandonedYear:e.abandonedYear,stories:e.stories,floorElevations:e.floorElevations,position:new ot(this.site.x,this.site.y,this.site.z),yaw:this.site.yaw,group:t,interiorGroup:r,colliders:this.colliders,walkSurfaces:this.walkSurfaces,entryPoint:{x:_,y:b,z:v,lookYaw:P},worldBounds:o}}}function Jp(i,e){const t=new Se(i),n=e.getMaterial("ishigaki_cut",{roughness:.94,bumpScale:.07}),r=e.getMaterial("dressed_stone",{roughness:.92,bumpScale:.06}),o=e.getMaterial("charred_cedar",{roughness:.91,bumpScale:.05}),s=e.getMaterial("white_plaster",{roughness:.93,bumpScale:.04,tint:16052198}),a=e.getMaterial("washi_plaster",{roughness:.92,bumpScale:.03}),l=e.getMaterial("dark_hardwood",{roughness:.86,bumpScale:.04}),c=e.getMaterial("warm_wood_plank",{roughness:.85,bumpScale:.04}),u=e.getMaterial("light_wood_grain",{roughness:.84,bumpScale:.03}),d=e.getMaterial("cobblestone",{roughness:.93,bumpScale:.06}),h=e.getMaterial("tatami_bordered",{roughness:.92,bumpScale:.04}),p=e.getMaterial("carved_wood_lattice",{roughness:.86,bumpScale:.05}),x=e.getMaterial("cedar_louvers",{roughness:.88,bumpScale:.05}),g=e.getMaterial("shoji_sliding_door",{roughness:.88,bumpScale:.02,opacity:.92,transparent:!0}),m=e.getMaterial("linen_fusuma",{roughness:.9,bumpScale:.02}),f=e.getMaterial("frosted_grid_window",{roughness:.35,metalness:.08,opacity:.45,transparent:!0}),_=e.getMaterial("antique_tansu",{roughness:.78,bumpScale:.04}),v=e.getMaterial("retro_kitchen_unit",{roughness:.75,bumpScale:.03}),b=e.getMaterial("kitchen_cabinet",{roughness:.8,bumpScale:.03}),P=e.getMaterial("red_zabuton",{roughness:.92,bumpScale:.03}),E=e.getMaterial("shrine_facade",{roughness:.82,bumpScale:.04}),A=e.getMaterial("woven_rope_mat",{roughness:.95,bumpScale:.06}),T=e.getMaterial("shop_produce_crates",{roughness:.9,bumpScale:.05}),S=e.getMaterial("black_volcanic_gravel",{roughness:.97,bumpScale:.06}),M=e.getMaterial("matte_black_metal",{roughness:.58,metalness:.65}),I=e.getMaterial("deep_moss",{roughness:.96,bumpScale:.08}),O=e.getMaterial("slate_roof_dark",{roughness:.76,metalness:.14,bumpScale:.06,tint:13686494}),k=e.getMaterial("dark_slate",{roughness:.72,metalness:.18,bumpScale:.05,tint:12239564}),U=e.getMaterial("dark_iron_plate",{roughness:.68,metalness:.24,bumpScale:.04,tint:11055806}),D=e.getMaterial("matte_black_metal",{roughness:.62,metalness:.3,tint:9345188}),w=.45,y=3.45,F=6.25;t.box("ext",10,.9,8,0,w-.46,0,n),t.box("ext",3.4,.38,.22,-3.2,.16,-4.05,I),t.box("ext",.24,.42,3.2,-5.06,.18,-1.4,I),t.stoneSteps("ext",1,5.15,3.92,-.35,w,2,4,r),t.stoneSteps("ext",3.55,4.95,3.92,-.35,w,1.35,4,r),t.box("int",2.75,.08,7.6,3.52,w-.04,0,d),t.box("int",3.85,.12,5.6,.3,w+.02,-1,h),t.box("int",3.85,.08,2.1,.3,w-.04,2.82,d),t.box("int",3.3,.1,7.6,-3.22,w-.01,0,c),t.floor(-4.75,4.75,-3.75,3.95,w+.04);const q=y-w,Y=w+q*.5;t.box("ext",5.15,q,.22,-2.32,Y,3.85,o,{solid:!0}),t.box("ext",2.6,1.45,.34,-2.6,w+1.45,4.04,p,{uvScale:0}),t.box("ext",2.78,.14,.44,-2.6,w+2.22,4.06,l),t.box("ext",2.78,.14,.44,-2.6,w+.68,4.06,l),t.box("ext",1.2,q,.22,2.35,Y,3.85,o,{solid:!0}),t.box("ext",.78,q,.22,4.54,Y,3.85,o,{solid:!0}),t.box("ext",1.54,.8,.22,1,w+2.6,3.85,o,{solid:!0}),t.box("ext",1.24,.8,.22,3.55,w+2.6,3.85,o,{solid:!0}),t.box("ext",.82,2.15,.06,.05,w+1.08,3.72,g,{uvScale:0}),t.box("ext",1.35,q,.22,-4.25,Y,-3.85,o,{solid:!0}),t.box("ext",1.45,.95,.22,-2.9,w+.475,-3.85,o,{solid:!0}),t.box("ext",1.45,.75,.22,-2.9,w+2.625,-3.85,o,{solid:!0}),t.box("ext",1.42,1.32,.06,-2.9,w+1.6,-3.85,f,{uvScale:0}),t.box("ext",7.15,q,.22,1.35,Y,-3.85,o,{solid:!0}),t.box("ext",.22,q,2.75,-4.85,Y,-2.52,o,{solid:!0}),t.box("ext",.22,.92,1.65,-4.85,w+.46,-.4,o,{solid:!0}),t.box("ext",.22,.78,1.65,-4.85,w+2.61,-.4,o,{solid:!0}),t.box("ext",.06,1.32,1.62,-4.85,w+1.56,-.4,f,{uvScale:0}),t.box("ext",.22,q,3.55,-4.85,Y,2.15,o,{solid:!0}),t.box("ext",.22,q,7.82,4.85,Y,0,o,{solid:!0}),t.box("int",9.45,q-.1,.06,0,Y,-3.7,a),t.box("int",.06,q-.1,7.45,4.7,Y,0,a);for(const lt of[-4.72,-1.6,2.2,4.72])for(const ht of[-3.72,1.8,3.72])t.box("int",.16,q,.16,lt,Y,ht,l);for(const lt of[-2.4,-.6,1.2,2.8])t.box("int",9.4,.18,.16,0,y-.14,lt,l);t.box("int",.14,q,3.35,-1.6,Y,-2.1,a,{solid:!0}),t.box("int",.14,q,2.65,-1.6,Y,2.45,a,{solid:!0}),t.box("int",.14,.78,1.52,-1.6,w+2.61,.35,a,{solid:!0}),t.box("int",.95,q,.12,-4.35,Y,1.1,a,{solid:!0}),t.box("int",.95,q,.12,-2.08,Y,1.1,a,{solid:!0}),t.box("int",1.42,.78,.12,-3.2,w+2.61,1.1,a,{solid:!0}),t.box("int",3.75,.16,.24,.3,w+.08,1.82,l),t.box("int",1.55,.2,1.55,.2,w+.12,-1.1,l,{solid:!0}),t.box("int",1.18,.18,1.18,.2,w+.14,-1.1,S),t.cyl("int",.22,.25,.22,10,.2,w+.32,-1.1,M),t.cyl("int",.03,.03,2.15,6,.2,w+1.55,-1.1,M),t.box("int",.62,.07,.62,.2,w+.1,-2.25,P,{uvScale:0}),t.box("int",.62,.07,.62,-.95,w+.1,-1.1,P,{uvScale:0}),t.box("int",.62,.07,.62,1.35,w+.1,-1.1,P,{uvScale:0}),t.box("int",1.55,1.45,.56,.8,w+.78,-3.38,_,{solid:!0,uvScale:0}),t.box("int",1.85,.88,.66,-3.25,w+.44,-3.32,v,{solid:!0,uvScale:0}),t.box("int",.58,1.78,1.15,-4.42,w+.89,-1.85,b,{solid:!0,uvScale:0}),t.box("int",.92,.72,.68,-4.22,w+.36,2.95,T,{solid:!0,uvScale:0}),t.box("int",.74,.54,.58,-4.18,w+.98,2.92,T,{ry:.18,uvScale:0}),t.cyl("int",.42,.44,.26,10,-2.75,w+.15,3.05,A),t.stairRun("int",{x0:3.55,z0:1.75,x1:3.55,z1:-2.05,y0:w+.04,y1:y+.04,width:1.18,steps:14,treadMat:l,stringerMat:l,railMat:c,railLeft:!0,railRight:!1,closedRisers:!0,boxChestMat:_,guardLeft:!0,guardRight:!1}),t.box("int",7.48,.16,7.62,-1.07,y-.06,0,c),t.box("int",2.18,.16,1.78,3.72,y-.06,-2.92,c),t.box("int",2.18,.16,1.78,3.72,y-.06,2.92,c),t.box("int",5.3,.04,5.2,-2.05,y+.03,-1.1,h),t.box("int",1.85,.04,3.4,1.62,y+.03,-1.9,h),t.collider(-4.8,2.65,y-.18,y+.02,-3.8,3.8),t.collider(2.65,4.8,y-.18,y+.02,-3.8,-2.08),t.collider(2.65,4.8,y-.18,y+.02,2.08,3.8),t.floor(-4.75,2.65,-3.75,3.75,y+.04),t.floor(2.65,4.75,-3.75,-2,y+.04),t.floor(2.65,4.75,2,3.75,y+.04),t.box("int",.08,.92,4.05,2.65,y+.46,0,l,{solid:!0}),t.box("int",2.1,.92,.08,3.7,y+.46,2.04,l,{solid:!0});const X=F-y,L=y+X*.5;t.box("ext",2.4,X,.22,-3.65,L,3.85,s,{solid:!0}),t.box("ext",1.8,.85,.22,-1.55,y+.42,3.85,s,{solid:!0}),t.box("ext",1.8,.75,.22,-1.55,y+2.42,3.85,s,{solid:!0}),t.box("ext",1.76,1.18,.08,-1.55,y+1.45,3.87,x,{uvScale:0}),t.box("ext",1.5,X,.22,.1,L,3.85,s,{solid:!0}),t.box("ext",1.8,.85,.22,1.75,y+.42,3.85,s,{solid:!0}),t.box("ext",1.8,.75,.22,1.75,y+2.42,3.85,s,{solid:!0}),t.box("ext",1.76,1.18,.08,1.75,y+1.45,3.87,x,{uvScale:0}),t.box("ext",2.25,X,.22,3.78,L,3.85,s,{solid:!0}),t.box("ext",3.4,X,.22,-3.15,L,-3.85,s,{solid:!0}),t.box("ext",2.4,.82,.22,-.25,y+.41,-3.85,s,{solid:!0}),t.box("ext",2.4,.65,.22,-.25,y+2.47,-3.85,s,{solid:!0}),t.box("ext",2.36,1.32,.06,-.25,y+1.48,-3.85,f,{uvScale:0}),t.box("ext",4,X,.22,2.95,L,-3.85,s,{solid:!0}),t.box("ext",.22,X,2.8,4.85,L,-2.45,s,{solid:!0}),t.box("ext",.22,.9,2,4.85,y+.45,-.05,s,{solid:!0}),t.box("ext",.22,.65,2,4.85,y+2.47,-.05,s,{solid:!0}),t.box("ext",.06,1.25,1.96,4.85,y+1.52,-.05,f,{uvScale:0}),t.box("ext",.22,X,2.95,4.85,L,2.42,s,{solid:!0}),t.box("ext",.22,X,2.3,-4.85,L,-2.75,s,{solid:!0}),t.box("ext",.22,.68,1.55,-4.85,y+2.46,-.85,s,{solid:!0}),t.box("ext",.22,X,4,-4.85,L,1.92,s,{solid:!0}),t.box("ext",1.28,.16,5.85,-5.45,y-.04,-.3,c),t.floor(-5.98,-4.75,-3.15,2.55,y+.04);for(const lt of[-2.8,-1.1,.6,2.2])t.box("ext",.14,1.25,.14,-5.32,y-.56,lt,l,{rz:-.78});t.kouranRailing("ext",-6.02,-3.18,-6.02,2.58,y,.94,l,.56),t.kouranRailing("ext",-6.02,-3.18,-4.85,-3.18,y,.94,l,.56),t.kouranRailing("ext",-6.02,2.58,-4.85,2.58,y,.94,l,.56);for(const lt of[-4.86,-2.5,.1,2.6,4.86])t.box("ext",.18,X+.08,.28,lt,L,3.86,l),t.box("ext",.18,X+.08,.28,lt,L,-3.86,l);t.box("ext",9.95,.22,.28,0,y+.04,3.86,l),t.box("ext",9.95,.22,.28,0,F-.08,3.86,l),t.box("int",2.6,X,.12,-3.5,L,1.65,m,{solid:!0,uvScale:0}),t.box("int",1.55,.68,.12,-1.45,y+2.46,1.65,a,{solid:!0}),t.box("int",3.35,X,.12,.98,L,1.65,m,{solid:!0,uvScale:0}),t.box("int",.12,X,2.55,.65,L,-2.5,a,{solid:!0}),t.box("int",.12,.68,1.55,.65,y+2.46,-.45,a,{solid:!0}),t.box("int",.12,X,1.35,.65,L,.98,a,{solid:!0}),t.box("int",9.6,.14,7.6,0,F-.06,0,u),t.collider(-4.8,4.8,F-.14,F+.1,-3.8,3.8),t.box("int",2.2,.18,.85,-3.2,y+.09,-3.35,l,{solid:!0}),t.box("int",.16,X,.92,-2.08,L,-3.35,l),t.box("int",1.55,.36,.95,-2.1,y+.22,-.95,l,{solid:!0}),t.box("int",.58,.07,.58,-2.1,y+.07,-1.78,P,{uvScale:0}),t.box("int",.58,.07,.58,-2.1,y+.07,-.12,P,{uvScale:0}),t.box("int",1.45,1.4,.55,-.45,y+.72,-3.42,_,{solid:!0,uvScale:0}),t.box("int",1.25,1.65,.55,1.62,y+.86,-3.4,E,{solid:!0,uvScale:0}),t.kawaraSlope("ext",{bottomWidth:10.6,topWidth:10.6,run:1.45,pitch:.36,ridgeX:0,ridgeY:y+.14,ridgeZ:3.92,downslopeYaw:0,tileMat:O,ribMat:k,eaveMat:U,rafterMat:l,ribSpacing:.36}),t.kawaraSlope("ext",{bottomWidth:6.4,topWidth:6.4,run:1.55,pitch:.38,ridgeX:-4.85,ridgeY:F+.05,ridgeZ:-.3,downslopeYaw:-Math.PI*.5,tileMat:O,ribMat:k,eaveMat:U,rafterMat:l,ribSpacing:.38});const $=.48,H=2.35*Math.tan($),K=F+H-.15,V=5.05,G=V*Math.tan($),Z=F-.15+G;t.kawaraSlope("ext",{topWidth:7.2,bottomWidth:12.2,run:V,pitch:$,ridgeX:0,ridgeY:Z,ridgeZ:0,downslopeYaw:0,tileMat:O,ribMat:k,eaveMat:U,rafterMat:l,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:7.2,bottomWidth:12.2,run:V,pitch:$,ridgeX:0,ridgeY:Z,ridgeZ:0,downslopeYaw:Math.PI,tileMat:O,ribMat:k,eaveMat:U,rafterMat:l,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:5.2,bottomWidth:10.1,run:2.5,pitch:$,ridgeX:3.6,ridgeY:K+.12,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:O,ribMat:k,eaveMat:U,rafterMat:l,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:5.2,bottomWidth:10.1,run:2.5,pitch:$,ridgeX:-3.6,ridgeY:K+.12,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:O,ribMat:k,eaveMat:U,rafterMat:l,ribSpacing:.38});const B=Z-(K+.02);t.gablePrism("ext",5.2,B,.24,3.55,K+.02,0,s,{ry:Math.PI*.5}),t.gablePrism("ext",5.2,B,.24,-3.55,K+.02,0,s,{ry:Math.PI*.5}),t.box("ext",.14,.52,1.35,3.68,K+.52,0,x,{uvScale:0}),t.box("ext",.14,.52,1.35,-3.68,K+.52,0,x,{uvScale:0}),t.kawaraRidge("ext",-3.68,Z+.04,0,3.68,Z+.04,0,U,D,{scale:1.12,oniStart:!0,oniEnd:!0,courses:3});const J=F-.12;return t.kawaraRidge("ext",-3.6,K+.12,2.55,-6.05,J,5,U,D,{scale:.72,oniEnd:!0,courses:2}),t.kawaraRidge("ext",3.6,K+.12,2.55,6.05,J,5,U,D,{scale:.72,oniEnd:!0,courses:2}),t.kawaraRidge("ext",-3.6,K+.12,-2.55,-6.05,J,-5,U,D,{scale:.72,oniEnd:!0,courses:2}),t.kawaraRidge("ext",3.6,K+.12,-2.55,6.05,J,-5,U,D,{scale:.72,oniEnd:!0,courses:2}),t.build({id:i.id,name:"浜田家（網元の二階建町家）",subtitle:"明治9年築・焼杉と白漆喰真壁・いぶし銀本瓦入母屋・二階建",category:"house",builtYear:1876,abandonedYear:1985,stories:2,floorElevations:[w+.04,y+.04],entryLocal:[1,0,6.2]})}function Qp(i,e){const t=new Se(i),n=e.getMaterial("ishigaki_mossy",{roughness:.95,bumpScale:.08}),r=e.getMaterial("mossy_pavers",{roughness:.93,bumpScale:.06}),o=e.getMaterial("weathered_gray_planks",{roughness:.92,bumpScale:.05}),s=e.getMaterial("aged_timber_planks",{roughness:.91,bumpScale:.05}),a=e.getMaterial("rough_white_stucco",{roughness:.93,bumpScale:.05,tint:15854816}),l=e.getMaterial("charred_cedar",{roughness:.9,bumpScale:.05}),c=e.getMaterial("oak_flooring",{roughness:.84,bumpScale:.04}),u=e.getMaterial("tatami_plain",{roughness:.92,bumpScale:.04}),d=e.getMaterial("checker_linoleum",{roughness:.72,bumpScale:.02}),h=e.getMaterial("river_cobble",{roughness:.94,bumpScale:.06}),p=e.getMaterial("window_frosted_wood",{roughness:.36,opacity:.46,transparent:!0}),x=e.getMaterial("botanical_curtain",{roughness:.9,opacity:.85,transparent:!0}),g=e.getMaterial("door_wood_brown",{roughness:.85,bumpScale:.04}),m=e.getMaterial("retro_kitchen_unit",{roughness:.78,bumpScale:.03}),f=e.getMaterial("vanity_sink",{roughness:.72,bumpScale:.03}),_=e.getMaterial("wooden_dresser",{roughness:.82,bumpScale:.04}),v=e.getMaterial("antique_tansu",{roughness:.78,bumpScale:.04}),b=e.getMaterial("office_counter",{roughness:.84,bumpScale:.03}),P=e.getMaterial("storage_rack",{roughness:.88,bumpScale:.04}),E=e.getMaterial("cardboard_boxes",{roughness:.92,bumpScale:.04}),A=e.getMaterial("woven_rope_mat",{roughness:.95,bumpScale:.06}),T=e.getMaterial("island_map_sign",{roughness:.82,bumpScale:.02}),S=e.getMaterial("driftwood",{roughness:.93,bumpScale:.06}),M=e.getMaterial("ivory_plaster",{roughness:.91,bumpScale:.03}),I=e.getMaterial("glazed_brown_brick",{roughness:.56,metalness:.14,bumpScale:.05,tint:12744534}),O=e.getMaterial("glazed_brown_brick",{roughness:.5,metalness:.18,bumpScale:.05,tint:10771775}),k=e.getMaterial("old_red_brick",{roughness:.62,metalness:.12,bumpScale:.04,tint:9062450}),U=e.getMaterial("dark_iron_plate",{roughness:.58,metalness:.28,tint:7027241}),D=.4,w=3.3,y=6.2,F=8.95;t.box("ext",7.5,1.1,7.9,0,D-.56,0,n),t.stoneSteps("ext",0,5,3.85,-.35,D,1.9,4,r);const q=w-D,Y=D+q*.5;t.box("int",7,.08,7.4,0,D-.04,0,h),t.floor(-3.45,3.45,-3.65,3.85,D+.04),t.box("ext",2.8,q,.22,-2.25,Y,3.75,o,{solid:!0}),t.box("ext",2.8,q,.22,2.25,Y,3.75,o,{solid:!0}),t.box("ext",1.74,.72,.22,0,D+2.54,3.75,o,{solid:!0}),t.box("ext",.9,2.12,.06,-1.18,D+1.06,3.6,g,{uvScale:0}),t.box("ext",2.6,q,.22,-2.35,Y,-3.75,o,{solid:!0}),t.box("ext",2.1,1.05,.22,0,D+.52,-3.75,o,{solid:!0}),t.box("ext",2.1,.65,.22,0,D+2.57,-3.75,o,{solid:!0}),t.box("ext",2.06,1.2,.06,0,D+1.65,-3.75,p,{uvScale:0}),t.box("ext",2.6,q,.22,2.35,Y,-3.75,o,{solid:!0}),t.box("ext",.22,q,7.62,-3.55,Y,0,o,{solid:!0}),t.box("ext",.22,q,7.62,3.55,Y,0,o,{solid:!0});for(const B of[-3.58,3.58])for(const J of[-3.76,-1.2,1.2,3.76])t.box("ext",.18,q,.18,B,Y,J,l);t.box("int",.65,1.85,2.2,-3.08,D+.92,-1.2,P,{solid:!0,uvScale:0}),t.box("int",1.35,.85,.72,-2.4,D+.42,1.85,E,{solid:!0,uvScale:0}),t.cyl("int",.38,.42,.86,10,-1.8,D+.43,-2.85,S),t.cyl("int",.36,.4,.82,10,-.95,D+.41,-3.05,S),t.cyl("int",.48,.5,.28,10,.45,D+.16,-2.85,A),t.stairRun("int",{x0:2.65,z0:1.7,x1:2.65,z1:-2,y0:D+.04,y1:w+.04,width:1.15,steps:13,treadMat:c,stringerMat:l,railMat:l,railLeft:!0,railRight:!1,guardLeft:!0,guardRight:!1});const X=y-w,L=w+X*.5;t.box("int",5.38,.16,7.42,-.82,w-.06,0,c),t.box("int",1.65,.16,1.76,2.68,w-.06,-2.86,c),t.box("int",1.65,.16,1.76,2.68,w-.06,2.86,c),t.box("int",4.6,.04,3.8,-.9,w+.03,1.5,u),t.box("int",4.4,.04,2.4,-1,w+.03,-2.3,d),t.collider(-3.5,1.85,w-.16,w+.02,-3.7,3.7),t.collider(1.85,3.5,w-.16,w+.02,-3.7,-2.05),t.collider(1.85,3.5,w-.16,w+.02,2,3.7),t.floor(-3.45,1.85,-3.65,3.65,w+.04),t.floor(1.85,3.45,-3.65,-1.95,w+.04),t.floor(1.85,3.45,1.95,3.65,w+.04),t.box("int",.08,.92,3.95,1.86,w+.46,-.02,l,{solid:!0}),t.box("int",1.62,.92,.08,2.68,w+.46,1.98,l,{solid:!0}),t.box("ext",1.8,X,.22,-2.65,L,3.75,s,{solid:!0}),t.box("ext",3.4,.85,.22,0,w+.42,3.75,s,{solid:!0}),t.box("ext",3.4,.65,.22,0,w+2.57,3.75,s,{solid:!0}),t.box("ext",3.36,1.4,.06,0,w+1.55,3.75,p,{uvScale:0}),t.box("ext",1.8,X,.22,2.65,L,3.75,s,{solid:!0}),t.box("int",.55,1.45,.05,-1.35,w+1.55,3.58,x,{uvScale:0}),t.box("ext",2.2,X,.22,-2.45,L,-3.75,s,{solid:!0}),t.box("ext",2.6,.92,.22,0,w+.46,-3.75,s,{solid:!0}),t.box("ext",2.6,.68,.22,0,w+2.56,-3.75,s,{solid:!0}),t.box("ext",2.56,1.3,.06,0,w+1.56,-3.75,p,{uvScale:0}),t.box("ext",2.2,X,.22,2.45,L,-3.75,s,{solid:!0}),t.box("ext",.22,X,2.4,-3.55,L,-2.55,s,{solid:!0}),t.box("ext",.22,.9,2.5,-3.55,w+.45,0,s,{solid:!0}),t.box("ext",.22,.68,2.5,-3.55,w+2.56,0,s,{solid:!0}),t.box("ext",.06,1.32,2.46,-3.55,w+1.56,0,p,{uvScale:0}),t.box("ext",.22,X,2.4,-3.55,L,2.55,s,{solid:!0}),t.box("ext",.22,X,7.62,3.55,L,0,s,{solid:!0}),t.box("int",1.85,.88,.62,-.4,w+.44,-3.28,m,{solid:!0,uvScale:0}),t.box("int",.82,.88,.56,1.05,w+.44,-3.3,f,{solid:!0,uvScale:0}),t.box("int",1.35,.4,.85,-.3,w+.22,1.25,l,{solid:!0}),t.box("int",1.25,1.15,.52,-.25,w+.6,3.22,_,{solid:!0,uvScale:0}),t.stairRun("int",{x0:-2.65,z0:-1.85,x1:-2.65,z1:1.85,y0:w+.04,y1:y+.04,width:1.15,steps:13,treadMat:c,stringerMat:l,railMat:l,railLeft:!1,railRight:!0,guardLeft:!1,guardRight:!0});const $=F-y,N=y+$*.5;t.box("int",5.1,.16,6.5,.7,y-.06,0,u),t.box("int",1.45,.16,1.45,-2.58,y-.06,-2.55,c),t.box("int",1.45,.16,1.45,-2.58,y-.06,2.55,c),t.box("ext",8.9,.14,1.15,0,y-.06,3.82,s),t.box("ext",8.9,.14,1.15,0,y-.06,-3.82,s),t.box("ext",1.15,.14,6.55,-3.82,y-.06,0,s),t.box("ext",1.15,.14,6.55,3.82,y-.06,0,s),t.kouranRailing("ext",-4.35,4.35,4.35,4.35,y,.96,l,.58),t.kouranRailing("ext",-4.35,-4.35,4.35,-4.35,y,.96,l,.58),t.kouranRailing("ext",-4.35,-4.35,-4.35,4.35,y,.96,l,.58),t.kouranRailing("ext",4.35,-4.35,4.35,4.35,y,.96,l,.58);for(const B of[-4.35,-1.5,1.5,4.35])t.box("ext",.14,1.08,.14,B,y+.54,4.35,l),t.box("ext",.14,1.08,.14,B,y+.54,-4.35,l);t.collider(-1.85,3.4,y-.16,y+.02,-3.4,3.4),t.collider(-3.4,-1.85,y-.16,y+.02,-3.4,-1.92),t.collider(-3.4,-1.85,y-.16,y+.02,1.92,3.4),t.floor(-1.85,4.25,-4.25,4.25,y+.04),t.floor(-4.25,-1.85,-4.25,-1.85,y+.04),t.floor(-4.25,-1.85,1.85,4.25,y+.04),t.floor(-4.25,-3.28,-1.85,1.85,y+.04),t.box("int",.08,.92,3.72,-1.86,y+.46,0,l,{solid:!0}),t.box("int",1.4,.92,.08,-2.56,y+.46,-1.9,l,{solid:!0}),t.box("ext",2.7,$,.2,-1.95,N,3.25,a,{solid:!0}),t.box("ext",1.55,.62,.2,.15,y+2.44,3.25,a,{solid:!0}),t.box("ext",2.35,$,.2,2.08,N,3.25,a,{solid:!0}),t.box("ext",1.25,$,.2,-2.62,N,-3.25,a,{solid:!0}),t.box("ext",4,.78,.2,0,y+.39,-3.25,a,{solid:!0}),t.box("ext",4,.55,.2,0,y+2.47,-3.25,a,{solid:!0}),t.box("ext",3.96,1.42,.06,0,y+1.48,-3.25,p,{uvScale:0}),t.box("ext",1.25,$,.2,2.62,N,-3.25,a,{solid:!0});for(const B of[-3.25,3.25])t.box("ext",.2,$,1.35,B,N,-2.58,a,{solid:!0}),t.box("ext",.2,.78,3.85,B,y+.39,0,a,{solid:!0}),t.box("ext",.2,.55,3.85,B,y+2.47,0,a,{solid:!0}),t.box("ext",.06,1.42,3.8,B,y+1.48,0,p,{uvScale:0}),t.box("ext",.2,$,1.35,B,N,2.58,a,{solid:!0});for(const B of[-2.2,0,2.2])t.box("int",6.4,.18,.16,0,F-.12,B,l);t.box("int",6.3,.1,6.3,0,F+.04,0,M),t.collider(-3.2,3.2,F-.05,F+.15,-3.2,3.2),t.box("int",1.65,.86,.68,1.65,y+.43,-1.85,b,{solid:!0,uvScale:0}),t.box("int",1.35,1.32,.54,2.52,y+.66,1.45,v,{solid:!0,uvScale:0}),t.box("int",1.45,.95,.05,2.15,y+1.65,3.1,T,{uvScale:0}),t.kawaraSlope("ext",{bottomWidth:8.2,run:1.25,pitch:.36,ridgeX:0,ridgeY:w+.12,ridgeZ:3.8,downslopeYaw:0,tileMat:I,ribMat:O,eaveMat:k,rafterMat:l,ribSpacing:.36}),t.kawaraSlope("ext",{topWidth:7.4,bottomWidth:9.2,run:1.15,pitch:.4,ridgeX:0,ridgeY:y-.1,ridgeZ:3.7,downslopeYaw:0,tileMat:I,ribMat:O,eaveMat:k,rafterMat:l,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:7.4,bottomWidth:9.2,run:1.15,pitch:.4,ridgeX:0,ridgeY:y-.1,ridgeZ:-3.7,downslopeYaw:Math.PI,tileMat:I,ribMat:O,eaveMat:k,rafterMat:l,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:7.6,bottomWidth:9.4,run:1.15,pitch:.4,ridgeX:3.55,ridgeY:y-.1,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:I,ribMat:O,eaveMat:k,rafterMat:l,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:7.6,bottomWidth:9.4,run:1.15,pitch:.4,ridgeX:-3.55,ridgeY:y-.1,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:I,ribMat:O,eaveMat:k,rafterMat:l,ribSpacing:.38});const H=.56,K=4.65,V=K*Math.tan(H),G=F-.25+V;t.kawaraSlope("ext",{bottomWidth:9.6,run:K,pitch:H,ridgeX:0,ridgeY:G,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:I,ribMat:O,eaveMat:k,rafterMat:l,ribSpacing:.36}),t.kawaraSlope("ext",{bottomWidth:9.6,run:K,pitch:H,ridgeX:0,ridgeY:G,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:I,ribMat:O,eaveMat:k,rafterMat:l,ribSpacing:.36}),t.gablePrism("ext",6.6,G-F+.18,.22,0,F-.08,3.25,a),t.gablePrism("ext",6.6,G-F+.18,.22,0,F-.08,-3.25,a);const Z=K/Math.cos(H);for(const B of[-4.72,4.72])t.box("ext",Z,.24,.14,-K*.5,G-V*.5,B,l,{rz:H}),t.box("ext",Z,.24,.14,K*.5,G-V*.5,B,l,{rz:-H});return t.kawaraRidge("ext",0,G+.06,-4.78,0,G+.06,4.78,k,U,{scale:1.15,oniStart:!0,oniEnd:!0,courses:3}),t.build({id:i.id,name:"磯部家（港見張りの三階櫓家）",subtitle:"明治14年築・石州赤茶釉薬瓦切妻・四周高欄見張り縁・三階建",category:"house",builtYear:1881,abandonedYear:1985,stories:3,floorElevations:[D+.04,w+.04,y+.04],entryLocal:[0,0,6.1]})}function t2(i,e){const t=new Se(i),n=e.getMaterial("ishigaki_rubble",{roughness:.95,bumpScale:.08}),r=e.getMaterial("cracked_concrete",{roughness:.93,bumpScale:.05}),o=e.getMaterial("aged_timber_planks",{roughness:.92,bumpScale:.05}),s=e.getMaterial("horizontal_wood_siding",{roughness:.9,bumpScale:.05}),a=e.getMaterial("galvanized_sheet",{roughness:.58,metalness:.52,bumpScale:.03}),l=e.getMaterial("charred_cedar",{roughness:.92,bumpScale:.05}),c=e.getMaterial("washi_plaster",{roughness:.91,bumpScale:.03}),u=e.getMaterial("woodchips",{roughness:.95,bumpScale:.06}),d=e.getMaterial("herringbone_wood",{roughness:.8,bumpScale:.03}),h=e.getMaterial("tatami_bordered",{roughness:.92,bumpScale:.04}),p=e.getMaterial("warm_wood_plank",{roughness:.86,bumpScale:.04}),x=e.getMaterial("driftwood",{roughness:.94,bumpScale:.06}),g=e.getMaterial("stacked_logs",{roughness:.93,bumpScale:.07}),m=e.getMaterial("pegboard",{roughness:.86,bumpScale:.04}),f=e.getMaterial("frosted_grid_window",{roughness:.38,opacity:.45,transparent:!0}),_=e.getMaterial("door_light_wood",{roughness:.86,bumpScale:.04}),v=e.getMaterial("kitchen_cabinet",{roughness:.82,bumpScale:.03}),b=e.getMaterial("vanity_sink",{roughness:.72,bumpScale:.03}),P=e.getMaterial("filled_bookshelf",{roughness:.84,bumpScale:.04}),E=e.getMaterial("chalkboard",{roughness:.88,bumpScale:.02}),A=e.getMaterial("floral_futon",{roughness:.93,bumpScale:.03}),T=e.getMaterial("wardrobe_wood",{roughness:.82,bumpScale:.04}),S=e.getMaterial("deep_moss",{roughness:.96,bumpScale:.08}),M=e.getMaterial("slate_roof_dark",{roughness:.8,metalness:.12,bumpScale:.06,tint:12765133}),I=e.getMaterial("dark_slate",{roughness:.76,metalness:.16,bumpScale:.05}),O=e.getMaterial("dark_iron_plate",{roughness:.72,metalness:.22,bumpScale:.04}),k=e.getMaterial("matte_black_metal",{roughness:.65,metalness:.28}),U=.4,D=3.45,w=5.6,y=6.2;t.box("ext",5.7,1,9.1,-2.9,U-.52,0,n),t.box("ext",5.7,1,6.7,2.7,U-.52,1,n),t.stoneSteps("ext",-2.9,5.55,4.42,-.35,U,2.6,4,r),t.stoneSteps("ext",2.9,5.25,4.22,-.35,U,1.5,4,r),t.box("int",5.4,.08,8.8,-2.9,U-.04,0,u),t.box("int",3.4,.05,2.8,-3.2,U+.01,-2.5,S),t.box("int",5.3,.1,6.3,2.65,U-.01,1,d),t.floor(-5.45,-.15,-4.25,4.45,U+.04),t.floor(-.25,5.25,-2.1,4.25,U+.04);const F=w-U,q=U+F*.5;t.box("ext",1.55,F,.22,-4.85,q,4.4,o,{solid:!0}),t.box("ext",1.55,F,.22,-.95,q,4.4,o,{solid:!0}),t.box("ext",2.45,2.35,.22,-2.9,U+4.02,4.4,o,{solid:!0}),t.box("ext",.08,2.75,1.18,-4.18,U+1.38,4.95,_,{ry:-.35,uvScale:0}),t.box("ext",.08,2.75,1.18,-1.62,U+1.38,4.95,_,{ry:.35,uvScale:0}),t.box("ext",.22,F,8.95,-5.6,q,0,o,{solid:!0}),t.box("ext",.06,2.2,3.4,-5.73,U+1.4,-1.5,a),t.box("ext",.06,1.8,2.6,-5.73,U+3.2,2.1,a),t.box("ext",5.5,F-.55,.22,-2.9,q-.28,-4.4,o,{solid:!0}),t.box("ext",2.4,1.35,.06,-3.2,U+1.8,-4.53,S),t.box("ext",.22,F,2.3,-.2,q,-3.3,o,{solid:!0});for(const J of[3.2,1.4,-.4])t.box("int",5.3,.22,.2,-2.9,w-.16,J,l);t.box("int",3.4,.16,.16,-3.4,w-1.15,-2.2,l,{rz:.58,ry:.15}),t.box("int",3.2,.14,.14,-2.3,w-1.45,-2.9,l,{rz:-.64,ry:-.12}),t.box("int",2.8,.14,.14,-3.8,U+1.15,-3.4,l,{rz:.42,ry:.25}),t.box("int",1.35,.65,.18,-3.4,U+.32,1,x),t.box("int",1.35,.65,.18,-3.4,U+.32,-2.2,x),t.box("int",.24,.22,4.9,-3.4,U+.72,-.6,p,{solid:!0}),t.box("int",.2,1.35,.22,-3.4,U+1.25,1.92,p,{rx:.42});for(let J=0;J<7;J++){const lt=-2.4+J*.62,z=.78*(.55+Math.sin((J+.5)/7*Math.PI)*.55);t.box("int",z,.1,.09,-3.4-z*.5,U+.85,lt,x,{rz:-.25}),t.box("int",z,.1,.09,-3.4+z*.5,U+.85,lt,x,{rz:.25}),t.box("int",.1,.72,.09,-3.4-z-.14,U+1.22,lt,x,{rz:.22}),t.box("int",.1,.72,.09,-3.4+z+.14,U+1.22,lt,x,{rz:-.22})}t.box("int",.78,.86,2.8,-5.05,U+.43,1.4,p,{solid:!0}),t.box("int",.06,1.35,2.4,-5.45,U+1.65,1.4,m,{uvScale:0}),t.box("int",.95,.88,2.2,-4.95,U+.44,-2.5,g,{solid:!0,uvScale:0}),t.box("int",.85,.22,.75,-2.1,U+.12,-3.3,M,{ry:.4,rx:.18}),t.box("int",.65,.18,.55,-2.9,U+.1,-3.7,I,{ry:-.5,rz:.22});const Y=D-U,X=U+Y*.5;t.box("int",.18,Y,3.4,-.2,X,-.5,o,{solid:!0}),t.box("int",.18,.75,1.55,-.2,U+2.65,1.95,o,{solid:!0}),t.box("int",.18,Y,1.65,-.2,X,3.55,o,{solid:!0}),t.stairRun("int",{x0:-.88,z0:2.35,x1:-.88,z1:-1.35,y0:U+.04,y1:D+.04,width:1.12,steps:14,treadMat:p,stringerMat:l,railMat:l,railLeft:!0,railRight:!1,guardLeft:!0,guardRight:!1}),t.box("int",1.48,.16,1.35,-.88,D-.06,-1.92,p),t.floor(-1.58,.05,-2.52,-1.25,D+.04),t.box("int",.08,.94,1.35,-1.58,D+.47,-1.92,l,{solid:!0}),t.box("int",1.45,.94,.08,-.88,D+.47,-2.55,l,{solid:!0}),t.box("ext",2.45,Y,.22,1,X,4.2,s,{solid:!0}),t.box("ext",1.45,.78,.22,2.9,U+2.66,4.2,s,{solid:!0}),t.box("ext",1.85,Y,.22,4.5,X,4.2,s,{solid:!0}),t.box("ext",.22,Y,2.2,5.4,X,-1.1,s,{solid:!0}),t.box("ext",.22,.9,2.2,5.4,U+.45,1.1,s,{solid:!0}),t.box("ext",.22,.75,2.2,5.4,U+2.67,1.1,s,{solid:!0}),t.box("ext",.06,1.38,2.16,5.4,U+1.58,1.1,f,{uvScale:0}),t.box("ext",.22,Y,2.1,5.4,X,3.25,s,{solid:!0}),t.box("ext",5.65,Y,.22,2.6,X,-2.2,s,{solid:!0}),t.box("int",1.55,1.82,.48,2.4,U+.91,-1.82,P,{solid:!0,uvScale:0}),t.box("int",1.45,.42,.92,2.5,U+.24,.55,l,{solid:!0}),t.box("int",1.45,.88,.62,4.5,U+.44,2.9,v,{solid:!0,uvScale:0}),t.box("int",.85,.88,.58,.75,U+.44,3.72,b,{solid:!0,uvScale:0});const L=y-D,$=D+L*.5;t.box("int",5.55,.16,6.35,2.6,D-.06,1,p),t.box("int",5.2,.04,3,2.6,D+.03,2.55,h),t.collider(-.2,5.4,D-.16,D+.02,-2.2,4.2),t.floor(-.2,5.25,-2.05,4.05,D+.04),t.box("int",.12,.94,2.25,-.2,D+.47,.12,l,{solid:!0}),t.box("ext",.22,L,3.05,-.2,$,2.75,c,{solid:!0}),t.box("ext",5.65,L,.22,2.6,$,-2.2,c,{solid:!0}),t.box("ext",1.6,L,.22,.6,$,4.2,c,{solid:!0}),t.box("ext",2.4,.85,.22,2.6,D+.42,4.2,c,{solid:!0}),t.box("ext",2.4,.62,.22,2.6,D+2.44,4.2,c,{solid:!0}),t.box("ext",2.36,1.28,.06,2.6,D+1.48,4.2,f,{uvScale:0}),t.box("ext",1.6,L,.22,4.6,$,4.2,c,{solid:!0}),t.box("ext",.22,L,6.45,5.4,$,1,c,{solid:!0}),t.box("int",5.5,.12,6.3,2.6,y-.06,1,p),t.collider(-.2,5.4,y-.12,y+.1,-2.2,4.2),t.box("int",1.95,.82,.95,3.6,D+.41,-1.25,p,{solid:!0}),t.box("int",2.2,1.25,.06,3.4,D+1.68,-2.04,E,{uvScale:0}),t.box("int",1.45,.14,1.95,3.7,D+.1,2.65,A,{uvScale:0}),t.box("int",1.15,1.78,.56,.95,D+.89,3.72,T,{solid:!0,uvScale:0});const N=.5,H=3.55,K=w-.12+H*Math.tan(N);t.kawaraSlope("ext",{bottomWidth:5.6,run:H,pitch:N,ridgeX:-2.9,ridgeY:K,ridgeZ:2.35,downslopeYaw:-Math.PI*.5,tileMat:M,ribMat:I,eaveMat:O,rafterMat:l,ribSpacing:.38}),t.kawaraSlope("ext",{bottomWidth:5.6,run:H,pitch:N,ridgeX:-2.9,ridgeY:K,ridgeZ:2.35,downslopeYaw:Math.PI*.5,tileMat:M,ribMat:I,eaveMat:O,rafterMat:l,ribSpacing:.38}),t.gablePrism("ext",5.6,K-w+.14,.22,-2.9,w-.06,4.4,o),t.kawaraSlope("ext",{bottomWidth:4.5,run:1.55,pitch:.68,ridgeX:-4.65,ridgeY:w+.72,ridgeZ:-2.65,downslopeYaw:-Math.PI*.5,tileMat:M,ribMat:I,eaveMat:O,rafterMat:l,ribSpacing:.42,skipRibPredicate:(J,lt)=>lt%3===1}),t.kawaraRidge("ext",-2.9,K+.04,-.35,-2.9,K+.04,5.05,O,k,{scale:1.02,oniStart:!1,oniEnd:!0,courses:2});const V=.56,G=.34,Z=2.15,B=y+.45+Z*Math.tan(V);return t.kawaraSlope("ext",{bottomWidth:7.4,run:Z,pitch:V,ridgeX:2.6,ridgeY:B,ridgeZ:1,downslopeYaw:Math.PI*.5,tileMat:M,ribMat:I,eaveMat:O,rafterMat:l,ribSpacing:.36}),t.kawaraSlope("ext",{bottomWidth:7.4,run:Z,pitch:V,ridgeX:2.6,ridgeY:B,ridgeZ:1,downslopeYaw:-Math.PI*.5,tileMat:M,ribMat:I,eaveMat:O,rafterMat:l,ribSpacing:.36}),t.kawaraSlope("ext",{bottomWidth:7.8,run:1.75,pitch:G,ridgeX:4.65,ridgeY:y+.52,ridgeZ:1,downslopeYaw:Math.PI*.5,tileMat:M,ribMat:I,eaveMat:O,rafterMat:l,ribSpacing:.36}),t.kawaraSlope("ext",{bottomWidth:6.4,run:1.15,pitch:G,ridgeX:2.6,ridgeY:D+.14,ridgeZ:4.25,downslopeYaw:0,tileMat:M,ribMat:I,eaveMat:O,rafterMat:l,ribSpacing:.36}),t.gablePrism("ext",5.6,B-y+.12,.22,2.6,y-.06,4.2,c),t.gablePrism("ext",5.6,B-y+.12,.22,2.6,y-.06,-2.2,c),t.kawaraRidge("ext",2.6,B+.05,-2.65,2.6,B+.05,4.65,O,k,{scale:1.05,oniStart:!0,oniEnd:!0,courses:3}),t.build({id:i.id,name:"高木家（船大工のL字二階工房邸）",subtitle:"明治11年築・吹抜造船工房（北屋根半崩落・和船肋骨）＆いぶし銀錣屋根・二階建",category:"house",builtYear:1878,abandonedYear:1985,stories:2,floorElevations:[U+.04,D+.04],entryLocal:[-2.9,0,6.6]})}function e2(i,e){const t=new Se(i),n=e.getMaterial("ishigaki_rubble",{roughness:.95,bumpScale:.08}),r=e.getMaterial("ishigaki_mossy",{roughness:.96,bumpScale:.08}),o=e.getMaterial("dark_damp_stone",{roughness:.94,bumpScale:.07}),s=e.getMaterial("dressed_stone",{roughness:.91,bumpScale:.06}),a=e.getMaterial("heavy_studded_wood",{roughness:.85,bumpScale:.06}),l=e.getMaterial("washi_plaster",{roughness:.92,bumpScale:.03,tint:16051938}),c=e.getMaterial("charred_cedar",{roughness:.91,bumpScale:.05}),u=e.getMaterial("carved_wood_lattice",{roughness:.86,bumpScale:.05}),d=e.getMaterial("dark_hardwood",{roughness:.86,bumpScale:.04}),h=e.getMaterial("warm_wood_plank",{roughness:.85,bumpScale:.04}),p=e.getMaterial("cobblestone",{roughness:.93,bumpScale:.06}),x=e.getMaterial("blue_mosaic_tile",{roughness:.45,metalness:.06,bumpScale:.03}),g=e.getMaterial("floral_wallpaper_blue",{roughness:.88,bumpScale:.02}),m=e.getMaterial("tatami_green_border",{roughness:.92,bumpScale:.04}),f=e.getMaterial("frosted_grid_window",{roughness:.36,opacity:.46,transparent:!0}),_=e.getMaterial("antique_tansu",{roughness:.78,bumpScale:.04}),v=e.getMaterial("shrine_facade",{roughness:.82,bumpScale:.04}),b=e.getMaterial("full_bookcase",{roughness:.84,bumpScale:.04}),P=e.getMaterial("floral_futon",{roughness:.93,bumpScale:.03}),E=e.getMaterial("black_volcanic_gravel",{roughness:.97,bumpScale:.06}),A=e.getMaterial("matte_black_metal",{roughness:.6,metalness:.6}),T=e.getMaterial("deep_moss",{roughness:.96,bumpScale:.08}),S=e.getMaterial("dark_slate",{roughness:.82,metalness:.14,bumpScale:.06,tint:10134184}),M=e.getMaterial("slate_roof_dark",{roughness:.78,metalness:.18,bumpScale:.05,tint:8686740}),I=e.getMaterial("moss_rock_heavy",{roughness:.94,bumpScale:.08,tint:7308387}),O=e.getMaterial("dark_iron_plate",{roughness:.72,metalness:.22,tint:7765640}),k=e.getMaterial("matte_black_metal",{roughness:.62,metalness:.3}),U=.4,D=3.35,w=6.25,y=8.95;t.box("ext",9.5,1,7.7,0,U-.52,0,r),t.stoneSteps("ext",-.2,4.9,3.72,-.35,U,2,4,s);const F=D-U,q=U+F*.5;t.box("int",8.9,.08,7.1,0,U-.04,0,p),t.floor(-4.35,4.35,-3.45,3.75,U+.04),t.box("ext",3.75,F,.34,-2.8,q,3.65,n,{solid:!0}),t.box("ext",4.15,F,.34,2.6,q,3.65,n,{solid:!0}),t.box("ext",1.56,.72,.34,-.2,U+2.59,3.65,s,{solid:!0}),t.box("ext",.12,2.18,1.35,-1.04,U+1.09,3.05,a,{ry:.38,uvScale:0}),t.box("ext",9.45,F,.34,0,q,-3.65,r,{solid:!0}),t.box("ext",.34,F,7.55,-4.55,q,0,r,{solid:!0}),t.box("ext",.34,F,2.6,4.55,q,-2.4,n,{solid:!0}),t.box("ext",.34,1.05,1.8,4.55,U+.52,-.1,n,{solid:!0}),t.box("ext",.34,.65,1.8,4.55,U+2.62,-.1,n,{solid:!0}),t.box("ext",.06,1.25,1.76,4.55,U+1.68,-.1,f,{uvScale:0}),t.box("ext",.34,F,2.95,4.55,q,2.32,n,{solid:!0}),t.box("int",.28,F,4.2,-1.75,q,-1.5,o,{solid:!0}),t.box("int",.28,.72,1.45,-1.75,U+2.59,1.3,o,{solid:!0}),t.box("int",.28,F,1.65,-1.75,q,2.82,o,{solid:!0}),t.box("int",1.15,.68,.72,-3.55,U+.34,-2.55,s,{solid:!0}),t.box("int",.85,.56,.65,-3.45,U+.96,-2.45,s,{ry:.14}),t.box("int",.78,.82,1.85,-3.82,U+.41,-.25,d,{solid:!0}),t.box("int",1.75,.36,1.75,.25,U+.18,-.85,s,{solid:!0}),t.box("int",1.25,.32,1.25,.25,U+.22,-.85,E),t.cyl("int",.24,.28,.28,10,.25,U+.48,-.85,A),t.cyl("int",.03,.03,2.2,6,.25,U+1.65,-.85,A),t.stairRun("int",{x0:3.55,z0:1.85,x1:3.55,z1:-1.75,y0:U+.04,y1:D+.04,width:1.12,steps:13,treadMat:h,stringerMat:d,railMat:d,railLeft:!0,railRight:!1,guardLeft:!0,guardRight:!1});const Y=w-D,X=D+Y*.5;t.box("int",7.3,.16,7.15,-.78,D-.06,0,h),t.box("int",1.62,.16,1.82,3.62,D-.06,-2.66,h),t.box("int",1.62,.16,1.65,3.62,D-.06,2.75,h),t.box("int",2.9,.04,3.1,-2.9,D+.03,-1.9,x),t.box("int",3.9,.04,3.4,.6,D+.03,-1.75,m),t.collider(-4.4,2.85,D-.16,D+.02,-3.55,3.55),t.collider(2.85,4.4,D-.16,D+.02,-3.55,-1.8),t.collider(2.85,4.4,D-.16,D+.02,2,3.55),t.floor(-4.35,2.85,-3.45,3.45,D+.04),t.floor(2.85,4.35,-3.45,-1.72,D+.04),t.floor(2.85,4.35,1.95,3.45,D+.04),t.box("int",.08,.92,3.72,2.86,D+.46,.1,d,{solid:!0}),t.box("int",1.56,.92,.08,3.62,D+.46,1.98,d,{solid:!0}),t.box("ext",2.4,Y,.22,-3.4,X,3.65,l,{solid:!0}),t.box("ext",3.6,.85,.22,-.4,D+.42,3.65,l,{solid:!0}),t.box("ext",3.6,.65,.22,-.4,D+2.57,3.65,l,{solid:!0}),t.box("ext",3.56,1.4,.06,-.4,D+1.55,3.65,f,{uvScale:0}),t.box("ext",3.25,Y,.22,3.02,X,3.65,l,{solid:!0}),t.box("ext",9.25,Y,.22,0,X,-3.65,l,{solid:!0}),t.box("ext",.22,Y,7.42,4.55,X,0,l,{solid:!0}),t.box("ext",.22,Y,3.3,-4.55,X,-2.05,l,{solid:!0}),t.box("ext",.22,.72,2.45,-4.55,D+.36,.8,l,{solid:!0}),t.box("ext",.22,.62,2.45,-4.55,D+2.59,.8,l,{solid:!0}),t.box("ext",.22,Y,1.72,-4.55,X,2.88,l,{solid:!0}),t.box("ext",.78,.16,2.55,-4.92,D+.66,.8,d),t.box("ext",.78,.16,2.55,-4.92,D+2.3,.8,d),t.box("ext",.06,1.52,2.42,-5.26,D+1.48,.8,f,{uvScale:0}),t.box("ext",.74,1.52,.12,-4.92,D+1.48,-.42,d),t.box("ext",.74,1.52,.12,-4.92,D+1.48,2.02,d),t.box("int",.14,Y,3.25,-1.4,X,-1.92,x,{solid:!0}),t.box("int",1.45,Y,.14,-3.7,X,-.3,x,{solid:!0}),t.box("int",1.6,.72,.14,-2.2,D+2.54,-.3,x,{solid:!0}),t.box("int",1.45,.65,1.05,-3.55,D+.34,-2.85,x,{solid:!0}),t.box("int",3.8,Y-.12,.05,.55,X,-3.48,g),t.box("int",1.45,1.38,.54,.45,D+.72,-3.12,_,{solid:!0,uvScale:0}),t.box("int",1.35,.44,.92,-2.55,D+.24,1.25,d,{solid:!0}),t.stairRun("int",{x0:2.05,z0:-1.75,x1:2.05,z1:1.85,y0:D+.04,y1:w+.04,width:1.12,steps:13,treadMat:h,stringerMat:d,railMat:d,railLeft:!0,railRight:!1,guardLeft:!0,guardRight:!1});const L=y-w,$=w+L*.5;t.box("int",5.85,.16,7.15,-1.55,w-.06,0,m),t.box("int",1.75,.16,7.15,3.6,w-.06,0,h),t.box("int",1.45,.16,1.82,2.05,w-.06,-2.66,h),t.box("int",1.45,.16,1.72,2.05,w-.06,2.7,h),t.collider(-4.45,1.35,w-.16,w+.02,-3.55,3.55),t.collider(2.75,4.45,w-.16,w+.02,-3.55,3.55),t.collider(1.35,2.75,w-.16,w+.02,-3.55,-1.8),t.collider(1.35,2.75,w-.16,w+.02,1.9,3.55),t.floor(-4.35,1.35,-3.45,3.45,w+.04),t.floor(2.75,4.35,-3.45,3.45,w+.04),t.floor(1.35,2.75,-3.45,-1.75,w+.04),t.floor(1.35,2.75,1.85,3.45,w+.04),t.box("int",.08,.92,3.65,1.36,w+.46,.05,d,{solid:!0}),t.box("int",.08,.92,3.65,2.74,w+.46,.05,d,{solid:!0}),t.box("int",1.42,.92,.08,2.05,w+.46,-1.78,d,{solid:!0});for(const Z of[-3.65,3.65])t.box("ext",2.4,L,.22,-3.4,$,Z,c,{solid:!0}),t.box("ext",3.4,.78,.22,-.5,w+.39,Z,c,{solid:!0}),t.box("ext",3.4,.58,.22,-.5,w+2.41,Z,c,{solid:!0}),t.box("ext",3.36,1.34,.08,-.5,w+1.45,Z,u,{uvScale:0}),t.box("ext",3.45,L,.22,2.92,$,Z,c,{solid:!0});for(const Z of[-4.55,4.55])t.box("ext",.22,L,2.3,Z,$,-2.55,c,{solid:!0}),t.box("ext",.22,.78,2.8,Z,w+.39,0,c,{solid:!0}),t.box("ext",.22,.58,2.8,Z,w+2.41,0,c,{solid:!0}),t.box("ext",.08,1.34,2.76,Z,w+1.45,0,u,{uvScale:0}),t.box("ext",.22,L,2.3,Z,$,2.55,c,{solid:!0});t.box("int",8.9,.12,7.1,0,y-.04,0,h),t.collider(-4.45,4.45,y-.12,y+.1,-3.55,3.55);for(const Z of[-2.4,-.4,1.6])t.box("int",.12,.14,7,Z,y-.14,0,d);for(const Z of[-1.8,0,1.8])t.box("int",8.8,.14,.12,0,y-.14,Z,d);t.box("int",1.65,1.75,.62,-3.55,w+.9,-2.85,v,{solid:!0,uvScale:0}),t.box("int",1.55,1.85,.5,-3.85,w+.94,.65,b,{solid:!0,uvScale:0}),t.box("int",1.55,.15,2.05,-1.65,w+.11,.35,P,{uvScale:0}),t.kawaraSlope("ext",{bottomWidth:9.8,run:1.05,pitch:.36,ridgeX:0,ridgeY:D+.08,ridgeZ:3.72,downslopeYaw:0,tileMat:S,ribMat:M,eaveMat:O,rafterMat:d,ribSpacing:.38}),t.kawaraSlope("ext",{bottomWidth:3.2,run:1.05,pitch:.38,ridgeX:-4.55,ridgeY:D+2.46,ridgeZ:.8,downslopeYaw:-Math.PI*.5,tileMat:S,ribMat:M,eaveMat:O,rafterMat:d,ribSpacing:.36});const N=.46,H=4.8,K=4.1,V=y-.15+H*Math.tan(N);t.kawaraSlope("ext",{topWidth:3.2,bottomWidth:11.4,run:H,pitch:N,ridgeX:0,ridgeY:V,ridgeZ:0,downslopeYaw:0,tileMat:S,ribMat:M,eaveMat:O,rafterMat:d,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:3.2,bottomWidth:11.4,run:H,pitch:N,ridgeX:0,ridgeY:V,ridgeZ:0,downslopeYaw:Math.PI,tileMat:I,ribMat:M,eaveMat:O,rafterMat:d,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:.06,bottomWidth:9.6,run:K,pitch:Math.atan2(V-(y-.15),K),ridgeX:1.6,ridgeY:V,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:S,ribMat:M,eaveMat:O,rafterMat:d,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:.06,bottomWidth:9.6,run:K,pitch:Math.atan2(V-(y-.15),K),ridgeX:-1.6,ridgeY:V,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:I,ribMat:M,eaveMat:O,rafterMat:d,ribSpacing:.38}),t.kawaraRidge("ext",-1.65,V+.05,0,1.65,V+.05,0,O,k,{scale:1.15,oniStart:!0,oniEnd:!0,courses:3});const G=y-.12;return t.kawaraRidge("ext",-1.6,V+.02,0,-5.65,G,4.75,O,k,{scale:.78,oniEnd:!0,courses:2}),t.kawaraRidge("ext",1.6,V+.02,0,5.65,G,4.75,O,k,{scale:.78,oniEnd:!0,courses:2}),t.kawaraRidge("ext",-1.6,V+.02,0,-5.65,G,-4.75,O,k,{scale:.78,oniEnd:!0,courses:2}),t.kawaraRidge("ext",1.6,V+.02,0,5.65,G,-4.75,O,k,{scale:.78,oniEnd:!0,courses:2}),t.box("ext",2.8,.26,.65,-2.5,y-.04,-4.4,T),t.build({id:i.id,name:"岩崎家（石工の石壁三階民家）",subtitle:"明治7年築・1F野面積み石壁＆鉄鋲扉・苔むし黒瓦寄棟・青モザイク風呂・三階建",category:"house",builtYear:1874,abandonedYear:1985,stories:3,floorElevations:[U+.04,D+.04,w+.04],entryLocal:[-.2,0,5.9]})}function n2(i,e){const t=new Se(i),n=e.getMaterial("moss_rock_heavy",{roughness:.96,bumpScale:.08}),r=e.getMaterial("ivy_dense_wall",{roughness:.95,bumpScale:.07}),o=e.getMaterial("ivy_climbing_plaster",{roughness:.94,bumpScale:.06}),s=e.getMaterial("peeling_plaster_brick",{roughness:.94,bumpScale:.06}),a=e.getMaterial("crumbling_brick_stucco",{roughness:.95,bumpScale:.06}),l=e.getMaterial("deep_moss",{roughness:.97,bumpScale:.08}),c=e.getMaterial("fallen_leaves",{roughness:.96,bumpScale:.06}),u=e.getMaterial("dark_soil",{roughness:.97,bumpScale:.06}),d=e.getMaterial("aged_rush_mat",{roughness:.95,bumpScale:.05}),h=e.getMaterial("driftwood",{roughness:.95,bumpScale:.06}),p=e.getMaterial("charred_cedar",{roughness:.93,bumpScale:.05}),x=e.getMaterial("cracked_concrete",{roughness:.94,bumpScale:.05}),g=e.getMaterial("shoji_sliding_door",{roughness:.9,opacity:.78,transparent:!0}),m=e.getMaterial("empty_bookshelf",{roughness:.88,bumpScale:.04}),f=e.getMaterial("antique_tansu",{roughness:.84,bumpScale:.04}),_=e.getMaterial("wooden_vanity",{roughness:.86,bumpScale:.04}),v=e.getMaterial("deep_moss",{roughness:.95,bumpScale:.08,tint:8163176}),b=e.getMaterial("dark_slate",{roughness:.85,bumpScale:.06,tint:8292224}),P=e.getMaterial("slate_roof_dark",{roughness:.82,bumpScale:.05,tint:7305330}),E=e.getMaterial("dark_iron_plate",{roughness:.78,metalness:.18}),A=e.getMaterial("matte_black_metal",{roughness:.72,metalness:.22}),T=.35,S=3.2,M=5.9;t.box("ext",8.7,.95,7.3,0,T-.48,0,n),t.stoneSteps("ext",.95,4.75,3.55,-.35,T,2,4,n);const I=S-T,O=T+I*.5;t.box("int",8.2,.08,6.8,0,T-.04,0,u),t.box("int",4,.05,3.6,1.8,T+.02,1.4,c),t.box("int",4.2,.05,3.8,1.7,T+.02,-1.5,l),t.box("int",3.7,.06,6.4,-2.15,T+.01,0,h),t.floor(-4,4,-3.3,3.6,T+.04),t.box("ext",4.35,I,.24,-2.02,O,3.5,r,{solid:!0}),t.box("ext",1.74,.68,.24,1,T+2.51,3.5,s,{solid:!0}),t.box("ext",2.35,I,.24,3.02,O,3.5,o,{solid:!0}),t.box("ext",4.6,I,.24,-1.9,O,-3.5,r,{solid:!0}),t.box("ext",3.8,1.85,.24,2.3,T+.92,-3.5,a,{solid:!0}),t.box("ext",.24,I,7.15,-4.2,O,0,r,{solid:!0}),t.box("ext",.24,I,3.6,4.2,O,1.75,o,{solid:!0}),t.box("ext",.24,2.1,3.55,4.2,T+1.05,-1.78,a,{solid:!0}),t.box("int",.14,I,2.6,-.35,O,-2.1,s,{solid:!0}),t.box("int",.14,I,2.5,-.35,O,2.2,s,{solid:!0}),t.box("int",.14,.68,1.75,-.35,T+2.51,.05,s,{solid:!0}),t.box("int",.06,1.95,.92,-.15,T+.98,1.65,g,{rz:.14,ry:.22,uvScale:0}),t.box("int",1.65,1.85,.44,2.35,T+.42,-1.55,m,{rx:1.32,ry:.35,uvScale:0}),t.box("int",1.75,.84,.65,-2.55,T+.42,-3.02,x,{solid:!0}),t.box("int",1.45,.22,.55,-2.55,T+.88,-3.02,l),t.box("int",.95,1.25,.52,-3.55,T+.64,-1.55,_,{ry:.12,solid:!0,uvScale:0}),t.box("int",2.4,.16,.16,2.6,T+.48,-2.4,p,{rz:.32,ry:-.45}),t.box("int",1.2,.36,1,3.2,T+.18,-2.6,n),t.stairRun("int",{x0:-3.15,z0:1.75,x1:-3.15,z1:-1.75,y0:T+.04,y1:S+.04,width:1.12,steps:13,treadMat:h,stringerMat:p,railMat:p,railLeft:!1,railRight:!0,guardLeft:!1,guardRight:!0,tiltZ:.035});const k=M-S,U=S+k*.5;t.box("int",6.65,.16,6.85,.85,S-.06,0,h),t.box("int",1.65,.16,1.75,-3.28,S-.06,-2.58,h),t.box("int",1.65,.16,1.65,-3.28,S-.06,2.62,h),t.box("int",3.4,.04,5.2,-.55,S+.03,-.35,d),t.box("int",2.8,.05,3.6,2.45,S+.03,-1.25,l),t.box("int",1.8,.05,2.1,-.25,S+.04,-1.85,l),t.collider(-2.45,4.1,S-.16,S+.02,-3.4,3.4),t.collider(-4.1,-2.45,S-.16,S+.02,-3.4,-1.8),t.collider(-4.1,-2.45,S-.16,S+.02,1.9,3.4),t.floor(-2.45,4,-3.3,3.3,S+.04),t.floor(-4,-2.45,-3.3,-1.72,S+.04),t.floor(-4,-2.45,1.85,3.3,S+.04),t.box("int",.08,.9,3.65,-2.46,S+.45,.05,p,{solid:!0}),t.box("int",1.62,.9,.08,-3.28,S+.45,1.88,p,{solid:!0}),t.box("ext",2.6,k,.22,-2.9,U,3.5,o,{solid:!0}),t.box("ext",2.8,.85,.22,-.2,S+.42,3.5,s,{solid:!0}),t.box("ext",2.8,.55,.22,-.2,S+2.42,3.5,o,{solid:!0}),t.box("ext",3,k,.22,2.7,U,3.5,r,{solid:!0}),t.box("ext",.22,k,7.1,-4.2,U,0,r,{solid:!0}),t.box("ext",4.3,k,.22,-2.05,U,-3.5,o,{solid:!0}),t.box("ext",4.1,1.15,.22,2.15,S+.58,-3.5,a,{solid:!0}),t.box("ext",.22,k,3.4,4.2,U,1.8,o,{solid:!0}),t.box("ext",.22,1.25,3.7,4.2,S+.62,-1.75,a,{solid:!0}),t.box("int",4.2,.12,6.8,-2.05,M-.06,0,h),t.collider(-4.1,.05,M-.12,M+.1,-3.4,3.4),t.box("int",1.45,1.42,.56,-.95,S+.72,-2.92,f,{rz:-.1,solid:!0,uvScale:0}),t.box("int",3.45,.18,.18,2.62,S+.72,-1.55,p,{rz:.36,ry:.12}),t.box("int",.14,.14,3.15,1.85,S+.67,-2,p,{rx:.36,ry:-.14}),t.box("int",1.1,.24,.9,2.25,S+.14,-1.85,b,{ry:.5,rx:.14}),t.box("int",.85,.18,.75,1.45,S+.1,-2.45,P,{ry:-.4,rz:.16}),t.box("ext",2.85,.14,1.55,1.05,S+.05,4.18,b,{rx:.36,rz:-.16});for(let F=-3;F<=3;F++)t.box("ext",.11,.07,1.55,1.05+F*.38,S+.11-F*.06,4.18,P,{rx:.36,rz:-.16});t.box("ext",.14,2.85,.14,-.22,T+1.42,4.78,p,{rz:.08}),t.box("ext",.14,2.55,.14,2.25,T+1.25,4.78,p,{rz:-.16});const D=.5,w=4.45,y=M-.12+w*Math.tan(D);t.kawaraSlope("ext",{bottomWidth:9.8,run:w,pitch:D,ridgeX:0,ridgeY:y,ridgeZ:0,downslopeYaw:0,tileMat:v,ribMat:P,eaveMat:E,rafterMat:p,ribSpacing:.4,skipRibPredicate:F=>F>2.6}),t.kawaraSlope("ext",{bottomWidth:5.3,run:w,pitch:D,ridgeX:-2.25,ridgeY:y,ridgeZ:0,downslopeYaw:Math.PI,tileMat:v,ribMat:P,eaveMat:E,rafterMat:p,ribSpacing:.4,skipRibPredicate:F=>F<-1.9}),t.gablePrism("ext",7.2,y-M+.14,.22,-4.2,M-.06,0,o,{ry:Math.PI*.5}),t.kawaraRidge("ext",-4.85,y+.04,0,1.35,y+.04,0,E,A,{scale:1,oniStart:!0,oniEnd:!1,courses:2});for(let F=0;F<4;F++){const q=1.95-F*.24,Y=.25+F*.62,X=q*.5,L=-X*Math.cos(D),$=y-.1-X*Math.sin(D);t.box("ext",.11,.11,q,Y,$,L,p,{rx:-D})}return t.build({id:i.id,name:"佐伯家（苔と蔦の半壊二階廃墟）",subtitle:"明治8年築・濃密蔦壁＆傾き庇・北東黒瓦屋根崩落（天井抜け青空露出）・二階建",category:"house",builtYear:1875,abandonedYear:1985,stories:2,floorElevations:[T+.04,S+.04],entryLocal:[1,0,5.8]})}function i2(i,e){const t=new Se(i),n=e.getMaterial("ishigaki_cut",{roughness:.92,bumpScale:.07}),r=e.getMaterial("ishigaki_rubble",{roughness:.94,bumpScale:.08}),o=e.getMaterial("dressed_stone",{roughness:.9,bumpScale:.06}),s=e.getMaterial("charred_cedar",{roughness:.9,bumpScale:.05}),a=e.getMaterial("aged_timber_planks",{roughness:.91,bumpScale:.06}),l=e.getMaterial("white_plaster",{roughness:.92,bumpScale:.04,tint:16249833}),c=e.getMaterial("washi_plaster",{roughness:.91,bumpScale:.03}),u=e.getMaterial("dark_hardwood",{roughness:.84,bumpScale:.04}),d=e.getMaterial("warm_wood_plank",{roughness:.82,bumpScale:.04}),h=e.getMaterial("oak_flooring",{roughness:.8,bumpScale:.03}),p=e.getMaterial("tree_bark",{roughness:.94,bumpScale:.07}),x=e.getMaterial("steel_truss_wall",{roughness:.62,metalness:.52,bumpScale:.05}),g=e.getMaterial("carved_wood_lattice",{roughness:.86,bumpScale:.05}),m=e.getMaterial("wood_slat_screen",{roughness:.85,bumpScale:.05}),f=e.getMaterial("woven_screen_brown",{roughness:.9,bumpScale:.05}),_=e.getMaterial("tatami_bordered",{roughness:.92,bumpScale:.04}),v=e.getMaterial("tatami_green_border",{roughness:.92,bumpScale:.04}),b=e.getMaterial("shoji_sliding_door",{roughness:.88,opacity:.9,transparent:!0}),P=e.getMaterial("window_frosted_wood",{roughness:.2,opacity:.2,transparent:!0,tint:14478324}),E=e.getMaterial("window_frosted_wood",{roughness:.32,opacity:.36,transparent:!0}),A=e.getMaterial("pegboard",{roughness:.84,bumpScale:.04}),T=e.getMaterial("dark_green_chalk",{roughness:.88,bumpScale:.02}),S=e.getMaterial("antique_tansu",{roughness:.78,bumpScale:.04}),M=e.getMaterial("red_zabuton",{roughness:.92,bumpScale:.03}),I=e.getMaterial("retro_kitchen_unit",{roughness:.78,bumpScale:.03}),O=e.getMaterial("wooden_dresser",{roughness:.82,bumpScale:.03}),k=e.getMaterial("full_bookcase",{roughness:.84,bumpScale:.04}),U=e.getMaterial("file_cabinet",{roughness:.66,metalness:.25}),D=e.getMaterial("office_counter",{roughness:.8,bumpScale:.03}),w=e.getMaterial("island_map_sign",{roughness:.8,bumpScale:.02}),y=e.getMaterial("coir_doormat",{roughness:.96,bumpScale:.06}),F=e.getMaterial("slate_roof_dark",{roughness:.68,metalness:.22,bumpScale:.06,tint:11976906}),q=e.getMaterial("dark_slate",{roughness:.64,metalness:.26,bumpScale:.05,tint:10397876}),Y=e.getMaterial("dark_iron_plate",{roughness:.58,metalness:.32,tint:8818844}),X=e.getMaterial("matte_black_metal",{roughness:.5,metalness:.42,tint:7371398}),L=.55,$=3.75,N=6.85,H=9.85,K=12.55;t.box("ext",11.4,5.2,8.2,0,L-2.65,-.2,r),t.box("ext",12.9,.36,9.5,0,L-.22,0,u);for(const ft of[-6.15,-3.1,0,3.1,6.15])for(const st of[-4.45,4.45])t.box("ext",.34,5.4,.34,ft,L-2.72,st,u);for(const ft of[-4.6,-1.55,1.55,4.6])t.box("ext",3.4,.2,.2,ft,L-1.65,4.45,u,{rz:.42}),t.box("ext",3.4,.2,.2,ft,L-1.65,4.45,u,{rz:-.42}),t.box("ext",3.4,.2,.2,ft,L-1.65,-4.45,u,{rz:.42});t.box("ext",3.4,4.6,1.9,-1.4,L-2.34,5.35,n),t.stoneSteps("ext",-1.4,6.45,4.8,-.35,L,2.75,5,o),t.floor(-2.9,.1,4.4,5.4,L+.04);const V=$-L,G=L+V*.5;t.box("int",12.4,.12,9,0,L-.04,0,a),t.box("int",5.4,.04,8.5,3.45,L+.03,0,_),t.box("int",1.25,.03,.72,-1.4,L+.04,4.18,y,{uvScale:0}),t.floor(-6.15,6.15,-4.45,4.65,L+.04),t.box("ext",3.74,1.25,.26,-4.45,L+.62,4.6,s,{solid:!0}),t.box("ext",3.74,V-1.25,.26,-4.45,L+2.22,4.6,a,{solid:!0}),t.box("ext",2.44,.74,.26,-1.4,L+2.83,4.6,a,{solid:!0}),t.box("ext",6.54,1.2,.26,3.05,L+.6,4.6,s,{solid:!0}),t.box("ext",1.55,V-1.2,.26,.58,L+2.2,4.6,l,{solid:!0}),t.box("ext",2.85,.56,.26,2.75,L+2.92,4.6,l,{solid:!0}),t.box("ext",2.8,1.44,.07,2.75,L+1.92,4.6,g,{uvScale:0}),t.box("ext",2.15,V-1.2,.26,5.25,L+2.2,4.6,l,{solid:!0}),t.box("ext",12.65,1.25,.26,0,L+.62,-4.6,s,{solid:!0}),t.box("ext",12.65,V-1.25,.26,0,L+2.22,-4.6,l,{solid:!0}),t.box("ext",.26,1.25,9.25,-6.3,L+.62,0,s,{solid:!0}),t.box("ext",.26,V-1.25,9.25,-6.3,L+2.22,0,a,{solid:!0}),t.box("ext",.26,1.25,9.25,6.3,L+.62,0,s,{solid:!0}),t.box("ext",.26,V-1.25,9.25,6.3,L+2.22,0,l,{solid:!0}),t.box("int",.16,V,5.82,.6,G,-1.7,c,{solid:!0}),t.box("int",.16,.72,1.85,.6,L+2.84,2.1,m,{uvScale:0}),t.box("int",.16,V,1.62,.6,G,3.8,c,{solid:!0}),t.cyl("int",.24,.26,4.4,8,-5.25,L+.26,-1.2,p,{rx:Math.PI*.5}),t.cyl("int",.22,.25,4.2,8,-4.68,L+.24,-1.3,p,{rx:Math.PI*.5}),t.cyl("int",.2,.22,4,8,-4.96,L+.62,-1.25,p,{rx:Math.PI*.5}),t.collider(-5.65,-4.35,L,L+1,-3.45,1.05),t.box("int",1.15,.82,3.2,-2.55,L+.41,-1.65,d,{solid:!0}),t.box("int",.08,1.55,2.65,-6.12,L+1.85,1.65,A,{uvScale:0}),t.box("int",6.6,.48,.18,-2.9,$-.34,.2,x,{uvScale:0}),t.box("int",1.65,.38,1,2.95,L+.2,-1.15,u,{solid:!0}),t.box("int",.62,.08,.62,2.95,L+.08,-2.05,M,{uvScale:0}),t.box("int",.62,.08,.62,2.95,L+.08,-.25,M,{uvScale:0}),t.box("int",1.55,1.48,.52,2.65,L+.75,-4.15,S,{solid:!0,uvScale:0}),t.stairRun("int",{x0:5.2,z0:2.6,x1:5.2,z1:-1.5,y0:L+.04,y1:$+.04,width:1.2,steps:15,treadMat:u,stringerMat:u,railMat:d,railLeft:!0,railRight:!1,closedRisers:!0,guardLeft:!0,guardRight:!1});const Z=N-$,B=$+Z*.5;t.box("int",10.74,.16,9.2,-.93,$-.06,0,d),t.box("int",1.88,.16,3.06,5.36,$-.06,-3.07,d),t.box("int",1.88,.16,1.92,5.36,$-.06,3.64,d),t.box("int",8.8,.04,7.6,-.8,$+.03,0,v),t.collider(-6.3,4.44,$-.16,$+.02,-4.6,4.6),t.collider(4.44,6.3,$-.16,$+.02,-4.6,-1.56),t.collider(4.44,6.3,$-.16,$+.02,2.7,4.6),t.floor(-6.18,4.42,-4.48,4.52,$+.04),t.floor(4.38,6.18,-4.48,-1.5,$+.04),t.floor(4.38,6.18,2.66,4.48,$+.04),t.kouranRailing("int",4.44,-1.54,4.44,2.7,$,.94,u,.56),t.kouranRailing("int",4.44,2.7,6.18,2.7,$,.94,u,.52),t.box("ext",11.95,.16,1.18,0,$-.04,5.18,d),t.kouranRailing("ext",-5.92,5.72,5.92,5.72,$,.96,u,.56),t.kouranRailing("ext",-5.92,4.6,-5.92,5.72,$,.96,u,.52),t.kouranRailing("ext",5.92,4.6,5.92,5.72,$,.96,u,.52),t.floor(-5.82,5.82,4.5,5.65,$+.04),t.box("ext",5.42,Z,.22,-3.6,B,4.6,l,{solid:!0}),t.box("ext",1.84,.72,.22,0,$+2.74,4.6,l,{solid:!0}),t.box("ext",5.42,Z,.22,3.6,B,4.6,l,{solid:!0}),t.box("ext",12.65,Z,.22,0,B,-4.6,l,{solid:!0}),t.box("ext",.22,Z,9.25,-6.3,B,0,l,{solid:!0}),t.box("ext",.22,Z,9.25,6.3,B,0,l,{solid:!0});for(const ft of[-6.32,-3.15,-.92,.92,3.15,6.32])t.box("ext",.18,Z+.06,.28,ft,B,4.62,u);t.box("int",.14,Z,3.25,.45,B,-2.95,g,{solid:!0,uvScale:0}),t.box("int",1.95,.92,.62,2.25,$+.46,-4.18,I,{solid:!0,uvScale:0}),t.box("int",1.35,1.15,.5,-5.15,$+.58,3.95,O,{solid:!0,uvScale:0}),t.box("int",2.4,1.65,.06,-1.65,$+1.55,-4.44,b,{uvScale:0}),t.stairRun("int",{x0:-3.65,z0:-2.4,x1:-3.65,z1:1.7,y0:$+.04,y1:N+.04,width:1.15,steps:14,treadMat:u,stringerMat:u,railMat:d,railLeft:!0,railRight:!0,closedRisers:!1,guardLeft:!0,guardRight:!0});const J=H-N,lt=N+J*.5;t.box("int",7.64,.16,7.2,.88,N-.06,0,h),t.box("int",1.82,.16,1.18,-3.81,N-.06,-3.02,h),t.box("int",1.82,.16,1.84,-3.81,N-.06,2.68,h),t.box("int",9.2,.08,7,0,H-.08,0,f),t.collider(-2.92,4.7,N-.16,N+.02,-3.6,3.6),t.collider(-4.7,-2.92,N-.16,N+.02,-3.6,-2.46),t.collider(-4.7,-2.92,N-.16,N+.02,1.78,3.6),t.floor(-2.9,4.58,-3.48,3.48,N+.04),t.floor(-4.58,-2.86,-3.48,-2.42,N+.04),t.floor(-4.58,-2.86,1.72,3.48,N+.04),t.kouranRailing("int",-2.92,-2.46,-2.92,1.78,N,.94,u,.56),t.kouranRailing("int",-4.58,-2.46,-2.92,-2.46,N,.94,u,.5),t.box("ext",9.45,.88,.22,0,N+.44,3.6,l,{solid:!0}),t.box("ext",2.6,J-.88,.22,-3.42,N+1.94,3.6,l,{solid:!0}),t.box("ext",4.2,.52,.22,0,N+2.74,3.6,l,{solid:!0}),t.box("ext",4.16,1.6,.06,0,N+1.68,3.6,P,{uvScale:0}),t.box("ext",2.65,J-.88,.22,3.4,N+1.94,3.6,l,{solid:!0}),t.box("ext",9.45,J,.22,0,lt,-3.6,l,{solid:!0}),t.box("ext",.22,J,7.25,-4.7,lt,0,l,{solid:!0}),t.box("ext",.22,.9,7.25,4.7,N+.45,0,l,{solid:!0}),t.box("ext",.22,J-.9,2.25,4.7,N+1.95,-2.5,l,{solid:!0}),t.box("ext",.22,.54,2.6,4.7,N+2.73,-.05,l,{solid:!0}),t.box("ext",.06,1.56,2.56,4.7,N+1.68,-.05,E,{uvScale:0}),t.box("ext",.22,J-.9,2.4,4.7,N+1.95,2.42,l,{solid:!0}),t.box("int",2.77,1.6,.05,-.55,N+1.72,-3.45,u),t.box("int",2.65,1.48,.06,-.55,N+1.72,-3.41,T,{uvScale:0}),t.box("int",1.85,.82,.92,-.55,N+.41,-.95,D,{solid:!0,uvScale:0}),t.box("int",1.92,.06,.98,-.55,N+.85,-.95,d,{solid:!0}),t.box("int",.52,1.95,1.75,4.26,N+.98,-2.15,k,{solid:!0,uvScale:0}),t.box("int",.56,1.48,.74,4.24,N+.74,1.95,U,{solid:!0,uvScale:0}),t.stairRun("int",{x0:1.75,z0:1.95,x1:1.75,z1:-1.75,y0:N+.04,y1:H+.04,width:1.08,steps:14,treadMat:u,stringerMat:u,railMat:d,railLeft:!0,railRight:!1,closedRisers:!1,guardLeft:!0,guardRight:!1});const ht=K-H,z=H+ht*.5;t.box("int",3.8,.16,5.4,-.8,H-.06,0,h),t.box("int",1.64,.16,.92,1.88,H-.06,-2.24,h),t.box("int",1.64,.16,.72,1.88,H-.06,2.34,h),t.collider(-2.7,1.08,H-.16,H+.02,-2.7,2.7),t.collider(1.08,2.7,H-.16,H+.02,-2.7,-1.8),t.collider(1.08,2.7,H-.16,H+.02,2.02,2.7),t.floor(-2.65,1.06,-2.65,2.65,H+.04),t.floor(1.02,2.62,-2.65,-1.74,H+.04),t.floor(1.02,2.62,1.98,2.65,H+.04),t.kouranRailing("int",1.08,-1.78,1.08,2.02,H,.94,u,.52),t.kouranRailing("int",1.08,2.02,2.62,2.02,H,.94,u,.48),t.box("ext",7.58,.16,1.12,0,H-.04,3.24,d),t.box("ext",7.58,.16,1.12,0,H-.04,-3.24,d),t.box("ext",1.12,.16,5.44,-3.24,H-.04,0,d),t.box("ext",1.12,.16,5.44,3.24,H-.04,0,d),t.kouranRailing("ext",-3.76,3.76,3.76,3.76,H,.96,u,.54),t.kouranRailing("ext",-3.76,-3.76,3.76,-3.76,H,.96,u,.54),t.kouranRailing("ext",-3.76,-3.76,-3.76,3.76,H,.96,u,.54),t.kouranRailing("ext",3.76,-3.76,3.76,3.76,H,.96,u,.54),t.floor(-3.68,3.68,2.62,3.68,H+.04),t.floor(-3.68,3.68,-3.68,-2.62,H+.04),t.floor(-3.68,-2.62,-3.68,3.68,H+.04),t.floor(2.62,3.68,-3.68,3.68,H+.04),t.box("ext",1.12,ht,.2,-2.16,z,2.7,l,{solid:!0}),t.box("ext",1.6,.64,.2,-.82,H+2.38,2.7,l,{solid:!0}),t.box("ext",1.64,.09,.26,-.82,H+2.06,2.7,u),t.box("ext",.11,ht,.25,-1.6,z,2.7,u),t.box("ext",.11,ht,.25,-.04,z,2.7,u),t.box("ext",2.78,.78,.2,1.34,H+.39,2.7,l,{solid:!0}),t.box("ext",2.78,.08,.26,1.34,H+.8,2.7,u),t.box("ext",2.78,.09,.26,1.34,K-.42,2.7,u),t.box("ext",.08,1.5,.14,.88,H+1.54,2.7,u),t.box("ext",.08,1.5,.14,1.8,H+1.54,2.7,u),t.box("ext",2.74,1.5,.06,1.34,H+1.54,2.7,P,{uvScale:0}),t.box("ext",2.78,.42,.2,1.34,K-.21,2.7,l,{solid:!0}),t.box("ext",.2,ht,1.92,-2.7,z,-1.76,l,{solid:!0}),t.box("ext",.2,.64,1.6,-2.7,H+2.38,-.02,l,{solid:!0}),t.box("ext",.26,.09,1.64,-2.7,H+2.06,-.02,u),t.box("ext",.25,ht,.11,-2.7,z,-.8,u),t.box("ext",.25,ht,.11,-2.7,z,.76,u),t.box("ext",.2,ht,1.98,-2.7,z,1.74,l,{solid:!0}),t.box("ext",5.45,.78,.2,0,H+.39,-2.7,l,{solid:!0}),t.box("ext",3.84,.08,.26,0,H+.8,-2.7,u),t.box("ext",3.84,.09,.26,0,K-.42,-2.7,u);for(const ft of[-.95,0,.95])t.box("ext",.08,1.5,.14,ft,H+1.54,-2.7,u);t.box("ext",.85,ht-.78,.2,-2.3,H+1.74,-2.7,l,{solid:!0}),t.box("ext",3.74,1.5,.06,0,H+1.54,-2.7,P,{uvScale:0}),t.box("ext",3.78,.42,.2,0,K-.21,-2.7,l,{solid:!0}),t.box("ext",.85,ht-.78,.2,2.3,H+1.74,-2.7,l,{solid:!0}),t.box("ext",.2,.78,5.45,2.7,H+.39,0,l,{solid:!0}),t.box("ext",.26,.08,3.84,2.7,H+.8,0,u),t.box("ext",.26,.09,3.84,2.7,K-.42,0,u);for(const ft of[-.95,0,.95])t.box("ext",.14,1.5,.08,2.7,H+1.54,ft,u);t.box("ext",.2,ht-.78,.85,2.7,H+1.74,-2.3,l,{solid:!0}),t.box("ext",.06,1.5,3.74,2.7,H+1.54,0,P,{uvScale:0}),t.box("ext",.2,.42,3.78,2.7,K-.21,0,l,{solid:!0}),t.box("ext",.2,ht-.78,.85,2.7,H+1.74,2.3,l,{solid:!0});for(const[ft,st]of[[-2.72,-2.72],[2.72,-2.72],[-2.72,2.72],[2.72,2.72]])t.box("ext",.22,ht+.08,.22,ft,z,st,u);t.box("int",5.36,.08,5.36,0,K-.04,0,f),t.box("int",5.2,.2,.2,0,K-.14,0,u),t.box("int",.2,.2,5.2,0,K-.14,0,u),t.box("int",1.15,.82,.92,-.75,H+.41,.1,u,{solid:!0}),t.box("int",.98,.03,.76,-.75,H+.84,.1,w,{uvScale:0}),t.kawaraSlope("ext",{bottomWidth:13.4,run:1.32,pitch:.36,ridgeX:0,ridgeY:$+.14,ridgeZ:4.56,downslopeYaw:0,tileMat:F,ribMat:q,rafterMat:u,ribSpacing:.38}),t.kawaraSlope("ext",{bottomWidth:10,run:1.05,pitch:.36,ridgeX:-6.26,ridgeY:$+.1,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:F,ribMat:q,rafterMat:u,ribSpacing:.38});const ut=.4;t.kawaraSlope("ext",{topWidth:9.6,bottomWidth:13.8,run:2.3,pitch:ut,ridgeX:0,ridgeY:N+.5,ridgeZ:3.58,downslopeYaw:0,tileMat:F,ribMat:q,rafterMat:u,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:9.6,bottomWidth:13.8,run:1.95,pitch:ut,ridgeX:0,ridgeY:N+.42,ridgeZ:-3.58,downslopeYaw:Math.PI,tileMat:F,ribMat:q,rafterMat:u,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:7.4,bottomWidth:10.6,run:2.25,pitch:ut,ridgeX:4.68,ridgeY:N+.48,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:F,ribMat:q,rafterMat:u,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:7.4,bottomWidth:10.6,run:2.25,pitch:ut,ridgeX:-4.68,ridgeY:N+.48,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:F,ribMat:q,rafterMat:u,ribSpacing:.38});const et=.4;t.kawaraSlope("ext",{topWidth:7.6,bottomWidth:10.4,run:1.35,pitch:et,ridgeX:0,ridgeY:H+.02,ridgeZ:3.74,downslopeYaw:0,tileMat:F,ribMat:q,rafterMat:u,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:7.6,bottomWidth:10.4,run:1.35,pitch:et,ridgeX:0,ridgeY:H+.02,ridgeZ:-3.74,downslopeYaw:Math.PI,tileMat:F,ribMat:q,rafterMat:u,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:7.6,bottomWidth:9.2,run:1.55,pitch:et,ridgeX:3.74,ridgeY:H+.06,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:F,ribMat:q,rafterMat:u,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:7.6,bottomWidth:9.2,run:1.55,pitch:et,ridgeX:-3.74,ridgeY:H+.06,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:F,ribMat:q,rafterMat:u,ribSpacing:.38});const rt=.52,ct=4.45,Q=K+ct*Math.tan(rt)-.12,j=1.65,C=ct*2,R=1.05,tt=Q-R;t.kawaraSlope("ext",{topWidth:j*2,bottomWidth:C,run:ct,pitch:rt,ridgeX:0,ridgeY:Q,ridgeZ:0,downslopeYaw:0,tileMat:F,ribMat:q,rafterMat:u,ribSpacing:.34}),t.kawaraSlope("ext",{topWidth:j*2,bottomWidth:C,run:ct,pitch:rt,ridgeX:0,ridgeY:Q,ridgeZ:0,downslopeYaw:Math.PI,tileMat:F,ribMat:q,rafterMat:u,ribSpacing:.34}),t.gablePrism("ext",3.4,R-.08,.18,j,tt,0,l,{ry:Math.PI*.5}),t.gablePrism("ext",3.4,R-.08,.18,-j,tt,0,l,{ry:Math.PI*.5}),t.kawaraSlope("ext",{topWidth:3.6,bottomWidth:C,run:ct-j+.1,pitch:.48,ridgeX:j,ridgeY:tt,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:F,ribMat:q,rafterMat:u,ribSpacing:.34}),t.kawaraSlope("ext",{topWidth:3.6,bottomWidth:C,run:ct-j+.1,pitch:.48,ridgeX:-j,ridgeY:tt,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:F,ribMat:q,rafterMat:u,ribSpacing:.34}),t.kawaraRidge("ext",-j,Q+.04,0,j,Q+.04,0,Y,X,{scale:1.12,courses:3,oniStart:!0,oniEnd:!0});const it=Q-ct*Math.tan(rt);for(const ft of[-1,1])for(const st of[-1,1])t.kawaraRidge("ext",ft*j,tt+.04,st*1.75,ft*(ct-.1),it+.05,st*(ct-.1),Y,X,{scale:.72,courses:1,oniStart:!1,oniEnd:!0});return t.build({id:"H07",name:"安藤家（大工棟梁・懸造り四階木組櫓邸）",subtitle:"懸造り柱脚・木工刻み場・原寸図面室・4F 360°屋外回廊付望楼櫓",category:"house",builtYear:1877,abandonedYear:1985,stories:4,floorElevations:[L,$,N,H],entryLocal:[-1.4,0,7.6],entryLookLocalYaw:0})}function r2(i,e){const t=new Se(i),n=e.getMaterial("gabion_stone",{roughness:.94,bumpScale:.08}),r=e.getMaterial("ishigaki_cut",{roughness:.92,bumpScale:.07}),o=e.getMaterial("dressed_stone",{roughness:.9,bumpScale:.06}),s=e.getMaterial("pebble_aggregate",{roughness:.93,bumpScale:.06}),a=e.getMaterial("smooth_concrete_dark",{roughness:.88,bumpScale:.04}),l=e.getMaterial("charred_cedar",{roughness:.9,bumpScale:.05}),c=e.getMaterial("horizontal_wood_siding",{roughness:.88,bumpScale:.05}),u=e.getMaterial("aged_timber_planks",{roughness:.91,bumpScale:.05}),d=e.getMaterial("white_plaster",{roughness:.92,bumpScale:.04,tint:16184039}),h=e.getMaterial("cream_plaster",{roughness:.91,bumpScale:.03}),p=e.getMaterial("washi_plaster",{roughness:.91,bumpScale:.03}),x=e.getMaterial("dark_hardwood",{roughness:.84,bumpScale:.04}),g=e.getMaterial("warm_wood_plank",{roughness:.82,bumpScale:.04}),m=e.getMaterial("oak_flooring",{roughness:.8,bumpScale:.03}),f=e.getMaterial("cobblestone",{roughness:.92,bumpScale:.06}),_=e.getMaterial("woven_screen_brown",{roughness:.9,bumpScale:.05}),v=e.getMaterial("frosted_grid_window",{roughness:.28,opacity:.44,transparent:!0}),b=e.getMaterial("frosted_acrylic",{roughness:.3,opacity:.52,transparent:!0}),P=e.getMaterial("shoji_sliding_door",{roughness:.88,opacity:.88,transparent:!0}),E=e.getMaterial("cedar_louvers",{roughness:.86,bumpScale:.05}),A=e.getMaterial("carved_wood_lattice",{roughness:.86,bumpScale:.05}),T=e.getMaterial("dark_green_chalk",{roughness:.88,bumpScale:.02}),S=e.getMaterial("island_map_sign",{roughness:.8,bumpScale:.02}),M=e.getMaterial("notice_board",{roughness:.88,bumpScale:.02}),I=e.getMaterial("cork_board",{roughness:.92,bumpScale:.03}),O=e.getMaterial("full_bookcase",{roughness:.84,bumpScale:.04}),k=e.getMaterial("file_cabinet",{roughness:.66,metalness:.25}),U=e.getMaterial("tatami_green_border",{roughness:.92,bumpScale:.04}),D=e.getMaterial("tatami_bordered",{roughness:.92,bumpScale:.04}),w=e.getMaterial("woven_carpet_gray",{roughness:.94,bumpScale:.04}),y=e.getMaterial("red_zabuton",{roughness:.92,bumpScale:.03}),F=e.getMaterial("retro_kitchen_unit",{roughness:.78,bumpScale:.03}),q=e.getMaterial("kitchen_cabinet",{roughness:.82,bumpScale:.03}),Y=e.getMaterial("antique_tansu",{roughness:.78,bumpScale:.04}),X=e.getMaterial("floral_futon",{roughness:.92,bumpScale:.03}),L=e.getMaterial("wardrobe_wood",{roughness:.82,bumpScale:.03}),$=e.getMaterial("coir_doormat",{roughness:.96,bumpScale:.06}),N=e.getMaterial("slate_roof_dark",{roughness:.72,metalness:.18,bumpScale:.06,tint:8099474}),H=e.getMaterial("dark_slate",{roughness:.68,metalness:.22,bumpScale:.05,tint:6914686}),K=e.getMaterial("dark_iron_plate",{roughness:.6,metalness:.3,tint:6058608}),V=e.getMaterial("matte_black_metal",{roughness:.52,metalness:.4,tint:4939356}),G=.5,Z=3.65,B=6.55;t.box("ext",14.4,3.8,9.4,0,G-2.3,-.2,n),t.box("ext",6.8,.95,9.7,-3.6,G-.5,.35,r),t.box("ext",7.4,.95,9.8,3.3,G-.5,.45,r),t.box("ext",4.6,.1,2.2,1.35,.02,6.75,s),t.box("ext",4.8,.14,.18,1.35,.05,7.82,a),t.stoneSteps("ext",1.35,6.35,5.25,-.05,G,2.4,3,o),t.box("ext",7.25,.16,1.1,3.2,G-.04,4.82,g),t.floor(-.4,6.72,4.22,5.3,G+.04);for(const tt of[-.3,2.65,4.75,6.72])t.box("ext",.26,.2,.26,tt,G+.1,5.28,o),t.box("ext",.15,2.95,.15,tt,G+1.62,5.28,x,{solid:!0});t.box("ext",7.25,.18,.18,3.2,G+3.06,5.28,x),t.kouranRailing("ext",2.65,5.28,6.72,5.28,G,.88,x,.54),t.kouranRailing("ext",6.72,4.3,6.72,5.28,G,.88,x,.5);const J=Z-G,lt=G+J*.5;t.box("int",6.45,.12,9.3,-3.6,G-.04,.35,m),t.box("int",7.25,.12,8.6,3.2,G-.04,0,g),t.box("int",2.45,.05,2.25,1.35,G+.02,3.15,f),t.box("int",1.15,.03,.68,1.35,G+.04,3.92,$,{uvScale:0}),t.box("int",4.45,.04,4.75,4.35,G+.03,1.55,U),t.floor(-6.7,-.32,-4.18,4.88,G+.04),t.floor(-.48,6.68,-4.18,4.35,G+.04),t.box("ext",6.48,.96,.24,-3.6,G+.48,5,l,{solid:!0}),t.box("ext",.85,J-.96,.24,-6.4,G+2.06,5,c,{solid:!0}),t.box("ext",.72,J-.96,.24,-3.6,G+2.06,5,c,{solid:!0}),t.box("ext",.85,J-.96,.24,-.8,G+2.06,5,c,{solid:!0}),t.box("ext",6.48,.56,.24,-3.6,Z-.28,5,c,{solid:!0});for(const tt of[-4.98,-2.22])t.box("ext",2.02,.08,.28,tt,G+.98,5,x),t.box("ext",2.02,.08,.28,tt,Z-.56,5,x),t.box("ext",1.98,1.6,.06,tt,G+1.79,5,v,{uvScale:0});t.box("ext",.24,J,.8,-.4,lt,4.65,c,{solid:!0}),t.box("ext",.24,1.05,9.36,-6.8,G+.52,.35,l,{solid:!0}),t.box("ext",.24,J-1.05,9.36,-6.8,G+2.1,.35,c,{solid:!0}),t.box("ext",.8,J,.24,-.02,lt,4.3,c,{solid:!0}),t.box("ext",2.04,.72,.24,1.35,Z-.36,4.3,c,{solid:!0}),t.box("ext",2.06,.09,.28,1.35,Z-.72,4.3,x),t.box("ext",4.5,.92,.24,4.58,G+.46,4.3,l,{solid:!0}),t.box("ext",1.15,J-.92,.24,2.9,G+2.04,4.3,d,{solid:!0}),t.box("ext",2.35,.56,.24,4.6,Z-.28,4.3,d,{solid:!0}),t.box("ext",2.35,.08,.28,4.6,G+.94,4.3,x),t.box("ext",2.35,.08,.28,4.6,Z-.56,4.3,x),t.box("ext",2.3,1.62,.06,4.6,G+1.76,4.3,A,{uvScale:0}),t.box("ext",1.08,J-.92,.24,6.28,G+2.04,4.3,d,{solid:!0}),t.box("ext",13.65,1.05,.24,0,G+.52,-4.3,l,{solid:!0}),t.box("ext",13.65,J-1.05,.24,0,G+2.1,-4.3,h,{solid:!0}),t.box("ext",.24,1.05,8.66,6.8,G+.52,0,l,{solid:!0}),t.box("ext",.24,J-1.05,2.4,6.8,G+2.1,-3.1,d,{solid:!0}),t.box("ext",.24,.62,3.85,6.8,Z-.31,0,d,{solid:!0}),t.box("ext",.28,.08,3.88,6.8,G+1.06,0,x),t.box("ext",.28,.08,3.88,6.8,Z-.62,0,x),t.box("ext",.06,1.46,3.8,6.8,G+1.8,0,P,{uvScale:0}),t.box("ext",.24,J-1.05,2.4,6.8,G+2.1,3.1,d,{solid:!0}),t.box("int",.18,J,5.45,-.4,lt,-1.58,p,{solid:!0}),t.box("int",.18,.72,1.84,-.4,Z-.36,2.05,p,{solid:!0}),t.box("int",.22,.08,1.86,-.4,Z-.72,2.05,x),t.box("int",.18,J,1.38,-.4,lt,3.62,p,{solid:!0}),t.box("int",1.35,.18,4.4,-6,G+.09,.3,x,{solid:!0}),t.box("int",.06,1.56,3.45,-6.66,G+1.8,.3,x),t.box("int",.06,1.42,3.3,-6.62,G+1.8,.3,T,{uvScale:0}),t.box("int",.62,1.05,.88,-5.65,G+.7,.3,g,{solid:!0}),t.box("int",1.65,1.15,.06,-4.35,G+1.82,-4.14,S,{uvScale:0}),t.box("int",1.35,1.02,.06,-2.15,G+1.78,-4.14,M,{uvScale:0});for(const tt of[-3.95,-2.15])for(const it of[-1.45,1.55])t.box("int",.64,.06,1.32,tt,G+.72,it,g,{solid:!0}),t.box("int",.54,.7,.07,tt,G+.35,it-.56,x,{solid:!0}),t.box("int",.54,.7,.07,tt,G+.35,it+.56,x,{solid:!0}),t.box("int",.34,.05,1.24,tt+.58,G+.42,it,u,{solid:!0}),t.box("int",.28,.4,.06,tt+.58,G+.2,it-.5,x),t.box("int",.28,.4,.06,tt+.58,G+.2,it+.5,x);t.box("int",1.45,.36,.88,4.35,G+.2,1.55,x,{solid:!0}),t.box("int",.6,.07,.6,4.35,G+.07,.75,y,{uvScale:0}),t.box("int",.6,.07,.6,4.35,G+.07,2.35,y,{uvScale:0}),t.box("int",1.95,.92,.64,3.65,G+.46,-3.86,F,{solid:!0,uvScale:0}),t.box("int",1.35,1.82,.54,5.65,G+.92,-3.9,q,{solid:!0,uvScale:0}),t.box("int",.48,2.15,2.05,1.58,G+1.08,-.85,O,{solid:!0,uvScale:0}),t.stairRun("int",{x0:.6,z0:1.4,x1:.6,z1:-2.7,y0:G+.04,y1:Z+.04,width:1.12,steps:14,treadMat:x,stringerMat:x,railMat:g,railLeft:!0,railRight:!0,closedRisers:!1,guardLeft:!0,guardRight:!0});const ht=B-Z,z=Z+ht*.5;t.box("int",6.74,.16,9.25,-3.45,Z-.06,.35,g),t.box("int",1.4,.16,1.56,.6,Z-.06,-3.54,g),t.box("int",1.4,.16,2.82,.6,Z-.06,2.91,g),t.box("int",5.56,.16,8.62,4.04,Z-.06,0,g),t.box("int",5.2,.04,6.2,-3.65,Z+.03,.45,D),t.box("int",4.4,.04,6.4,4.25,Z+.03,0,w),t.box("int",13.4,.08,8.4,0,B-.06,0,_),t.collider(-6.8,-.08,Z-.16,Z+.02,-4.3,5),t.collider(-.08,1.28,Z-.16,Z+.02,-4.3,-2.78),t.collider(-.08,1.28,Z-.16,Z+.02,1.52,4.3),t.collider(1.28,6.8,Z-.16,Z+.02,-4.3,4.3),t.floor(-6.7,-.04,-4.2,4.88,Z+.04),t.floor(-.1,1.32,-4.2,-2.74,Z+.04),t.floor(-.1,1.32,1.48,4.24,Z+.04),t.floor(1.24,6.68,-4.2,4.24,Z+.04),t.kouranRailing("int",-.08,-2.78,-.08,1.52,Z,.94,x,.54),t.kouranRailing("int",1.28,-2.78,1.28,1.52,Z,.94,x,.54),t.kouranRailing("int",-.08,1.52,1.28,1.52,Z,.94,x,.45),t.box("ext",7.25,.16,1.08,3.2,Z-.04,4.82,m),t.floor(-.32,6.68,4.22,5.24,Z+.04),t.box("ext",7.26,.84,.16,3.2,Z+.42,5.3,d,{solid:!0}),t.box("ext",7.26,.08,.22,3.2,Z+.86,5.3,x),t.box("ext",7.26,.1,.22,3.2,B-.44,5.3,x),t.box("ext",7.26,.44,.16,3.2,B-.22,5.3,d,{solid:!0}),t.box("ext",7.1,1.52,.06,3.2,Z+1.66,5.3,b,{uvScale:0});for(const tt of[-.36,1.42,3.2,4.98,6.76])t.box("ext",.1,ht,.18,tt,z,5.3,x);t.box("ext",.16,ht,1.08,6.8,z,4.82,d,{solid:!0}),t.box("ext",7.28,.12,1.18,3.2,B-.04,4.82,x),t.box("ext",6.48,.88,.22,-3.6,Z+.44,5,d,{solid:!0}),t.box("ext",1.4,ht-.88,.22,-6.12,Z+1.9,5,d,{solid:!0}),t.box("ext",3.68,.48,.22,-3.6,B-.24,5,d,{solid:!0}),t.box("ext",3.7,.08,.26,-3.6,Z+.9,5,x),t.box("ext",3.7,.08,.26,-3.6,B-.48,5,x),t.box("ext",.08,1.52,.14,-3.6,Z+1.66,5,x),t.box("ext",3.62,1.5,.06,-3.6,Z+1.66,5,v,{uvScale:0}),t.box("ext",1.4,ht-.88,.22,-1.08,Z+1.9,5,d,{solid:!0}),t.box("ext",.22,ht,.8,-.4,z,4.65,d,{solid:!0}),t.box("ext",2.62,ht,.2,.9,z,4.3,p,{solid:!0}),t.box("ext",1.84,.66,.2,3.1,B-.33,4.3,p,{solid:!0}),t.box("ext",1.86,.08,.24,3.1,B-.66,4.3,x),t.box("ext",2.82,ht,.2,5.4,z,4.3,p,{solid:!0}),t.box("ext",13.65,ht,.22,0,z,-4.3,d,{solid:!0}),t.box("ext",.22,ht,9.36,-6.8,z,.35,d,{solid:!0}),t.box("ext",.22,ht,8.66,6.8,z,0,d,{solid:!0});for(const[tt,it]of[[-6.82,5.02],[-.38,5.02],[-6.82,-4.32],[6.82,-4.32],[6.82,4.32]])t.box("ext",.18,ht+.06,.18,tt,z,it,x);t.box("int",.52,2,1.95,-6.34,Z+1,-1.85,O,{solid:!0,uvScale:0}),t.box("int",.52,2,1.95,-6.34,Z+1,1.25,O,{solid:!0,uvScale:0}),t.box("int",1.45,1.42,.54,-4.2,Z+.72,-3.86,Y,{solid:!0,uvScale:0}),t.box("int",1.35,.96,.07,-1.85,Z+1.62,-4.12,I,{uvScale:0}),t.box("int",1.5,.36,.86,-3.55,Z+.2,1.35,x,{solid:!0}),t.box("int",.6,.07,.6,-3.55,Z+.07,2.15,y,{uvScale:0}),t.box("int",1.65,.2,2.15,4.55,Z+.13,-1.55,X,{solid:!0,uvScale:0}),t.box("int",.58,1.88,1.32,6.28,Z+.94,1.65,L,{solid:!0,uvScale:0}),t.box("int",.56,1.48,.74,6.18,Z+.74,-3.72,k,{solid:!0,uvScale:0});const ut=.44,et=5.45,rt=B+et*Math.tan(ut)-.38;t.kawaraSlope("ext",{bottomWidth:15.2,run:et,pitch:ut,ridgeX:0,ridgeY:rt,ridgeZ:0,downslopeYaw:0,tileMat:N,ribMat:H,rafterMat:x,ribSpacing:.38}),t.kawaraSlope("ext",{bottomWidth:15.2,run:et,pitch:ut,ridgeX:0,ridgeY:rt,ridgeZ:0,downslopeYaw:Math.PI,tileMat:N,ribMat:H,rafterMat:x,ribSpacing:.38});const ct=rt-B-.06;t.gablePrism("ext",8.6,ct,.22,-6.8,B,0,d,{ry:Math.PI*.5}),t.gablePrism("ext",8.6,ct,.22,6.8,B,0,d,{ry:Math.PI*.5}),t.kawaraRidge("ext",-7.5,rt+.04,0,7.5,rt+.04,0,K,V,{scale:1.05,courses:2,oniStart:!0,oniEnd:!0});const Q=.46,j=3.85,C=B+j*Math.tan(Q)-.22;t.kawaraSlope("ext",{bottomWidth:6.2,run:j,pitch:Q,ridgeX:-3.6,ridgeY:C,ridgeZ:2.85,downslopeYaw:Math.PI*.5,tileMat:N,ribMat:H,rafterMat:x,ribSpacing:.36}),t.kawaraSlope("ext",{bottomWidth:6.2,run:j,pitch:Q,ridgeX:-3.6,ridgeY:C,ridgeZ:2.85,downslopeYaw:-Math.PI*.5,tileMat:N,ribMat:H,rafterMat:x,ribSpacing:.36});const R=C-B-.06;return t.gablePrism("ext",6.45,R,.22,-3.6,B,5,d),t.box("ext",1.45,.72,.14,-3.6,B+.62,5.1,E,{uvScale:0}),t.kawaraRidge("ext",-3.6,C+.04,-.2,-3.6,C+.04,5.95,K,V,{scale:.92,courses:2,oniStart:!1,oniEnd:!0}),t.kawaraSlope("ext",{bottomWidth:7.8,run:1.48,pitch:.34,ridgeX:3.2,ridgeY:Z+.1,ridgeZ:4.3,downslopeYaw:0,tileMat:N,ribMat:H,rafterMat:x,ribSpacing:.38}),t.kawaraSlope("ext",{bottomWidth:6.8,run:.95,pitch:.34,ridgeX:-3.6,ridgeY:Z+.06,ridgeZ:4.98,downslopeYaw:0,tileMat:N,ribMat:H,rafterMat:x,ribSpacing:.38}),t.build({id:"H08",name:"永井家（黒磯分校 教員宿舎＆補習教室二階館）",subtitle:"大黒板・教壇・児童机の補習教室・本棚階段・2Fサンルーム・青銅苔瓦丁字切妻",category:"house",builtYear:1889,abandonedYear:1985,stories:2,floorElevations:[G,Z],entryLocal:[1.35,0,8.8],entryLookLocalYaw:0})}function o2(i,e){const t=new Se(i),n=e.getMaterial("ishigaki_mossy",{roughness:.94,bumpScale:.08}),r=e.getMaterial("dressed_stone",{roughness:.91,bumpScale:.06}),o=e.getMaterial("white_plaster",{roughness:.92,bumpScale:.04,tint:16249576}),s=e.getMaterial("horizontal_wood_siding",{roughness:.89,bumpScale:.05}),a=e.getMaterial("dark_hardwood",{roughness:.86,bumpScale:.04}),l=e.getMaterial("warm_wood_plank",{roughness:.84,bumpScale:.04}),c=e.getMaterial("light_wood_grain",{roughness:.84,bumpScale:.03}),u=e.getMaterial("tatami_bordered",{roughness:.92,bumpScale:.04}),d=e.getMaterial("blue_bath_tile",{roughness:.42,metalness:.06,bumpScale:.03}),h=e.getMaterial("linen_fusuma",{roughness:.9,bumpScale:.02}),p=e.getMaterial("shoji_sliding_door",{roughness:.88,opacity:.9,transparent:!0}),x=e.getMaterial("window_frosted_wood",{roughness:.35,opacity:.45,transparent:!0}),g=e.getMaterial("retro_kitchen_unit",{roughness:.76,bumpScale:.03}),m=e.getMaterial("kitchen_cabinet",{roughness:.8,bumpScale:.03}),f=e.getMaterial("antique_tansu",{roughness:.78,bumpScale:.04}),_=e.getMaterial("wooden_dresser",{roughness:.82,bumpScale:.04}),v=e.getMaterial("full_bookcase",{roughness:.84,bumpScale:.04}),b=e.getMaterial("red_zabuton",{roughness:.92,bumpScale:.03}),P=e.getMaterial("vintage_rug_red",{roughness:.93,bumpScale:.03}),E=e.getMaterial("red_tin_roof",{roughness:.66,metalness:.16,bumpScale:.05,tint:14245962}),A=e.getMaterial("glazed_brown_brick",{roughness:.54,metalness:.18,bumpScale:.05,tint:11946552}),T=e.getMaterial("old_red_brick",{roughness:.64,metalness:.14,tint:9385512}),S=e.getMaterial("slate_roof_dark",{roughness:.76,metalness:.16,bumpScale:.05}),M=e.getMaterial("dark_slate",{roughness:.72,metalness:.2,bumpScale:.05}),I=e.getMaterial("matte_black_metal",{roughness:.6,metalness:.3,tint:7023650}),O=.5,k=3.55,U=6.55,D=9.3;t.box("ext",11.2,4.2,8.8,0,O-2.12,0,n),t.stoneSteps("ext",.2,7.15,4.25,-1.65,O,2.45,9,r),t.box("ext",.42,2.45,2.95,-1.25,-.8,5.7,n,{solid:!0}),t.box("ext",.42,2.45,2.95,1.65,-.8,5.7,n,{solid:!0});const w=k-O,y=O+w*.5;t.box("int",10.6,.1,8.2,0,O-.03,0,l),t.box("int",6.8,.04,4.4,.1,O+.03,1.4,u),t.box("int",2.8,.04,3.2,-3.7,O+.03,-2.35,d),t.floor(-5.2,5.2,-4.05,4.35,O+.04),t.box("ext",4.65,w,.22,-3.12,y,4.2,s,{solid:!0}),t.box("ext",2.05,.8,.22,.2,O+2.65,4.2,s,{solid:!0}),t.box("ext",4.25,w,.22,3.32,y,4.2,s,{solid:!0}),t.box("ext",1.05,2.2,.06,-1.25,O+1.1,4.04,p,{uvScale:0}),t.box("ext",5.8,w,.22,-2.55,y,-4.2,s,{solid:!0}),t.box("ext",2.4,.95,.22,1.55,O+.47,-4.2,s,{solid:!0}),t.box("ext",2.4,.72,.22,1.55,O+2.69,-4.2,s,{solid:!0}),t.box("ext",2.36,1.38,.06,1.55,O+1.64,-4.2,x,{uvScale:0}),t.box("ext",2.75,w,.22,4.08,y,-4.2,s,{solid:!0}),t.box("ext",.22,w,4.2,-5.4,y,-2.15,s,{solid:!0}),t.box("ext",.22,.88,2.4,-5.4,O+.44,1.15,s,{solid:!0}),t.box("ext",.22,.72,2.4,-5.4,O+2.69,1.15,s,{solid:!0}),t.box("ext",.06,1.45,2.36,-5.4,O+1.6,1.15,x,{uvScale:0}),t.box("ext",.22,w,1.95,-5.4,y,3.28,s,{solid:!0}),t.box("ext",.22,w,8.55,5.4,y,0,s,{solid:!0}),t.box("int",.14,w,3.4,-2.35,y,-2.4,d,{solid:!0}),t.box("int",1.75,w,.14,-4.45,y,-.75,d,{solid:!0}),t.box("int",1.35,.75,.14,-2.95,O+2.67,-.75,d,{solid:!0}),t.box("int",1.55,.65,1.05,-4.45,O+.34,-3.45,d,{solid:!0}),t.box("int",1.95,w,.12,-1.35,y,-.75,h,{solid:!0,uvScale:0}),t.box("int",1.95,.75,.12,.55,O+2.67,-.75,o,{solid:!0}),t.box("int",2,w,.12,2.5,y,-.75,h,{solid:!0,uvScale:0}),t.box("int",2.2,.18,.82,-3.9,O+.11,3.65,a,{solid:!0}),t.box("int",1.75,.38,1.05,-1.25,O+.22,1.35,a,{solid:!0}),t.box("int",.62,.07,.62,-1.25,O+.08,.45,b,{uvScale:0}),t.box("int",.62,.07,.62,-1.25,O+.08,2.25,b,{uvScale:0}),t.box("int",1.55,1.45,.56,2.45,O+.74,-.35,f,{solid:!0,uvScale:0}),t.box("int",2.1,.88,.66,2.2,O+.44,-3.72,g,{solid:!0,uvScale:0}),t.box("int",.62,1.82,1.25,4.92,O+.91,-2.4,m,{solid:!0,uvScale:0}),t.stairRun("int",{x0:4.35,z0:2.8,x1:4.35,z1:-1,y0:O+.04,y1:k+.04,width:1.18,steps:14,treadMat:l,stringerMat:a,railMat:a,railLeft:!0,railRight:!1,guardLeft:!0,guardRight:!1});const F=U-k,q=k+F*.5;t.box("int",8.95,.16,8.25,-.9,k-.06,0,l),t.box("int",1.78,.16,3.15,4.42,k-.06,-2.58,l),t.box("int",1.78,.16,1.35,4.42,k-.06,3.52,l),t.box("int",5.2,.04,5.4,-2.4,k+.03,.2,u),t.box("ext",1.35,.16,7.35,-6.02,k-.04,0,l);for(const V of[-3.2,-1.1,1.1,3.2])t.box("ext",.14,1.35,.14,-5.85,k-.62,V,a,{rz:-.78});t.kouranRailing("ext",-6.62,-3.62,-6.62,3.62,k,.96,a,.56),t.kouranRailing("ext",-6.62,-3.62,-5.4,-3.62,k,.96,a,.56),t.kouranRailing("ext",-6.62,3.62,-5.4,3.62,k,.96,a,.56),t.collider(-5.3,3.55,k-.16,k+.02,-4.1,4.1),t.collider(3.55,5.3,k-.16,k+.02,-4.1,-1.08),t.collider(3.55,5.3,k-.16,k+.02,2.92,4.1),t.floor(-6.55,3.55,-3.55,3.55,k+.04),t.floor(-5.25,3.55,-4.05,4.05,k+.04),t.floor(3.55,5.25,-4.05,-1,k+.04),t.floor(3.55,5.25,2.85,4.05,k+.04),t.box("int",.08,.92,3.95,3.56,k+.46,.92,a,{solid:!0}),t.box("int",1.72,.92,.08,4.42,k+.46,2.9,a,{solid:!0}),t.box("ext",3.4,F,.22,-3.75,q,4.2,o,{solid:!0}),t.box("ext",3.4,.85,.22,-.35,k+.42,4.2,o,{solid:!0}),t.box("ext",3.4,.65,.22,-.35,k+2.67,4.2,o,{solid:!0}),t.box("ext",3.36,1.5,.06,-.35,k+1.6,4.2,x,{uvScale:0}),t.box("ext",4.15,F,.22,3.4,q,4.2,o,{solid:!0}),t.box("ext",10.95,F,.22,0,q,-4.2,o,{solid:!0}),t.box("ext",.22,F,8.55,5.4,q,0,o,{solid:!0}),t.box("ext",.22,F,3.45,-5.4,q,-2.52,o,{solid:!0}),t.box("ext",.22,.72,2.05,-5.4,k+2.64,.2,o,{solid:!0}),t.box("ext",.22,F,3.05,-5.4,q,2.72,o,{solid:!0}),t.box("ext",.06,2.22,1.15,-5.24,k+1.12,-1.25,p,{uvScale:0});for(const V of[-5.42,5.42])for(const G of[-4.22,4.22])t.box("ext",.28,F+.08,.28,V,q,G,a);for(const V of[-2.05,1.35])t.box("ext",.16,F,.26,V,q,4.21,a),t.box("ext",.16,F,.26,V,q,-4.21,a);t.box("ext",11.12,.18,.28,0,k+.04,4.22,a),t.box("ext",11.12,.18,.28,0,k+.04,-4.22,a),t.box("ext",.28,.18,8.68,-5.42,k+.04,0,a),t.box("ext",.28,.18,8.68,5.42,k+.04,0,a),t.box("int",1.45,1.38,.54,-2.55,k+.72,-3.75,f,{solid:!0,uvScale:0}),t.box("int",1.45,.36,.92,-2.45,k+.22,.35,a,{solid:!0}),t.box("int",.6,.07,.6,-2.45,k+.07,-.45,b,{uvScale:0}),t.box("int",.6,.07,.6,-2.45,k+.07,1.15,b,{uvScale:0}),t.stairRun("int",{x0:2.65,z0:-2.65,x1:-1.15,z1:-2.65,y0:k+.04,y1:U+.04,width:1.15,steps:14,treadMat:l,stringerMat:a,railMat:a,railLeft:!0,railRight:!1,guardLeft:!0,guardRight:!1});const Y=D-U,X=U+Y*.5;t.box("int",8.35,.16,5.42,0,U-.06,.72,l),t.box("int",3.05,.16,1.55,-2.68,U-.06,-2.65,l),t.box("int",1.52,.16,1.55,3.45,U-.06,-2.65,l),t.box("int",3.8,.03,3.4,-.4,U+.03,.85,P),t.box("ext",1.32,.16,6.1,-4.82,U-.04,0,l),t.kouranRailing("ext",-5.42,-3.02,-5.42,3.02,U,.96,a,.56),t.kouranRailing("ext",-5.42,-3.02,-4.2,-3.02,U,.96,a,.56),t.kouranRailing("ext",-5.42,3.02,-4.2,3.02,U,.96,a,.56),t.collider(-4.2,4.2,U-.16,U+.02,-1.95,3.4),t.collider(-4.2,-1.22,U-.16,U+.02,-3.4,-1.95),t.collider(2.75,4.2,U-.16,U+.02,-3.4,-1.95),t.floor(-5.35,4.1,-1.95,2.95,U+.04),t.floor(-4.1,4.1,-1.95,3.3,U+.04),t.floor(-4.1,-1.15,-3.3,-1.9,U+.04),t.floor(2.75,4.1,-3.3,-1.9,U+.04),t.box("int",3.98,.92,.08,.78,U+.46,-1.95,a,{solid:!0}),t.box("int",.08,.92,1.42,2.76,U+.46,-2.66,a,{solid:!0}),t.box("ext",2.2,Y,.22,-3.1,X,3.4,o,{solid:!0}),t.box("ext",4,.8,.22,0,U+.4,3.4,o,{solid:!0}),t.box("ext",4,.58,.22,0,U+2.46,3.4,o,{solid:!0}),t.box("ext",3.96,1.38,.06,0,U+1.48,3.4,x,{uvScale:0}),t.box("ext",2.2,Y,.22,3.1,X,3.4,o,{solid:!0}),t.box("ext",8.55,Y,.22,0,X,-3.4,o,{solid:!0}),t.box("ext",.22,Y,6.95,4.2,X,0,o,{solid:!0}),t.box("ext",.22,Y,2.85,-4.2,X,-2.02,o,{solid:!0}),t.box("ext",.22,.62,1.65,-4.2,U+2.44,.2,o,{solid:!0}),t.box("ext",.22,Y,2.45,-4.2,X,2.22,o,{solid:!0});for(const V of[-4.22,4.22])for(const G of[-3.42,3.42])t.box("ext",.26,Y+.06,.26,V,X,G,a);for(const V of[-2,2])t.box("ext",.16,Y,.26,V,X,3.41,a),t.box("ext",.16,Y,.26,V,X,-3.41,a);t.box("ext",8.7,.16,.28,0,U+.04,3.42,a),t.box("ext",8.7,.16,.28,0,U+.04,-3.42,a),t.box("ext",.28,.16,7.08,-4.22,U+.04,0,a),t.box("ext",.28,.16,7.08,4.22,U+.04,0,a),t.box("int",8.3,.12,6.7,0,D-.04,0,c),t.collider(-4.15,4.15,D-.12,D+.1,-3.35,3.35),t.box("int",.52,1.85,2.2,3.78,U+.94,.35,v,{solid:!0,uvScale:0}),t.box("int",1.45,.8,.78,1.35,U+.42,.65,a,{solid:!0}),t.box("int",1.25,1.15,.54,1.55,U+.6,2.95,_,{solid:!0,uvScale:0}),t.kawaraSlope("ext",{bottomWidth:11.4,run:1.25,pitch:.36,ridgeX:0,ridgeY:k+.1,ridgeZ:4.25,downslopeYaw:0,tileMat:S,ribMat:M,eaveMat:I,rafterMat:a,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:8.6,bottomWidth:12.2,run:1.75,pitch:.42,ridgeX:0,ridgeY:U+.35,ridgeZ:3.4,downslopeYaw:0,tileMat:E,ribMat:A,eaveMat:T,rafterMat:a,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:8.6,bottomWidth:12.2,run:1.75,pitch:.42,ridgeX:0,ridgeY:U+.35,ridgeZ:-3.4,downslopeYaw:Math.PI,tileMat:E,ribMat:A,eaveMat:T,rafterMat:a,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:6.9,bottomWidth:10.4,run:1.95,pitch:.4,ridgeX:4.2,ridgeY:U+.35,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:E,ribMat:A,eaveMat:T,rafterMat:a,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:6.9,bottomWidth:10.4,run:2.35,pitch:.36,ridgeX:-4.2,ridgeY:U+.42,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:E,ribMat:A,eaveMat:T,rafterMat:a,ribSpacing:.38});const L=.48,$=4.65,N=D-.14+$*Math.tan(L),H=D+1.05;t.kawaraSlope("ext",{topWidth:5.6,bottomWidth:11.4,run:$,pitch:L,ridgeX:0,ridgeY:N,ridgeZ:0,downslopeYaw:0,tileMat:E,ribMat:A,eaveMat:T,rafterMat:a,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:5.6,bottomWidth:11.4,run:$,pitch:L,ridgeX:0,ridgeY:N,ridgeZ:0,downslopeYaw:Math.PI,tileMat:E,ribMat:A,eaveMat:T,rafterMat:a,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:4.5,bottomWidth:9.3,run:2.95,pitch:L,ridgeX:2.8,ridgeY:H+.12,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:E,ribMat:A,eaveMat:T,rafterMat:a,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:4.5,bottomWidth:9.3,run:2.95,pitch:L,ridgeX:-2.8,ridgeY:H+.12,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:E,ribMat:A,eaveMat:T,rafterMat:a,ribSpacing:.38}),t.gablePrism("ext",4.6,N-H,.22,2.75,H,0,o,{ry:Math.PI*.5}),t.gablePrism("ext",4.6,N-H,.22,-2.75,H,0,o,{ry:Math.PI*.5});const K=D-.12;return t.kawaraRidge("ext",-2.8,H+.12,2.25,-5.65,K,4.6,T,I,{scale:.72,oniEnd:!0}),t.kawaraRidge("ext",2.8,H+.12,2.25,5.65,K,4.6,T,I,{scale:.72,oniEnd:!0}),t.kawaraRidge("ext",-2.8,H+.12,-2.25,-5.65,K,-4.6,T,I,{scale:.72,oniEnd:!0}),t.kawaraRidge("ext",2.8,H+.12,-2.25,5.65,K,-4.6,T,I,{scale:.72,oniEnd:!0}),t.box("ext",3.4,.62,1.15,0,N+.16,0,o),t.kawaraSlope("ext",{bottomWidth:4.1,run:1.05,pitch:.44,ridgeX:0,ridgeY:N+.92,ridgeZ:0,downslopeYaw:0,tileMat:E,ribMat:A,eaveMat:T,rafterMat:a,ribSpacing:.34}),t.kawaraSlope("ext",{bottomWidth:4.1,run:1.05,pitch:.44,ridgeX:0,ridgeY:N+.92,ridgeZ:0,downslopeYaw:Math.PI,tileMat:E,ribMat:A,eaveMat:T,rafterMat:a,ribSpacing:.34}),t.kawaraRidge("ext",-2.05,N+.96,0,2.05,N+.96,0,T,I,{scale:1.05,oniStart:!0,oniEnd:!0,courses:2}),t.build({id:i.id,name:"森本家（見晴らし坂の赤瓦三階名家）",subtitle:"明治21年築・石州赤瓦三重入母屋＆越屋根・2F/3F見晴らし縁側・青タイル風呂・三階建",category:"house",builtYear:1888,abandonedYear:1985,stories:3,floorElevations:[O+.04,k+.04,U+.04],entryLocal:[.2,-1.5,8.2]})}function s2(i,e){const t=new Se(i),n=e.getMaterial("dressed_stone",{roughness:.91,bumpScale:.06}),r=e.getMaterial("concrete_steps",{roughness:.9,bumpScale:.05}),o=e.getMaterial("pale_brick",{roughness:.9,bumpScale:.06}),s=e.getMaterial("cream_plaster",{roughness:.9,bumpScale:.03,tint:16183518}),a=e.getMaterial("vertical_cedar_panel",{roughness:.88,bumpScale:.05}),l=e.getMaterial("dark_hardwood",{roughness:.84,bumpScale:.04}),c=e.getMaterial("white_plaster",{roughness:.86,bumpScale:.03}),u=e.getMaterial("terrazzo_floor",{roughness:.55,bumpScale:.02}),d=e.getMaterial("white_bath_tile",{roughness:.42,metalness:.05,bumpScale:.02}),h=e.getMaterial("herringbone_wood",{roughness:.78,bumpScale:.03}),p=e.getMaterial("oak_flooring",{roughness:.82,bumpScale:.03}),x=e.getMaterial("tatami_bordered",{roughness:.92,bumpScale:.04}),g=e.getMaterial("frosted_grid_window",{roughness:.34,opacity:.46,transparent:!0}),m=e.getMaterial("glass_double_door",{roughness:.38,opacity:.65,transparent:!0}),f=e.getMaterial("enamel_sign_blue",{roughness:.38,metalness:.25}),_=e.getMaterial("mailboxes_metal",{roughness:.6,metalness:.45}),v=e.getMaterial("office_counter",{roughness:.8,bumpScale:.03}),b=e.getMaterial("vanity_sink",{roughness:.68,bumpScale:.03}),P=e.getMaterial("shop_shelves_jars",{roughness:.72,bumpScale:.04}),E=e.getMaterial("file_cabinet",{roughness:.65,metalness:.35}),A=e.getMaterial("bulletin_board",{roughness:.88,bumpScale:.02}),T=e.getMaterial("retro_kitchen_unit",{roughness:.76,bumpScale:.03}),S=e.getMaterial("wooden_vanity",{roughness:.82,bumpScale:.03}),M=e.getMaterial("antique_tansu",{roughness:.78,bumpScale:.04}),I=e.getMaterial("floral_futon",{roughness:.93,bumpScale:.03}),O=e.getMaterial("botanical_curtain",{roughness:.9,opacity:.86,transparent:!0}),k=e.getMaterial("full_bookcase",{roughness:.84,bumpScale:.04}),U=e.getMaterial("filled_bookshelf",{roughness:.84,bumpScale:.04}),D=e.getMaterial("chalkboard",{roughness:.88,bumpScale:.02}),w=e.getMaterial("slate_roof_dark",{roughness:.74,metalness:.16,bumpScale:.06,tint:13292252}),y=e.getMaterial("dark_slate",{roughness:.7,metalness:.2,bumpScale:.05}),F=e.getMaterial("dark_iron_plate",{roughness:.66,metalness:.26}),q=e.getMaterial("matte_black_metal",{roughness:.58,metalness:.34}),Y=.45,X=3.55,L=6.55,$=9.35;t.box("ext",10.5,1,8.3,0,Y-.52,0,n),t.box("ext",3.3,.95,1.55,1.2,Y-.48,4.72,n),t.stoneSteps("ext",1.2,6.45,5.45,-.35,Y,2.25,4,r),t.floor(-.4,2.8,3.9,5.5,Y+.04),t.cyl("ext",.15,.17,2.85,10,-.15,Y+1.42,5.25,c),t.cyl("ext",.15,.17,2.85,10,2.55,Y+1.42,5.25,c),t.box("ext",3.25,.32,.28,1.2,Y+2.94,5.25,c),t.box("ext",.65,1.35,.05,-.75,Y+1.85,4.14,f,{uvScale:0}),t.box("ext",.62,.72,.18,3.25,Y+1.45,4.18,_,{uvScale:0});const N=X-Y,H=Y+N*.5;t.box("int",5.2,.08,7.8,2.45,Y-.04,0,u),t.box("int",4.9,.08,7.8,-2.55,Y-.04,0,d),t.floor(-4.95,4.95,-3.85,4.15,Y+.04),t.box("ext",5.55,1.1,.24,-2.32,Y+.55,4,o,{solid:!0}),t.box("ext",1.65,N-1.1,.24,-4.28,Y+2.1,4,s,{solid:!0}),t.box("ext",1.8,.58,.24,-2.55,Y+2.81,4,s,{solid:!0}),t.box("ext",1.76,1.42,.06,-2.55,Y+1.81,4,g,{uvScale:0}),t.box("ext",2.1,N-1.1,.24,-.6,Y+2.1,4,s,{solid:!0}),t.box("ext",1.54,.8,.24,1.2,Y+2.7,4,s,{solid:!0}),t.box("ext",.82,2.25,.06,.1,Y+1.12,3.84,m,{uvScale:0}),t.box("ext",3.2,1.1,.24,3.55,Y+.55,4,o,{solid:!0}),t.box("ext",3.2,N-1.1,.24,3.55,Y+2.1,4,s,{solid:!0}),t.box("ext",10.35,1.1,.24,0,Y+.55,-4,o,{solid:!0}),t.box("ext",3.2,N-1.1,.24,-3.55,Y+2.1,-4,s,{solid:!0}),t.box("ext",2.4,.55,.24,-.75,Y+2.82,-4,s,{solid:!0}),t.box("ext",2.36,1.45,.06,-.75,Y+1.82,-4,g,{uvScale:0}),t.box("ext",4.75,N-1.1,.24,2.78,Y+2.1,-4,s,{solid:!0}),t.box("ext",.24,1.1,8.15,-5.1,Y+.55,0,o,{solid:!0}),t.box("ext",.24,N-1.1,2.2,-5.1,Y+2.1,-2.95,s,{solid:!0}),t.box("ext",.24,.58,1.5,-5.1,Y+2.81,-1.1,s,{solid:!0}),t.box("ext",.06,1.42,1.46,-5.1,Y+1.81,-1.1,g,{uvScale:0}),t.box("ext",.24,N-1.1,1.5,-5.1,Y+2.1,.4,s,{solid:!0}),t.box("ext",.24,.58,1.5,-5.1,Y+2.81,1.9,s,{solid:!0}),t.box("ext",.06,1.42,1.46,-5.1,Y+1.81,1.9,g,{uvScale:0}),t.box("ext",.24,N-1.1,1.45,-5.1,Y+2.1,3.35,s,{solid:!0}),t.box("ext",.24,1.1,8.15,5.1,Y+.55,0,o,{solid:!0}),t.box("ext",.24,N-1.1,8.15,5.1,Y+2.1,0,s,{solid:!0}),t.box("int",.14,N,4.5,-.25,H,-1.65,d,{solid:!0}),t.box("int",.14,.78,1.55,-.25,Y+2.71,1.35,s,{solid:!0}),t.box("int",.14,N,1.95,-.25,H,3.05,d,{solid:!0}),t.box("int",1.85,.96,.65,1.35,Y+.48,-.65,v,{solid:!0,uvScale:0}),t.box("int",1.75,.46,.48,2.55,Y+.23,3.42,l,{solid:!0}),t.box("int",1.35,.92,.05,.02,Y+1.65,2.85,A,{uvScale:0}),t.box("int",.85,.82,1.95,-2.65,Y+.41,-1.45,c,{solid:!0}),t.box("int",1.55,1.82,.52,-2.55,Y+.91,-3.55,P,{solid:!0,uvScale:0}),t.box("int",.88,.88,.56,-4.45,Y+.44,-2.75,b,{solid:!0,uvScale:0}),t.box("int",.62,1.45,.58,-4.45,Y+.72,2.85,E,{solid:!0,uvScale:0}),t.stairRun("int",{x0:3.95,z0:2.05,x1:3.95,z1:-1.95,y0:Y+.04,y1:X+.04,width:1.18,steps:14,treadMat:p,stringerMat:l,railMat:l,railLeft:!0,railRight:!1,guardLeft:!0,guardRight:!1});const K=L-X,V=X+K*.5;t.box("int",8.2,.16,7.85,-.92,X-.06,0,h),t.box("int",1.92,.16,2.02,4.05,X-.06,-2.96,p),t.box("int",1.92,.16,1.85,4.05,X-.06,3.05,p),t.box("int",3.4,.04,4.6,1.25,X+.03,1.45,x),t.collider(-5,3.15,X-.16,X+.02,-3.9,3.9),t.collider(3.15,5,X-.16,X+.02,-3.9,-2.02),t.collider(3.15,5,X-.16,X+.02,2.18,3.9),t.floor(-4.95,3.15,-3.85,3.85,X+.04),t.floor(3.15,4.95,-3.85,-1.95,X+.04),t.floor(3.15,4.95,2.1,3.85,X+.04),t.box("int",.08,.92,4.18,3.16,X+.46,.08,l,{solid:!0}),t.box("int",1.85,.92,.08,4.05,X+.46,2.16,l,{solid:!0}),t.box("ext",1.6,K,.22,-4.3,V,4,a,{solid:!0});for(const ct of[-2.75,0,2.75])t.box("ext",1.5,.85,.22,ct,X+.42,4,a,{solid:!0}),t.box("ext",1.5,.65,.22,ct,X+2.67,4,a,{solid:!0}),t.box("ext",1.46,1.5,.06,ct,X+1.6,4,g,{uvScale:0});t.box("ext",1.25,K,.22,-1.38,V,4,a,{solid:!0}),t.box("ext",1.25,K,.22,1.38,V,4,a,{solid:!0}),t.box("ext",1.65,K,.22,4.32,V,4,a,{solid:!0}),t.box("ext",10.35,K,.22,0,V,-4,a,{solid:!0}),t.box("ext",.22,K,2.6,-5.1,V,-2.7,a,{solid:!0}),t.box("ext",.22,.85,2.8,-5.1,X+.42,0,a,{solid:!0}),t.box("ext",.22,.65,2.8,-5.1,X+2.67,0,a,{solid:!0}),t.box("ext",.06,1.5,2.76,-5.1,X+1.6,0,g,{uvScale:0}),t.box("ext",.22,K,2.6,-5.1,V,2.7,a,{solid:!0}),t.box("ext",.22,K,8.15,5.1,V,0,a,{solid:!0}),t.box("int",1.65,.76,.92,-2.55,X+.38,1.15,l,{solid:!0}),t.box("int",.95,1.32,.5,-4.45,X+.66,2.45,S,{solid:!0,uvScale:0}),t.box("int",.05,1.55,.65,-4.92,X+1.6,-1.05,O,{uvScale:0}),t.box("int",1.85,.88,.62,-3.75,X+.44,-3.45,T,{solid:!0,uvScale:0}),t.box("int",1.45,1.38,.54,1.35,X+.72,3.45,M,{solid:!0,uvScale:0}),t.box("int",1.45,.14,1.95,1.25,X+.11,.95,I,{uvScale:0}),t.stairRun("int",{x0:2.05,z0:-2.65,x1:-1.95,z1:-2.65,y0:X+.04,y1:L+.04,width:1.15,steps:14,treadMat:p,stringerMat:l,railMat:l,railLeft:!0,railRight:!1,guardLeft:!0,guardRight:!1});const G=$-L,Z=L+G*.5;t.box("int",10,.16,5.85,0,L-.06,.98,p),t.box("int",2.98,.16,1.95,-3.52,L-.06,-2.92,p),t.box("int",2.88,.16,1.95,3.55,L-.06,-2.92,p),t.collider(-5,5,L-.16,L+.02,-1.95,3.9),t.collider(-5,-2.05,L-.16,L+.02,-3.9,-1.95),t.collider(2.15,5,L-.16,L+.02,-3.9,-1.95),t.floor(-4.95,4.95,-1.95,3.85,L+.04),t.floor(-4.95,-1.95,-3.85,-1.9,L+.04),t.floor(2.15,4.95,-3.85,-1.9,L+.04),t.box("int",4.22,.92,.08,.05,L+.46,-1.96,l,{solid:!0}),t.box("int",.08,.92,1.92,2.15,L+.46,-2.92,l,{solid:!0}),t.box("ext",2.6,G,.22,-3.8,Z,4,s,{solid:!0}),t.box("ext",5,.82,.22,0,L+.41,4,s,{solid:!0}),t.box("ext",5,.58,.22,0,L+2.51,4,s,{solid:!0}),t.box("ext",4.96,1.4,.06,0,L+1.52,4,g,{uvScale:0}),t.box("ext",2.6,G,.22,3.8,Z,4,s,{solid:!0}),t.box("ext",10.35,G,.22,0,Z,-4,s,{solid:!0}),t.box("ext",.22,G,8.15,-5.1,Z,0,s,{solid:!0}),t.box("ext",.22,G,8.15,5.1,Z,0,s,{solid:!0});for(const ct of[-5.12,5.12])for(const Q of[-4.02,4.02])t.box("ext",.28,$-Y,.28,ct,(Y+$)*.5,Q,l);t.box("int",10,.12,7.8,0,$-.04,0,s),t.collider(-5,5,$-.12,$+.1,-3.9,3.9),t.box("int",.52,1.95,2.4,-4.65,L+.98,.5,k,{solid:!0,uvScale:0}),t.box("int",.52,1.95,2.4,4.65,L+.98,.5,U,{solid:!0,uvScale:0}),t.box("int",2.4,1.32,.06,0,L+1.65,-3.82,D,{uvScale:0}),t.box("int",1.85,.8,.92,0,L+.42,.95,l,{solid:!0}),t.box("int",.64,1.48,.58,3.85,L+.74,3.35,E,{solid:!0,uvScale:0});const B=.48,J=1.95,lt=X+.02+J*Math.tan(B);t.kawaraSlope("ext",{bottomWidth:2,run:J,pitch:B,ridgeX:1.2,ridgeY:lt,ridgeZ:4.82,downslopeYaw:Math.PI*.5,tileMat:w,ribMat:y,eaveMat:F,rafterMat:l,ribSpacing:.34}),t.kawaraSlope("ext",{bottomWidth:2,run:J,pitch:B,ridgeX:1.2,ridgeY:lt,ridgeZ:4.82,downslopeYaw:-Math.PI*.5,tileMat:w,ribMat:y,eaveMat:F,rafterMat:l,ribSpacing:.34}),t.gablePrism("ext",3.4,lt-X+.08,.22,1.2,X-.06,5.25,c),t.kawaraRidge("ext",1.2,lt+.04,3.95,1.2,lt+.04,5.82,F,q,{scale:.8,oniStart:!1,oniEnd:!0,courses:2});const ht=.48,z=5.15,ut=$-.14+z*Math.tan(ht),et=$+1.15;t.kawaraSlope("ext",{topWidth:6.8,bottomWidth:12.6,run:z,pitch:ht,ridgeX:0,ridgeY:ut,ridgeZ:0,downslopeYaw:0,tileMat:w,ribMat:y,eaveMat:F,rafterMat:l,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:6.8,bottomWidth:12.6,run:z,pitch:ht,ridgeX:0,ridgeY:ut,ridgeZ:0,downslopeYaw:Math.PI,tileMat:w,ribMat:y,eaveMat:F,rafterMat:l,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:5,bottomWidth:10.3,run:2.95,pitch:ht,ridgeX:3.4,ridgeY:et+.12,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:w,ribMat:y,eaveMat:F,rafterMat:l,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:5,bottomWidth:10.3,run:2.95,pitch:ht,ridgeX:-3.4,ridgeY:et+.12,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:w,ribMat:y,eaveMat:F,rafterMat:l,ribSpacing:.38}),t.gablePrism("ext",5,ut-et,.22,3.35,et,0,s,{ry:Math.PI*.5}),t.gablePrism("ext",5,ut-et,.22,-3.35,et,0,s,{ry:Math.PI*.5}),t.kawaraRidge("ext",-3.45,ut+.05,0,3.45,ut+.05,0,F,q,{scale:1.15,oniStart:!0,oniEnd:!0,courses:3});const rt=$-.12;return t.kawaraRidge("ext",-3.4,et+.12,2.5,-6.25,rt,5.1,F,q,{scale:.74,oniEnd:!0}),t.kawaraRidge("ext",3.4,et+.12,2.5,6.25,rt,5.1,F,q,{scale:.74,oniEnd:!0}),t.kawaraRidge("ext",-3.4,et+.12,-2.5,-6.25,rt,-5.1,F,q,{scale:.74,oniEnd:!0}),t.kawaraRidge("ext",3.4,et+.12,-2.5,6.25,rt,-5.1,F,q,{scale:.74,oniEnd:!0}),t.build({id:i.id,name:"白井医院（明治擬洋風三階木造診療所）",subtitle:"明治25年築・淡煉瓦腰壁＆青琺瑯看板・白タイル診察室・3F医学書庫・三階建",category:"house",builtYear:1892,abandonedYear:1985,stories:3,floorElevations:[Y+.04,X+.04,L+.04],entryLocal:[1.2,0,7.5]})}function a2(i,e){const t=new Se(i),n=e.getMaterial("ishigaki_cut",{roughness:.92,bumpScale:.07}),r=e.getMaterial("dressed_stone",{roughness:.9,bumpScale:.06}),o=e.getMaterial("charred_cedar",{roughness:.9,bumpScale:.05}),s=e.getMaterial("white_plaster",{roughness:.92,bumpScale:.04,tint:16249834}),a=e.getMaterial("washi_plaster",{roughness:.91,bumpScale:.03}),l=e.getMaterial("dark_hardwood",{roughness:.84,bumpScale:.04}),c=e.getMaterial("warm_wood_plank",{roughness:.83,bumpScale:.04}),u=e.getMaterial("oak_flooring",{roughness:.82,bumpScale:.03}),d=e.getMaterial("cobblestone",{roughness:.92,bumpScale:.06}),h=e.getMaterial("tatami_bordered",{roughness:.92,bumpScale:.04}),p=e.getMaterial("tatami_green_border",{roughness:.92,bumpScale:.04}),x=e.getMaterial("linen_fusuma",{roughness:.9,bumpScale:.02}),g=e.getMaterial("shoji_sliding_door",{roughness:.88,opacity:.9,transparent:!0}),m=e.getMaterial("carved_wood_lattice",{roughness:.86,bumpScale:.05}),f=e.getMaterial("window_frosted_wood",{roughness:.35,opacity:.44,transparent:!0}),_=e.getMaterial("window_frosted_wood",{roughness:.22,opacity:.2,transparent:!0,tint:14477554}),v=e.getMaterial("shrine_facade",{roughness:.8,bumpScale:.04}),b=e.getMaterial("antique_tansu",{roughness:.78,bumpScale:.04}),P=e.getMaterial("full_bookcase",{roughness:.84,bumpScale:.04}),E=e.getMaterial("office_counter",{roughness:.82,bumpScale:.03}),A=e.getMaterial("kitchen_cabinet",{roughness:.82,bumpScale:.03}),T=e.getMaterial("storage_rack",{roughness:.88,bumpScale:.04}),S=e.getMaterial("red_zabuton",{roughness:.92,bumpScale:.03}),M=e.getMaterial("vintage_rug_red",{roughness:.93,bumpScale:.03}),I=e.getMaterial("island_map_sign",{roughness:.82,bumpScale:.02}),O=e.getMaterial("matte_black_metal",{roughness:.58,metalness:.65}),k=e.getMaterial("slate_roof_dark",{roughness:.72,metalness:.18,bumpScale:.06,tint:13161180}),U=e.getMaterial("dark_slate",{roughness:.68,metalness:.22,bumpScale:.05,tint:11713736}),D=e.getMaterial("dark_iron_plate",{roughness:.64,metalness:.28,tint:10135220}),w=e.getMaterial("matte_black_metal",{roughness:.56,metalness:.36,tint:8556188}),y=.55,F=3.75,q=6.85,Y=9.85,X=12.4;t.box("ext",13,1.35,10,0,y-.68,0,n),t.box("ext",3.8,1.25,1.65,1,y-.64,5.55,n),t.stoneSteps("ext",1,7.45,6.3,-.35,y,2.8,5,r),t.floor(-.8,2.8,4.7,6.4,y+.04),t.box("ext",.22,3,.22,-.65,y+1.5,6.18,l),t.box("ext",.22,3,.22,2.65,y+1.5,6.18,l),t.box("ext",3.65,.28,.26,1,y+3.02,6.18,l);const L=F-y,$=y+L*.5;t.box("int",12.4,.1,9.4,0,y-.03,0,c),t.box("int",3.8,.06,9.2,-4.3,y+.01,0,d),t.box("int",7.8,.04,6.4,2,y+.03,-1.2,h),t.floor(-6.15,6.15,-4.65,4.85,y+.04),t.box("ext",6.25,1.35,.26,-3.22,y+.68,4.8,o,{solid:!0}),t.box("ext",6.25,L-1.35,.26,-3.22,y+2.28,4.8,s,{solid:!0}),t.box("ext",2.24,.85,.26,1,y+2.78,4.8,s,{solid:!0}),t.box("ext",1.15,2.3,.06,-.55,y+1.15,4.62,g,{uvScale:0}),t.box("ext",4.25,1.35,.26,4.22,y+.68,4.8,o,{solid:!0}),t.box("ext",4.25,L-1.35,.26,4.22,y+2.28,4.8,s,{solid:!0}),t.box("ext",12.75,1.15,.26,0,y+.58,-4.8,o,{solid:!0}),t.box("ext",4.8,L-1.15,.26,-3.95,y+2.18,-4.8,s,{solid:!0}),t.box("ext",3.4,.62,.26,.15,y+2.89,-4.8,s,{solid:!0}),t.box("ext",3.36,1.44,.06,.15,y+1.86,-4.8,f,{uvScale:0}),t.box("ext",4.6,L-1.15,.26,4.15,y+2.18,-4.8,s,{solid:!0}),t.box("ext",.26,1.35,9.75,-6.3,y+.68,0,o,{solid:!0}),t.box("ext",.26,L-1.35,9.75,-6.3,y+2.28,0,s,{solid:!0}),t.box("ext",.26,1.35,9.75,6.3,y+.68,0,o,{solid:!0}),t.box("ext",.26,L-1.35,2.8,6.3,y+2.28,-3.45,s,{solid:!0}),t.box("ext",.26,.65,3,6.3,y+2.88,-.55,s,{solid:!0}),t.box("ext",.06,1.25,2.96,6.3,y+1.95,-.55,m,{uvScale:0}),t.box("ext",.26,L-1.15,3.9,6.3,y+2.18,2.9,s,{solid:!0}),t.box("int",.16,L,5.65,-2.35,$,-1.9,a,{solid:!0}),t.box("int",.16,.8,1.75,-2.35,y+2.8,1.75,a,{solid:!0}),t.box("int",.16,L,2.15,-2.35,$,3.65,a,{solid:!0}),t.box("int",2.8,.22,.92,4.4,y+.12,-4.18,l,{solid:!0}),t.box("int",1.55,1.95,.62,5.62,y+1,-3.05,v,{solid:!0,ry:-Math.PI*.5,uvScale:0}),t.box("int",2.4,.38,1.15,1.6,y+.22,-1.35,l,{solid:!0});for(const Q of[.85,1.6,2.35])t.box("int",.62,.07,.62,Q,y+.08,-2.35,S,{uvScale:0}),t.box("int",.62,.07,.62,Q,y+.08,-.35,S,{uvScale:0});t.box("int",1.85,.85,1.15,-4.85,y+.42,-3.85,n,{solid:!0}),t.cyl("int",.34,.3,.26,12,-4.85,y+.96,-3.85,O),t.box("int",.64,1.85,1.45,-5.85,y+.92,-1.65,A,{solid:!0,uvScale:0}),t.box("int",.64,1.85,1.55,-5.85,y+.92,2.85,T,{solid:!0,uvScale:0}),t.stairRun("int",{x0:-4.25,z0:2.65,x1:-4.25,z1:-1.35,y0:y+.04,y1:F+.04,width:1.24,steps:15,treadMat:l,stringerMat:l,railMat:c,railLeft:!1,railRight:!0,closedRisers:!0,guardLeft:!1,guardRight:!0});const N=q-F,H=F+N*.5;t.box("int",8.95,.16,7.95,.95,F-.06,0,c),t.box("int",1.95,.16,2.62,-4.4,F-.06,-2.68,c),t.box("int",1.95,.16,1.3,-4.4,F-.06,3.35,c),t.box("int",5.2,.04,6.8,2.5,F+.03,0,h),t.box("int",2.8,.03,3.4,-1.6,F+.03,-1.6,M),t.box("ext",9.75,.16,1.12,0,F-.04,4.54,c),t.kouranRailing("ext",-4.85,5.05,4.85,5.05,F,.94,l,.56),t.kouranRailing("ext",-4.85,4,-4.85,5.05,F,.94,l,.56),t.kouranRailing("ext",4.85,4,4.85,5.05,F,.94,l,.56),t.collider(-3.45,5.4,F-.16,F+.02,-4,4),t.collider(-5.4,-3.45,F-.16,F+.02,-4,-1.42),t.collider(-5.4,-3.45,F-.16,F+.02,2.78,4),t.floor(-3.45,5.3,-3.9,3.9,F+.04),t.floor(-5.3,-3.45,-3.9,-1.35,F+.04),t.floor(-5.3,-3.45,2.7,3.9,F+.04),t.floor(-4.75,4.75,3.9,4.98,F+.04),t.box("int",.08,.92,4.2,-3.46,F+.46,.68,l,{solid:!0}),t.box("int",1.85,.92,.08,-4.38,F+.46,2.76,l,{solid:!0}),t.box("ext",4.7,N,.22,-3.1,H,4,s,{solid:!0}),t.box("ext",1.65,.78,.22,0,F+2.71,4,s,{solid:!0}),t.box("ext",4.7,N,.22,3.1,H,4,s,{solid:!0}),t.box("ext",10.95,N,.22,0,H,-4,s,{solid:!0}),t.box("ext",.22,N,8.15,-5.4,H,0,s,{solid:!0}),t.box("ext",.22,N,8.15,5.4,H,0,s,{solid:!0});for(const Q of[-5.42,-2.75,-.84,.84,2.75,5.42])t.box("ext",.18,N+.08,.28,Q,H,4.02,l);for(const Q of[-5.42,-2.7,0,2.7,5.42])t.box("ext",.18,N+.08,.28,Q,H,-4.02,l);t.box("int",.12,N,3.4,-.05,H,-2.25,x,{solid:!0,uvScale:0}),t.box("int",2.2,1.95,.52,-1.6,F+.98,-3.62,P,{solid:!0,uvScale:0}),t.box("int",1.75,.84,.8,-1.6,F+.44,-1.45,E,{solid:!0,uvScale:0}),t.box("int",1.45,1.42,.54,1.45,F+.72,-3.62,b,{solid:!0,uvScale:0}),t.stairRun("int",{x0:3.55,z0:-1.85,x1:3.55,z1:1.95,y0:F+.04,y1:q+.04,width:1.18,steps:14,treadMat:l,stringerMat:l,railMat:c,railLeft:!0,railRight:!1,guardLeft:!0,guardRight:!1});const K=Y-q,V=q+K*.5;t.box("int",7.2,.16,6.55,-.72,q-.06,0,p),t.box("int",1.48,.16,1.4,3.55,q-.06,-2.62,u),t.box("int",1.48,.16,1.35,3.55,q-.06,2.65,u),t.box("ext",8.1,.14,.9,0,q-.04,3.74,c),t.kouranRailing("ext",-4.02,4.16,4.02,4.16,q,.94,l,.54),t.kouranRailing("ext",-4.02,3.3,-4.02,4.16,q,.94,l,.54),t.kouranRailing("ext",4.02,3.3,4.02,4.16,q,.94,l,.54),t.collider(-4.3,2.85,q-.16,q+.02,-3.3,3.3),t.collider(2.85,4.3,q-.16,q+.02,-3.3,-1.98),t.collider(2.85,4.3,q-.16,q+.02,2.04,3.3),t.floor(-4.2,2.85,-3.2,3.2,q+.04),t.floor(2.85,4.2,-3.2,-1.9,q+.04),t.floor(2.85,4.2,1.98,3.2,q+.04),t.floor(-3.95,3.95,3.2,4.08,q+.04),t.box("int",.08,.92,4.02,2.86,q+.46,.04,l,{solid:!0}),t.box("int",1.4,.92,.08,3.55,q+.46,-1.96,l,{solid:!0}),t.box("ext",3.6,K,.22,-2.55,V,3.3,s,{solid:!0}),t.box("ext",1.55,.72,.22,0,q+2.64,3.3,s,{solid:!0}),t.box("ext",3.6,K,.22,2.55,V,3.3,s,{solid:!0}),t.box("ext",8.75,K,.22,0,V,-3.3,s,{solid:!0}),t.box("ext",.22,K,2,-4.3,V,-2.35,s,{solid:!0}),t.box("ext",.22,.8,2.8,-4.3,q+.4,.05,s,{solid:!0}),t.box("ext",.22,.62,2.8,-4.3,q+2.69,.05,s,{solid:!0}),t.box("ext",.06,1.5,2.76,-4.3,q+1.58,.05,f,{uvScale:0}),t.box("ext",.22,K,2,-4.3,V,2.45,s,{solid:!0}),t.box("ext",.22,K,6.75,4.3,V,0,s,{solid:!0}),t.box("int",2.2,.36,1.05,-.95,q+.22,.65,l,{solid:!0});for(const Q of[-1.65,-.95,-.25])t.box("int",.58,.07,.58,Q,q+.08,1.55,S,{uvScale:0}),t.box("int",.58,.07,.58,Q,q+.08,-.25,S,{uvScale:0});t.box("int",1.45,1.42,.54,-3.85,q+.72,-1.85,b,{solid:!0,ry:Math.PI*.5,uvScale:0}),t.stairRun("int",{x0:1.75,z0:-1.75,x1:-1.55,z1:-1.75,y0:q+.04,y1:Y+.04,width:1.12,steps:14,treadMat:u,stringerMat:l,railMat:l,railLeft:!0,railRight:!1,guardLeft:!0,guardRight:!1});const G=X-Y,Z=Y+G*.5;t.box("int",5.35,.16,3.6,0,Y-.06,.72,u),t.box("int",1.15,.16,1.45,-2.15,Y-.06,-1.78,u),t.box("int",.95,.16,1.45,2.25,Y-.06,-1.78,u),t.collider(-4.3,4.3,Y-.16,Y+.02,-1.08,3.3),t.collider(-4.3,-1.62,Y-.16,Y+.02,-3.3,-1.08),t.collider(1.82,4.3,Y-.16,Y+.02,-3.3,-1.08),t.floor(-2.62,2.62,-1.08,2.42,Y+.04),t.floor(-2.62,-1.55,-2.42,-1.05,Y+.04),t.floor(1.8,2.62,-2.42,-1.05,Y+.04),t.box("int",3.45,.9,.08,.1,Y+.45,-1.1,l,{solid:!0}),t.box("int",.08,.9,1.38,1.82,Y+.45,-1.78,l,{solid:!0});for(const Q of[-2.5,2.5]){t.box("ext",5.55,.86,.2,0,Y+.43,Q,s,{solid:!0}),t.box("ext",5.55,.42,.2,0,Y+2.34,Q,l,{solid:!0});for(const j of[-2.7,-.9,.9,2.7])t.box("ext",.18,G,.22,j,Z,Q,l);for(const j of[-1.8,0,1.8])t.box("ext",1.64,1.25,.04,j,Y+1.48,Q,_,{uvScale:0})}for(const Q of[-2.7,2.7]){t.box("ext",.2,.86,5.15,Q,Y+.43,0,s,{solid:!0}),t.box("ext",.2,.42,5.15,Q,Y+2.34,0,l,{solid:!0}),t.box("ext",.22,G,.18,Q,Z,0,l);for(const j of[-1.25,1.25])t.box("ext",.04,1.25,2.32,Q,Y+1.48,j,_,{uvScale:0})}t.box("int",5.3,.12,4.9,0,X-.04,0,l),t.collider(-2.65,2.65,X-.12,X+.1,-2.45,2.45),t.box("int",1.45,.82,1.05,.15,Y+.42,.85,l,{solid:!0}),t.box("int",1.25,.04,.85,.15,Y+.85,.85,I,{uvScale:0});const B=.44,J=2.15,lt=F+.12+J*Math.tan(B);t.kawaraSlope("ext",{bottomWidth:2.3,run:J,pitch:B,ridgeX:1,ridgeY:lt,ridgeZ:5.55,downslopeYaw:Math.PI*.5,tileMat:k,ribMat:U,eaveMat:D,rafterMat:l,ribSpacing:.34}),t.kawaraSlope("ext",{bottomWidth:2.3,run:J,pitch:B,ridgeX:1,ridgeY:lt,ridgeZ:5.55,downslopeYaw:-Math.PI*.5,tileMat:k,ribMat:U,eaveMat:D,rafterMat:l,ribSpacing:.34}),t.gablePrism("ext",3.9,lt-F,.22,1,F-.04,6.2,s),t.kawaraRidge("ext",1,lt+.05,4.7,1,lt+.05,6.72,D,w,{scale:.92,oniStart:!1,oniEnd:!0,courses:2});const ht=(Q,j,C,R,tt)=>{const it=(Q+C)*2,ft=(j+C)*2,st=R+C*Math.tan(tt);t.kawaraSlope("ext",{topWidth:Q*2,bottomWidth:it,run:C,pitch:tt,ridgeX:0,ridgeY:st,ridgeZ:j,downslopeYaw:0,tileMat:k,ribMat:U,eaveMat:D,rafterMat:l,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:Q*2,bottomWidth:it,run:C,pitch:tt,ridgeX:0,ridgeY:st,ridgeZ:-j,downslopeYaw:Math.PI,tileMat:k,ribMat:U,eaveMat:D,rafterMat:l,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:j*2,bottomWidth:ft,run:C,pitch:tt,ridgeX:Q,ridgeY:st,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:k,ribMat:U,eaveMat:D,rafterMat:l,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:j*2,bottomWidth:ft,run:C,pitch:tt,ridgeX:-Q,ridgeY:st,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:k,ribMat:U,eaveMat:D,rafterMat:l,ribSpacing:.38}),t.kawaraRidge("ext",-Q,st,j,-(Q+C),R,j+C,D,w,{scale:.68,oniEnd:!0,courses:2}),t.kawaraRidge("ext",Q,st,j,Q+C,R,j+C,D,w,{scale:.68,oniEnd:!0,courses:2}),t.kawaraRidge("ext",-Q,st,-j,-(Q+C),R,-(j+C),D,w,{scale:.68,oniEnd:!0,courses:2}),t.kawaraRidge("ext",Q,st,-j,Q+C,R,-(j+C),D,w,{scale:.68,oniEnd:!0,courses:2})};ht(5.4,4,1.85,F-.14,.38),ht(4.3,3.3,1.9,q-.14,.4),ht(2.7,2.5,2.35,Y-.14,.44);const z=.5,ut=3.65,et=X-.14+ut*Math.tan(z),rt=X+.85;t.kawaraSlope("ext",{topWidth:3.4,bottomWidth:7.7,run:ut,pitch:z,ridgeX:0,ridgeY:et,ridgeZ:0,downslopeYaw:0,tileMat:k,ribMat:U,eaveMat:D,rafterMat:l,ribSpacing:.34}),t.kawaraSlope("ext",{topWidth:3.4,bottomWidth:7.7,run:ut,pitch:z,ridgeX:0,ridgeY:et,ridgeZ:0,downslopeYaw:Math.PI,tileMat:k,ribMat:U,eaveMat:D,rafterMat:l,ribSpacing:.34}),t.kawaraSlope("ext",{topWidth:3.2,bottomWidth:7.3,run:2.15,pitch:z,ridgeX:1.7,ridgeY:rt+.1,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:k,ribMat:U,eaveMat:D,rafterMat:l,ribSpacing:.34}),t.kawaraSlope("ext",{topWidth:3.2,bottomWidth:7.3,run:2.15,pitch:z,ridgeX:-1.7,ridgeY:rt+.1,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:k,ribMat:U,eaveMat:D,rafterMat:l,ribSpacing:.34}),t.gablePrism("ext",3.2,et-rt,.2,1.66,rt,0,s,{ry:Math.PI*.5}),t.gablePrism("ext",3.2,et-rt,.2,-1.66,rt,0,s,{ry:Math.PI*.5}),t.kawaraRidge("ext",-1.8,et+.06,0,1.8,et+.06,0,D,w,{scale:1.3,oniStart:!0,oniEnd:!0,courses:3});const ct=X-.12;return t.kawaraRidge("ext",-1.7,rt+.1,1.6,-3.82,ct,3.62,D,w,{scale:.72,oniEnd:!0}),t.kawaraRidge("ext",1.7,rt+.1,1.6,3.82,ct,3.62,D,w,{scale:.72,oniEnd:!0}),t.kawaraRidge("ext",-1.7,rt+.1,-1.6,-3.82,ct,-3.62,D,w,{scale:.72,oniEnd:!0}),t.kawaraRidge("ext",1.7,rt+.1,-1.6,3.82,ct,-3.62,D,w,{scale:.72,oniEnd:!0}),t.build({id:i.id,name:"黒田本家（1872年築・庄屋の四階望楼邸）",subtitle:"明治5年築・村最大最古・四重いぶし銀本瓦入母屋＆4F360°望楼展望室・四階建",category:"house",builtYear:1872,abandonedYear:1985,stories:4,floorElevations:[y+.04,F+.04,q+.04,Y+.04],entryLocal:[1,0,8.6]})}function l2(i,e){const t=new Se(i),n=e.getMaterial("raw_concrete",{roughness:.92,bumpScale:.05}),r=e.getMaterial("concrete_steps",{roughness:.91,bumpScale:.05}),o=e.getMaterial("ivory_plaster",{roughness:.91,bumpScale:.04,tint:16052454}),s=e.getMaterial("weathered_mortar",{roughness:.93,bumpScale:.05,tint:14210250}),a=e.getMaterial("dark_hardwood",{roughness:.85,bumpScale:.04}),l=e.getMaterial("oak_flooring",{roughness:.82,bumpScale:.03}),c=e.getMaterial("checker_linoleum",{roughness:.7,bumpScale:.02}),u=e.getMaterial("vintage_rug_red",{roughness:.92,bumpScale:.03}),d=e.getMaterial("small_white_tile",{roughness:.42,metalness:.05,bumpScale:.02}),h=e.getMaterial("beige_carpet",{roughness:.94,bumpScale:.03}),p=e.getMaterial("tatami_green_border",{roughness:.92,bumpScale:.04}),x=e.getMaterial("window_curtained",{roughness:.42,opacity:.56,transparent:!0}),g=e.getMaterial("frosted_grid_window",{roughness:.36,opacity:.46,transparent:!0}),m=e.getMaterial("door_frosted_glass",{roughness:.45,bumpScale:.03}),f=e.getMaterial("electric_meter",{roughness:.65,metalness:.35}),_=e.getMaterial("brushed_steel",{roughness:.42,metalness:.72}),v=e.getMaterial("retro_kitchen_unit",{roughness:.75,bumpScale:.03}),b=e.getMaterial("kitchen_cabinet",{roughness:.8,bumpScale:.03}),P=e.getMaterial("vanity_sink",{roughness:.68,bumpScale:.03}),E=e.getMaterial("filled_bookshelf",{roughness:.84,bumpScale:.04}),A=e.getMaterial("cork_board",{roughness:.9,bumpScale:.03}),T=e.getMaterial("green_curtain",{roughness:.92,opacity:.88,transparent:!0}),S=e.getMaterial("floral_futon",{roughness:.93,bumpScale:.03}),M=e.getMaterial("wardrobe_wood",{roughness:.82,bumpScale:.04}),I=e.getMaterial("wooden_dresser",{roughness:.82,bumpScale:.04}),O=e.getMaterial("dark_slate",{roughness:.75,metalness:.16,bumpScale:.06,tint:10660274}),k=e.getMaterial("slate_roof_dark",{roughness:.7,metalness:.22,bumpScale:.05,tint:9344672}),U=e.getMaterial("dark_iron_plate",{roughness:.66,metalness:.26}),D=e.getMaterial("matte_black_metal",{roughness:.58,metalness:.34}),w=.45,y=3.4,F=6.2;t.box("ext",9.7,1,7.7,0,w-.52,0,n),t.stoneSteps("ext",-.45,4.95,3.75,-.35,w,2,4,r);const q=y-w,Y=w+q*.5;t.box("int",9.2,.08,7.2,0,w-.04,0,l),t.box("int",5.2,.04,3.1,1.9,w+.03,-2,c),t.box("int",4.6,.04,3.6,1.5,w+.03,1.45,u),t.box("int",2.7,.04,3.1,-3.2,w+.03,-2,d),t.floor(-4.55,4.55,-3.55,3.85,w+.04),t.box("ext",3.55,1.15,.22,-3.02,w+.58,3.7,s,{solid:!0}),t.box("ext",3.55,q-1.15,.22,-3.02,w+2.05,3.7,o,{solid:!0}),t.box("ext",1.65,.72,.22,-.45,w+2.59,3.7,o,{solid:!0}),t.box("ext",.88,2.18,.06,-1.62,w+1.09,3.55,m,{uvScale:0}),t.box("ext",4.45,.9,.22,2.58,w+.45,3.7,s,{solid:!0}),t.box("ext",1.35,q-.9,.22,1.02,w+1.92,3.7,o,{solid:!0}),t.box("ext",2.1,.62,.22,2.75,w+2.64,3.7,o,{solid:!0}),t.box("ext",2.06,1.44,.06,2.75,w+1.62,3.7,x,{uvScale:0}),t.box("ext",1,q-.9,.22,4.3,w+1.92,3.7,o,{solid:!0}),t.box("ext",.44,.62,.16,-2.15,w+1.55,3.86,f,{uvScale:0}),t.box("ext",9.55,.95,.22,0,w+.48,-3.7,s,{solid:!0}),t.box("ext",5.4,q-.95,.22,-2.08,w+1.95,-3.7,o,{solid:!0}),t.box("ext",2.2,.62,.22,1.72,w+2.64,-3.7,o,{solid:!0}),t.box("ext",2.16,1.4,.06,1.72,w+1.64,-3.7,g,{uvScale:0}),t.box("ext",1.95,q-.95,.22,3.8,w+1.95,-3.7,o,{solid:!0}),t.box("ext",.22,1.15,7.55,-4.7,w+.58,0,s,{solid:!0}),t.box("ext",.22,q-1.15,7.55,-4.7,w+2.05,0,o,{solid:!0}),t.box("ext",.22,1.15,7.55,4.7,w+.58,0,s,{solid:!0}),t.box("ext",.22,q-1.15,7.55,4.7,w+2.05,0,o,{solid:!0}),t.box("int",.14,q,3.2,-1.85,Y,-2.05,d,{solid:!0}),t.box("int",1.45,q,.14,-3.95,Y,-.45,d,{solid:!0}),t.box("int",1.4,.75,.14,-2.55,w+2.58,-.45,o,{solid:!0}),t.box("int",1.35,.62,1.05,-3.85,w+.34,-2.95,d,{solid:!0}),t.box("int",.85,.88,.54,-2.45,w+.44,-3.25,P,{solid:!0,uvScale:0}),t.box("int",2.05,.88,.64,1.95,w+.44,-3.22,v,{solid:!0,uvScale:0}),t.box("int",.58,1.8,1.25,4.25,w+.9,-2.25,b,{solid:!0,uvScale:0}),t.box("int",1.55,.72,.92,1.75,w+.38,-1.25,a,{solid:!0}),t.box("int",1.45,.42,.85,1.85,w+.24,1.45,a,{solid:!0}),t.box("int",.52,1.78,1.85,4.28,w+.9,1.35,E,{solid:!0,uvScale:0}),t.stairRun("int",{x0:-3.75,z0:3.05,x1:-3.75,z1:-.25,y0:w+.04,y1:y+.04,width:1.12,steps:13,treadMat:l,stringerMat:a,railMat:a,railLeft:!1,railRight:!0,guardLeft:!1,guardRight:!0});const X=F-y,L=y+X*.5;t.box("int",7.65,.16,7.25,.78,y-.06,0,l),t.box("int",1.62,.16,3.35,-3.82,y-.06,-1.98,l),t.box("int",1.62,.16,.55,-3.82,y-.06,3.42,l),t.box("int",4.1,.04,4.4,-.8,y+.03,-1.35,h),t.box("int",3.4,.04,4.8,2.85,y+.03,-1.15,p),t.collider(-3.05,4.6,y-.16,y+.02,-3.6,3.6),t.collider(-4.6,-3.05,y-.16,y+.02,-3.6,-.32),t.floor(-3.05,4.55,-3.55,3.55,y+.04),t.floor(-4.55,-3.05,-3.55,-.22,y+.04),t.box("int",.08,.92,3.5,-3.06,y+.46,1.45,a,{solid:!0}),t.box("ext",2.2,X,.22,-3.6,L,3.7,o,{solid:!0}),t.box("ext",4.6,.85,.22,-.2,y+.42,3.7,o,{solid:!0}),t.box("ext",4.6,.58,.22,-.2,y+2.51,3.7,o,{solid:!0}),t.box("ext",4.56,1.38,.06,-.2,y+1.54,3.7,g,{uvScale:0}),t.box("ext",2.65,X,.22,3.42,L,3.7,o,{solid:!0}),t.box("ext",4.65,.05,.05,-.2,y+1.25,4.02,_),t.box("ext",4.65,.05,.05,-.2,y+.92,4.02,_);for(const K of[-2.3,-.9,.5,1.9])t.box("ext",.04,.46,.04,K,y+1.08,4.02,_),t.box("ext",.04,.04,.28,K,y+.92,3.88,_);t.box("ext",9.55,X,.22,0,L,-3.7,o,{solid:!0}),t.box("ext",.22,X,7.55,-4.7,L,0,o,{solid:!0}),t.box("ext",.22,X,2.2,4.7,L,-2.6,o,{solid:!0}),t.box("ext",.22,.85,2.4,4.7,y+.42,-.3,o,{solid:!0}),t.box("ext",.22,.58,2.4,4.7,y+2.51,-.3,o,{solid:!0}),t.box("ext",.06,1.38,2.36,4.7,y+1.54,-.3,x,{uvScale:0}),t.box("ext",.22,X,2.8,4.7,L,2.3,o,{solid:!0}),t.box("int",.12,X,5,1.15,L,-1.1,o,{solid:!0}),t.box("int",.12,.72,1.55,1.15,y+2.44,2.15,o,{solid:!0}),t.box("int",.12,X,.82,1.15,L,3.3,o,{solid:!0}),t.box("int",9.2,.12,7.2,0,F-.04,0,o),t.collider(-4.6,4.6,F-.12,F+.1,-3.6,3.6),t.box("int",1.35,.78,.68,-1.25,y+.39,-3.15,a,{solid:!0}),t.box("int",1.25,.85,.05,-1.25,y+1.48,-3.52,A,{uvScale:0}),t.box("int",.48,1.72,1.45,.78,y+.86,-2.55,E,{solid:!0,uvScale:0}),t.box("int",.62,1.42,.05,-2.1,y+1.54,3.52,T,{uvScale:0}),t.box("int",1.45,.14,1.95,2.85,y+.11,-1.25,S,{uvScale:0}),t.box("int",1.15,1.82,.56,2.25,y+.91,-3.22,M,{solid:!0,uvScale:0}),t.box("int",1.15,1.08,.52,3.85,y+.56,-3.22,I,{solid:!0,uvScale:0}),t.kawaraSlope("ext",{bottomWidth:3.4,run:1.35,pitch:.36,ridgeX:-.45,ridgeY:y+.1,ridgeZ:3.76,downslopeYaw:0,tileMat:O,ribMat:k,eaveMat:U,rafterMat:a,ribSpacing:.36});const $=.46,N=4.9,H=F-.14+N*Math.tan($);return t.kawaraSlope("ext",{bottomWidth:11.4,run:N,pitch:$,ridgeX:0,ridgeY:H,ridgeZ:0,downslopeYaw:0,tileMat:O,ribMat:k,eaveMat:U,rafterMat:a,ribSpacing:.38}),t.kawaraSlope("ext",{bottomWidth:11.4,run:N,pitch:$,ridgeX:0,ridgeY:H,ridgeZ:0,downslopeYaw:Math.PI,tileMat:O,ribMat:k,eaveMat:U,rafterMat:a,ribSpacing:.38}),t.gablePrism("ext",7.6,H-F+.14,.22,4.7,F-.06,0,o,{ry:Math.PI*.5}),t.gablePrism("ext",7.6,H-F+.14,.22,-4.7,F-.06,0,o,{ry:Math.PI*.5}),t.kawaraRidge("ext",-5.65,H+.05,0,5.65,H+.05,0,U,D,{scale:1.12,oniStart:!0,oniEnd:!0,courses:3}),t.build({id:i.id,name:"松岡家（中央V字谷の白壁瓦二階家）",subtitle:"明治19年築・白漆喰モルタル＆濃灰いぶし瓦大判切妻・昭和60年台所＆子供部屋・二階建",category:"house",builtYear:1886,abandonedYear:1985,stories:2,floorElevations:[w+.04,y+.04],entryLocal:[-.45,0,5.95]})}function c2(i,e){const t=new Se(i),n=e.getMaterial("ishigaki_cut",{roughness:.92,bumpScale:.07}),r=e.getMaterial("dressed_stone",{roughness:.9,bumpScale:.06}),o=e.getMaterial("charred_cedar",{roughness:.9,bumpScale:.05}),s=e.getMaterial("white_plaster",{roughness:.92,bumpScale:.04,tint:16249576}),a=e.getMaterial("washi_plaster",{roughness:.91,bumpScale:.03}),l=e.getMaterial("faded_red_wood",{roughness:.8,bumpScale:.04,tint:14247506}),c=e.getMaterial("wood_slat_screen",{roughness:.85,bumpScale:.05}),u=e.getMaterial("indigo_sakura_fabric",{roughness:.92,bumpScale:.02,doubleSide:!0}),d=e.getMaterial("carved_wood_lattice",{roughness:.86,bumpScale:.05}),h=e.getMaterial("dark_hardwood",{roughness:.84,bumpScale:.04}),p=e.getMaterial("warm_wood_plank",{roughness:.83,bumpScale:.04}),x=e.getMaterial("peeling_yellow_wall",{roughness:.92,bumpScale:.04}),g=e.getMaterial("frosted_transom",{roughness:.42,opacity:.62,transparent:!0}),m=e.getMaterial("woven_screen_brown",{roughness:.9,bumpScale:.05}),f=e.getMaterial("coir_doormat",{roughness:.96,bumpScale:.06}),_=e.getMaterial("thatch_straw",{roughness:.94,bumpScale:.07}),v=e.getMaterial("green_tile",{roughness:.46,bumpScale:.04}),b=e.getMaterial("cream_ceramic_tile",{roughness:.48,bumpScale:.03}),P=e.getMaterial("tatami_bordered",{roughness:.92,bumpScale:.04}),E=e.getMaterial("tatami_plain",{roughness:.92,bumpScale:.04}),A=e.getMaterial("tatami_green_border",{roughness:.92,bumpScale:.04}),T=e.getMaterial("shrine_facade",{roughness:.8,bumpScale:.04}),S=e.getMaterial("red_zabuton",{roughness:.92,bumpScale:.03}),M=e.getMaterial("antique_tansu",{roughness:.78,bumpScale:.04}),I=e.getMaterial("full_bookcase",{roughness:.84,bumpScale:.04}),O=e.getMaterial("wooden_dresser",{roughness:.82,bumpScale:.03}),k=e.getMaterial("wooden_vanity",{roughness:.82,bumpScale:.03}),U=e.getMaterial("shoji_sliding_door",{roughness:.88,opacity:.9,transparent:!0}),D=e.getMaterial("linen_fusuma",{roughness:.9,bumpScale:.02}),w=e.getMaterial("cobblestone",{roughness:.92,bumpScale:.06}),y=e.getMaterial("retro_kitchen_unit",{roughness:.78,bumpScale:.03}),F=e.getMaterial("kitchen_cabinet",{roughness:.82,bumpScale:.03}),q=e.getMaterial("shop_shelves_jars",{roughness:.84,bumpScale:.03}),Y=e.getMaterial("deep_moss",{roughness:.95,bumpScale:.07}),X=e.getMaterial("moss_rock_heavy",{roughness:.93,bumpScale:.08}),L=e.getMaterial("river_cobble",{roughness:.9,bumpScale:.06}),$=e.getMaterial("window_frosted_wood",{roughness:.32,opacity:.38,transparent:!0}),N=e.getMaterial("window_frosted_wood",{roughness:.22,opacity:.22,transparent:!0,tint:14543090}),H=e.getMaterial("slate_roof_dark",{roughness:.7,metalness:.2,bumpScale:.06,tint:10133672}),K=e.getMaterial("dark_slate",{roughness:.66,metalness:.24,bumpScale:.05,tint:8817812}),V=e.getMaterial("dark_iron_plate",{roughness:.6,metalness:.3,tint:8028298}),G=e.getMaterial("matte_black_metal",{roughness:.52,metalness:.4,tint:7107194}),Z=.5,B=3.6,J=6.6,lt=9.4;t.box("ext",12.1,3.62,9.4,0,Z-1.82,0,n),t.box("ext",3.4,2.2,1.35,.4,Z-1.12,5.05,n),t.stoneSteps("ext",.4,5.85,4.72,-.06,Z,2.55,4,r),t.box("ext",2.4,.24,2.6,.4,-.14,6.75,L),t.floor(-1,1.8,4.4,8.6,.04),t.floor(-1,1.8,4.5,5.1,Z+.04);const ht=.4,z=6.65;t.box("ext",.46,1.25,.46,ht-1.48,-.45,z,r),t.box("ext",.46,1.25,.46,ht+1.48,-.45,z,r),t.box("ext",.26,3.08,.26,ht-1.48,1.54,z,l,{solid:!0}),t.box("ext",.26,3.08,.26,ht+1.48,1.54,z,l,{solid:!0});for(const Ct of[-1,1])t.box("ext",.16,2.35,.16,ht+Ct*1.48,1.18,z-.58,l,{solid:!0}),t.box("ext",.14,.16,.72,ht+Ct*1.48,2.25,z-.28,l);t.box("ext",4.35,.28,.28,ht,3.02,z,l),t.box("ext",3.45,.18,.16,ht,2.58,z,l),t.box("ext",2.45,.56,.04,ht,2.34,z+.08,u,{uvScale:0});for(const Ct of[-1,1]){const Zt=ht+Ct*2.45;t.box("ext",1.65,1.15,.28,Zt,.12,z,n,{solid:!0}),t.box("ext",1.65,1.25,.24,Zt,1.3,z,s,{solid:!0}),t.box("ext",1.8,.18,.42,Zt,2,z,H)}const ut=.45,et=1.05,rt=3.68;t.kawaraSlope("ext",{bottomWidth:4.55,run:et,pitch:ut,ridgeX:ht,ridgeY:rt,ridgeZ:z,downslopeYaw:0,tileMat:H,ribMat:K,rafterMat:h,ribSpacing:.34}),t.kawaraSlope("ext",{bottomWidth:4.55,run:et,pitch:ut,ridgeX:ht,ridgeY:rt,ridgeZ:z,downslopeYaw:Math.PI,tileMat:H,ribMat:K,rafterMat:h,ribSpacing:.34}),t.kawaraRidge("ext",ht-2.24,rt+.03,z,ht+2.24,rt+.03,z,V,G,{scale:.72,courses:2,oniStart:!0,oniEnd:!0});const ct=B-Z,Q=Z+ct*.5;t.box("int",8,.12,9,1.8,Z-.04,0,h),t.box("int",3.6,.12,5.6,-4,Z-.04,1.7,p),t.box("int",5.8,.04,4.7,.9,Z+.03,-2,P),t.box("int",2,.05,1.9,4.75,Z+.02,3.45,w),t.box("int",1.15,.03,.72,.4,Z+.04,4.1,f,{uvScale:0});const j=Z-.12;t.box("ext",3.6,.16,3.4,-4,j-.08,-2.8,Y),t.box("ext",2.4,.08,2.2,-3.9,j+.01,-2.6,L);for(const[Ct,Zt]of[[-3.3,-1.55],[-3.8,-2.25],[-4.45,-2.95]])t.cyl("ext",.34,.38,.14,7,Ct,j+.06,Zt,r);t.box("ext",.95,.62,.85,-5.05,j+.28,-3.75,X,{solid:!0,ry:.28}),t.box("ext",.72,.48,.68,-2.75,j+.22,-3.85,X,{solid:!0,ry:-.4}),t.cyl("ext",.34,.4,.56,8,-4.95,j+.28,-2.05,r),t.cyl("ext",.24,.24,.1,8,-4.95,j+.58,-2.05,X),t.cyl("ext",.14,.2,.82,6,-3.15,j+.41,-3.95,r),t.box("ext",.34,.34,.34,-3.15,j+.96,-3.95,r),t.box("ext",.52,.16,.52,-3.15,j+1.22,-3.95,X),t.box("ext",3.75,.75,.28,-3.95,Z+.25,-4.5,n,{solid:!0}),t.box("ext",3.75,1.65,.24,-3.95,Z+1.45,-4.5,s,{solid:!0}),t.box("ext",3.9,.16,.44,-3.95,Z+2.34,-4.5,H),t.box("ext",.28,.75,3.55,-5.8,Z+.25,-2.8,n,{solid:!0}),t.box("ext",.24,1.65,3.55,-5.8,Z+1.45,-2.8,s,{solid:!0}),t.box("ext",.44,.16,3.68,-5.8,Z+2.34,-2.8,H),t.floor(-5.68,5.68,-1.1,4.55,Z+.04),t.floor(-2.2,5.68,-4.4,-1.05,Z+.04),t.floor(-5.55,-2.25,-4.25,-1.1,j+.08),t.box("ext",5.12,1.2,.26,-3.26,Z+.6,4.5,o,{solid:!0}),t.box("ext",1.55,ct-1.2,.26,-5.04,Z+2.15,4.5,s,{solid:!0}),t.box("ext",2.4,.62,.26,-3.1,Z+2.79,4.5,s,{solid:!0}),t.box("ext",2.36,1.28,.07,-3.1,Z+1.84,4.5,c,{uvScale:0}),t.box("ext",1.22,ct-1.2,.26,-1.31,Z+2.15,4.5,s,{solid:!0}),t.box("ext",2.24,.72,.26,.4,Z+2.74,4.5,s,{solid:!0}),t.box("ext",2.5,.16,.3,.4,Z+2.36,4.54,l),t.box("ext",1.05,2.3,.06,-1.18,Z+1.15,4.3,U,{uvScale:0}),t.box("ext",4.34,1.2,.26,3.66,Z+.6,4.5,o,{solid:!0}),t.box("ext",1.45,ct-1.2,.26,2.22,Z+2.15,4.5,s,{solid:!0}),t.box("ext",1.8,.65,.26,3.85,Z+2.78,4.5,s,{solid:!0}),t.box("ext",1.76,1.25,.07,3.85,Z+1.82,4.5,d,{uvScale:0}),t.box("ext",1.1,ct-1.2,.26,5.26,Z+2.15,4.5,s,{solid:!0}),t.box("ext",8.05,1.15,.26,1.8,Z+.58,-4.5,o,{solid:!0}),t.box("ext",8.05,ct-1.15,.26,1.8,Z+2.12,-4.5,s,{solid:!0}),t.box("ext",.26,1.15,5.65,-5.8,Z+.58,1.7,o,{solid:!0}),t.box("ext",.26,ct-1.15,1.65,-5.8,Z+2.12,-.28,s,{solid:!0}),t.box("ext",.26,.62,2.4,-5.8,Z+2.79,1.75,s,{solid:!0}),t.box("ext",.06,1.3,2.36,-5.8,Z+1.8,1.75,$,{uvScale:0}),t.box("ext",.26,ct-1.15,1.6,-5.8,Z+2.12,3.72,s,{solid:!0}),t.box("ext",.26,1.2,9.05,5.8,Z+.6,0,o,{solid:!0}),t.box("ext",.26,ct-1.2,9.05,5.8,Z+2.15,0,s,{solid:!0});for(const[Ct,Zt]of[[-5.82,4.52],[-.74,4.52],[1.54,4.52],[5.82,4.52],[5.82,-4.52]])t.box("ext",.2,ct+.06,.2,Ct,Q,Zt,l);t.box("int",1.72,ct,.16,-4.92,Q,-1.1,h,{solid:!0}),t.box("int",1.6,.72,.16,-3.3,Z+2.74,-1.1,g,{uvScale:0}),t.box("int",.42,ct,.16,-2.35,Q,-1.1,h,{solid:!0}),t.box("int",.16,.52,3.45,-2.2,Z+.26,-2.8,h,{solid:!0}),t.box("int",.06,1.88,3.2,-2.2,Z+1.46,-2.8,N,{uvScale:0}),t.box("int",.16,.7,3.45,-2.2,Z+2.75,-2.8,g,{uvScale:0}),t.box("int",1.85,ct,.14,-1.25,Q,.45,D,{solid:!0,uvScale:0}),t.box("int",2.25,.7,.14,.8,Z+2.75,.45,g,{uvScale:0}),t.box("int",1.95,ct,.14,2.9,Q,.45,a,{solid:!0}),t.box("int",.04,.62,1.95,-2.18,Z+2.66,2.15,u,{uvScale:0}),t.box("int",3.4,.24,.96,1.15,Z+.12,-3.95,h,{solid:!0}),t.box("int",2.15,2.1,.64,1.15,Z+1.28,-4.02,T,{solid:!0,uvScale:0}),t.box("int",.16,2.65,.16,-.18,Z+1.44,-3.55,l,{solid:!0}),t.box("int",.16,2.65,.16,2.48,Z+1.44,-3.55,l,{solid:!0}),t.box("int",3.1,.16,.18,1.15,Z+2.72,-3.55,l),t.box("int",1.35,.46,.56,1.15,Z+.26,-2.7,l,{solid:!0});for(const Ct of[.35,1.15,1.95])t.box("int",.64,.08,.64,Ct,Z+.08,-1.65,S,{uvScale:0});t.box("int",1.45,1.45,.52,-4.65,Z+.74,3.85,M,{solid:!0,uvScale:0}),t.box("int",1.75,.92,.62,4.65,Z+.46,4.05,y,{solid:!0,uvScale:0}),t.box("int",.58,1.85,1.1,5.4,Z+.94,3.1,F,{solid:!0,uvScale:0}),t.box("int",.52,1.65,1.25,3.45,Z+.84,3.72,q,{solid:!0,uvScale:0}),t.stairRun("int",{x0:4.85,z0:1.85,x1:4.85,z1:-2.05,y0:Z+.04,y1:B+.04,width:1.18,steps:14,treadMat:h,stringerMat:h,railMat:l,railLeft:!0,railRight:!1,closedRisers:!0,guardLeft:!0,guardRight:!1});const C=J-B,R=B+C*.5;t.box("int",6.32,.16,9,.96,B-.06,0,p),t.box("int",3.6,.16,5.6,-4,B-.06,1.7,p),t.box("int",1.68,.16,2.45,4.94,B-.06,-3.28,p),t.box("int",1.68,.16,2.5,4.94,B-.06,3.25,p),t.box("int",5.8,.04,4.1,.95,B+.03,-2.35,E),t.box("int",3.45,.05,5.35,-3.95,B+.02,1.7,v),t.collider(-2.2,4.12,B-.16,B+.02,-4.5,4.5),t.collider(-5.8,-2.2,B-.16,B+.02,-1.1,4.5),t.collider(4.12,5.8,B-.16,B+.02,-4.5,-2.06),t.collider(4.12,5.8,B-.16,B+.02,2.02,4.5),t.floor(-2.15,4.1,-4.4,4.45,B+.04),t.floor(-5.68,-2.15,-1.05,4.4,B+.04),t.floor(4.05,5.68,-4.4,-2,B+.04),t.floor(4.05,5.68,2,4.4,B+.04),t.kouranRailing("ext",-5.72,-1.1,-2.2,-1.1,B,.96,l,.52),t.kouranRailing("ext",-2.2,-4.42,-2.2,-1.1,B,.96,l,.52),t.kouranRailing("int",4.12,-2.04,4.12,2.02,B,.94,h,.56),t.kouranRailing("int",4.12,2.02,5.72,2.02,B,.94,h,.56),t.box("ext",9.75,.16,1.18,0,B-.04,5.08,p),t.kouranRailing("ext",-4.85,5.62,4.85,5.62,B,.96,l,.54),t.kouranRailing("ext",-4.85,4.5,-4.85,5.62,B,.96,l,.54),t.kouranRailing("ext",4.85,4.5,4.85,5.62,B,.96,l,.54),t.floor(-4.75,4.75,4.4,5.56,B+.04),t.box("ext",4.98,C,.22,-3.32,R,4.5,s,{solid:!0}),t.box("ext",1.72,.72,.22,0,B+2.64,4.5,s,{solid:!0}),t.box("ext",4.98,C,.22,3.32,R,4.5,s,{solid:!0}),t.box("ext",8.05,.96,.22,1.8,B+.48,-4.5,s,{solid:!0}),t.box("ext",2.45,C-.96,.22,-.98,B+1.98,-4.5,s,{solid:!0}),t.box("ext",3,.56,.22,1.75,B+2.72,-4.5,s,{solid:!0}),t.box("ext",2.96,1.48,.06,1.75,B+1.7,-4.5,$,{uvScale:0}),t.box("ext",2.55,C-.96,.22,4.52,B+1.98,-4.5,s,{solid:!0}),t.box("ext",.22,C,5.65,-5.8,R,1.7,s,{solid:!0}),t.box("ext",.22,C,9.05,5.8,R,0,s,{solid:!0});for(const Ct of[-5.82,-2.9,-.88,.88,2.9,5.82])t.box("ext",.16,C+.06,.26,Ct,R,4.52,l);t.box("ext",11.75,.16,.26,0,J-.06,4.54,l),t.box("int",1.65,C,.14,-1.38,R,-.25,D,{solid:!0,uvScale:0}),t.box("int",1.95,.68,.14,.4,B+2.66,-.25,g,{uvScale:0}),t.box("int",2.75,C,.14,2.75,R,-.25,a,{solid:!0}),t.box("int",3.4,C-.1,.12,.9,R,-4.34,x),t.box("int",2.2,.56,.95,1.1,B+.28,-2.4,p,{solid:!0}),t.box("int",1.65,.26,.58,1,B+.69,-2.42,_),t.cyl("int",.26,.28,1.15,8,-.85,B+.58,-3.72,_),t.cyl("int",.22,.25,1.05,8,-1.42,B+.53,-3.62,_),t.box("int",1.35,1.45,.52,3.05,B+.74,-3.95,M,{solid:!0,uvScale:0}),t.box("int",1.15,1.15,.48,3.25,B+.58,-1.65,O,{solid:!0,uvScale:0}),t.box("int",.14,C,1.45,-2.15,R,-.38,b,{solid:!0}),t.box("int",.14,.68,1.6,-2.15,B+2.66,1.12,b,{solid:!0}),t.box("int",.14,C,2.6,-2.15,R,3.2,b,{solid:!0}),t.box("int",.1,1.35,5.2,-5.66,B+.68,1.7,v),t.box("int",.1,1.6,5.2,-5.66,B+2.15,1.7,b),t.box("int",1.55,.68,1.25,-4.82,B+.34,3.45,v,{solid:!0}),t.box("int",1.15,1.45,.52,-3.35,B+.74,4.05,k,{solid:!0,uvScale:0}),t.stairRun("int",{x0:2.9,z0:2.25,x1:-1,z1:2.25,y0:B+.04,y1:J+.04,width:1.15,steps:14,treadMat:h,stringerMat:h,railMat:l,railLeft:!0,railRight:!0,closedRisers:!1,guardLeft:!0,guardRight:!0});const tt=lt-J,it=J+tt*.5;t.box("int",8.2,.16,4.92,0,J-.06,-.84,p),t.box("int",3.1,.16,1.72,-2.55,J-.06,2.44,p),t.box("int",1.1,.16,1.72,3.55,J-.06,2.44,p),t.box("int",6.8,.04,4.2,.15,J+.03,-.95,A),t.box("int",8,.08,6.4,0,lt-.08,0,m),t.collider(-4.1,4.1,J-.16,J+.02,-3.3,1.6),t.collider(-4.1,-1.02,J-.16,J+.02,1.6,3.3),t.collider(3.02,4.1,J-.16,J+.02,1.6,3.3),t.floor(-4.02,4.02,-3.22,1.6,J+.04),t.floor(-4.02,-1,1.55,3.25,J+.04),t.floor(3.02,4.02,1.55,3.25,J+.04),t.kouranRailing("int",-1.02,1.6,3.04,1.6,J,.94,l,.54),t.kouranRailing("int",3.04,1.6,3.04,3.2,J,.94,l,.54),t.box("ext",9.3,.16,1.08,-.52,J-.04,3.82,p),t.box("ext",1.08,.16,6.65,-4.64,J-.04,0,p),t.kouranRailing("ext",-5.14,4.32,4.1,4.32,J,.96,l,.54),t.kouranRailing("ext",4.1,3.3,4.1,4.32,J,.96,l,.54),t.kouranRailing("ext",-5.14,-3.3,-5.14,4.32,J,.96,l,.54),t.kouranRailing("ext",-5.14,-3.3,-4.1,-3.3,J,.96,l,.54),t.floor(-5.05,4.02,3.22,4.25,J+.04),t.floor(-5.05,-4.02,-3.22,4.25,J+.04),t.box("ext",.9,tt,.2,-3.68,it,3.3,s,{solid:!0}),t.box("ext",1.64,.68,.2,-2.45,J+2.46,3.3,s,{solid:!0}),t.box("ext",5.8,tt,.2,1.24,it,3.3,s,{solid:!0}),t.box("ext",8.25,.78,.2,0,J+.39,-3.3,s,{solid:!0}),t.box("ext",1.85,tt-.78,.2,-3.2,J+1.79,-3.3,s,{solid:!0}),t.box("ext",4.6,.44,.2,0,J+2.58,-3.3,s,{solid:!0}),t.box("ext",4.56,1.58,.06,0,J+1.57,-3.3,N,{uvScale:0}),t.box("ext",1.85,tt-.78,.2,3.2,J+1.79,-3.3,s,{solid:!0}),t.box("ext",.2,tt,2.48,-4.1,it,-2.08,s,{solid:!0}),t.box("ext",.2,.68,1.64,-4.1,J+2.46,-.05,s,{solid:!0}),t.box("ext",.2,tt,2.58,-4.1,it,2.02,s,{solid:!0}),t.box("ext",.2,.9,6.65,4.1,J+.45,0,s,{solid:!0}),t.box("ext",.2,tt-.9,2.05,4.1,J+1.85,-2.3,s,{solid:!0}),t.box("ext",.2,.5,2.5,4.1,J+2.55,-.05,s,{solid:!0}),t.box("ext",.06,1.4,2.46,4.1,J+1.6,-.05,d,{uvScale:0}),t.box("ext",.2,tt-.9,2.15,4.1,J+1.85,2.25,s,{solid:!0});for(const[Ct,Zt]of[[-4.12,-3.32],[4.12,-3.32],[-4.12,3.32],[4.12,3.32]])t.box("ext",.18,tt+.08,.18,Ct,it,Zt,l);t.box("int",1.65,.42,.78,0,J+.24,-2.15,l,{solid:!0}),t.box("int",.64,.08,.64,0,J+.08,-1.25,S,{uvScale:0}),t.box("int",.52,2.05,1.75,3.68,J+1.04,-1.95,I,{solid:!0,uvScale:0}),t.box("int",.52,2.05,1.75,3.68,J+1.04,.15,I,{solid:!0,uvScale:0}),t.kawaraSlope("ext",{bottomWidth:12.6,run:1.38,pitch:.36,ridgeX:0,ridgeY:B+.14,ridgeZ:4.46,downslopeYaw:0,tileMat:H,ribMat:K,rafterMat:h,ribSpacing:.38}),t.kawaraSlope("ext",{bottomWidth:9.8,run:1.15,pitch:.36,ridgeX:5.76,ridgeY:B+.1,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:H,ribMat:K,rafterMat:h,ribSpacing:.38}),t.kawaraSlope("ext",{bottomWidth:6.2,run:1.15,pitch:.36,ridgeX:-5.76,ridgeY:B+.1,ridgeZ:1.7,downslopeYaw:-Math.PI*.5,tileMat:H,ribMat:K,rafterMat:h,ribSpacing:.38});const ft=.4;t.kawaraSlope("ext",{topWidth:8.6,bottomWidth:12.8,run:2.35,pitch:ft,ridgeX:0,ridgeY:J+.52,ridgeZ:3.3,downslopeYaw:0,tileMat:H,ribMat:K,rafterMat:h,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:8.6,bottomWidth:9.8,run:1.85,pitch:ft,ridgeX:1.2,ridgeY:J+.38,ridgeZ:-3.3,downslopeYaw:Math.PI,tileMat:H,ribMat:K,rafterMat:h,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:6.8,bottomWidth:10.6,run:2.3,pitch:ft,ridgeX:4.1,ridgeY:J+.5,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:H,ribMat:K,rafterMat:h,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:4.4,bottomWidth:6.8,run:2.25,pitch:ft,ridgeX:-4.1,ridgeY:J+.48,ridgeZ:1.75,downslopeYaw:-Math.PI*.5,tileMat:H,ribMat:K,rafterMat:h,ribSpacing:.38});const st=4.62,yt=J+.04,gt=3.2,Mt=1.46,zt=1.35;t.gablePrism("ext",gt,Mt,zt,0,yt,st-zt*.42,s);const _t=Math.atan2(Mt,gt*.5),Tt=gt*.5+.36;t.kawaraSlope("ext",{bottomWidth:zt+.55,run:Tt,pitch:_t,ridgeX:0,ridgeY:yt+Mt+.14,ridgeZ:st-zt*.36,downslopeYaw:Math.PI*.5,tileMat:H,ribMat:K,rafterMat:l,ribSpacing:.34}),t.kawaraSlope("ext",{bottomWidth:zt+.55,run:Tt,pitch:_t,ridgeX:0,ridgeY:yt+Mt+.14,ridgeZ:st-zt*.36,downslopeYaw:-Math.PI*.5,tileMat:H,ribMat:K,rafterMat:l,ribSpacing:.34});const Dt=Math.hypot(gt*.5+.25,Mt+.16);for(const Ct of[-1,1])t.box("ext",Dt,.16,.12,Ct*(gt*.25+.06),yt+Mt*.5+.06,st+.3,l,{rz:-Ct*_t});t.box("ext",.28,.56,.12,0,yt+Mt-.28,st+.34,l),t.kawaraRidge("ext",0,yt+Mt+.16,st-zt*.9,0,yt+Mt+.16,st+.32,V,G,{scale:.78,courses:2,oniStart:!1,oniEnd:!0});const Ft=.48,wt=4.65,Nt=lt+wt*Math.tan(Ft)-.1,Et=3.05,Ht=11.4,nt=9.3,vt=Ht*.5-Et;t.kawaraSlope("ext",{topWidth:Et*2,bottomWidth:Ht,run:wt,pitch:Ft,ridgeX:-.45,ridgeY:Nt,ridgeZ:.25,downslopeYaw:0,tileMat:H,ribMat:K,rafterMat:h,ribSpacing:.36}),t.kawaraSlope("ext",{topWidth:Et*2,bottomWidth:Ht,run:wt,pitch:Ft,ridgeX:-.45,ridgeY:Nt,ridgeZ:.25,downslopeYaw:Math.PI,tileMat:H,ribMat:K,rafterMat:h,ribSpacing:.36});const mt=1.15,bt=Nt-mt,Rt=vt+.45;t.gablePrism("ext",4.4,mt+.15,.22,-.45+Et,bt-.05,.25,s,{ry:Math.PI*.5}),t.gablePrism("ext",4.4,mt+.15,.22,-.45-Et,bt-.05,.25,s,{ry:Math.PI*.5}),t.kawaraSlope("ext",{topWidth:4.5,bottomWidth:nt,run:Rt,pitch:.44,ridgeX:-.45+Et,ridgeY:bt,ridgeZ:.25,downslopeYaw:Math.PI*.5,tileMat:H,ribMat:K,rafterMat:h,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:4.5,bottomWidth:nt,run:Rt,pitch:.44,ridgeX:-.45-Et,ridgeY:bt,ridgeZ:.25,downslopeYaw:-Math.PI*.5,tileMat:H,ribMat:K,rafterMat:h,ribSpacing:.38}),t.kawaraRidge("ext",-.45-Et,Nt+.04,.25,-.45+Et,Nt+.04,.25,V,G,{scale:1.12,courses:3,oniStart:!0,oniEnd:!0});const At=Nt-wt*Math.tan(Ft);for(const Ct of[-1,1])for(const Zt of[-1,1])t.kawaraRidge("ext",-.45+Ct*Et,bt+.04,.25+Zt*2.15,-.45+Ct*(Ht*.5-.12),At+.05,.25+Zt*(wt-.1),V,G,{scale:.72,courses:1,oniStart:!1,oniEnd:!0});return t.build({id:"H13",name:"神谷家（鎮守宮守・朱塗冠木門三階社家）",subtitle:"独立冠木門・苔石坪庭吹抜・千鳥破風本瓦三階邸",category:"house",builtYear:1879,abandonedYear:1985,stories:3,floorElevations:[Z,B,J],entryLocal:[.4,0,8.35],entryLookLocalYaw:0})}function u2(i,e){const t=new Se(i),n=e.getMaterial("ishigaki_cut",{roughness:.92,bumpScale:.07}),r=e.getMaterial("dressed_stone",{roughness:.9,bumpScale:.06}),o=e.getMaterial("charred_cedar",{roughness:.9,bumpScale:.05}),s=e.getMaterial("white_plaster",{roughness:.92,bumpScale:.04,tint:16052196}),a=e.getMaterial("pebble_dash_wall",{roughness:.94,bumpScale:.06,tint:15130576}),l=e.getMaterial("red_brick",{roughness:.9,bumpScale:.06}),c=e.getMaterial("old_red_brick",{roughness:.92,bumpScale:.07}),u=e.getMaterial("dark_hardwood",{roughness:.84,bumpScale:.04}),d=e.getMaterial("warm_wood_plank",{roughness:.83,bumpScale:.04}),h=e.getMaterial("oak_flooring",{roughness:.8,bumpScale:.03}),p=e.getMaterial("dark_bolted_steel",{roughness:.62,metalness:.6,bumpScale:.04}),x=e.getMaterial("herringbone_wood",{roughness:.74,bumpScale:.03}),g=e.getMaterial("dark_damp_stone",{roughness:.86,bumpScale:.07}),m=e.getMaterial("charred_soil",{roughness:.96,bumpScale:.07}),f=e.getMaterial("matte_black_metal",{roughness:.54,metalness:.68}),_=e.getMaterial("tatami_bordered",{roughness:.92,bumpScale:.04}),v=e.getMaterial("tatami_plain",{roughness:.92,bumpScale:.04}),b=e.getMaterial("tatami_green_border",{roughness:.92,bumpScale:.04}),P=e.getMaterial("frosted_acrylic",{roughness:.3,opacity:.54,transparent:!0}),E=e.getMaterial("window_frosted_wood",{roughness:.3,opacity:.34,transparent:!0}),A=e.getMaterial("window_frosted_wood",{roughness:.2,opacity:.2,transparent:!0,tint:14477554}),T=e.getMaterial("shoji_sliding_door",{roughness:.88,opacity:.9,transparent:!0}),S=e.getMaterial("linen_fusuma",{roughness:.9,bumpScale:.02}),M=e.getMaterial("washi_plaster",{roughness:.91,bumpScale:.03}),I=e.getMaterial("peeling_yellow_wall",{roughness:.92,bumpScale:.04}),O=e.getMaterial("woven_fabric_gray",{roughness:.94,bumpScale:.04}),k=e.getMaterial("retro_tile_wall",{roughness:.5,bumpScale:.03}),U=e.getMaterial("green_tile",{roughness:.46,bumpScale:.04}),D=e.getMaterial("coir_doormat",{roughness:.96,bumpScale:.06}),w=e.getMaterial("antique_tansu",{roughness:.78,bumpScale:.04}),y=e.getMaterial("red_zabuton",{roughness:.92,bumpScale:.03}),F=e.getMaterial("retro_kitchen_unit",{roughness:.78,bumpScale:.03}),q=e.getMaterial("kitchen_cabinet",{roughness:.82,bumpScale:.03}),Y=e.getMaterial("wooden_dresser",{roughness:.82,bumpScale:.03}),X=e.getMaterial("floral_futon",{roughness:.92,bumpScale:.03}),L=e.getMaterial("full_bookcase",{roughness:.84,bumpScale:.04}),$=e.getMaterial("office_counter",{roughness:.8,bumpScale:.03}),N=e.getMaterial("carved_wood_lattice",{roughness:.86,bumpScale:.05}),H=e.getMaterial("mossy_aged_concrete",{roughness:.92,bumpScale:.05}),K=e.getMaterial("slate_roof_dark",{roughness:.68,metalness:.16,bumpScale:.06,tint:11307636}),V=e.getMaterial("dark_slate",{roughness:.64,metalness:.2,bumpScale:.05,tint:9860706}),G=e.getMaterial("dark_iron_plate",{roughness:.6,metalness:.26,tint:8545362}),Z=e.getMaterial("matte_black_metal",{roughness:.52,metalness:.36,tint:7230534}),B=.5,J=3.65,lt=6.7,ht=9.5;t.box("ext",12.9,3.65,9.2,0,B-1.84,0,n),t.box("ext",3.2,2,1.3,-.5,B-1.02,4.95,n),t.stoneSteps("ext",-.5,5.8,4.65,-.1,B,2.55,4,r),t.floor(-1.9,.9,4.3,5.2,B+.04);const z=6.55,ut=-2.15;t.box("ext",1.75,3.2,1.75,z,-1.1,ut,n,{solid:!0}),t.box("ext",1.52,3.8,1.52,z,2.3,ut,c,{solid:!0}),t.box("ext",1.28,3.6,1.28,z,5.95,ut,l,{solid:!0}),t.box("ext",1.05,3.85,1.05,z,9.65,ut,l,{solid:!0}),t.box("ext",1.32,.28,1.32,z,11.72,ut,c);for(const gt of[4.2,7.6,10.4]){const Mt=gt<5?1.44:gt<8?1.2:1.12;t.box("ext",Mt,.12,Mt,z,gt,ut,p)}const et=J-B,rt=B+et*.5;t.box("int",12.2,.12,8.6,0,B-.04,0,d),t.box("int",7.1,.04,8.2,-2.55,B+.03,0,_),t.box("int",4.8,.04,5.8,3.65,B+.03,1.35,x),t.box("int",4.8,.05,2.6,3.65,B+.02,-3,U),t.box("int",1.2,.03,.72,-.5,B+.04,4.02,D,{uvScale:0}),t.floor(-6.05,6.05,-4.25,4.42,B+.04),t.box("ext",4.68,1.25,.26,-3.88,B+.62,4.4,o,{solid:!0}),t.box("ext",1.35,et-1.25,.26,-5.54,B+2.2,4.4,s,{solid:!0}),t.box("ext",2.25,.58,.26,-3.72,B+2.86,4.4,s,{solid:!0}),t.box("ext",2.2,1.32,.07,-3.72,B+1.9,4.4,N,{uvScale:0}),t.box("ext",1.08,et-1.25,.26,-2.06,B+2.2,4.4,s,{solid:!0}),t.box("ext",2.14,.74,.26,-.5,B+2.78,4.4,s,{solid:!0}),t.box("ext",1.05,2.34,.06,-1.95,B+1.18,4.2,T,{uvScale:0}),t.box("ext",5.68,1.12,.26,3.38,B+.56,4.4,a,{solid:!0}),t.box("ext",1.35,et-1.12,.26,1.22,B+2.14,4.4,a,{solid:!0}),t.box("ext",2.55,.54,.26,3.18,B+2.88,4.4,a,{solid:!0}),t.box("ext",2.5,1.48,.06,3.18,B+1.86,4.4,A,{uvScale:0}),t.box("ext",1.78,et-1.12,.26,5.34,B+2.14,4.4,a,{solid:!0}),t.box("ext",7.45,1.2,.26,-2.48,B+.6,-4.4,o,{solid:!0}),t.box("ext",7.45,et-1.2,.26,-2.48,B+2.18,-4.4,s,{solid:!0}),t.box("ext",5.05,et,.26,3.7,rt,-4.4,a,{solid:!0}),t.box("ext",.26,1.2,8.85,-6.2,B+.6,0,o,{solid:!0}),t.box("ext",.26,et-1.2,8.85,-6.2,B+2.18,0,s,{solid:!0}),t.box("ext",.26,et,8.85,6.2,rt,0,a,{solid:!0}),t.box("int",.16,et,5.58,1.2,rt,-1.62,M,{solid:!0}),t.box("int",.16,.72,1.85,1.2,B+2.79,2.05,P,{uvScale:0}),t.box("int",.16,et,1.48,1.2,rt,3.68,M,{solid:!0}),t.box("int",.68,et,.14,1.54,rt,-1.75,k,{solid:!0}),t.box("int",1.6,.72,.14,2.62,B+2.79,-1.75,k,{solid:!0}),t.box("int",2.85,et,.14,4.82,rt,-1.75,k,{solid:!0}),t.box("int",.42,et,.42,-1.95,rt,.25,u,{solid:!0}),t.box("int",1.55,.2,1.55,-3.35,B+.1,-1.65,g,{solid:!0}),t.box("int",1.12,.12,1.12,-3.35,B+.18,-1.65,m),t.cyl("int",.22,.2,.22,10,-3.35,B+.36,-1.65,f),t.cyl("int",.03,.03,2.65,6,-3.35,B+1.8,-1.65,f);for(const[gt,Mt]of[[-3.35,-.55],[-2.2,-1.65],[-3.35,-2.75]])t.box("int",.62,.08,.62,gt,B+.08,Mt,y,{uvScale:0});t.box("int",1.45,1.48,.52,-.45,B+.75,-3.95,w,{solid:!0,uvScale:0}),t.box("int",1.75,.92,.62,-2.45,B+.46,-3.98,F,{solid:!0,uvScale:0}),t.box("int",.56,1.85,1.25,.85,B+.94,-3.35,q,{solid:!0,uvScale:0}),t.box("int",1.15,2.55,1.25,5.42,B+1.28,-.35,c,{solid:!0}),t.box("int",1.24,.16,1.34,5.42,B+2.58,-.35,l),t.box("int",.54,.62,.08,4.82,B+.72,-.35,f),t.box("int",1.95,.52,.82,3.65,B+.28,3.45,O,{solid:!0}),t.box("int",1.25,.58,.72,3.65,B+.3,1.95,u,{solid:!0}),t.box("int",1.65,.68,1.15,5.15,B+.34,-3.55,U,{solid:!0}),t.stairRun("int",{x0:-5.2,z0:2.3,x1:-5.2,z1:-1.75,y0:B+.04,y1:J+.04,width:1.18,steps:14,treadMat:u,stringerMat:u,railMat:d,railLeft:!1,railRight:!0,closedRisers:!0,guardLeft:!1,guardRight:!0});const ct=lt-J,Q=J+ct*.5;t.box("int",10.66,.16,8.8,.87,J-.06,0,d),t.box("int",1.74,.16,2.62,-5.33,J-.06,-3.1,d),t.box("int",1.74,.16,2,-5.33,J-.06,3.4,d),t.box("int",4.6,.04,5.2,-1.9,J+.03,1.2,v),t.box("int",5.2,.04,7.6,3.4,J+.03,.2,b),t.collider(-4.46,6.2,J-.16,J+.02,-4.4,4.4),t.collider(-6.2,-4.46,J-.16,J+.02,-4.4,-1.8),t.collider(-6.2,-4.46,J-.16,J+.02,2.42,4.4),t.floor(-4.42,6.08,-4.28,4.35,J+.04),t.floor(-6.08,-4.4,-4.28,-1.75,J+.04),t.floor(-6.08,-4.4,2.4,4.28,J+.04),t.kouranRailing("int",-4.46,-1.78,-4.46,2.42,J,.94,u,.56),t.kouranRailing("int",-6.08,2.42,-4.46,2.42,J,.94,u,.52),t.box("ext",11.35,.16,1.1,0,J-.04,4.94,d),t.kouranRailing("ext",-5.62,5.44,5.62,5.44,J,.94,u,.54),t.kouranRailing("ext",-5.62,4.4,-5.62,5.44,J,.94,u,.54),t.kouranRailing("ext",5.62,4.4,5.62,5.44,J,.94,u,.54),t.floor(-5.52,5.52,4.32,5.36,J+.04),t.box("ext",5.38,ct,.22,-3.52,Q,4.4,s,{solid:!0}),t.box("ext",1.74,.72,.22,0,J+2.69,4.4,s,{solid:!0}),t.box("ext",5.38,ct,.22,3.52,Q,4.4,a,{solid:!0}),t.box("ext",7.45,ct,.22,-2.48,Q,-4.4,s,{solid:!0}),t.box("ext",5.05,ct,.22,3.7,Q,-4.4,a,{solid:!0}),t.box("ext",.22,ct,8.85,-6.2,Q,0,s,{solid:!0}),t.box("ext",.22,ct,8.85,6.2,Q,0,a,{solid:!0});for(const gt of[-6.22,-3.1,-.88,.88,3.6,6.22])t.box("ext",.16,ct+.06,.26,gt,Q,4.42,u);t.box("int",.14,ct,4.12,2.45,Q,-2.35,S,{solid:!0,uvScale:0}),t.box("int",.14,.72,2.05,2.45,J+2.69,.7,P,{uvScale:0}),t.box("int",.14,ct,2.72,2.45,Q,3.05,S,{solid:!0,uvScale:0}),t.box("int",.1,ct-.1,3.2,6.04,Q,1.4,I),t.box("int",1.65,.34,2.15,4.45,J+.21,1.55,X,{solid:!0,uvScale:0}),t.box("int",1.25,1.15,.5,4.65,J+.58,-3.95,Y,{solid:!0,uvScale:0}),t.box("int",1.45,1.45,.52,-1.85,J+.74,3.92,w,{solid:!0,uvScale:0}),t.stairRun("int",{x0:1.05,z0:-2.35,x1:-2.85,z1:-2.35,y0:J+.04,y1:lt+.04,width:1.14,steps:14,treadMat:u,stringerMat:u,railMat:d,railLeft:!0,railRight:!0,closedRisers:!1,guardLeft:!0,guardRight:!0});const j=ht-lt,C=lt+j*.5;t.box("int",7.8,.16,4.96,-2.1,lt-.06,.72,h),t.box("int",3.14,.16,1.46,-4.43,lt-.06,-2.47,h),t.box("int",.7,.16,1.46,1.45,lt-.06,-2.47,h),t.box("ext",4.3,.18,6.55,3.92,lt-.06,0,H),t.box("ext",3.9,.05,6.1,3.92,lt+.04,0,d),t.kouranRailing("ext",1.8,3.22,6.02,3.22,lt,.96,u,.54),t.kouranRailing("ext",6.02,-3.22,6.02,3.22,lt,.96,u,.54),t.kouranRailing("ext",1.8,-3.22,6.02,-3.22,lt,.96,u,.54);for(const gt of[-2.4,2.4])t.box("ext",.1,1.95,.1,5.25,lt+.98,gt,u);t.cyl("ext",.032,.032,5.1,6,5.25,lt+1.82,0,d,{rx:Math.PI*.5}),t.collider(-6,1.8,lt-.16,lt+.02,-1.74,3.2),t.collider(-6,-2.88,lt-.16,lt+.02,-3.2,-1.74),t.collider(1.12,1.8,lt-.16,lt+.02,-3.2,-1.74),t.collider(1.8,6.05,lt-.18,lt+.02,-3.25,3.25),t.floor(-5.88,1.85,-1.72,3.12,lt+.04),t.floor(-5.88,-2.82,-3.12,-1.7,lt+.04),t.floor(1.12,1.85,-3.12,-1.7,lt+.04),t.floor(1.75,5.92,-3.12,3.12,lt+.04),t.kouranRailing("int",-2.86,-1.74,1.12,-1.74,lt,.94,u,.54),t.kouranRailing("int",1.12,-3.12,1.12,-1.74,lt,.94,u,.5),t.box("ext",.22,j,3.4,1.8,C,-1.52,s,{solid:!0}),t.box("ext",.22,.68,1.8,1.8,lt+2.46,1.02,s,{solid:!0}),t.box("ext",.22,j,1.34,1.8,C,2.56,s,{solid:!0}),t.box("ext",7.85,.85,.22,-2.1,lt+.42,3.2,s,{solid:!0}),t.box("ext",2.05,j-.85,.22,-5,lt+1.82,3.2,s,{solid:!0}),t.box("ext",3.6,.46,.22,-2.15,lt+2.57,3.2,s,{solid:!0}),t.box("ext",3.56,1.48,.06,-2.15,lt+1.6,3.2,A,{uvScale:0}),t.box("ext",2.25,j-.85,.22,.72,lt+1.82,3.2,s,{solid:!0}),t.box("ext",7.85,j,.22,-2.1,C,-3.2,s,{solid:!0}),t.box("ext",.22,.88,6.45,-6,lt+.44,0,s,{solid:!0}),t.box("ext",.22,j-.88,1.85,-6,lt+1.84,-2.3,s,{solid:!0}),t.box("ext",.22,.48,2.65,-6,lt+2.56,-.05,s,{solid:!0}),t.box("ext",.06,1.44,2.6,-6,lt+1.6,-.05,E,{uvScale:0}),t.box("ext",.22,j-.88,1.98,-6,lt+1.84,2.24,s,{solid:!0}),t.box("int",1.85,.84,.82,-2.25,lt+.44,1.95,$,{solid:!0,uvScale:0}),t.box("int",.52,1.95,1.75,-5.58,lt+.98,1.85,L,{solid:!0,uvScale:0}),t.box("int",1.45,1.1,.48,-4.45,lt+.56,-2.8,Y,{solid:!0,uvScale:0}),t.kawaraSlope("ext",{bottomWidth:13.2,run:1.32,pitch:.36,ridgeX:0,ridgeY:J+.12,ridgeZ:4.36,downslopeYaw:0,tileMat:K,ribMat:V,rafterMat:u,ribSpacing:.38}),t.kawaraSlope("ext",{bottomWidth:9.6,run:1.05,pitch:.36,ridgeX:-6.16,ridgeY:J+.1,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:K,ribMat:V,rafterMat:u,ribSpacing:.38}),t.kawaraSlope("ext",{bottomWidth:13.4,run:2.35,pitch:.38,ridgeX:0,ridgeY:lt+.24,ridgeZ:3.22,downslopeYaw:0,tileMat:K,ribMat:V,rafterMat:u,ribSpacing:.38}),t.kawaraSlope("ext",{bottomWidth:13.4,run:1.95,pitch:.38,ridgeX:0,ridgeY:lt+.2,ridgeZ:-3.22,downslopeYaw:Math.PI,tileMat:K,ribMat:V,rafterMat:u,ribSpacing:.38});const R=.48,tt=4.25,it=ht+tt*Math.tan(R)-.1,ft=-2.1,st=9.5,yt=it-ht+.1;return t.gablePrism("ext",6.5,yt,.22,-6,ht-.04,0,s,{ry:Math.PI*.5}),t.gablePrism("ext",6.5,yt,.22,1.8,ht-.04,0,s,{ry:Math.PI*.5}),t.kawaraSlope("ext",{bottomWidth:st,run:tt,pitch:R,ridgeX:ft,ridgeY:it,ridgeZ:0,downslopeYaw:0,tileMat:K,ribMat:V,rafterMat:u,ribSpacing:.36}),t.kawaraSlope("ext",{bottomWidth:st,run:tt,pitch:R,ridgeX:ft,ridgeY:it,ridgeZ:0,downslopeYaw:Math.PI,tileMat:K,ribMat:V,rafterMat:u,ribSpacing:.36}),t.kawaraRidge("ext",ft-st*.5+.06,it+.04,0,ft+st*.5-.06,it+.04,0,G,Z,{scale:1.08,courses:3,oniStart:!0,oniEnd:!0}),t.build({id:"H14",name:"村田家（赤煉瓦ペチカ煙突＆物干しデッキ三階邸）",subtitle:"11.8m赤煉瓦大煙突・リシン洋間・囲炉裏大黒柱・3F開放デッキ",category:"house",builtYear:1883,abandonedYear:1985,stories:3,floorElevations:[B,J,lt],entryLocal:[-.5,0,6.8],entryLookLocalYaw:0})}function d2(i,e){const t=new Se(i),n=e.getMaterial("ishigaki_cut",{roughness:.92,bumpScale:.07}),r=e.getMaterial("dressed_stone",{roughness:.9,bumpScale:.06}),o=e.getMaterial("charred_cedar",{roughness:.9,bumpScale:.05}),s=e.getMaterial("white_plaster",{roughness:.92,bumpScale:.04,tint:16052454});e.getMaterial("washi_plaster",{roughness:.91,bumpScale:.03});const a=e.getMaterial("dark_hardwood",{roughness:.84,bumpScale:.04}),l=e.getMaterial("warm_wood_plank",{roughness:.83,bumpScale:.04}),c=e.getMaterial("oak_flooring",{roughness:.8,bumpScale:.03}),u=e.getMaterial("cobblestone",{roughness:.92,bumpScale:.06}),d=e.getMaterial("tatami_bordered",{roughness:.92,bumpScale:.04}),h=e.getMaterial("tatami_plain",{roughness:.92,bumpScale:.04}),p=e.getMaterial("shoji_sliding_door",{roughness:.88,opacity:.9,transparent:!0}),x=e.getMaterial("carved_wood_lattice",{roughness:.86,bumpScale:.05}),g=e.getMaterial("window_frosted_wood",{roughness:.22,opacity:.22,transparent:!0,tint:14478324}),m=e.getMaterial("coir_doormat",{roughness:.96,bumpScale:.06}),f=e.getMaterial("antique_tansu",{roughness:.78,bumpScale:.04}),_=e.getMaterial("red_zabuton",{roughness:.92,bumpScale:.03}),v=e.getMaterial("retro_kitchen_unit",{roughness:.78,bumpScale:.03}),b=e.getMaterial("kitchen_cabinet",{roughness:.82,bumpScale:.03}),P=e.getMaterial("stained_concrete",{roughness:.92,bumpScale:.05}),E=e.getMaterial("rust_streaked_concrete",{roughness:.92,bumpScale:.06}),A=e.getMaterial("tire_track_concrete",{roughness:.9,bumpScale:.05}),T=e.getMaterial("roll_shutter",{roughness:.56,metalness:.55,bumpScale:.05}),S=e.getMaterial("door_rusted_green",{roughness:.74,metalness:.36,bumpScale:.04}),M=e.getMaterial("corrugated_gray",{roughness:.68,metalness:.45,bumpScale:.06,doubleSide:!0}),I=e.getMaterial("galvanized_zinc",{roughness:.54,metalness:.6,bumpScale:.04,doubleSide:!0}),O=e.getMaterial("rusted_plate_bolts",{roughness:.74,metalness:.48,bumpScale:.05}),k=e.getMaterial("peeling_paint_steel",{roughness:.74,metalness:.4,bumpScale:.04}),U=e.getMaterial("mine_valve_pipes",{roughness:.62,metalness:.55,bumpScale:.06}),D=e.getMaterial("green_textured_mat",{roughness:.94,bumpScale:.05}),w=e.getMaterial("woven_fabric_gray",{roughness:.94,bumpScale:.04}),y=e.getMaterial("coarse_canvas",{roughness:.95,bumpScale:.05,doubleSide:!0}),F=e.getMaterial("dark_bolted_steel",{roughness:.62,metalness:.6,bumpScale:.04}),q=e.getMaterial("storage_rack",{roughness:.88,bumpScale:.04}),Y=e.getMaterial("wooden_dresser",{roughness:.82,bumpScale:.03}),X=e.getMaterial("full_bookcase",{roughness:.84,bumpScale:.04}),L=e.getMaterial("floral_futon",{roughness:.92,bumpScale:.03}),$=e.getMaterial("slate_roof_dark",{roughness:.72,metalness:.18,bumpScale:.06,tint:10529460}),N=e.getMaterial("dark_slate",{roughness:.68,metalness:.22,bumpScale:.05,tint:9147808}),H=e.getMaterial("dark_iron_plate",{roughness:.62,metalness:.28,tint:7766156}),K=e.getMaterial("matte_black_metal",{roughness:.54,metalness:.38,tint:6581880}),V=.45,G=3.55,Z=6.5;t.box("ext",8.6,3.55,9.2,-3.2,V-1.79,0,n),t.box("ext",1.8,3.35,8.6,1.6,V-1.7,0,u),t.box("ext",5.4,3.55,8.6,4.8,V-1.79,0,P),t.stoneSteps("ext",-3,5.75,4.55,-.08,V,2.35,4,r),t.floor(-4.3,-1.7,4.2,4.9,V+.04),t.stoneSteps("ext",1.6,5.45,4.25,-.08,V,1.35,3,u),t.stoneSteps("ext",4.8,5.45,4.18,-.08,V,2.95,3,A),t.floor(3.3,6.3,3.9,4.5,V+.04);const B=G-V,J=V+B*.5;t.box("int",8,.12,8.6,-3.2,V-.04,0,l),t.box("int",5.2,.04,5.4,-2.1,V+.03,-1.25,d),t.box("int",1.15,.03,.7,-3,V+.04,4,m,{uvScale:0}),t.box("ext",1.5,.08,8.5,1.6,V-.02,0,u),t.box("int",4.9,.12,8,4.8,V-.04,0,A),t.floor(-7.15,7.15,-4.25,4.4,V+.04),t.box("ext",3.34,1.2,.26,-5.65,V+.6,4.4,o,{solid:!0}),t.box("ext",3.34,B-1.2,.26,-5.65,V+2.15,4.4,s,{solid:!0}),t.box("ext",2.04,.72,.26,-3,V+2.74,4.4,s,{solid:!0}),t.box("ext",1,2.3,.06,-4.35,V+1.15,4.2,p,{uvScale:0}),t.box("ext",2.94,1.2,.26,-.55,V+.6,4.4,o,{solid:!0}),t.box("ext",.65,B-1.2,.26,-1.7,V+2.15,4.4,s,{solid:!0}),t.box("ext",1.65,.56,.26,-.55,V+2.82,4.4,s,{solid:!0}),t.box("ext",1.6,1.32,.07,-.55,V+1.88,4.4,x,{uvScale:0}),t.box("ext",.65,B-1.2,.26,.6,V+2.15,4.4,s,{solid:!0}),t.box("ext",8.25,1.2,.26,-3.2,V+.6,-4.4,o,{solid:!0}),t.box("ext",8.25,B-1.2,.26,-3.2,V+2.15,-4.4,s,{solid:!0}),t.box("ext",.26,1.2,8.85,-7.3,V+.6,0,o,{solid:!0}),t.box("ext",.26,B-1.2,8.85,-7.3,V+2.15,0,s,{solid:!0}),t.box("ext",.26,B,3.64,.9,J,-2.6,s,{solid:!0}),t.box("ext",.26,.72,1.65,.9,V+2.74,0,s,{solid:!0}),t.box("ext",.26,B,3.64,.9,J,2.6,s,{solid:!0}),t.box("int",1.65,.38,.98,-2.25,V+.2,-1.15,a,{solid:!0}),t.box("int",.62,.08,.62,-2.25,V+.08,-2.05,_,{uvScale:0}),t.box("int",.62,.08,.62,-2.25,V+.08,-.25,_,{uvScale:0}),t.box("int",1.55,1.48,.52,-.25,V+.75,-3.95,f,{solid:!0,uvScale:0}),t.box("int",1.85,.92,.62,-3.55,V+.46,-3.98,v,{solid:!0,uvScale:0}),t.box("int",.56,1.85,1.25,-4.95,V+.94,-3.45,b,{solid:!0,uvScale:0}),t.stairRun("int",{x0:-6.15,z0:2.35,x1:-6.15,z1:-1.65,y0:V+.04,y1:G+.04,width:1.15,steps:14,treadMat:a,stringerMat:a,railMat:l,railLeft:!1,railRight:!0,closedRisers:!0,guardLeft:!1,guardRight:!0}),t.box("ext",1.14,B,.26,2.85,J,4.1,E,{solid:!0}),t.box("ext",2.86,.84,.16,4.8,V+2.68,4.12,T,{solid:!0,uvScale:0}),t.box("ext",3.04,.34,.34,4.8,V+3.04,4.24,O),t.box("ext",1.14,B,.26,6.75,J,4.1,E,{solid:!0}),t.box("ext",5.05,B,.26,4.8,J,-4.1,P,{solid:!0}),t.box("ext",.26,B,8.25,7.3,J,0,E,{solid:!0}),t.box("ext",.26,B,3.34,2.3,J,-2.45,P,{solid:!0}),t.box("ext",.26,.72,1.65,2.3,V+2.74,0,P,{solid:!0}),t.box("ext",.26,B,3.34,2.3,J,2.45,P,{solid:!0}),t.box("ext",.08,2.24,1.1,2.62,V+1.12,1.25,S,{ry:.45,uvScale:0}),t.box("int",1.65,1.85,.56,3.85,V+.94,-3.62,q,{solid:!0,uvScale:0}),t.box("int",1.15,1.25,.52,2.95,V+.64,2.55,k,{solid:!0,uvScale:0}),t.box("int",.54,1.45,1.65,2.75,V+.74,-2.25,U,{solid:!0,uvScale:0}),t.stairRun("int",{x0:6.35,z0:1.95,x1:6.35,z1:-1.95,y0:V+.04,y1:G+.04,width:1.06,steps:14,treadMat:c,stringerMat:F,railMat:F,railLeft:!0,railRight:!1,closedRisers:!1,guardLeft:!0,guardRight:!1});const lt=Z-G,ht=G+lt*.5;t.box("int",6.32,.16,8.8,-2.26,G-.06,0,l),t.box("int",1.88,.16,2.72,-6.36,G-.06,-3.04,l),t.box("int",1.88,.16,1.96,-6.36,G-.06,3.42,l),t.box("int",5.2,.04,7.6,-2.1,G+.03,0,h),t.collider(-5.42,.9,G-.16,G+.02,-4.4,4.4),t.collider(-7.3,-5.42,G-.16,G+.02,-4.4,-1.72),t.collider(-7.3,-5.42,G-.16,G+.02,2.46,4.4),t.floor(-5.38,.95,-4.28,4.35,G+.04),t.floor(-7.18,-5.36,-4.28,-1.68,G+.04),t.floor(-7.18,-5.36,2.42,4.28,G+.04),t.kouranRailing("int",-5.42,-1.7,-5.42,2.46,G,.94,a,.54),t.kouranRailing("int",-7.18,2.46,-5.42,2.46,G,.94,a,.5),t.box("ext",7.3,.16,1,-3.2,G-.04,4.88,l),t.kouranRailing("ext",-6.82,5.34,.42,5.34,G,.94,a,.54),t.kouranRailing("ext",-6.82,4.4,-6.82,5.34,G,.94,a,.54),t.kouranRailing("ext",.42,4.4,.42,5.34,G,.94,a,.54),t.floor(-6.72,.34,4.32,5.26,G+.04),t.box("ext",3.48,lt,.22,-5.56,ht,4.4,s,{solid:!0}),t.box("ext",1.74,.68,.22,-3,G+2.61,4.4,s,{solid:!0}),t.box("ext",3.08,lt,.22,-.62,ht,4.4,s,{solid:!0}),t.box("ext",8.25,lt,.22,-3.2,ht,-4.4,s,{solid:!0}),t.box("ext",.22,lt,8.85,-7.3,ht,0,s,{solid:!0}),t.box("ext",.22,lt,3.32,.9,ht,-2.75,s,{solid:!0}),t.box("ext",.22,.66,2.24,.9,G+2.62,0,s,{solid:!0}),t.box("ext",.22,lt,3.32,.9,ht,2.75,s,{solid:!0}),t.box("int",1.65,.34,2.1,-2.45,G+.21,-2.45,L,{solid:!0,uvScale:0}),t.box("int",1.25,1.15,.5,-.35,G+.58,-3.95,Y,{solid:!0,uvScale:0}),t.box("ext",1.65,.22,3.1,1.6,G-.08,0,a),t.box("int",1.6,.04,2.95,1.6,G+.03,0,c),t.collider(.85,2.35,G-.2,G+.02,-1.5,1.5),t.floor(.82,2.4,-1.38,1.38,G+.04);for(const j of[-1.5,1.5])t.box("ext",1.55,.85,.16,1.6,G+.42,j,o,{solid:!0}),t.box("ext",1.5,1.52,.06,1.6,G+1.6,j,g,{uvScale:0}),t.box("ext",1.55,.46,.16,1.6,G+2.6,j,a,{solid:!0});t.kawaraSlope("ext",{bottomWidth:1.95,run:1.95,pitch:.42,ridgeX:1.6,ridgeY:Z+.72,ridgeZ:0,downslopeYaw:0,tileMat:$,ribMat:N,rafterMat:a,ribSpacing:.36}),t.kawaraSlope("ext",{bottomWidth:1.95,run:1.95,pitch:.42,ridgeX:1.6,ridgeY:Z+.72,ridgeZ:0,downslopeYaw:Math.PI,tileMat:$,ribMat:N,rafterMat:a,ribSpacing:.36}),t.box("int",3.4,.16,8.2,4,G-.06,0,c),t.box("int",1.64,.16,2.12,6.48,G-.06,-3.04,c),t.box("int",1.64,.16,2.12,6.48,G-.06,3.04,c),t.box("int",3.1,.04,6.8,4,G+.03,0,D),t.collider(2.3,5.68,G-.16,G+.02,-4.1,4.1),t.collider(5.68,7.3,G-.16,G+.02,-4.1,-2.02),t.collider(5.68,7.3,G-.16,G+.02,2.02,4.1),t.floor(2.25,5.66,-3.98,3.98,G+.04),t.floor(5.62,7.18,-3.98,-1.96,G+.04),t.floor(5.62,7.18,2,3.98,G+.04),t.kouranRailing("int",5.68,-2,5.68,2.02,G,.94,F,.54),t.kouranRailing("int",5.68,2.02,7.18,2.02,G,.94,F,.5),t.box("ext",5.05,.96,.2,4.8,G+.48,4.1,M,{solid:!0}),t.box("ext",1.15,lt-.96,.2,2.86,G+1.96,4.1,M,{solid:!0}),t.box("ext",2.45,.52,.2,4.65,G+2.69,4.1,I,{solid:!0}),t.box("ext",2.4,1.48,.06,4.65,G+1.7,4.1,g,{uvScale:0}),t.box("ext",1.45,lt-.96,.2,6.58,G+1.96,4.1,M,{solid:!0}),t.box("ext",5.05,lt,.2,4.8,ht,-4.1,M,{solid:!0}),t.box("ext",.2,lt,8.25,7.3,ht,0,I,{solid:!0}),t.box("ext",.2,lt,3.02,2.3,ht,-2.6,M,{solid:!0}),t.box("ext",.2,.66,2.24,2.3,G+2.62,0,M,{solid:!0}),t.box("ext",.2,lt,3.02,2.3,ht,2.6,M,{solid:!0}),t.box("int",1.85,.54,.8,4.15,G+.28,3.45,w,{solid:!0}),t.box("int",.52,1.95,1.65,2.75,G+.98,2.45,X,{solid:!0,uvScale:0}),t.box("int",1.55,2.1,.05,4.1,G+1.85,-1.65,y,{uvScale:0}),t.box("int",1.25,1.12,.48,3.85,G+.56,-3.62,Y,{solid:!0,uvScale:0}),t.kawaraSlope("ext",{bottomWidth:8.8,run:1.25,pitch:.36,ridgeX:-3.2,ridgeY:G+.12,ridgeZ:4.36,downslopeYaw:0,tileMat:$,ribMat:N,rafterMat:a,ribSpacing:.38});const z=.48,ut=5.3,et=Z+ut*Math.tan(z)-.1,rt=-3.2,ct=9.7,Q=et-Z+.1;t.gablePrism("ext",8.9,Q,.24,-7.3,Z-.04,0,s,{ry:Math.PI*.5}),t.gablePrism("ext",8.9,Q,.24,.9,Z-.04,0,s,{ry:Math.PI*.5}),t.kawaraSlope("ext",{bottomWidth:ct,run:ut,pitch:z,ridgeX:rt,ridgeY:et,ridgeZ:0,downslopeYaw:0,tileMat:$,ribMat:N,rafterMat:a,ribSpacing:.36}),t.kawaraSlope("ext",{bottomWidth:ct,run:ut,pitch:z,ridgeX:rt,ridgeY:et,ridgeZ:0,downslopeYaw:Math.PI,tileMat:$,ribMat:N,rafterMat:a,ribSpacing:.36}),t.kawaraRidge("ext",rt-ct*.5+.06,et+.04,0,rt+ct*.5-.06,et+.04,0,H,K,{scale:1.06,courses:3,oniStart:!0,oniEnd:!0}),t.box("ext",.2,1.1,8.25,2.3,Z+.5,0,M),t.box("ext",6.1,.12,9.2,5,Z+.54,0,I,{rz:-.2}),t.box("ext",6.12,.06,3.05,5,Z+.61,-2.6,M,{rz:-.2});for(const j of[-3.4,-1.1,1.2,3.4])t.box("int",5.2,.14,.12,4.8,Z+.42,j,F,{rz:-.2});return t.build({id:"H15",name:"吉田家（明治本瓦本屋×昭和トタン車庫・空中渡り廊下邸）",subtitle:"1880年本瓦本屋と1958年トタン車庫を2Fガラス渡り廊下で連結",category:"house",builtYear:1880,abandonedYear:1985,stories:2,floorElevations:[V,G],entryLocal:[-3,0,6.8],entryLookLocalYaw:0})}function h2(i,e){const t=new Se(i),n=e.getMaterial("wet_dark_rock",{roughness:.88,bumpScale:.08}),r=e.getMaterial("ishigaki_rubble",{roughness:.94,bumpScale:.08}),o=e.getMaterial("ishigaki_mossy",{roughness:.94,bumpScale:.08}),s=e.getMaterial("ishigaki_cut",{roughness:.92,bumpScale:.07}),a=e.getMaterial("weathered_limestone",{roughness:.92,bumpScale:.06}),l=e.getMaterial("dressed_stone",{roughness:.9,bumpScale:.06}),c=e.getMaterial("mine_steel_door",{roughness:.68,metalness:.52,bumpScale:.05}),u=e.getMaterial("clay_earth",{roughness:.96,bumpScale:.06}),d=e.getMaterial("charred_cedar",{roughness:.9,bumpScale:.05}),h=e.getMaterial("aged_timber_planks",{roughness:.91,bumpScale:.06}),p=e.getMaterial("white_plaster",{roughness:.92,bumpScale:.04,tint:16117990});e.getMaterial("washi_plaster",{roughness:.91,bumpScale:.03});const x=e.getMaterial("dark_hardwood",{roughness:.84,bumpScale:.04}),g=e.getMaterial("warm_wood_plank",{roughness:.82,bumpScale:.04}),m=e.getMaterial("oak_flooring",{roughness:.8,bumpScale:.03}),f=e.getMaterial("carved_wood_lattice",{roughness:.86,bumpScale:.05}),_=e.getMaterial("wood_slat_screen",{roughness:.85,bumpScale:.05}),v=e.getMaterial("woven_screen_brown",{roughness:.9,bumpScale:.05}),b=e.getMaterial("cedar_louvers",{roughness:.86,bumpScale:.05}),P=e.getMaterial("tatami_bordered",{roughness:.92,bumpScale:.04}),E=e.getMaterial("tatami_plain",{roughness:.92,bumpScale:.04}),A=e.getMaterial("shoji_sliding_door",{roughness:.88,opacity:.88,transparent:!0}),T=e.getMaterial("window_frosted_wood",{roughness:.3,opacity:.34,transparent:!0}),S=e.getMaterial("red_zabuton",{roughness:.92,bumpScale:.03}),M=e.getMaterial("retro_kitchen_unit",{roughness:.78,bumpScale:.03}),I=e.getMaterial("kitchen_cabinet",{roughness:.82,bumpScale:.03}),O=e.getMaterial("antique_tansu",{roughness:.78,bumpScale:.04}),k=e.getMaterial("wooden_dresser",{roughness:.82,bumpScale:.03}),U=e.getMaterial("storage_rack",{roughness:.88,bumpScale:.04}),D=e.getMaterial("coarse_canvas",{roughness:.95,bumpScale:.05,doubleSide:!0}),w=e.getMaterial("coir_doormat",{roughness:.96,bumpScale:.06}),y=e.getMaterial("slate_roof_dark",{roughness:.72,metalness:.18,bumpScale:.06,tint:8028296}),F=e.getMaterial("dark_slate",{roughness:.68,metalness:.22,bumpScale:.05,tint:6844022}),q=e.getMaterial("dark_iron_plate",{roughness:.6,metalness:.3,tint:5791334}),Y=e.getMaterial("matte_black_metal",{roughness:.52,metalness:.4,tint:4738646}),X=.18,L=1.1,$=4.1,N=7.05,H=9.65;t.box("ext",6.8,2.8,9.4,-3.85,X-1.42,0,n),t.box("ext",7.9,3.6,9.4,3.25,L-1.82,0,r),t.box("ext",7.65,2.2,1.3,3.3,L-1.12,5.12,s),t.box("ext",7.55,.1,1.24,3.3,L-.02,5.12,l),t.floor(-.45,7,4.45,5.7,L+.04),t.stoneSteps("ext",2.4,7.35,5.65,-.05,L,2.65,5,l);for(const j of[-.4,.9,3.9,6.95])t.box("ext",.18,2.95,.18,j,L+1.5,5.65,x,{solid:!0});t.box("ext",7.65,.2,.2,3.3,L+2.96,5.65,x),t.box("ext",1.45,.36,2.4,-7.8,X-.18,-.1,l),t.box("ext",.48,.16,2.1,-8.72,.04,-.1,l),t.floor(-8.96,-7,-1.25,1.05,X+.04);const K=$-X,V=X+K*.5,G=$-L;t.box("int",6.55,.16,8.95,-3.85,X-.06,0,n),t.floor(-6.98,-.58,-4.38,4.38,X+.04),t.box("ext",6.6,1.85,.42,-3.85,X+.92,4.5,n,{solid:!0}),t.box("ext",1.15,K-1.85,.42,-6.58,X+2.88,4.5,o,{solid:!0}),t.box("ext",1.5,K-1.85,.42,-3.85,X+2.88,4.5,o,{solid:!0}),t.box("ext",1.15,K-1.85,.42,-1.12,X+2.88,4.5,o,{solid:!0}),t.box("ext",6.6,.98,.42,-3.85,$-.49,4.5,s,{solid:!0});for(const j of[-5.3,-2.4])t.box("ext",1.44,.08,.46,j,X+1.88,4.5,x),t.box("ext",1.44,.08,.46,j,$-.98,4.5,x),t.box("ext",1.38,1.05,.08,j,X+2.4,4.5,_,{uvScale:0});t.box("ext",6.6,1.6,.42,-3.85,X+.8,-4.5,n,{solid:!0}),t.box("ext",6.6,K-1.6,.42,-3.85,X+2.76,-4.5,o,{solid:!0}),t.box("ext",.42,K,3.48,-7.1,V,-2.78,o,{solid:!0}),t.box("ext",.42,K-2.38,1.94,-7.1,$-(K-2.38)*.5,-.1,s,{solid:!0}),t.box("ext",.46,.12,1.98,-7.1,X+2.38,-.1,x),t.box("ext",.42,K,3.68,-7.1,V,2.68,o,{solid:!0}),t.box("ext",.12,2.32,1.25,-7.52,X+1.16,1.25,c,{ry:-.78,uvScale:0}),t.box("int",6.18,K-.1,.1,-3.85,V,-4.24,a);for(const j of[-3.2,-1.6,0,1.6,3.2])t.box("int",6.2,.24,.22,-3.85,$-.22,j,x);t.box("int",.34,K,6.05,-.6,V,-1.48,a,{solid:!0}),t.box("int",.34,.9,1.84,-.6,$-.45,2.45,a,{solid:!0}),t.box("int",.38,.1,1.88,-.6,$-.9,2.45,x),t.box("int",.34,K,1.18,-.6,V,3.92,a,{solid:!0}),t.stairRun("int",{x0:.55,z0:2.45,x1:-1.75,z1:2.45,y0:L+.04,y1:X+.04,width:1.48,steps:5,treadMat:l,stringerMat:s,railMat:x,railLeft:!0,railRight:!0,closedRisers:!0,guardLeft:!0,guardRight:!0});for(const[j,C]of[[-5.65,-3.15],[-4.15,-3.15],[-2.65,-3.15],[-5.65,2.85]])t.cyl("int",.52,.56,1.32,12,j,X+.66,C,h),t.cyl("int",.56,.56,.08,12,j,X+.32,C,x),t.cyl("int",.56,.56,.08,12,j,X+1,C,x),t.collider(j-.55,j+.55,X,X+1.34,C-.55,C+.55);t.box("int",.62,1.95,2.25,-1.25,X+.98,-2.55,U,{solid:!0,uvScale:0}),t.box("int",1.45,.85,1.15,-3.85,X+.44,-.55,D,{solid:!0}),t.box("int",6.55,.16,9,3.82,L-.06,0,u),t.box("int",1.18,.16,6.08,-.02,L-.06,-1.48,u),t.box("int",1.18,.16,1.18,-.02,L-.06,3.92,u),t.box("int",4.45,.05,4.95,2.45,L+.03,-1.45,P),t.box("int",1.2,.03,.7,2.4,L+.04,4.1,w,{uvScale:0}),t.floor(.5,6.98,-4.38,4.55,L+.04),t.floor(-.55,.56,-4.38,1.56,L+.04),t.floor(-.55,.56,3.34,4.42,L+.04),t.kouranRailing("int",-.45,1.55,.55,1.55,L,.88,x,.45),t.kouranRailing("int",-.45,3.35,.55,3.35,L,.88,x,.45),t.box("ext",1.98,1.05,.24,.36,L+.52,4.5,d,{solid:!0}),t.box("ext",1.98,G-1.05,.24,.36,L+2.02,4.5,p,{solid:!0}),t.box("ext",2.14,.68,.24,2.4,$-.34,4.5,p,{solid:!0}),t.box("ext",2.16,.09,.28,2.4,$-.68,4.5,x),t.box("ext",3.68,1.05,.24,5.28,L+.52,4.5,d,{solid:!0}),t.box("ext",.9,G-1.05,.24,3.88,L+2.02,4.5,p,{solid:!0}),t.box("ext",2,.5,.24,5.32,$-.25,4.5,p,{solid:!0}),t.box("ext",2.02,.08,.28,5.32,L+1.06,4.5,x),t.box("ext",2.02,.08,.28,5.32,$-.5,4.5,x),t.box("ext",1.96,1.44,.06,5.32,L+1.78,4.5,f,{uvScale:0}),t.box("ext",.8,G-1.05,.24,6.72,L+2.02,4.5,p,{solid:!0}),t.box("ext",7.75,1.05,.24,3.25,L+.52,-4.5,d,{solid:!0}),t.box("ext",7.75,G-1.05,.24,3.25,L+2.02,-4.5,h,{solid:!0}),t.box("ext",.24,1.05,9.06,7.1,L+.52,0,d,{solid:!0}),t.box("ext",.24,G-1.05,9.06,7.1,L+2.02,0,h,{solid:!0}),t.box("int",1.45,.82,.92,.55,L+.41,-3.86,s,{solid:!0}),t.box("int",2.05,.92,.64,2.85,L+.46,-4.02,M,{solid:!0,uvScale:0}),t.box("int",1.5,.36,.92,2.45,L+.2,-1.25,x,{solid:!0}),t.box("int",.6,.07,.6,2.45,L+.07,-2.05,S,{uvScale:0}),t.box("int",.6,.07,.6,2.45,L+.07,-.45,S,{uvScale:0}),t.box("int",.54,1.48,1.4,-.1,L+.74,-.85,O,{solid:!0,uvScale:0}),t.stairRun("int",{x0:5.75,z0:2.4,x1:5.75,z1:-1.95,y0:L+.04,y1:$+.04,width:1.15,steps:14,treadMat:x,stringerMat:x,railMat:g,railLeft:!0,railRight:!1,closedRisers:!1,guardLeft:!0,guardRight:!1});const Z=N-$,B=$+Z*.5;t.box("int",12.16,.16,9,-1.02,$-.06,0,m),t.box("int",2.08,.16,2.52,6.08,$-.06,-3.26,m),t.box("int",2.08,.16,2.04,6.08,$-.06,3.48,m),t.box("int",5.2,.04,6.4,2.25,$+.03,.45,E),t.collider(-7.1,5.05,$-.16,$+.02,-4.5,4.5),t.collider(5.05,7.1,$-.16,$+.02,-4.5,-2.02),t.collider(5.05,7.1,$-.16,$+.02,2.48,4.5),t.floor(-6.98,5.02,-4.38,4.46,$+.04),t.floor(4.96,6.98,-4.38,-1.96,$+.04),t.floor(4.96,6.98,2.44,4.4,$+.04),t.kouranRailing("int",5.05,-2.02,5.05,2.48,$,.94,x,.56),t.kouranRailing("int",5.05,2.48,6.98,2.48,$,.94,x,.48),t.box("ext",8.2,.16,1.2,2.88,$-.04,5.08,g),t.kouranRailing("ext",-1.2,5.64,6.95,5.64,$,.94,x,.56),t.kouranRailing("ext",-1.2,4.5,-1.2,5.64,$,.94,x,.52),t.kouranRailing("ext",6.95,4.5,6.95,5.64,$,.94,x,.52),t.floor(-1.12,6.85,4.42,5.56,$+.04),t.box("ext",6.55,Z,.3,-3.82,B,4.5,p,{solid:!0}),t.box("ext",1.45,.9,.12,-3.85,$+1.65,4.66,x),t.box("ext",1.8,Z,.22,.3,B,4.5,p,{solid:!0}),t.box("ext",1.84,.68,.22,2.1,N-.34,4.5,p,{solid:!0}),t.box("ext",1.86,.09,.26,2.1,N-.68,4.5,x),t.box("ext",4.15,.92,.22,5.06,$+.46,4.5,p,{solid:!0}),t.box("ext",1.05,Z-.92,.22,3.5,$+1.94,4.5,p,{solid:!0}),t.box("ext",2.05,.54,.22,5.05,N-.27,4.5,p,{solid:!0}),t.box("ext",2.08,.08,.26,5.05,$+.94,4.5,x),t.box("ext",2.08,.08,.26,5.05,N-.54,4.5,x),t.box("ext",2,1.46,.06,5.05,$+1.68,4.5,T,{uvScale:0}),t.box("ext",1.08,Z-.92,.22,6.6,$+1.94,4.5,p,{solid:!0}),t.box("ext",14.25,Z,.26,0,B,-4.5,p,{solid:!0}),t.box("ext",.3,Z,9.06,-7.1,B,0,p,{solid:!0}),t.box("ext",.22,Z,9.06,7.1,B,0,p,{solid:!0}),t.box("int",.26,Z,3.25,-.6,B,-2.88,p,{solid:!0}),t.box("int",.26,.68,1.78,-.6,N-.34,-.38,p,{solid:!0}),t.box("int",.3,.09,1.82,-.6,N-.68,-.38,x),t.box("int",.26,Z,4.02,-.6,B,2.5,p,{solid:!0}),t.box("int",.56,1.5,1.55,-6.52,$+.76,-2.65,O,{solid:!0,uvScale:0}),t.box("int",.56,1.5,1.55,-6.52,$+.76,1.65,O,{solid:!0,uvScale:0}),t.box("int",1.65,.88,.86,-3.85,$+.44,-3.55,D,{solid:!0}),t.box("int",1.45,1.15,.54,3.45,$+.58,-3.95,k,{solid:!0,uvScale:0}),t.box("int",1.35,1.8,.54,1.65,$+.9,-4.02,I,{solid:!0,uvScale:0}),t.stairRun("int",{x0:1.35,z0:2.15,x1:1.35,z1:-1.85,y0:$+.04,y1:N+.04,width:1.12,steps:14,treadMat:x,stringerMat:x,railMat:g,railLeft:!0,railRight:!0,closedRisers:!1,guardLeft:!0,guardRight:!0});const J=H-N,lt=N+J*.5;t.box("int",6.12,.16,6.2,-2.35,N-.06,0,h),t.box("int",3.42,.16,6.2,3.71,N-.06,0,h),t.box("int",1.34,.16,1.22,1.35,N-.06,-2.5,h),t.box("int",1.34,.16,.88,1.35,N-.06,2.67,h),t.collider(-5.4,.7,N-.16,N+.02,-3.1,3.1),t.collider(2,5.4,N-.16,N+.02,-3.1,3.1),t.collider(.7,2,N-.16,N+.02,-3.1,-1.92),t.collider(.7,2,N-.16,N+.02,2.25,3.1),t.floor(-5.28,.74,-2.98,2.98,N+.04),t.floor(1.96,5.28,-2.98,2.98,N+.04),t.floor(.68,2.02,-2.98,-1.86,N+.04),t.floor(.68,2.02,2.2,2.98,N+.04),t.kouranRailing("int",.7,-1.92,.7,2.25,N,.92,x,.56),t.kouranRailing("int",2,-1.92,2,2.25,N,.92,x,.56),t.kouranRailing("int",.7,2.25,2,2.25,N,.92,x,.45),t.box("ext",10.85,.86,.22,0,N+.43,3.1,h,{solid:!0}),t.box("ext",2.4,J-.86,.22,-4.22,N+1.73,3.1,p,{solid:!0}),t.box("ext",6.08,.44,.22,0,H-.22,3.1,p,{solid:!0}),t.box("ext",6.1,.08,.26,0,N+.88,3.1,x),t.box("ext",6.1,.08,.26,0,H-.44,3.1,x),t.box("ext",6.04,1.28,.06,0,N+1.52,3.1,A,{uvScale:0}),t.box("ext",2.4,J-.86,.22,4.22,N+1.73,3.1,p,{solid:!0}),t.box("ext",10.85,J,.22,0,lt,-3.1,p,{solid:!0}),t.box("ext",.22,J,6.24,-5.4,lt,0,p,{solid:!0}),t.box("ext",.22,J,6.24,5.4,lt,0,p,{solid:!0});for(const j of[-3.6,-1.2,2.2,4.2])t.box("int",.22,.24,6,j,H-.14,0,x);for(const j of[-3.65,3.55]){t.box("int",1.85,.05,1.15,j,N+.65,.35,v,{solid:!0}),t.box("int",1.85,.05,1.15,j,N+1.25,.35,v),t.box("int",1.85,.05,1.15,j,N+1.85,.35,v);for(const C of[-.88,.88])for(const R of[-.52,.52])t.box("int",.08,1.92,.08,j+C,N+.96,.35+R,x)}t.box("int",1.75,.85,.72,-3.15,N+.44,-2.55,U,{solid:!0,uvScale:0}),t.kawaraSlope("ext",{bottomWidth:8.2,run:1.55,pitch:.35,ridgeX:3.3,ridgeY:$+.08,ridgeZ:4.46,downslopeYaw:0,tileMat:y,ribMat:F,rafterMat:x,ribSpacing:.38});const ht=.4;t.kawaraSlope("ext",{topWidth:11,bottomWidth:15.6,run:2.85,pitch:ht,ridgeX:0,ridgeY:N+.56,ridgeZ:3.08,downslopeYaw:0,tileMat:y,ribMat:F,rafterMat:x,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:11,bottomWidth:15.6,run:2.4,pitch:ht,ridgeX:0,ridgeY:N+.48,ridgeZ:-3.08,downslopeYaw:Math.PI,tileMat:y,ribMat:F,rafterMat:x,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:6.4,bottomWidth:10.6,run:2.55,pitch:ht,ridgeX:5.38,ridgeY:N+.5,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:y,ribMat:F,rafterMat:x,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:6.4,bottomWidth:10.6,run:2.55,pitch:ht,ridgeX:-5.38,ridgeY:N+.5,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:y,ribMat:F,rafterMat:x,ribSpacing:.38});const z=.5,ut=4.25,et=H+ut*Math.tan(z)-.36;t.kawaraSlope("ext",{bottomWidth:12.6,run:ut,pitch:z,ridgeX:0,ridgeY:et,ridgeZ:0,downslopeYaw:0,tileMat:y,ribMat:F,rafterMat:x,ribSpacing:.36}),t.kawaraSlope("ext",{bottomWidth:12.6,run:ut,pitch:z,ridgeX:0,ridgeY:et,ridgeZ:0,downslopeYaw:Math.PI,tileMat:y,ribMat:F,rafterMat:x,ribSpacing:.36});const rt=et-H-.06;t.gablePrism("ext",6.24,rt,.22,-5.4,H,0,p,{ry:Math.PI*.5}),t.gablePrism("ext",6.24,rt,.22,5.4,H,0,p,{ry:Math.PI*.5}),t.kawaraRidge("ext",-6.2,et+.04,0,6.2,et+.04,0,q,Y,{scale:1.05,courses:2,oniStart:!0,oniEnd:!0});const ct=et-.1,Q=ct+.92;return t.box("ext",5.4,.88,1.5,0,ct+.44,0,b),t.kawaraSlope("ext",{bottomWidth:6.3,run:1.25,pitch:.4,ridgeX:0,ridgeY:Q+.46,ridgeZ:0,downslopeYaw:0,tileMat:y,ribMat:F,rafterMat:x,ribSpacing:.34}),t.kawaraSlope("ext",{bottomWidth:6.3,run:1.25,pitch:.4,ridgeX:0,ridgeY:Q+.46,ridgeZ:0,downslopeYaw:Math.PI,tileMat:y,ribMat:F,rafterMat:x,ribSpacing:.34}),t.kawaraRidge("ext",-3.05,Q+.5,0,3.05,Q+.5,0,q,Y,{scale:.78,courses:1,oniStart:!0,oniEnd:!0}),t.build({id:"H16",name:"田辺家（半地下石倉・養蚕大屋根の明治豪農三階家）",subtitle:"半地下石倉(5段下降)・重鉄防火扉・高床土間竈・2F収穫縁側・3F養蚕屋根裏＆越屋根",category:"house",builtYear:1878,abandonedYear:1985,stories:3,floorElevations:[X,L,$,N],entryLocal:[2.4,0,9.2],entryLookLocalYaw:0})}function f2(i,e){const t=new Se(i),n=e.getMaterial("basalt_cliff",{roughness:.94,bumpScale:.08}),r=e.getMaterial("lichen_rock",{roughness:.94,bumpScale:.08}),o=e.getMaterial("ishigaki_cut",{roughness:.92,bumpScale:.07}),s=e.getMaterial("sidewalk_slab",{roughness:.9,bumpScale:.05}),a=e.getMaterial("charred_cedar",{roughness:.9,bumpScale:.05}),l=e.getMaterial("aged_timber_planks",{roughness:.91,bumpScale:.05}),c=e.getMaterial("white_plaster",{roughness:.92,bumpScale:.04,tint:16249576});e.getMaterial("washi_plaster",{roughness:.91,bumpScale:.03});const u=e.getMaterial("dark_hardwood",{roughness:.84,bumpScale:.04}),d=e.getMaterial("warm_wood_plank",{roughness:.82,bumpScale:.04}),h=e.getMaterial("oak_flooring",{roughness:.8,bumpScale:.03}),p=e.getMaterial("woven_screen_brown",{roughness:.9,bumpScale:.05}),x=e.getMaterial("carved_wood_lattice",{roughness:.86,bumpScale:.05}),g=e.getMaterial("wood_slat_screen",{roughness:.85,bumpScale:.05}),m=e.getMaterial("tatami_bordered",{roughness:.92,bumpScale:.04}),f=e.getMaterial("tatami_green_border",{roughness:.92,bumpScale:.04}),_=e.getMaterial("indigo_sakura_fabric",{roughness:.92,bumpScale:.02,doubleSide:!0}),v=e.getMaterial("shoji_sliding_door",{roughness:.88,opacity:.88,transparent:!0}),b=e.getMaterial("window_frosted_wood",{roughness:.22,opacity:.22,transparent:!0,tint:14872309}),P=e.getMaterial("red_zabuton",{roughness:.92,bumpScale:.03}),E=e.getMaterial("antique_tansu",{roughness:.78,bumpScale:.04}),A=e.getMaterial("retro_kitchen_unit",{roughness:.78,bumpScale:.03}),T=e.getMaterial("kitchen_cabinet",{roughness:.82,bumpScale:.03}),S=e.getMaterial("wooden_dresser",{roughness:.82,bumpScale:.03}),M=e.getMaterial("coir_doormat",{roughness:.96,bumpScale:.06}),I=e.getMaterial("slate_roof_dark",{roughness:.68,metalness:.24,bumpScale:.06,tint:11040352}),O=e.getMaterial("dark_slate",{roughness:.64,metalness:.28,bumpScale:.05,tint:9593422}),k=e.getMaterial("dark_iron_plate",{roughness:.58,metalness:.34,tint:8147008}),U=e.getMaterial("matte_black_metal",{roughness:.5,metalness:.42,tint:6438450}),D=1.85,w=4.95,y=7.95,F=10.75;t.box("ext",12.2,4.4,3.6,0,D-2.35,-3.1,n),t.box("ext",14,.36,9.2,-.5,D-.22,0,u);for(const z of[-7.1,-5.5,-2.75,0,2.75,5.5])for(const ut of[-3.9,-1.25,1.45,4.1])z<-6.2&&Math.abs(ut)>3.6||(t.box("ext",.62,.72,.62,z,-.18,ut,r),t.box("ext",.3,D+1.8,.3,z,D*.5-.9,ut,u));for(const z of[.55,1.3])t.box("ext",13,.18,.18,-.65,z,4.1,u),t.box("ext",13,.18,.18,-.65,z,1.45,u),t.box("ext",.18,.18,8.2,-5.5,z,.1,u),t.box("ext",.18,.18,8.2,5.5,z,.1,u);for(const z of[-4.12,-1.38,1.38,4.12])t.box("ext",2.85,.16,.16,z,.92,4.1,u,{rz:.44}),t.box("ext",2.85,.16,.16,z,.92,4.1,u,{rz:-.44});for(const z of[-2.55,.1,2.78])t.box("ext",.16,.16,2.75,-5.5,.92,z,u,{rx:.44}),t.box("ext",.16,.16,2.75,5.5,.92,z,u,{rx:-.44});t.box("ext",3.1,.45,1.35,.2,-.18,9.45,o),t.box("ext",2.95,.1,1.25,.2,.04,9.45,s),t.floor(-1.25,1.65,8.75,10.1,.08);for(const z of[6.55,8.65]){const ut=z<7.5?1.05:.3;t.box("ext",.24,ut+.8,.24,-.95,ut*.5-.4,z,u),t.box("ext",.24,ut+.8,.24,1.35,ut*.5-.4,z,u),t.box("ext",2.6,.18,.18,.2,ut,z,u)}t.stairRun("ext",{x0:.2,z0:8.85,x1:.2,z1:4.38,y0:.02,y1:D+.04,width:2.3,steps:11,treadMat:d,stringerMat:u,railMat:u,railLeft:!0,railRight:!0,closedRisers:!1,guardLeft:!0,guardRight:!0});const q=w-D,Y=D+q*.5;t.box("int",11.65,.14,8.65,0,D-.05,0,h),t.box("int",4.65,.04,5.45,-1.55,D+.03,-1.05,m),t.box("int",1.25,.03,.72,.2,D+.04,3.85,M,{uvScale:0}),t.floor(-5.7,5.7,-4.18,4.45,D+.04),t.box("ext",1.68,.16,7.68,-6.62,D-.04,0,d),t.kouranRailing("ext",-7.42,-3.8,-7.42,3.8,D,.96,u,.56),t.kouranRailing("ext",-7.42,-3.8,-5.8,-3.8,D,.96,u,.5),t.kouranRailing("ext",-7.42,3.8,-5.8,3.8,D,.96,u,.5),t.floor(-7.34,-5.72,-3.72,3.72,D+.04),t.box("ext",4.9,1.08,.24,-3.38,D+.54,4.3,a,{solid:!0}),t.box("ext",1.2,q-1.08,.24,-5.22,D+2.08,4.3,l,{solid:!0}),t.box("ext",2.45,.52,.24,-3.38,w-.26,4.3,l,{solid:!0}),t.box("ext",2.48,.08,.28,-3.38,D+1.1,4.3,u),t.box("ext",2.48,.08,.28,-3.38,w-.52,4.3,u),t.box("ext",2.4,1.48,.06,-3.38,D+1.84,4.3,x,{uvScale:0}),t.box("ext",1.25,q-1.08,.24,-1.55,D+2.08,4.3,l,{solid:!0}),t.box("ext",2.34,.7,.24,.2,w-.35,4.3,l,{solid:!0}),t.box("ext",2.36,.09,.28,.2,w-.7,4.3,u),t.box("ext",4.5,1.08,.24,3.58,D+.54,4.3,a,{solid:!0}),t.box("ext",1.2,q-1.08,.24,1.92,D+2.08,4.3,l,{solid:!0}),t.box("ext",2.15,.52,.24,3.6,w-.26,4.3,l,{solid:!0}),t.box("ext",2.18,.08,.28,3.6,D+1.1,4.3,u),t.box("ext",2.18,.08,.28,3.6,w-.52,4.3,u),t.box("ext",2.1,1.48,.06,3.6,D+1.84,4.3,g,{uvScale:0}),t.box("ext",1.18,q-1.08,.24,5.24,D+2.08,4.3,l,{solid:!0}),t.box("ext",.24,q,3.45,-5.8,Y,-2.6,l,{solid:!0}),t.box("ext",.24,.7,1.84,-5.8,w-.35,0,l,{solid:!0}),t.box("ext",.28,.09,1.86,-5.8,w-.7,0,u),t.box("ext",.24,q,3.45,-5.8,Y,2.6,l,{solid:!0}),t.box("ext",11.65,1.15,.24,0,D+.58,-4.3,a,{solid:!0}),t.box("ext",11.65,q-1.15,.24,0,D+2.12,-4.3,c,{solid:!0}),t.box("ext",.24,1.15,8.65,5.8,D+.58,0,a,{solid:!0}),t.box("ext",.24,q-1.15,8.65,5.8,D+2.12,0,l,{solid:!0}),t.box("int",1.45,.2,1.45,-1.55,D+.12,-1.05,o,{solid:!0}),t.box("int",.62,.07,.62,-1.55,D+.07,-2.25,P,{uvScale:0}),t.box("int",.62,.07,.62,-1.55,D+.07,.15,P,{uvScale:0}),t.box("int",1.95,.92,.64,1.45,D+.46,-3.86,A,{solid:!0,uvScale:0}),t.box("int",1.35,1.8,.54,-4.25,D+.9,-3.86,T,{solid:!0,uvScale:0}),t.box("int",.54,1.48,1.45,-5.28,D+.74,2.55,E,{solid:!0,uvScale:0}),t.stairRun("int",{x0:4.25,z0:2.35,x1:4.25,z1:-1.95,y0:D+.04,y1:w+.04,width:1.12,steps:14,treadMat:u,stringerMat:u,railMat:d,railLeft:!0,railRight:!1,closedRisers:!1,guardLeft:!0,guardRight:!1});const X=y-w,L=w+X*.5;t.box("int",8.2,.16,7.8,-.5,w-.06,-.3,h),t.box("int",1.84,.16,2.22,4.48,w-.06,-3.11,h),t.box("int",1.84,.16,1.18,4.48,w-.06,3.02,h),t.box("int",5.4,.04,5.8,.35,w+.03,-.55,f),t.collider(-4.6,3.58,w-.16,w+.02,-4.2,3.6),t.collider(3.58,5.4,w-.16,w+.02,-4.2,-2.02),t.collider(3.58,5.4,w-.16,w+.02,2.44,3.6),t.floor(-4.52,3.54,-4.08,3.68,w+.04),t.floor(3.5,5.28,-4.08,-1.96,w+.04),t.floor(3.5,5.28,2.4,3.52,w+.04),t.kouranRailing("int",3.58,-2.02,3.58,2.44,w,.94,u,.56),t.kouranRailing("int",3.58,2.44,5.32,2.44,w,.94,u,.48),t.box("ext",11.25,.16,1.16,-.18,w-.04,4.18,d),t.box("ext",1.24,.16,7.82,-5.2,w-.04,-.3,d),t.kouranRailing("ext",-5.78,4.74,5.42,4.74,w,.94,u,.56),t.kouranRailing("ext",-5.78,-4.2,-5.78,4.74,w,.94,u,.56),t.kouranRailing("ext",-5.78,-4.2,-4.6,-4.2,w,.94,u,.48),t.kouranRailing("ext",5.42,3.6,5.42,4.74,w,.94,u,.48),t.floor(-5.7,5.34,3.52,4.66,w+.04),t.floor(-5.7,-4.52,-4.12,3.68,w+.04),t.box("ext",3.48,X,.22,-2.88,L,3.6,c,{solid:!0}),t.box("ext",1.84,.68,.22,-.25,y-.34,3.6,c,{solid:!0}),t.box("ext",1.86,.09,.26,-.25,y-.68,3.6,u),t.box("ext",4.78,.88,.22,3.04,w+.44,3.6,c,{solid:!0}),t.box("ext",1.1,X-.88,.22,1.18,w+1.94,3.6,c,{solid:!0}),t.box("ext",2.4,.52,.22,2.92,y-.26,3.6,c,{solid:!0}),t.box("ext",2.44,.08,.26,2.92,w+.9,3.6,u),t.box("ext",2.44,.08,.26,2.92,y-.52,3.6,u),t.box("ext",2.36,1.56,.06,2.92,w+1.68,3.6,v,{uvScale:0}),t.box("ext",1.32,X-.88,.22,4.76,w+1.94,3.6,c,{solid:!0}),t.box("ext",.22,.88,7.84,-4.6,w+.44,-.3,c,{solid:!0}),t.box("ext",.22,X-.88,2.25,-4.6,w+1.94,-3.1,c,{solid:!0}),t.box("ext",.22,.52,3.35,-4.6,y-.26,-.3,c,{solid:!0}),t.box("ext",.26,.08,3.38,-4.6,w+.9,-.3,u),t.box("ext",.26,.08,3.38,-4.6,y-.52,-.3,u),t.box("ext",.06,1.56,3.3,-4.6,w+1.68,-.3,b,{uvScale:0}),t.box("ext",.22,X-.88,2.25,-4.6,w+1.94,2.5,c,{solid:!0}),t.box("ext",10.05,X,.22,.4,L,-4.2,c,{solid:!0}),t.box("ext",.22,X,7.84,5.4,L,-.3,c,{solid:!0}),t.box("int",1.85,2.15,.05,.85,w+1.68,-4,_,{uvScale:0}),t.box("int",.1,.1,2.4,2.45,w+2.35,-2.8,u),t.box("int",.05,1.55,1.85,2.45,w+1.58,-2.8,_,{uvScale:0}),t.box("int",1.4,.36,.86,.35,w+.2,-.55,u,{solid:!0}),t.box("int",.6,.07,.6,.35,w+.07,-1.35,P,{uvScale:0}),t.box("int",1.32,1.12,.52,-3.55,w+.56,-3.72,S,{solid:!0,uvScale:0}),t.stairRun("int",{x0:-2.1,z0:1.85,x1:-2.1,z1:-1.75,y0:w+.04,y1:y+.04,width:1.06,steps:14,treadMat:u,stringerMat:u,railMat:d,railLeft:!1,railRight:!0,closedRisers:!1,guardLeft:!1,guardRight:!0});const $=F-y,N=y+$*.5;t.box("int",4.68,.16,6,.88,y-.06,0,h),t.box("int",1.78,.16,1.22,-2.32,y-.06,-2.4,h),t.box("int",1.78,.16,1.12,-2.32,y-.06,2.45,h),t.box("int",3.6,.04,4.4,1.05,y+.03,0,m),t.box("int",6.32,.08,5.92,0,F-.05,0,p),t.collider(-1.45,3.2,y-.16,y+.02,-3,3),t.collider(-3.2,-1.45,y-.16,y+.02,-3,-1.82),t.collider(-3.2,-1.45,y-.16,y+.02,1.92,3),t.floor(-1.42,3.08,-2.88,2.88,y+.04),t.floor(-3.08,-1.4,-2.88,-1.78,y+.04),t.floor(-3.08,-1.4,1.88,2.88,y+.04),t.kouranRailing("int",-1.45,-1.82,-1.45,1.92,y,.92,u,.54),t.kouranRailing("int",-3.08,1.92,-1.45,1.92,y,.92,u,.48);for(const z of[-3,3]){t.box("ext",6.45,.8,.2,0,y+.4,z,c,{solid:!0}),t.box("ext",.98,$-.8,.2,-2.72,y+1.8,z,c,{solid:!0}),t.box("ext",.98,$-.8,.2,2.72,y+1.8,z,c,{solid:!0}),t.box("ext",4.5,.44,.2,0,F-.22,z,c,{solid:!0}),t.box("ext",4.52,.08,.26,0,y+.82,z,u),t.box("ext",4.52,.09,.26,0,F-.44,z,u);for(const ut of[-1.1,0,1.1])t.box("ext",.08,1.54,.14,ut,y+1.58,z,u);t.box("ext",4.44,1.52,.06,0,y+1.58,z,b,{uvScale:0})}for(const z of[-3.2,3.2]){t.box("ext",.2,.8,6.04,z,y+.4,0,c,{solid:!0}),t.box("ext",.2,$-.8,.98,z,y+1.8,-2.52,c,{solid:!0}),t.box("ext",.2,$-.8,.98,z,y+1.8,2.52,c,{solid:!0}),t.box("ext",.2,.44,4.1,z,F-.22,0,c,{solid:!0}),t.box("ext",.26,.08,4.12,z,y+.82,0,u),t.box("ext",.26,.09,4.12,z,F-.44,0,u);for(const ut of[-1,0,1])t.box("ext",.14,1.54,.08,z,y+1.58,ut,u);t.box("ext",.06,1.52,4.04,z,y+1.58,0,b,{uvScale:0})}for(const[z,ut]of[[-3.22,-3.02],[3.22,-3.02],[-3.22,3.02],[3.22,3.02]])t.box("ext",.2,$+.06,.2,z,N,ut,u);t.box("int",1.18,.34,.84,1.05,y+.19,0,u,{solid:!0}),t.box("int",.58,.07,.58,1.05,y+.07,-.78,P,{uvScale:0}),t.box("int",.58,.07,.58,1.05,y+.07,.78,P,{uvScale:0}),t.box("int",1.25,1.28,.5,1.05,y+.65,-2.55,E,{solid:!0,uvScale:0}),t.kawaraSlope("ext",{bottomWidth:12.6,run:1.28,pitch:.36,ridgeX:0,ridgeY:w+.1,ridgeZ:4.26,downslopeYaw:0,tileMat:I,ribMat:O,rafterMat:u,ribSpacing:.38}),t.kawaraSlope("ext",{bottomWidth:9.2,run:2.15,pitch:.36,ridgeX:-5.72,ridgeY:w+.14,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:I,ribMat:O,rafterMat:u,ribSpacing:.38});const H=.4;t.kawaraSlope("ext",{topWidth:6.6,bottomWidth:12.2,run:2.35,pitch:H,ridgeX:.2,ridgeY:y+.48,ridgeZ:2.98,downslopeYaw:0,tileMat:I,ribMat:O,rafterMat:u,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:6.6,bottomWidth:11.4,run:2.1,pitch:H,ridgeX:.4,ridgeY:y+.44,ridgeZ:-2.98,downslopeYaw:Math.PI,tileMat:I,ribMat:O,rafterMat:u,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:6.2,bottomWidth:9.8,run:2.85,pitch:H,ridgeX:3.18,ridgeY:y+.52,ridgeZ:-.25,downslopeYaw:Math.PI*.5,tileMat:I,ribMat:O,rafterMat:u,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:6.2,bottomWidth:10.2,run:3.15,pitch:H,ridgeX:-3.18,ridgeY:y+.56,ridgeZ:.15,downslopeYaw:-Math.PI*.5,tileMat:I,ribMat:O,rafterMat:u,ribSpacing:.38});const K=.5,V=4.25,G=F+V*Math.tan(K)-.16,Z=1.85,B=8.95,J=1.02,lt=G-J;t.kawaraSlope("ext",{topWidth:Z*2,bottomWidth:B,run:V,pitch:K,ridgeX:0,ridgeY:G,ridgeZ:0,downslopeYaw:0,tileMat:I,ribMat:O,rafterMat:u,ribSpacing:.34}),t.kawaraSlope("ext",{topWidth:Z*2,bottomWidth:B,run:V,pitch:K,ridgeX:0,ridgeY:G,ridgeZ:0,downslopeYaw:Math.PI,tileMat:I,ribMat:O,rafterMat:u,ribSpacing:.34}),t.gablePrism("ext",3.4,J-.08,.18,Z,lt,0,c,{ry:Math.PI*.5}),t.gablePrism("ext",3.4,J-.08,.18,-Z,lt,0,c,{ry:Math.PI*.5}),t.kawaraSlope("ext",{topWidth:3.6,bottomWidth:B-.3,run:V-Z+.18,pitch:.46,ridgeX:Z,ridgeY:lt,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:I,ribMat:O,rafterMat:u,ribSpacing:.34}),t.kawaraSlope("ext",{topWidth:3.6,bottomWidth:B-.3,run:V-Z+.18,pitch:.46,ridgeX:-Z,ridgeY:lt,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:I,ribMat:O,rafterMat:u,ribSpacing:.34}),t.kawaraRidge("ext",-Z,G+.04,0,Z,G+.04,0,k,U,{scale:1.08,courses:3,oniStart:!0,oniEnd:!0});const ht=G-V*Math.tan(K);for(const z of[-1,1])for(const ut of[-1,1])t.kawaraRidge("ext",z*Z,lt+.04,ut*1.72,z*(V-.08),ht+.05,ut*(V-.08),k,U,{scale:.7,courses:1,oniStart:!1,oniEnd:!0});return t.build({id:"H19",name:"小川家（懸造り高脚＆木橋玄関の三階茶亭邸）",subtitle:"清水式懸造り杉柱脚・4.5m木橋玄関・西崖舞台・2F L字高欄縁・3F月見茶室＆赤銅錆本瓦",category:"house",builtYear:1884,abandonedYear:1985,stories:3,floorElevations:[D,w,y],entryLocal:[.2,0,11.2],entryLookLocalYaw:0})}function p2(i,e){const t=new Se(i),n=e.getMaterial("exterior_tile_beige",{roughness:.84,bumpScale:.05}),r=e.getMaterial("travertine_stone",{roughness:.86,bumpScale:.05}),o=e.getMaterial("black_marble",{roughness:.34,metalness:.14,bumpScale:.02}),s=e.getMaterial("weathered_sage_paint",{roughness:.84,bumpScale:.05,tint:14214619}),a=e.getMaterial("dark_green_wood",{roughness:.8,bumpScale:.04}),l=e.getMaterial("white_plaster",{roughness:.9,bumpScale:.03,tint:16250351}),c=e.getMaterial("dark_hardwood",{roughness:.82,bumpScale:.04}),u=e.getMaterial("wood_panel_door",{roughness:.8,bumpScale:.04}),d=e.getMaterial("herringbone_wood",{roughness:.72,bumpScale:.03}),h=e.getMaterial("oak_flooring",{roughness:.78,bumpScale:.03}),p=e.getMaterial("faded_blue_plaster",{roughness:.9,bumpScale:.04}),x=e.getMaterial("white_fabric_wall",{roughness:.92,bumpScale:.03}),g=e.getMaterial("red_brick",{roughness:.9,bumpScale:.06}),m=e.getMaterial("gingham_cloth",{roughness:.92,bumpScale:.02}),f=e.getMaterial("botanical_curtain",{roughness:.9,bumpScale:.02,doubleSide:!0}),_=e.getMaterial("tatami_bordered",{roughness:.92,bumpScale:.04}),v=e.getMaterial("shoji_sliding_door",{roughness:.88,opacity:.9,transparent:!0}),b=e.getMaterial("retro_tile_wall",{roughness:.5,bumpScale:.03}),P=e.getMaterial("cream_ceramic_tile",{roughness:.48,bumpScale:.03}),E=e.getMaterial("green_tile",{roughness:.46,bumpScale:.04}),A=e.getMaterial("woven_carpet_gray",{roughness:.94,bumpScale:.04}),T=e.getMaterial("checker_linoleum",{roughness:.62,bumpScale:.02}),S=e.getMaterial("coir_doormat",{roughness:.96,bumpScale:.06}),M=e.getMaterial("retro_kitchen_unit",{roughness:.78,bumpScale:.03}),I=e.getMaterial("kitchen_cabinet",{roughness:.82,bumpScale:.03}),O=e.getMaterial("office_counter",{roughness:.8,bumpScale:.03}),k=e.getMaterial("island_map_sign",{roughness:.8,bumpScale:.02}),U=e.getMaterial("chalkboard",{roughness:.88,bumpScale:.02}),D=e.getMaterial("cork_board",{roughness:.92,bumpScale:.03}),w=e.getMaterial("file_cabinet",{roughness:.66,metalness:.25}),y=e.getMaterial("wardrobe_wood",{roughness:.82,bumpScale:.03}),F=e.getMaterial("wooden_dresser",{roughness:.82,bumpScale:.03}),q=e.getMaterial("floral_futon",{roughness:.92,bumpScale:.03}),Y=e.getMaterial("vanity_sink",{roughness:.56,bumpScale:.03}),X=e.getMaterial("full_bookcase",{roughness:.84,bumpScale:.04}),L=e.getMaterial("storage_rack",{roughness:.88,bumpScale:.04}),$=e.getMaterial("notice_board",{roughness:.88,bumpScale:.02}),N=e.getMaterial("deep_moss",{roughness:.95,bumpScale:.07}),H=e.getMaterial("dry_ferns",{roughness:.93,bumpScale:.06}),K=e.getMaterial("coal_seam_rock",{roughness:.86,bumpScale:.08}),V=e.getMaterial("gneiss_rock",{roughness:.9,bumpScale:.08}),G=e.getMaterial("frosted_grid_window",{roughness:.3,opacity:.34,transparent:!0}),Z=e.getMaterial("window_frosted_wood",{roughness:.2,opacity:.2,transparent:!0,tint:14478581}),B=e.getMaterial("slate_roof_dark",{roughness:.68,metalness:.2,bumpScale:.06,tint:11189432}),J=e.getMaterial("dark_slate",{roughness:.64,metalness:.24,bumpScale:.05,tint:9611428}),lt=e.getMaterial("dark_iron_plate",{roughness:.58,metalness:.3,tint:8164496}),ht=e.getMaterial("matte_black_metal",{roughness:.5,metalness:.42,tint:6453878}),z=e.getMaterial("dark_iron_plate",{roughness:.44,metalness:.52,tint:6136978}),ut=.55,et=3.75,rt=6.9,ct=9.95,Q=12.65;t.box("ext",13.7,3.82,9.5,0,ut-1.92,-.1,r),t.box("ext",5.2,3.82,1.35,-4.2,ut-1.92,4.9,r),t.box("ext",13.85,.22,9.65,0,ut-.14,-.1,r),t.box("ext",3.6,2.2,1.55,2.2,ut-1.12,5.12,r),t.box("ext",3.55,.14,1.52,2.2,ut-.03,5.12,o),t.stoneSteps("ext",2.2,6.65,5.45,-.12,ut,2.8,5,o),t.floor(.55,3.85,4.35,5.65,ut+.04);for(const xe of[.65,3.75])t.box("ext",.34,.32,.34,xe,ut+.16,5.68,o),t.box("ext",.24,2.86,.24,xe,ut+1.65,5.68,l,{solid:!0}),t.box("ext",.34,.2,.34,xe,ut+3.08,5.68,l);t.box("ext",3.65,.28,.32,2.2,ut+3.22,5.68,l);const j=et-ut,C=ut+j*.5;t.box("int",13,.1,8.9,0,ut-.04,-.1,h),t.box("int",6.7,.05,6.2,-3.2,ut+.02,2,d),t.box("int",4.3,.05,5.5,2.25,ut+.02,1.65,o),t.box("int",6.3,.05,3.3,-3.35,ut+.03,-2.85,_),t.box("int",4.4,.05,3.3,2.05,ut+.02,-2.85,P),t.box("int",1.25,.03,.72,2.2,ut+.05,4.02,S,{uvScale:0}),t.floor(-6.45,6.45,-4.45,4.45,ut+.04),t.floor(-6.45,-1.85,4.25,5.05,ut+.04),t.box("ext",2.98,1.35,.26,-.32,ut+.68,4.4,n,{solid:!0}),t.box("ext",2.98,j-1.35,.26,-.32,ut+2.28,4.4,s,{solid:!0}),t.box("ext",2.14,.75,.26,2.2,ut+2.82,4.4,s,{solid:!0}),t.box("ext",.96,2.38,.08,.72,ut+1.2,4.16,u,{uvScale:0}),t.box("ext",3.38,1.35,.26,4.92,ut+.68,4.4,n,{solid:!0}),t.box("ext",1.15,j-1.35,.26,3.82,ut+2.28,4.4,s,{solid:!0}),t.box("ext",1.3,.52,.26,5.02,ut+2.94,4.4,s,{solid:!0}),t.box("ext",1.26,1.35,.06,5.02,ut+2.02,4.4,Z,{uvScale:0}),t.box("ext",.34,1.4,.08,4.24,ut+2.02,4.54,a),t.box("ext",.34,1.4,.08,5.8,ut+2.02,4.54,a),t.box("ext",.96,j-1.35,.26,6.14,ut+2.28,4.4,s,{solid:!0}),t.box("ext",4.85,1.15,.26,-4.2,ut+.58,5.2,n,{solid:!0}),t.box("ext",1.15,j-1.15,.26,-6.04,ut+2.18,5.2,s,{solid:!0}),t.box("ext",2.55,.55,.26,-4.2,ut+2.92,5.2,s,{solid:!0}),t.box("ext",2.5,1.52,.06,-4.2,ut+1.9,5.2,Z,{uvScale:0}),t.box("ext",.42,1.58,.08,-5.68,ut+1.9,5.34,a),t.box("ext",.42,1.58,.08,-2.72,ut+1.9,5.34,a),t.box("ext",1.15,j-1.15,.26,-2.36,ut+2.18,5.2,s,{solid:!0}),t.box("ext",.26,1.35,.9,-1.8,ut+.68,4.8,n,{solid:!0}),t.box("ext",.26,j-1.35,.9,-1.8,ut+2.28,4.8,s,{solid:!0}),t.box("ext",13.25,1.15,.26,0,ut+.58,-4.6,n,{solid:!0}),t.box("ext",1.75,j-1.15,.26,-5.74,ut+2.18,-4.6,s,{solid:!0}),t.box("ext",3.4,.58,.26,-3.2,ut+2.91,-4.6,s,{solid:!0}),t.box("ext",3.36,1.48,.06,-3.2,ut+1.88,-4.6,v,{uvScale:0}),t.box("ext",8.15,j-1.15,.26,2.55,ut+2.18,-4.6,s,{solid:!0}),t.box("ext",.26,1.35,9.85,-6.6,ut+.68,.3,n,{solid:!0}),t.box("ext",.26,j-1.35,9.85,-6.6,ut+2.28,.3,s,{solid:!0}),t.box("ext",.26,1.35,9.05,6.6,ut+.68,-.1,n,{solid:!0}),t.box("ext",.26,j-1.35,9.05,6.6,ut+2.28,-.1,s,{solid:!0});for(const[xe,oe]of[[-6.62,5.22],[-1.78,5.22],[6.62,4.42],[-6.62,-4.62],[6.62,-4.62]])t.box("ext",.26,j+.06,.26,xe,C,oe,l);t.box("int",3.65,j,.16,-4.75,C,-1.2,p,{solid:!0}),t.box("int",1.8,.72,.16,-2.05,ut+2.84,-1.2,p,{solid:!0}),t.box("int",2.45,j,.16,.05,C,-1.2,p,{solid:!0}),t.box("int",1.8,.72,.16,2.15,ut+2.84,-1.2,b,{solid:!0}),t.box("int",1.55,j,.16,3.8,C,-1.2,b,{solid:!0}),t.box("int",.16,j,3.4,-.2,C,-2.9,b,{solid:!0}),t.box("int",.22,j,2.25,.2,C,-.1,l,{solid:!0}),t.box("int",.22,.65,2.65,.2,ut+2.88,2.32,l,{solid:!0}),t.box("int",.22,j,.85,.2,C,4.02,l,{solid:!0}),t.box("int",.1,j-.1,6.2,-6.44,C,2,p),t.box("int",.78,1.52,1.95,-6.1,ut+.76,1.7,g,{solid:!0}),t.box("int",.62,1.65,1.25,-6.16,ut+2.34,1.7,g,{solid:!0}),t.box("int",.9,.16,2.18,-6.04,ut+1.54,1.7,o),t.box("int",.92,.12,2.15,-6,ut+.06,1.7,o),t.box("int",.65,2.25,.06,-5.65,ut+1.95,4.98,f,{uvScale:0}),t.box("int",.65,2.25,.06,-2.75,ut+1.95,4.98,f,{uvScale:0}),t.box("int",1.65,.76,1.05,-3.45,ut+.38,1.95,m,{solid:!0,uvScale:0}),t.box("int",1.35,1.45,.52,-5.45,ut+.74,-3.98,y,{solid:!0,uvScale:0}),t.box("int",1.95,.92,.64,1.65,ut+.46,-4.18,M,{solid:!0,uvScale:0}),t.box("int",1.35,1.85,.56,3.65,ut+.94,-4.18,I,{solid:!0,uvScale:0}),t.stairRun("int",{x0:5.45,z0:2.5,x1:5.45,z1:-1.55,y0:ut+.04,y1:et+.04,width:1.24,steps:15,treadMat:c,stringerMat:l,railMat:c,railLeft:!0,railRight:!1,closedRisers:!0,guardLeft:!0,guardRight:!1});const R=rt-et,tt=et+R*.5;t.box("int",11.26,.16,9,-.97,et-.06,-.1,h),t.box("int",4.8,.16,.9,-4.2,et-.06,4.8,h),t.box("int",1.94,.16,3,5.63,et-.06,-3.1,h),t.box("int",1.94,.16,1.8,5.63,et-.06,3.5,h),t.box("int",3.7,.04,3.3,2.55,et+.03,.65,A),t.box("int",3.6,.04,3.2,-4.7,et+.03,-2.9,E),t.collider(-6.6,4.66,et-.16,et+.02,-4.6,4.4),t.collider(-6.6,-1.8,et-.16,et+.02,4.4,5.2),t.collider(4.66,6.6,et-.16,et+.02,-4.6,-1.62),t.collider(4.66,6.6,et-.16,et+.02,2.66,4.4),t.floor(-6.45,4.64,-4.45,4.35,et+.04),t.floor(-6.45,-1.85,4.25,5.08,et+.04),t.floor(4.6,6.45,-4.45,-1.55,et+.04),t.floor(4.6,6.45,2.65,4.35,et+.04),t.kouranRailing("int",4.66,-1.58,4.66,2.66,et,.94,c,.56),t.kouranRailing("int",4.66,2.66,6.48,2.66,et,.94,c,.56),t.box("ext",7.8,.16,1.24,2.12,et-.04,5,h),t.kouranRailing("ext",-1.75,5.56,5.96,5.56,et,.96,l,.52),t.kouranRailing("ext",5.96,4.4,5.96,5.56,et,.96,l,.52),t.floor(-1.68,5.88,4.35,5.5,et+.04),t.box("ext",3.08,R,.24,-.28,tt,4.4,s,{solid:!0}),t.box("ext",1.84,.72,.24,2.15,et+2.79,4.4,s,{solid:!0}),t.box("ext",3.58,R,.24,4.82,tt,4.4,s,{solid:!0}),t.box("ext",4.85,.96,.24,-4.2,et+.48,5.2,s,{solid:!0}),t.box("ext",1.15,R-.96,.24,-6.04,et+2.06,5.2,s,{solid:!0}),t.box("ext",2.55,.56,.24,-4.2,et+2.87,5.2,s,{solid:!0}),t.box("ext",2.5,1.62,.06,-4.2,et+1.78,5.2,Z,{uvScale:0}),t.box("ext",.42,1.68,.08,-5.68,et+1.78,5.34,a),t.box("ext",.42,1.68,.08,-2.72,et+1.78,5.34,a),t.box("ext",1.15,R-.96,.24,-2.36,et+2.06,5.2,s,{solid:!0}),t.box("ext",.24,R,.9,-1.8,tt,4.8,s,{solid:!0}),t.box("ext",13.25,R,.24,0,tt,-4.6,s,{solid:!0}),t.box("ext",.24,.98,9.85,-6.6,et+.49,.3,s,{solid:!0}),t.box("ext",.24,R-.98,3.85,-6.6,et+2.06,-2.68,s,{solid:!0}),t.box("ext",.24,.55,2.4,-6.6,et+2.88,.45,s,{solid:!0}),t.box("ext",.06,1.62,2.36,-6.6,et+1.79,.45,Z,{uvScale:0}),t.box("ext",.24,R-.98,3.55,-6.6,et+2.06,3.45,s,{solid:!0}),t.box("ext",.24,R,9.05,6.6,tt,-.1,s,{solid:!0});for(const[xe,oe]of[[-6.62,5.22],[-1.78,5.22],[6.62,4.42],[-6.62,-4.62],[6.62,-4.62]])t.box("ext",.24,R+.06,.24,xe,tt,oe,l);t.box("int",.14,R,3.62,-2.85,tt,-2.8,P,{solid:!0}),t.box("int",1.48,R,.14,-5.85,tt,-1,x,{solid:!0}),t.box("int",1.6,.72,.14,-4.32,et+2.79,-1,x,{solid:!0}),t.box("int",.75,R,.14,-3.2,tt,-1,x,{solid:!0}),t.box("int",1.6,.66,1.1,-5.55,et+.34,-3.82,E,{solid:!0}),t.box("int",1.15,1.42,.52,-3.85,et+.72,-4.15,Y,{solid:!0,uvScale:0}),t.box("int",.1,1.45,2.35,-6.42,et+1.68,2.85,U,{uvScale:0}),t.box("int",1.95,1.35,.08,-1.25,et+1.72,4.22,k,{uvScale:0}),t.box("int",1.35,1.05,.08,-3.95,et+1.78,-.88,D,{uvScale:0}),t.box("int",2.05,.88,.96,-4.15,et+.44,2.55,O,{solid:!0,uvScale:0}),t.box("int",1.75,.88,.9,-1.55,et+.44,1.45,O,{solid:!0,uvScale:0}),t.box("int",.56,1.48,.75,-6.12,et+.74,4.35,w,{solid:!0,uvScale:0}),t.box("int",.56,1.48,.75,-6.12,et+.74,-.15,w,{solid:!0,uvScale:0}),t.box("int",.14,R,3.15,.65,tt,.75,x,{solid:!0}),t.box("int",1.55,.36,2.1,2.75,et+.22,.65,q,{solid:!0,uvScale:0}),t.box("int",1.25,1.15,.5,3.75,et+.58,-.45,F,{solid:!0,uvScale:0}),t.stairRun("int",{x0:3.1,z0:-3.05,x1:-1.1,z1:-3.05,y0:et+.04,y1:rt+.04,width:1.18,steps:14,treadMat:c,stringerMat:l,railMat:c,railLeft:!0,railRight:!1,closedRisers:!1,guardLeft:!0,guardRight:!1});const it=ct-rt,ft=rt+it*.5;t.box("int",11,.16,6.8,-1.1,rt-.06,1,h),t.box("int",5.46,.16,1.44,-3.87,rt-.06,-3.1,h),t.box("int",1.22,.16,1.44,3.8,rt-.06,-3.1,h),t.box("int",4.8,.16,.9,-4.2,rt-.06,4.8,T),t.box("int",10.6,.04,4.45,-1.1,rt+.03,2.08,T),t.collider(-6.6,4.4,rt-.16,rt+.02,-2.38,4.4),t.collider(-6.6,-1.14,rt-.16,rt+.02,-3.8,-2.38),t.collider(3.2,4.4,rt-.16,rt+.02,-3.8,-2.38),t.collider(-6.6,-1.8,rt-.16,rt+.02,4.4,5.2),t.floor(-6.45,4.32,-2.35,4.35,rt+.04),t.floor(-6.45,-1.1,-3.72,-2.3,rt+.04),t.floor(3.2,4.32,-3.72,-2.3,rt+.04),t.floor(-6.45,-1.85,4.25,5.08,rt+.04),t.kouranRailing("int",-1.14,-2.38,3.2,-2.38,rt,.94,c,.56),t.kouranRailing("int",3.2,-3.72,3.2,-2.38,rt,.94,c,.56),t.box("ext",6.2,.16,.96,1.32,rt-.04,4.86,h),t.kouranRailing("ext",-1.75,5.28,4.36,5.28,rt,.94,l,.52),t.kouranRailing("ext",4.36,4.4,4.36,5.28,rt,.94,l,.52),t.floor(-1.68,4.3,4.35,5.22,rt+.04),t.box("ext",2.98,.65,.22,-.32,rt+.32,4.4,s,{solid:!0}),t.box("ext",2.94,1.98,.06,-.32,rt+1.65,4.4,G,{uvScale:0}),t.box("ext",2.98,.42,.22,-.32,rt+2.84,4.4,l,{solid:!0}),t.box("ext",1.64,.66,.22,1.95,rt+2.72,4.4,l,{solid:!0}),t.box("ext",1.68,.65,.22,3.58,rt+.32,4.4,s,{solid:!0}),t.box("ext",1.64,1.98,.06,3.58,rt+1.65,4.4,G,{uvScale:0}),t.box("ext",1.68,.42,.22,3.58,rt+2.84,4.4,l,{solid:!0}),t.box("ext",4.85,.68,.22,-4.2,rt+.34,5.2,s,{solid:!0}),t.box("ext",.85,it-.68,.22,-6.18,rt+1.86,5.2,s,{solid:!0}),t.box("ext",3.16,1.92,.06,-4.2,rt+1.64,5.2,G,{uvScale:0}),t.box("ext",3.2,.45,.22,-4.2,rt+2.82,5.2,s,{solid:!0}),t.box("ext",.85,it-.68,.22,-2.22,rt+1.86,5.2,s,{solid:!0}),t.box("ext",.22,it,.9,-1.8,ft,4.8,s,{solid:!0}),t.box("ext",11.05,it,.22,-1.1,ft,-3.8,s,{solid:!0}),t.box("ext",.22,.72,9.05,-6.6,rt+.36,.7,s,{solid:!0}),t.box("ext",.22,it-.72,4.05,-6.6,rt+1.88,-1.78,s,{solid:!0}),t.box("ext",.06,1.88,3.6,-6.6,rt+1.66,2.05,G,{uvScale:0}),t.box("ext",.22,.46,3.64,-6.6,rt+2.82,2.05,s,{solid:!0}),t.box("ext",.22,it-.72,1.4,-6.6,rt+1.88,4.52,s,{solid:!0}),t.box("ext",.22,.68,8.25,4.4,rt+.34,.3,s,{solid:!0}),t.box("ext",.22,it-.68,3.05,4.4,rt+1.86,-2.28,s,{solid:!0}),t.box("ext",.06,1.92,4.2,4.4,rt+1.64,1.4,G,{uvScale:0}),t.box("ext",.22,.46,4.25,4.4,rt+2.82,1.4,l,{solid:!0}),t.box("ext",.22,it-.68,.96,4.4,rt+1.86,3.94,s,{solid:!0}),t.box("int",3.45,.56,.88,-4.55,rt+.28,4.55,g,{solid:!0}),t.box("int",3.3,.22,.74,-4.55,rt+.62,4.55,N),t.box("int",1.35,.48,.64,-5.25,rt+.88,4.55,H),t.box("int",1.2,.42,.58,-3.75,rt+.84,4.52,H),t.box("int",.88,.56,2.85,3.82,rt+.28,1.45,g,{solid:!0}),t.box("int",.74,.22,2.7,3.82,rt+.62,1.45,N),t.box("int",.62,.45,1.95,3.82,rt+.86,1.45,H),t.box("int",1.35,.74,.96,.45,rt+.38,1.85,m,{solid:!0,uvScale:0}),t.box("int",2.05,1.95,.52,-4.95,rt+.98,-3.45,X,{solid:!0,uvScale:0}),t.box("int",.54,1.85,1.65,-6.18,rt+.94,-1.75,L,{solid:!0,uvScale:0}),t.box("int",1.35,1.05,.08,-2.55,rt+1.68,-3.65,$,{uvScale:0}),t.box("int",.75,.82,.75,-4.85,rt+.41,-1.15,l,{solid:!0}),t.box("int",.46,.36,.42,-4.85,rt+.96,-1.15,K,{ry:.4}),t.box("int",.75,.82,.75,-4.85,rt+.41,.15,l,{solid:!0}),t.box("int",.48,.34,.44,-4.85,rt+.96,.15,V,{ry:-.35}),t.stairRun("int",{x0:-2.55,z0:-.85,x1:-2.55,z1:2.95,y0:rt+.04,y1:ct+.04,width:1.1,steps:14,treadMat:c,stringerMat:l,railMat:c,railLeft:!0,railRight:!0,closedRisers:!1,guardLeft:!0,guardRight:!0});const st=Q-ct,yt=ct+st*.5,gt=-4.2,Mt=2.8;t.box("int",3.4,.16,4.8,-4.9,ct-.06,2.8,d),t.box("int",1.42,.16,2.2,-2.5,ct-.06,4.1,d),t.collider(-6.6,-3.2,ct-.16,ct+.02,.4,5.2),t.collider(-3.2,-1.8,ct-.16,ct+.02,3.02,5.2),t.floor(-6.45,-3.18,.52,5.08,ct+.04),t.floor(-3.22,-1.92,2.98,5.08,ct+.04),t.kouranRailing("int",-3.2,.48,-3.2,3.02,ct,.94,c,.52);const zt=(xe,oe,ge)=>{const he=st-.78-.42;xe==="z"?(t.box("ext",4.85,.78,.2,ge,ct+.78*.5,oe,s,{solid:!0}),t.box("ext",4.85,.42,.2,ge,Q-.42*.5,oe,s,{solid:!0}),t.box("ext",.72,he,.2,ge-2.06,ct+.78+he*.5,oe,s,{solid:!0}),t.box("ext",.72,he,.2,ge+2.06,ct+.78+he*.5,oe,s,{solid:!0}),t.box("ext",3.4,he,.06,ge,ct+.78+he*.5,oe,Z,{uvScale:0}),t.box("ext",.1,he,.12,ge-.85,ct+.78+he*.5,oe,a),t.box("ext",.1,he,.12,ge+.85,ct+.78+he*.5,oe,a)):(t.box("ext",.2,.78,4.85,oe,ct+.78*.5,ge,s,{solid:!0}),t.box("ext",.2,.42,4.85,oe,Q-.42*.5,ge,s,{solid:!0}),t.box("ext",.2,he,.72,oe,ct+.78+he*.5,ge-2.06,s,{solid:!0}),t.box("ext",.2,he,.72,oe,ct+.78+he*.5,ge+2.06,s,{solid:!0}),t.box("ext",.06,he,3.4,oe,ct+.78+he*.5,ge,Z,{uvScale:0}),t.box("ext",.12,he,.1,oe,ct+.78+he*.5,ge-.85,a),t.box("ext",.12,he,.1,oe,ct+.78+he*.5,ge+.85,a))};zt("z",5.2,gt),zt("z",.4,gt),zt("x",-6.6,Mt),zt("x",-1.8,Mt);for(const[xe,oe]of[[-6.62,5.22],[-1.78,5.22],[-6.62,.38],[-1.78,.38]])t.box("ext",.24,st+.08,.24,xe,yt,oe,l);t.box("ext",5.1,.18,.26,gt,Q-.04,5.2,l),t.box("ext",5.1,.18,.26,gt,Q-.04,.4,l),t.box("ext",.26,.18,5.1,-6.6,Q-.04,Mt,l),t.box("ext",.26,.18,5.1,-1.8,Q-.04,Mt,l),t.cyl("int",.44,.54,.86,8,-4.95,ct+.43,2.75,o),t.box("int",1.25,.1,1.05,-4.95,ct+.9,2.75,o,{solid:!0}),t.box("int",1.05,.03,.84,-4.95,ct+.96,2.75,k,{uvScale:0});for(const xe of[-1,1])for(const oe of[-1,1])t.box("int",.14,.18,3.6,gt+xe*1.15,Q+.95,Mt+oe*1.15,c,{ry:Math.atan2(xe,oe),rx:-.58});const _t=.44,Tt=et+.72;t.gablePrism("ext",3.7,.72,.22,2.2,et+.02,5.75,l),t.kawaraSlope("ext",{bottomWidth:2.05,run:2.15,pitch:_t,ridgeX:2.2,ridgeY:Tt,ridgeZ:5.15,downslopeYaw:Math.PI*.5,tileMat:B,ribMat:J,rafterMat:c,ribSpacing:.34}),t.kawaraSlope("ext",{bottomWidth:2.05,run:2.15,pitch:_t,ridgeX:2.2,ridgeY:Tt,ridgeZ:5.15,downslopeYaw:-Math.PI*.5,tileMat:B,ribMat:J,rafterMat:c,ribSpacing:.34}),t.kawaraRidge("ext",2.2,Tt+.04,4.25,2.2,Tt+.04,6.18,lt,ht,{scale:.76,courses:2,oniStart:!1,oniEnd:!0}),t.kawaraSlope("ext",{bottomWidth:9.8,run:2.65,pitch:.42,ridgeX:4.4,ridgeY:rt+.92,ridgeZ:-.1,downslopeYaw:Math.PI*.5,tileMat:B,ribMat:J,rafterMat:c,ribSpacing:.38}),t.kawaraSlope("ext",{bottomWidth:14,run:1.55,pitch:.4,ridgeX:0,ridgeY:rt+.48,ridgeZ:-3.8,downslopeYaw:Math.PI,tileMat:B,ribMat:J,rafterMat:c,ribSpacing:.38}),t.kawaraSlope("ext",{bottomWidth:5.6,run:.92,pitch:.38,ridgeX:gt,ridgeY:rt+.14,ridgeZ:5.16,downslopeYaw:0,tileMat:B,ribMat:J,rafterMat:c,ribSpacing:.34}),t.kawaraSlope("ext",{bottomWidth:10.6,run:.95,pitch:.38,ridgeX:-6.56,ridgeY:rt+.14,ridgeZ:.3,downslopeYaw:-Math.PI*.5,tileMat:B,ribMat:J,rafterMat:c,ribSpacing:.38});const Dt=.45,Ft=4.9,wt=ct+Ft*Math.tan(Dt)-.12,Nt=1.8,Et=.3,Ht=7.2,nt=4.6,vt=Ft*2;t.kawaraSlope("ext",{topWidth:nt,bottomWidth:Ht,run:Ft,pitch:Dt,ridgeX:Nt,ridgeY:wt,ridgeZ:Et,downslopeYaw:0,tileMat:B,ribMat:J,rafterMat:c,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:nt,bottomWidth:Ht,run:Ft,pitch:Dt,ridgeX:Nt,ridgeY:wt,ridgeZ:Et,downslopeYaw:Math.PI,tileMat:B,ribMat:J,rafterMat:c,ribSpacing:.38});const mt=1.1,bt=wt-mt;t.gablePrism("ext",4.4,mt+.14,.22,Nt+nt*.5,bt-.04,Et,l,{ry:Math.PI*.5}),t.kawaraSlope("ext",{topWidth:4.4,bottomWidth:vt,run:2.3,pitch:.44,ridgeX:Nt+nt*.5,ridgeY:bt,ridgeZ:Et,downslopeYaw:Math.PI*.5,tileMat:B,ribMat:J,rafterMat:c,ribSpacing:.38}),t.gablePrism("ext",vt-.8,wt-ct+.06,.2,-1.78,ct-.04,Et,s,{ry:Math.PI*.5}),t.kawaraRidge("ext",-1.78,wt+.04,Et,Nt+nt*.5,wt+.04,Et,lt,ht,{scale:1.05,courses:3,oniStart:!1,oniEnd:!0});const Rt=.42,At=4.96,Ct=ct+At*Math.tan(Rt)-.12;t.kawaraSlope("ext",{bottomWidth:5.35,run:At,pitch:Rt,ridgeX:-4.4,ridgeY:Ct,ridgeZ:.36,downslopeYaw:Math.PI,tileMat:B,ribMat:J,rafterMat:c,ribSpacing:.38}),t.kawaraRidge("ext",-7.02,Ct+.04,.34,-1.78,Ct+.04,.34,lt,ht,{scale:.78,courses:1,oniStart:!0,oniEnd:!1});const Zt=.64,me=3.05,ne=me*2,Ae=Q+me*Math.tan(Zt)-.05;for(const xe of[0,Math.PI*.5,Math.PI,-Math.PI*.5])t.kawaraSlope("ext",{topWidth:.24,bottomWidth:ne,run:me,pitch:Zt,ridgeX:gt,ridgeY:Ae,ridgeZ:Mt,downslopeYaw:xe,tileMat:B,ribMat:J,rafterMat:c,ribSpacing:.34});const Qe=Q-.05;for(const xe of[-1,1])for(const oe of[-1,1])t.kawaraRidge("ext",gt+xe*.14,Ae+.04,Mt+oe*.14,gt+xe*(me-.08),Qe+.06,Mt+oe*(me-.08),lt,ht,{scale:.72,courses:1,oniStart:!1,oniEnd:!0});return t.box("ext",.62,.2,.62,gt,Ae+.1,Mt,z),t.cyl("ext",.24,.3,.18,10,gt,Ae+.28,Mt,z),t.cyl("ext",.1,.14,.24,8,gt,Ae+.46,Mt,z),t.cyl("ext",.03,.16,.34,10,gt,Ae+.72,Mt,z),t.build({id:"H20",name:"旧黒磯炭鉱・明治技師館（洋和折衷四階望楼邸）",subtitle:"青磁色下見板・3F苔シダ温室・4F角望楼宝形本瓦尖塔",category:"house",builtYear:1891,abandonedYear:1985,stories:4,floorElevations:[ut,et,rt,ct],entryLocal:[2.2,0,7.65],entryLookLocalYaw:0})}function m2(i,e){const t=new Se(i),n=e.getMaterial("ishigaki_cut",{roughness:.92,bumpScale:.07}),r=e.getMaterial("dressed_stone",{roughness:.9,bumpScale:.06}),o=e.getMaterial("aged_timber_planks",{roughness:.92,bumpScale:.06}),s=e.getMaterial("charred_cedar",{roughness:.9,bumpScale:.05}),a=e.getMaterial("white_plaster",{roughness:.92,bumpScale:.04,tint:15854816}),l=e.getMaterial("washi_plaster",{roughness:.91,bumpScale:.03}),c=e.getMaterial("dark_hardwood",{roughness:.84,bumpScale:.04}),u=e.getMaterial("warm_wood_plank",{roughness:.83,bumpScale:.04}),d=e.getMaterial("oak_flooring",{roughness:.8,bumpScale:.03}),h=e.getMaterial("cobblestone",{roughness:.92,bumpScale:.06}),p=e.getMaterial("window_frosted_wood",{roughness:.34,opacity:.36,transparent:!0});e.getMaterial("shoji_sliding_door",{roughness:.88,opacity:.9,transparent:!0});const x=e.getMaterial("carved_wood_lattice",{roughness:.86,bumpScale:.05}),g=e.getMaterial("wood_slat_screen",{roughness:.85,bumpScale:.05}),m=e.getMaterial("indigo_sakura_fabric",{roughness:.92,bumpScale:.02,doubleSide:!0}),f=e.getMaterial("tatami_bordered",{roughness:.92,bumpScale:.04}),_=e.getMaterial("tatami_plain",{roughness:.92,bumpScale:.04}),v=e.getMaterial("tatami_green_border",{roughness:.92,bumpScale:.04}),b=e.getMaterial("red_zabuton",{roughness:.92,bumpScale:.03}),P=e.getMaterial("antique_tansu",{roughness:.78,bumpScale:.04}),E=e.getMaterial("retro_kitchen_unit",{roughness:.78,bumpScale:.03}),A=e.getMaterial("kitchen_cabinet",{roughness:.82,bumpScale:.03}),T=e.getMaterial("floral_futon",{roughness:.92,bumpScale:.03}),S=e.getMaterial("wooden_dresser",{roughness:.82,bumpScale:.03}),M=e.getMaterial("wardrobe_wood",{roughness:.82,bumpScale:.03}),I=e.getMaterial("coir_doormat",{roughness:.96,bumpScale:.06}),O=e.getMaterial("dark_green_chalk",{roughness:.88,bumpScale:.02}),k=e.getMaterial("mine_control_panel",{roughness:.62,metalness:.45,bumpScale:.04}),U=e.getMaterial("mine_valve_pipes",{roughness:.62,metalness:.55,bumpScale:.06}),D=e.getMaterial("office_counter",{roughness:.8,bumpScale:.03}),w=e.getMaterial("file_cabinet",{roughness:.66,metalness:.25}),y=e.getMaterial("notice_board",{roughness:.88,bumpScale:.02}),F=e.getMaterial("cork_board",{roughness:.92,bumpScale:.03}),q=e.getMaterial("woven_carpet_gray",{roughness:.94,bumpScale:.04}),Y=e.getMaterial("full_bookcase",{roughness:.84,bumpScale:.04}),X=e.getMaterial("mossy_wall_patch",{roughness:.94,bumpScale:.06}),L=e.getMaterial("mossy_concrete_stain",{roughness:.94,bumpScale:.06}),$=e.getMaterial("door_rusted_green",{roughness:.74,metalness:.36,bumpScale:.04}),N=e.getMaterial("coarse_canvas",{roughness:.95,bumpScale:.05,doubleSide:!0}),H=e.getMaterial("storage_rack",{roughness:.88,bumpScale:.04}),K=e.getMaterial("slate_roof_dark",{roughness:.74,metalness:.16,bumpScale:.06,tint:8817812}),V=e.getMaterial("dark_slate",{roughness:.7,metalness:.2,bumpScale:.05,tint:7501952}),G=e.getMaterial("dark_iron_plate",{roughness:.62,metalness:.28,tint:6449264}),Z=e.getMaterial("matte_black_metal",{roughness:.54,metalness:.38,tint:5396576}),B=.45,J=3.55,lt=6.5;t.box("ext",20.2,3.65,9,0,B-1.84,0,n),t.box("ext",19.8,2.2,1.45,0,B-1.12,4.92,n),t.box("ext",19.7,.08,1.38,0,B-.02,4.92,h),t.floor(-9.75,9.75,4.15,5.55,B+.04);for(const it of[-6.5,0,6.5])t.stoneSteps("ext",it,6.45,5.45,-.1,B,2.25,3,r);for(const it of[-9.65,-7.85,-5.15,-3.2,-1.25,1.25,3.2,5.15,7.85,9.65])t.box("ext",.28,.22,.28,it,B+.11,5.48,r),t.box("ext",.16,2.96,.16,it,B+1.62,5.48,c,{solid:!0});t.box("ext",19.8,.2,.2,0,B+3.06,5.48,c);const ht=J-B,z=B+ht*.5;t.box("int",19.4,.12,8.2,0,B-.04,0,u),t.box("int",2.4,.05,2.5,-6.5,B+.02,2.85,h),t.box("int",4.6,.04,5.4,-5.6,B+.03,-1.35,f),t.box("int",1.1,.03,.68,-6.5,B+.04,3.85,I,{uvScale:0}),t.box("int",6.1,.05,5.2,0,B+.02,1.5,d),t.box("int",4.4,.04,2.9,-.8,B+.03,-2.6,v),t.box("int",1.1,.03,.68,0,B+.04,3.85,I,{uvScale:0}),t.box("int",6.3,.05,3.6,6.5,B+.02,2.25,L),t.box("int",5.8,.04,4.3,6.2,B+.03,-1.85,o),t.floor(-9.68,9.68,-4.08,4.28,B+.04);const ut=(it,ft,st)=>{const yt=ft-it,gt=(it+ft)*.5;if(t.box("ext",yt,1.18,.24,gt,B+.59,4.2,s,{solid:!0}),st&&yt>=2.2){const Mt=(yt-1.55)*.5;t.box("ext",Mt,ht-1.18,.24,it+Mt*.5,B+2.14,4.2,o,{solid:!0}),t.box("ext",1.58,.56,.24,gt,B+2.82,4.2,o,{solid:!0}),t.box("ext",1.54,1.36,.07,gt,B+1.86,4.2,st,{uvScale:0}),t.box("ext",Mt,ht-1.18,.24,ft-Mt*.5,B+2.14,4.2,o,{solid:!0})}else t.box("ext",yt,ht-1.18,.24,gt,B+2.14,4.2,o,{solid:!0})};ut(-9.8,-7.4,g),t.box("ext",1.84,.72,.24,-6.5,B+2.74,4.2,o,{solid:!0}),t.box("ext",1.65,.52,.04,-6.5,B+2.16,4.35,m,{uvScale:0}),ut(-5.6,-.9,x),t.box("ext",1.84,.72,.24,0,B+2.74,4.2,o,{solid:!0}),t.box("ext",1.15,.88,.08,-1.65,B+1.72,4.36,y,{uvScale:0}),ut(.9,5.6,p),t.box("ext",1.84,.72,.24,6.5,B+2.74,4.2,X,{solid:!0}),t.box("ext",.96,2.28,.08,7.62,B+1.14,4.55,$,{ry:.65,uvScale:0}),ut(7.4,9.8,g),t.box("ext",19.65,1.15,.24,0,B+.58,-4.2,s,{solid:!0}),t.box("ext",19.65,ht-1.15,.24,0,B+2.12,-4.2,o,{solid:!0}),t.box("ext",.24,ht,8.45,-9.8,z,0,o,{solid:!0}),t.box("ext",.24,ht,8.45,9.8,z,0,X,{solid:!0}),t.box("int",.2,ht,8.2,-3.2,z,0,l,{solid:!0}),t.box("int",.2,ht,8.2,3.2,z,0,X,{solid:!0}),t.box("int",1.45,.36,.88,-5.55,B+.2,-1.15,c,{solid:!0}),t.box("int",.6,.07,.6,-5.55,B+.07,-1.95,b,{uvScale:0}),t.box("int",.6,.07,.6,-5.55,B+.07,-.35,b,{uvScale:0}),t.box("int",1.75,.92,.62,-4.75,B+.46,-3.78,E,{solid:!0,uvScale:0}),t.box("int",.54,1.45,1.35,-3.55,B+.74,1.25,P,{solid:!0,uvScale:0}),t.stairRun("int",{x0:-8.75,z0:2.15,x1:-8.75,z1:-1.8,y0:B+.04,y1:J+.04,width:1.08,steps:14,treadMat:c,stringerMat:c,railMat:u,railLeft:!1,railRight:!0,closedRisers:!0,guardLeft:!1,guardRight:!0}),t.box("int",.05,1.47,2.37,-3.07,B+1.65,1.35,c),t.box("int",.06,1.35,2.25,-3.03,B+1.65,1.35,O,{uvScale:0}),t.box("int",1.45,1.65,.56,-2.05,B+.84,-3.72,k,{solid:!0,uvScale:0}),t.box("int",1.65,.82,.76,-1.35,B+.41,1.25,D,{solid:!0,uvScale:0}),t.box("int",1.72,.06,.82,-1.35,B+.85,1.25,u,{solid:!0}),t.box("int",.56,1.48,.74,-2.65,B+.74,3.25,w,{solid:!0,uvScale:0}),t.box("int",1.25,.96,.08,.15,B+1.68,-4.04,F,{uvScale:0}),t.stairRun("int",{x0:2.25,z0:2.15,x1:2.25,z1:-1.8,y0:B+.04,y1:J+.04,width:1.08,steps:14,treadMat:c,stringerMat:c,railMat:u,railLeft:!0,railRight:!1,closedRisers:!1,guardLeft:!0,guardRight:!1}),t.box("int",.1,ht-.1,7.6,3.34,z,0,X),t.box("int",.54,1.75,1.55,3.68,B+.88,-2.45,H,{solid:!0,uvScale:0}),t.box("int",1.25,1.05,.52,4.95,B+.54,-3.55,S,{solid:!0,rz:.1,uvScale:0}),t.box("int",1.45,.78,1.15,4.55,B+.4,.85,N,{solid:!0}),t.box("int",.54,1.8,1.25,3.65,B+.92,2.75,A,{solid:!0,uvScale:0}),t.stairRun("int",{x0:8.75,z0:2.15,x1:8.75,z1:-1.8,y0:B+.04,y1:J+.04,width:1.08,steps:14,treadMat:o,stringerMat:c,railMat:o,railLeft:!0,railRight:!1,closedRisers:!1,guardLeft:!0,guardRight:!1});const et=lt-J,rt=J+et*.5;t.box("int",19.6,.16,2.34,0,J-.06,-3.03,u),t.box("int",19.6,.16,1.96,0,J-.06,3.22,u),t.box("int",9.58,.16,4.14,-3.25,J-.06,.2,u),t.box("int",4.92,.16,4.14,5.58,J-.06,.2,o),t.box("int",4.6,.04,6.2,-5.6,J+.03,.6,_),t.box("int",4.4,.04,6.2,-.8,J+.03,.6,q),t.collider(-9.8,9.8,J-.16,J+.02,-4.2,-1.86),t.collider(-9.8,9.8,J-.16,J+.02,2.26,4.2),t.collider(-8.04,1.54,J-.16,J+.02,-1.86,2.26),t.collider(3.12,8.04,J-.16,J+.02,-1.86,2.26),t.floor(-9.68,9.68,-4.08,-1.8,J+.04),t.floor(-9.68,9.68,2.22,4.15,J+.04),t.floor(-8.02,1.52,-1.86,2.26,J+.04),t.floor(3.14,8.02,-1.86,2.26,J+.04),t.kouranRailing("int",-8.04,-1.84,-8.04,2.26,J,.94,c,.56),t.kouranRailing("int",-9.68,2.26,-8.04,2.26,J,.94,c,.5),t.kouranRailing("int",1.54,-1.84,1.54,2.26,J,.94,c,.56),t.kouranRailing("int",1.54,2.26,3.12,2.26,J,.94,c,.5),t.kouranRailing("int",8.04,-1.84,8.04,2.26,J,.94,c,.56),t.kouranRailing("int",8.04,2.26,9.68,2.26,J,.94,c,.5),t.box("ext",19.55,.16,1.14,0,J-.04,4.76,u),t.kouranRailing("ext",-9.72,5.28,9.72,5.28,J,.94,c,.58),t.kouranRailing("ext",-9.72,4.2,-9.72,5.28,J,.94,c,.52),t.kouranRailing("ext",9.72,4.2,9.72,5.28,J,.94,c,.52),t.floor(-9.62,9.62,4.12,5.22,J+.04);const ct=(it,ft)=>{t.box("ext",ft-it,et,.22,(it+ft)*.5,rt,4.2,a,{solid:!0})};ct(-9.8,-7.3),t.box("ext",1.64,.68,.22,-6.5,J+2.61,4.2,a,{solid:!0}),ct(-5.7,-.8),t.box("ext",1.64,.68,.22,0,J+2.61,4.2,a,{solid:!0}),ct(.8,5.7),t.box("ext",1.64,.68,.22,6.5,J+2.61,4.2,a,{solid:!0}),ct(7.3,9.8);for(const it of[-9.82,-7.32,-5.68,-3.2,-.82,.82,3.2,5.68,7.32,9.82])t.box("ext",.16,et+.06,.26,it,rt,4.22,c);t.box("ext",19.65,et,.22,0,rt,-4.2,a,{solid:!0}),t.box("ext",.22,et,8.45,-9.8,rt,0,a,{solid:!0}),t.box("ext",.22,et,8.45,9.8,rt,0,X,{solid:!0});for(const it of[-3.2,3.2])t.box("int",.18,et,.52,it,rt,-3.95,l,{solid:!0}),t.box("int",.18,.68,1.6,it,J+2.61,-2.92,l,{solid:!0}),t.box("int",.18,et,6.38,it,rt,1.02,l,{solid:!0});t.box("int",1.45,.34,2.05,-6.35,J+.21,.2,T,{solid:!0,uvScale:0}),t.box("int",1.45,.34,2.05,-4.55,J+.21,.2,T,{solid:!0,uvScale:0}),t.box("int",1.25,1.15,.48,-5.45,J+.58,-3.82,S,{solid:!0,uvScale:0}),t.box("int",1.85,1.95,.52,-1.65,J+.98,-3.82,Y,{solid:!0,uvScale:0}),t.box("int",.52,1.65,1.55,-2.82,J+.84,.35,U,{solid:!0,uvScale:0}),t.box("int",1.15,.42,1.15,-.55,J+.22,.45,c,{solid:!0}),t.box("int",.56,1.85,1.35,3.62,J+.94,.65,M,{solid:!0,uvScale:0}),t.box("int",2.25,2.15,.05,5.55,J+1.85,-1.45,N,{uvScale:0}),t.box("int",1.35,.46,.72,6.15,J+.24,.95,o,{solid:!0,ry:.35}),t.kawaraSlope("ext",{bottomWidth:20.6,run:1.72,pitch:.34,ridgeX:0,ridgeY:J+.14,ridgeZ:4.18,downslopeYaw:0,tileMat:K,ribMat:V,rafterMat:c,ribSpacing:.4});const Q=.46,j=5.45,C=lt+j*Math.tan(Q)-.1,R=21.2,tt=C-lt+.1;return t.gablePrism("ext",8.5,tt,.24,-9.8,lt-.04,0,a,{ry:Math.PI*.5}),t.gablePrism("ext",8.5,tt,.24,9.8,lt-.04,0,X,{ry:Math.PI*.5}),t.kawaraSlope("ext",{bottomWidth:R,run:j,pitch:Q,ridgeX:0,ridgeY:C,ridgeZ:0,downslopeYaw:0,tileMat:K,ribMat:V,rafterMat:c,ribSpacing:.4}),t.kawaraSlope("ext",{bottomWidth:R,run:j,pitch:Q,ridgeX:0,ridgeY:C,ridgeZ:0,downslopeYaw:Math.PI,tileMat:K,ribMat:V,rafterMat:c,ribSpacing:.4}),t.kawaraRidge("ext",-R*.5+.06,C+.04,0,R*.5-.06,C+.04,0,G,Z,{scale:1.16,courses:3,oniStart:!0,oniEnd:!0}),t.build({id:"H21",name:"第一坑夫長屋（19.6m三戸連棟炭住長屋）",subtitle:"全3戸個別間取り＆階段・2F通し高欄回廊・21m連続本瓦大屋根",category:"house",builtYear:1893,abandonedYear:1985,stories:2,floorElevations:[B,J],entryLocal:[0,0,7.6],entryLookLocalYaw:0})}function x2(i,e){const t=new Se(i),n=e.getMaterial("ishigaki_cut",{roughness:.92,bumpScale:.07}),r=e.getMaterial("dressed_stone",{roughness:.9,bumpScale:.06}),o=e.getMaterial("old_red_brick",{roughness:.9,bumpScale:.06}),s=e.getMaterial("horizontal_wood_siding",{roughness:.89,bumpScale:.05}),a=e.getMaterial("ivory_plaster",{roughness:.91,bumpScale:.04,tint:16052194}),l=e.getMaterial("charred_cedar",{roughness:.92,bumpScale:.05}),c=e.getMaterial("dark_hardwood",{roughness:.84,bumpScale:.04}),u=e.getMaterial("parquet_floor",{roughness:.78,bumpScale:.03}),d=e.getMaterial("oak_flooring",{roughness:.82,bumpScale:.03}),h=e.getMaterial("warm_wood_plank",{roughness:.84,bumpScale:.04}),p=e.getMaterial("tatami_bordered",{roughness:.92,bumpScale:.04}),x=e.getMaterial("vintage_rug_red",{roughness:.93,bumpScale:.03}),g=e.getMaterial("frosted_grid_window",{roughness:.35,opacity:.44,transparent:!0}),m=e.getMaterial("shoji_sliding_door",{roughness:.88,opacity:.88,transparent:!0}),f=e.getMaterial("island_map_sign",{roughness:.82,bumpScale:.02}),_=e.getMaterial("chalkboard",{roughness:.88,bumpScale:.02}),v=e.getMaterial("notice_board",{roughness:.88,bumpScale:.02}),b=e.getMaterial("office_counter",{roughness:.8,bumpScale:.03}),P=e.getMaterial("file_cabinet",{roughness:.66,metalness:.35}),E=e.getMaterial("full_bookcase",{roughness:.84,bumpScale:.04}),A=e.getMaterial("antique_tansu",{roughness:.78,bumpScale:.04}),T=e.getMaterial("red_zabuton",{roughness:.92,bumpScale:.03}),S=e.getMaterial("floral_futon",{roughness:.93,bumpScale:.03}),M=e.getMaterial("cardboard_boxes",{roughness:.92,bumpScale:.04}),I=e.getMaterial("black_volcanic_gravel",{roughness:.96,bumpScale:.06}),O=e.getMaterial("dark_slate",{roughness:.74,metalness:.16,bumpScale:.06,tint:11187390}),k=e.getMaterial("slate_roof_dark",{roughness:.7,metalness:.22,bumpScale:.05}),U=e.getMaterial("glazed_brown_brick",{roughness:.56,metalness:.16,bumpScale:.05,tint:12217164}),D=e.getMaterial("old_red_brick",{roughness:.6,metalness:.16,bumpScale:.05,tint:9719350}),w=e.getMaterial("dark_iron_plate",{roughness:.64,metalness:.28}),y=e.getMaterial("matte_black_metal",{roughness:.56,metalness:.34}),F=.5,q=3.6,Y=6.65,X=9.65,L=12.15;t.box("ext",10.6,2.4,6.2,0,F-1.22,-1.2,n),t.box("ext",10.6,.32,3.6,0,F-.18,3.6,c);for(const et of[-4.9,-2.45,0,2.45,4.9])t.box("ext",.28,5.4,.28,et,F-2.85,5.15,l),t.box("ext",.26,4.4,.26,et,F-2.35,3.35,l),t.box("ext",.16,.2,2,et,F-1.65,4.25,l),t.box("ext",.16,.2,2,et,F-3.25,4.25,l);for(const et of[-3.68,-1.22,1.22,3.68])t.box("ext",2.65,.16,.16,et,F-1.55,5.15,l,{rz:.48}),t.box("ext",2.65,.16,.16,et,F-1.55,5.15,l,{rz:-.48}),t.box("ext",2.65,.16,.16,et,F-3.15,5.15,l,{rz:.48});t.stoneSteps("ext",.9,6.35,5.35,-.35,F,2.2,4,r),t.kouranRailing("ext",-5.18,5.32,-.32,5.32,F,.94,c,.56),t.kouranRailing("ext",2.12,5.32,5.18,5.32,F,.94,c,.56),t.kouranRailing("ext",-5.18,4.1,-5.18,5.32,F,.94,c,.56),t.kouranRailing("ext",5.18,4.1,5.18,5.32,F,.94,c,.56),t.box("ext",1.15,15.2,1.45,5.32,7.1,-.35,o),t.box("ext",1.32,.34,1.62,5.32,14.65,-.35,n),t.box("ext",1.24,.24,1.54,5.32,14.92,-.35,o);const $=q-F,N=F+$*.5;t.box("int",10.2,.1,8,0,F-.03,0,u),t.box("int",4.6,.03,4.2,1.65,F+.03,-.45,x),t.floor(-5.05,5.05,-3.95,5.35,F+.04),t.box("ext",5.35,$,.22,-2.62,N,4.1,s,{solid:!0}),t.box("ext",1.65,.8,.22,.9,F+2.7,4.1,s,{solid:!0}),t.box("ext",3.55,$,.22,3.48,N,4.1,s,{solid:!0}),t.box("ext",10.55,$,.22,0,N,-4.1,s,{solid:!0}),t.box("ext",.22,$,8.35,-5.2,N,0,s,{solid:!0}),t.box("ext",.22,$,8.35,5.2,N,0,s,{solid:!0}),t.box("int",.85,2.25,1.95,4.68,F+1.12,-.35,o,{solid:!0}),t.box("int",.52,.85,1.15,4.42,F+.42,-.35,I),t.box("int",.98,.16,2.15,4.64,F+1.45,-.35,c),t.box("int",1.75,.76,.95,1.65,F+.4,-.45,c,{solid:!0}),t.box("int",2.2,1.92,.52,1.65,F+.96,-3.65,E,{solid:!0,uvScale:0}),t.stairRun("int",{x0:-4.25,z0:2.05,x1:-4.25,z1:-1.85,y0:F+.04,y1:q+.04,width:1.12,steps:14,treadMat:d,stringerMat:c,railMat:c,railLeft:!1,railRight:!0,guardLeft:!1,guardRight:!0});const H=Y-q,K=q+H*.5;t.box("int",8.75,.16,8.05,.8,q-.06,0,d),t.box("int",1.58,.16,2.15,-4.32,q-.06,-2.98,d),t.box("int",1.58,.16,1.92,-4.32,q-.06,3.08,d),t.box("ext",9.75,.16,1.3,0,q-.04,4.72,h),t.kouranRailing("ext",-4.85,5.34,4.85,5.34,q,.96,c,.56),t.kouranRailing("ext",-4.85,4.1,-4.85,5.34,q,.96,c,.56),t.kouranRailing("ext",4.85,4.1,4.85,5.34,q,.96,c,.56),t.collider(-3.55,5.1,q-.16,q+.02,-4,4),t.collider(-5.1,-3.55,q-.16,q+.02,-4,-1.92),t.collider(-5.1,-3.55,q-.16,q+.02,2.18,4),t.floor(-3.55,5.05,-3.95,3.95,q+.04),t.floor(-5.05,-3.55,-3.95,-1.85,q+.04),t.floor(-5.05,-3.55,2.1,3.95,q+.04),t.floor(-4.75,4.75,3.95,5.26,q+.04),t.box("int",.08,.92,4.08,-3.56,q+.46,.14,c,{solid:!0}),t.box("int",1.52,.92,.08,-4.32,q+.46,2.16,c,{solid:!0}),t.box("ext",5.45,H,.22,-2.52,K,4.1,a,{solid:!0}),t.box("ext",1.65,.75,.22,1,q+2.68,4.1,a,{solid:!0}),t.box("ext",3.45,H,.22,3.52,K,4.1,a,{solid:!0}),t.box("ext",10.55,H,.22,0,K,-4.1,a,{solid:!0}),t.box("ext",.22,H,8.35,-5.2,K,0,a,{solid:!0}),t.box("ext",.22,H,8.35,5.2,K,0,a,{solid:!0}),t.box("int",2.4,1.55,.06,1.25,q+1.68,-3.92,f,{uvScale:0}),t.box("int",2,1.25,.06,4.98,q+1.65,-2.45,_,{ry:-Math.PI*.5,uvScale:0}),t.box("int",1.35,.92,.05,4.98,q+1.65,2.25,v,{ry:-Math.PI*.5,uvScale:0}),t.box("int",2.2,.92,.78,1.35,q+.46,-.55,b,{solid:!0,uvScale:0}),t.box("int",.64,1.52,.58,4.45,q+.76,1.05,P,{solid:!0,uvScale:0}),t.box("int",.64,1.52,.58,4.45,q+.76,1.72,P,{solid:!0,uvScale:0}),t.stairRun("int",{x0:-2.65,z0:-1.85,x1:-2.65,z1:2.05,y0:q+.04,y1:Y+.04,width:1.12,steps:14,treadMat:d,stringerMat:c,railMat:c,railLeft:!1,railRight:!0,guardLeft:!1,guardRight:!0});const V=X-Y,G=Y+V*.5;t.box("int",7.1,.16,8.05,1.58,Y-.06,0,p),t.box("int",1.75,.16,8.05,-4.22,Y-.06,0,h),t.box("int",1.45,.16,2.08,-2.65,Y-.06,-2.98,h),t.box("int",1.45,.16,1.92,-2.65,Y-.06,3.05,h),t.box("ext",9.35,.14,1.1,0,Y-.04,4.62,h),t.kouranRailing("ext",-4.64,5.14,4.64,5.14,Y,.96,c,.56),t.kouranRailing("ext",-4.64,4.1,-4.64,5.14,Y,.96,c,.56),t.kouranRailing("ext",4.64,4.1,4.64,5.14,Y,.96,c,.56),t.collider(-1.95,5.1,Y-.16,Y+.02,-4,4),t.collider(-5.1,-3.35,Y-.16,Y+.02,-4,4),t.collider(-3.35,-1.95,Y-.16,Y+.02,-4,-1.98),t.collider(-3.35,-1.95,Y-.16,Y+.02,2.12,4),t.floor(-1.95,5.05,-3.95,3.95,Y+.04),t.floor(-5.05,-3.35,-3.95,3.95,Y+.04),t.floor(-3.35,-1.95,-3.95,-1.9,Y+.04),t.floor(-3.35,-1.95,2.05,3.95,Y+.04),t.floor(-4.55,4.55,3.95,5.06,Y+.04),t.box("int",.08,.92,4.08,-1.96,Y+.46,.06,c,{solid:!0}),t.box("int",.08,.92,4.08,-3.34,Y+.46,.06,c,{solid:!0}),t.box("int",1.4,.92,.08,-2.65,Y+.46,-1.96,c,{solid:!0}),t.box("ext",5.2,V,.22,-2.65,G,4.1,s,{solid:!0}),t.box("ext",1.85,.72,.22,.85,Y+2.64,4.1,s,{solid:!0}),t.box("ext",3.45,V,.22,3.52,G,4.1,s,{solid:!0}),t.box("ext",1.05,2.22,.06,-.45,Y+1.12,3.94,m,{uvScale:0}),t.box("ext",10.55,V,.22,0,G,-4.1,s,{solid:!0}),t.box("ext",.22,V,8.35,-5.2,G,0,s,{solid:!0}),t.box("ext",.22,V,8.35,5.2,G,0,s,{solid:!0}),t.box("int",2.4,.2,.86,3.55,Y+.12,-3.55,c,{solid:!0}),t.box("int",1.45,1.42,.54,.65,Y+.72,-3.65,A,{solid:!0,uvScale:0}),t.box("int",1.65,.36,.98,1.45,Y+.22,.45,c,{solid:!0}),t.box("int",.6,.07,.6,1.45,Y+.08,-.45,T,{uvScale:0}),t.box("int",.6,.07,.6,1.45,Y+.08,1.35,T,{uvScale:0}),t.box("int",1.55,.14,2.05,3.85,Y+.11,1.45,S,{uvScale:0}),t.stairRun("int",{x0:-4.25,z0:2.05,x1:-4.25,z1:-1.85,y0:Y+.04,y1:X+.04,width:1.12,steps:14,treadMat:d,stringerMat:c,railMat:c,railLeft:!1,railRight:!0,guardLeft:!1,guardRight:!0});const Z=L-X,B=X+Z*.5;t.box("int",8.2,.16,7.25,.52,X-.06,0,h),t.box("int",1.3,.16,1.72,-4.18,X-.06,-2.76,h),t.box("int",1.3,.16,1.5,-4.18,X-.06,2.88,h),t.collider(-3.55,4.6,X-.16,X+.02,-3.6,3.6),t.collider(-4.8,-3.55,X-.16,X+.02,-3.6,-1.92),t.collider(-4.8,-3.55,X-.16,X+.02,2.18,3.6),t.floor(-3.55,4.5,-3.5,3.5,X+.04),t.floor(-4.72,-3.55,-3.5,-1.85,X+.04),t.floor(-4.72,-3.55,2.1,3.5,X+.04),t.box("int",.08,.9,4.1,-3.56,X+.45,.14,c,{solid:!0}),t.box("int",1.25,.9,.08,-4.18,X+.45,2.16,c,{solid:!0});for(const et of[-3.6,3.6])t.box("ext",1.8,Z,.22,-3.95,B,et,a,{solid:!0}),t.box("ext",5.8,.85,.22,-.15,X+.42,et,a,{solid:!0}),t.box("ext",5.8,.42,.22,-.15,X+2.29,et,c,{solid:!0}),t.box("ext",5.76,1.24,.06,-.15,X+1.46,et,g,{uvScale:0}),t.box("ext",2,Z,.22,3.68,B,et,a,{solid:!0});t.box("ext",.22,Z,7.35,-4.8,B,0,a,{solid:!0}),t.box("ext",.22,Z,7.35,4.6,B,0,a,{solid:!0});for(const et of[-2.4,-.4,1.6,3.4])t.box("int",.18,.2,7,et,L-.14,0,c);t.box("int",9.2,.12,7,-.1,L+.02,0,h),t.collider(-4.75,4.55,L-.1,L+.12,-3.55,3.55),t.box("int",1.75,.82,.85,.85,X+.42,1.45,c,{solid:!0}),t.box("int",1.45,.92,.82,3.45,X+.46,-2.45,M,{solid:!0,uvScale:0}),t.box("int",.85,.65,.72,3.4,X+1.24,-2.42,M,{ry:.24,uvScale:0}),t.kawaraSlope("ext",{bottomWidth:11.2,run:1.45,pitch:.36,ridgeX:0,ridgeY:q+.12,ridgeZ:4.15,downslopeYaw:0,tileMat:O,ribMat:k,eaveMat:w,rafterMat:c,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:9.6,bottomWidth:12.2,run:1.75,pitch:.4,ridgeX:-.1,ridgeY:X+.24,ridgeZ:3.6,downslopeYaw:0,tileMat:U,ribMat:D,eaveMat:w,rafterMat:c,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:9.6,bottomWidth:12.2,run:1.75,pitch:.4,ridgeX:-.1,ridgeY:X+.24,ridgeZ:-3.6,downslopeYaw:Math.PI,tileMat:U,ribMat:D,eaveMat:w,rafterMat:c,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:7.3,bottomWidth:10.6,run:1.65,pitch:.4,ridgeX:4.6,ridgeY:X+.24,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:U,ribMat:D,eaveMat:w,rafterMat:c,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:7.3,bottomWidth:10.6,run:1.65,pitch:.4,ridgeX:-4.8,ridgeY:X+.24,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:U,ribMat:D,eaveMat:w,rafterMat:c,ribSpacing:.38});const J=.48,lt=4.65,ht=L-.14+lt*Math.tan(J),z=L+1.05;t.kawaraSlope("ext",{topWidth:6,bottomWidth:11.6,run:lt,pitch:J,ridgeX:-.1,ridgeY:ht,ridgeZ:0,downslopeYaw:0,tileMat:O,ribMat:k,eaveMat:w,rafterMat:c,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:6,bottomWidth:11.6,run:lt,pitch:J,ridgeX:-.1,ridgeY:ht,ridgeZ:0,downslopeYaw:Math.PI,tileMat:O,ribMat:k,eaveMat:w,rafterMat:c,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:4.6,bottomWidth:9.3,run:2.85,pitch:J,ridgeX:2.9,ridgeY:z+.12,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:O,ribMat:k,eaveMat:w,rafterMat:c,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:4.6,bottomWidth:9.3,run:2.85,pitch:J,ridgeX:-3.1,ridgeY:z+.12,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:O,ribMat:k,eaveMat:w,rafterMat:c,ribSpacing:.38}),t.gablePrism("ext",4.6,ht-z,.22,2.85,z,0,a,{ry:Math.PI*.5}),t.gablePrism("ext",4.6,ht-z,.22,-3.05,z,0,a,{ry:Math.PI*.5});const ut=L-.12;return t.kawaraRidge("ext",-3.1,z+.12,2.3,-5.85,ut,4.6,w,y,{scale:.74,oniEnd:!0}),t.kawaraRidge("ext",2.9,z+.12,2.3,5.65,ut,4.6,w,y,{scale:.74,oniEnd:!0}),t.kawaraRidge("ext",-3.1,z+.12,-2.3,-5.85,ut,-4.6,w,y,{scale:.74,oniEnd:!0}),t.kawaraRidge("ext",2.9,z+.12,-2.3,5.65,ut,-4.6,w,y,{scale:.74,oniEnd:!0}),t.box("ext",3.6,.58,1.15,-.1,ht+.14,0,a),t.kawaraSlope("ext",{bottomWidth:4.3,run:1.05,pitch:.44,ridgeX:-.1,ridgeY:ht+.88,ridgeZ:0,downslopeYaw:0,tileMat:U,ribMat:D,eaveMat:w,rafterMat:c,ribSpacing:.34}),t.kawaraSlope("ext",{bottomWidth:4.3,run:1.05,pitch:.44,ridgeX:-.1,ridgeY:ht+.88,ridgeZ:0,downslopeYaw:Math.PI,tileMat:U,ribMat:D,eaveMat:w,rafterMat:c,ribSpacing:.34}),t.kawaraRidge("ext",-2.25,ht+.92,0,2.05,ht+.92,0,w,y,{scale:1.15,oniStart:!0,oniEnd:!0,courses:3}),t.build({id:i.id,name:"黒岩監督邸（高台・懸造り四階洋和館）",subtitle:"明治27年築・急斜面懸造り木柱脚・4層赤煉瓦煙突・黒＆赤茶重層瓦入母屋・四階建",category:"house",builtYear:1894,abandonedYear:1985,stories:4,floorElevations:[F+.04,q+.04,Y+.04,X+.04],entryLocal:[.9,0,7.5]})}function g2(i,e){const t=new Se(i),n=e.getMaterial("ishigaki_cut",{roughness:.92,bumpScale:.07}),r=e.getMaterial("aged_timber_planks",{roughness:.92,bumpScale:.06,tint:12366500}),o=e.getMaterial("charred_cedar",{roughness:.91,bumpScale:.05}),s=e.getMaterial("white_plaster",{roughness:.92,bumpScale:.04,tint:15920868}),a=e.getMaterial("heavy_studded_wood",{roughness:.86,bumpScale:.06}),l=e.getMaterial("red_brick",{roughness:.9,bumpScale:.06}),c=e.getMaterial("old_red_brick",{roughness:.92,bumpScale:.07}),u=e.getMaterial("oxidized_riveted_steel",{roughness:.68,metalness:.55,bumpScale:.05}),d=e.getMaterial("dark_bolted_steel",{roughness:.62,metalness:.6,bumpScale:.05}),h=e.getMaterial("blue_rust_corrugated",{roughness:.72,metalness:.42,bumpScale:.06,doubleSide:!0}),p=e.getMaterial("rusted_corrugated",{roughness:.78,metalness:.36,bumpScale:.06,doubleSide:!0}),x=e.getMaterial("corrugated_zinc_bolts",{roughness:.62,metalness:.5,bumpScale:.05,doubleSide:!0}),g=e.getMaterial("metal_louver_vent",{roughness:.65,metalness:.48,bumpScale:.06}),m=e.getMaterial("cedar_louvers",{roughness:.88,bumpScale:.05}),f=e.getMaterial("diamond_plate",{roughness:.56,metalness:.65,bumpScale:.05}),_=e.getMaterial("hazard_stripes",{roughness:.76,bumpScale:.02}),v=e.getMaterial("dark_hardwood",{roughness:.84,bumpScale:.04}),b=e.getMaterial("matte_black_metal",{roughness:.5,metalness:.72}),P=e.getMaterial("charred_soil",{roughness:.96,bumpScale:.07}),E=e.getMaterial("coal_seam_rock",{roughness:.86,bumpScale:.08}),A=e.getMaterial("metal_grate",{roughness:.6,metalness:.62,bumpScale:.06}),T=e.getMaterial("drain_grate",{roughness:.62,metalness:.58,bumpScale:.06}),S=e.getMaterial("fire_extinguisher_box",{roughness:.54,metalness:.25}),M=e.getMaterial("scrap_metal_patch",{roughness:.72,metalness:.52,bumpScale:.06}),I=e.getMaterial("tree_bark",{roughness:.94,bumpScale:.07}),O=e.getMaterial("dark_damp_stone",{roughness:.84,bumpScale:.07}),k=e.getMaterial("pegboard",{roughness:.84,bumpScale:.04}),U=e.getMaterial("storage_rack",{roughness:.88,bumpScale:.04}),D=e.getMaterial("oak_flooring",{roughness:.8,bumpScale:.03}),w=e.getMaterial("warm_wood_plank",{roughness:.83,bumpScale:.04}),y=e.getMaterial("woven_screen_brown",{roughness:.9,bumpScale:.05}),F=e.getMaterial("coir_doormat",{roughness:.96,bumpScale:.06}),q=e.getMaterial("tatami_green_border",{roughness:.92,bumpScale:.04}),Y=e.getMaterial("tatami_bordered",{roughness:.92,bumpScale:.04}),X=e.getMaterial("shoji_sliding_door",{roughness:.88,opacity:.9,transparent:!0}),L=e.getMaterial("antique_tansu",{roughness:.78,bumpScale:.04}),$=e.getMaterial("red_zabuton",{roughness:.92,bumpScale:.03}),N=e.getMaterial("retro_kitchen_unit",{roughness:.78,bumpScale:.03}),H=e.getMaterial("kitchen_cabinet",{roughness:.82,bumpScale:.03}),K=e.getMaterial("blue_bath_tile",{roughness:.48,bumpScale:.03}),V=e.getMaterial("floral_futon",{roughness:.92,bumpScale:.03}),G=e.getMaterial("wardrobe_wood",{roughness:.82,bumpScale:.03}),Z=e.getMaterial("wooden_dresser",{roughness:.82,bumpScale:.03}),B=e.getMaterial("chalkboard",{roughness:.88,bumpScale:.02}),J=e.getMaterial("file_cabinet",{roughness:.66,metalness:.25}),lt=e.getMaterial("full_bookcase",{roughness:.84,bumpScale:.04}),ht=e.getMaterial("cork_board",{roughness:.92,bumpScale:.03}),z=e.getMaterial("window_frosted_wood",{roughness:.34,opacity:.36,transparent:!0}),ut=e.getMaterial("slate_roof_dark",{roughness:.76,metalness:.16,bumpScale:.06,tint:7633538}),et=e.getMaterial("dark_slate",{roughness:.72,metalness:.2,bumpScale:.05,tint:6449264}),rt=e.getMaterial("dark_iron_plate",{roughness:.64,metalness:.28,tint:5659748}),ct=e.getMaterial("matte_black_metal",{roughness:.54,metalness:.38,tint:4935768}),Q=.4,j=3.55,C=6.55;t.box("ext",13.3,3.45,9.2,0,Q-1.74,0,n),t.box("ext",3.2,1.45,1.45,-3.1,Q-.74,5.05,n),t.box("ext",2.9,.08,1.45,-3.1,Q-.02,5.05,f),t.box("ext",2.8,.12,.24,-3.1,Q+.04,4.42,_,{uvScale:0}),t.stoneSteps("ext",-3.1,6.05,5.15,-.08,Q,2.75,3,f),t.floor(-4.5,-1.7,4.3,5.25,Q+.04),t.stoneSteps("ext",3.5,5.55,4.55,-.08,Q,1.95,3,n),t.floor(2.5,4.5,4.3,4.7,Q+.04);const R=-6.65,tt=-.8;t.box("ext",1.85,3.4,1.85,R,-1.2,tt,n,{solid:!0}),t.box("ext",1.65,3.6,1.65,R,2.2,tt,c,{solid:!0}),t.box("ext",1.42,3.4,1.42,R,5.65,tt,l,{solid:!0}),t.box("ext",1.2,3.1,1.2,R,8.85,tt,l,{solid:!0}),t.box("ext",1.06,1.65,1.06,R,11.15,tt,c,{solid:!0}),t.box("ext",1.34,.28,1.34,R,12.02,tt,c);for(const Ct of[4.1,7.2,10.2]){const Zt=Ct<5?1.56:Ct<8?1.32:1.16;t.box("ext",Zt,.14,Zt,R,Ct,tt,d)}t.box("ext",1.75,2,6.7,-7.22,-.8,-.65,n);for(const Ct of[-3.75,-2.05,.65,2.45])t.box("ext",.16,2.85,.16,-7.85,Q+1.32,Ct,r,{solid:!0});t.box("ext",1.76,.08,2.25,-7.42,Q+2.92,-2.75,h,{rz:.24}),t.box("ext",1.76,.08,2.25,-7.42,Q+2.92,-.55,p,{rz:.24}),t.box("ext",1.76,.08,2.3,-7.42,Q+2.92,1.68,x,{rz:.24}),t.box("ext",1.05,.72,1.85,-7.15,Q+.32,1.45,E,{solid:!0}),t.box("ext",.85,.56,1.45,-7.1,Q+.25,-2.65,M,{solid:!0});const it=j-Q,ft=Q+it*.5,st=C-Q,yt=Q+st*.5;t.box("int",7,.12,8.7,-2.9,Q-.04,0,P),t.box("int",1.15,.04,5.4,-2.15,Q+.02,-.5,T),t.box("int",1.35,.04,1.85,-4.35,Q+.02,-.8,A),t.box("int",5.8,.12,8.7,3.5,Q-.04,0,w),t.box("int",5.3,.04,4.7,3.45,Q+.03,1.75,q),t.box("int",2.2,.05,2.5,5.2,Q+.02,-3,K),t.box("int",1.1,.03,.68,3.5,Q+.04,4.02,F,{uvScale:0}),t.floor(-6.25,6.25,-4.25,4.42,Q+.04),t.box("ext",2.04,st,.28,-5.4,yt,4.4,r,{solid:!0}),t.box("ext",2.64,st-2.68,.28,-3.1,Q+2.68+(st-2.68)*.5,4.4,r,{solid:!0}),t.box("ext",2.44,st,.28,-.6,yt,4.4,r,{solid:!0}),t.box("ext",1.85,1.35,.32,-5.4,Q+.72,4.42,u),t.box("ext",2.15,1.35,.32,-.6,Q+.72,4.42,u),t.box("ext",2.2,.95,.16,-3.1,j+1.75,4.5,g,{uvScale:0}),t.box("ext",1.26,2.62,.12,-4.85,Q+1.31,4.92,u,{ry:-.78,solid:!0,uvScale:0}),t.box("ext",1.26,2.62,.12,-1.35,Q+1.31,4.92,a,{ry:.78,solid:!0,uvScale:0}),t.box("ext",.28,st,8.85,-6.4,yt,0,r,{solid:!0}),t.box("ext",.32,1.4,8.85,-6.42,Q+.7,0,u),t.box("ext",.14,1.05,2.85,-6.5,j+1.65,2.15,g,{uvScale:0}),t.box("ext",7.05,it+.95,.28,-2.9,Q+(it+.95)*.5,-4.4,r,{solid:!0}),t.box("ext",1.95,st-it-.95,.28,-5.44,j+1.98,-4.4,r,{solid:!0}),t.box("ext",3,.55,.28,-2.98,C-.28,-4.4,r,{solid:!0}),t.box("ext",2.96,1.5,.06,-2.98,j+1.7,-4.4,z,{uvScale:0}),t.box("ext",2.15,st-it-.95,.28,-.42,j+1.98,-4.4,r,{solid:!0}),t.box("ext",2.14,1.25,.26,1.65,Q+.62,4.4,o,{solid:!0}),t.box("ext",2.14,it-1.25,.26,1.65,Q+2.2,4.4,s,{solid:!0}),t.box("ext",1.64,.78,.26,3.5,Q+2.76,4.4,s,{solid:!0}),t.box("ext",2.14,1.25,.26,5.35,Q+.62,4.4,o,{solid:!0}),t.box("ext",2.14,it-1.25,.26,5.35,Q+2.2,4.4,s,{solid:!0}),t.box("ext",5.85,1.25,.26,3.5,Q+.62,-4.4,o,{solid:!0}),t.box("ext",5.85,it-1.25,.26,3.5,Q+2.2,-4.4,s,{solid:!0}),t.box("ext",.26,1.15,8.85,6.4,Q+.58,0,o,{solid:!0}),t.box("ext",.26,it-1.15,3.85,6.4,Q+2.15,-2.5,s,{solid:!0}),t.box("ext",.26,.58,2.7,6.4,Q+2.86,.8,s,{solid:!0}),t.box("ext",.06,1.42,2.66,6.4,Q+1.86,.8,X,{uvScale:0}),t.box("ext",.26,it-1.15,2.3,6.4,Q+2.15,3.28,s,{solid:!0}),t.box("int",.22,it,6.68,.6,ft,-1.08,c,{solid:!0}),t.box("int",.22,.72,1.55,.6,Q+2.79,3,c,{solid:!0}),t.box("int",.22,it,.68,.6,ft,4.08,c,{solid:!0}),t.box("int",1.75,1.05,2.05,-5.32,Q+.52,-.8,l,{solid:!0}),t.box("int",1.65,.65,.34,-5.32,Q+1.38,-1.68,c,{solid:!0}),t.box("int",1.65,.65,.34,-5.32,Q+1.38,.08,c,{solid:!0}),t.box("int",.95,.24,1.18,-5.25,Q+1.12,-.8,E),t.box("int",1.92,.42,2.18,-5.22,Q+2.38,-.8,d),t.box("int",1.48,.75,1.64,-5.44,Q+2.96,-.8,u),t.box("int",1.04,1.15,1.16,-5.68,Q+3.9,-.8,d),t.box("int",.92,.72,.92,-6.02,Q+4.45,-.8,u),t.box("int",1.15,.88,1.05,-5.25,Q+.44,1.08,r,{solid:!0}),t.cyl("int",.05,.05,.65,6,-4.42,Q+.65,1.08,b,{rz:Math.PI*.5}),t.cyl("int",.38,.44,.66,10,-3.35,Q+.33,-.65,I),t.collider(-3.78,-2.92,Q,Q+1.05,-1.08,-.22),t.box("int",.32,.22,.72,-3.35,Q+.78,-.65,b),t.box("int",.22,.14,.32,-3.35,Q+.82,-.2,b),t.box("int",.72,.7,1.05,-3.35,Q+.35,1.15,O,{solid:!0}),t.box("int",1.45,.72,1.25,-5.45,Q+.36,3.1,E,{solid:!0}),t.box("int",.08,1.45,2.35,.44,Q+1.68,-.65,k,{uvScale:0}),t.box("int",.52,1.75,1.55,-5.98,Q+.88,-3.35,U,{solid:!0,uvScale:0}),t.box("int",.48,.96,1.25,-4.25,Q+.48,-3.85,M,{solid:!0}),t.box("int",.36,.82,.24,-1.35,Q+.98,4.18,S,{solid:!0,uvScale:0}),t.box("int",1.05,it,.14,1.12,ft,-.8,s,{solid:!0}),t.box("int",1.8,.72,.14,2.52,Q+2.79,-.8,s,{solid:!0}),t.box("int",3,it,.14,4.9,ft,-.8,s,{solid:!0}),t.box("int",1.55,.38,.96,3.55,Q+.2,1.45,v,{solid:!0}),t.box("int",.62,.07,.62,3.55,Q+.07,.55,$,{uvScale:0}),t.box("int",.62,.07,.62,3.55,Q+.07,2.35,$,{uvScale:0}),t.box("int",.52,1.48,1.45,5.95,Q+.75,2.95,L,{solid:!0,uvScale:0}),t.box("int",1.85,.92,.62,2.15,Q+.46,-3.98,N,{solid:!0,uvScale:0}),t.box("int",.56,1.85,1.35,1.02,Q+.94,-2.55,H,{solid:!0,uvScale:0}),t.box("int",1.55,.66,1.15,5.45,Q+.33,-3.55,K,{solid:!0}),t.stairRun("int",{x0:-.25,z0:2.55,x1:-.25,z1:-1.45,y0:Q+.04,y1:j+.04,width:1.16,steps:14,treadMat:D,stringerMat:d,railMat:d,railLeft:!0,railRight:!1,closedRisers:!1,guardLeft:!0,guardRight:!1});const gt=C-j,Mt=j+gt*.5;t.box("int",6.95,.18,1.92,-2.88,j-.07,-3.4,D),t.box("int",3.45,.04,1.3,-3.65,j+.03,-3.3,A),t.box("int",1.6,.18,1.05,-.18,j-.07,-1.96,D),t.box("int",6.95,.24,.22,-2.88,j-.24,-2.5,d),t.collider(-6.35,.6,j-.18,j+.02,-4.35,-2.45),t.collider(-.96,.6,j-.18,j+.02,-2.45,-1.45),t.floor(-6.22,.65,-4.25,-2.46,j+.04),t.floor(-.95,.65,-2.48,-1.44,j+.04),t.kouranRailing("int",-6.26,-2.46,-.96,-2.46,j,.96,d,.52),t.kouranRailing("int",-.96,-2.46,-.96,-1.46,j,.96,d,.5),t.box("int",5.8,.16,8.8,3.5,j-.06,0,D),t.box("int",5.45,.04,4.45,3.5,j+.03,2,Y),t.box("int",5.65,.08,4.65,3.5,C-.08,2,y),t.collider(.6,6.4,j-.16,j+.02,-4.4,4.4),t.floor(.6,6.28,-4.28,4.35,j+.04),t.box("ext",5.45,.16,1.08,3.5,j-.04,4.94,w),t.kouranRailing("ext",.8,5.42,6.18,5.42,j,.94,v,.52),t.kouranRailing("ext",.8,4.4,.8,5.42,j,.94,v,.52),t.kouranRailing("ext",6.18,4.4,6.18,5.42,j,.94,v,.52),t.floor(.88,6.1,4.32,5.36,j+.04),t.box("int",.22,gt,.62,.6,Mt,-4.1,s,{solid:!0}),t.box("int",.22,.72,1.65,.6,j+2.64,-3,s,{solid:!0}),t.box("int",.22,gt,6.62,.6,Mt,1.1,s,{solid:!0}),t.box("ext",2.08,gt,.22,1.64,Mt,4.4,s,{solid:!0}),t.box("ext",1.74,.7,.22,3.5,j+2.65,4.4,s,{solid:!0}),t.box("ext",2.08,gt,.22,5.36,Mt,4.4,s,{solid:!0}),t.box("ext",5.85,gt,.22,3.5,Mt,-4.4,s,{solid:!0}),t.box("ext",.22,.94,8.85,6.4,j+.47,0,s,{solid:!0}),t.box("ext",.22,gt-.94,2.5,6.4,j+1.97,-3.15,s,{solid:!0}),t.box("ext",.22,.56,2.6,6.4,j+2.72,-.6,s,{solid:!0}),t.box("ext",.06,1.5,2.56,6.4,j+1.69,-.6,z,{uvScale:0}),t.box("ext",.22,gt-.94,3.75,6.4,j+1.97,2.55,s,{solid:!0});for(const Ct of[.64,2.62,4.38,6.42])t.box("ext",.16,gt+.06,.26,Ct,Mt,4.42,v);t.box("int",1.68,gt,.14,1.44,Mt,-.4,s,{solid:!0}),t.box("int",1.7,.7,.14,3.08,j+2.65,-.4,s,{solid:!0}),t.box("int",2.52,gt,.14,5.15,Mt,-.4,s,{solid:!0}),t.box("int",2.15,1.35,.08,3.55,j+1.7,-4.22,B,{uvScale:0}),t.box("int",1.25,.98,.08,1.55,j+1.72,-4.22,ht,{uvScale:0}),t.box("int",.52,1.95,1.65,5.98,j+.98,-3.25,lt,{solid:!0,uvScale:0}),t.box("int",.56,1.48,.74,5.95,j+.74,-1.75,J,{solid:!0,uvScale:0}),t.box("int",1.65,.34,2.15,4.85,j+.21,1.75,V,{solid:!0,uvScale:0}),t.box("int",.56,1.82,1.35,1.05,j+.92,1.35,G,{solid:!0,uvScale:0}),t.box("int",1.2,1.12,.48,1.55,j+.56,3.88,Z,{solid:!0,uvScale:0});for(const Ct of[-4.6,-2.4,-.4])t.box("int",.22,.26,8.6,Ct,C-.15,0,v),t.box("int",.18,2.15,.18,Ct,C+.96,0,v);t.box("int",6.8,.24,.22,-2.9,C+2.05,0,v),t.kawaraSlope("ext",{bottomWidth:6.2,run:1.25,pitch:.36,ridgeX:3.55,ridgeY:j+.1,ridgeZ:4.38,downslopeYaw:0,tileMat:ut,ribMat:et,rafterMat:v,ribSpacing:.38});const zt=.48,_t=5.45,Tt=C+_t*Math.tan(zt)-.1,Dt=14.3,Ft=Tt-C+.12;t.gablePrism("ext",8.9,Ft,.26,6.4,C-.04,0,s,{ry:Math.PI*.5}),t.gablePrism("ext",8.9,Ft,.26,-6.4,C-.04,0,r,{ry:Math.PI*.5}),t.box("ext",.14,.85,1.85,-6.54,C+1.15,0,m,{uvScale:0}),t.box("ext",.14,.85,1.85,6.54,C+1.15,0,m,{uvScale:0}),t.kawaraSlope("ext",{bottomWidth:Dt,run:_t,pitch:zt,ridgeX:0,ridgeY:Tt,ridgeZ:0,downslopeYaw:0,tileMat:ut,ribMat:et,rafterMat:v,ribSpacing:.38}),t.kawaraSlope("ext",{bottomWidth:Dt,run:_t,pitch:zt,ridgeX:0,ridgeY:Tt,ridgeZ:0,downslopeYaw:Math.PI,tileMat:ut,ribMat:et,rafterMat:v,ribSpacing:.38}),t.kawaraRidge("ext",-Dt*.5+.06,Tt+.04,0,Dt*.5-.06,Tt+.04,0,rt,ct,{scale:1.14,courses:3,oniStart:!0,oniEnd:!0});const wt=9.5,Nt=2.15,Et=Tt-.42,Ht=Tt+.96,nt=Ht-Et,vt=Et+nt*.5;t.box("ext",wt,nt,.16,0,vt,Nt*.5,g,{uvScale:.7}),t.box("ext",wt,nt,.16,0,vt,-Nt*.5,m,{uvScale:.7}),t.box("ext",.18,nt,Nt,-wt*.5,vt,0,o),t.box("ext",.18,nt,Nt,wt*.5,vt,0,o);for(const Ct of[-4.75,-2.85,-.95,.95,2.85,4.75])t.box("ext",.14,nt+.08,.22,Ct,vt,Nt*.5+.04,v),t.box("ext",.14,nt+.08,.22,Ct,vt,-Nt*.5-.04,v);const mt=.44,bt=1.62,Rt=Ht+bt*Math.tan(mt)-.06,At=wt+.95;return t.gablePrism("ext",Nt+.1,Rt-Ht+.08,.18,-wt*.5,Ht-.04,0,o,{ry:Math.PI*.5}),t.gablePrism("ext",Nt+.1,Rt-Ht+.08,.18,wt*.5,Ht-.04,0,o,{ry:Math.PI*.5}),t.kawaraSlope("ext",{bottomWidth:At,run:bt,pitch:mt,ridgeX:0,ridgeY:Rt,ridgeZ:0,downslopeYaw:0,tileMat:ut,ribMat:et,rafterMat:v,ribSpacing:.36}),t.kawaraSlope("ext",{bottomWidth:At,run:bt,pitch:mt,ridgeX:0,ridgeY:Rt,ridgeZ:0,downslopeYaw:Math.PI,tileMat:ut,ribMat:et,rafterMat:v,ribSpacing:.36}),t.kawaraRidge("ext",-At*.5+.05,Rt+.04,0,At*.5-.05,Rt+.04,0,rt,ct,{scale:.88,courses:2,oniStart:!0,oniEnd:!0}),t.build({id:"H23",name:"鉄山鍛冶場（越屋根＆煉瓦大煙突の吹抜二階鍛冶屋）",subtitle:"6.5m吹抜鍛冶工房・2F見下ろし回廊・煙出し越屋根＆12m大煙突",category:"house",builtYear:1885,abandonedYear:1985,stories:2,floorElevations:[Q,j],entryLocal:[-3.1,0,6.45],entryLookLocalYaw:0})}function b2(i,e){const t=new Se(i),n=e.getMaterial("asphalt_dark",{roughness:.94,bumpScale:.05}),r=e.getMaterial("patched_asphalt",{roughness:.94,bumpScale:.06}),o=e.getMaterial("concrete_curb",{roughness:.9,bumpScale:.05}),s=e.getMaterial("smooth_concrete_dark",{roughness:.88,bumpScale:.04}),a=e.getMaterial("ishigaki_cut",{roughness:.92,bumpScale:.07}),l=e.getMaterial("dressed_stone",{roughness:.9,bumpScale:.06}),c=e.getMaterial("charred_cedar",{roughness:.9,bumpScale:.05}),u=e.getMaterial("aged_timber_planks",{roughness:.91,bumpScale:.05}),d=e.getMaterial("horizontal_wood_siding",{roughness:.88,bumpScale:.05}),h=e.getMaterial("white_plaster",{roughness:.92,bumpScale:.04,tint:15789024}),p=e.getMaterial("washi_plaster",{roughness:.91,bumpScale:.03}),x=e.getMaterial("mossy_wall_patch",{roughness:.94,bumpScale:.06}),g=e.getMaterial("dark_hardwood",{roughness:.84,bumpScale:.04}),m=e.getMaterial("warm_wood_plank",{roughness:.82,bumpScale:.04}),f=e.getMaterial("oak_flooring",{roughness:.8,bumpScale:.03}),_=e.getMaterial("green_textured_mat",{roughness:.9,bumpScale:.03}),v=e.getMaterial("galvanized_zinc",{roughness:.62,metalness:.44,bumpScale:.05}),b=e.getMaterial("corrugated_gray",{roughness:.66,metalness:.36,bumpScale:.06}),P=e.getMaterial("steel_truss_wall",{roughness:.62,metalness:.52,bumpScale:.05}),E=e.getMaterial("mine_steel_door",{roughness:.66,metalness:.5,bumpScale:.05}),A=e.getMaterial("mine_control_panel",{roughness:.62,metalness:.45,bumpScale:.04}),T=e.getMaterial("mine_valve_pipes",{roughness:.62,metalness:.55,bumpScale:.06}),S=e.getMaterial("blue_mosaic_tile",{roughness:.36,bumpScale:.03}),M=e.getMaterial("white_bath_tile",{roughness:.44,bumpScale:.02}),I=e.getMaterial("retro_tile_wall",{roughness:.48,bumpScale:.03}),O=e.getMaterial("smooth_concrete_dark",{roughness:.16,metalness:.18,tint:2509922}),k=e.getMaterial("window_frosted_wood",{roughness:.3,opacity:.34,transparent:!0}),U=e.getMaterial("window_frosted_wood",{roughness:.22,opacity:.22,transparent:!0,tint:14478324}),D=e.getMaterial("cedar_louvers",{roughness:.86,bumpScale:.05}),w=e.getMaterial("dark_green_chalk",{roughness:.88,bumpScale:.02}),y=e.getMaterial("office_counter",{roughness:.8,bumpScale:.03}),F=e.getMaterial("file_cabinet",{roughness:.66,metalness:.25}),q=e.getMaterial("enamel_sign_blue",{roughness:.46,metalness:.32}),Y=e.getMaterial("notice_board",{roughness:.88,bumpScale:.02}),X=e.getMaterial("cork_board",{roughness:.92,bumpScale:.03}),L=e.getMaterial("island_map_sign",{roughness:.8,bumpScale:.02}),$=e.getMaterial("storage_rack",{roughness:.88,bumpScale:.04}),N=e.getMaterial("coarse_canvas",{roughness:.95,bumpScale:.05,doubleSide:!0}),H=e.getMaterial("full_bookcase",{roughness:.84,bumpScale:.04}),K=e.getMaterial("retro_kitchen_unit",{roughness:.78,bumpScale:.03}),V=e.getMaterial("tatami_plain",{roughness:.92,bumpScale:.04}),G=e.getMaterial("woven_carpet_gray",{roughness:.94,bumpScale:.04}),Z=e.getMaterial("floral_futon",{roughness:.92,bumpScale:.03}),B=e.getMaterial("wooden_dresser",{roughness:.82,bumpScale:.03}),J=e.getMaterial("wardrobe_wood",{roughness:.82,bumpScale:.03}),lt=e.getMaterial("antique_tansu",{roughness:.78,bumpScale:.04}),ht=e.getMaterial("red_zabuton",{roughness:.92,bumpScale:.03}),z=e.getMaterial("coir_doormat",{roughness:.96,bumpScale:.06}),ut=e.getMaterial("slate_roof_dark",{roughness:.72,metalness:.2,bumpScale:.06,tint:9344412}),et=e.getMaterial("dark_slate",{roughness:.68,metalness:.24,bumpScale:.05,tint:8028552}),rt=e.getMaterial("dark_iron_plate",{roughness:.6,metalness:.32,tint:6712692}),ct=e.getMaterial("matte_black_metal",{roughness:.52,metalness:.42,tint:5528160}),Q=.45,j=3.55,C=6.55,R=9.45;t.box("ext",17,2.8,9.5,0,Q-1.42,0,s),t.box("ext",16.8,.1,2.15,0,.02,5.58,n),t.box("ext",5.4,.11,1.85,3.2,.025,5.55,r),t.box("ext",17,.16,.2,0,.06,6.66,o),t.stoneSteps("ext",-3.5,5.55,4.48,-.04,Q,2.5,3,l);for(const Et of[-5.2,-1.8])t.box("ext",.18,2.95,.18,Et,Q+1.48,5.85,g,{solid:!0});t.box("ext",3.7,.14,1.65,-3.5,Q+2.96,5.15,v,{rx:.14}),t.box("ext",1.95,2.4,8.8,9.12,Q-1.22,0,a),t.box("ext",1.88,.1,8.7,9.12,Q-.02,0,s),t.floor(8.15,9.95,-4.2,4.2,Q+.04),t.stoneSteps("ext",9.1,5.35,4.3,-.04,Q,1.8,3,l),t.stairRun("ext",{x0:9.1,z0:-2.2,x1:9.1,z1:2.1,y0:Q+.04,y1:j+.04,width:1.18,steps:14,treadMat:u,stringerMat:g,railMat:g,railLeft:!0,railRight:!0,closedRisers:!1,guardLeft:!0,guardRight:!0}),t.box("ext",1.9,.16,2.3,9.12,j-.06,3.2,m),t.floor(8.15,9.95,2.06,4.25,j+.04),t.kouranRailing("ext",9.98,2.08,9.98,4.3,j,.96,g,.52),t.kouranRailing("ext",8.2,4.3,9.98,4.3,j,.96,g,.48);for(const Et of[-4.2,0,4.2])t.box("ext",.18,C-Q,.18,9.95,Q+(C-Q)*.5,Et,g);t.box("ext",2.25,.12,9,9.18,C+.08,0,b,{rz:-.18});const tt=j-Q,it=Q+tt*.5;t.box("int",8.05,.12,8.95,-4.18,Q-.04,0,s),t.box("int",8.45,.12,8.95,3.98,Q-.04,0,M),t.box("int",1.25,.03,.72,-3.5,Q+.04,4.08,z,{uvScale:0}),t.floor(-8.08,8.15,-4.38,4.5,Q+.04),t.box("ext",3.64,1.05,.24,-6.4,Q+.52,4.5,c,{solid:!0}),t.box("ext",3.64,tt-1.05,.24,-6.4,Q+2.08,4.5,d,{solid:!0}),t.box("ext",2.24,.72,.24,-3.5,j-.36,4.5,d,{solid:!0}),t.box("ext",2.26,.09,.28,-3.5,j-.72,4.5,g),t.box("ext",1.25,.76,.08,-5.65,Q+1.85,4.66,q,{uvScale:0}),t.box("ext",10.65,1.15,.24,2.9,Q+.58,4.5,c,{solid:!0}),t.box("ext",1.5,tt-1.15,.24,-1.68,Q+2.12,4.5,d,{solid:!0}),t.box("ext",3.4,.56,.24,.75,j-.28,4.5,d,{solid:!0}),t.box("ext",3.44,.08,.28,.75,Q+1.16,4.5,g),t.box("ext",3.44,.08,.28,.75,j-.56,4.5,g),t.box("ext",3.36,1.38,.06,.75,Q+1.86,4.5,k,{uvScale:0}),t.box("ext",5.8,tt-1.15,.24,5.32,Q+2.12,4.5,b,{solid:!0}),t.box("ext",16.45,1.05,.24,0,Q+.52,-4.5,c,{solid:!0}),t.box("ext",16.45,tt-1.05,.24,0,Q+2.08,-4.5,d,{solid:!0}),t.box("ext",.24,1.05,9.06,-8.2,Q+.52,0,c,{solid:!0}),t.box("ext",.24,tt-1.05,9.06,-8.2,Q+2.08,0,d,{solid:!0}),t.box("ext",.24,tt,6.52,8.2,it,-1.26,b,{solid:!0}),t.box("ext",.24,.72,1.74,8.2,j-.36,2.85,b,{solid:!0}),t.box("ext",.28,.09,1.78,8.2,j-.72,2.85,g),t.box("ext",.24,tt,.84,8.2,it,4.1,b,{solid:!0}),t.box("ext",.1,2.28,1.15,8.58,Q+1.14,1.62,E,{ry:.72,uvScale:0}),t.box("int",.2,tt,6.12,-.4,it,-1.46,M,{solid:!0}),t.box("int",.2,.72,1.8,-.4,j-.36,2.48,M,{solid:!0}),t.box("int",.24,.09,1.82,-.4,j-.72,2.48,g),t.box("int",.2,tt,1.18,-.4,it,3.92,M,{solid:!0}),t.box("int",2.45,.84,.8,-2.95,Q+.42,.35,y,{solid:!0,uvScale:0}),t.box("int",2.54,.06,.86,-2.95,Q+.87,.35,m,{solid:!0}),t.box("int",2.65,1.5,.05,-2.95,Q+1.72,-4.34,g),t.box("int",2.52,1.38,.06,-2.95,Q+1.72,-4.3,w,{uvScale:0}),t.box("int",1.48,1.68,.56,-5.15,Q+.84,-4.05,A,{solid:!0,uvScale:0}),t.box("int",.14,2.15,2.45,-.6,Q+1.25,-2.25,T,{uvScale:0}),t.box("int",.58,1.5,.76,-.82,Q+.75,.65,F,{solid:!0,uvScale:0}),t.box("int",8.2,tt-.1,.1,3.95,it,-4.34,I),t.box("int",3.95,.58,.28,3.5,Q+.29,-.85,S,{solid:!0}),t.box("int",3.95,.58,.28,3.5,Q+.29,-3.95,S,{solid:!0}),t.box("int",.28,.58,3.1,1.55,Q+.29,-2.4,S,{solid:!0}),t.box("int",.28,.58,3.1,5.45,Q+.29,-2.4,S,{solid:!0}),t.box("int",3.65,.42,2.85,3.5,Q+.21,-2.4,O,{solid:!0}),t.box("int",2.45,1.85,.54,1.85,Q+.92,4.02,$,{solid:!0,uvScale:0}),t.box("int",.16,tt,4.65,6.45,it,-2.1,P,{solid:!0,uvScale:0}),t.stairRun("int",{x0:-7.05,z0:-2.1,x1:-7.05,z1:2.25,y0:Q+.04,y1:j+.04,width:1.2,steps:14,treadMat:g,stringerMat:g,railMat:m,railLeft:!0,railRight:!1,closedRisers:!1,guardLeft:!0,guardRight:!1});const ft=C-j,st=j+ft*.5;t.box("int",14.54,.16,8.6,.94,j-.06,0,f),t.box("int",1.92,.16,2.15,-7.24,j-.06,-3.24,f),t.box("int",1.92,.16,2,-7.24,j-.06,3.32,f),t.box("int",2.55,.04,5.45,-4.92,j+.03,-1.45,V),t.box("int",3.4,.04,5.45,2.58,j+.03,-1.45,G),t.box("int",7.5,.08,8.56,-4.44,C-.06,0,u),t.box("int",7.5,.08,8.56,4.44,C-.06,0,u),t.box("int",1.42,.08,2.12,0,C-.06,-3.24,u),t.box("int",1.42,.08,2.52,0,C-.06,3.04,u),t.collider(-6.32,8.2,j-.16,j+.02,-4.3,4.3),t.collider(-8.2,-6.32,j-.16,j+.02,-4.3,-2.18),t.collider(-8.2,-6.32,j-.16,j+.02,2.34,4.3),t.floor(-6.28,8.25,-4.18,4.38,j+.04),t.floor(-8.08,-6.24,-4.18,-2.12,j+.04),t.floor(-8.08,-6.24,2.28,4.24,j+.04),t.kouranRailing("int",-6.32,-2.18,-6.32,2.34,j,.94,g,.56),t.kouranRailing("int",-8.08,-2.18,-6.32,-2.18,j,.94,g,.48),t.box("ext",16.3,.16,1.14,0,j-.04,4.84,m),t.kouranRailing("ext",-8.1,5.36,8.1,5.36,j,.94,g,.58),t.kouranRailing("ext",-8.1,4.3,-8.1,5.36,j,.94,g,.5),t.kouranRailing("ext",8.1,4.3,8.1,5.36,j,.94,g,.5),t.floor(-8,8,4.22,5.3,j+.04),t.box("ext",3.22,ft,.22,-6.6,st,4.3,h,{solid:!0}),t.box("ext",1.64,.68,.22,-4.2,C-.34,4.3,h,{solid:!0}),t.box("ext",1.66,.09,.26,-4.2,C-.68,4.3,g),t.box("ext",6.84,.9,.22,0,j+.45,4.3,h,{solid:!0}),t.box("ext",1.1,ft-.9,.22,-2.86,j+1.95,4.3,h,{solid:!0}),t.box("ext",4.65,.52,.22,0,C-.26,4.3,h,{solid:!0}),t.box("ext",4.68,.08,.26,0,j+.92,4.3,g),t.box("ext",4.68,.08,.26,0,C-.52,4.3,g),t.box("ext",4.6,1.54,.06,0,j+1.7,4.3,k,{uvScale:0}),t.box("ext",1.1,ft-.9,.22,2.86,j+1.95,4.3,h,{solid:!0}),t.box("ext",1.64,.68,.22,4.2,C-.34,4.3,h,{solid:!0}),t.box("ext",1.66,.09,.26,4.2,C-.68,4.3,g),t.box("ext",3.22,ft,.22,6.6,st,4.3,h,{solid:!0}),t.box("ext",16.45,ft,.22,0,st,-4.3,h,{solid:!0}),t.box("ext",.22,ft,8.66,-8.2,st,0,h,{solid:!0}),t.box("ext",.22,ft,6.58,8.2,st,-1.04,h,{solid:!0}),t.box("ext",.22,.68,1.68,8.2,C-.34,3.08,h,{solid:!0}),t.box("ext",.26,.09,1.7,8.2,C-.68,3.08,g),t.box("ext",.22,ft,.44,8.2,st,4.1,h,{solid:!0});for(const Et of[-6.25,-3.55,-.78,.78,4.4])t.box("int",.16,ft,5.8,Et,st,-1.4,p,{solid:!0});const yt=(Et,Ht,nt)=>{const vt=nt-.68,mt=nt+.68;vt-Et>.12&&t.box("int",vt-Et,ft,.14,(Et+vt)*.5,st,1.5,p,{solid:!0}),t.box("int",1.4,.72,.14,nt,C-.36,1.5,p,{solid:!0}),t.box("int",1.42,.08,.18,nt,C-.72,1.5,g),Ht-mt>.12&&t.box("int",Ht-mt,ft,.14,(mt+Ht)*.5,st,1.5,p,{solid:!0})};yt(-6.25,-3.55,-4.9),yt(-3.55,-.78,-2.15),yt(.78,4.4,2.55),yt(4.4,8.2,6.25),t.box("int",1.45,.18,2.05,-4.95,j+.12,-2.75,Z,{solid:!0,uvScale:0}),t.box("int",.5,1.12,1.25,-5.85,j+.56,-.25,B,{solid:!0,uvScale:0}),t.box("int",.54,1.85,1.75,-3.12,j+.92,-2.45,$,{solid:!0,uvScale:0}),t.box("int",1.25,.76,.96,-1.8,j+.4,-3.25,N,{solid:!0}),t.box("int",1.15,.88,.06,-2.15,j+1.65,-4.14,X,{uvScale:0}),t.box("int",.52,1.98,1.85,1.18,j+.99,-2.45,H,{solid:!0,uvScale:0}),t.box("int",1.38,.74,.72,2.85,j+.37,-3.72,g,{solid:!0}),t.box("int",1.44,.05,.78,2.85,j+.76,-3.72,m,{solid:!0}),t.box("int",.1,ft-.1,5.4,8.04,st,-1.4,x),t.box("int",.56,1.85,1.28,7.55,j+.92,-2.55,J,{solid:!0,rz:.08,uvScale:0}),t.box("int",.6,.07,.6,6.05,j+.07,-1.85,ht,{uvScale:0}),t.stairRun("int",{x0:0,z0:1.7,x1:0,z1:-2.1,y0:j+.04,y1:C+.04,width:1.14,steps:14,treadMat:g,stringerMat:g,railMat:m,railLeft:!0,railRight:!0,closedRisers:!1,guardLeft:!0,guardRight:!0});const gt=R-C,Mt=C+gt*.5;t.box("int",4.94,.16,7,-3.14,C-.06,0,_),t.box("int",4.94,.16,7,3.14,C-.06,0,_),t.box("int",1.4,.16,1.36,0,C-.06,-2.84,_),t.box("int",1.4,.16,1.76,0,C-.06,2.64,_),t.collider(-5.6,-.68,C-.16,C+.02,-3.5,3.5),t.collider(.68,5.6,C-.16,C+.02,-3.5,3.5),t.collider(-.68,.68,C-.16,C+.02,-3.5,-2.18),t.collider(-.68,.68,C-.16,C+.02,1.78,3.5),t.floor(-5.48,-.64,-3.38,3.38,C+.04),t.floor(.64,5.48,-3.38,3.38,C+.04),t.floor(-.7,.7,-3.38,-2.14,C+.04),t.floor(-.7,.7,1.74,3.38,C+.04),t.kouranRailing("int",-.68,-2.18,-.68,1.78,C,.94,g,.56),t.kouranRailing("int",.68,-2.18,.68,1.78,C,.94,g,.56),t.kouranRailing("int",-.68,1.78,.68,1.78,C,.94,g,.45);for(const Et of[-3.5,3.5]){t.box("ext",11.25,.86,.22,0,C+.43,Et,h,{solid:!0}),t.box("ext",2.25,gt-.86,.22,-4.5,C+1.88,Et,h,{solid:!0}),t.box("ext",2.25,gt-.86,.22,4.5,C+1.88,Et,h,{solid:!0}),t.box("ext",6.75,.48,.22,0,R-.24,Et,h,{solid:!0}),t.box("ext",6.78,.08,.26,0,C+.88,Et,g),t.box("ext",6.78,.09,.26,0,R-.48,Et,g);for(const Ht of[-1.68,0,1.68])t.box("ext",.08,1.54,.14,Ht,C+1.64,Et,g);t.box("ext",6.68,1.52,.06,0,C+1.64,Et,U,{uvScale:0})}t.box("ext",.22,gt,7.04,-5.6,Mt,0,h,{solid:!0}),t.box("ext",.22,gt,7.04,5.6,Mt,0,h,{solid:!0});for(const Et of[-3.55,-2.05])t.box("int",.82,.06,2.85,Et,C+.74,.35,m,{solid:!0}),t.box("int",.68,.72,.08,Et,C+.36,-.88,g,{solid:!0}),t.box("int",.68,.72,.08,Et,C+.36,1.58,g,{solid:!0});t.box("int",2.05,.92,.64,-3.55,C+.46,-3.02,K,{solid:!0,uvScale:0}),t.box("int",1.55,1.12,.06,5.42,C+1.72,-1.25,L,{ry:-Math.PI*.5,uvScale:0}),t.box("int",1.35,1.02,.06,5.42,C+1.72,1.25,Y,{ry:-Math.PI*.5,uvScale:0}),t.box("int",1.35,1.35,.52,3.25,C+.68,-3.02,lt,{solid:!0,uvScale:0}),t.kawaraSlope("ext",{bottomWidth:17.4,run:1.32,pitch:.34,ridgeX:0,ridgeY:j+.08,ridgeZ:4.46,downslopeYaw:0,tileMat:ut,ribMat:et,rafterMat:g,ribSpacing:.4});const zt=.4;t.kawaraSlope("ext",{topWidth:11.4,bottomWidth:17.8,run:2.35,pitch:zt,ridgeX:0,ridgeY:C+.5,ridgeZ:3.48,downslopeYaw:0,tileMat:ut,ribMat:et,rafterMat:g,ribSpacing:.4}),t.kawaraSlope("ext",{topWidth:11.4,bottomWidth:17.8,run:1.85,pitch:zt,ridgeX:0,ridgeY:C+.4,ridgeZ:-3.48,downslopeYaw:Math.PI,tileMat:ut,ribMat:et,rafterMat:g,ribSpacing:.4}),t.kawaraSlope("ext",{topWidth:7.2,bottomWidth:10.6,run:3.35,pitch:zt,ridgeX:5.58,ridgeY:C+.62,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:ut,ribMat:et,rafterMat:g,ribSpacing:.4}),t.kawaraSlope("ext",{topWidth:7.2,bottomWidth:10.6,run:3.35,pitch:zt,ridgeX:-5.58,ridgeY:C+.62,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:ut,ribMat:et,rafterMat:g,ribSpacing:.4});const _t=.46,Tt=4.65,Dt=R+Tt*Math.tan(_t)-.36;t.kawaraSlope("ext",{bottomWidth:13,run:Tt,pitch:_t,ridgeX:0,ridgeY:Dt,ridgeZ:0,downslopeYaw:0,tileMat:ut,ribMat:et,rafterMat:g,ribSpacing:.36}),t.kawaraSlope("ext",{bottomWidth:13,run:Tt,pitch:_t,ridgeX:0,ridgeY:Dt,ridgeZ:0,downslopeYaw:Math.PI,tileMat:ut,ribMat:et,rafterMat:g,ribSpacing:.36});const Ft=Dt-R-.06;t.gablePrism("ext",7.04,Ft,.22,-5.6,R,0,h,{ry:Math.PI*.5}),t.gablePrism("ext",7.04,Ft,.22,5.6,R,0,h,{ry:Math.PI*.5}),t.kawaraRidge("ext",-6.4,Dt+.04,0,6.4,Dt+.04,0,rt,ct,{scale:1.05,courses:2,oniStart:!0,oniEnd:!0});const wt=Dt-.08,Nt=wt+.86;return t.box("ext",4.8,.84,1.45,0,wt+.42,0,D),t.kawaraSlope("ext",{bottomWidth:5.7,run:1.2,pitch:.38,ridgeX:0,ridgeY:Nt+.42,ridgeZ:0,downslopeYaw:0,tileMat:v,ribMat:et,rafterMat:g,ribSpacing:.38}),t.kawaraSlope("ext",{bottomWidth:5.7,run:1.2,pitch:.38,ridgeX:0,ridgeY:Nt+.42,ridgeZ:0,downslopeYaw:Math.PI,tileMat:v,ribMat:et,rafterMat:g,ribSpacing:.38}),t.kawaraRidge("ext",-2.75,Nt+.46,0,2.75,Nt+.46,0,rt,ct,{scale:.72,courses:1,oniStart:!0,oniEnd:!0}),t.build({id:"H24",name:"旧黒磯炭鉱 詰所兼独身寮（16.4m三階寄宿舎）",subtitle:"現場詰所・青タイル共同浴場・2F独身4個室＆東屋外非常階段・3F組合食堂＆越屋根",category:"house",builtYear:1895,abandonedYear:1985,stories:3,floorElevations:[Q,j,C],entryLocal:[-3.5,0,9],entryLookLocalYaw:0})}const M2=1750*1750,_2=15625,w0=[{id:"H01",build:Jp},{id:"H02",build:Qp},{id:"H03",build:t2},{id:"H04",build:e2},{id:"H05",build:n2},{id:"H07",build:i2},{id:"H08",build:r2},{id:"H09",build:o2},{id:"H10",build:s2},{id:"H11",build:a2},{id:"H12",build:l2},{id:"H13",build:c2},{id:"H14",build:u2},{id:"H15",build:d2},{id:"H16",build:h2},{id:"H19",build:f2},{id:"H20",build:p2},{id:"H21",build:m2},{id:"H22",build:x2},{id:"H23",build:g2},{id:"H24",build:b2}];function S2(i){const e=new Map;for(let l=0;l<Je.length;l++)e.set(Je[l].id,Je[l]);const t=new fe;t.name="kuroiso_houses_phase5";const n=[],r=new Map;for(let l=0;l<w0.length;l++){const c=w0[l],u=e.get(c.id);if(!u)throw new Error(`Missing PlannedSite for built house ${c.id}`);const d=c.build(u,i);n.push(d),r.set(d.id,d),t.add(d.group)}let o=n.length,s=n.length;return{group:t,structures:n,getById:l=>r.get(l),update:l=>{let c=0,u=0;const d=l.x,h=l.z;for(let p=0;p<n.length;p++){const x=n[p],g=x.position.x-d,m=x.position.z-h,f=g*g+m*m,_=f<=M2;if(x.group.visible!==_&&(x.group.visible=_),_&&(c++,x.interiorGroup)){const v=f<=_2;x.interiorGroup.visible!==v&&(x.interiorGroup.visible=v),v&&u++}}o=c,s=u},getStats:()=>({totalHouses:n.length,visibleHouses:o,visibleInteriors:s})}}const ti=1.68,y0=1.06,v2=5.8,w2=14.5,y2=3.1,E0=8.4,E2=22;class T2{position=new ot;yaw=Kt.yaw;pitch=-.05;grounded=!0;sprinting=!1;crouching=!1;inIntro=!0;insideStructure=null;camera;domElement;collision;velocityY=0;eyeOffset=ti;bobPhase=0;bobAmount=0;introProgress=0;introRising=!1;inputLocked=!1;keys=new Set;pointerLocked=!1;mouseDragging=!1;lastMouseX=0;lastMouseY=0;touchMoveX=0;touchMoveY=0;touchSprint=!1;touchJumpQueued=!1;onKeyDownBound;onKeyUpBound;onMouseMoveBound;onMouseDownBound;onMouseUpBound;onPointerLockChangeBound;constructor(e,t,n,r=!1){this.camera=e,this.domElement=t,this.collision=n;const o=Math.max(.35,ce(Kt.x,Kt.z));this.position.set(Kt.x,o,Kt.z),this.yaw=Kt.yaw,this.pitch=.04,r?(this.inIntro=!1,this.introProgress=1,this.eyeOffset=ti):(this.inIntro=!0,this.introProgress=0,this.eyeOffset=.34),this.onKeyDownBound=s=>{s.code==="Space"&&this.grounded&&!this.inIntro&&!this.inputLocked&&(this.velocityY=E0,this.grounded=!1),s.code==="KeyC"&&(this.crouching=!this.crouching),this.keys.add(s.code)},this.onKeyUpBound=s=>{this.keys.delete(s.code)},this.onMouseMoveBound=s=>{if(!(this.inIntro||this.inputLocked)){if(this.pointerLocked)this.applyLookDelta(s.movementX,s.movementY,.0021);else if(this.mouseDragging){const a=s.clientX-this.lastMouseX,l=s.clientY-this.lastMouseY;this.lastMouseX=s.clientX,this.lastMouseY=s.clientY,this.applyLookDelta(a,l,.0032)}}},this.onMouseDownBound=s=>{if(!(this.inIntro||this.inputLocked)&&s.button===0&&(this.mouseDragging=!0,this.lastMouseX=s.clientX,this.lastMouseY=s.clientY,!this.pointerLocked&&document.pointerLockElement!==this.domElement))try{this.domElement.requestPointerLock?.()}catch{}},this.onMouseUpBound=()=>{this.mouseDragging=!1},this.onPointerLockChangeBound=()=>{this.pointerLocked=document.pointerLockElement===this.domElement},window.addEventListener("keydown",this.onKeyDownBound),window.addEventListener("keyup",this.onKeyUpBound),window.addEventListener("mousemove",this.onMouseMoveBound),this.domElement.addEventListener("mousedown",this.onMouseDownBound),window.addEventListener("mouseup",this.onMouseUpBound),document.addEventListener("pointerlockchange",this.onPointerLockChangeBound),this.syncCamera(0)}setModalOpen(e){this.inputLocked=e,e&&document.pointerLockElement===this.domElement&&document.exitPointerLock?.(),e&&(this.keys.clear(),this.touchMoveX=0,this.touchMoveY=0,this.touchSprint=!1)}beginWakeUp(){this.inIntro&&(this.introRising=!0)}skipIntroImmediately(){this.inIntro=!1,this.introRising=!1,this.introProgress=1,this.eyeOffset=ti,this.syncCamera(0)}setTouchMove(e,t,n){this.touchMoveX=e,this.touchMoveY=t,this.touchSprint=n}triggerTouchJump(){!this.inIntro&&!this.inputLocked&&(this.touchJumpQueued=!0)}toggleCrouch(){return this.crouching=!this.crouching,this.crouching}applyLookDelta(e,t,n=.0036){this.inIntro||this.inputLocked||(this.yaw-=e*n,this.pitch=Math.max(-1.42,Math.min(1.42,this.pitch-t*n)))}teleport(e,t,n,r=-.06,o){const s=o!==void 0?o:Math.max(.35,ce(e,t));this.position.set(e,s,t),this.velocityY=0,this.grounded=!0,this.inIntro=!1,this.introProgress=1,this.eyeOffset=this.crouching?y0:ti,n!==void 0&&(this.yaw=n),this.pitch=r,this.syncCamera(0)}update(e){const t=Math.min(e,.05);if(this.inIntro){if(this.introRising){this.introProgress=Math.min(1,this.introProgress+t/2.2);const T=this.introProgress*this.introProgress*(3-2*this.introProgress);this.eyeOffset=.34+(ti-.34)*T,this.yaw=Kt.yaw+(1-T)*2.15,this.pitch=-.02+Math.sin(T*Math.PI)*.14,this.introProgress>=1&&(this.inIntro=!1,this.eyeOffset=ti,this.yaw=Kt.yaw,this.pitch=.04)}else{const T=performance.now()*.001;this.eyeOffset=.34+Math.sin(T*1.4)*.015,this.yaw=Kt.yaw+2.15+Math.sin(T*.4)*.06,this.pitch=.08+Math.cos(T*.55)*.02}return this.syncCamera(this.inIntro&&!this.introRising?.16:0),this.getState()}let n=0,r=0;this.inputLocked||((this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(n+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(n-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(r+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(r-=1),n+=-this.touchMoveY,r+=this.touchMoveX);const o=Math.hypot(n,r);o>1&&(n/=o,r/=o),this.touchJumpQueued&&(this.touchJumpQueued=!1,this.grounded&&(this.velocityY=E0,this.grounded=!1));const s=!this.crouching&&o>.15&&(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.touchSprint);this.sprinting=s;const a=this.crouching?y2:s?w2:v2,l=Math.sin(this.yaw),c=Math.cos(this.yaw),u=-l,d=-c,h=c,p=-l,x=(u*n+h*r)*a*t,g=(d*n+p*r)*a*t,m=this.position.x+x,f=this.position.z+g,_=ce(m,f);let v=m,b=f;_<-.35&&(ce(m,this.position.z)>=-.35?b=this.position.z:ce(this.position.x,f)>=-.35?v=this.position.x:(v=this.position.x,b=this.position.z)),this.velocityY-=E2*t;const P=this.collision.resolveMove(this.position,new ot(v,this.position.y,b),this.velocityY,t,this.crouching?1.25:1.72);this.position.copy(P.position),this.grounded=P.grounded,this.insideStructure=P.insideStructure,this.grounded&&this.velocityY<0&&(this.velocityY=0);const E=this.crouching?y0:ti;this.eyeOffset+=(E-this.eyeOffset)*Math.min(1,t*12);const A=Math.hypot(x,g)/Math.max(t,.001);if(this.grounded&&A>.4){const T=s?11.5:7.6;this.bobPhase+=t*T;const S=s?.052:.032;this.bobAmount+=(S-this.bobAmount)*Math.min(1,t*10)}else this.bobAmount*=Math.max(0,1-t*10);return this.syncCamera(0),this.getState()}syncCamera(e){const t=Math.sin(this.bobPhase)*this.bobAmount,n=Math.cos(this.bobPhase*.5)*this.bobAmount*.45;this.camera.position.set(this.position.x+Math.cos(this.yaw)*n,this.position.y+this.eyeOffset+t,this.position.z-Math.sin(this.yaw)*n),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch,this.camera.rotation.z=e}getState(){return{position:this.position,yaw:this.yaw,pitch:this.pitch,grounded:this.grounded,sprinting:this.sprinting,crouching:this.crouching,inIntro:this.inIntro,insideStructure:this.insideStructure}}dispose(){window.removeEventListener("keydown",this.onKeyDownBound),window.removeEventListener("keyup",this.onKeyUpBound),window.removeEventListener("mousemove",this.onMouseMoveBound),this.domElement.removeEventListener("mousedown",this.onMouseDownBound),window.removeEventListener("mouseup",this.onMouseUpBound),document.removeEventListener("pointerlockchange",this.onPointerLockChangeBound)}}const R2=[{label:"漂着浜（目覚め地点）",elev:"2m",x:Kt.x,z:Kt.z,yaw:Kt.yaw,pitch:.04},{label:"見晴らし坂（廃村展望）",elev:"268m",x:gn.x,z:gn.z,yaw:.56,pitch:-.05},{label:"黒磯駐在所・交番予定地 (K01)",elev:"238m",x:lo.x-14,z:lo.z+10,yaw:-.45,pitch:-.02},{label:"よろず商店予定地 (S01)",elev:"252m",x:118,z:325,yaw:.32,pitch:-.02},{label:"購買部みなとや予定地 (S02)",elev:"258m",x:-55,z:-158,yaw:.4,pitch:-.03},{label:"見晴らし村営公園 (P01)",elev:"242m",x:Pn.x+8,z:Pn.z+6,yaw:.65,pitch:-.02},{label:"1890年炭鉱坑口予定地 (M01)",elev:"348m",x:Ze.x+8,z:Ze.z+24,yaw:.12,pitch:.05},{label:"子供たちの山奥秘密基地 (B01)",elev:"376m",x:cn.x-8,z:cn.z+8,yaw:-.68,pitch:.02},{label:"山頂獣道・東尾根中腹",elev:"629m",x:355,z:-1245,yaw:.96,pitch:.12},{label:"★ 黒磯岳 主峰山頂",elev:"865m",x:Me.x-4.5,z:Me.z-5.5,yaw:-2.46,pitch:-.14},{label:"秘境の旧港・建設案 (PORT01)",elev:"2.8m",x:un.x+2.5,z:un.z+2.5,yaw:.785,pitch:-.08}],A2=["北","北東","東","南東","南","南西","西","北西"];function C2(i){const e=(-i*180/Math.PI%360+360)%360,t=Math.round(e/45)%8;return`${A2[t]} ${Math.round(e)}°`}function P2(i,e,t){return Math.hypot(i-Me.x,t-Me.z)<85&&e>800?"黒磯岳 主峰山頂（標高865m）":Math.hypot(i-un.x,t-un.z)<110?"秘境の旧港（建設案・北西入江）":Math.hypot(i-cn.x,t-cn.z)<65?"子供たちの山奥の秘密基地 (B01)":Math.hypot(i-Ze.x,t-Ze.z)<95?"旧黒磯炭鉱 1890 坑口予定地 (M01)":Math.hypot(i-gn.x,t-gn.z)<65?"見晴らし坂（廃村展望カーブ）":Math.hypot(i-Pn.x,t-Pn.z)<42?"見晴らし村営公園 (P01)":t>1950&&e<35?"漂着浜（南端入江）":t>650&&t<=1950?"海岸林道・南山腹斜面":i>-240&&i<280&&t>=-480&&t<=650?"廃村・黒磯村（山腹斜面集落）":i<-300&&t<-1020?"秘境の旧港へのけもの道":t<-420&&i>60&&e>350?"黒磯岳 山頂への獣道":t<-420?"黒磯林道・北山岳地帯":"黒磯島 山岳原生林"}class L2{root;controller;callbacks;builtStructures;structureById=new Map;mapQuickPoints=[];settings;zoneEl;elevEl;compassEl;siteHintEl;telemetryEl;wakeupOverlay;settingsModal;mapModal;touchLayer;touchToggleBtn;mapCanvas;mapBaseImage=null;mapOverlayCanvas;mapOpen=!1;settingsOpen=!1;touchEnabled=!1;lastUiSync=0;MAP_W=220;MAP_H=550;constructor(e,t,n,r,o=!1,s=[]){this.root=e,this.controller=t,this.settings={...n},this.callbacks=r,this.builtStructures=s;for(let a=0;a<s.length;a++)this.structureById.set(s[a].id,s[a]);this.touchEnabled=window.matchMedia("(pointer: coarse)").matches||(navigator.maxTouchPoints??0)>0,this.mapQuickPoints.push(...R2);for(let a=0;a<s.length;a++){const l=s[a],c=l.stories?`${l.stories}F`:"2F";this.mapQuickPoints.push({label:`[${l.id}] ${l.name}`,elev:`${c} · ${Math.round(l.position.y)}m`,x:l.entryPoint.x,z:l.entryPoint.z,yaw:l.entryPoint.lookYaw??l.yaw,pitch:.04,isHouse:!0})}this.renderMarkup(o),this.bindEvents()}renderMarkup(e){const t=this.mapQuickPoints.map((a,l)=>({lm:a,idx:l})).filter(a=>!a.lm.isHouse).map(({lm:a,idx:l})=>`
        <button class="map-tp-btn" data-tp-idx="${l}">
          <span>${a.label}</span>
          <span class="map-tp-elev">${a.elev}</span>
        </button>`).join(""),n=this.mapQuickPoints.map((a,l)=>({lm:a,idx:l})).filter(a=>a.lm.isHouse).map(({lm:a,idx:l})=>`
        <button class="map-tp-btn" style="border-color: rgba(255, 211, 110, 0.35);" data-tp-idx="${l}">
          <span>${a.label}</span>
          <span class="map-tp-elev">${a.elev}</span>
        </button>`).join(""),r=this.builtStructures.length,o=Je.filter(a=>a.category==="house").length,s=Math.max(0,o-r);this.root.innerHTML=`
      <!-- Portrait orientation suggestion -->
      <div class="portrait-banner" id="portrait-banner">
        <div style="font-size: 28px;">📱↻</div>
        <h3 style="margin: 0; font-size: 16px;">スマホ横画面・全画面でのプレイを推奨</h3>
        <p style="margin: 0; font-size: 12px; color: var(--text-dim); max-width: 320px; line-height: 1.65;">
          端末を横向きにするか、下のボタンで横画面全画面表示へ切り替えてください。
        </p>
        <div style="display:flex; gap:10px; margin-top:6px;">
          <button class="btn-primary" id="btn-portrait-fs">横画面・全画面</button>
          <button class="btn-ghost" id="btn-portrait-dismiss">このまま続ける</button>
        </div>
      </div>

      <!-- Driftwood Cove Wake-Up Intro -->
      <div class="wakeup-overlay ${e?"hidden":""}" id="wakeup-overlay">
        <div class="wakeup-card">
          <div class="wakeup-eyebrow">KUROISO-JIMA 1985 — 2KM × 5KM ISOLATED MOUNTAIN ISLAND</div>
          <h1 class="wakeup-title">黒磯島 — 1985年廃村探索（伝統瓦木造民家 ${r}軒公開）</h1>
          <p class="wakeup-story">
            冷たい砂と波音の中で目を覚ました。あたり一面は見渡す限りの外洋、救助は来ない。<br/>
            山の斜面（標高約254m）に建ち並ぶ<strong>明治築・2〜4階建て伝統瓦の木造民家${r}軒</strong>はすべて内部探索と階段昇降が可能。32種の高密度原生林を抜けた獣道の先には<strong>標高865mの黒磯岳山頂</strong>と<strong>秘境の旧港</strong>が広がっている。
          </p>
          <div class="wakeup-actions">
            <button class="btn-primary" id="btn-wake-start">立ち上がって探索を始める</button>
            <button class="btn-ghost" id="btn-wake-fs">横画面・全画面で開始</button>
          </div>
        </div>
      </div>

      <!-- Top HUD bar -->
      <div class="hud-top">
        <div class="hud-location">
          <div class="hud-zone-name">
            <span class="hud-zone-dot"></span>
            <span id="hud-zone">漂着浜（南端入江）</span>
          </div>
          <div class="hud-meta-row">
            <span id="hud-elev">標高 2.1m</span>
            <span id="hud-compass">北 0°</span>
          </div>
          <div class="hud-site-hint" id="hud-site-hint"></div>
        </div>

        <div class="hud-right-stack">
          <div class="hud-toolbar">
            <button class="hud-btn" id="btn-open-map">地形図 (M)</button>
            <button class="hud-btn" id="btn-open-settings">画質 / FPS</button>
            <button class="hud-btn ${this.touchEnabled?"active":""}" id="btn-toggle-touch">タッチUI</button>
            <button class="hud-btn" id="btn-fullscreen">全画面</button>
          </div>
          <div class="hud-telemetry" id="hud-telemetry">
            <strong>-- FPS</strong> · -- ms · --×--<br/>
            LOD: -- chunks · 森/草: --
          </div>
        </div>
      </div>

      <div class="hud-reticle"></div>

      <div class="hud-controls-hint">
        WASD 移動 · Shift ダッシュ · Space 跳躍 · C しゃがむ · マウス 視点 · M 2km×5km地形図
      </div>

      <!-- Mobile Landscape Dual-Touch Layer -->
      <div class="touch-layer ${this.touchEnabled?"enabled":""}" id="touch-layer">
        <div class="touch-stick-zone" id="touch-stick-zone">
          <div class="touch-stick-base" id="touch-stick-base">
            <div class="touch-stick-knob" id="touch-stick-knob"></div>
          </div>
        </div>
        <div class="touch-look-zone" id="touch-look-zone"></div>
        <div class="touch-action-pad">
          <button class="touch-action-btn" id="touch-btn-jump">跳躍</button>
          <button class="touch-action-btn" id="touch-btn-crouch">しゃがむ</button>
        </div>
      </div>

      <!-- Graphics Settings Modal -->
      <div class="modal-backdrop" id="settings-modal">
        <div class="modal-panel settings-panel">
          <div class="modal-header">
            <h2 class="modal-title">グラフィック・フレームレート設定</h2>
            <button class="modal-close" id="btn-close-settings">閉じる</button>
          </div>
          <div class="settings-body">
            <div>
              <div class="setting-group-label">
                <span>内部レンダリング解像度</span>
                <span id="settings-res-readout">${this.settings.resolution}</span>
              </div>
              <div class="segmented" id="res-group">
                <button class="seg-btn ${this.settings.resolution==="HD"?"selected":""}" data-res="HD">
                  HD<span>1280×720</span>
                </button>
                <button class="seg-btn ${this.settings.resolution==="FHD"?"selected":""}" data-res="FHD">
                  FHD<span>1920×1080</span>
                </button>
                <button class="seg-btn ${this.settings.resolution==="1.5K"?"selected":""}" data-res="1.5K">
                  1.5K<span>2560×1440</span>
                </button>
              </div>
            </div>

            <div>
              <div class="setting-group-label">
                <span>フレームレート上限</span>
                <span id="settings-fps-readout">${this.settings.fpsLimit==="120"?"120 FPS":"無制限"}</span>
              </div>
              <div class="segmented two-col" id="fps-group">
                <button class="seg-btn ${this.settings.fpsLimit==="120"?"selected":""}" data-fps="120">
                  120 FPS<span>高リフレッシュ安定</span>
                </button>
                <button class="seg-btn ${this.settings.fpsLimit==="unlimited"?"selected":""}" data-fps="unlimited">
                  無制限 FPS<span>上限解放</span>
                </button>
              </div>
            </div>

            <div class="settings-note">
              <strong>2km×5km ストリーミング＋32樹種高密度森林＆家屋GPUバッチ稼働中</strong><br/>
              ・4段階マルチLOD地形チャンク（640区画を毎フレーム4.2ms予算で動的ロード＆破棄）<br/>
              ・4階層高密度森林（32種・4〜15枝の自然樹木を区画3ドローコールへ静的GPU統合＋距離影制御）<br/>
              ・建築済2〜4階建伝統瓦木造民家${r}軒（マテリアル別静的GPU統合＋距離カリング）<br/>
              ※ 残り${s}軒・商業施設2軒・1890年炭鉱内部・KHDR・Shadow Flameは次フェーズにて実装予定。
            </div>
          </div>
        </div>
      </div>

      <!-- Interactive 2km x 5km Topographic Map Modal -->
      <div class="modal-backdrop" id="map-modal">
        <div class="modal-panel map-panel">
          <div class="modal-header">
            <h2 class="modal-title">黒磯島 2km × 5km 地形図・建築済民家（クリックで現地移動）</h2>
            <button class="modal-close" id="btn-close-map">閉じる (M)</button>
          </div>
          <div class="map-layout">
            <div class="map-canvas-wrap">
              <canvas class="map-canvas" id="topo-map-canvas" width="${this.MAP_W}" height="${this.MAP_H}"></canvas>
            </div>
            <div class="map-sidebar">
              ${n?`<div class="map-sidebar-title">建築済 伝統瓦民家（${r}軒・入室可）</div><div class="map-tp-list" id="map-house-list">${n}</div>`:""}
              <div class="map-sidebar-title" style="margin-top:4px;">主要拠点・展望スポットへ移動</div>
              <div class="map-tp-list" id="map-tp-list">${t}</div>
              <div class="map-legend">
                <div class="legend-item"><span class="legend-swatch" style="background:#ffd36e;border:1px solid #2e1f12;"></span>建築済民家(${r})</div>
                <div class="legend-item"><span class="legend-swatch" style="background:#a87b58;"></span>民家予定地(${s})</div>
                <div class="legend-item"><span class="legend-swatch" style="background:#f2e7cc;"></span>村道/海岸林道</div>
                <div class="legend-item"><span class="legend-swatch" style="background:#f2a649;"></span>獣道/けもの道</div>
                <div class="legend-item"><span class="legend-swatch" style="background:#e85b48;"></span>商店(2)/交番(1)</div>
                <div class="legend-item"><span class="legend-swatch" style="background:#63c778;"></span>公園/秘密基地</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,this.zoneEl=this.root.querySelector("#hud-zone"),this.elevEl=this.root.querySelector("#hud-elev"),this.compassEl=this.root.querySelector("#hud-compass"),this.siteHintEl=this.root.querySelector("#hud-site-hint"),this.telemetryEl=this.root.querySelector("#hud-telemetry"),this.wakeupOverlay=this.root.querySelector("#wakeup-overlay"),this.settingsModal=this.root.querySelector("#settings-modal"),this.mapModal=this.root.querySelector("#map-modal"),this.touchLayer=this.root.querySelector("#touch-layer"),this.touchToggleBtn=this.root.querySelector("#btn-toggle-touch"),this.mapCanvas=this.root.querySelector("#topo-map-canvas"),this.mapOverlayCanvas=document.createElement("canvas"),this.mapOverlayCanvas.width=this.MAP_W,this.mapOverlayCanvas.height=this.MAP_H}async requestLandscapeFullscreen(){try{document.fullscreenElement||await document.documentElement.requestFullscreen?.(),await screen.orientation?.lock?.("landscape")}catch{}}dismissWakeup(){this.wakeupOverlay.classList.add("fading"),this.callbacks.onWakeUp(),window.setTimeout(()=>{this.wakeupOverlay.classList.add("hidden")},950)}setMapOpen(e){this.mapOpen=e,e?(this.settingsOpen=!1,this.settingsModal.classList.remove("open"),this.mapModal.classList.add("open"),this.ensureTopoMapRendered(),this.drawDynamicMapOverlay()):this.mapModal.classList.remove("open"),this.controller.setModalOpen(this.mapOpen||this.settingsOpen)}setSettingsOpen(e){this.settingsOpen=e,e?(this.mapOpen=!1,this.mapModal.classList.remove("open"),this.settingsModal.classList.add("open")):this.settingsModal.classList.remove("open"),this.controller.setModalOpen(this.mapOpen||this.settingsOpen)}bindEvents(){this.root.querySelector("#btn-portrait-fs")?.addEventListener("click",()=>{this.requestLandscapeFullscreen(),this.root.querySelector("#portrait-banner")?.classList.add("dismissed")}),this.root.querySelector("#btn-portrait-dismiss")?.addEventListener("click",()=>{this.root.querySelector("#portrait-banner")?.classList.add("dismissed")}),this.root.querySelector("#btn-wake-start")?.addEventListener("click",()=>{this.dismissWakeup()}),this.root.querySelector("#btn-wake-fs")?.addEventListener("click",()=>{this.requestLandscapeFullscreen(),this.dismissWakeup()}),this.root.querySelector("#btn-open-map")?.addEventListener("click",()=>{this.setMapOpen(!this.mapOpen)}),this.root.querySelector("#btn-close-map")?.addEventListener("click",()=>{this.setMapOpen(!1)}),this.root.querySelector("#btn-open-settings")?.addEventListener("click",()=>{this.setSettingsOpen(!this.settingsOpen)}),this.root.querySelector("#btn-close-settings")?.addEventListener("click",()=>{this.setSettingsOpen(!1)}),this.root.querySelector("#btn-fullscreen")?.addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen?.():this.requestLandscapeFullscreen()}),this.touchToggleBtn.addEventListener("click",()=>{this.touchEnabled=!this.touchEnabled,this.touchLayer.classList.toggle("enabled",this.touchEnabled),this.touchToggleBtn.classList.toggle("active",this.touchEnabled)}),window.addEventListener("keydown",e=>{e.code==="KeyM"&&!this.controller.inIntro?this.setMapOpen(!this.mapOpen):e.code==="Escape"&&(this.mapOpen?this.setMapOpen(!1):this.settingsOpen&&this.setSettingsOpen(!1))}),this.root.querySelectorAll("#res-group .seg-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.res;this.settings.resolution=t,this.root.querySelectorAll("#res-group .seg-btn").forEach(r=>r.classList.remove("selected")),e.classList.add("selected");const n=this.root.querySelector("#settings-res-readout");n&&(n.textContent=t),this.callbacks.onGraphicsChange({...this.settings})})}),this.root.querySelectorAll("#fps-group .seg-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.fps;this.settings.fpsLimit=t,this.root.querySelectorAll("#fps-group .seg-btn").forEach(r=>r.classList.remove("selected")),e.classList.add("selected");const n=this.root.querySelector("#settings-fps-readout");n&&(n.textContent=t==="120"?"120 FPS":"無制限"),this.callbacks.onGraphicsChange({...this.settings})})}),this.root.querySelectorAll(".map-tp-btn").forEach(e=>{e.addEventListener("click",()=>{const t=Number(e.dataset.tpIdx),n=this.mapQuickPoints[t];n&&(this.wakeupOverlay.classList.add("hidden"),this.callbacks.onTeleport(n.x,n.z,n.yaw,n.pitch??-.05),this.setMapOpen(!1))})}),this.mapCanvas.addEventListener("click",e=>{const t=this.mapCanvas.getBoundingClientRect(),n=(e.clientX-t.left)/t.width,r=(e.clientY-t.top)/t.height,o=-ae+n*ae*2,s=-le+r*le*2;ce(o,s)>.3&&(this.wakeupOverlay.classList.add("hidden"),this.callbacks.onTeleport(o,s),this.setMapOpen(!1))}),this.bindTouchControls()}bindTouchControls(){const e=this.root.querySelector("#touch-stick-zone"),t=this.root.querySelector("#touch-stick-base"),n=this.root.querySelector("#touch-stick-knob"),r=this.root.querySelector("#touch-look-zone"),o=this.root.querySelector("#touch-btn-jump"),s=this.root.querySelector("#touch-btn-crouch");let a=null;const l=42,c=(g,m)=>{const f=t.getBoundingClientRect(),_=f.left+f.width*.5,v=f.top+f.height*.5;let b=g-_,P=m-v;const E=Math.hypot(b,P);E>l&&(b=b/E*l,P=P/E*l),n.style.transform=`translate3d(${b.toFixed(1)}px, ${P.toFixed(1)}px, 0)`;const A=b/l,T=P/l,S=Math.hypot(A,T)>.82&&T<-.25;t.classList.toggle("sprinting",S),this.controller.setTouchMove(A,T,S)},u=()=>{a=null,n.style.transform="translate3d(0, 0, 0)",t.classList.remove("sprinting"),this.controller.setTouchMove(0,0,!1)};e.addEventListener("pointerdown",g=>{a===null&&(a=g.pointerId,e.setPointerCapture(g.pointerId),c(g.clientX,g.clientY))}),e.addEventListener("pointermove",g=>{g.pointerId===a&&c(g.clientX,g.clientY)}),e.addEventListener("pointerup",g=>{g.pointerId===a&&u()}),e.addEventListener("pointercancel",g=>{g.pointerId===a&&u()});let d=null,h=0,p=0;r.addEventListener("pointerdown",g=>{d===null&&(d=g.pointerId,h=g.clientX,p=g.clientY,r.setPointerCapture(g.pointerId))}),r.addEventListener("pointermove",g=>{if(g.pointerId!==d)return;const m=g.clientX-h,f=g.clientY-p;h=g.clientX,p=g.clientY,this.controller.applyLookDelta(m,f,.0052)});const x=g=>{g.pointerId===d&&(d=null)};r.addEventListener("pointerup",x),r.addEventListener("pointercancel",x),o.addEventListener("pointerdown",g=>{g.preventDefault(),this.controller.triggerTouchJump()}),s.addEventListener("pointerdown",g=>{g.preventDefault();const m=this.controller.toggleCrouch();s.classList.toggle("active",m)})}worldToMap(e,t){const n=(e+ae)/(ae*2)*this.MAP_W,r=(t+le)/(le*2)*this.MAP_H;return[n,r]}ensureTopoMapRendered(){if(this.mapBaseImage)return;const e=this.mapOverlayCanvas.getContext("2d");if(!e)return;const t=this.MAP_W,n=this.MAP_H,r=e.createImageData(t,n),o=r.data,s=new Float32Array(t*n);for(let d=0;d<n;d++){const h=-le+d/(n-1)*le*2;for(let p=0;p<t;p++){const x=-ae+p/(t-1)*ae*2,g=ce(x,h);s[d*t+p]=g}}for(let d=0;d<n;d++)for(let h=0;h<t;h++){const p=d*t+h,x=s[p],g=h+1<t?s[p+1]:x,m=d+1<n?s[p+t]:x,f=Math.max(.72,Math.min(1.24,1+(x-g)*.045+(x-m)*.035));let _=12,v=42,b=68;if(x<=0){const E=Math.max(0,1+x/24);_=10+E*22,v=36+E*58,b=60+E*52}else if(x<6)_=176,v=162,b=128;else if(x<190){const E=(x-6)/184;_=(50+E*24)*f,v=(98+E*26)*f,b=(56+E*14)*f}else if(x<320){const E=(x-190)/130;_=(78+E*28)*f,v=(126+E*14)*f,b=(70+E*6)*f}else if(x<620){const E=(x-320)/300;_=(94+E*34)*f,v=(118-E*10)*f,b=(68+E*14)*f}else{const E=Math.min(1,(x-620)/245);_=(132+E*62)*f,v=(126+E*66)*f,b=(104+E*76)*f}if(x>5&&h+1<t&&d+1<n){const E=Math.floor(x/50),A=Math.floor(g/50),T=Math.floor(m/50);if(E!==A||E!==T){const M=E%2===0?.42:.22;_*=1-M,v*=1-M,b*=1-M}}const P=p*4;o[P]=Math.max(0,Math.min(255,_)),o[P+1]=Math.max(0,Math.min(255,v)),o[P+2]=Math.max(0,Math.min(255,b)),o[P+3]=255}e.putImageData(r,0,0);for(const d of Ni){e.beginPath();for(let h=0;h<d.points.length;h++){const[p,x]=this.worldToMap(d.points[h][0],d.points[h][1]);h===0?e.moveTo(p,x):e.lineTo(p,x)}d.kind==="road"?(e.strokeStyle="rgba(246, 236, 206, 0.92)",e.lineWidth=2,e.setLineDash([])):d.kind==="forestry"?(e.strokeStyle="rgba(224, 198, 136, 0.85)",e.lineWidth=1.6,e.setLineDash([])):(e.strokeStyle="rgba(246, 170, 74, 0.95)",e.lineWidth=1.45,e.setLineDash([4,3])),e.stroke()}e.setLineDash([]);const a={house:"#a87b58",shop:"#f06449",koban:"#4d96ff",park:"#63c778",secret_base:"#b4e362",mine:"#4bc4df",port:"#56e0f5"};for(const d of Je){const[h,p]=this.worldToMap(d.x,d.z);if(d.category==="house"&&po.has(d.id))e.fillStyle="#ffd36e",e.fillRect(h-4.8*.5,p-4.8*.5,4.8,4.8),e.strokeStyle="#2e1f12",e.lineWidth=1,e.strokeRect(h-4.8*.5,p-4.8*.5,4.8,4.8);else{e.fillStyle=a[d.category]??"#ffffff";const x=d.category==="house"?3:5.2;e.fillRect(h-x*.5,p-x*.5,x,x)}}const[l,c]=this.worldToMap(Me.x,Me.z);e.fillStyle="#ffe675",e.beginPath(),e.arc(l,c,4.5,0,Math.PI*2),e.fill(),e.strokeStyle="#1b1d20",e.lineWidth=1.2,e.stroke(),e.font="bold 9.5px sans-serif",e.fillStyle="#fff5d0",e.strokeStyle="rgba(0,0,0,0.75)",e.lineWidth=2.4;const u=(d,h,p,x=6,g=3)=>{const[m,f]=this.worldToMap(h,p);e.strokeText(d,m+x,f+g),e.fillText(d,m+x,f+g)};u("▲黒磯岳 865m",Me.x,Me.z,-42,-10),u("秘境旧港",un.x,un.z,6,4),u("1890炭鉱",Ze.x,Ze.z,7,3),u("秘密基地",cn.x,cn.z,-48,4),u("廃村(254m)",120,120,6,4),u("漂着浜",Kt.x,Kt.z,-20,16),this.mapBaseImage=e.getImageData(0,0,t,n)}drawDynamicMapOverlay(){const e=this.mapCanvas.getContext("2d");if(!e||!this.mapBaseImage)return;e.putImageData(this.mapBaseImage,0,0);const t=this.controller.position,[n,r]=this.worldToMap(t.x,t.z);e.save(),e.translate(n,r),e.rotate(-this.controller.yaw),e.fillStyle="#ffffff",e.strokeStyle="#0d1a24",e.lineWidth=1.6,e.beginPath(),e.moveTo(0,-7),e.lineTo(5,6),e.lineTo(0,3),e.lineTo(-5,6),e.closePath(),e.fill(),e.stroke(),e.restore()}update(e,t){if(t-this.lastUiSync<140)return;this.lastUiSync=t;const n=this.controller.position,r=this.controller.insideStructure;if(r){const s=n.y-r.position.y,a=r.floorElevations;let l=1;if(a&&a.length>0)for(let d=0;d<a.length;d++)s>=a[d]-.55&&(l=d+1);const c=Math.max(1,r.builtYear-1867),u=r.name.split("（")[0];this.zoneEl.textContent=`[${r.id}] ${u} — ${l}F / 全${r.stories??a?.length??2}階`,this.siteHintEl.textContent=`${r.name} ｜ 明治${c}年（${r.builtYear}年）築・${r.abandonedYear}年廃村`,this.siteHintEl.classList.add("visible")}else{this.zoneEl.textContent=P2(n.x,n.y,n.z);let s=28,a=null;for(let l=0;l<Je.length;l++){const c=Je[l],u=Math.hypot(n.x-c.x,n.z-c.z);u<s&&(s=u,a=c)}if(a){const l=this.structureById.get(a.id);if(l){const c=l.stories??l.floorElevations?.length??2;this.siteHintEl.textContent=`建築済 [${l.id}] ${l.name}（${c}階建・${l.builtYear}年築）— 入室・階段昇降可`}else this.siteHintEl.textContent=`造成予定地 [${a.id}] ${a.name}（${a.note}）`;this.siteHintEl.classList.add("visible")}else this.siteHintEl.classList.remove("visible")}this.elevEl.textContent=`標高 ${n.y.toFixed(1)}m`,this.compassEl.textContent=C2(this.controller.yaw);const o=(e.terrain.approxTriangles/1e3).toFixed(0);this.telemetryEl.innerHTML=`<strong>${e.fps.toFixed(0)} FPS</strong> · ${e.frameMs.toFixed(1)}ms · ${e.renderWidth}×${e.renderHeight}<br/>地形 ${e.terrain.activeChunks}ch (${o}k△) · 木${e.foliage.visibleTrees} / 民家${e.houses.visibleHouses}(内装${e.houses.visibleInteriors})`,this.mapOpen&&this.drawDynamicMapOverlay()}}const Os=12112100,I2=175e-6,ur=new ot(.54,.68,.49).normalize(),D2={HD:{maxW:1280,maxH:720},FHD:{maxW:1920,maxH:1080},"1.5K":{maxW:2560,maxH:1440}};function k2(i){const e=new Qs(16e3,32,20),t=new xn({side:ze,depthWrite:!1,fog:!1,uniforms:{uSunDir:{value:i.clone().normalize()},uZenith:{value:new Vt(4423362)},uMidSky:{value:new Vt(8369378)},uHorizon:{value:new Vt(Os)}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uSunDir;
      uniform vec3 uZenith;
      uniform vec3 uMidSky;
      uniform vec3 uHorizon;
      varying vec3 vDir;

      float hash2(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(hash2(i), hash2(i + vec2(1.0, 0.0)), u.x),
          mix(hash2(i + vec2(0.0, 1.0)), hash2(i + vec2(1.0, 1.0)), u.x),
          u.y
        );
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        for (int i = 0; i < 4; i++) {
          v += a * noise(p);
          p = p * 2.04 + vec2(13.7, 7.1);
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec3 d = normalize(vDir);
        float elev = clamp(d.y, 0.0, 1.0);

        // Smooth atmospheric gradient from horizon haze -> clear mid sky -> deep azure zenith
        vec3 sky = mix(uHorizon, uMidSky, smoothstep(0.0, 0.28, elev));
        sky = mix(sky, uZenith, smoothstep(0.24, 0.85, elev));

        // Soft wispy fair-weather mountain clouds high above the 865m peaks
        if (d.y > 0.05) {
          vec2 cloudUV = d.xz / (d.y + 0.22) * 1.45;
          float c = fbm(cloudUV + vec2(1.8, -0.9));
          float cloudMask = smoothstep(0.54, 0.80, c) * smoothstep(0.05, 0.22, d.y) * 0.42;
          sky = mix(sky, vec3(0.95, 0.97, 0.99), cloudMask);
        }

        // Solar glow & crisp sun disc
        float sunDot = max(dot(d, uSunDir), 0.0);
        sky += vec3(1.0, 0.95, 0.84) * pow(sunDot, 12.0) * 0.24;
        sky += vec3(1.0, 0.98, 0.92) * smoothstep(0.9985, 0.9996, sunDot) * 1.25;

        // Below horizon blends into ocean mist color
        if (d.y < 0.0) {
          sky = mix(uHorizon, vec3(0.58, 0.72, 0.82), smoothstep(0.0, -0.18, d.y));
        }

        gl_FragColor = vec4(sky, 1.0);
      }
    `}),n=new It(e,t);return n.frustumCulled=!1,n}const U2={beach:{x:Kt.x,z:Kt.z,yaw:Kt.yaw,pitch:.05},lookout:{x:gn.x,z:gn.z,yaw:.56,pitch:-.05},village:{x:118,z:325,yaw:.36,pitch:-.04},koban:{x:lo.x-14,z:lo.z+10,yaw:-.45,pitch:-.02},park:{x:Pn.x+8,z:Pn.z+6,yaw:.65,pitch:-.02},mine:{x:Ze.x+8,z:Ze.z+24,yaw:.12,pitch:.05},secret:{x:cn.x-8,z:cn.z+8,yaw:-.68,pitch:.02},trail:{x:355,z:-1245,yaw:.96,pitch:.12},summit:{x:Me.x-4.5,z:Me.z-5.5,yaw:-2.46,pitch:-.14},port:{x:un.x+2.5,z:un.z+2.5,yaw:.785,pitch:-.08}};function F2(){const i=new URLSearchParams(window.location.search),e=i.get("skipIntro")==="1"||i.has("tp"),t=i.get("hideHud")==="1",r={resolution:["HD","FHD","1.5K"].includes(i.get("res")||"")?i.get("res"):"FHD",fpsLimit:"120"},o=document.getElementById("webgl-canvas"),s=document.getElementById("hud-root");t&&(s.style.display="none");const a=new Ip({canvas:o,antialias:!0,powerPreference:"high-performance",stencil:!1});a.toneMapping=C0,a.toneMappingExposure=1.06,a.outputColorSpace=Ne,a.shadowMap.enabled=!0,a.shadowMap.type=R0;const l=new Ic;l.background=new Vt(Os),l.fog=new $s(Os,I2);const c=new je(62,window.innerWidth/Math.max(1,window.innerHeight),.25,18500),u=k2(ur);l.add(u);const d=new Vc(12378367,5663558,1.08);l.add(d);const h=new Zc(16774626,2.32);h.castShadow=!0,h.shadow.mapSize.set(2048,2048),h.shadow.camera.near=20,h.shadow.camera.far=520;const p=108;h.shadow.camera.left=-p,h.shadow.camera.right=p,h.shadow.camera.top=p,h.shadow.camera.bottom=-p,h.shadow.bias=-5e-4,h.shadow.normalBias=.04,l.add(h),l.add(h.target);const x=new Dp(a),g=new Fp,m=new Hp(x),f=new Yp(x),_=Xp(x,ur),v=Zp(x),b=S2(x);g.registerStructures(b.structures),l.add(m.group),l.add(f.group),l.add(_.group),l.add(v),l.add(b.group);const P={...U2};for(let L=0;L<b.structures.length;L++){const $=b.structures[L];P[$.id.toLowerCase()]={x:$.entryPoint.x,z:$.entryPoint.z,yaw:$.entryPoint.lookYaw??$.yaw,pitch:.04}}const E=new T2(c,o,g,e),A=i.get("tp")?.toLowerCase();if(A&&P[A]){const L=P[A],$=i.has("yaw")?Number(i.get("yaw")):L.yaw,N=i.has("pitch")?Number(i.get("pitch")):L.pitch;E.teleport(L.x,L.z,$,N)}const T=()=>{m.warmStart(E.position.x,E.position.z),f.warmStart(E.position.x,E.position.z),b.update(E.position)};T();let S=1280,M=720;const I=()=>{const L=Math.max(320,window.innerWidth),$=Math.max(200,window.innerHeight),N=L/$,H=D2[r.resolution];let K=H.maxW,V=Math.round(K/N);V>H.maxH&&(V=H.maxH,K=Math.round(V*N)),S=Math.max(320,K),M=Math.max(200,V),a.setPixelRatio(1),a.setSize(S,M,!1),c.aspect=N,c.updateProjectionMatrix()};I(),window.addEventListener("resize",I),window.addEventListener("orientationchange",()=>window.setTimeout(I,120));const O=new L2(s,E,r,{onGraphicsChange:L=>{r.resolution=L.resolution,r.fpsLimit=L.fpsLimit,I()},onTeleport:(L,$,N,H)=>{E.teleport(L,$,N,H),T()},onWakeUp:()=>{E.beginWakeUp()}},e,b.structures);let k=performance.now(),U=k,D=16.6;const w=k;let y=0,F=!1;const q=()=>{const L=Math.round(E.position.x*.5)*2,$=Math.round(E.position.y*.5)*2,N=Math.round(E.position.z*.5)*2;h.target.position.set(L,$,N),h.position.set(L+ur.x*240,$+ur.y*240,N+ur.z*240),h.target.updateMatrixWorld()},Y=(L,$=!1)=>{const N=Math.max(1,L-k),H=Math.max(.001,(L-U)*.001);k=L,U=L;const K=(L-w)*.001;if(E.update(H),u.position.copy(c.position),q(),_.update(K),m.update(E.position.x,E.position.z,4.2),f.update(E.position.x,E.position.z,K),b.update(E.position),a.render(l,c),y>=3){const G=Math.min(250,N);D=y===3?G:D*.88+G*.12}const V=Math.min(999,1e3/Math.max(1,D));O.update({fps:V,frameMs:D,renderWidth:S,renderHeight:M,terrain:m.getStats(),foliage:f.getStats(),houses:b.getStats()},$?L+500:L),y++,y===8&&(window.__KUROISO_READY__=!0)},X=L=>{requestAnimationFrame(X),!F&&(r.fpsLimit==="120"&&L-k<7.883333333333334||Y(L))};window.__KUROISO_DEBUG__={setPaused:L=>{F=L},renderFrame:()=>{Y(performance.now(),!0)},teleport:(L,$,N,H,K)=>{E.teleport(L,$,N,H,K),T(),u.position.copy(c.position),q()},teleportPreset:(L,$,N)=>{const H=P[L.toLowerCase()];H&&(E.teleport(H.x,H.z,$??H.yaw,N??H.pitch),T(),u.position.copy(c.position),q())},teleportHouse:(L,$,N,H,K=0,V=-.04)=>{const G=b.getById(L.toUpperCase());if(!G)return!1;const Z=Math.cos(G.yaw),B=Math.sin(G.yaw),J=G.position.x+$*Z+H*B,lt=G.position.z-$*B+H*Z,ht=N===null?void 0:G.position.y+N;return E.teleport(J,lt,G.yaw+K,V,ht),T(),u.position.copy(c.position),q(),!0},houses:b.structures.map(L=>({id:L.id,name:L.name,stories:L.stories,pos:L.position.toArray(),yaw:L.yaw,entry:L.entryPoint,floors:L.floorElevations})),getStats:()=>({pos:E.position.toArray(),inside:E.insideStructure?.id??null,terrain:m.getStats(),foliage:f.getStats(),houses:b.getStats(),render:[S,M],rendererInfo:{calls:a.info.render.calls,triangles:a.info.render.triangles,geometries:a.info.memory.geometries}})},requestAnimationFrame(X)}F2();
