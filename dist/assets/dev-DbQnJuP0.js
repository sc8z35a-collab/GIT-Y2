(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bo="174",bc=0,aa=1,_c=2,Tl=1,Rl=2,wn=3,mn=0,ze=1,sn=2,Wn=0,Di=1,la=2,ca=3,ua=4,Mc=5,ri=100,vc=101,Sc=102,yc=103,wc=104,Ec=200,Tc=201,Rc=202,Ac=203,Ks=204,js=205,Cc=206,Pc=207,Lc=208,Ic=209,Dc=210,Uc=211,kc=212,Fc=213,Nc=214,Js=0,Qs=1,to=2,zi=3,eo=4,no=5,io=6,ro=7,Al=0,zc=1,Oc=2,Vn=0,Bc=1,Hc=2,Gc=3,Cl=4,Wc=5,Vc=6,Xc=7,Pl=300,Oi=301,Bi=302,so=303,oo=304,us=306,oi=1e3,ai=1001,ao=1002,Ye=1003,Yc=1004,Mr=1005,an=1006,xs=1007,Gn=1008,Ln=1009,Ll=1010,Il=1011,fr=1012,Ho=1013,ci=1014,pn=1015,mr=1016,Go=1017,Wo=1018,Hi=1020,Dl=35902,Ul=1021,kl=1022,ln=1023,Fl=1024,Nl=1025,Ui=1026,Gi=1027,Vo=1028,Xo=1029,zl=1030,Yo=1031,Zo=1033,jr=33776,Jr=33777,Qr=33778,ts=33779,lo=35840,co=35841,uo=35842,ho=35843,fo=36196,po=37492,mo=37496,xo=37808,go=37809,bo=37810,_o=37811,Mo=37812,vo=37813,So=37814,yo=37815,wo=37816,Eo=37817,To=37818,Ro=37819,Ao=37820,Co=37821,es=36492,Po=36494,Lo=36495,Ol=36283,Io=36284,Do=36285,Uo=36286,Zc=3200,qc=3201,Bl=0,$c=1,Bn="",Ne="srgb",Wi="srgb-linear",rs="linear",oe="srgb",fi=7680,da=519,Kc=512,jc=513,Jc=514,Hl=515,Qc=516,t0=517,e0=518,n0=519,ha=35044,fa="300 es",Rn=2e3,ss=2001;class Yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gs=Math.PI/180,ko=180/Math.PI;function xr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[e&255]+Ie[e>>8&255]+"-"+Ie[e>>16&15|64]+Ie[e>>24&255]+"-"+Ie[t&63|128]+Ie[t>>8&255]+"-"+Ie[t>>16&255]+Ie[t>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function jt(i,e,t){return Math.max(e,Math.min(t,i))}function i0(i,e){return(i%e+e)%e}function bs(i,e,t){return(1-t)*i+t*e}function ji(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Be(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Jt{constructor(e=0,t=0){Jt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=jt(this.x,e.x,t.x),this.y=jt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=jt(this.x,e,t),this.y=jt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(e,t,n,r,s,o,a,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],p=n[5],g=n[8],x=r[0],m=r[3],f=r[6],M=r[1],S=r[4],b=r[7],C=r[2],y=r[5],R=r[8];return s[0]=o*x+a*M+l*C,s[3]=o*m+a*S+l*y,s[6]=o*f+a*b+l*R,s[1]=c*x+u*M+d*C,s[4]=c*m+u*S+d*y,s[7]=c*f+u*b+d*R,s[2]=h*x+p*M+g*C,s[5]=h*m+p*S+g*y,s[8]=h*f+p*b+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=t*d+n*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(r*c-u*n)*x,e[2]=(a*n-r*o)*x,e[3]=h*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_s.makeScale(e,t)),this}rotate(e){return this.premultiply(_s.makeRotation(-e)),this}translate(e,t){return this.premultiply(_s.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _s=new qt;function Gl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function r0(){const i=pr("canvas");return i.style.display="block",i}const pa={};function ei(i){i in pa||(pa[i]=!0,console.warn(i))}function s0(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function o0(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function a0(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ma=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xa=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function l0(){const i={enabled:!0,workingColorSpace:Wi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===oe&&(r.r=Cn(r.r),r.g=Cn(r.g),r.b=Cn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===oe&&(r.r=ki(r.r),r.g=ki(r.g),r.b=ki(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Bn?rs:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Wi]:{primaries:e,whitePoint:n,transfer:rs,toXYZ:ma,fromXYZ:xa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:e,whitePoint:n,transfer:oe,toXYZ:ma,fromXYZ:xa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),i}const ee=l0();function Cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let pi;class c0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{pi===void 0&&(pi=pr("canvas")),pi.width=e.width,pi.height=e.height;const n=pi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=pi}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Cn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Cn(t[n]/255)*255):t[n]=Cn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let u0=0;class qo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=xr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ms(r[o].image)):s.push(Ms(r[o]))}else s=Ms(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ms(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?c0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let d0=0;class Ue extends Yi{constructor(e=Ue.DEFAULT_IMAGE,t=Ue.DEFAULT_MAPPING,n=ai,r=ai,s=an,o=Gn,a=ln,l=Ln,c=Ue.DEFAULT_ANISOTROPY,u=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=xr(),this.name="",this.source=new qo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Jt(0,0),this.repeat=new Jt(1,1),this.center=new Jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oi:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oi:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=Pl;Ue.DEFAULT_ANISOTROPY=1;class Me{constructor(e=0,t=0,n=0,r=1){Me.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,b=(p+1)/2,C=(f+1)/2,y=(u+h)/4,R=(d+x)/4,E=(g+m)/4;return S>b&&S>C?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=y/n,s=R/n):b>C?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=y/r,s=E/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=R/s,r=E/s),this.set(n,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-x)/M,this.z=(h-u)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=jt(this.x,e.x,t.x),this.y=jt(this.y,e.y,t.y),this.z=jt(this.z,e.z,t.z),this.w=jt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=jt(this.x,e,t),this.y=jt(this.y,e,t),this.z=jt(this.z,e,t),this.w=jt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class h0 extends Yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Me(0,0,e,t),this.scissorTest=!1,this.viewport=new Me(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ue(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new qo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends h0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Wl extends Ue{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class f0 extends Ue{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(d!==x||l!==h||c!==p||u!==g){let m=1-a;const f=l*h+c*p+u*g+d*x,M=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const C=Math.sqrt(S),y=Math.atan2(C,f*M);m=Math.sin(m*y)/C,a=Math.sin(a*y)/C}const b=a*M;if(l=l*m+h*b,c=c*m+p*b,u=u*m+g*b,d=d*m+x*b,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*d+l*p-c*h,e[t+1]=l*g+u*h+c*d-a*p,e[t+2]=c*g+u*p+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),d=a(s/2),h=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"YZX":this._x=h*u*d+c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d-h*p*g;break;case"XZY":this._x=h*u*d-c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(e=0,t=0,n=0){it.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ga.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ga.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=jt(this.x,e.x,t.x),this.y=jt(this.y,e.y,t.y),this.z=jt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=jt(this.x,e,t),this.y=jt(this.y,e,t),this.z=jt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vs.copy(this).projectOnVector(e),this.sub(vs)}reflect(e){return this.sub(vs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vs=new it,ga=new Zi;class In{constructor(e=new it(1/0,1/0,1/0),t=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,en):en.fromBufferAttribute(s,o),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vr.copy(n.boundingBox)),vr.applyMatrix4(e.matrixWorld),this.union(vr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ji),Sr.subVectors(this.max,Ji),mi.subVectors(e.a,Ji),xi.subVectors(e.b,Ji),gi.subVectors(e.c,Ji),Dn.subVectors(xi,mi),Un.subVectors(gi,xi),Yn.subVectors(mi,gi);let t=[0,-Dn.z,Dn.y,0,-Un.z,Un.y,0,-Yn.z,Yn.y,Dn.z,0,-Dn.x,Un.z,0,-Un.x,Yn.z,0,-Yn.x,-Dn.y,Dn.x,0,-Un.y,Un.x,0,-Yn.y,Yn.x,0];return!Ss(t,mi,xi,gi,Sr)||(t=[1,0,0,0,1,0,0,0,1],!Ss(t,mi,xi,gi,Sr))?!1:(yr.crossVectors(Dn,Un),t=[yr.x,yr.y,yr.z],Ss(t,mi,xi,gi,Sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bn=[new it,new it,new it,new it,new it,new it,new it,new it],en=new it,vr=new In,mi=new it,xi=new it,gi=new it,Dn=new it,Un=new it,Yn=new it,Ji=new it,Sr=new it,yr=new it,Zn=new it;function Ss(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Zn.fromArray(i,s);const a=r.x*Math.abs(Zn.x)+r.y*Math.abs(Zn.y)+r.z*Math.abs(Zn.z),l=e.dot(Zn),c=t.dot(Zn),u=n.dot(Zn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const p0=new In,Qi=new it,ys=new it;class di{constructor(e=new it,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):p0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);const t=Qi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Qi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ys.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(ys)),this.expandByPoint(Qi.copy(e.center).sub(ys))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new it,ws=new it,wr=new it,kn=new it,Es=new it,Er=new it,Ts=new it;class Vl{constructor(e=new it,t=new it(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ws.copy(e).add(t).multiplyScalar(.5),wr.copy(t).sub(e).normalize(),kn.copy(this.origin).sub(ws);const s=e.distanceTo(t)*.5,o=-this.direction.dot(wr),a=kn.dot(this.direction),l=-kn.dot(wr),c=kn.lengthSq(),u=Math.abs(1-o*o);let d,h,p,g;if(u>0)if(d=o*l-a,h=o*a-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const x=1/u;d*=x,h*=x,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ws).addScaledVector(wr,h),p}intersectSphere(e,t){_n.subVectors(e.center,this.origin);const n=_n.dot(this.direction),r=_n.dot(_n)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,n,r,s){Es.subVectors(t,e),Er.subVectors(n,e),Ts.crossVectors(Es,Er);let o=this.direction.dot(Ts),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kn.subVectors(this.origin,e);const l=a*this.direction.dot(Er.crossVectors(kn,Er));if(l<0)return null;const c=a*this.direction.dot(Es.cross(kn));if(c<0||l+c>o)return null;const u=-a*kn.dot(Ts);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(e,t,n,r,s,o,a,l,c,u,d,h,p,g,x,m){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,d,h,p,g,x,m)}set(e,t,n,r,s,o,a,l,c,u,d,h,p,g,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/bi.setFromMatrixColumn(e,0).length(),s=1/bi.setFromMatrixColumn(e,1).length(),o=1/bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*d,g=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,g=c*u,x=c*d;t[0]=h+x*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,g=c*u,x=c*d;t[0]=h-x*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*d,g=a*u,x=a*d;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+x,t[1]=l*d,t[5]=x*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-h*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+g,t[10]=h-x*d}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+x,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(m0,e,x0)}lookAt(e,t,n){const r=this.elements;return Ve.subVectors(e,t),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Fn.crossVectors(n,Ve),Fn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Fn.crossVectors(n,Ve)),Fn.normalize(),Tr.crossVectors(Ve,Fn),r[0]=Fn.x,r[4]=Tr.x,r[8]=Ve.x,r[1]=Fn.y,r[5]=Tr.y,r[9]=Ve.y,r[2]=Fn.z,r[6]=Tr.z,r[10]=Ve.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],M=n[3],S=n[7],b=n[11],C=n[15],y=r[0],R=r[4],E=r[8],v=r[12],_=r[1],I=r[5],N=r[9],P=r[13],L=r[2],k=r[6],w=r[10],T=r[14],D=r[3],X=r[7],W=r[11],Y=r[15];return s[0]=o*y+a*_+l*L+c*D,s[4]=o*R+a*I+l*k+c*X,s[8]=o*E+a*N+l*w+c*W,s[12]=o*v+a*P+l*T+c*Y,s[1]=u*y+d*_+h*L+p*D,s[5]=u*R+d*I+h*k+p*X,s[9]=u*E+d*N+h*w+p*W,s[13]=u*v+d*P+h*T+p*Y,s[2]=g*y+x*_+m*L+f*D,s[6]=g*R+x*I+m*k+f*X,s[10]=g*E+x*N+m*w+f*W,s[14]=g*v+x*P+m*T+f*Y,s[3]=M*y+S*_+b*L+C*D,s[7]=M*R+S*I+b*k+C*X,s[11]=M*E+S*N+b*w+C*W,s[15]=M*v+S*P+b*T+C*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],x=e[7],m=e[11],f=e[15];return g*(+s*l*d-r*c*d-s*a*h+n*c*h+r*a*p-n*l*p)+x*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+t*c*d-t*a*p-s*o*d+n*o*p+s*a*u-n*c*u)+f*(-r*a*u-t*l*d+t*a*h+r*o*d-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],x=e[13],m=e[14],f=e[15],M=d*m*c-x*h*c+x*l*p-a*m*p-d*l*f+a*h*f,S=g*h*c-u*m*c-g*l*p+o*m*p+u*l*f-o*h*f,b=u*x*c-g*d*c+g*a*p-o*x*p-u*a*f+o*d*f,C=g*d*l-u*x*l-g*a*h+o*x*h+u*a*m-o*d*m,y=t*M+n*S+r*b+s*C;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/y;return e[0]=M*R,e[1]=(x*h*s-d*m*s-x*r*p+n*m*p+d*r*f-n*h*f)*R,e[2]=(a*m*s-x*l*s+x*r*c-n*m*c-a*r*f+n*l*f)*R,e[3]=(d*l*s-a*h*s-d*r*c+n*h*c+a*r*p-n*l*p)*R,e[4]=S*R,e[5]=(u*m*s-g*h*s+g*r*p-t*m*p-u*r*f+t*h*f)*R,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*f-t*l*f)*R,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*R,e[8]=b*R,e[9]=(g*d*s-u*x*s-g*n*p+t*x*p+u*n*f-t*d*f)*R,e[10]=(o*x*s-g*a*s+g*n*c-t*x*c-o*n*f+t*a*f)*R,e[11]=(u*a*s-o*d*s-u*n*c+t*d*c+o*n*p-t*a*p)*R,e[12]=C*R,e[13]=(u*x*r-g*d*r+g*n*h-t*x*h-u*n*m+t*d*m)*R,e[14]=(g*a*r-o*x*r-g*n*l+t*x*l+o*n*m-t*a*m)*R,e[15]=(o*d*r-u*a*r+u*n*l-t*d*l-o*n*h+t*a*h)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,h=s*c,p=s*u,g=s*d,x=o*u,m=o*d,f=a*d,M=l*c,S=l*u,b=l*d,C=n.x,y=n.y,R=n.z;return r[0]=(1-(x+f))*C,r[1]=(p+b)*C,r[2]=(g-S)*C,r[3]=0,r[4]=(p-b)*y,r[5]=(1-(h+f))*y,r[6]=(m+M)*y,r[7]=0,r[8]=(g+S)*R,r[9]=(m-M)*R,r[10]=(1-(h+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=bi.set(r[0],r[1],r[2]).length();const o=bi.set(r[4],r[5],r[6]).length(),a=bi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],nn.copy(this);const c=1/s,u=1/o,d=1/a;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=d,nn.elements[9]*=d,nn.elements[10]*=d,t.setFromRotationMatrix(nn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Rn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),h=(n+r)/(n-r);let p,g;if(a===Rn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ss)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Rn){const l=this.elements,c=1/(t-e),u=1/(n-r),d=1/(o-s),h=(t+e)*c,p=(n+r)*u;let g,x;if(a===Rn)g=(o+s)*d,x=-2*d;else if(a===ss)g=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const bi=new it,nn=new Xt,m0=new it(0,0,0),x0=new it(1,1,1),Fn=new it,Tr=new it,Ve=new it,ba=new Xt,_a=new Zi;class dn{constructor(e=0,t=0,n=0,r=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ba.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ba,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _a.setFromEuler(this),this.setFromQuaternion(_a,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class Xl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let g0=0;const Ma=new it,_i=new Zi,Mn=new Xt,Rr=new it,tr=new it,b0=new it,_0=new Zi,va=new it(1,0,0),Sa=new it(0,1,0),ya=new it(0,0,1),wa={type:"added"},M0={type:"removed"},Mi={type:"childadded",child:null},Rs={type:"childremoved",child:null};class ye extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const e=new it,t=new dn,n=new Zi,r=new it(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Xt},normalMatrix:{value:new qt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.multiply(_i),this}rotateOnWorldAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.premultiply(_i),this}rotateX(e){return this.rotateOnAxis(va,e)}rotateY(e){return this.rotateOnAxis(Sa,e)}rotateZ(e){return this.rotateOnAxis(ya,e)}translateOnAxis(e,t){return Ma.copy(e).applyQuaternion(this.quaternion),this.position.add(Ma.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(va,e)}translateY(e){return this.translateOnAxis(Sa,e)}translateZ(e){return this.translateOnAxis(ya,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rr.copy(e):Rr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(tr,Rr,this.up):Mn.lookAt(Rr,tr,this.up),this.quaternion.setFromRotationMatrix(Mn),r&&(Mn.extractRotation(r.matrixWorld),_i.setFromRotationMatrix(Mn),this.quaternion.premultiply(_i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wa),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(M0),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wa),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,e,b0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,_0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ye.DEFAULT_UP=new it(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new it,vn=new it,As=new it,Sn=new it,vi=new it,Si=new it,Ea=new it,Cs=new it,Ps=new it,Ls=new it,Is=new Me,Ds=new Me,Us=new Me;class on{constructor(e=new it,t=new it,n=new it){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),rn.subVectors(e,t),r.cross(rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){rn.subVectors(r,t),vn.subVectors(n,t),As.subVectors(e,t);const o=rn.dot(rn),a=rn.dot(vn),l=rn.dot(As),c=vn.dot(vn),u=vn.dot(As),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Sn.x),l.addScaledVector(o,Sn.y),l.addScaledVector(a,Sn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Is.setScalar(0),Ds.setScalar(0),Us.setScalar(0),Is.fromBufferAttribute(e,t),Ds.fromBufferAttribute(e,n),Us.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Is,s.x),o.addScaledVector(Ds,s.y),o.addScaledVector(Us,s.z),o}static isFrontFacing(e,t,n,r){return rn.subVectors(n,t),vn.subVectors(e,t),rn.cross(vn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),rn.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return on.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;vi.subVectors(r,n),Si.subVectors(s,n),Cs.subVectors(e,n);const l=vi.dot(Cs),c=Si.dot(Cs);if(l<=0&&c<=0)return t.copy(n);Ps.subVectors(e,r);const u=vi.dot(Ps),d=Si.dot(Ps);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(vi,o);Ls.subVectors(e,s);const p=vi.dot(Ls),g=Si.dot(Ls);if(g>=0&&p<=g)return t.copy(s);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Si,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Ea.subVectors(s,r),a=(d-u)/(d-u+(p-g)),t.copy(r).addScaledVector(Ea,a);const f=1/(m+x+h);return o=x*f,a=h*f,t.copy(n).addScaledVector(vi,o).addScaledVector(Si,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function ks(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Wt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ne){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ee.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ee.workingColorSpace){return this.r=e,this.g=t,this.b=n,ee.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ee.workingColorSpace){if(e=i0(e,1),t=jt(t,0,1),n=jt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ks(o,s,e+1/3),this.g=ks(o,s,e),this.b=ks(o,s,e-1/3)}return ee.toWorkingColorSpace(this,r),this}setStyle(e,t=Ne){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ne){const n=Yl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cn(e.r),this.g=Cn(e.g),this.b=Cn(e.b),this}copyLinearToSRGB(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ne){return ee.fromWorkingColorSpace(De.copy(this),e),Math.round(jt(De.r*255,0,255))*65536+Math.round(jt(De.g*255,0,255))*256+Math.round(jt(De.b*255,0,255))}getHexString(e=Ne){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ee.workingColorSpace){ee.fromWorkingColorSpace(De.copy(this),t);const n=De.r,r=De.g,s=De.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ee.workingColorSpace){return ee.fromWorkingColorSpace(De.copy(this),t),e.r=De.r,e.g=De.g,e.b=De.b,e}getStyle(e=Ne){ee.fromWorkingColorSpace(De.copy(this),e);const t=De.r,n=De.g,r=De.b;return e!==Ne?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Nn),this.setHSL(Nn.h+e,Nn.s+t,Nn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(Ar);const n=bs(Nn.h,Ar.h,t),r=bs(Nn.s,Ar.s,t),s=bs(Nn.l,Ar.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new Wt;Wt.NAMES=Yl;let v0=0;class qi extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=xr(),this.name="",this.type="Material",this.blending=Di,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ks,this.blendDst=js,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=da,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ks&&(n.blendSrc=this.blendSrc),this.blendDst!==js&&(n.blendDst=this.blendDst),this.blendEquation!==ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==da&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zl extends qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Se=new it,Cr=new Jt;let S0=0;class pe{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:S0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ha,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyMatrix3(e),this.setXY(t,Cr.x,Cr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Se.fromBufferAttribute(this,t),Se.applyMatrix3(e),this.setXYZ(t,Se.x,Se.y,Se.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Se.fromBufferAttribute(this,t),Se.applyMatrix4(e),this.setXYZ(t,Se.x,Se.y,Se.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Se.fromBufferAttribute(this,t),Se.applyNormalMatrix(e),this.setXYZ(t,Se.x,Se.y,Se.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Se.fromBufferAttribute(this,t),Se.transformDirection(e),this.setXYZ(t,Se.x,Se.y,Se.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ji(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Be(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=Be(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=Be(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Be(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=Be(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Be(t,this.array),n=Be(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Be(t,this.array),n=Be(n,this.array),r=Be(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Be(t,this.array),n=Be(n,this.array),r=Be(r,this.array),s=Be(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ha&&(e.usage=this.usage),e}}class ql extends pe{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $l extends pe{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ue extends pe{constructor(e,t,n){super(new Float32Array(e),t,n)}}let y0=0;const Ke=new Xt,Fs=new ye,yi=new it,Xe=new In,er=new In,Ae=new it;class we extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gl(e)?$l:ql)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ke.makeRotationFromQuaternion(e),this.applyMatrix4(Ke),this}rotateX(e){return Ke.makeRotationX(e),this.applyMatrix4(Ke),this}rotateY(e){return Ke.makeRotationY(e),this.applyMatrix4(Ke),this}rotateZ(e){return Ke.makeRotationZ(e),this.applyMatrix4(Ke),this}translate(e,t,n){return Ke.makeTranslation(e,t,n),this.applyMatrix4(Ke),this}scale(e,t,n){return Ke.makeScale(e,t,n),this.applyMatrix4(Ke),this}lookAt(e){return Fs.lookAt(e),Fs.updateMatrix(),this.applyMatrix4(Fs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Xe.setFromBufferAttribute(s),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(e){const n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];er.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(Xe.min,er.min),Xe.expandByPoint(Ae),Ae.addVectors(Xe.max,er.max),Xe.expandByPoint(Ae)):(Xe.expandByPoint(er.min),Xe.expandByPoint(er.max))}Xe.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Ae.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ae));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ae.fromBufferAttribute(a,c),l&&(yi.fromBufferAttribute(e,c),Ae.add(yi)),r=Math.max(r,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let E=0;E<n.count;E++)a[E]=new it,l[E]=new it;const c=new it,u=new it,d=new it,h=new Jt,p=new Jt,g=new Jt,x=new it,m=new it;function f(E,v,_){c.fromBufferAttribute(n,E),u.fromBufferAttribute(n,v),d.fromBufferAttribute(n,_),h.fromBufferAttribute(s,E),p.fromBufferAttribute(s,v),g.fromBufferAttribute(s,_),u.sub(c),d.sub(c),p.sub(h),g.sub(h);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(I),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),a[E].add(x),a[v].add(x),a[_].add(x),l[E].add(m),l[v].add(m),l[_].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let E=0,v=M.length;E<v;++E){const _=M[E],I=_.start,N=_.count;for(let P=I,L=I+N;P<L;P+=3)f(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const S=new it,b=new it,C=new it,y=new it;function R(E){C.fromBufferAttribute(r,E),y.copy(C);const v=a[E];S.copy(v),S.sub(C.multiplyScalar(C.dot(v))).normalize(),b.crossVectors(y,v);const I=b.dot(l[E])<0?-1:1;o.setXYZW(E,S.x,S.y,S.z,I)}for(let E=0,v=M.length;E<v;++E){const _=M[E],I=_.start,N=_.count;for(let P=I,L=I+N;P<L;P+=3)R(e.getX(P+0)),R(e.getX(P+1)),R(e.getX(P+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const r=new it,s=new it,o=new it,a=new it,l=new it,c=new it,u=new it,d=new it;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ae.fromBufferAttribute(e,t),Ae.normalize(),e.setXYZ(t,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let f=0;f<u;f++)h[g++]=c[p++]}return new pe(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new we,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ta=new Xt,qn=new Vl,Pr=new di,Ra=new it,Lr=new it,Ir=new it,Dr=new it,Ns=new it,Ur=new it,Aa=new it,kr=new it;class Lt extends ye{constructor(e=new we,t=new Zl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ur.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Ns.fromBufferAttribute(d,e),o?Ur.addScaledVector(Ns,u):Ur.addScaledVector(Ns.sub(t),u))}t.add(Ur)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(s),qn.copy(e.ray).recast(e.near),!(Pr.containsPoint(qn.origin)===!1&&(qn.intersectSphere(Pr,Ra)===null||qn.origin.distanceToSquared(Ra)>(e.far-e.near)**2))&&(Ta.copy(s).invert(),qn.copy(e.ray).applyMatrix4(Ta),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=M,C=S;b<C;b+=3){const y=a.getX(b),R=a.getX(b+1),E=a.getX(b+2);r=Fr(this,f,e,n,c,u,d,y,R,E),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const M=a.getX(m),S=a.getX(m+1),b=a.getX(m+2);r=Fr(this,o,e,n,c,u,d,M,S,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=M,C=S;b<C;b+=3){const y=b,R=b+1,E=b+2;r=Fr(this,f,e,n,c,u,d,y,R,E),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const M=m,S=m+1,b=m+2;r=Fr(this,o,e,n,c,u,d,M,S,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function w0(i,e,t,n,r,s,o,a){let l;if(e.side===ze?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===mn,a),l===null)return null;kr.copy(a),kr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(kr);return c<t.near||c>t.far?null:{distance:c,point:kr.clone(),object:i}}function Fr(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Lr),i.getVertexPosition(l,Ir),i.getVertexPosition(c,Dr);const u=w0(i,e,t,n,Lr,Ir,Dr,Aa);if(u){const d=new it;on.getBarycoord(Aa,Lr,Ir,Dr,d),r&&(u.uv=on.getInterpolatedAttribute(r,a,l,c,d,new Jt)),s&&(u.uv1=on.getInterpolatedAttribute(s,a,l,c,d,new Jt)),o&&(u.normal=on.getInterpolatedAttribute(o,a,l,c,d,new it),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new it,materialIndex:0};on.getNormal(Lr,Ir,Dr,h.normal),u.face=h,u.barycoord=d}return u}class Vt extends we{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(d,2));function g(x,m,f,M,S,b,C,y,R,E,v){const _=b/R,I=C/E,N=b/2,P=C/2,L=y/2,k=R+1,w=E+1;let T=0,D=0;const X=new it;for(let W=0;W<w;W++){const Y=W*I-P;for(let U=0;U<k;U++){const K=U*_-N;X[x]=K*M,X[m]=Y*S,X[f]=L,c.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[f]=y>0?1:-1,u.push(X.x,X.y,X.z),d.push(U/R),d.push(1-W/E),T+=1}}for(let W=0;W<E;W++)for(let Y=0;Y<R;Y++){const U=h+Y+k*W,K=h+Y+k*(W+1),H=h+(Y+1)+k*(W+1),B=h+(Y+1)+k*W;l.push(U,K,B),l.push(K,H,B),D+=6}a.addGroup(p,D,v),p+=D,h+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Fe(i){const e={};for(let t=0;t<i.length;t++){const n=Vi(i[t]);for(const r in n)e[r]=n[r]}return e}function E0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Kl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ee.workingColorSpace}const T0={clone:Vi,merge:Fe};var R0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R0,this.fragmentShader=A0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vi(e.uniforms),this.uniformsGroups=E0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class jl extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Rn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new it,Ca=new Jt,Pa=new Jt;class je extends jl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ko*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ko*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zn.x,zn.y).multiplyScalar(-e/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-e/zn.z)}getViewSize(e,t){return this.getViewBounds(e,Ca,Pa),t.subVectors(Pa,Ca)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const wi=-90,Ei=1;class C0 extends ye{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new je(wi,Ei,e,t);r.layers=this.layers,this.add(r);const s=new je(wi,Ei,e,t);s.layers=this.layers,this.add(s);const o=new je(wi,Ei,e,t);o.layers=this.layers,this.add(o);const a=new je(wi,Ei,e,t);a.layers=this.layers,this.add(a);const l=new je(wi,Ei,e,t);l.layers=this.layers,this.add(l);const c=new je(wi,Ei,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Jl extends Ue{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Oi,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class P0 extends ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Jl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:an}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Vt(5,5,5),s=new xn({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:Wn});s.uniforms.tEquirect.value=t;const o=new Lt(r,s),a=t.minFilter;return t.minFilter===Gn&&(t.minFilter=an),new C0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class fe extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L0={type:"move"};class zs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(L0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new fe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class $o{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Wt(e),this.density=t}clone(){return new $o(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class I0 extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class D0 extends Ue{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Ye,u=Ye,d,h){super(null,o,a,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class La extends pe{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ti=new Xt,Ia=new Xt,Nr=[],Da=new In,U0=new Xt,nr=new Lt,ir=new di;class Ua extends Lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new La(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,U0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new In),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ti),Da.copy(e.boundingBox).applyMatrix4(Ti),this.boundingBox.union(Da)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new di),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ti),ir.copy(e.boundingSphere).applyMatrix4(Ti),this.boundingSphere.union(ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(n),e.ray.intersectsSphere(ir)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ti),Ia.multiplyMatrices(n,Ti),nr.matrixWorld=Ia,nr.raycast(e,Nr);for(let o=0,a=Nr.length;o<a;o++){const l=Nr[o];l.instanceId=s,l.object=this,t.push(l)}Nr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new La(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new D0(new Float32Array(r*this.count),r,this.count,Vo,pn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Os=new it,k0=new it,F0=new qt;class ni{constructor(e=new it(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Os.subVectors(n,t).cross(k0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Os),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||F0.getNormalMatrix(e),r=this.coplanarPoint(Os).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $n=new di,zr=new it;class Ko{constructor(e=new ni,t=new ni,n=new ni,r=new ni,s=new ni,o=new ni){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],p=r[8],g=r[9],x=r[10],m=r[11],f=r[12],M=r[13],S=r[14],b=r[15];if(n[0].setComponents(l-s,h-c,m-p,b-f).normalize(),n[1].setComponents(l+s,h+c,m+p,b+f).normalize(),n[2].setComponents(l+o,h+u,m+g,b+M).normalize(),n[3].setComponents(l-o,h-u,m-g,b-M).normalize(),n[4].setComponents(l-a,h-d,m-x,b-S).normalize(),t===Rn)n[5].setComponents(l+a,h+d,m+x,b+S).normalize();else if(t===ss)n[5].setComponents(a,d,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(e){return $n.center.set(0,0,0),$n.radius=.7071067811865476,$n.applyMatrix4(e.matrixWorld),this.intersectsSphere($n)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(zr.x=r.normal.x>0?e.max.x:e.min.x,zr.y=r.normal.y>0?e.max.y:e.min.y,zr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ql extends qi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const os=new it,as=new it,ka=new Xt,rr=new Vl,Or=new di,Bs=new it,Fa=new it;class N0 extends ye{constructor(e=new we,t=new Ql){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)os.fromBufferAttribute(t,r-1),as.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=os.distanceTo(as);e.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(r),Or.radius+=s,e.ray.intersectsSphere(Or)===!1)return;ka.copy(r).invert(),rr.copy(e.ray).applyMatrix4(ka);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){const f=u.getX(x),M=u.getX(x+1),S=Br(this,e,rr,l,f,M,x);S&&t.push(S)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(p),f=Br(this,e,rr,l,x,m,g-1);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){const f=Br(this,e,rr,l,x,x+1,x);f&&t.push(f)}if(this.isLineLoop){const x=Br(this,e,rr,l,g-1,p,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Br(i,e,t,n,r,s,o){const a=i.geometry.attributes.position;if(os.fromBufferAttribute(a,r),as.fromBufferAttribute(a,s),t.distanceSqToSegment(os,as,Bs,Fa)>n)return;Bs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Bs);if(!(c<e.near||c>e.far))return{distance:c,point:Fa.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}class tc extends Ue{constructor(e,t,n,r,s,o,a,l,c,u=Ui){if(u!==Ui&&u!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ui&&(n=ci),n===void 0&&u===Gi&&(n=Hi),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ye,this.minFilter=l!==void 0?l:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ge extends we{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],h=[],p=[];let g=0;const x=[],m=n/2;let f=0;M(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new ue(d,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(p,2));function M(){const b=new it,C=new it;let y=0;const R=(t-e)/n;for(let E=0;E<=s;E++){const v=[],_=E/s,I=_*(t-e)+e;for(let N=0;N<=r;N++){const P=N/r,L=P*l+a,k=Math.sin(L),w=Math.cos(L);C.x=I*k,C.y=-_*n+m,C.z=I*w,d.push(C.x,C.y,C.z),b.set(k,R,w).normalize(),h.push(b.x,b.y,b.z),p.push(P,1-_),v.push(g++)}x.push(v)}for(let E=0;E<r;E++)for(let v=0;v<s;v++){const _=x[v][E],I=x[v+1][E],N=x[v+1][E+1],P=x[v][E+1];(e>0||v!==0)&&(u.push(_,I,P),y+=3),(t>0||v!==s-1)&&(u.push(I,N,P),y+=3)}c.addGroup(f,y,0),f+=y}function S(b){const C=g,y=new Jt,R=new it;let E=0;const v=b===!0?e:t,_=b===!0?1:-1;for(let N=1;N<=r;N++)d.push(0,m*_,0),h.push(0,_,0),p.push(.5,.5),g++;const I=g;for(let N=0;N<=r;N++){const L=N/r*l+a,k=Math.cos(L),w=Math.sin(L);R.x=v*w,R.y=m*_,R.z=v*k,d.push(R.x,R.y,R.z),h.push(0,_,0),y.x=k*.5+.5,y.y=w*.5*_+.5,p.push(y.x,y.y),g++}for(let N=0;N<r;N++){const P=C+N,L=I+N;b===!0?u.push(L,L+1,P):u.push(L+1,L,P),E+=3}c.addGroup(f,E,b===!0?1:2),f+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ge(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jo extends Ge{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new jo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ds extends we{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),c(n),u(),this.setAttribute("position",new ue(s,3)),this.setAttribute("normal",new ue(s.slice(),3)),this.setAttribute("uv",new ue(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const S=new it,b=new it,C=new it;for(let y=0;y<t.length;y+=3)p(t[y+0],S),p(t[y+1],b),p(t[y+2],C),l(S,b,C,M)}function l(M,S,b,C){const y=C+1,R=[];for(let E=0;E<=y;E++){R[E]=[];const v=M.clone().lerp(b,E/y),_=S.clone().lerp(b,E/y),I=y-E;for(let N=0;N<=I;N++)N===0&&E===y?R[E][N]=v:R[E][N]=v.clone().lerp(_,N/I)}for(let E=0;E<y;E++)for(let v=0;v<2*(y-E)-1;v++){const _=Math.floor(v/2);v%2===0?(h(R[E][_+1]),h(R[E+1][_]),h(R[E][_])):(h(R[E][_+1]),h(R[E+1][_+1]),h(R[E+1][_]))}}function c(M){const S=new it;for(let b=0;b<s.length;b+=3)S.x=s[b+0],S.y=s[b+1],S.z=s[b+2],S.normalize().multiplyScalar(M),s[b+0]=S.x,s[b+1]=S.y,s[b+2]=S.z}function u(){const M=new it;for(let S=0;S<s.length;S+=3){M.x=s[S+0],M.y=s[S+1],M.z=s[S+2];const b=m(M)/2/Math.PI+.5,C=f(M)/Math.PI+.5;o.push(b,1-C)}g(),d()}function d(){for(let M=0;M<o.length;M+=6){const S=o[M+0],b=o[M+2],C=o[M+4],y=Math.max(S,b,C),R=Math.min(S,b,C);y>.9&&R<.1&&(S<.2&&(o[M+0]+=1),b<.2&&(o[M+2]+=1),C<.2&&(o[M+4]+=1))}}function h(M){s.push(M.x,M.y,M.z)}function p(M,S){const b=M*3;S.x=e[b+0],S.y=e[b+1],S.z=e[b+2]}function g(){const M=new it,S=new it,b=new it,C=new it,y=new Jt,R=new Jt,E=new Jt;for(let v=0,_=0;v<s.length;v+=9,_+=6){M.set(s[v+0],s[v+1],s[v+2]),S.set(s[v+3],s[v+4],s[v+5]),b.set(s[v+6],s[v+7],s[v+8]),y.set(o[_+0],o[_+1]),R.set(o[_+2],o[_+3]),E.set(o[_+4],o[_+5]),C.copy(M).add(S).add(b).divideScalar(3);const I=m(C);x(y,_+0,M,I),x(R,_+2,S,I),x(E,_+4,b,I)}}function x(M,S,b,C){C<0&&M.x===1&&(o[S]=M.x-1),b.x===0&&b.z===0&&(o[S]=C/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.vertices,e.indices,e.radius,e.details)}}class Tn extends ds{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Tn(e.radius,e.detail)}}class Jo extends ds{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Jo(e.radius,e.detail)}}class Xi extends we{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=t/l,p=[],g=[],x=[],m=[];for(let f=0;f<u;f++){const M=f*h-o;for(let S=0;S<c;S++){const b=S*d-s;g.push(b,-M,0),x.push(0,0,1),m.push(S/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){const S=M+c*f,b=M+c*(f+1),C=M+1+c*(f+1),y=M+1+c*f;p.push(S,b,y),p.push(b,C,y)}this.setIndex(p),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(x,3)),this.setAttribute("uv",new ue(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qo extends we{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new it,h=new it,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){const M=[],S=f/n;let b=0;f===0&&o===0?b=.5/t:f===n&&l===Math.PI&&(b=-.5/t);for(let C=0;C<=t;C++){const y=C/t;d.x=-e*Math.cos(r+y*s)*Math.sin(o+S*a),d.y=e*Math.cos(o+S*a),d.z=e*Math.sin(r+y*s)*Math.sin(o+S*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(y+b,1-S),M.push(c++)}u.push(M)}for(let f=0;f<n;f++)for(let M=0;M<t;M++){const S=u[f][M+1],b=u[f][M],C=u[f+1][M],y=u[f+1][M+1];(f!==0||o>0)&&p.push(S,b,y),(f!==n-1||l<Math.PI)&&p.push(b,C,y)}this.setIndex(p),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(x,3)),this.setAttribute("uv",new ue(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fi extends qi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bl,this.normalScale=new Jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class z0 extends qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class O0 extends qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Na={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class B0{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const H0=new B0;class ta{constructor(e){this.manager=e!==void 0?e:H0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ta.DEFAULT_MATERIAL_NAME="__DEFAULT";class G0 extends ta{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Na.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=pr("img");function l(){u(),Na.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class W0 extends ta{constructor(e){super(e)}load(e,t,n,r){const s=new Ue,o=new G0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class ec extends ye{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class V0 extends ec{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Hs=new Xt,za=new it,Oa=new it;class X0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Jt(512,512),this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ko,this._frameExtents=new Jt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;za.setFromMatrixPosition(e.matrixWorld),t.position.copy(za),Oa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Oa),t.updateMatrixWorld(),Hs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class nc extends jl{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Y0 extends X0{constructor(){super(new nc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Z0 extends ec{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new Y0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class q0 extends je{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function Ba(i,e,t,n){const r=$0(n);switch(t){case Ul:return i*e;case Fl:return i*e;case Nl:return i*e*2;case Vo:return i*e/r.components*r.byteLength;case Xo:return i*e/r.components*r.byteLength;case zl:return i*e*2/r.components*r.byteLength;case Yo:return i*e*2/r.components*r.byteLength;case kl:return i*e*3/r.components*r.byteLength;case ln:return i*e*4/r.components*r.byteLength;case Zo:return i*e*4/r.components*r.byteLength;case jr:case Jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qr:case ts:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case co:case ho:return Math.max(i,16)*Math.max(e,8)/4;case lo:case uo:return Math.max(i,8)*Math.max(e,8)/2;case fo:case po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case go:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case bo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case _o:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case vo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case So:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case yo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case wo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case To:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ao:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Co:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case es:case Po:case Lo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ol:case Io:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Do:case Uo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $0(i){switch(i){case Ln:case Ll:return{byteLength:1,components:1};case fr:case Il:case mr:return{byteLength:2,components:1};case Go:case Wo:return{byteLength:2,components:4};case ci:case Ho:case pn:return{byteLength:4,components:1};case Dl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ic(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function K0(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){const g=d[h],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){const x=d[p];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var j0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J0=`#ifdef USE_ALPHAHASH
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
#endif`,Q0=`#ifdef USE_ALPHAMAP
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
#endif`,su=`#ifdef USE_BATCHING
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
#endif`,ou=`#ifdef USE_BATCHING
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
#endif`,_u=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Mu=`#define PI 3.141592653589793
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
} // validated`,vu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Su=`vec3 transformedNormal = objectNormal;
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
#endif`,yu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wu=`#ifdef USE_DISPLACEMENTMAP
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
#endif`,Uu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ku=`#ifdef USE_FOG
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gu=`uniform bool receiveShadow;
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
#endif`,Wu=`#ifdef USE_ENVMAP
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
material.diffuseColor = diffuseColor.rgb;`,Xu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yu=`BlinnPhongMaterial material;
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
#endif`,sd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,od=`#if defined( USE_POINTS_UV )
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
#endif`,_d=`#ifdef USE_NORMALMAP
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
#endif`,Md=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wd=`#ifdef OPAQUE
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
#endif`,Ud=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kd=`float getShadowMask() {
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
#endif`,Gd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wd=`#ifndef saturate
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
#endif`,Xd=`#ifdef USE_TRANSMISSION
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
#endif`,Yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
}`,sh=`#define DISTANCE
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
}`,oh=`varying vec3 vWorldDirection;
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
}`,_h=`#define PHONG
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
}`,Mh=`#define STANDARD
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
}`,vh=`#define STANDARD
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
}`,Sh=`#define TOON
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
}`,yh=`#define TOON
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
}`,wh=`uniform float size;
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
}`,$t={alphahash_fragment:j0,alphahash_pars_fragment:J0,alphamap_fragment:Q0,alphamap_pars_fragment:tu,alphatest_fragment:eu,alphatest_pars_fragment:nu,aomap_fragment:iu,aomap_pars_fragment:ru,batching_pars_vertex:su,batching_vertex:ou,begin_vertex:au,beginnormal_vertex:lu,bsdfs:cu,iridescence_fragment:uu,bumpmap_pars_fragment:du,clipping_planes_fragment:hu,clipping_planes_pars_fragment:fu,clipping_planes_pars_vertex:pu,clipping_planes_vertex:mu,color_fragment:xu,color_pars_fragment:gu,color_pars_vertex:bu,color_vertex:_u,common:Mu,cube_uv_reflection_fragment:vu,defaultnormal_vertex:Su,displacementmap_pars_vertex:yu,displacementmap_vertex:wu,emissivemap_fragment:Eu,emissivemap_pars_fragment:Tu,colorspace_fragment:Ru,colorspace_pars_fragment:Au,envmap_fragment:Cu,envmap_common_pars_fragment:Pu,envmap_pars_fragment:Lu,envmap_pars_vertex:Iu,envmap_physical_pars_fragment:Wu,envmap_vertex:Du,fog_vertex:Uu,fog_pars_vertex:ku,fog_fragment:Fu,fog_pars_fragment:Nu,gradientmap_pars_fragment:zu,lightmap_pars_fragment:Ou,lights_lambert_fragment:Bu,lights_lambert_pars_fragment:Hu,lights_pars_begin:Gu,lights_toon_fragment:Vu,lights_toon_pars_fragment:Xu,lights_phong_fragment:Yu,lights_phong_pars_fragment:Zu,lights_physical_fragment:qu,lights_physical_pars_fragment:$u,lights_fragment_begin:Ku,lights_fragment_maps:ju,lights_fragment_end:Ju,logdepthbuf_fragment:Qu,logdepthbuf_pars_fragment:td,logdepthbuf_pars_vertex:ed,logdepthbuf_vertex:nd,map_fragment:id,map_pars_fragment:rd,map_particle_fragment:sd,map_particle_pars_fragment:od,metalnessmap_fragment:ad,metalnessmap_pars_fragment:ld,morphinstance_vertex:cd,morphcolor_vertex:ud,morphnormal_vertex:dd,morphtarget_pars_vertex:hd,morphtarget_vertex:fd,normal_fragment_begin:pd,normal_fragment_maps:md,normal_pars_fragment:xd,normal_pars_vertex:gd,normal_vertex:bd,normalmap_pars_fragment:_d,clearcoat_normal_fragment_begin:Md,clearcoat_normal_fragment_maps:vd,clearcoat_pars_fragment:Sd,iridescence_pars_fragment:yd,opaque_fragment:wd,packing:Ed,premultiplied_alpha_fragment:Td,project_vertex:Rd,dithering_fragment:Ad,dithering_pars_fragment:Cd,roughnessmap_fragment:Pd,roughnessmap_pars_fragment:Ld,shadowmap_pars_fragment:Id,shadowmap_pars_vertex:Dd,shadowmap_vertex:Ud,shadowmask_pars_fragment:kd,skinbase_vertex:Fd,skinning_pars_vertex:Nd,skinning_vertex:zd,skinnormal_vertex:Od,specularmap_fragment:Bd,specularmap_pars_fragment:Hd,tonemapping_fragment:Gd,tonemapping_pars_fragment:Wd,transmission_fragment:Vd,transmission_pars_fragment:Xd,uv_pars_fragment:Yd,uv_pars_vertex:Zd,uv_vertex:qd,worldpos_vertex:$d,background_vert:Kd,background_frag:jd,backgroundCube_vert:Jd,backgroundCube_frag:Qd,cube_vert:th,cube_frag:eh,depth_vert:nh,depth_frag:ih,distanceRGBA_vert:rh,distanceRGBA_frag:sh,equirect_vert:oh,equirect_frag:ah,linedashed_vert:lh,linedashed_frag:ch,meshbasic_vert:uh,meshbasic_frag:dh,meshlambert_vert:hh,meshlambert_frag:fh,meshmatcap_vert:ph,meshmatcap_frag:mh,meshnormal_vert:xh,meshnormal_frag:gh,meshphong_vert:bh,meshphong_frag:_h,meshphysical_vert:Mh,meshphysical_frag:vh,meshtoon_vert:Sh,meshtoon_frag:yh,points_vert:wh,points_frag:Eh,shadow_vert:Th,shadow_frag:Rh,sprite_vert:Ah,sprite_frag:Ch},Ct={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},hn={basic:{uniforms:Fe([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Fe([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Wt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Fe([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Fe([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Fe([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Wt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Fe([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Fe([Ct.points,Ct.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Fe([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Fe([Ct.common,Ct.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Fe([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Fe([Ct.sprite,Ct.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Fe([Ct.common,Ct.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Fe([Ct.lights,Ct.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};hn.physical={uniforms:Fe([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Hr={r:0,b:0,g:0},Kn=new dn,Ph=new Xt;function Lh(i,e,t,n,r,s,o){const a=new Wt(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function g(S){let b=S.isScene===!0?S.background:null;return b&&b.isTexture&&(b=(S.backgroundBlurriness>0?t:e).get(b)),b}function x(S){let b=!1;const C=g(S);C===null?f(a,l):C&&C.isColor&&(f(C,1),b=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,b){const C=g(b);C&&(C.isCubeTexture||C.mapping===us)?(u===void 0&&(u=new Lt(new Vt(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:Vi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(y,R,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Kn.copy(b.backgroundRotation),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ph.makeRotationFromEuler(Kn)),u.material.toneMapped=ee.getTransfer(C.colorSpace)!==oe,(d!==C||h!==C.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=C,h=C.version,p=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Lt(new Xi(2,2),new xn({name:"BackgroundMaterial",uniforms:Vi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ee.getTransfer(C.colorSpace)!==oe,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||h!==C.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=C,h=C.version,p=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,b){S.getRGB(Hr,Kl(i)),n.buffers.color.setClear(Hr.r,Hr.g,Hr.b,b,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,b=1){a.set(S),l=b,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(a,l)},render:x,addToRenderList:m,dispose:M}}function Ih(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,o=!1;function a(_,I,N,P,L){let k=!1;const w=d(P,N,I);s!==w&&(s=w,c(s.object)),k=p(_,P,N,L),k&&g(_,P,N,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,b(_,I,N,P),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function d(_,I,N){const P=N.wireframe===!0;let L=n[_.id];L===void 0&&(L={},n[_.id]=L);let k=L[I.id];k===void 0&&(k={},L[I.id]=k);let w=k[P];return w===void 0&&(w=h(l()),k[P]=w),w}function h(_){const I=[],N=[],P=[];for(let L=0;L<t;L++)I[L]=0,N[L]=0,P[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:P,object:_,attributes:{},index:null}}function p(_,I,N,P){const L=s.attributes,k=I.attributes;let w=0;const T=N.getAttributes();for(const D in T)if(T[D].location>=0){const W=L[D];let Y=k[D];if(Y===void 0&&(D==="instanceMatrix"&&_.instanceMatrix&&(Y=_.instanceMatrix),D==="instanceColor"&&_.instanceColor&&(Y=_.instanceColor)),W===void 0||W.attribute!==Y||Y&&W.data!==Y.data)return!0;w++}return s.attributesNum!==w||s.index!==P}function g(_,I,N,P){const L={},k=I.attributes;let w=0;const T=N.getAttributes();for(const D in T)if(T[D].location>=0){let W=k[D];W===void 0&&(D==="instanceMatrix"&&_.instanceMatrix&&(W=_.instanceMatrix),D==="instanceColor"&&_.instanceColor&&(W=_.instanceColor));const Y={};Y.attribute=W,W&&W.data&&(Y.data=W.data),L[D]=Y,w++}s.attributes=L,s.attributesNum=w,s.index=P}function x(){const _=s.newAttributes;for(let I=0,N=_.length;I<N;I++)_[I]=0}function m(_){f(_,0)}function f(_,I){const N=s.newAttributes,P=s.enabledAttributes,L=s.attributeDivisors;N[_]=1,P[_]===0&&(i.enableVertexAttribArray(_),P[_]=1),L[_]!==I&&(i.vertexAttribDivisor(_,I),L[_]=I)}function M(){const _=s.newAttributes,I=s.enabledAttributes;for(let N=0,P=I.length;N<P;N++)I[N]!==_[N]&&(i.disableVertexAttribArray(N),I[N]=0)}function S(_,I,N,P,L,k,w){w===!0?i.vertexAttribIPointer(_,I,N,L,k):i.vertexAttribPointer(_,I,N,P,L,k)}function b(_,I,N,P){x();const L=P.attributes,k=N.getAttributes(),w=I.defaultAttributeValues;for(const T in k){const D=k[T];if(D.location>=0){let X=L[T];if(X===void 0&&(T==="instanceMatrix"&&_.instanceMatrix&&(X=_.instanceMatrix),T==="instanceColor"&&_.instanceColor&&(X=_.instanceColor)),X!==void 0){const W=X.normalized,Y=X.itemSize,U=e.get(X);if(U===void 0)continue;const K=U.buffer,H=U.type,B=U.bytesPerElement,Z=H===i.INT||H===i.UNSIGNED_INT||X.gpuType===Ho;if(X.isInterleavedBufferAttribute){const V=X.data,$=V.stride,j=X.offset;if(V.isInstancedInterleavedBuffer){for(let O=0;O<D.locationSize;O++)f(D.location+O,V.meshPerAttribute);_.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let O=0;O<D.locationSize;O++)m(D.location+O);i.bindBuffer(i.ARRAY_BUFFER,K);for(let O=0;O<D.locationSize;O++)S(D.location+O,Y/D.locationSize,H,W,$*B,(j+Y/D.locationSize*O)*B,Z)}else{if(X.isInstancedBufferAttribute){for(let V=0;V<D.locationSize;V++)f(D.location+V,X.meshPerAttribute);_.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let V=0;V<D.locationSize;V++)m(D.location+V);i.bindBuffer(i.ARRAY_BUFFER,K);for(let V=0;V<D.locationSize;V++)S(D.location+V,Y/D.locationSize,H,W,Y*B,Y/D.locationSize*V*B,Z)}}else if(w!==void 0){const W=w[T];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(D.location,W);break;case 3:i.vertexAttrib3fv(D.location,W);break;case 4:i.vertexAttrib4fv(D.location,W);break;default:i.vertexAttrib1fv(D.location,W)}}}}M()}function C(){E();for(const _ in n){const I=n[_];for(const N in I){const P=I[N];for(const L in P)u(P[L].object),delete P[L];delete I[N]}delete n[_]}}function y(_){if(n[_.id]===void 0)return;const I=n[_.id];for(const N in I){const P=I[N];for(const L in P)u(P[L].object),delete P[L];delete I[N]}delete n[_.id]}function R(_){for(const I in n){const N=n[I];if(N[_.id]===void 0)continue;const P=N[_.id];for(const L in P)u(P[L].object),delete P[L];delete N[_.id]}}function E(){v(),o=!0,s!==r&&(s=r,c(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:E,resetDefaultState:v,dispose:C,releaseStatesOfGeometry:y,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function Dh(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,n,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*h[x];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Uh(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==ln&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const E=R===mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Ln&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==pn&&!E)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,y=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:b,vertexTextures:C,maxSamples:y}}function kh(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new ni,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||r;return r=h,n=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,S=M*4;let b=f.clippingState||null;l.value=b,b=u(g,h,S,p);for(let C=0;C!==S;++C)b[C]=t[C];f.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,p,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const f=p+x*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,b=p;S!==x;++S,b+=4)o.copy(d[S]).applyMatrix4(M,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Fh(i){let e=new WeakMap;function t(o,a){return a===so?o.mapping=Oi:a===oo&&(o.mapping=Bi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===so||a===oo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new P0(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ii=4,Ha=[.125,.215,.35,.446,.526,.582],si=20,Gs=new nc,Ga=new Wt;let Ws=null,Vs=0,Xs=0,Ys=!1;const ii=(1+Math.sqrt(5))/2,Ri=1/ii,Wa=[new it(-ii,Ri,0),new it(ii,Ri,0),new it(-Ri,0,ii),new it(Ri,0,ii),new it(0,ii,-Ri),new it(0,ii,Ri),new it(-1,1,-1),new it(1,1,-1),new it(-1,1,1),new it(1,1,1)],Nh=new it;class Va{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=Nh}=s;Ws=this._renderer.getRenderTarget(),Vs=this._renderer.getActiveCubeFace(),Xs=this._renderer.getActiveMipmapLevel(),Ys=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Za(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ya(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ws,Vs,Xs),this._renderer.xr.enabled=Ys,e.scissorTest=!1,Gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oi||e.mapping===Bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ws=this._renderer.getRenderTarget(),Vs=this._renderer.getActiveCubeFace(),Xs=this._renderer.getActiveMipmapLevel(),Ys=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:mr,format:ln,colorSpace:Wi,depthBuffer:!1},r=Xa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xa(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zh(s)),this._blurMaterial=Oh(s,e,t)}return r}_compileMaterial(e){const t=new Lt(this._lodPlanes[0],e);this._renderer.compile(t,Gs)}_sceneToCubeUV(e,t,n,r,s){const l=new je(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Ga),d.toneMapping=Vn,d.autoClear=!1;const g=new Zl({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),x=new Lt(new Vt,g);let m=!1;const f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,m=!0):(g.color.copy(Ga),m=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):S===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));const b=this._cubeSize;Gr(r,S*b,M>2?b:0,b,b),d.setRenderTarget(r),m&&d.render(x,l),d.render(e,l)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=p,d.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Oi||e.mapping===Bi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Za()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ya());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Lt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Gr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Gs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Wa[(r-s-1)%Wa.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Lt(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*si-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):si;m>si&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${si}`);const f=[];let M=0;for(let R=0;R<si;++R){const E=R/x,v=Math.exp(-E*E/2);f.push(v),R===0?M+=v:R<m&&(M+=2*v)}for(let R=0;R<f.length;R++)f[R]=f[R]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-n;const b=this._sizeLods[r],C=3*b*(r>S-Ii?r-S+Ii:0),y=4*(this._cubeSize-b);Gr(t,C,y,3*b,2*b),l.setRenderTarget(t),l.render(d,Gs)}}function zh(i){const e=[],t=[],n=[];let r=i;const s=i-Ii+1+Ha.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Ii?l=Ha[o-i+Ii-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,x=3,m=2,f=1,M=new Float32Array(x*g*p),S=new Float32Array(m*g*p),b=new Float32Array(f*g*p);for(let y=0;y<p;y++){const R=y%3*2/3-1,E=y>2?0:-1,v=[R,E,0,R+2/3,E,0,R+2/3,E+1,0,R,E,0,R+2/3,E+1,0,R,E+1,0];M.set(v,x*g*y),S.set(h,m*g*y);const _=[y,y,y,y,y,y];b.set(_,f*g*y)}const C=new we;C.setAttribute("position",new pe(M,x)),C.setAttribute("uv",new pe(S,m)),C.setAttribute("faceIndex",new pe(b,f)),e.push(C),r>Ii&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xa(i,e,t){const n=new ui(i,e,t);return n.texture.mapping=us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Oh(i,e,t){const n=new Float32Array(si),r=new it(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ea(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Ya(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ea(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Za(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function ea(){return`

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
	`}function Bh(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===so||l===oo,u=l===Oi||l===Bi;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Va(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Va(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Hh(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ei("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Gh(i,e,t,n){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],i.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,g=d.attributes.position;let x=0;if(p!==null){const M=p.array;x=p.version;for(let S=0,b=M.length;S<b;S+=3){const C=M[S+0],y=M[S+1],R=M[S+2];h.push(C,y,y,R,R,C)}}else if(g!==void 0){const M=g.array;x=g.version;for(let S=0,b=M.length/3-1;S<b;S+=3){const C=S+0,y=S+1,R=S+2;h.push(C,y,y,R,R,C)}}else return;const m=new(Gl(h)?$l:ql)(h,1);m.version=x;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Wh(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){i.drawElements(n,p,s,h*o),t.update(p,n,1)}function c(h,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,h*o,g),t.update(p,n,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,h,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function d(h,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,h,0,x,0,g);let f=0;for(let M=0;M<g;M++)f+=p[M]*x[M];t.update(f,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Vh(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Xh(i,e,t){const n=new WeakMap,r=new Me;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let _=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",_)};var p=_;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let b=0;g===!0&&(b=1),x===!0&&(b=2),m===!0&&(b=3);let C=a.attributes.position.count*b,y=1;C>e.maxTextureSize&&(y=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*y*4*d),E=new Wl(R,C,y,d);E.type=pn,E.needsUpdate=!0;const v=b*4;for(let I=0;I<d;I++){const N=f[I],P=M[I],L=S[I],k=C*y*4*I;for(let w=0;w<N.count;w++){const T=w*v;g===!0&&(r.fromBufferAttribute(N,w),R[k+T+0]=r.x,R[k+T+1]=r.y,R[k+T+2]=r.z,R[k+T+3]=0),x===!0&&(r.fromBufferAttribute(P,w),R[k+T+4]=r.x,R[k+T+5]=r.y,R[k+T+6]=r.z,R[k+T+7]=0),m===!0&&(r.fromBufferAttribute(L,w),R[k+T+8]=r.x,R[k+T+9]=r.y,R[k+T+10]=r.z,R[k+T+11]=L.itemSize===4?r.w:1)}}h={count:d,texture:E,size:new Jt(C,y)},n.set(a,h),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Yh(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const rc=new Ue,qa=new tc(1,1),sc=new Wl,oc=new f0,ac=new Jl,$a=[],Ka=[],ja=new Float32Array(16),Ja=new Float32Array(9),Qa=new Float32Array(4);function $i(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=$a[r];if(s===void 0&&(s=new Float32Array(r),$a[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Ee(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Te(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function hs(i,e){let t=Ka[e];t===void 0&&(t=new Int32Array(e),Ka[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Zh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function qh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ee(t,e))return;i.uniform2fv(this.addr,e),Te(t,e)}}function $h(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ee(t,e))return;i.uniform3fv(this.addr,e),Te(t,e)}}function Kh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ee(t,e))return;i.uniform4fv(this.addr,e),Te(t,e)}}function jh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ee(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Te(t,e)}else{if(Ee(t,n))return;Qa.set(n),i.uniformMatrix2fv(this.addr,!1,Qa),Te(t,n)}}function Jh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ee(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Te(t,e)}else{if(Ee(t,n))return;Ja.set(n),i.uniformMatrix3fv(this.addr,!1,Ja),Te(t,n)}}function Qh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ee(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Te(t,e)}else{if(Ee(t,n))return;ja.set(n),i.uniformMatrix4fv(this.addr,!1,ja),Te(t,n)}}function tf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ef(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ee(t,e))return;i.uniform2iv(this.addr,e),Te(t,e)}}function nf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ee(t,e))return;i.uniform3iv(this.addr,e),Te(t,e)}}function rf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ee(t,e))return;i.uniform4iv(this.addr,e),Te(t,e)}}function sf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ee(t,e))return;i.uniform2uiv(this.addr,e),Te(t,e)}}function af(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ee(t,e))return;i.uniform3uiv(this.addr,e),Te(t,e)}}function lf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ee(t,e))return;i.uniform4uiv(this.addr,e),Te(t,e)}}function cf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(qa.compareFunction=Hl,s=qa):s=rc,t.setTexture2D(e||s,r)}function uf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||oc,r)}function df(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ac,r)}function hf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||sc,r)}function ff(i){switch(i){case 5126:return Zh;case 35664:return qh;case 35665:return $h;case 35666:return Kh;case 35674:return jh;case 35675:return Jh;case 35676:return Qh;case 5124:case 35670:return tf;case 35667:case 35671:return ef;case 35668:case 35672:return nf;case 35669:case 35673:return rf;case 5125:return sf;case 36294:return of;case 36295:return af;case 36296:return lf;case 35678:case 36198:case 36298:case 36306:case 35682:return cf;case 35679:case 36299:case 36307:return uf;case 35680:case 36300:case 36308:case 36293:return df;case 36289:case 36303:case 36311:case 36292:return hf}}function pf(i,e){i.uniform1fv(this.addr,e)}function mf(i,e){const t=$i(e,this.size,2);i.uniform2fv(this.addr,t)}function xf(i,e){const t=$i(e,this.size,3);i.uniform3fv(this.addr,t)}function gf(i,e){const t=$i(e,this.size,4);i.uniform4fv(this.addr,t)}function bf(i,e){const t=$i(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _f(i,e){const t=$i(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Mf(i,e){const t=$i(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function vf(i,e){i.uniform1iv(this.addr,e)}function Sf(i,e){i.uniform2iv(this.addr,e)}function yf(i,e){i.uniform3iv(this.addr,e)}function wf(i,e){i.uniform4iv(this.addr,e)}function Ef(i,e){i.uniform1uiv(this.addr,e)}function Tf(i,e){i.uniform2uiv(this.addr,e)}function Rf(i,e){i.uniform3uiv(this.addr,e)}function Af(i,e){i.uniform4uiv(this.addr,e)}function Cf(i,e,t){const n=this.cache,r=e.length,s=hs(t,r);Ee(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||rc,s[o])}function Pf(i,e,t){const n=this.cache,r=e.length,s=hs(t,r);Ee(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||oc,s[o])}function Lf(i,e,t){const n=this.cache,r=e.length,s=hs(t,r);Ee(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ac,s[o])}function If(i,e,t){const n=this.cache,r=e.length,s=hs(t,r);Ee(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||sc,s[o])}function Df(i){switch(i){case 5126:return pf;case 35664:return mf;case 35665:return xf;case 35666:return gf;case 35674:return bf;case 35675:return _f;case 35676:return Mf;case 5124:case 35670:return vf;case 35667:case 35671:return Sf;case 35668:case 35672:return yf;case 35669:case 35673:return wf;case 5125:return Ef;case 36294:return Tf;case 36295:return Rf;case 36296:return Af;case 35678:case 36198:case 36298:case 36306:case 35682:return Cf;case 35679:case 36299:case 36307:return Pf;case 35680:case 36300:case 36308:case 36293:return Lf;case 36289:case 36303:case 36311:case 36292:return If}}class Uf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ff(t.type)}}class kf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Df(t.type)}}class Ff{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Zs=/(\w+)(\])?(\[|\.)?/g;function tl(i,e){i.seq.push(e),i.map[e.id]=e}function Nf(i,e,t){const n=i.name,r=n.length;for(Zs.lastIndex=0;;){const s=Zs.exec(n),o=Zs.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){tl(t,c===void 0?new Uf(a,i,e):new kf(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Ff(a),tl(t,d)),t=d}}}class ns{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Nf(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function el(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const zf=37297;let Of=0;function Bf(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const nl=new qt;function Hf(i){ee._getMatrix(nl,ee.workingColorSpace,i);const e=`mat3( ${nl.elements.map(t=>t.toFixed(4))} )`;switch(ee.getTransfer(i)){case rs:return[e,"LinearTransferOETF"];case oe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function il(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Bf(i.getShaderSource(e),o)}else return r}function Gf(i,e){const t=Hf(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Wf(i,e){let t;switch(e){case Bc:t="Linear";break;case Hc:t="Reinhard";break;case Gc:t="Cineon";break;case Cl:t="ACESFilmic";break;case Vc:t="AgX";break;case Xc:t="Neutral";break;case Wc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wr=new it;function Vf(){ee.getLuminanceCoefficients(Wr);const i=Wr.x.toFixed(4),e=Wr.y.toFixed(4),t=Wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function Yf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Zf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function dr(i){return i!==""}function rl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fo(i){return i.replace(qf,Kf)}const $f=new Map;function Kf(i,e){let t=$t[e];if(t===void 0){const n=$f.get(e);if(n!==void 0)t=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Fo(t)}const jf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ol(i){return i.replace(jf,Jf)}function Jf(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function al(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Qf(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Tl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wn&&(e="SHADOWMAP_TYPE_VSM"),e}function tp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Oi:case Bi:e="ENVMAP_TYPE_CUBE";break;case us:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ep(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bi:e="ENVMAP_MODE_REFRACTION";break}return e}function np(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Al:e="ENVMAP_BLENDING_MULTIPLY";break;case zc:e="ENVMAP_BLENDING_MIX";break;case Oc:e="ENVMAP_BLENDING_ADD";break}return e}function ip(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function rp(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Qf(t),c=tp(t),u=ep(t),d=np(t),h=ip(t),p=Xf(t),g=Yf(s),x=r.createProgram();let m,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(dr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(dr).join(`
`),f.length>0&&(f+=`
`)):(m=[al(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),f=[al(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?$t.tonemapping_pars_fragment:"",t.toneMapping!==Vn?Wf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Gf("linearToOutputTexel",t.outputColorSpace),Vf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),o=Fo(o),o=rl(o,t),o=sl(o,t),a=Fo(a),a=rl(a,t),a=sl(a,t),o=ol(o),a=ol(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===fa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=M+m+o,b=M+f+a,C=el(r,r.VERTEX_SHADER,S),y=el(r,r.FRAGMENT_SHADER,b);r.attachShader(x,C),r.attachShader(x,y),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(I){if(i.debug.checkShaderErrors){const N=r.getProgramInfoLog(x).trim(),P=r.getShaderInfoLog(C).trim(),L=r.getShaderInfoLog(y).trim();let k=!0,w=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,C,y);else{const T=il(r,C,"vertex"),D=il(r,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+T+`
`+D)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(P===""||L==="")&&(w=!1);w&&(I.diagnostics={runnable:k,programLog:N,vertexShader:{log:P,prefix:m},fragmentShader:{log:L,prefix:f}})}r.deleteShader(C),r.deleteShader(y),E=new ns(r,x),v=Zf(r,x)}let E;this.getUniforms=function(){return E===void 0&&R(this),E};let v;this.getAttributes=function(){return v===void 0&&R(this),v};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(x,zf)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Of++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=y,this}let sp=0;class op{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ap(e),t.set(e,n)),n}}class ap{constructor(e){this.id=sp++,this.code=e,this.usedTimes=0}}function lp(i,e,t,n,r,s,o){const a=new Xl,l=new op,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,_,I,N,P){const L=N.fog,k=P.geometry,w=v.isMeshStandardMaterial?N.environment:null,T=(v.isMeshStandardMaterial?t:e).get(v.envMap||w),D=T&&T.mapping===us?T.image.height:null,X=g[v.type];v.precision!==null&&(p=r.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const W=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Y=W!==void 0?W.length:0;let U=0;k.morphAttributes.position!==void 0&&(U=1),k.morphAttributes.normal!==void 0&&(U=2),k.morphAttributes.color!==void 0&&(U=3);let K,H,B,Z;if(X){const ne=hn[X];K=ne.vertexShader,H=ne.fragmentShader}else K=v.vertexShader,H=v.fragmentShader,l.update(v),B=l.getVertexShaderID(v),Z=l.getFragmentShaderID(v);const V=i.getRenderTarget(),$=i.state.buffers.depth.getReversed(),j=P.isInstancedMesh===!0,O=P.isBatchedMesh===!0,q=!!v.map,ut=!!v.matcap,ht=!!T,G=!!v.aoMap,mt=!!v.lightMap,nt=!!v.bumpMap,st=!!v.normalMap,ct=!!v.displacementMap,et=!!v.emissiveMap,tt=!!v.metalnessMap,F=!!v.roughnessMap,A=v.anisotropy>0,J=v.clearcoat>0,ot=v.dispersion>0,dt=v.iridescence>0,lt=v.sheen>0,Et=v.transmission>0,gt=A&&!!v.anisotropyMap,_t=J&&!!v.clearcoatMap,zt=J&&!!v.clearcoatNormalMap,Mt=J&&!!v.clearcoatRoughnessMap,At=dt&&!!v.iridescenceMap,kt=dt&&!!v.iridescenceThicknessMap,Ft=lt&&!!v.sheenColorMap,St=lt&&!!v.sheenRoughnessMap,Nt=!!v.specularMap,Ut=!!v.specularColorMap,Yt=!!v.specularIntensityMap,Q=Et&&!!v.transmissionMap,yt=Et&&!!v.thicknessMap,xt=!!v.gradientMap,bt=!!v.alphaMap,wt=v.alphaTest>0,Tt=!!v.alphaHash,Rt=!!v.extensions;let Zt=Vn;v.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Zt=i.toneMapping);const me={shaderID:X,shaderType:v.type,shaderName:v.name,vertexShader:K,fragmentShader:H,defines:v.defines,customVertexShaderID:B,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:O,batchingColor:O&&P._colorsTexture!==null,instancing:j,instancingColor:j&&P.instanceColor!==null,instancingMorph:j&&P.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:V===null?i.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Wi,alphaToCoverage:!!v.alphaToCoverage,map:q,matcap:ut,envMap:ht,envMapMode:ht&&T.mapping,envMapCubeUVHeight:D,aoMap:G,lightMap:mt,bumpMap:nt,normalMap:st,displacementMap:h&&ct,emissiveMap:et,normalMapObjectSpace:st&&v.normalMapType===$c,normalMapTangentSpace:st&&v.normalMapType===Bl,metalnessMap:tt,roughnessMap:F,anisotropy:A,anisotropyMap:gt,clearcoat:J,clearcoatMap:_t,clearcoatNormalMap:zt,clearcoatRoughnessMap:Mt,dispersion:ot,iridescence:dt,iridescenceMap:At,iridescenceThicknessMap:kt,sheen:lt,sheenColorMap:Ft,sheenRoughnessMap:St,specularMap:Nt,specularColorMap:Ut,specularIntensityMap:Yt,transmission:Et,transmissionMap:Q,thicknessMap:yt,gradientMap:xt,opaque:v.transparent===!1&&v.blending===Di&&v.alphaToCoverage===!1,alphaMap:bt,alphaTest:wt,alphaHash:Tt,combine:v.combine,mapUv:q&&x(v.map.channel),aoMapUv:G&&x(v.aoMap.channel),lightMapUv:mt&&x(v.lightMap.channel),bumpMapUv:nt&&x(v.bumpMap.channel),normalMapUv:st&&x(v.normalMap.channel),displacementMapUv:ct&&x(v.displacementMap.channel),emissiveMapUv:et&&x(v.emissiveMap.channel),metalnessMapUv:tt&&x(v.metalnessMap.channel),roughnessMapUv:F&&x(v.roughnessMap.channel),anisotropyMapUv:gt&&x(v.anisotropyMap.channel),clearcoatMapUv:_t&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:zt&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:St&&x(v.sheenRoughnessMap.channel),specularMapUv:Nt&&x(v.specularMap.channel),specularColorMapUv:Ut&&x(v.specularColorMap.channel),specularIntensityMapUv:Yt&&x(v.specularIntensityMap.channel),transmissionMapUv:Q&&x(v.transmissionMap.channel),thicknessMapUv:yt&&x(v.thicknessMap.channel),alphaMapUv:bt&&x(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(st||A),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!k.attributes.uv&&(q||bt),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:$,skinning:P.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:U,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Zt,decodeVideoTexture:q&&v.map.isVideoTexture===!0&&ee.getTransfer(v.map.colorSpace)===oe,decodeVideoTextureEmissive:et&&v.emissiveMap.isVideoTexture===!0&&ee.getTransfer(v.emissiveMap.colorSpace)===oe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===sn,flipSided:v.side===ze,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Rt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&v.extensions.multiDraw===!0||O)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function f(v){const _=[];if(v.shaderID?_.push(v.shaderID):(_.push(v.customVertexShaderID),_.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)_.push(I),_.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(M(_,v),S(_,v),_.push(i.outputColorSpace)),_.push(v.customProgramCacheKey),_.join()}function M(v,_){v.push(_.precision),v.push(_.outputColorSpace),v.push(_.envMapMode),v.push(_.envMapCubeUVHeight),v.push(_.mapUv),v.push(_.alphaMapUv),v.push(_.lightMapUv),v.push(_.aoMapUv),v.push(_.bumpMapUv),v.push(_.normalMapUv),v.push(_.displacementMapUv),v.push(_.emissiveMapUv),v.push(_.metalnessMapUv),v.push(_.roughnessMapUv),v.push(_.anisotropyMapUv),v.push(_.clearcoatMapUv),v.push(_.clearcoatNormalMapUv),v.push(_.clearcoatRoughnessMapUv),v.push(_.iridescenceMapUv),v.push(_.iridescenceThicknessMapUv),v.push(_.sheenColorMapUv),v.push(_.sheenRoughnessMapUv),v.push(_.specularMapUv),v.push(_.specularColorMapUv),v.push(_.specularIntensityMapUv),v.push(_.transmissionMapUv),v.push(_.thicknessMapUv),v.push(_.combine),v.push(_.fogExp2),v.push(_.sizeAttenuation),v.push(_.morphTargetsCount),v.push(_.morphAttributeCount),v.push(_.numDirLights),v.push(_.numPointLights),v.push(_.numSpotLights),v.push(_.numSpotLightMaps),v.push(_.numHemiLights),v.push(_.numRectAreaLights),v.push(_.numDirLightShadows),v.push(_.numPointLightShadows),v.push(_.numSpotLightShadows),v.push(_.numSpotLightShadowsWithMaps),v.push(_.numLightProbes),v.push(_.shadowMapType),v.push(_.toneMapping),v.push(_.numClippingPlanes),v.push(_.numClipIntersection),v.push(_.depthPacking)}function S(v,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),v.push(a.mask)}function b(v){const _=g[v.type];let I;if(_){const N=hn[_];I=T0.clone(N.uniforms)}else I=v.uniforms;return I}function C(v,_){let I;for(let N=0,P=u.length;N<P;N++){const L=u[N];if(L.cacheKey===_){I=L,++I.usedTimes;break}}return I===void 0&&(I=new rp(i,_,v,s),u.push(I)),I}function y(v){if(--v.usedTimes===0){const _=u.indexOf(v);u[_]=u[u.length-1],u.pop(),v.destroy()}}function R(v){l.remove(v)}function E(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:C,releaseProgram:y,releaseShaderCache:R,programs:u,dispose:E}}function cp(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function up(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ll(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function cl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,h,p,g,x,m){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=x,f.group=m),e++,f}function a(d,h,p,g,x,m){const f=o(d,h,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(d,h,p,g,x,m){const f=o(d,h,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||up),n.length>1&&n.sort(h||ll),r.length>1&&r.sort(h||ll)}function u(){for(let d=e,h=i.length;d<h;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function dp(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new cl,i.set(n,[o])):r>=s.length?(o=new cl,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function hp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new it,color:new Wt};break;case"SpotLight":t={position:new it,direction:new it,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new it,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new it,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":t={color:new Wt,position:new it,halfWidth:new it,halfHeight:new it};break}return i[e.id]=t,t}}}function fp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let pp=0;function mp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function xp(i){const e=new hp,t=fp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new it);const r=new it,s=new Xt,o=new Xt;function a(c){let u=0,d=0,h=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,M=0,S=0,b=0,C=0,y=0,R=0;c.sort(mp);for(let v=0,_=c.length;v<_;v++){const I=c[v],N=I.color,P=I.intensity,L=I.distance,k=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=N.r*P,d+=N.g*P,h+=N.b*P;else if(I.isLightProbe){for(let w=0;w<9;w++)n.probe[w].addScaledVector(I.sh.coefficients[w],P);R++}else if(I.isDirectionalLight){const w=e.get(I);if(w.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const T=I.shadow,D=t.get(I);D.shadowIntensity=T.intensity,D.shadowBias=T.bias,D.shadowNormalBias=T.normalBias,D.shadowRadius=T.radius,D.shadowMapSize=T.mapSize,n.directionalShadow[p]=D,n.directionalShadowMap[p]=k,n.directionalShadowMatrix[p]=I.shadow.matrix,M++}n.directional[p]=w,p++}else if(I.isSpotLight){const w=e.get(I);w.position.setFromMatrixPosition(I.matrixWorld),w.color.copy(N).multiplyScalar(P),w.distance=L,w.coneCos=Math.cos(I.angle),w.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),w.decay=I.decay,n.spot[x]=w;const T=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,T.updateMatrices(I),I.castShadow&&y++),n.spotLightMatrix[x]=T.matrix,I.castShadow){const D=t.get(I);D.shadowIntensity=T.intensity,D.shadowBias=T.bias,D.shadowNormalBias=T.normalBias,D.shadowRadius=T.radius,D.shadowMapSize=T.mapSize,n.spotShadow[x]=D,n.spotShadowMap[x]=k,b++}x++}else if(I.isRectAreaLight){const w=e.get(I);w.color.copy(N).multiplyScalar(P),w.halfWidth.set(I.width*.5,0,0),w.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=w,m++}else if(I.isPointLight){const w=e.get(I);if(w.color.copy(I.color).multiplyScalar(I.intensity),w.distance=I.distance,w.decay=I.decay,I.castShadow){const T=I.shadow,D=t.get(I);D.shadowIntensity=T.intensity,D.shadowBias=T.bias,D.shadowNormalBias=T.normalBias,D.shadowRadius=T.radius,D.shadowMapSize=T.mapSize,D.shadowCameraNear=T.camera.near,D.shadowCameraFar=T.camera.far,n.pointShadow[g]=D,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=I.shadow.matrix,S++}n.point[g]=w,g++}else if(I.isHemisphereLight){const w=e.get(I);w.skyColor.copy(I.color).multiplyScalar(P),w.groundColor.copy(I.groundColor).multiplyScalar(P),n.hemi[f]=w,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const E=n.hash;(E.directionalLength!==p||E.pointLength!==g||E.spotLength!==x||E.rectAreaLength!==m||E.hemiLength!==f||E.numDirectionalShadows!==M||E.numPointShadows!==S||E.numSpotShadows!==b||E.numSpotMaps!==C||E.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=b+C-y,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=R,E.directionalLength=p,E.pointLength=g,E.spotLength=x,E.rectAreaLength=m,E.hemiLength=f,E.numDirectionalShadows=M,E.numPointShadows=S,E.numSpotShadows=b,E.numSpotMaps=C,E.numLightProbes=R,n.version=pp++)}function l(c,u){let d=0,h=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){const S=c[f];if(S.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),d++}else if(S.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const b=n.point[h];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const b=n.hemi[x];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function ul(i){const e=new xp(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function gp(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ul(i),e.set(r,[a])):s>=o.length?(a=new ul(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const bp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_p=`uniform sampler2D shadow_pass;
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
}`;function Mp(i,e,t){let n=new Ko;const r=new Jt,s=new Jt,o=new Me,a=new z0({depthPacking:qc}),l=new O0,c={},u=t.maxTextureSize,d={[mn]:ze,[ze]:mn,[sn]:sn},h=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Jt},radius:{value:4}},vertexShader:bp,fragmentShader:_p}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Lt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tl;let f=this.type;this.render=function(y,R,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const v=i.getRenderTarget(),_=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Wn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const P=f!==wn&&this.type===wn,L=f===wn&&this.type!==wn;for(let k=0,w=y.length;k<w;k++){const T=y[k],D=T.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",T,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const X=D.getFrameExtents();if(r.multiply(X),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,D.mapSize.y=s.y)),D.map===null||P===!0||L===!0){const Y=this.type!==wn?{minFilter:Ye,magFilter:Ye}:{};D.map!==null&&D.map.dispose(),D.map=new ui(r.x,r.y,Y),D.map.texture.name=T.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();const W=D.getViewportCount();for(let Y=0;Y<W;Y++){const U=D.getViewport(Y);o.set(s.x*U.x,s.y*U.y,s.x*U.z,s.y*U.w),N.viewport(o),D.updateMatrices(T,Y),n=D.getFrustum(),b(R,E,D.camera,T,this.type)}D.isPointLightShadow!==!0&&this.type===wn&&M(D,E),D.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(v,_,I)};function M(y,R){const E=e.update(x);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new ui(r.x,r.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(R,null,E,h,x,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(R,null,E,p,x,null)}function S(y,R,E,v){let _=null;const I=E.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(I!==void 0)_=I;else if(_=E.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const N=_.uuid,P=R.uuid;let L=c[N];L===void 0&&(L={},c[N]=L);let k=L[P];k===void 0&&(k=_.clone(),L[P]=k,R.addEventListener("dispose",C)),_=k}if(_.visible=R.visible,_.wireframe=R.wireframe,v===wn?_.side=R.shadowSide!==null?R.shadowSide:R.side:_.side=R.shadowSide!==null?R.shadowSide:d[R.side],_.alphaMap=R.alphaMap,_.alphaTest=R.alphaTest,_.map=R.map,_.clipShadows=R.clipShadows,_.clippingPlanes=R.clippingPlanes,_.clipIntersection=R.clipIntersection,_.displacementMap=R.displacementMap,_.displacementScale=R.displacementScale,_.displacementBias=R.displacementBias,_.wireframeLinewidth=R.wireframeLinewidth,_.linewidth=R.linewidth,E.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const N=i.properties.get(_);N.light=E}return _}function b(y,R,E,v,_){if(y.visible===!1)return;if(y.layers.test(R.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&_===wn)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,y.matrixWorld);const P=e.update(y),L=y.material;if(Array.isArray(L)){const k=P.groups;for(let w=0,T=k.length;w<T;w++){const D=k[w],X=L[D.materialIndex];if(X&&X.visible){const W=S(y,X,v,_);y.onBeforeShadow(i,y,R,E,P,W,D),i.renderBufferDirect(E,null,P,W,y,D),y.onAfterShadow(i,y,R,E,P,W,D)}}}else if(L.visible){const k=S(y,L,v,_);y.onBeforeShadow(i,y,R,E,P,k,null),i.renderBufferDirect(E,null,P,k,y,null),y.onAfterShadow(i,y,R,E,P,k,null)}}const N=y.children;for(let P=0,L=N.length;P<L;P++)b(N[P],R,E,v,_)}function C(y){y.target.removeEventListener("dispose",C);for(const E in c){const v=c[E],_=y.target.uuid;_ in v&&(v[_].dispose(),delete v[_])}}}const vp={[Js]:Qs,[to]:io,[eo]:ro,[zi]:no,[Qs]:Js,[io]:to,[ro]:eo,[no]:zi};function Sp(i,e){function t(){let Q=!1;const yt=new Me;let xt=null;const bt=new Me(0,0,0,0);return{setMask:function(wt){xt!==wt&&!Q&&(i.colorMask(wt,wt,wt,wt),xt=wt)},setLocked:function(wt){Q=wt},setClear:function(wt,Tt,Rt,Zt,me){me===!0&&(wt*=Zt,Tt*=Zt,Rt*=Zt),yt.set(wt,Tt,Rt,Zt),bt.equals(yt)===!1&&(i.clearColor(wt,Tt,Rt,Zt),bt.copy(yt))},reset:function(){Q=!1,xt=null,bt.set(-1,0,0,0)}}}function n(){let Q=!1,yt=!1,xt=null,bt=null,wt=null;return{setReversed:function(Tt){if(yt!==Tt){const Rt=e.get("EXT_clip_control");yt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT);const Zt=wt;wt=null,this.setClear(Zt)}yt=Tt},getReversed:function(){return yt},setTest:function(Tt){Tt?V(i.DEPTH_TEST):$(i.DEPTH_TEST)},setMask:function(Tt){xt!==Tt&&!Q&&(i.depthMask(Tt),xt=Tt)},setFunc:function(Tt){if(yt&&(Tt=vp[Tt]),bt!==Tt){switch(Tt){case Js:i.depthFunc(i.NEVER);break;case Qs:i.depthFunc(i.ALWAYS);break;case to:i.depthFunc(i.LESS);break;case zi:i.depthFunc(i.LEQUAL);break;case eo:i.depthFunc(i.EQUAL);break;case no:i.depthFunc(i.GEQUAL);break;case io:i.depthFunc(i.GREATER);break;case ro:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}bt=Tt}},setLocked:function(Tt){Q=Tt},setClear:function(Tt){wt!==Tt&&(yt&&(Tt=1-Tt),i.clearDepth(Tt),wt=Tt)},reset:function(){Q=!1,xt=null,bt=null,wt=null,yt=!1}}}function r(){let Q=!1,yt=null,xt=null,bt=null,wt=null,Tt=null,Rt=null,Zt=null,me=null;return{setTest:function(ne){Q||(ne?V(i.STENCIL_TEST):$(i.STENCIL_TEST))},setMask:function(ne){yt!==ne&&!Q&&(i.stencilMask(ne),yt=ne)},setFunc:function(ne,Re,Qe){(xt!==ne||bt!==Re||wt!==Qe)&&(i.stencilFunc(ne,Re,Qe),xt=ne,bt=Re,wt=Qe)},setOp:function(ne,Re,Qe){(Tt!==ne||Rt!==Re||Zt!==Qe)&&(i.stencilOp(ne,Re,Qe),Tt=ne,Rt=Re,Zt=Qe)},setLocked:function(ne){Q=ne},setClear:function(ne){me!==ne&&(i.clearStencil(ne),me=ne)},reset:function(){Q=!1,yt=null,xt=null,bt=null,wt=null,Tt=null,Rt=null,Zt=null,me=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,p=[],g=null,x=!1,m=null,f=null,M=null,S=null,b=null,C=null,y=null,R=new Wt(0,0,0),E=0,v=!1,_=null,I=null,N=null,P=null,L=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let w=!1,T=0;const D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(T=parseFloat(/^WebGL (\d)/.exec(D)[1]),w=T>=1):D.indexOf("OpenGL ES")!==-1&&(T=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),w=T>=2);let X=null,W={};const Y=i.getParameter(i.SCISSOR_BOX),U=i.getParameter(i.VIEWPORT),K=new Me().fromArray(Y),H=new Me().fromArray(U);function B(Q,yt,xt,bt){const wt=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(Q,Tt),i.texParameteri(Q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<xt;Rt++)Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,bt,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(yt+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return Tt}const Z={};Z[i.TEXTURE_2D]=B(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=B(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=B(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=B(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),V(i.DEPTH_TEST),o.setFunc(zi),nt(!1),st(aa),V(i.CULL_FACE),G(Wn);function V(Q){u[Q]!==!0&&(i.enable(Q),u[Q]=!0)}function $(Q){u[Q]!==!1&&(i.disable(Q),u[Q]=!1)}function j(Q,yt){return d[Q]!==yt?(i.bindFramebuffer(Q,yt),d[Q]=yt,Q===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=yt),Q===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function O(Q,yt){let xt=p,bt=!1;if(Q){xt=h.get(yt),xt===void 0&&(xt=[],h.set(yt,xt));const wt=Q.textures;if(xt.length!==wt.length||xt[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,Rt=wt.length;Tt<Rt;Tt++)xt[Tt]=i.COLOR_ATTACHMENT0+Tt;xt.length=wt.length,bt=!0}}else xt[0]!==i.BACK&&(xt[0]=i.BACK,bt=!0);bt&&i.drawBuffers(xt)}function q(Q){return g!==Q?(i.useProgram(Q),g=Q,!0):!1}const ut={[ri]:i.FUNC_ADD,[vc]:i.FUNC_SUBTRACT,[Sc]:i.FUNC_REVERSE_SUBTRACT};ut[yc]=i.MIN,ut[wc]=i.MAX;const ht={[Ec]:i.ZERO,[Tc]:i.ONE,[Rc]:i.SRC_COLOR,[Ks]:i.SRC_ALPHA,[Dc]:i.SRC_ALPHA_SATURATE,[Lc]:i.DST_COLOR,[Cc]:i.DST_ALPHA,[Ac]:i.ONE_MINUS_SRC_COLOR,[js]:i.ONE_MINUS_SRC_ALPHA,[Ic]:i.ONE_MINUS_DST_COLOR,[Pc]:i.ONE_MINUS_DST_ALPHA,[Uc]:i.CONSTANT_COLOR,[kc]:i.ONE_MINUS_CONSTANT_COLOR,[Fc]:i.CONSTANT_ALPHA,[Nc]:i.ONE_MINUS_CONSTANT_ALPHA};function G(Q,yt,xt,bt,wt,Tt,Rt,Zt,me,ne){if(Q===Wn){x===!0&&($(i.BLEND),x=!1);return}if(x===!1&&(V(i.BLEND),x=!0),Q!==Mc){if(Q!==m||ne!==v){if((f!==ri||b!==ri)&&(i.blendEquation(i.FUNC_ADD),f=ri,b=ri),ne)switch(Q){case Di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case la:i.blendFunc(i.ONE,i.ONE);break;case ca:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ua:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}else switch(Q){case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case la:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ca:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ua:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}M=null,S=null,C=null,y=null,R.set(0,0,0),E=0,m=Q,v=ne}return}wt=wt||yt,Tt=Tt||xt,Rt=Rt||bt,(yt!==f||wt!==b)&&(i.blendEquationSeparate(ut[yt],ut[wt]),f=yt,b=wt),(xt!==M||bt!==S||Tt!==C||Rt!==y)&&(i.blendFuncSeparate(ht[xt],ht[bt],ht[Tt],ht[Rt]),M=xt,S=bt,C=Tt,y=Rt),(Zt.equals(R)===!1||me!==E)&&(i.blendColor(Zt.r,Zt.g,Zt.b,me),R.copy(Zt),E=me),m=Q,v=!1}function mt(Q,yt){Q.side===sn?$(i.CULL_FACE):V(i.CULL_FACE);let xt=Q.side===ze;yt&&(xt=!xt),nt(xt),Q.blending===Di&&Q.transparent===!1?G(Wn):G(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),o.setFunc(Q.depthFunc),o.setTest(Q.depthTest),o.setMask(Q.depthWrite),s.setMask(Q.colorWrite);const bt=Q.stencilWrite;a.setTest(bt),bt&&(a.setMask(Q.stencilWriteMask),a.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),a.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),et(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?V(i.SAMPLE_ALPHA_TO_COVERAGE):$(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(Q){_!==Q&&(Q?i.frontFace(i.CW):i.frontFace(i.CCW),_=Q)}function st(Q){Q!==bc?(V(i.CULL_FACE),Q!==I&&(Q===aa?i.cullFace(i.BACK):Q===_c?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$(i.CULL_FACE),I=Q}function ct(Q){Q!==N&&(w&&i.lineWidth(Q),N=Q)}function et(Q,yt,xt){Q?(V(i.POLYGON_OFFSET_FILL),(P!==yt||L!==xt)&&(i.polygonOffset(yt,xt),P=yt,L=xt)):$(i.POLYGON_OFFSET_FILL)}function tt(Q){Q?V(i.SCISSOR_TEST):$(i.SCISSOR_TEST)}function F(Q){Q===void 0&&(Q=i.TEXTURE0+k-1),X!==Q&&(i.activeTexture(Q),X=Q)}function A(Q,yt,xt){xt===void 0&&(X===null?xt=i.TEXTURE0+k-1:xt=X);let bt=W[xt];bt===void 0&&(bt={type:void 0,texture:void 0},W[xt]=bt),(bt.type!==Q||bt.texture!==yt)&&(X!==xt&&(i.activeTexture(xt),X=xt),i.bindTexture(Q,yt||Z[Q]),bt.type=Q,bt.texture=yt)}function J(){const Q=W[X];Q!==void 0&&Q.type!==void 0&&(i.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function ot(){try{i.compressedTexImage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function dt(){try{i.compressedTexImage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function lt(){try{i.texSubImage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Et(){try{i.texSubImage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function gt(){try{i.compressedTexSubImage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function _t(){try{i.compressedTexSubImage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function zt(){try{i.texStorage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Mt(){try{i.texStorage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function At(){try{i.texImage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function kt(){try{i.texImage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Ft(Q){K.equals(Q)===!1&&(i.scissor(Q.x,Q.y,Q.z,Q.w),K.copy(Q))}function St(Q){H.equals(Q)===!1&&(i.viewport(Q.x,Q.y,Q.z,Q.w),H.copy(Q))}function Nt(Q,yt){let xt=c.get(yt);xt===void 0&&(xt=new WeakMap,c.set(yt,xt));let bt=xt.get(Q);bt===void 0&&(bt=i.getUniformBlockIndex(yt,Q.name),xt.set(Q,bt))}function Ut(Q,yt){const bt=c.get(yt).get(Q);l.get(yt)!==bt&&(i.uniformBlockBinding(yt,bt,Q.__bindingPointIndex),l.set(yt,bt))}function Yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},X=null,W={},d={},h=new WeakMap,p=[],g=null,x=!1,m=null,f=null,M=null,S=null,b=null,C=null,y=null,R=new Wt(0,0,0),E=0,v=!1,_=null,I=null,N=null,P=null,L=null,K.set(0,0,i.canvas.width,i.canvas.height),H.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:V,disable:$,bindFramebuffer:j,drawBuffers:O,useProgram:q,setBlending:G,setMaterial:mt,setFlipSided:nt,setCullFace:st,setLineWidth:ct,setPolygonOffset:et,setScissorTest:tt,activeTexture:F,bindTexture:A,unbindTexture:J,compressedTexImage2D:ot,compressedTexImage3D:dt,texImage2D:At,texImage3D:kt,updateUBOMapping:Nt,uniformBlockBinding:Ut,texStorage2D:zt,texStorage3D:Mt,texSubImage2D:lt,texSubImage3D:Et,compressedTexSubImage2D:gt,compressedTexSubImage3D:_t,scissor:Ft,viewport:St,reset:Yt}}function yp(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Jt,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(F,A){return p?new OffscreenCanvas(F,A):pr("canvas")}function x(F,A,J){let ot=1;const dt=tt(F);if((dt.width>J||dt.height>J)&&(ot=J/Math.max(dt.width,dt.height)),ot<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const lt=Math.floor(ot*dt.width),Et=Math.floor(ot*dt.height);d===void 0&&(d=g(lt,Et));const gt=A?g(lt,Et):d;return gt.width=lt,gt.height=Et,gt.getContext("2d").drawImage(F,0,0,lt,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+lt+"x"+Et+")."),gt}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),F;return F}function m(F){return F.generateMipmaps}function f(F){i.generateMipmap(F)}function M(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(F,A,J,ot,dt=!1){if(F!==null){if(i[F]!==void 0)return i[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let lt=A;if(A===i.RED&&(J===i.FLOAT&&(lt=i.R32F),J===i.HALF_FLOAT&&(lt=i.R16F),J===i.UNSIGNED_BYTE&&(lt=i.R8)),A===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(lt=i.R8UI),J===i.UNSIGNED_SHORT&&(lt=i.R16UI),J===i.UNSIGNED_INT&&(lt=i.R32UI),J===i.BYTE&&(lt=i.R8I),J===i.SHORT&&(lt=i.R16I),J===i.INT&&(lt=i.R32I)),A===i.RG&&(J===i.FLOAT&&(lt=i.RG32F),J===i.HALF_FLOAT&&(lt=i.RG16F),J===i.UNSIGNED_BYTE&&(lt=i.RG8)),A===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(lt=i.RG8UI),J===i.UNSIGNED_SHORT&&(lt=i.RG16UI),J===i.UNSIGNED_INT&&(lt=i.RG32UI),J===i.BYTE&&(lt=i.RG8I),J===i.SHORT&&(lt=i.RG16I),J===i.INT&&(lt=i.RG32I)),A===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(lt=i.RGB8UI),J===i.UNSIGNED_SHORT&&(lt=i.RGB16UI),J===i.UNSIGNED_INT&&(lt=i.RGB32UI),J===i.BYTE&&(lt=i.RGB8I),J===i.SHORT&&(lt=i.RGB16I),J===i.INT&&(lt=i.RGB32I)),A===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(lt=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(lt=i.RGBA16UI),J===i.UNSIGNED_INT&&(lt=i.RGBA32UI),J===i.BYTE&&(lt=i.RGBA8I),J===i.SHORT&&(lt=i.RGBA16I),J===i.INT&&(lt=i.RGBA32I)),A===i.RGB&&J===i.UNSIGNED_INT_5_9_9_9_REV&&(lt=i.RGB9_E5),A===i.RGBA){const Et=dt?rs:ee.getTransfer(ot);J===i.FLOAT&&(lt=i.RGBA32F),J===i.HALF_FLOAT&&(lt=i.RGBA16F),J===i.UNSIGNED_BYTE&&(lt=Et===oe?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(lt=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(lt=i.RGB5_A1)}return(lt===i.R16F||lt===i.R32F||lt===i.RG16F||lt===i.RG32F||lt===i.RGBA16F||lt===i.RGBA32F)&&e.get("EXT_color_buffer_float"),lt}function b(F,A){let J;return F?A===null||A===ci||A===Hi?J=i.DEPTH24_STENCIL8:A===pn?J=i.DEPTH32F_STENCIL8:A===fr&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ci||A===Hi?J=i.DEPTH_COMPONENT24:A===pn?J=i.DEPTH_COMPONENT32F:A===fr&&(J=i.DEPTH_COMPONENT16),J}function C(F,A){return m(F)===!0||F.isFramebufferTexture&&F.minFilter!==Ye&&F.minFilter!==an?Math.log2(Math.max(A.width,A.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?A.mipmaps.length:1}function y(F){const A=F.target;A.removeEventListener("dispose",y),E(A),A.isVideoTexture&&u.delete(A)}function R(F){const A=F.target;A.removeEventListener("dispose",R),_(A)}function E(F){const A=n.get(F);if(A.__webglInit===void 0)return;const J=F.source,ot=h.get(J);if(ot){const dt=ot[A.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&v(F),Object.keys(ot).length===0&&h.delete(J)}n.remove(F)}function v(F){const A=n.get(F);i.deleteTexture(A.__webglTexture);const J=F.source,ot=h.get(J);delete ot[A.__cacheKey],o.memory.textures--}function _(F){const A=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(A.__webglFramebuffer[ot]))for(let dt=0;dt<A.__webglFramebuffer[ot].length;dt++)i.deleteFramebuffer(A.__webglFramebuffer[ot][dt]);else i.deleteFramebuffer(A.__webglFramebuffer[ot]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[ot])}else{if(Array.isArray(A.__webglFramebuffer))for(let ot=0;ot<A.__webglFramebuffer.length;ot++)i.deleteFramebuffer(A.__webglFramebuffer[ot]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ot=0;ot<A.__webglColorRenderbuffer.length;ot++)A.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[ot]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const J=F.textures;for(let ot=0,dt=J.length;ot<dt;ot++){const lt=n.get(J[ot]);lt.__webglTexture&&(i.deleteTexture(lt.__webglTexture),o.memory.textures--),n.remove(J[ot])}n.remove(F)}let I=0;function N(){I=0}function P(){const F=I;return F>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+r.maxTextures),I+=1,F}function L(F){const A=[];return A.push(F.wrapS),A.push(F.wrapT),A.push(F.wrapR||0),A.push(F.magFilter),A.push(F.minFilter),A.push(F.anisotropy),A.push(F.internalFormat),A.push(F.format),A.push(F.type),A.push(F.generateMipmaps),A.push(F.premultiplyAlpha),A.push(F.flipY),A.push(F.unpackAlignment),A.push(F.colorSpace),A.join()}function k(F,A){const J=n.get(F);if(F.isVideoTexture&&ct(F),F.isRenderTargetTexture===!1&&F.version>0&&J.__version!==F.version){const ot=F.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(J,F,A);return}}t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+A)}function w(F,A){const J=n.get(F);if(F.version>0&&J.__version!==F.version){H(J,F,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+A)}function T(F,A){const J=n.get(F);if(F.version>0&&J.__version!==F.version){H(J,F,A);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+A)}function D(F,A){const J=n.get(F);if(F.version>0&&J.__version!==F.version){B(J,F,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+A)}const X={[oi]:i.REPEAT,[ai]:i.CLAMP_TO_EDGE,[ao]:i.MIRRORED_REPEAT},W={[Ye]:i.NEAREST,[Yc]:i.NEAREST_MIPMAP_NEAREST,[Mr]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[xs]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},Y={[Kc]:i.NEVER,[n0]:i.ALWAYS,[jc]:i.LESS,[Hl]:i.LEQUAL,[Jc]:i.EQUAL,[e0]:i.GEQUAL,[Qc]:i.GREATER,[t0]:i.NOTEQUAL};function U(F,A){if(A.type===pn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===an||A.magFilter===xs||A.magFilter===Mr||A.magFilter===Gn||A.minFilter===an||A.minFilter===xs||A.minFilter===Mr||A.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,X[A.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,X[A.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,X[A.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,W[A.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,W[A.minFilter]),A.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,Y[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ye||A.minFilter!==Mr&&A.minFilter!==Gn||A.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function K(F,A){let J=!1;F.__webglInit===void 0&&(F.__webglInit=!0,A.addEventListener("dispose",y));const ot=A.source;let dt=h.get(ot);dt===void 0&&(dt={},h.set(ot,dt));const lt=L(A);if(lt!==F.__cacheKey){dt[lt]===void 0&&(dt[lt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,J=!0),dt[lt].usedTimes++;const Et=dt[F.__cacheKey];Et!==void 0&&(dt[F.__cacheKey].usedTimes--,Et.usedTimes===0&&v(A)),F.__cacheKey=lt,F.__webglTexture=dt[lt].texture}return J}function H(F,A,J){let ot=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ot=i.TEXTURE_3D);const dt=K(F,A),lt=A.source;t.bindTexture(ot,F.__webglTexture,i.TEXTURE0+J);const Et=n.get(lt);if(lt.version!==Et.__version||dt===!0){t.activeTexture(i.TEXTURE0+J);const gt=ee.getPrimaries(ee.workingColorSpace),_t=A.colorSpace===Bn?null:ee.getPrimaries(A.colorSpace),zt=A.colorSpace===Bn||gt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let Mt=x(A.image,!1,r.maxTextureSize);Mt=et(A,Mt);const At=s.convert(A.format,A.colorSpace),kt=s.convert(A.type);let Ft=S(A.internalFormat,At,kt,A.colorSpace,A.isVideoTexture);U(ot,A);let St;const Nt=A.mipmaps,Ut=A.isVideoTexture!==!0,Yt=Et.__version===void 0||dt===!0,Q=lt.dataReady,yt=C(A,Mt);if(A.isDepthTexture)Ft=b(A.format===Gi,A.type),Yt&&(Ut?t.texStorage2D(i.TEXTURE_2D,1,Ft,Mt.width,Mt.height):t.texImage2D(i.TEXTURE_2D,0,Ft,Mt.width,Mt.height,0,At,kt,null));else if(A.isDataTexture)if(Nt.length>0){Ut&&Yt&&t.texStorage2D(i.TEXTURE_2D,yt,Ft,Nt[0].width,Nt[0].height);for(let xt=0,bt=Nt.length;xt<bt;xt++)St=Nt[xt],Ut?Q&&t.texSubImage2D(i.TEXTURE_2D,xt,0,0,St.width,St.height,At,kt,St.data):t.texImage2D(i.TEXTURE_2D,xt,Ft,St.width,St.height,0,At,kt,St.data);A.generateMipmaps=!1}else Ut?(Yt&&t.texStorage2D(i.TEXTURE_2D,yt,Ft,Mt.width,Mt.height),Q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt.width,Mt.height,At,kt,Mt.data)):t.texImage2D(i.TEXTURE_2D,0,Ft,Mt.width,Mt.height,0,At,kt,Mt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ut&&Yt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Ft,Nt[0].width,Nt[0].height,Mt.depth);for(let xt=0,bt=Nt.length;xt<bt;xt++)if(St=Nt[xt],A.format!==ln)if(At!==null)if(Ut){if(Q)if(A.layerUpdates.size>0){const wt=Ba(St.width,St.height,A.format,A.type);for(const Tt of A.layerUpdates){const Rt=St.data.subarray(Tt*wt/St.data.BYTES_PER_ELEMENT,(Tt+1)*wt/St.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,Tt,St.width,St.height,1,At,Rt)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,St.width,St.height,Mt.depth,At,St.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xt,Ft,St.width,St.height,Mt.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?Q&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,St.width,St.height,Mt.depth,At,kt,St.data):t.texImage3D(i.TEXTURE_2D_ARRAY,xt,Ft,St.width,St.height,Mt.depth,0,At,kt,St.data)}else{Ut&&Yt&&t.texStorage2D(i.TEXTURE_2D,yt,Ft,Nt[0].width,Nt[0].height);for(let xt=0,bt=Nt.length;xt<bt;xt++)St=Nt[xt],A.format!==ln?At!==null?Ut?Q&&t.compressedTexSubImage2D(i.TEXTURE_2D,xt,0,0,St.width,St.height,At,St.data):t.compressedTexImage2D(i.TEXTURE_2D,xt,Ft,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?Q&&t.texSubImage2D(i.TEXTURE_2D,xt,0,0,St.width,St.height,At,kt,St.data):t.texImage2D(i.TEXTURE_2D,xt,Ft,St.width,St.height,0,At,kt,St.data)}else if(A.isDataArrayTexture)if(Ut){if(Yt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Ft,Mt.width,Mt.height,Mt.depth),Q)if(A.layerUpdates.size>0){const xt=Ba(Mt.width,Mt.height,A.format,A.type);for(const bt of A.layerUpdates){const wt=Mt.data.subarray(bt*xt/Mt.data.BYTES_PER_ELEMENT,(bt+1)*xt/Mt.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,bt,Mt.width,Mt.height,1,At,kt,wt)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,At,kt,Mt.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,Mt.width,Mt.height,Mt.depth,0,At,kt,Mt.data);else if(A.isData3DTexture)Ut?(Yt&&t.texStorage3D(i.TEXTURE_3D,yt,Ft,Mt.width,Mt.height,Mt.depth),Q&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,At,kt,Mt.data)):t.texImage3D(i.TEXTURE_3D,0,Ft,Mt.width,Mt.height,Mt.depth,0,At,kt,Mt.data);else if(A.isFramebufferTexture){if(Yt)if(Ut)t.texStorage2D(i.TEXTURE_2D,yt,Ft,Mt.width,Mt.height);else{let xt=Mt.width,bt=Mt.height;for(let wt=0;wt<yt;wt++)t.texImage2D(i.TEXTURE_2D,wt,Ft,xt,bt,0,At,kt,null),xt>>=1,bt>>=1}}else if(Nt.length>0){if(Ut&&Yt){const xt=tt(Nt[0]);t.texStorage2D(i.TEXTURE_2D,yt,Ft,xt.width,xt.height)}for(let xt=0,bt=Nt.length;xt<bt;xt++)St=Nt[xt],Ut?Q&&t.texSubImage2D(i.TEXTURE_2D,xt,0,0,At,kt,St):t.texImage2D(i.TEXTURE_2D,xt,Ft,At,kt,St);A.generateMipmaps=!1}else if(Ut){if(Yt){const xt=tt(Mt);t.texStorage2D(i.TEXTURE_2D,yt,Ft,xt.width,xt.height)}Q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,At,kt,Mt)}else t.texImage2D(i.TEXTURE_2D,0,Ft,At,kt,Mt);m(A)&&f(ot),Et.__version=lt.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function B(F,A,J){if(A.image.length!==6)return;const ot=K(F,A),dt=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+J);const lt=n.get(dt);if(dt.version!==lt.__version||ot===!0){t.activeTexture(i.TEXTURE0+J);const Et=ee.getPrimaries(ee.workingColorSpace),gt=A.colorSpace===Bn?null:ee.getPrimaries(A.colorSpace),_t=A.colorSpace===Bn||Et===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const zt=A.isCompressedTexture||A.image[0].isCompressedTexture,Mt=A.image[0]&&A.image[0].isDataTexture,At=[];for(let bt=0;bt<6;bt++)!zt&&!Mt?At[bt]=x(A.image[bt],!0,r.maxCubemapSize):At[bt]=Mt?A.image[bt].image:A.image[bt],At[bt]=et(A,At[bt]);const kt=At[0],Ft=s.convert(A.format,A.colorSpace),St=s.convert(A.type),Nt=S(A.internalFormat,Ft,St,A.colorSpace),Ut=A.isVideoTexture!==!0,Yt=lt.__version===void 0||ot===!0,Q=dt.dataReady;let yt=C(A,kt);U(i.TEXTURE_CUBE_MAP,A);let xt;if(zt){Ut&&Yt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Nt,kt.width,kt.height);for(let bt=0;bt<6;bt++){xt=At[bt].mipmaps;for(let wt=0;wt<xt.length;wt++){const Tt=xt[wt];A.format!==ln?Ft!==null?Ut?Q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,wt,0,0,Tt.width,Tt.height,Ft,Tt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,wt,Nt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,wt,0,0,Tt.width,Tt.height,Ft,St,Tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,wt,Nt,Tt.width,Tt.height,0,Ft,St,Tt.data)}}}else{if(xt=A.mipmaps,Ut&&Yt){xt.length>0&&yt++;const bt=tt(At[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Nt,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(Mt){Ut?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,At[bt].width,At[bt].height,Ft,St,At[bt].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,Nt,At[bt].width,At[bt].height,0,Ft,St,At[bt].data);for(let wt=0;wt<xt.length;wt++){const Rt=xt[wt].image[bt].image;Ut?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,wt+1,0,0,Rt.width,Rt.height,Ft,St,Rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,wt+1,Nt,Rt.width,Rt.height,0,Ft,St,Rt.data)}}else{Ut?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Ft,St,At[bt]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,Nt,Ft,St,At[bt]);for(let wt=0;wt<xt.length;wt++){const Tt=xt[wt];Ut?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,wt+1,0,0,Ft,St,Tt.image[bt]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,wt+1,Nt,Ft,St,Tt.image[bt])}}}m(A)&&f(i.TEXTURE_CUBE_MAP),lt.__version=dt.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function Z(F,A,J,ot,dt,lt){const Et=s.convert(J.format,J.colorSpace),gt=s.convert(J.type),_t=S(J.internalFormat,Et,gt,J.colorSpace),zt=n.get(A),Mt=n.get(J);if(Mt.__renderTarget=A,!zt.__hasExternalTextures){const At=Math.max(1,A.width>>lt),kt=Math.max(1,A.height>>lt);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?t.texImage3D(dt,lt,_t,At,kt,A.depth,0,Et,gt,null):t.texImage2D(dt,lt,_t,At,kt,0,Et,gt,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),st(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,dt,Mt.__webglTexture,0,nt(A)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,dt,Mt.__webglTexture,lt),t.bindFramebuffer(i.FRAMEBUFFER,null)}function V(F,A,J){if(i.bindRenderbuffer(i.RENDERBUFFER,F),A.depthBuffer){const ot=A.depthTexture,dt=ot&&ot.isDepthTexture?ot.type:null,lt=b(A.stencilBuffer,dt),Et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=nt(A);st(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,lt,A.width,A.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,lt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,lt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,F)}else{const ot=A.textures;for(let dt=0;dt<ot.length;dt++){const lt=ot[dt],Et=s.convert(lt.format,lt.colorSpace),gt=s.convert(lt.type),_t=S(lt.internalFormat,Et,gt,lt.colorSpace),zt=nt(A);J&&st(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,_t,A.width,A.height):st(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt,_t,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,_t,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $(F,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ot=n.get(A.depthTexture);ot.__renderTarget=A,(!ot.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),k(A.depthTexture,0);const dt=ot.__webglTexture,lt=nt(A);if(A.depthTexture.format===Ui)st(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dt,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dt,0);else if(A.depthTexture.format===Gi)st(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dt,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function j(F){const A=n.get(F),J=F.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==F.depthTexture){const ot=F.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ot){const dt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ot.removeEventListener("dispose",dt)};ot.addEventListener("dispose",dt),A.__depthDisposeCallback=dt}A.__boundDepthTexture=ot}if(F.depthTexture&&!A.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");$(A.__webglFramebuffer,F)}else if(J){A.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ot]),A.__webglDepthbuffer[ot]===void 0)A.__webglDepthbuffer[ot]=i.createRenderbuffer(),V(A.__webglDepthbuffer[ot],F,!1);else{const dt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=A.__webglDepthbuffer[ot];i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,lt)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),V(A.__webglDepthbuffer,F,!1);else{const ot=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,dt)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function O(F,A,J){const ot=n.get(F);A!==void 0&&Z(ot.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&j(F)}function q(F){const A=F.texture,J=n.get(F),ot=n.get(A);F.addEventListener("dispose",R);const dt=F.textures,lt=F.isWebGLCubeRenderTarget===!0,Et=dt.length>1;if(Et||(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=A.version,o.memory.textures++),lt){J.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer[gt]=[];for(let _t=0;_t<A.mipmaps.length;_t++)J.__webglFramebuffer[gt][_t]=i.createFramebuffer()}else J.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer=[];for(let gt=0;gt<A.mipmaps.length;gt++)J.__webglFramebuffer[gt]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Et)for(let gt=0,_t=dt.length;gt<_t;gt++){const zt=n.get(dt[gt]);zt.__webglTexture===void 0&&(zt.__webglTexture=i.createTexture(),o.memory.textures++)}if(F.samples>0&&st(F)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let gt=0;gt<dt.length;gt++){const _t=dt[gt];J.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[gt]);const zt=s.convert(_t.format,_t.colorSpace),Mt=s.convert(_t.type),At=S(_t.internalFormat,zt,Mt,_t.colorSpace,F.isXRRenderTarget===!0),kt=nt(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,At,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,J.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),V(J.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(lt){t.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),U(i.TEXTURE_CUBE_MAP,A);for(let gt=0;gt<6;gt++)if(A.mipmaps&&A.mipmaps.length>0)for(let _t=0;_t<A.mipmaps.length;_t++)Z(J.__webglFramebuffer[gt][_t],F,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,_t);else Z(J.__webglFramebuffer[gt],F,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);m(A)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Et){for(let gt=0,_t=dt.length;gt<_t;gt++){const zt=dt[gt],Mt=n.get(zt);t.bindTexture(i.TEXTURE_2D,Mt.__webglTexture),U(i.TEXTURE_2D,zt),Z(J.__webglFramebuffer,F,zt,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),m(zt)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let gt=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(gt=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(gt,ot.__webglTexture),U(gt,A),A.mipmaps&&A.mipmaps.length>0)for(let _t=0;_t<A.mipmaps.length;_t++)Z(J.__webglFramebuffer[_t],F,A,i.COLOR_ATTACHMENT0,gt,_t);else Z(J.__webglFramebuffer,F,A,i.COLOR_ATTACHMENT0,gt,0);m(A)&&f(gt),t.unbindTexture()}F.depthBuffer&&j(F)}function ut(F){const A=F.textures;for(let J=0,ot=A.length;J<ot;J++){const dt=A[J];if(m(dt)){const lt=M(F),Et=n.get(dt).__webglTexture;t.bindTexture(lt,Et),f(lt),t.unbindTexture()}}}const ht=[],G=[];function mt(F){if(F.samples>0){if(st(F)===!1){const A=F.textures,J=F.width,ot=F.height;let dt=i.COLOR_BUFFER_BIT;const lt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(F),gt=A.length>1;if(gt)for(let _t=0;_t<A.length;_t++)t.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let _t=0;_t<A.length;_t++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[_t]);const zt=n.get(A[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,zt,0)}i.blitFramebuffer(0,0,J,ot,0,0,J,ot,dt,i.NEAREST),l===!0&&(ht.length=0,G.length=0,ht.push(i.COLOR_ATTACHMENT0+_t),F.depthBuffer&&F.resolveDepthBuffer===!1&&(ht.push(lt),G.push(lt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,G)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let _t=0;_t<A.length;_t++){t.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,Et.__webglColorRenderbuffer[_t]);const zt=n.get(A[_t]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,zt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&l){const A=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function nt(F){return Math.min(r.maxSamples,F.samples)}function st(F){const A=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ct(F){const A=o.render.frame;u.get(F)!==A&&(u.set(F,A),F.update())}function et(F,A){const J=F.colorSpace,ot=F.format,dt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||J!==Wi&&J!==Bn&&(ee.getTransfer(J)===oe?(ot!==ln||dt!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),A}function tt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=N,this.setTexture2D=k,this.setTexture2DArray=w,this.setTexture3D=T,this.setTextureCube=D,this.rebindTextures=O,this.setupRenderTarget=q,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=st}function wp(i,e){function t(n,r=Bn){let s;const o=ee.getTransfer(r);if(n===Ln)return i.UNSIGNED_BYTE;if(n===Go)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ll)return i.BYTE;if(n===Il)return i.SHORT;if(n===fr)return i.UNSIGNED_SHORT;if(n===Ho)return i.INT;if(n===ci)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===mr)return i.HALF_FLOAT;if(n===Ul)return i.ALPHA;if(n===kl)return i.RGB;if(n===ln)return i.RGBA;if(n===Fl)return i.LUMINANCE;if(n===Nl)return i.LUMINANCE_ALPHA;if(n===Ui)return i.DEPTH_COMPONENT;if(n===Gi)return i.DEPTH_STENCIL;if(n===Vo)return i.RED;if(n===Xo)return i.RED_INTEGER;if(n===zl)return i.RG;if(n===Yo)return i.RG_INTEGER;if(n===Zo)return i.RGBA_INTEGER;if(n===jr||n===Jr||n===Qr||n===ts)if(o===oe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===jr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===jr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ts)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lo||n===co||n===uo||n===ho)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===lo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===co)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ho)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fo||n===po||n===mo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===fo||n===po)return o===oe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===mo)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xo||n===go||n===bo||n===_o||n===Mo||n===vo||n===So||n===yo||n===wo||n===Eo||n===To||n===Ro||n===Ao||n===Co)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===xo)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===go)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bo)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_o)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mo)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vo)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===So)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yo)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wo)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Eo)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===To)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ro)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ao)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Co)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===es||n===Po||n===Lo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===es)return o===oe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Po)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ol||n===Io||n===Do||n===Uo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===es)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Io)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Do)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Ep=`
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

}`;class Rp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Ue,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new xn({vertexShader:Ep,fragmentShader:Tp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lt(new Xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ap extends Yi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,g=null;const x=new Rp,m=t.getContextAttributes();let f=null,M=null;const S=[],b=[],C=new Jt;let y=null;const R=new je;R.viewport=new Me;const E=new je;E.viewport=new Me;const v=[R,E],_=new q0;let I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let B=S[H];return B===void 0&&(B=new zs,S[H]=B),B.getTargetRaySpace()},this.getControllerGrip=function(H){let B=S[H];return B===void 0&&(B=new zs,S[H]=B),B.getGripSpace()},this.getHand=function(H){let B=S[H];return B===void 0&&(B=new zs,S[H]=B),B.getHandSpace()};function P(H){const B=b.indexOf(H.inputSource);if(B===-1)return;const Z=S[B];Z!==void 0&&(Z.update(H.inputSource,H.frame,c||o),Z.dispatchEvent({type:H.type,data:H.inputSource}))}function L(){r.removeEventListener("select",P),r.removeEventListener("selectstart",P),r.removeEventListener("selectend",P),r.removeEventListener("squeeze",P),r.removeEventListener("squeezestart",P),r.removeEventListener("squeezeend",P),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",k);for(let H=0;H<S.length;H++){const B=b[H];B!==null&&(b[H]=null,S[H].disconnect(B))}I=null,N=null,x.reset(),e.setRenderTarget(f),p=null,h=null,d=null,r=null,M=null,K.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",L),r.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Z=null,V=null,$=null;m.depth&&($=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=m.stencil?Gi:Ui,V=m.stencil?Hi:ci);const j={colorFormat:t.RGBA8,depthFormat:$,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(j),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new ui(h.textureWidth,h.textureHeight,{format:ln,type:Ln,depthTexture:new tc(h.textureWidth,h.textureHeight,V,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new ui(p.framebufferWidth,p.framebufferHeight,{format:ln,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),K.setContext(r),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function k(H){for(let B=0;B<H.removed.length;B++){const Z=H.removed[B],V=b.indexOf(Z);V>=0&&(b[V]=null,S[V].disconnect(Z))}for(let B=0;B<H.added.length;B++){const Z=H.added[B];let V=b.indexOf(Z);if(V===-1){for(let j=0;j<S.length;j++)if(j>=b.length){b.push(Z),V=j;break}else if(b[j]===null){b[j]=Z,V=j;break}if(V===-1)break}const $=S[V];$&&$.connect(Z)}}const w=new it,T=new it;function D(H,B,Z){w.setFromMatrixPosition(B.matrixWorld),T.setFromMatrixPosition(Z.matrixWorld);const V=w.distanceTo(T),$=B.projectionMatrix.elements,j=Z.projectionMatrix.elements,O=$[14]/($[10]-1),q=$[14]/($[10]+1),ut=($[9]+1)/$[5],ht=($[9]-1)/$[5],G=($[8]-1)/$[0],mt=(j[8]+1)/j[0],nt=O*G,st=O*mt,ct=V/(-G+mt),et=ct*-G;if(B.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(et),H.translateZ(ct),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),$[10]===-1)H.projectionMatrix.copy(B.projectionMatrix),H.projectionMatrixInverse.copy(B.projectionMatrixInverse);else{const tt=O+ct,F=q+ct,A=nt-et,J=st+(V-et),ot=ut*q/F*tt,dt=ht*q/F*tt;H.projectionMatrix.makePerspective(A,J,ot,dt,tt,F),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function X(H,B){B===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(B.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let B=H.near,Z=H.far;x.texture!==null&&(x.depthNear>0&&(B=x.depthNear),x.depthFar>0&&(Z=x.depthFar)),_.near=E.near=R.near=B,_.far=E.far=R.far=Z,(I!==_.near||N!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),I=_.near,N=_.far),R.layers.mask=H.layers.mask|2,E.layers.mask=H.layers.mask|4,_.layers.mask=R.layers.mask|E.layers.mask;const V=H.parent,$=_.cameras;X(_,V);for(let j=0;j<$.length;j++)X($[j],V);$.length===2?D(_,R,E):_.projectionMatrix.copy(R.projectionMatrix),W(H,_,V)};function W(H,B,Z){Z===null?H.matrix.copy(B.matrixWorld):(H.matrix.copy(Z.matrixWorld),H.matrix.invert(),H.matrix.multiply(B.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(B.projectionMatrix),H.projectionMatrixInverse.copy(B.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=ko*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let Y=null;function U(H,B){if(u=B.getViewerPose(c||o),g=B,u!==null){const Z=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let V=!1;Z.length!==_.cameras.length&&(_.cameras.length=0,V=!0);for(let O=0;O<Z.length;O++){const q=Z[O];let ut=null;if(p!==null)ut=p.getViewport(q);else{const G=d.getViewSubImage(h,q);ut=G.viewport,O===0&&(e.setRenderTargetTextures(M,G.colorTexture,h.ignoreDepthValues?void 0:G.depthStencilTexture),e.setRenderTarget(M))}let ht=v[O];ht===void 0&&(ht=new je,ht.layers.enable(O),ht.viewport=new Me,v[O]=ht),ht.matrix.fromArray(q.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(q.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(ut.x,ut.y,ut.width,ut.height),O===0&&(_.matrix.copy(ht.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),V===!0&&_.cameras.push(ht)}const $=r.enabledFeatures;if($&&$.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const O=d.getDepthInformation(Z[0]);O&&O.isValid&&O.texture&&x.init(e,O,r.renderState)}}for(let Z=0;Z<S.length;Z++){const V=b[Z],$=S[Z];V!==null&&$!==void 0&&$.update(V,B,c||o)}Y&&Y(H,B),B.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:B}),g=null}const K=new ic;K.setAnimationLoop(U),this.setAnimationLoop=function(H){Y=H},this.dispose=function(){}}}const jn=new dn,Cp=new Xt;function Pp(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Kl(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,M,S,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,M,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ze&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ze&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=e.get(f),S=M.envMap,b=M.envMapRotation;S&&(m.envMap.value=S,jn.copy(b),jn.x*=-1,jn.y*=-1,jn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),m.envMapRotation.value.setFromMatrix4(Cp.makeRotationFromEuler(jn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ze&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Lp(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const b=S.program;n.uniformBlockBinding(M,b)}function c(M,S){let b=r[M.id];b===void 0&&(g(M),b=u(M),r[M.id]=b,M.addEventListener("dispose",m));const C=S.program;n.updateUBOMapping(M,C);const y=e.render.frame;s[M.id]!==y&&(h(M),s[M.id]=y)}function u(M){const S=d();M.__bindingPointIndex=S;const b=i.createBuffer(),C=M.__size,y=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,C,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const S=r[M.id],b=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let y=0,R=b.length;y<R;y++){const E=Array.isArray(b[y])?b[y]:[b[y]];for(let v=0,_=E.length;v<_;v++){const I=E[v];if(p(I,y,v,C)===!0){const N=I.__offset,P=Array.isArray(I.value)?I.value:[I.value];let L=0;for(let k=0;k<P.length;k++){const w=P[k],T=x(w);typeof w=="number"||typeof w=="boolean"?(I.__data[0]=w,i.bufferSubData(i.UNIFORM_BUFFER,N+L,I.__data)):w.isMatrix3?(I.__data[0]=w.elements[0],I.__data[1]=w.elements[1],I.__data[2]=w.elements[2],I.__data[3]=0,I.__data[4]=w.elements[3],I.__data[5]=w.elements[4],I.__data[6]=w.elements[5],I.__data[7]=0,I.__data[8]=w.elements[6],I.__data[9]=w.elements[7],I.__data[10]=w.elements[8],I.__data[11]=0):(w.toArray(I.__data,L),L+=T.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,S,b,C){const y=M.value,R=S+"_"+b;if(C[R]===void 0)return typeof y=="number"||typeof y=="boolean"?C[R]=y:C[R]=y.clone(),!0;{const E=C[R];if(typeof y=="number"||typeof y=="boolean"){if(E!==y)return C[R]=y,!0}else if(E.equals(y)===!1)return E.copy(y),!0}return!1}function g(M){const S=M.uniforms;let b=0;const C=16;for(let R=0,E=S.length;R<E;R++){const v=Array.isArray(S[R])?S[R]:[S[R]];for(let _=0,I=v.length;_<I;_++){const N=v[_],P=Array.isArray(N.value)?N.value:[N.value];for(let L=0,k=P.length;L<k;L++){const w=P[L],T=x(w),D=b%C,X=D%T.boundary,W=D+X;b+=X,W!==0&&C-W<T.storage&&(b+=C-W),N.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=T.storage}}}const y=b%C;return y>0&&(b+=C-y),M.__size=b,M.__cache={},this}function x(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){const S=M.target;S.removeEventListener("dispose",m);const b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function f(){for(const M in r)i.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class Ip{constructor(e={}){const{canvas:t=r0(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const M=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this.toneMapping=Vn,this.toneMappingExposure=1;const b=this;let C=!1,y=0,R=0,E=null,v=-1,_=null;const I=new Me,N=new Me;let P=null;const L=new Wt(0);let k=0,w=t.width,T=t.height,D=1,X=null,W=null;const Y=new Me(0,0,w,T),U=new Me(0,0,w,T);let K=!1;const H=new Ko;let B=!1,Z=!1;this.transmissionResolutionScale=1;const V=new Xt,$=new Xt,j=new it,O=new Me,q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function ht(){return E===null?D:1}let G=n;function mt(z,rt){return t.getContext(z,rt)}try{const z={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bo}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",wt,!1),t.addEventListener("webglcontextcreationerror",Tt,!1),G===null){const rt="webgl2";if(G=mt(rt,z),G===null)throw mt(rt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(z){throw console.error("THREE.WebGLRenderer: "+z.message),z}let nt,st,ct,et,tt,F,A,J,ot,dt,lt,Et,gt,_t,zt,Mt,At,kt,Ft,St,Nt,Ut,Yt,Q;function yt(){nt=new Hh(G),nt.init(),Ut=new wp(G,nt),st=new Uh(G,nt,e,Ut),ct=new Sp(G,nt),st.reverseDepthBuffer&&h&&ct.buffers.depth.setReversed(!0),et=new Vh(G),tt=new cp,F=new yp(G,nt,ct,tt,st,Ut,et),A=new Fh(b),J=new Bh(b),ot=new K0(G),Yt=new Ih(G,ot),dt=new Gh(G,ot,et,Yt),lt=new Yh(G,dt,ot,et),Ft=new Xh(G,st,F),Mt=new kh(tt),Et=new lp(b,A,J,nt,st,Yt,Mt),gt=new Pp(b,tt),_t=new dp,zt=new gp(nt),kt=new Lh(b,A,J,ct,lt,p,l),At=new Mp(b,lt,st),Q=new Lp(G,et,st,ct),St=new Dh(G,nt,et),Nt=new Wh(G,nt,et),et.programs=Et.programs,b.capabilities=st,b.extensions=nt,b.properties=tt,b.renderLists=_t,b.shadowMap=At,b.state=ct,b.info=et}yt();const xt=new Ap(b,G);this.xr=xt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const z=nt.get("WEBGL_lose_context");z&&z.loseContext()},this.forceContextRestore=function(){const z=nt.get("WEBGL_lose_context");z&&z.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(z){z!==void 0&&(D=z,this.setSize(w,T,!1))},this.getSize=function(z){return z.set(w,T)},this.setSize=function(z,rt,ft=!0){if(xt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=z,T=rt,t.width=Math.floor(z*D),t.height=Math.floor(rt*D),ft===!0&&(t.style.width=z+"px",t.style.height=rt+"px"),this.setViewport(0,0,z,rt)},this.getDrawingBufferSize=function(z){return z.set(w*D,T*D).floor()},this.setDrawingBufferSize=function(z,rt,ft){w=z,T=rt,D=ft,t.width=Math.floor(z*ft),t.height=Math.floor(rt*ft),this.setViewport(0,0,z,rt)},this.getCurrentViewport=function(z){return z.copy(I)},this.getViewport=function(z){return z.copy(Y)},this.setViewport=function(z,rt,ft,pt){z.isVector4?Y.set(z.x,z.y,z.z,z.w):Y.set(z,rt,ft,pt),ct.viewport(I.copy(Y).multiplyScalar(D).round())},this.getScissor=function(z){return z.copy(U)},this.setScissor=function(z,rt,ft,pt){z.isVector4?U.set(z.x,z.y,z.z,z.w):U.set(z,rt,ft,pt),ct.scissor(N.copy(U).multiplyScalar(D).round())},this.getScissorTest=function(){return K},this.setScissorTest=function(z){ct.setScissorTest(K=z)},this.setOpaqueSort=function(z){X=z},this.setTransparentSort=function(z){W=z},this.getClearColor=function(z){return z.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor(...arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha(...arguments)},this.clear=function(z=!0,rt=!0,ft=!0){let pt=0;if(z){let at=!1;if(E!==null){const vt=E.texture.format;at=vt===Zo||vt===Yo||vt===Xo}if(at){const vt=E.texture.type,Pt=vt===Ln||vt===ci||vt===fr||vt===Hi||vt===Go||vt===Wo,It=kt.getClearColor(),Dt=kt.getClearAlpha(),Ht=It.r,Gt=It.g,Ot=It.b;Pt?(g[0]=Ht,g[1]=Gt,g[2]=Ot,g[3]=Dt,G.clearBufferuiv(G.COLOR,0,g)):(x[0]=Ht,x[1]=Gt,x[2]=Ot,x[3]=Dt,G.clearBufferiv(G.COLOR,0,x))}else pt|=G.COLOR_BUFFER_BIT}rt&&(pt|=G.DEPTH_BUFFER_BIT),ft&&(pt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(pt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",Tt,!1),kt.dispose(),_t.dispose(),zt.dispose(),tt.dispose(),A.dispose(),J.dispose(),lt.dispose(),Yt.dispose(),Q.dispose(),Et.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",xe),xt.removeEventListener("sessionend",se),ge.stop()};function bt(z){z.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const z=et.autoReset,rt=At.enabled,ft=At.autoUpdate,pt=At.needsUpdate,at=At.type;yt(),et.autoReset=z,At.enabled=rt,At.autoUpdate=ft,At.needsUpdate=pt,At.type=at}function Tt(z){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",z.statusMessage)}function Rt(z){const rt=z.target;rt.removeEventListener("dispose",Rt),Zt(rt)}function Zt(z){me(z),tt.remove(z)}function me(z){const rt=tt.get(z).programs;rt!==void 0&&(rt.forEach(function(ft){Et.releaseProgram(ft)}),z.isShaderMaterial&&Et.releaseShaderCache(z))}this.renderBufferDirect=function(z,rt,ft,pt,at,vt){rt===null&&(rt=q);const Pt=at.isMesh&&at.matrixWorld.determinant()<0,It=hc(z,rt,ft,pt,at);ct.setMaterial(pt,Pt);let Dt=ft.index,Ht=1;if(pt.wireframe===!0){if(Dt=dt.getWireframeAttribute(ft),Dt===void 0)return;Ht=2}const Gt=ft.drawRange,Ot=ft.attributes.position;let Qt=Gt.start*Ht,ie=(Gt.start+Gt.count)*Ht;vt!==null&&(Qt=Math.max(Qt,vt.start*Ht),ie=Math.min(ie,(vt.start+vt.count)*Ht)),Dt!==null?(Qt=Math.max(Qt,0),ie=Math.min(ie,Dt.count)):Ot!=null&&(Qt=Math.max(Qt,0),ie=Math.min(ie,Ot.count));const ve=ie-Qt;if(ve<0||ve===1/0)return;Yt.setup(at,pt,It,ft,Dt);let be,te=St;if(Dt!==null&&(be=ot.get(Dt),te=Nt,te.setIndex(be)),at.isMesh)pt.wireframe===!0?(ct.setLineWidth(pt.wireframeLinewidth*ht()),te.setMode(G.LINES)):te.setMode(G.TRIANGLES);else if(at.isLine){let Bt=pt.linewidth;Bt===void 0&&(Bt=1),ct.setLineWidth(Bt*ht()),at.isLineSegments?te.setMode(G.LINES):at.isLineLoop?te.setMode(G.LINE_LOOP):te.setMode(G.LINE_STRIP)}else at.isPoints?te.setMode(G.POINTS):at.isSprite&&te.setMode(G.TRIANGLES);if(at.isBatchedMesh)if(at._multiDrawInstances!==null)ei("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),te.renderMultiDrawInstances(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount,at._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))te.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{const Bt=at._multiDrawStarts,Pe=at._multiDrawCounts,re=at._multiDrawCount,tn=Dt?ot.get(Dt).bytesPerElement:1,hi=tt.get(pt).currentProgram.getUniforms();for(let We=0;We<re;We++)hi.setValue(G,"_gl_DrawID",We),te.render(Bt[We]/tn,Pe[We])}else if(at.isInstancedMesh)te.renderInstances(Qt,ve,at.count);else if(ft.isInstancedBufferGeometry){const Bt=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,Pe=Math.min(ft.instanceCount,Bt);te.renderInstances(Qt,ve,Pe)}else te.render(Qt,ve)};function ne(z,rt,ft){z.transparent===!0&&z.side===sn&&z.forceSinglePass===!1?(z.side=ze,z.needsUpdate=!0,_r(z,rt,ft),z.side=mn,z.needsUpdate=!0,_r(z,rt,ft),z.side=sn):_r(z,rt,ft)}this.compile=function(z,rt,ft=null){ft===null&&(ft=z),f=zt.get(ft),f.init(rt),S.push(f),ft.traverseVisible(function(at){at.isLight&&at.layers.test(rt.layers)&&(f.pushLight(at),at.castShadow&&f.pushShadow(at))}),z!==ft&&z.traverseVisible(function(at){at.isLight&&at.layers.test(rt.layers)&&(f.pushLight(at),at.castShadow&&f.pushShadow(at))}),f.setupLights();const pt=new Set;return z.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;const vt=at.material;if(vt)if(Array.isArray(vt))for(let Pt=0;Pt<vt.length;Pt++){const It=vt[Pt];ne(It,ft,at),pt.add(It)}else ne(vt,ft,at),pt.add(vt)}),f=S.pop(),pt},this.compileAsync=function(z,rt,ft=null){const pt=this.compile(z,rt,ft);return new Promise(at=>{function vt(){if(pt.forEach(function(Pt){tt.get(Pt).currentProgram.isReady()&&pt.delete(Pt)}),pt.size===0){at(z);return}setTimeout(vt,10)}nt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Re=null;function Qe(z){Re&&Re(z)}function xe(){ge.stop()}function se(){ge.start()}const ge=new ic;ge.setAnimationLoop(Qe),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(z){Re=z,xt.setAnimationLoop(z),z===null?ge.stop():ge.start()},xt.addEventListener("sessionstart",xe),xt.addEventListener("sessionend",se),this.render=function(z,rt){if(rt!==void 0&&rt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),rt.parent===null&&rt.matrixWorldAutoUpdate===!0&&rt.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(rt),rt=xt.getCamera()),z.isScene===!0&&z.onBeforeRender(b,z,rt,E),f=zt.get(z,S.length),f.init(rt),S.push(f),$.multiplyMatrices(rt.projectionMatrix,rt.matrixWorldInverse),H.setFromProjectionMatrix($),Z=this.localClippingEnabled,B=Mt.init(this.clippingPlanes,Z),m=_t.get(z,M.length),m.init(),M.push(m),xt.enabled===!0&&xt.isPresenting===!0){const vt=b.xr.getDepthSensingMesh();vt!==null&&gr(vt,rt,-1/0,b.sortObjects)}gr(z,rt,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(X,W),ut=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,ut&&kt.addToRenderList(m,z),this.info.render.frame++,B===!0&&Mt.beginShadows();const ft=f.state.shadowsArray;At.render(ft,z,rt),B===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const pt=m.opaque,at=m.transmissive;if(f.setupLights(),rt.isArrayCamera){const vt=rt.cameras;if(at.length>0)for(let Pt=0,It=vt.length;Pt<It;Pt++){const Dt=vt[Pt];he(pt,at,z,Dt)}ut&&kt.render(z);for(let Pt=0,It=vt.length;Pt<It;Pt++){const Dt=vt[Pt];ps(m,z,Dt,Dt.viewport)}}else at.length>0&&he(pt,at,z,rt),ut&&kt.render(z),ps(m,z,rt);E!==null&&R===0&&(F.updateMultisampleRenderTarget(E),F.updateRenderTargetMipmap(E)),z.isScene===!0&&z.onAfterRender(b,z,rt),Yt.resetDefaultState(),v=-1,_=null,S.pop(),S.length>0?(f=S[S.length-1],B===!0&&Mt.setGlobalState(b.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function gr(z,rt,ft,pt){if(z.visible===!1)return;if(z.layers.test(rt.layers)){if(z.isGroup)ft=z.renderOrder;else if(z.isLOD)z.autoUpdate===!0&&z.update(rt);else if(z.isLight)f.pushLight(z),z.castShadow&&f.pushShadow(z);else if(z.isSprite){if(!z.frustumCulled||H.intersectsSprite(z)){pt&&O.setFromMatrixPosition(z.matrixWorld).applyMatrix4($);const Pt=lt.update(z),It=z.material;It.visible&&m.push(z,Pt,It,ft,O.z,null)}}else if((z.isMesh||z.isLine||z.isPoints)&&(!z.frustumCulled||H.intersectsObject(z))){const Pt=lt.update(z),It=z.material;if(pt&&(z.boundingSphere!==void 0?(z.boundingSphere===null&&z.computeBoundingSphere(),O.copy(z.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),O.copy(Pt.boundingSphere.center)),O.applyMatrix4(z.matrixWorld).applyMatrix4($)),Array.isArray(It)){const Dt=Pt.groups;for(let Ht=0,Gt=Dt.length;Ht<Gt;Ht++){const Ot=Dt[Ht],Qt=It[Ot.materialIndex];Qt&&Qt.visible&&m.push(z,Pt,Qt,ft,O.z,Ot)}}else It.visible&&m.push(z,Pt,It,ft,O.z,null)}}const vt=z.children;for(let Pt=0,It=vt.length;Pt<It;Pt++)gr(vt[Pt],rt,ft,pt)}function ps(z,rt,ft,pt){const at=z.opaque,vt=z.transmissive,Pt=z.transparent;f.setupLightsView(ft),B===!0&&Mt.setGlobalState(b.clippingPlanes,ft),pt&&ct.viewport(I.copy(pt)),at.length>0&&br(at,rt,ft),vt.length>0&&br(vt,rt,ft),Pt.length>0&&br(Pt,rt,ft),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function he(z,rt,ft,pt){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[pt.id]===void 0&&(f.state.transmissionRenderTarget[pt.id]=new ui(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?mr:Ln,minFilter:Gn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const vt=f.state.transmissionRenderTarget[pt.id],Pt=pt.viewport||I;vt.setSize(Pt.z*b.transmissionResolutionScale,Pt.w*b.transmissionResolutionScale);const It=b.getRenderTarget();b.setRenderTarget(vt),b.getClearColor(L),k=b.getClearAlpha(),k<1&&b.setClearColor(16777215,.5),b.clear(),ut&&kt.render(ft);const Dt=b.toneMapping;b.toneMapping=Vn;const Ht=pt.viewport;if(pt.viewport!==void 0&&(pt.viewport=void 0),f.setupLightsView(pt),B===!0&&Mt.setGlobalState(b.clippingPlanes,pt),br(z,ft,pt),F.updateMultisampleRenderTarget(vt),F.updateRenderTargetMipmap(vt),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Ot=0,Qt=rt.length;Ot<Qt;Ot++){const ie=rt[Ot],ve=ie.object,be=ie.geometry,te=ie.material,Bt=ie.group;if(te.side===sn&&ve.layers.test(pt.layers)){const Pe=te.side;te.side=ze,te.needsUpdate=!0,ra(ve,ft,pt,be,te,Bt),te.side=Pe,te.needsUpdate=!0,Gt=!0}}Gt===!0&&(F.updateMultisampleRenderTarget(vt),F.updateRenderTargetMipmap(vt))}b.setRenderTarget(It),b.setClearColor(L,k),Ht!==void 0&&(pt.viewport=Ht),b.toneMapping=Dt}function br(z,rt,ft){const pt=rt.isScene===!0?rt.overrideMaterial:null;for(let at=0,vt=z.length;at<vt;at++){const Pt=z[at],It=Pt.object,Dt=Pt.geometry,Ht=pt===null?Pt.material:pt,Gt=Pt.group;It.layers.test(ft.layers)&&ra(It,rt,ft,Dt,Ht,Gt)}}function ra(z,rt,ft,pt,at,vt){z.onBeforeRender(b,rt,ft,pt,at,vt),z.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,z.matrixWorld),z.normalMatrix.getNormalMatrix(z.modelViewMatrix),at.onBeforeRender(b,rt,ft,pt,z,vt),at.transparent===!0&&at.side===sn&&at.forceSinglePass===!1?(at.side=ze,at.needsUpdate=!0,b.renderBufferDirect(ft,rt,pt,at,z,vt),at.side=mn,at.needsUpdate=!0,b.renderBufferDirect(ft,rt,pt,at,z,vt),at.side=sn):b.renderBufferDirect(ft,rt,pt,at,z,vt),z.onAfterRender(b,rt,ft,pt,at,vt)}function _r(z,rt,ft){rt.isScene!==!0&&(rt=q);const pt=tt.get(z),at=f.state.lights,vt=f.state.shadowsArray,Pt=at.state.version,It=Et.getParameters(z,at.state,vt,rt,ft),Dt=Et.getProgramCacheKey(It);let Ht=pt.programs;pt.environment=z.isMeshStandardMaterial?rt.environment:null,pt.fog=rt.fog,pt.envMap=(z.isMeshStandardMaterial?J:A).get(z.envMap||pt.environment),pt.envMapRotation=pt.environment!==null&&z.envMap===null?rt.environmentRotation:z.envMapRotation,Ht===void 0&&(z.addEventListener("dispose",Rt),Ht=new Map,pt.programs=Ht);let Gt=Ht.get(Dt);if(Gt!==void 0){if(pt.currentProgram===Gt&&pt.lightsStateVersion===Pt)return oa(z,It),Gt}else It.uniforms=Et.getUniforms(z),z.onBeforeCompile(It,b),Gt=Et.acquireProgram(It,Dt),Ht.set(Dt,Gt),pt.uniforms=It.uniforms;const Ot=pt.uniforms;return(!z.isShaderMaterial&&!z.isRawShaderMaterial||z.clipping===!0)&&(Ot.clippingPlanes=Mt.uniform),oa(z,It),pt.needsLights=pc(z),pt.lightsStateVersion=Pt,pt.needsLights&&(Ot.ambientLightColor.value=at.state.ambient,Ot.lightProbe.value=at.state.probe,Ot.directionalLights.value=at.state.directional,Ot.directionalLightShadows.value=at.state.directionalShadow,Ot.spotLights.value=at.state.spot,Ot.spotLightShadows.value=at.state.spotShadow,Ot.rectAreaLights.value=at.state.rectArea,Ot.ltc_1.value=at.state.rectAreaLTC1,Ot.ltc_2.value=at.state.rectAreaLTC2,Ot.pointLights.value=at.state.point,Ot.pointLightShadows.value=at.state.pointShadow,Ot.hemisphereLights.value=at.state.hemi,Ot.directionalShadowMap.value=at.state.directionalShadowMap,Ot.directionalShadowMatrix.value=at.state.directionalShadowMatrix,Ot.spotShadowMap.value=at.state.spotShadowMap,Ot.spotLightMatrix.value=at.state.spotLightMatrix,Ot.spotLightMap.value=at.state.spotLightMap,Ot.pointShadowMap.value=at.state.pointShadowMap,Ot.pointShadowMatrix.value=at.state.pointShadowMatrix),pt.currentProgram=Gt,pt.uniformsList=null,Gt}function sa(z){if(z.uniformsList===null){const rt=z.currentProgram.getUniforms();z.uniformsList=ns.seqWithValue(rt.seq,z.uniforms)}return z.uniformsList}function oa(z,rt){const ft=tt.get(z);ft.outputColorSpace=rt.outputColorSpace,ft.batching=rt.batching,ft.batchingColor=rt.batchingColor,ft.instancing=rt.instancing,ft.instancingColor=rt.instancingColor,ft.instancingMorph=rt.instancingMorph,ft.skinning=rt.skinning,ft.morphTargets=rt.morphTargets,ft.morphNormals=rt.morphNormals,ft.morphColors=rt.morphColors,ft.morphTargetsCount=rt.morphTargetsCount,ft.numClippingPlanes=rt.numClippingPlanes,ft.numIntersection=rt.numClipIntersection,ft.vertexAlphas=rt.vertexAlphas,ft.vertexTangents=rt.vertexTangents,ft.toneMapping=rt.toneMapping}function hc(z,rt,ft,pt,at){rt.isScene!==!0&&(rt=q),F.resetTextureUnits();const vt=rt.fog,Pt=pt.isMeshStandardMaterial?rt.environment:null,It=E===null?b.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Wi,Dt=(pt.isMeshStandardMaterial?J:A).get(pt.envMap||Pt),Ht=pt.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,Gt=!!ft.attributes.tangent&&(!!pt.normalMap||pt.anisotropy>0),Ot=!!ft.morphAttributes.position,Qt=!!ft.morphAttributes.normal,ie=!!ft.morphAttributes.color;let ve=Vn;pt.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(ve=b.toneMapping);const be=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,te=be!==void 0?be.length:0,Bt=tt.get(pt),Pe=f.state.lights;if(B===!0&&(Z===!0||z!==_)){const ke=z===_&&pt.id===v;Mt.setState(pt,z,ke)}let re=!1;pt.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Pe.state.version||Bt.outputColorSpace!==It||at.isBatchedMesh&&Bt.batching===!1||!at.isBatchedMesh&&Bt.batching===!0||at.isBatchedMesh&&Bt.batchingColor===!0&&at.colorTexture===null||at.isBatchedMesh&&Bt.batchingColor===!1&&at.colorTexture!==null||at.isInstancedMesh&&Bt.instancing===!1||!at.isInstancedMesh&&Bt.instancing===!0||at.isSkinnedMesh&&Bt.skinning===!1||!at.isSkinnedMesh&&Bt.skinning===!0||at.isInstancedMesh&&Bt.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&Bt.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&Bt.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&Bt.instancingMorph===!1&&at.morphTexture!==null||Bt.envMap!==Dt||pt.fog===!0&&Bt.fog!==vt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==Mt.numPlanes||Bt.numIntersection!==Mt.numIntersection)||Bt.vertexAlphas!==Ht||Bt.vertexTangents!==Gt||Bt.morphTargets!==Ot||Bt.morphNormals!==Qt||Bt.morphColors!==ie||Bt.toneMapping!==ve||Bt.morphTargetsCount!==te)&&(re=!0):(re=!0,Bt.__version=pt.version);let tn=Bt.currentProgram;re===!0&&(tn=_r(pt,rt,at));let hi=!1,We=!1,Ki=!1;const de=tn.getUniforms(),qe=Bt.uniforms;if(ct.useProgram(tn.program)&&(hi=!0,We=!0,Ki=!0),pt.id!==v&&(v=pt.id,We=!0),hi||_!==z){ct.buffers.depth.getReversed()?(V.copy(z.projectionMatrix),o0(V),a0(V),de.setValue(G,"projectionMatrix",V)):de.setValue(G,"projectionMatrix",z.projectionMatrix),de.setValue(G,"viewMatrix",z.matrixWorldInverse);const Oe=de.map.cameraPosition;Oe!==void 0&&Oe.setValue(G,j.setFromMatrixPosition(z.matrixWorld)),st.logarithmicDepthBuffer&&de.setValue(G,"logDepthBufFC",2/(Math.log(z.far+1)/Math.LN2)),(pt.isMeshPhongMaterial||pt.isMeshToonMaterial||pt.isMeshLambertMaterial||pt.isMeshBasicMaterial||pt.isMeshStandardMaterial||pt.isShaderMaterial)&&de.setValue(G,"isOrthographic",z.isOrthographicCamera===!0),_!==z&&(_=z,We=!0,Ki=!0)}if(at.isSkinnedMesh){de.setOptional(G,at,"bindMatrix"),de.setOptional(G,at,"bindMatrixInverse");const ke=at.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),de.setValue(G,"boneTexture",ke.boneTexture,F))}at.isBatchedMesh&&(de.setOptional(G,at,"batchingTexture"),de.setValue(G,"batchingTexture",at._matricesTexture,F),de.setOptional(G,at,"batchingIdTexture"),de.setValue(G,"batchingIdTexture",at._indirectTexture,F),de.setOptional(G,at,"batchingColorTexture"),at._colorsTexture!==null&&de.setValue(G,"batchingColorTexture",at._colorsTexture,F));const $e=ft.morphAttributes;if(($e.position!==void 0||$e.normal!==void 0||$e.color!==void 0)&&Ft.update(at,ft,tn),(We||Bt.receiveShadow!==at.receiveShadow)&&(Bt.receiveShadow=at.receiveShadow,de.setValue(G,"receiveShadow",at.receiveShadow)),pt.isMeshGouraudMaterial&&pt.envMap!==null&&(qe.envMap.value=Dt,qe.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),pt.isMeshStandardMaterial&&pt.envMap===null&&rt.environment!==null&&(qe.envMapIntensity.value=rt.environmentIntensity),We&&(de.setValue(G,"toneMappingExposure",b.toneMappingExposure),Bt.needsLights&&fc(qe,Ki),vt&&pt.fog===!0&&gt.refreshFogUniforms(qe,vt),gt.refreshMaterialUniforms(qe,pt,D,T,f.state.transmissionRenderTarget[z.id]),ns.upload(G,sa(Bt),qe,F)),pt.isShaderMaterial&&pt.uniformsNeedUpdate===!0&&(ns.upload(G,sa(Bt),qe,F),pt.uniformsNeedUpdate=!1),pt.isSpriteMaterial&&de.setValue(G,"center",at.center),de.setValue(G,"modelViewMatrix",at.modelViewMatrix),de.setValue(G,"normalMatrix",at.normalMatrix),de.setValue(G,"modelMatrix",at.matrixWorld),pt.isShaderMaterial||pt.isRawShaderMaterial){const ke=pt.uniformsGroups;for(let Oe=0,ms=ke.length;Oe<ms;Oe++){const Xn=ke[Oe];Q.update(Xn,tn),Q.bind(Xn,tn)}}return tn}function fc(z,rt){z.ambientLightColor.needsUpdate=rt,z.lightProbe.needsUpdate=rt,z.directionalLights.needsUpdate=rt,z.directionalLightShadows.needsUpdate=rt,z.pointLights.needsUpdate=rt,z.pointLightShadows.needsUpdate=rt,z.spotLights.needsUpdate=rt,z.spotLightShadows.needsUpdate=rt,z.rectAreaLights.needsUpdate=rt,z.hemisphereLights.needsUpdate=rt}function pc(z){return z.isMeshLambertMaterial||z.isMeshToonMaterial||z.isMeshPhongMaterial||z.isMeshStandardMaterial||z.isShadowMaterial||z.isShaderMaterial&&z.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(z,rt,ft){tt.get(z.texture).__webglTexture=rt,tt.get(z.depthTexture).__webglTexture=ft;const pt=tt.get(z);pt.__hasExternalTextures=!0,pt.__autoAllocateDepthBuffer=ft===void 0,pt.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),pt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(z,rt){const ft=tt.get(z);ft.__webglFramebuffer=rt,ft.__useDefaultFramebuffer=rt===void 0};const mc=G.createFramebuffer();this.setRenderTarget=function(z,rt=0,ft=0){E=z,y=rt,R=ft;let pt=!0,at=null,vt=!1,Pt=!1;if(z){const Dt=tt.get(z);if(Dt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(G.FRAMEBUFFER,null),pt=!1;else if(Dt.__webglFramebuffer===void 0)F.setupRenderTarget(z);else if(Dt.__hasExternalTextures)F.rebindTextures(z,tt.get(z.texture).__webglTexture,tt.get(z.depthTexture).__webglTexture);else if(z.depthBuffer){const Ot=z.depthTexture;if(Dt.__boundDepthTexture!==Ot){if(Ot!==null&&tt.has(Ot)&&(z.width!==Ot.image.width||z.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(z)}}const Ht=z.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Pt=!0);const Gt=tt.get(z).__webglFramebuffer;z.isWebGLCubeRenderTarget?(Array.isArray(Gt[rt])?at=Gt[rt][ft]:at=Gt[rt],vt=!0):z.samples>0&&F.useMultisampledRTT(z)===!1?at=tt.get(z).__webglMultisampledFramebuffer:Array.isArray(Gt)?at=Gt[ft]:at=Gt,I.copy(z.viewport),N.copy(z.scissor),P=z.scissorTest}else I.copy(Y).multiplyScalar(D).floor(),N.copy(U).multiplyScalar(D).floor(),P=K;if(ft!==0&&(at=mc),ct.bindFramebuffer(G.FRAMEBUFFER,at)&&pt&&ct.drawBuffers(z,at),ct.viewport(I),ct.scissor(N),ct.setScissorTest(P),vt){const Dt=tt.get(z.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt.__webglTexture,ft)}else if(Pt){const Dt=tt.get(z.texture),Ht=rt;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Dt.__webglTexture,ft,Ht)}else if(z!==null&&ft!==0){const Dt=tt.get(z.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Dt.__webglTexture,ft)}v=-1},this.readRenderTargetPixels=function(z,rt,ft,pt,at,vt,Pt){if(!(z&&z.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=tt.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&Pt!==void 0&&(It=It[Pt]),It){ct.bindFramebuffer(G.FRAMEBUFFER,It);try{const Dt=z.texture,Ht=Dt.format,Gt=Dt.type;if(!st.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}rt>=0&&rt<=z.width-pt&&ft>=0&&ft<=z.height-at&&G.readPixels(rt,ft,pt,at,Ut.convert(Ht),Ut.convert(Gt),vt)}finally{const Dt=E!==null?tt.get(E).__webglFramebuffer:null;ct.bindFramebuffer(G.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(z,rt,ft,pt,at,vt,Pt){if(!(z&&z.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=tt.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&Pt!==void 0&&(It=It[Pt]),It){const Dt=z.texture,Ht=Dt.format,Gt=Dt.type;if(!st.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(rt>=0&&rt<=z.width-pt&&ft>=0&&ft<=z.height-at){ct.bindFramebuffer(G.FRAMEBUFFER,It);const Ot=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ot),G.bufferData(G.PIXEL_PACK_BUFFER,vt.byteLength,G.STREAM_READ),G.readPixels(rt,ft,pt,at,Ut.convert(Ht),Ut.convert(Gt),0);const Qt=E!==null?tt.get(E).__webglFramebuffer:null;ct.bindFramebuffer(G.FRAMEBUFFER,Qt);const ie=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await s0(G,ie,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ot),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,vt),G.deleteBuffer(Ot),G.deleteSync(ie),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(z,rt=null,ft=0){z.isTexture!==!0&&(ei("WebGLRenderer: copyFramebufferToTexture function signature has changed."),rt=arguments[0]||null,z=arguments[1]);const pt=Math.pow(2,-ft),at=Math.floor(z.image.width*pt),vt=Math.floor(z.image.height*pt),Pt=rt!==null?rt.x:0,It=rt!==null?rt.y:0;F.setTexture2D(z,0),G.copyTexSubImage2D(G.TEXTURE_2D,ft,0,0,Pt,It,at,vt),ct.unbindTexture()};const xc=G.createFramebuffer(),gc=G.createFramebuffer();this.copyTextureToTexture=function(z,rt,ft=null,pt=null,at=0,vt=null){z.isTexture!==!0&&(ei("WebGLRenderer: copyTextureToTexture function signature has changed."),pt=arguments[0]||null,z=arguments[1],rt=arguments[2],vt=arguments[3]||0,ft=null),vt===null&&(at!==0?(ei("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),vt=at,at=0):vt=0);let Pt,It,Dt,Ht,Gt,Ot,Qt,ie,ve;const be=z.isCompressedTexture?z.mipmaps[vt]:z.image;if(ft!==null)Pt=ft.max.x-ft.min.x,It=ft.max.y-ft.min.y,Dt=ft.isBox3?ft.max.z-ft.min.z:1,Ht=ft.min.x,Gt=ft.min.y,Ot=ft.isBox3?ft.min.z:0;else{const $e=Math.pow(2,-at);Pt=Math.floor(be.width*$e),It=Math.floor(be.height*$e),z.isDataArrayTexture?Dt=be.depth:z.isData3DTexture?Dt=Math.floor(be.depth*$e):Dt=1,Ht=0,Gt=0,Ot=0}pt!==null?(Qt=pt.x,ie=pt.y,ve=pt.z):(Qt=0,ie=0,ve=0);const te=Ut.convert(rt.format),Bt=Ut.convert(rt.type);let Pe;rt.isData3DTexture?(F.setTexture3D(rt,0),Pe=G.TEXTURE_3D):rt.isDataArrayTexture||rt.isCompressedArrayTexture?(F.setTexture2DArray(rt,0),Pe=G.TEXTURE_2D_ARRAY):(F.setTexture2D(rt,0),Pe=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,rt.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,rt.unpackAlignment);const re=G.getParameter(G.UNPACK_ROW_LENGTH),tn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),hi=G.getParameter(G.UNPACK_SKIP_PIXELS),We=G.getParameter(G.UNPACK_SKIP_ROWS),Ki=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,be.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,be.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ht),G.pixelStorei(G.UNPACK_SKIP_ROWS,Gt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ot);const de=z.isDataArrayTexture||z.isData3DTexture,qe=rt.isDataArrayTexture||rt.isData3DTexture;if(z.isDepthTexture){const $e=tt.get(z),ke=tt.get(rt),Oe=tt.get($e.__renderTarget),ms=tt.get(ke.__renderTarget);ct.bindFramebuffer(G.READ_FRAMEBUFFER,Oe.__webglFramebuffer),ct.bindFramebuffer(G.DRAW_FRAMEBUFFER,ms.__webglFramebuffer);for(let Xn=0;Xn<Dt;Xn++)de&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,tt.get(z).__webglTexture,at,Ot+Xn),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,tt.get(rt).__webglTexture,vt,ve+Xn)),G.blitFramebuffer(Ht,Gt,Pt,It,Qt,ie,Pt,It,G.DEPTH_BUFFER_BIT,G.NEAREST);ct.bindFramebuffer(G.READ_FRAMEBUFFER,null),ct.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(at!==0||z.isRenderTargetTexture||tt.has(z)){const $e=tt.get(z),ke=tt.get(rt);ct.bindFramebuffer(G.READ_FRAMEBUFFER,xc),ct.bindFramebuffer(G.DRAW_FRAMEBUFFER,gc);for(let Oe=0;Oe<Dt;Oe++)de?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,$e.__webglTexture,at,Ot+Oe):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,$e.__webglTexture,at),qe?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ke.__webglTexture,vt,ve+Oe):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ke.__webglTexture,vt),at!==0?G.blitFramebuffer(Ht,Gt,Pt,It,Qt,ie,Pt,It,G.COLOR_BUFFER_BIT,G.NEAREST):qe?G.copyTexSubImage3D(Pe,vt,Qt,ie,ve+Oe,Ht,Gt,Pt,It):G.copyTexSubImage2D(Pe,vt,Qt,ie,Ht,Gt,Pt,It);ct.bindFramebuffer(G.READ_FRAMEBUFFER,null),ct.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else qe?z.isDataTexture||z.isData3DTexture?G.texSubImage3D(Pe,vt,Qt,ie,ve,Pt,It,Dt,te,Bt,be.data):rt.isCompressedArrayTexture?G.compressedTexSubImage3D(Pe,vt,Qt,ie,ve,Pt,It,Dt,te,be.data):G.texSubImage3D(Pe,vt,Qt,ie,ve,Pt,It,Dt,te,Bt,be):z.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,vt,Qt,ie,Pt,It,te,Bt,be.data):z.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,vt,Qt,ie,be.width,be.height,te,be.data):G.texSubImage2D(G.TEXTURE_2D,vt,Qt,ie,Pt,It,te,Bt,be);G.pixelStorei(G.UNPACK_ROW_LENGTH,re),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,tn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,hi),G.pixelStorei(G.UNPACK_SKIP_ROWS,We),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ki),vt===0&&rt.generateMipmaps&&G.generateMipmap(Pe),ct.unbindTexture()},this.copyTextureToTexture3D=function(z,rt,ft=null,pt=null,at=0){return z.isTexture!==!0&&(ei("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ft=arguments[0]||null,pt=arguments[1]||null,z=arguments[2],rt=arguments[3],at=arguments[4]||0),ei('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(z,rt,ft,pt,at)},this.initRenderTarget=function(z){tt.get(z).__webglFramebuffer===void 0&&F.setupRenderTarget(z)},this.initTexture=function(z){z.isCubeTexture?F.setTextureCube(z,0):z.isData3DTexture?F.setTexture3D(z,0):z.isDataArrayTexture||z.isCompressedArrayTexture?F.setTexture2DArray(z,0):F.setTexture2D(z,0),ct.unbindTexture()},this.resetState=function(){y=0,R=0,E=null,ct.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ee._getDrawingBufferColorSpace(e),t.unpackColorSpace=ee._getUnpackColorSpace()}}class Dp{loader=new W0;baseTextures=new Map;variantTextures=new Map;materials=new Map;maxAnisotropy=4;constructor(e){e&&(this.maxAnisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()))}setAnisotropy(e){this.maxAnisotropy=Math.min(8,e)}getTexture(e,t=1,n=1){const r=Math.round(t*100)/100,s=Math.round(n*100)/100,o=`${e}|${r}|${s}`,a=this.variantTextures.get(o);if(a)return a;let l=this.baseTextures.get(e);if(!l){const u=typeof window<"u"&&window.__KUROISO_TEXTURE_BASE__||"./textures/tiles";l=this.loader.load(`${u}/${e}.webp`),l.colorSpace=Ne,l.wrapS=oi,l.wrapT=oi,l.anisotropy=this.maxAnisotropy,l.generateMipmaps=!0,l.minFilter=Gn,l.magFilter=an,this.baseTextures.set(e,l)}if(r===1&&s===1)return this.variantTextures.set(o,l),l;const c=l.clone();return c.needsUpdate=!0,c.wrapS=oi,c.wrapT=oi,c.repeat.set(r,s),c.anisotropy=this.maxAnisotropy,c.colorSpace=Ne,this.variantTextures.set(o,c),c}getMaterial(e,t={}){const n=t.repeatX??1,r=t.repeatY??1,s=t.roughness??.88,o=t.metalness??.04,a=t.bumpScale??.035,l=t.doubleSide??!1,c=t.tint??16777215,u=t.opacity??1,d=t.transparent??u<.99,h=t.flatShading??!1,p=`${e}|${n}|${r}|${s}|${o}|${a}|${l?1:0}|${c}|${u}|${h?1:0}`,g=this.materials.get(p);if(g)return g;const x=this.getTexture(e,n,r),m=new Fi({map:x,bumpMap:a>0?x:null,bumpScale:a,roughness:s,metalness:o,color:c,side:l?sn:mn,opacity:u,transparent:d,flatShading:h});return this.materials.set(p,m),m}}const ae=1024,le=2560,Kt={x:42,z:2158,yaw:Math.PI*.96},_e={x:80,z:-1480},gn={x:235,z:540},Ze={x:-145,z:-890,y:348},cn={x:430,z:-580,y:376},un={x:-522,z:-1768,y:2.8},Pn={x:-68,z:215,y:242},ls={x:82,z:480};function Vr(i,e){let t=Math.imul(i,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}function Ce(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)}function li(i,e,t){return i<e?e:i>t?t:i}function lc(i,e){const t=Math.floor(i),n=Math.floor(e),r=i-t,s=e-n,o=r*r*(3-2*r),a=s*s*(3-2*s),l=Vr(t,n),c=Vr(t+1,n),u=Vr(t,n+1),d=Vr(t+1,n+1);return(l+(c-l)*o+(u-l)*a+(l-c-u+d)*o*a)*2-1}function cs(i,e,t=4){let n=0,r=.5,s=1,o=0;for(let a=0;a<t;a++){const l=i*s*.8-e*s*.6,c=i*s*.6+e*s*.8;n+=lc(l,c)*r,o+=r,r*=.5,s*=2.03}return n/o}function dl(i,e,t=4){let n=0,r=.55,s=1,o=1,a=0;for(let l=0;l<t;l++){const c=i*s*.8-e*s*.6+l*17.3,u=i*s*.6+e*s*.8-l*13.1;let d=1-Math.abs(lc(c,u));d*=d*o,o=li(d*1.8,.25,1),n+=d*r,a+=r,r*=.48,s*=2.06}return n/a}function na(i){return-215*Ce(1400,450,i)+Math.sin(i*.0028)*44+Math.cos(i*.0067+.8)*18+245*Ce(1250,2150,i)}const Ni=[{id:"road_coastal",name:"海岸林道（漂着浜〜黒磯村入口）",kind:"road",halfWidth:2.6,blendWidth:16,points:[[40,2125,3],[28,2030,14],[-55,1920,32],[-145,1805,52],[-65,1690,72],[75,1590,92],[165,1480,114],[85,1365,134],[-55,1255,152],[-125,1135,168],[-30,1020,184],[95,915,199],[148,800,212],[115,685,222],[85,575,230],[82,480,238]]},{id:"road_village_mid",name:"村道黒磯本通り（中段斜面道）",kind:"road",halfWidth:2.5,blendWidth:15,points:[[82,480,238],[165,515,254],[235,540,268],[215,455,263],[165,380,256],[132,315,252],[95,235,249],[58,145,248],[32,55,250],[12,-35,253],[-28,-110,256],[-72,-165,258],[-85,-255,262],[-65,-345,268],[-30,-440,278]]},{id:"road_village_low",name:"下段斜面村道（渓谷・公園通り）",kind:"road",halfWidth:2.3,blendWidth:14,points:[[82,480,238],[20,430,230],[-45,375,224],[-88,305,228],[-68,215,242],[-82,125,234],[-115,30,225],[-125,-75,233],[-112,-135,245],[-92,-162,253],[-72,-165,258]]},{id:"road_village_high",name:"上段山腹道（高台集落通り）",kind:"road",halfWidth:2.2,blendWidth:14,points:[[235,540,268],[268,420,274],[262,290,276],[245,165,278],[228,40,280],[215,-90,282],[210,-210,286],[185,-310,290],[95,-395,286],[-30,-440,278]]},{id:"road_forestry",name:"山の中の道（黒磯林道〜1890年炭鉱谷）",kind:"forestry",halfWidth:2.1,blendWidth:15,points:[[-30,-440,278],[-75,-530,294],[-130,-630,312],[-165,-735,328],[-155,-825,340],[-145,-890,348],[-245,-870,335],[-355,-895,388],[-460,-950,422],[-540,-1035,425]]},{id:"trail_summit_865",name:"黒磯岳山頂への獣道（標高865mルート）",kind:"trail",halfWidth:1.35,blendWidth:15,points:[[185,-310,290],[245,-385,310],[310,-455,320],[352,-525,315],[325,-625,325],[315,-735,360],[355,-850,425],[335,-955,475],[335,-1055,520],[365,-1145,560],[355,-1245,635],[255,-1315,718],[155,-1365,765],[40,-1410,800],[135,-1445,832],[80,-1480,865]]},{id:"trail_secret_base",name:"秘密基地へのけもの道",kind:"trail",halfWidth:1.15,blendWidth:12,points:[[352,-525,315],[395,-510,345],[445,-530,365],[452,-562,374],[430,-580,376]]},{id:"trail_hidden_port",name:"秘境の旧港へのけもの道",kind:"trail",halfWidth:1.35,blendWidth:14,points:[[-540,-1035,425],[-575,-1130,385],[-595,-1230,340],[-600,-1330,300],[-585,-1425,245],[-575,-1505,185],[-545,-1575,130],[-480,-1635,120],[-442,-1690,82],[-455,-1722,42],[-472,-1748,18],[-498,-1764,6],[-522,-1768,2.8]]}],Je=[{id:"K01",name:"黒磯駐在所（交番）予定地",category:"koban",x:82,z:480,y:238,radiusX:7,radiusZ:6,yaw:-.4,blendMargin:13,note:"海岸林道と中段・下段村道の要衝交差点"},{id:"S01",name:"黒磯よろず商店・郵便取扱所",category:"shop",x:132,z:315,y:252,radiusX:8.5,radiusZ:7,yaw:-1.35,blendMargin:14,note:"中段本通り角地・商業施設01予定地"},{id:"S02",name:"炭鉱購買部・食堂「みなとや」",category:"shop",x:-72,z:-165,y:258,radiusX:9.5,radiusZ:7.2,yaw:.45,blendMargin:15,note:"渓谷中央・商業施設02予定地"},{id:"P01",name:"見晴らし村営公園",category:"park",x:-68,z:215,y:242,radiusX:15,radiusZ:12,yaw:.2,blendMargin:16,note:"石垣縁の芝雑草広場・村営公園（1件）"},{id:"B01",name:"子供たちの山奥の秘密基地",category:"secret_base",x:430,z:-580,y:376,radiusX:8,radiusZ:7.5,yaw:-.8,blendMargin:14,note:"東山中・深い杉林とシダの隠れ窪地"},{id:"M01",name:"旧黒磯炭鉱 第一坑口（1890）",category:"mine",x:-145,z:-890,y:348,radiusX:13,radiusZ:11,yaw:.15,blendMargin:16,note:"明治23年開坑予定地・黒岩断崖直下"},{id:"PORT01",name:"秘境の旧港（建設案）",category:"port",x:-522,z:-1768,y:2.8,radiusX:14,radiusZ:4.8,yaw:Math.PI*.25,blendMargin:4.5,note:"けもの道を抜けた先の北西天然入江港"},{id:"H01",name:"民家 01（浜田家・二階建町家）",category:"house",x:49,z:437,y:233,radiusX:6.8,radiusZ:5.8,yaw:-.68,blendMargin:11.5,note:"下段斜面・交差点下・焼杉いぶし銀本瓦二階家"},{id:"H02",name:"民家 02（磯部家・三階建櫓家）",category:"house",x:-32,z:406,y:226,radiusX:6.2,radiusZ:5.8,yaw:2.44,blendMargin:11.5,note:"下段斜面・石州赤茶釉薬瓦三階見張り櫓家"},{id:"H03",name:"民家 03（高木家・L字二階工房邸）",category:"house",x:-79,z:354,y:224,radiusX:7.6,radiusZ:6.4,yaw:2.12,blendMargin:12,note:"下段斜面・L字船大工二階工房（北屋根半崩落）"},{id:"H04",name:"民家 04（岩崎家・石蔵三階民家）",category:"house",x:-108,z:282,y:228,radiusX:6.8,radiusZ:5.8,yaw:1.25,blendMargin:12,note:"下段斜面・1F野面積石壁＋苔黒瓦寄棟三階家"},{id:"H05",name:"民家 05（佐伯家・苔蔦二階廃墟）",category:"house",x:-98,z:152,y:235,radiusX:6.2,radiusZ:5.4,yaw:1.58,blendMargin:12,note:"公園北側・苔と蔦の半壊二階建廃家"},{id:"H06",name:"民家予定地 06（藤原家）",category:"house",x:-132,z:62,y:226,radiusX:6.2,radiusZ:5.4,yaw:1.45,blendMargin:12,note:"沢沿い・半壊家屋予定地"},{id:"H07",name:"民家 07（安藤家・大工棟梁四階櫓邸）",category:"house",x:-145,z:-38,y:228,radiusX:8.2,radiusZ:6.8,yaw:1.62,blendMargin:13.5,note:"1877年築・懸造り基礎＆木工刻み場・360°屋外回廊付四階木組櫓邸"},{id:"H08",name:"民家予定地 08（永井家）",category:"house",x:-130,z:-120,y:238,radiusX:6.4,radiusZ:5.4,yaw:1.25,blendMargin:12,note:"教員宿舎予定地"},{id:"H09",name:"民家 09（森本家・赤瓦三階名家）",category:"house",x:212,z:518,y:266,radiusX:7.6,radiusZ:6.4,yaw:-.45,blendMargin:12.5,note:"見晴らし坂手前・赤瓦入母屋三階建＆見晴らし縁側"},{id:"H10",name:"民家 10（白井医院・擬洋風三階館）",category:"house",x:208,z:424,y:260,radiusX:7.2,radiusZ:6,yaw:-1.12,blendMargin:12,note:"明治擬洋風三階木造診療所・いぶし銀本瓦入母屋"},{id:"H11",name:"民家 11（黒田本家・庄屋四階望楼邸）",category:"house",x:162,z:348,y:254,radiusX:8.8,radiusZ:7.2,yaw:-1.18,blendMargin:13.5,note:"1872年築・四重本瓦入母屋＆四階望楼の庄屋本宅"},{id:"H12",name:"民家 12（松岡家・白壁瓦二階家）",category:"house",x:72,z:262,y:248,radiusX:6.8,radiusZ:5.8,yaw:1.85,blendMargin:12.5,note:"参考写真中央・白漆喰＆濃灰いぶし瓦二階家"},{id:"H13",name:"民家 13（神谷家・朱塗冠木門三階社家）",category:"house",x:82,z:175,y:249,radiusX:7.6,radiusZ:6.8,yaw:-1.22,blendMargin:12.5,note:"1879年築・独立朱塗冠木門・苔石坪庭吹抜・千鳥破風本瓦三階邸"},{id:"H14",name:"民家 14（村田家・煉瓦煙突三階邸）",category:"house",x:56,z:88,y:249,radiusX:8.2,radiusZ:6.4,yaw:-1.32,blendMargin:13,note:"1883年築・11.8m赤煉瓦ペチカ煙突・リシン洋間・3F物干し高欄デッキ"},{id:"H15",name:"民家 15（吉田家・空中渡り廊下二棟邸）",category:"house",x:34,z:-10,y:252,radiusX:8.8,radiusZ:6.6,yaw:-1.35,blendMargin:13.5,note:"1880年明治本瓦本屋×1958年昭和トタン車庫をガラス空中渡り廊下で連結"},{id:"H16",name:"民家予定地 16（田辺家）",category:"house",x:-4,z:-92,y:255,radiusX:6.8,radiusZ:5.6,yaw:-1.1,blendMargin:12.5,note:"半地下石倉農家予定地"},{id:"H17",name:"民家予定地 17（大野家）",category:"house",x:-52,z:-225,y:260,radiusX:6,radiusZ:5.4,yaw:.6,blendMargin:12,note:"蔦に覆われた全壊寸前家予定地"},{id:"H18",name:"民家予定地 18（杉山家）",category:"house",x:-96,z:-315,y:266,radiusX:6.2,radiusZ:5.4,yaw:.9,blendMargin:12,note:"木こりの丸太小屋予定地"},{id:"H19",name:"民家予定地 19（小川家・懸造り）",category:"house",x:282,z:468,y:273,radiusX:6,radiusZ:5.8,yaw:-1.75,blendMargin:12.5,note:"急斜面・懸造り家屋予定地"},{id:"H20",name:"民家 20（旧黒磯炭鉱・明治技師館）",category:"house",x:280,z:340,y:275,radiusX:8.4,radiusZ:6.8,yaw:-1.65,blendMargin:13.5,note:"1891年築・青磁色下見板＆宝形本瓦四階角望楼塔屋の洋和折衷官邸"},{id:"H21",name:"民家 21（第一坑夫長屋・三戸連棟）",category:"house",x:262,z:215,y:277,radiusX:11.4,radiusZ:6.4,yaw:-1.48,blendMargin:14,note:"1893年築・島最大幅19.6m三戸連棟炭住長屋（全3戸個別間取り＆21m本瓦大屋根）"},{id:"H22",name:"民家 22（黒岩監督邸・懸造り四階館）",category:"house",x:246,z:95,y:279,radiusX:7.4,radiusZ:6.4,yaw:-1.48,blendMargin:13,note:"高石垣＆懸造り木柱脚・重層瓦屋根の四階監督官邸"},{id:"H23",name:"民家 23（鉄山鍛冶場・越屋根吹抜二階）",category:"house",x:232,z:-45,y:281,radiusX:8.6,radiusZ:6.4,yaw:-1.7,blendMargin:13,note:"1885年築・煙出し越屋根＆12m煉瓦大煙突・6.5m吹抜鍛冶場＆見下ろし回廊"},{id:"H24",name:"民家予定地 24（炭鉱詰所）",category:"house",x:222,z:-175,y:285,radiusX:7,radiusZ:5.4,yaw:-1.8,blendMargin:12.5,note:"詰所兼独身寮予定地"},{id:"H25",name:"民家予定地 25（沢田小屋）",category:"house",x:142,z:-362,y:288,radiusX:5.8,radiusZ:5.2,yaw:-2.15,blendMargin:12,note:"落石崩壊小屋・獣道入口近く"}],fs=new Set(["H01","H02","H03","H04","H05","H07","H09","H10","H11","H12","H13","H14","H15","H20","H21","H22","H23"]),hl=Je.filter(i=>fs.has(i.id));function qs(i,e,t=0){for(let n=0;n<hl.length;n++){const r=hl[n],s=i-r.x,o=e-r.z,a=Math.max(r.radiusX,r.radiusZ)+t+1.5;if(s*s+o*o>a*a)continue;const l=Math.cos(r.yaw),c=Math.sin(r.yaw),u=s*l-o*c,d=s*c+o*l;if(Math.abs(u)<r.radiusX*.94+t&&Math.abs(d)<r.radiusZ*.94+t)return!0}return!1}const ia=128,fn=Math.ceil(ae*2/ia),En=Math.ceil(le*2/ia),No=Array.from({length:fn*En},()=>[]),cc=Array.from({length:fn*En},()=>[]);function is(i,e){return e*fn+i}function He(i,e,t){return li(Math.floor((i+e)/ia),0,t-1)}function uc(i,e){const t=i/960,n=e/2410,r=cs(i*72e-5,e*72e-5,3)*.13,s=1-.14*Ce(-1350,-2420,e)-.08*Ce(1600,2420,e),o=Math.sqrt(t/s*(t/s)+n*n)+r,a=Math.exp(-(Math.pow((i-42)/215,2)+Math.pow((e-2345)/240,2))),l=Math.exp(-(Math.pow((i+615)/185,2)+Math.pow((e+1820)/175,2))),c=o+a*.36+l*.24,u=1-Ce(.74,1.03,c),d=1-Ce(.95,1.24,c);if(d<=1e-4)return-28;const h=232*Ce(.98,.44,c),p=595*Math.exp(-(Math.pow((i-80)/485,2)+Math.pow((e+1480)/560,2))),g=235*Math.exp(-(Math.pow((i-610)/340,2)+Math.pow((e+1320)/400,2))),x=255*Math.exp(-(Math.pow((i+495)/335,2)+Math.pow((e+1230)/390,2))),m=250*Math.exp(-(Math.pow((i+120)/350,2)+Math.pow((e+2060)/330,2))),f=415*Math.exp(-(Math.pow((i-765)/295,2)+Math.pow((e+60)/680,2))),M=385*Math.exp(-(Math.pow((i+710)/315,2)+Math.pow((e-120)/680,2))),S=275*Math.exp(-(Math.pow((i-650)/335,2)+Math.pow((e-1050)/520,2))),b=255*Math.exp(-(Math.pow((i+610)/335,2)+Math.pow((e-1120)/520,2))),C=145*Math.exp(-(Math.pow((i-310)/240,2)+Math.pow((e-1500)/300,2))),y=130*Math.exp(-(Math.pow((i+250)/240,2)+Math.pow((e-1540)/300,2))),R=155*Math.exp(-(Math.pow((i+520)/240,2)+Math.pow((e-2050)/280,2))),E=180*Math.exp(-(Math.pow((i-550)/250,2)+Math.pow((e-2010)/280,2))),v=98*Math.exp(-(Math.pow((i+560)/115,2)+Math.pow((e+1575)/120,2))),_=Math.exp(-(Math.pow((i-60)/420,2)+Math.pow((e-100)/680,2))),I=na(e),N=Math.abs(i-I),P=-58*Math.exp(-Math.pow(N/72,2))*Ce(-880,-320,e)*Ce(2180,1650,e),L=-112*Math.exp(-(Math.pow((i+150)/165,2)+Math.pow((e+820)/210,2)))*Ce(-965,-895,e),k=_*((i+80)*.145-(e-180)*.032),w=dl(i*.0018,e*.0018,4),T=dl(i*.0054,e*.0054,3),D=cs(i*.022,e*.022,2),X=1-_*.58,W=(w-.36)*(88*X+22)+(T-.42)*(22*X+6)+D*3.2;let Y=h+p+g+x+m+f+M+S+b+C+y+R+E+v+P+L+k+W;const U=Math.hypot(i-_e.x,e-_e.z);if(U<220){const j=1-Ce(12,220,U),O=865-Math.max(0,U-10)*.58+D*.5;Y=Y*(1-j)+O*j}const K=Math.exp(-(Math.pow((i-10)/185,2)+Math.pow((e-1960)/290,2)));Y*=1-K*.72;const H=Math.exp(-(Math.pow((i+530)/86,2)+Math.pow((e+1775)/86,2)));Y=Y*(1-H*.9)+2.4*(H*.9);const B=-28*(1-d)-2.6*d;let Z=B+(Y-B)*Math.pow(u,.54);const V=Math.exp(-(Math.pow((i-42)/105,2)+Math.pow((e-2165)/72,2)));if(V>.005){const j=li((2205-e)*.045+.15,-2.5,6.2);Z=Z*(1-V)+j*V}const $=Math.exp(-(Math.pow((i+522)/66,2)+Math.pow((e+1768)/66,2)));if($>.005){const j=(i+522+(e+1768))*.7071,O=j>=-4.8?li(2.8+Math.max(0,j-4)*.24,2.6,16):li(-2.2+(j+4.8)*.3,-9,-1.6);Z=Z*(1-$)+O*$}return Z}function sr(i,e,t){const n=i.points.length,r=new Array(n),s=new Array(n),o=Math.tan(t*Math.PI/180);for(let l=0;l<n;l++){const[c,u,d]=i.points[l],h=Math.max(1.2,uc(c,u));r[l]=h,s[l]=e.has(l)?d:h}const a=(l,c)=>{const d=Math.hypot(i.points[c][0]-i.points[l][0],i.points[c][1]-i.points[l][1])*o,h=s[c]-s[l];if(Math.abs(h)>d){const p=(Math.abs(h)-d)*Math.sign(h);!e.has(l)&&!e.has(c)?(s[l]+=p*.5,s[c]-=p*.5):e.has(c)?e.has(l)||(s[l]=s[c]-d*Math.sign(h)):s[c]=s[l]+d*Math.sign(h)}};for(let l=0;l<30;l++){for(let c=1;c<n-1;c++){if(e.has(c))continue;const u=(s[c-1]+s[c+1])*.5;s[c]=s[c]*.35+u*.2+r[c]*.45,s[c]=Math.max(1.2,s[c])}for(let c=0;c<n-1;c++)a(c,c+1);for(let c=n-2;c>=0;c--)a(c,c+1)}for(let l=0;l<24;l++){for(let c=0;c<n-1;c++)a(c,c+1);for(let c=n-2;c>=0;c--)a(c,c+1)}for(let l=0;l<n;l++)i.points[l][2]=Math.round(s[l]*10)/10}(function(){const e=new Map(Ni.map(a=>[a.id,a])),t=e.get("road_coastal");t&&sr(t,new Set([0,t.points.length-1]),18);const n=e.get("road_forestry");n&&sr(n,new Set([0,5]),22);const r=e.get("trail_summit_865");r&&sr(r,new Set([0,r.points.length-1]),27);const s=e.get("trail_secret_base");s&&r&&(s.points[0][2]=r.points[3][2],sr(s,new Set([0,s.points.length-1]),22));const o=e.get("trail_hidden_port");o&&n&&(o.points[0][2]=n.points[n.points.length-1][2],sr(o,new Set([0,o.points.length-1]),27));for(const a of Ni){const l=a.halfWidth+a.blendWidth+4;for(let c=0;c<a.points.length-1;c++){const[u,d,h]=a.points[c],[p,g,x]=a.points[c+1],m=p-u,f=g-d,M={ax:u,az:d,ay:h,bx:p,bz:g,by:x,dx:m,dz:f,len2:m*m+f*f||1,halfWidth:a.halfWidth,blendWidth:a.blendWidth,kind:a.kind},S=He(Math.min(u,p)-l,ae,fn-1),b=He(Math.max(u,p)+l,ae,fn-1),C=He(Math.min(d,g)-l,le,En-1),y=He(Math.max(d,g)+l,le,En-1);for(let R=C;R<=y;R++)for(let E=S;E<=b;E++)No[is(E,R)].push(M)}}for(const a of Je){if(!fs.has(a.id)||a.id==="H09")continue;let l=1/0,c=a.x,u=a.z,d=a.y;for(const N of Ni)if(N.kind==="road")for(let P=0;P<N.points.length-1;P++){const[L,k,w]=N.points[P],[T,D,X]=N.points[P+1],W=T-L,Y=D-k,U=li(((a.x-L)*W+(a.z-k)*Y)/(W*W+Y*Y||1),0,1),K=L+U*W,H=k+U*Y,B=w+U*(X-w),Z=Math.hypot(a.x-K,a.z-H);Z<l&&(l=Z,c=K,u=H,d=B)}const h=a.id==="H09"?7.35:Math.max(4.6,a.radiusZ-.8);if(l<=h+1)continue;const p=Math.sin(a.yaw),g=Math.cos(a.yaw),x=a.x+p*h,m=a.z+g*h,f=a.id==="H09"?a.y-1.65:a.y,M=c-x,S=u-m,b=a.id==="H09"?2:2.6,C=a.id==="H09"?5.5:10.5,y={ax:x,az:m,ay:f,bx:c,bz:u,by:d,dx:M,dz:S,len2:M*M+S*S||1,halfWidth:b,blendWidth:C,kind:"trail"},R=b+C+4,E=He(Math.min(x,c)-R,ae,fn-1),v=He(Math.max(x,c)+R,ae,fn-1),_=He(Math.min(m,u)-R,le,En-1),I=He(Math.max(m,u)+R,le,En-1);for(let N=_;N<=I;N++)for(let P=E;P<=v;P++)No[is(P,N)].push(y)}for(const a of Je){const l=Math.max(a.radiusX,a.radiusZ)+a.blendMargin+4,c=He(a.x-l,ae,fn-1),u=He(a.x+l,ae,fn-1),d=He(a.z-l,le,En-1),h=He(a.z+l,le,En-1);for(let p=d;p<=h;p++)for(let g=c;g<=u;g++)cc[is(g,p)].push(a)}})();function Hn(i,e){let t=uc(i,e);const n=He(i,ae,fn-1),r=He(e,le,En-1),s=is(n,r),o=No[s];let a=0,l=0,c=0,u=t;for(let y=0;y<o.length;y++){const R=o[y],E=li(((i-R.ax)*R.dx+(e-R.az)*R.dz)/R.len2,0,1),v=R.ax+R.dx*E,_=R.az+R.dz*E,I=Math.hypot(i-v,e-_),N=R.halfWidth+R.blendWidth;if(I>=N)continue;const P=1-Ce(R.halfWidth,N,I),L=1-Ce(R.halfWidth*.72,R.halfWidth*1.35,I),k=R.ay+(R.by-R.ay)*E;P>c&&(c=P,u=k),R.kind==="trail"?L>l&&(l=L):L>a&&(a=L)}let d=0,h=t;const p=cc[s];let g=0;for(let y=0;y<p.length;y++){const R=p[y],E=i-R.x,v=e-R.z,_=Math.cos(R.yaw),I=Math.sin(R.yaw),N=E*_-v*I,P=E*I+v*_,L=Math.max(0,Math.abs(N)-R.radiusX),k=Math.max(0,Math.abs(P)-R.radiusZ),w=Math.hypot(L,k);if(w<R.blendMargin){const T=1-Ce(0,R.blendMargin,w);T>d&&(d=T,h=R.y),T>g&&(g=T)}}const x=l>0?Math.sin(i*.45+e*.37)*.07:0,m=Math.max(c,d);if(m>0){const y=c+d,R=((u+x)*c+h*d)/y;t=t*(1-m)+R*m}const f=na(e),M=Math.abs(i-f),S=(1-Ce(4.5,18,M))*Ce(-850,-520,e)*Ce(2180,2e3,e),b=Math.hypot(i-Ze.x,e-Ze.z),C=1-Ce(28,145,b);return{height:t,roadWeight:a,trailWeight:l,streamWeight:S,coalWeight:C,terraceWeight:g}}function ce(i,e){return Hn(i,e).height}function hr(i,e,t=2){const n=ce(i-t,e),r=ce(i+t,e),s=ce(i,e-t),o=ce(i,e+t),a=n-r,l=2*t,c=s-o,u=Math.hypot(a,l,c)||1;return[a/u,l/u,c/u]}const Jn=.36,Up=1.72,fl=.58;function kp(i,e,t){if(!i.slopeAxis||i.slopeAxis==="none"||i.yMin===i.yMax)return i.yMax;if(i.slopeAxis==="x"){const s=Math.max(.001,i.maxX-i.minX),o=Math.max(0,Math.min(1,(e-i.minX)/s));return i.slopeDir===-1?i.yMax-(i.yMax-i.yMin)*o:i.yMin+(i.yMax-i.yMin)*o}const n=Math.max(.001,i.maxZ-i.minZ),r=Math.max(0,Math.min(1,(t-i.minZ)/n));return i.slopeDir===-1?i.yMax-(i.yMax-i.yMin)*r:i.yMin+(i.yMax-i.yMin)*r}class Fp{structures=[];registerStructures(e){this.structures=e}getStructures(){return this.structures}worldToLocal(e,t,n,r){const s=t-e.position.x,o=n-e.position.y,a=r-e.position.z,l=Math.cos(e.yaw),c=Math.sin(e.yaw);return[s*l-a*c,o,s*c+a*l]}localDeltaToWorld(e,t,n){const r=Math.cos(e.yaw),s=Math.sin(e.yaw);return[t*r+n*s,-t*s+n*r]}isInsideLocalBox(e,t,n,r){return t>=e.minX&&t<=e.maxX&&n>=e.minY&&n<=e.maxY&&r>=e.minZ&&r<=e.maxZ}resolveMove(e,t,n,r,s=Up){let o=Math.max(-ae+12,Math.min(ae-12,t.x)),a=Math.max(-le+12,Math.min(le-12,t.z)),l=e.y+n*r;const c=[];for(let x=0;x<this.structures.length;x++){const m=this.structures[x],f=m.worldBounds;o>=f.min.x-2&&o<=f.max.x+2&&a>=f.min.z-2&&a<=f.max.z+2&&c.push(m)}for(let x=0;x<2;x++)for(let m=0;m<c.length;m++){const f=c[m],[M,S,b]=this.worldToLocal(f,o,e.y,a),C=S+fl,y=S+s-.12;for(let R=0;R<f.colliders.length;R++){const E=f.colliders[R];if(E.maxY<=C||E.minY>=y)continue;const v=Math.max(E.minX,Math.min(E.maxX,M)),_=Math.max(E.minZ,Math.min(E.maxZ,b)),I=M-v,N=b-_,P=I*I+N*N;if(P<Jn*Jn){let L=0,k=0;if(P>1e-8){const D=Math.sqrt(P),X=Jn-D;L=I/D*X,k=N/D*X}else{const D=M-E.minX+Jn,X=E.maxX-M+Jn,W=b-E.minZ+Jn,Y=E.maxZ-b+Jn,U=Math.min(D,X,W,Y);U===D?L=-D:U===X?L=X:U===W?k=-W:k=Y}const[w,T]=this.localDeltaToWorld(f,L,k);o+=w,a+=T}}}let u=!1,d=null;for(let x=0;x<c.length;x++){const m=c[x],[f,M,S]=this.worldToLocal(m,o,e.y,a);if(m.caveOverrides){for(let b=0;b<m.caveOverrides.length;b++)if(this.isInsideLocalBox(m.caveOverrides[b],f,M+.8,S)){u=!0,d=m;break}}}let h=u?-999:Math.max(.25,ce(o,a)),p=1/0;for(let x=0;x<c.length;x++){const m=c[x],[f,M,S]=this.worldToLocal(m,o,e.y,a);!d&&o>=m.worldBounds.min.x&&o<=m.worldBounds.max.x&&a>=m.worldBounds.min.z&&a<=m.worldBounds.max.z&&e.y>=m.worldBounds.min.y-.5&&e.y<=m.worldBounds.max.y+1&&(d=m);for(let b=0;b<m.walkSurfaces.length;b++){const C=m.walkSurfaces[b];if(f>=C.minX-.12&&f<=C.maxX+.12&&S>=C.minZ-.12&&S<=C.maxZ+.12){const y=kp(C,f,S),R=m.position.y+y;R<=e.y+fl&&R>h&&(h=R)}}for(let b=0;b<m.colliders.length;b++){const C=m.colliders[b];if(f>=C.minX-.1&&f<=C.maxX+.1&&S>=C.minZ-.1&&S<=C.maxZ+.1){const y=m.position.y+C.minY;y>=e.y+s*.65&&y<p&&(p=y)}}}u&&h<-500&&(h=e.y),l+s>p&&(l=p-s);let g=!1;return(l<=h||n<=0&&l-h<.28&&e.y-h<.55)&&(l=h,g=!0),{position:new it(o,l,a),grounded:g,insideStructure:d}}}const An=128,Np=ae*2/An,zp=le*2/An,pl=[64,32,16,8],or=[240,580,1450,9e3];function Op(i){const e=i.getTexture("sand_coarse",1,1),t=i.getTexture("basalt_cliff",1,1),n=i.getTexture("lush_grass",1,1),r=i.getTexture("deep_moss",1,1),s=i.getTexture("gravel_road",1,1),o=i.getTexture("root_earth",1,1),a=i.getTexture("coal_seam_rock",1,1),l=i.getTexture("lichen_rock",1,1),c=new Fi({roughness:.93,metalness:.02});return c.onBeforeCompile=u=>{u.uniforms.uTexSand={value:e},u.uniforms.uTexRock={value:t},u.uniforms.uTexGrass={value:n},u.uniforms.uTexMoss={value:r},u.uniforms.uTexRoad={value:s},u.uniforms.uTexTrail={value:o},u.uniforms.uTexCoal={value:a},u.uniforms.uTexLichen={value:l},u.vertexShader=u.vertexShader.replace("#include <common>",`#include <common>
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

        diffuseColor.rgb *= col;`)},c.customProgramCacheKey=()=>"kuroiso-2x5km-terrain-v3",c}function Bp(i,e,t){const n=-ae+i*An,r=-le+e*An,s=An/t,o=t+1,a=o*o,l=a+4*o,c=new Float32Array(l*3),u=new Float32Array(l*3),d=new Float32Array(l*2),h=new Float32Array(l*4),p=Math.min(3.5,Math.max(1.5,s*.75));for(let v=0;v<=t;v++){const _=r+v*s;for(let I=0;I<=t;I++){const N=n+I*s,P=v*o+I,L=Hn(N,_),[k,w,T]=hr(N,_,p);c[P*3]=N,c[P*3+1]=L.height,c[P*3+2]=_,u[P*3]=k,u[P*3+1]=w,u[P*3+2]=T,d[P*2]=N*.08,d[P*2+1]=_*.08,h[P*4]=L.roadWeight,h[P*4+1]=L.trailWeight,h[P*4+2]=L.streamWeight,h[P*4+3]=L.coalWeight>.05?L.coalWeight:-L.terraceWeight}}const g=t*t*6+4*t*6,x=l>65535?new Uint32Array(g):new Uint16Array(g);let m=0;for(let v=0;v<t;v++)for(let _=0;_<t;_++){const I=v*o+_,N=I+1,P=I+o,L=P+1;x[m++]=I,x[m++]=P,x[m++]=N,x[m++]=N,x[m++]=P,x[m++]=L}const f=s*1.45+3;let M=a;const S=(v,_)=>{const I=M;for(let N=0;N<v.length;N++){const P=v[N],L=M++;c[L*3]=c[P*3],c[L*3+1]=c[P*3+1]-f,c[L*3+2]=c[P*3+2],u[L*3]=u[P*3],u[L*3+1]=u[P*3+1],u[L*3+2]=u[P*3+2],d[L*2]=d[P*2],d[L*2+1]=d[P*2+1],h[L*4]=h[P*4],h[L*4+1]=h[P*4+1],h[L*4+2]=h[P*4+2],h[L*4+3]=h[P*4+3]}for(let N=0;N<v.length-1;N++){const P=v[N],L=v[N+1],k=I+N,w=I+N+1;_?(x[m++]=P,x[m++]=L,x[m++]=k,x[m++]=L,x[m++]=w,x[m++]=k):(x[m++]=P,x[m++]=k,x[m++]=L,x[m++]=L,x[m++]=k,x[m++]=w)}},b=[],C=[],y=[],R=[];for(let v=0;v<o;v++)b.push(v),C.push(t*o+v),y.push(v*o),R.push(v*o+t);S(b,!1),S(C,!0),S(y,!0),S(R,!1);const E=new we;return E.setAttribute("position",new pe(c,3)),E.setAttribute("normal",new pe(u,3)),E.setAttribute("uv",new pe(d,2)),E.setAttribute("aBiome",new pe(h,4)),E.setIndex(new pe(x,1)),E.computeBoundingSphere(),E}class Hp{group=new fe;material;chunks=[];lastCamX=Number.NaN;lastCamZ=Number.NaN;pending=[];constructor(e){this.group.name="KuroisoStreamingTerrain",this.material=Op(e);for(let t=0;t<zp;t++)for(let n=0;n<Np;n++){const r=-ae+n*An,s=-le+t*An,o=r+An*.5,a=s+An*.5;let l=-999;for(let c=0;c<=2;c++)for(let u=0;u<=2;u++){const d=Hn(r+u*64,s+c*64).height;d>l&&(l=d)}this.chunks.push({cx:n,cz:t,centerX:o,centerZ:a,isDeepOcean:l<-16,currentLod:-1,mesh:null})}}desiredLodForDist(e){return e<or[0]?0:e<or[1]?1:e<or[2]?2:3}rebuildChunk(e,t){const n=pl[t],r=Bp(e.cx,e.cz,n);if(e.mesh)e.mesh.geometry.dispose(),e.mesh.geometry=r;else{const s=new Lt(r,this.material);s.receiveShadow=!0,s.castShadow=t<=1,s.matrixAutoUpdate=!1,s.updateMatrix(),this.group.add(s),e.mesh=s}e.mesh.castShadow=t<=1,e.currentLod=t}warmStart(e,t){for(let n=0;n<this.chunks.length;n++){const r=this.chunks[n];if(r.isDeepOcean)continue;const s=Math.hypot(r.centerX-e,r.centerZ-t),o=s<210?0:s<440?1:3;r.currentLod!==o&&this.rebuildChunk(r,o)}this.lastCamX=e,this.lastCamZ=t,this.refreshQueue(e,t)}refreshQueue(e,t){this.pending.length=0;for(let n=0;n<this.chunks.length;n++){const r=this.chunks[n];if(r.isDeepOcean)continue;const s=Math.hypot(r.centerX-e,r.centerZ-t),o=this.desiredLodForDist(s);if(r.currentLod!==o){if(r.currentLod!==-1){const a=or[r.currentLod],l=r.currentLod>0?or[r.currentLod-1]:0;if(s>l-36&&s<a+36)continue}this.pending.push({rec:r,desiredLod:o,dist:s})}}this.pending.sort((n,r)=>n.dist-r.dist)}update(e,t,n=4.2){const r=Math.hypot(e-this.lastCamX,t-this.lastCamZ);if((Number.isNaN(r)||r>24||this.pending.length===0)&&(Number.isNaN(r)||r>24)&&(this.lastCamX=e,this.lastCamZ=t,this.refreshQueue(e,t)),this.pending.length===0)return;const s=performance.now();let o=0;for(;this.pending.length>0&&o<4;){const a=this.pending.shift();if(a.rec.currentLod!==a.desiredLod&&(this.rebuildChunk(a.rec,a.desiredLod),o++),performance.now()-s>=n)break}}getStats(){let e=0,t=0,n=0,r=0,s=0,o=0;for(let a=0;a<this.chunks.length;a++){const l=this.chunks[a];if(!l.mesh)continue;e++;const c=pl[l.currentLod];o+=c*c*2+c*8,l.currentLod===0?t++:l.currentLod===1?n++:l.currentLod===2?r++:s++}return{activeChunks:e,lod0Count:t,lod1Count:n,lod2Count:r,lod3Count:s,pendingQueue:this.pending.length,approxTriangles:o}}}const Gp=[{id:0,name:"細身若杉(4枝)",leafGroup:"cedar",style:"conifer_tier",biome:"mountain",height:7.6,trunkRadius:.16,branchCount:4,stems:1,leanX:.25,leanZ:-.15,sCurve:.18,crownStart:.28,branchReach:1.55,branchPitch:-.18,leafRadius:1.45,leafFlatness:.56,deadStubs:0,seed:101},{id:1,name:"根曲がり斜面杉(6枝)",leafGroup:"cedar",style:"conifer_tier",biome:"mountain",height:11.2,trunkRadius:.24,branchCount:6,stems:1,leanX:.85,leanZ:.35,sCurve:.65,crownStart:.3,branchReach:2.15,branchPitch:-.22,leafRadius:1.75,leafFlatness:.52,deadStubs:0,seed:202},{id:2,name:"標準山杉(8枝)",leafGroup:"cedar",style:"conifer_tier",biome:"mountain",height:15.6,trunkRadius:.34,branchCount:8,stems:1,leanX:-.35,leanZ:.28,sCurve:.3,crownStart:.28,branchReach:2.65,branchPitch:-.2,leafRadius:2.05,leafFlatness:.5,deadStubs:0,seed:303},{id:3,name:"双幹夫婦杉(10枝)",leafGroup:"cedar",style:"conifer_tier",biome:"mountain",height:17.4,trunkRadius:.38,branchCount:10,stems:2,leanX:.4,leanZ:-.3,sCurve:.35,crownStart:.26,branchReach:2.55,branchPitch:-.16,leafRadius:1.95,leafFlatness:.52,deadStubs:0,seed:404},{id:4,name:"高枝払い老杉(11枝)",leafGroup:"cedar",style:"conifer_tier",biome:"mountain",height:21.2,trunkRadius:.44,branchCount:11,stems:1,leanX:.3,leanZ:.42,sCurve:.28,crownStart:.46,branchReach:2.95,branchPitch:-.14,leafRadius:2.15,leafFlatness:.48,deadStubs:2,seed:505},{id:5,name:"古檜重層樹冠(13枝)",leafGroup:"cedar",style:"conifer_tier",biome:"mountain",height:19.6,trunkRadius:.42,branchCount:13,stems:1,leanX:-.52,leanZ:-.22,sCurve:.4,crownStart:.24,branchReach:3.15,branchPitch:-.26,leafRadius:2.1,leafFlatness:.46,deadStubs:1,seed:606},{id:6,name:"風衝片枝杉(14枝)",leafGroup:"cedar",style:"conifer_tier",biome:"ridge",height:14.5,trunkRadius:.36,branchCount:14,stems:1,leanX:1.45,leanZ:.55,sCurve:.72,crownStart:.32,branchReach:2.8,branchPitch:-.12,leafRadius:1.8,leafFlatness:.45,deadStubs:2,seed:707},{id:7,name:"御神木級大杉(15枝)",leafGroup:"cedar",style:"conifer_tier",biome:"mountain",height:25.5,trunkRadius:.62,branchCount:15,stems:1,leanX:-.25,leanZ:.32,sCurve:.42,crownStart:.26,branchReach:3.95,branchPitch:-.22,leafRadius:2.55,leafFlatness:.48,deadStubs:2,seed:808},{id:8,name:"岩場盆栽小松(4枝)",leafGroup:"cedar",style:"pine_pad",biome:"coastal",height:5.8,trunkRadius:.19,branchCount:4,stems:1,leanX:1.15,leanZ:-.45,sCurve:.85,crownStart:.38,branchReach:2.1,branchPitch:.14,leafRadius:1.55,leafFlatness:.42,deadStubs:0,seed:909},{id:9,name:"斜傾海岸黒松(6枝)",leafGroup:"cedar",style:"pine_pad",biome:"coastal",height:10.6,trunkRadius:.3,branchCount:6,stems:1,leanX:1.65,leanZ:.6,sCurve:.95,crownStart:.42,branchReach:2.95,branchPitch:.16,leafRadius:1.95,leafFlatness:.4,deadStubs:1,seed:1010},{id:10,name:"S字幹尾根松(8枝)",leafGroup:"cedar",style:"pine_pad",biome:"ridge",height:13.5,trunkRadius:.35,branchCount:8,stems:1,leanX:-.95,leanZ:.85,sCurve:1.15,crownStart:.4,branchReach:3.15,branchPitch:.18,leafRadius:2,leafFlatness:.38,deadStubs:1,seed:1111},{id:11,name:"二股大黒松(10枝)",leafGroup:"cedar",style:"pine_pad",biome:"coastal",height:16,trunkRadius:.44,branchCount:10,stems:2,leanX:.72,leanZ:-.64,sCurve:.78,crownStart:.38,branchReach:3.4,branchPitch:.22,leafRadius:2.15,leafFlatness:.38,deadStubs:1,seed:1212},{id:12,name:"高台傘松(12枝)",leafGroup:"cedar",style:"pine_pad",biome:"ridge",height:18,trunkRadius:.46,branchCount:12,stems:1,leanX:-.6,leanZ:-.45,sCurve:.65,crownStart:.52,branchReach:3.9,branchPitch:.26,leafRadius:2.25,leafFlatness:.36,deadStubs:1,seed:1313},{id:13,name:"懸崖老松(15枝)",leafGroup:"cedar",style:"pine_pad",biome:"coastal",height:14.2,trunkRadius:.48,branchCount:15,stems:1,leanX:2.15,leanZ:-.75,sCurve:1.25,crownStart:.32,branchReach:3.75,branchPitch:.1,leafRadius:1.95,leafFlatness:.38,deadStubs:2,seed:1414},{id:14,name:"林床若木クヌギ(4枝)",leafGroup:"broad",style:"broad_crown",biome:"understory",height:5.2,trunkRadius:.12,branchCount:4,stems:1,leanX:.32,leanZ:.24,sCurve:.28,crownStart:.38,branchReach:1.55,branchPitch:.48,leafRadius:1.55,leafFlatness:.78,deadStubs:0,seed:1515},{id:15,name:"細枝ヒメシャラ(5枝)",leafGroup:"broad",style:"broad_crown",biome:"valley",height:8.2,trunkRadius:.17,branchCount:5,stems:1,leanX:-.48,leanZ:.35,sCurve:.42,crownStart:.42,branchReach:2.05,branchPitch:.52,leafRadius:1.8,leafFlatness:.74,deadStubs:0,seed:1616},{id:16,name:"三又雑木コナラ(7枝)",leafGroup:"broad",style:"broad_crown",biome:"mixed",height:11.6,trunkRadius:.28,branchCount:7,stems:2,leanX:.42,leanZ:-.4,sCurve:.45,crownStart:.34,branchReach:2.75,branchPitch:.44,leafRadius:2.15,leafFlatness:.72,deadStubs:0,seed:1717},{id:17,name:"横張り山ブナ(9枝)",leafGroup:"broad",style:"broad_crown",biome:"valley",height:14.2,trunkRadius:.38,branchCount:9,stems:1,leanX:-.55,leanZ:.48,sCurve:.5,crownStart:.36,branchReach:3.45,branchPitch:.36,leafRadius:2.4,leafFlatness:.66,deadStubs:0,seed:1818},{id:18,name:"斜幹渓谷トチ(11枝)",leafGroup:"broad",style:"broad_crown",biome:"valley",height:16,trunkRadius:.42,branchCount:11,stems:1,leanX:1.25,leanZ:-.55,sCurve:.7,crownStart:.35,branchReach:3.65,branchPitch:.38,leafRadius:2.45,leafFlatness:.68,deadStubs:1,seed:1919},{id:19,name:"扇樹冠ケヤキ(12枝)",leafGroup:"broad",style:"broad_crown",biome:"mixed",height:18.6,trunkRadius:.48,branchCount:12,stems:1,leanX:.25,leanZ:.22,sCurve:.32,crownStart:.34,branchReach:4.1,branchPitch:.62,leafRadius:2.5,leafFlatness:.65,deadStubs:0,seed:2020},{id:20,name:"株立ち雑木(14枝)",leafGroup:"broad",style:"broad_crown",biome:"mixed",height:12.8,trunkRadius:.24,branchCount:14,stems:3,leanX:-.3,leanZ:.45,sCurve:.4,crownStart:.3,branchReach:3.15,branchPitch:.5,leafRadius:2.05,leafFlatness:.72,deadStubs:0,seed:2121},{id:21,name:"巨木古ブナ・楠(15枝)",leafGroup:"broad",style:"broad_crown",biome:"valley",height:22,trunkRadius:.66,branchCount:15,stems:1,leanX:-.65,leanZ:-.45,sCurve:.55,crownStart:.32,branchReach:4.85,branchPitch:.42,leafRadius:2.95,leafFlatness:.64,deadStubs:1,seed:2222},{id:22,name:"林縁小灌木(4枝)",leafGroup:"broad",style:"broad_crown",biome:"understory",height:3.4,trunkRadius:.09,branchCount:4,stems:2,leanX:.2,leanZ:-.18,sCurve:.22,crownStart:.22,branchReach:1.25,branchPitch:.45,leafRadius:1.25,leafFlatness:.8,deadStubs:0,seed:2323},{id:23,name:"株立ち低木(5枝)",leafGroup:"broad",style:"broad_crown",biome:"understory",height:4.5,trunkRadius:.11,branchCount:5,stems:3,leanX:-.22,leanZ:.25,sCurve:.26,crownStart:.24,branchReach:1.5,branchPitch:.48,leafRadius:1.38,leafFlatness:.76,deadStubs:0,seed:2424},{id:24,name:"枝垂れ渓流木(6枝)",leafGroup:"broad",style:"broad_crown",biome:"valley",height:6.8,trunkRadius:.16,branchCount:6,stems:1,leanX:.75,leanZ:.32,sCurve:.55,crownStart:.35,branchReach:2.35,branchPitch:-.05,leafRadius:1.75,leafFlatness:.7,deadStubs:0,seed:2525},{id:25,name:"丸冠中低木(8枝)",leafGroup:"broad",style:"broad_crown",biome:"understory",height:7.8,trunkRadius:.19,branchCount:8,stems:1,leanX:-.28,leanZ:-.24,sCurve:.3,crownStart:.28,branchReach:2.25,branchPitch:.36,leafRadius:1.85,leafFlatness:.75,deadStubs:0,seed:2626},{id:26,name:"広がりヤブツバキ(10枝)",leafGroup:"cedar",style:"broad_crown",biome:"understory",height:6.2,trunkRadius:.18,branchCount:10,stems:2,leanX:.35,leanZ:.28,sCurve:.32,crownStart:.24,branchReach:2.2,branchPitch:.32,leafRadius:1.58,leafFlatness:.72,deadStubs:0,seed:2727},{id:27,name:"台風折れ片枝杉(5枝)",leafGroup:"cedar",style:"conifer_tier",biome:"ridge",height:13.6,trunkRadius:.36,branchCount:5,stems:1,leanX:1.05,leanZ:-.6,sCurve:.62,crownStart:.38,branchReach:2.55,branchPitch:-.15,leafRadius:1.95,leafFlatness:.5,deadStubs:3,seed:2828},{id:28,name:"高幹二層冠杉(7枝)",leafGroup:"cedar",style:"conifer_tier",biome:"mountain",height:17.2,trunkRadius:.34,branchCount:7,stems:1,leanX:-.4,leanZ:.52,sCurve:.38,crownStart:.42,branchReach:2.75,branchPitch:-.2,leafRadius:2.15,leafFlatness:.48,deadStubs:1,seed:2929},{id:29,name:"曲幹古山桜型(9枝)",leafGroup:"broad",style:"broad_crown",biome:"mixed",height:12.2,trunkRadius:.34,branchCount:9,stems:1,leanX:1.35,leanZ:.68,sCurve:.88,crownStart:.36,branchReach:3.35,branchPitch:.24,leafRadius:2.2,leafFlatness:.6,deadStubs:1,seed:3030},{id:30,name:"密生複層ヒバ(12枝)",leafGroup:"cedar",style:"conifer_tier",biome:"mountain",height:15.2,trunkRadius:.36,branchCount:12,stems:1,leanX:-.28,leanZ:-.35,sCurve:.34,crownStart:.2,branchReach:2.75,branchPitch:-.28,leafRadius:1.95,leafFlatness:.52,deadStubs:0,seed:3131},{id:31,name:"原生林絡み古木(15枝)",leafGroup:"broad",style:"broad_crown",biome:"valley",height:20.5,trunkRadius:.58,branchCount:15,stems:2,leanX:.85,leanZ:-.72,sCurve:.82,crownStart:.28,branchReach:4.45,branchPitch:.35,leafRadius:2.65,leafFlatness:.62,deadStubs:2,seed:3232}];function dc(i){let e=i>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}class zo{pos=[];norm=[];uv=[];ao=[];idx=[];addTube(e,t,n,r=.72,s=.96){if(e.length<2)return;const o=this.pos.length/3;let a=0;for(let c=0;c<e.length;c++){const[u,d,h,p]=e[c];c>0&&(a+=Math.hypot(u-e[c-1][0],d-e[c-1][1],h-e[c-1][2]));const g=e[Math.max(0,c-1)],x=e[Math.min(e.length-1,c+1)];let m=x[0]-g[0],f=x[1]-g[1],M=x[2]-g[2];const S=Math.hypot(m,f,M)||1;m/=S,f/=S,M/=S;const b=Math.abs(f)<.92?0:1,C=Math.abs(f)<.92?1:0,y=0;let R=f*y-M*C,E=M*b-m*y,v=m*C-f*b;const _=Math.hypot(R,E,v)||1;R/=_,E/=_,v/=_;const I=f*v-M*E,N=M*R-m*v,P=m*E-f*R,L=c/(e.length-1),k=r+(s-r)*L,w=a*n;for(let T=0;T<=t;T++){const D=T/t*Math.PI*2,X=Math.cos(D),W=Math.sin(D),Y=R*X+I*W,U=E*X+N*W,K=v*X+P*W;this.pos.push(u+Y*p,d+U*p,h+K*p),this.norm.push(Y,U,K),this.uv.push(T/t,w),this.ao.push(k)}}const l=t+1;for(let c=0;c<e.length-1;c++){const u=o+c*l,d=o+(c+1)*l;for(let h=0;h<t;h++)this.idx.push(u+h,d+h,u+h+1),this.idx.push(u+h+1,d+h,d+h+1)}}addFoliageCluster(e,t,n,r,s,o,a,l,c,u,d,h){const p=u?5:6,g=d()*Math.PI*2,x=Math.cos(l),m=Math.sin(l),f=Math.cos(c),M=Math.sin(c),S=this.pos.length/3,b=(_,I,N,P,L)=>{const k=Math.atan2(N,_);let w=I,T=1;a==="conifer_tier"?(T=1+.22*Math.sin(k*3+g)+.12*Math.cos(k*2-g),w<0?w*=.44:w*=1.12,w-=Math.max(0,.42-Math.abs(I))*.24*(T-.84)):a==="pine_pad"?(T=1+.2*Math.sin(k*3+g)+.13*Math.cos(k*4+g*1.3),w=w<0?w*.3:w*.9):(T=1+.18*Math.sin(k*3+I*1.4+g)+.12*Math.cos(k*2-g),w<0&&(w*=.64));const D=_*r*T,X=w*s*T,W=N*o*T,Y=X*f-W*M,U=X*M+W*f,K=D*x+U*m+e,H=-D*m+U*x+n,B=Y+t;this.pos.push(K,B,H);const Z=_*.82,V=I*.72+.68,$=N*.82,j=V*f-$*M,O=V*M+$*f,q=Z*x+O*m,ut=-Z*m+O*x,ht=Math.hypot(q,j,ut)||1;this.norm.push(q/ht,j/ht,ut/ht),this.uv.push(P,L);const G=.72+Math.max(0,Math.min(1,(I+.85)*.56))*.18+h*.06;this.ao.push(Math.max(.64,Math.min(.96,G)))},C=u?[-.08]:[-.38,.34];b(0,-1,0,.5,0);const y=p+1;for(let _=0;_<C.length;_++){const I=C[_],N=Math.cos(I),P=Math.sin(I),L=(_+1)/(C.length+1)*1.4;for(let k=0;k<=p;k++){const w=k/p*Math.PI*2;b(Math.cos(w)*N,P,Math.sin(w)*N,k/p*1.6,L)}}const R=S+1+C.length*y;b(0,1,0,.5,1.4);const E=S+1;for(let _=0;_<p;_++)this.idx.push(S,E+_,E+_+1);for(let _=0;_<C.length-1;_++){const I=S+1+_*y,N=I+y;for(let P=0;P<p;P++)this.idx.push(I+P,N+P+1,I+P+1),this.idx.push(I+P,N+P,N+P+1)}const v=S+1+(C.length-1)*y;for(let _=0;_<p;_++)this.idx.push(v+_,R,v+_+1)}finalize(){return{positions:new Float32Array(this.pos),normals:new Float32Array(this.norm),uvs:new Float32Array(this.uv),ao:new Float32Array(this.ao),indices:new Uint16Array(this.idx),vertexCount:this.pos.length/3,triCount:this.idx.length/3}}}function Xr(i,e,t,n,r,s,o,a,l){const c=i*e,u=Math.sin(i*Math.PI*1.35+o)*s*i,d=Math.cos(i*Math.PI*1.15-o)*s*.45*i,h=a+n*Math.pow(i,1.25)+u,p=l+r*Math.pow(i,1.25)+d,g=i<.14?1+Math.pow(1-i/.14,2)*.42:1,x=Math.max(.035,t*Math.pow(1-i*.84,.92)*g);return[h,c,p,x]}function ml(i,e){const t=dc(i.seed*7919+17),n=new zo,r=new zo,s=e?2:3,o=e?3:4,a=3,l=[];for(let d=0;d<i.stems;d++){const h=d/i.stems*Math.PI*2+t()*.9,p=i.stems===1?0:(.55+t()*.55)*(i.height*.08),g=i.height*(d===0?1:.78+t()*.18),x=i.trunkRadius*(d===0?1:.72+t()*.18),m=i.leanX+Math.cos(h)*p,f=i.leanZ+Math.sin(h)*p,M=i.sCurve*(.75+t()*.5),S=t()*Math.PI*2,b=i.stems===1?0:Math.cos(h)*x*.75,C=i.stems===1?0:Math.sin(h)*x*.75;l.push({height:g,baseR:x,leanX:m,leanZ:f,sCurve:M,phase:S,ox:b,oz:C});const y=[],R=Xr(0,g,x,m,f,M,S,b,C);y.push([R[0],-.55,R[2],R[3]*1.15]);for(let _=0;_<=s;_++)y.push(Xr(_/s,g,x,m,f,M,S,b,C));n.addTube(y,o,.35,.65,.92);const E=y[y.length-1],v=i.leafRadius*(i.style==="conifer_tier"?.62:.92);r.addFoliageCluster(E[0],E[1]+v*i.leafFlatness*.25,E[2],v,v*(i.style==="conifer_tier"?1.18:i.leafFlatness),v*(.9+t()*.22),i.style,t()*Math.PI*2,0,e,t,1)}const c=2.399963229728653,u=t()*Math.PI*2;for(let d=0;d<i.branchCount;d++){const h=l[d%l.length],p=i.branchCount<=1?.65:d/(i.branchCount-1),g=Math.min(.93,Math.max(i.crownStart*.85,i.crownStart+p*(.91-i.crownStart)+(t()-.5)*.06)),x=Xr(g,h.height,h.baseR,h.leanX,h.leanZ,h.sCurve,h.phase,h.ox,h.oz);let m=u+d*c+(t()-.5)*.55;if(i.biome==="ridge"||i.biome==="coastal"&&Math.hypot(i.leanX,i.leanZ)>1.2){const k=Math.atan2(i.leanZ,i.leanX),w=Math.atan2(Math.sin(k-m),Math.cos(k-m));m+=w*.22}const f=i.style==="conifer_tier"?1.18-p*.62:i.style==="pine_pad"?.92+Math.sin(p*Math.PI)*.34:.84+Math.sin(p*Math.PI*.85)*.36,M=i.branchReach*f*(.76+t()*.48),S=i.branchPitch+(p-.35)*(i.style==="conifer_tier"?.28:.24)+(t()-.5)*.22,b=Math.cos(m)*Math.cos(S),C=Math.sin(S),y=Math.sin(m)*Math.cos(S),R=Math.max(.04,Math.min(x[3]*.68,h.baseR*(.34-p*.14))),E=i.style==="conifer_tier"?-M*.08:M*.1,v=[x[0]+b*M*.52,x[1]+C*M*.52+E,x[2]+y*M*.52,R*.64],_=[x[0]+b*M,x[1]+C*M+(i.style==="pine_pad"?M*.12:0),x[2]+y*M,Math.max(.025,R*.28)];(!e||d%2===0||i.branchCount<=7)&&n.addTube(e?[x,_]:[x,v,_],a,.45,.68,.94);const N=!e&&M>1.85&&(d%2===0||i.branchCount>=10);let P=null;if(N){const k=m+(d%2===0?1:-1)*(.42+t()*.34),w=S+.16+(t()-.5)*.18,T=M*(.46+t()*.18);P=[v[0]+Math.cos(k)*Math.cos(w)*T,v[1]+Math.sin(w)*T,v[2]+Math.sin(k)*Math.cos(w)*T,Math.max(.022,R*.24)],n.addTube([v,P],3,.5,.74,.95)}if(!e||d%2===0||i.branchCount<=8){const k=i.leafRadius*(.72+f*.32)*(.82+t()*.36)*(e?1.24:1),w=k*i.leafFlatness*(.88+t()*.26),T=i.style==="conifer_tier"?.22:(t()-.5)*.18,D=v[0]*.28+_[0]*.72,X=v[1]*.28+_[1]*.72+(i.style==="pine_pad"?w*.35:.12),W=v[2]*.28+_[2]*.72;if(r.addFoliageCluster(D,X,W,k*(.92+t()*.22),w,k*(.88+t()*.26),i.style,m,T,e,t,p),P){const Y=k*(.68+t()*.16);r.addFoliageCluster(P[0],P[1]+(i.style==="pine_pad"?Y*i.leafFlatness*.35:.08),P[2],Y,Y*i.leafFlatness,Y*.94,i.style,m+.5,T*.7,!0,t,p)}}}if(!e&&i.deadStubs>0)for(let d=0;d<i.deadStubs;d++){const h=l[0],p=Math.max(.16,i.crownStart-.04-d*.06),g=Xr(p,h.height,h.baseR,h.leanX,h.leanZ,h.sCurve,h.phase,h.ox,h.oz),x=u+d*2.1+1.1,m=.85+t()*1.15,f=[g[0]+Math.cos(x)*m,g[1]-.18+(t()-.5)*.35,g[2]+Math.sin(x)*m,.025];n.addTube([g,f],3,.5,.62,.8)}return{wood:n.finalize(),leaf:r.finalize()}}function Wp(){const i=(n,r,s)=>{const o=dc(s),a=new zo;for(let l=0;l<r.length;l++){const[c,u,d,h,p,g]=r[l];a.addFoliageCluster(c,u,d,h,p,g,n,o()*Math.PI*2,0,!0,o,l/Math.max(1,r.length-1))}return a.finalize()},e=[i("conifer_tier",[[0,7.5,0,4.8,7.2,4.6],[.4,15.2,-.3,3.1,6.2,3]],5101),i("conifer_tier",[[-1.6,8.8,.4,4.2,7.5,4],[1.9,10.6,-.5,3.8,8.2,3.7]],5202),i("pine_pad",[[.8,9.2,.2,6.2,3.6,5.4],[-1.4,12.6,-.6,4.6,3,4.2]],5303)],t=[i("broad_crown",[[0,7.2,0,5.8,4.8,5.5]],5401),i("broad_crown",[[-2,8.5,.8,4.4,3.8,4.2],[2.1,9.2,-.7,4.6,4,4.3]],5502),i("broad_crown",[[0,4.8,0,5.2,3.6,4.9],[1.8,6.4,1.2,3.4,2.8,3.3]],5603)];return{cedar:e,broad:t}}let Yr=null;function Vp(){return Yr||(Yr=Gp.map(i=>{const e=ml(i,!1),t=ml(i,!0);return{spec:i,woodLod0:e.wood,leafLod0:e.leaf,woodLod1:t.wood,leafLod1:t.leaf}}),Yr)}const yn=64,ar=128,lr=256,Ai=64;function Zr(i,e,t){let n=(Math.imul(i,374761393)^Math.imul(e,668265263)^Math.imul(t,1442695041))>>>0;return()=>{n=n+1831565813|0;let r=Math.imul(n^n>>>15,1|n);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296}}function qr(i,e){const t=[],n=[],r=[],s=[];for(let l=0;l<3;l++){const c=l/3*Math.PI,u=Math.cos(c)*i*.5,d=Math.sin(c)*i*.5,h=-Math.sin(c)*i*.14,p=Math.cos(c)*i*.14,g=l*4;t.push(-u,0,-d,u,0,d,-u*.72+h,e,-d*.72+p,u*.72+h,e,d*.72+p);for(let x=0;x<4;x++)n.push(0,1,0);r.push(0,0,1,0,0,1,1,1),s.push(g,g+1,g+2,g+1,g+3,g+2)}const a=new we;return a.setAttribute("position",new ue(t,3)),a.setAttribute("normal",new ue(n,3)),a.setAttribute("uv",new ue(r,2)),a.setIndex(s),a}function $r(i,e,t,n,r,s,o){const a=i.getTexture(e,1,1),l=new Fi({map:a,color:t,roughness:.78,metalness:0,side:sn,alphaTest:.34});return l.onBeforeCompile=c=>{c.uniforms.uWindTime=n,c.uniforms.uBladeDensity={value:r},c.uniforms.uMaxFade={value:s},c.uniforms.uWindStr={value:o},c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
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
        normal = normalize(vNormal);`)},l.customProgramCacheKey=()=>`wind-grass-v2-${e}-${r}-${s}`,l}function On(i,e=1.07){if(i.length===0)return null;let t=0,n=0;for(let b=0;b<i.length;b++){const C=i[b].geo;t+=C.vertexCount,n+=C.indices.length}if(t===0||n===0)return null;const r=new Float32Array(t*3),s=new Float32Array(t*3),o=new Float32Array(t*2),a=new Float32Array(t*3),l=new Uint32Array(n);let c=0,u=0,d=1/0,h=1/0,p=1/0,g=-1/0,x=-1/0,m=-1/0;for(let b=0;b<i.length;b++){const C=i[b],y=C.geo,R=y.positions,E=y.normals,v=y.uvs,_=y.ao,I=y.indices,N=y.vertexCount,P=Math.cos(C.rotY),L=Math.sin(C.rotY),k=Math.cos(C.tiltX),w=Math.sin(C.tiltX),T=Math.cos(C.tiltZ),D=Math.sin(C.tiltZ),X=T*P-D*w*L,W=-D*k,Y=T*L+D*w*P,U=D*P+T*w*L,K=T*k,H=D*L-T*w*P,B=-k*L,Z=w,V=k*P,$=C.scXZ,j=C.scY,O=C.wx,q=C.wy,ut=C.wz,ht=C.rMul,G=C.gMul,mt=C.bMul,nt=c;for(let st=0;st<N;st++){const ct=st*3,et=st*2,tt=R[ct]*$,F=R[ct+1]*j,A=R[ct+2]*$,J=X*tt+W*F+Y*A+O,ot=U*tt+K*F+H*A+q,dt=B*tt+Z*F+V*A+ut,lt=(nt+st)*3,Et=(nt+st)*2;r[lt]=J,r[lt+1]=ot,r[lt+2]=dt,J<d&&(d=J),J>g&&(g=J),ot<h&&(h=ot),ot>x&&(x=ot),dt<p&&(p=dt),dt>m&&(m=dt);const gt=E[ct],_t=E[ct+1],zt=E[ct+2];s[lt]=X*gt+W*_t+Y*zt,s[lt+1]=U*gt+K*_t+H*zt,s[lt+2]=B*gt+Z*_t+V*zt,o[Et]=v[et],o[Et+1]=v[et+1];const Mt=_[st]*e;a[lt]=ht*Mt,a[lt+1]=G*Mt,a[lt+2]=mt*Mt}for(let st=0;st<I.length;st++)l[u++]=nt+I[st];c+=N}const f=new we;f.setAttribute("position",new pe(r,3)),f.setAttribute("normal",new pe(s,3)),f.setAttribute("uv",new pe(o,2)),f.setAttribute("color",new pe(a,3)),f.setIndex(new pe(l,1)),f.boundingBox=new In(new it(d,h,p),new it(g,x,m));const M=new it((d+g)*.5,(h+x)*.5,(p+m)*.5),S=Math.hypot(g-d,x-h,m-p)*.5;return f.boundingSphere=new di(M,S),f}const xl=[8,9,11,13,1,6,16,19,20,29],Kr=[15,16,17,18,19,20,21,24,29,31],gl=[0,1,2,3,4,5,6,7,10,12,27,28,30],bl=[0,1,2,3,4,5,6,7,9,10,11,12,13,15,16,17,18,19,20,21,27,28,29,30,31],_l=[0,8,14,15,22,23,24,25,26],Ml=[6,8,9,10,12,13,22,23,26,27];function vl(i,e,t){return t()<.28?_l[Math.floor(t()*_l.length)]:i<110?xl[Math.floor(t()*xl.length)]:i>=585?Ml[Math.floor(t()*Ml.length)]:i>=435?t()<.84?gl[Math.floor(t()*gl.length)]:Kr[Math.floor(t()*Kr.length)]:e>.15||t()<.36?Kr[Math.floor(t()*Kr.length)]:bl[Math.floor(t()*bl.length)]}class Xp{group=new fe;windUniform={value:0};archetypes;farCedarShapes;farBroadShapes;barkMat;cedarLeafMat;broadLeafMat;farCedarMat;farBroadMat;boulderGeo;boulderMat;weedGeo;pampasGeo;fernGeo;flowerWeedGeo;weedMat;pampasMat;fernMat;flowerWeedMat;nearCells=new Map;midCells=new Map;farCells=new Map;grassCells=new Map;dummy=new ye;tmpColor=new Wt;constructor(e){this.group.name="KuroisoStreamingFoliage",this.archetypes=Vp();const t=Wp();this.farCedarShapes=t.cedar,this.farBroadShapes=t.broad,this.barkMat=e.getMaterial("tree_bark",{repeatX:1,repeatY:3,roughness:.94,tint:14208706,bumpScale:.06}).clone(),this.barkMat.vertexColors=!0,this.cedarLeafMat=e.getMaterial("foliage_green",{repeatX:2,repeatY:2,roughness:.86,tint:10206606,bumpScale:.04}).clone(),this.cedarLeafMat.vertexColors=!0,this.broadLeafMat=e.getMaterial("shrub_foliage",{repeatX:2,repeatY:2,roughness:.86,tint:14017444,bumpScale:.05}).clone(),this.broadLeafMat.vertexColors=!0,this.farCedarMat=e.getMaterial("foliage_green",{repeatX:2,repeatY:2,roughness:.9,tint:9483140,bumpScale:0}).clone(),this.farCedarMat.vertexColors=!0,this.farBroadMat=e.getMaterial("shrub_foliage",{repeatX:2,repeatY:2,roughness:.88,tint:13163158,bumpScale:0}).clone(),this.farBroadMat.vertexColors=!0,this.boulderGeo=new Tn(1,1),this.boulderMat=e.getMaterial("moss_rock_heavy",{repeatX:2,repeatY:2,roughness:.92,tint:14213072,bumpScale:.08}),this.weedGeo=qr(1.22,.82),this.pampasGeo=qr(1.48,1.58),this.fernGeo=qr(1.38,.94),this.flowerWeedGeo=qr(.98,.65),this.weedMat=$r(e,"tall_grass",12113030,this.windUniform,7,132,.11),this.pampasMat=$r(e,"dry_grass",15260068,this.windUniform,9,145,.22),this.fernMat=$r(e,"dry_ferns",10074224,this.windUniform,6,118,.09),this.flowerWeedMat=$r(e,"meadow_wildflower",12769430,this.windUniform,8,96,.1)}canPlaceTree(e,t,n,r,s){return!(n<9.5||n>760||r<.42||s.roadWeight>.05||s.trailWeight>.06||s.terraceWeight>.05||qs(e,t,2.8)||Math.hypot(e-_e.x,t-_e.z)<95||Math.hypot(e-gn.x,t-gn.z)<32)}buildNearForestCell(e,t){const n=new fe,r=e*yn,s=t*yn,o=Zr(e,t,211),a=[],l=[],c=[],u=[],d=12,h=yn/d;let p=0;for(let M=0;M<d;M++)for(let S=0;S<d;S++){const b=r+(S+.12+o()*.76)*h,C=s+(M+.12+o()*.76)*h;if(Math.abs(b)>ae-16||Math.abs(C)>le-16)continue;const R=.72+cs(b*.018,C*.018,2)*.22;if(o()>R)continue;const E=Hn(b,C),[,v]=hr(b,C,2.2);if(!this.canPlaceTree(b,C,E.height,v,E))continue;const _=vl(E.height,E.streamWeight,o),I=this.archetypes[_],N=E.height>580?Math.max(.46,1-(E.height-580)/260):1,P=(.82+o()*.38)*N,L=P*(.9+o()*.2),k=P*(.88+o()*.24),w=o()*Math.PI*2,T=(o()-.5)*.085,D=(o()-.5)*.085,X=E.height-.12,W=.84+o()*.26;a.push({geo:I.woodLod0,wx:b,wy:X,wz:C,rotY:w,tiltX:T,tiltZ:D,scXZ:L,scY:k,rMul:W,gMul:W,bMul:W});const Y=.76+o()*.34;if(I.spec.leafGroup==="cedar")l.push({geo:I.leafLod0,wx:b,wy:X,wz:C,rotY:w,tiltX:T,tiltZ:D,scXZ:L,scY:k,rMul:Y*.88,gMul:Y*1,bMul:Y*.86});else{const U=p%5===0;c.push({geo:I.leafLod0,wx:b,wy:X,wz:C,rotY:w,tiltX:T,tiltZ:D,scXZ:L,scY:k,rMul:U?Y*1.08:Y*.85,gMul:U?Y*.94:Y*.99,bMul:U?Y*.6:Y*.72})}p++}for(let M=0;M<6;M++){const S=r+o()*yn,b=s+o()*yn;if(Math.abs(S)>ae-16||Math.abs(b)>le-16)continue;const C=Hn(S,b);if(C.height<.6||C.roadWeight>.25||C.trailWeight>.35||C.terraceWeight>.35||qs(S,b,2))continue;const y=C.height>720||C.height<12?1.1+o()*2.4:.65+o()*1.55;u.push([S,C.height-y*.22,b,y,o()*Math.PI,o()*Math.PI])}const g=[],x=On(a,1.05);if(x){const M=new Lt(x,this.barkMat);M.castShadow=!1,M.receiveShadow=!0,n.add(M),g.push(M)}const m=On(l,1);if(m){const M=new Lt(m,this.cedarLeafMat);M.castShadow=!1,M.receiveShadow=!0,n.add(M),g.push(M)}const f=On(c,1);if(f){const M=new Lt(f,this.broadLeafMat);M.castShadow=!1,M.receiveShadow=!0,n.add(M),g.push(M)}if(u.length>0){const M=new Ua(this.boulderGeo,this.boulderMat,u.length);for(let S=0;S<u.length;S++){const[b,C,y,R,E,v]=u[S];this.dummy.position.set(b,C,y),this.dummy.rotation.set(E,v,E*.5),this.dummy.scale.set(R*1.15,R*.68,R*.95),this.dummy.updateMatrix(),M.setMatrixAt(S,this.dummy.matrix)}M.castShadow=!1,M.receiveShadow=!0,n.add(M)}return{group:n,count:p,cx:e,cz:t,shadowMeshes:g}}buildMidForestCell(e,t){const n=new fe,r=e*ar,s=t*ar,o=Zr(e,t,419),a=[],l=[],c=[],u=15,d=ar/u;let h=0;for(let m=0;m<u;m++)for(let f=0;f<u;f++){const M=r+(f+.14+o()*.72)*d,S=s+(m+.14+o()*.72)*d;if(Math.abs(M)>ae-18||Math.abs(S)>le-18)continue;const b=cs(M*.018,S*.018,2);if(o()>.76+b*.18)continue;const C=Hn(M,S),[,y]=hr(M,S,3);if(!this.canPlaceTree(M,S,C.height,y,C))continue;const R=vl(C.height,C.streamWeight,o),E=this.archetypes[R],v=C.height>580?Math.max(.46,1-(C.height-580)/260):1,_=(.94+o()*.42)*v,I=_*(.94+o()*.18),N=_*(.9+o()*.22),P=o()*Math.PI*2,L=C.height-.35,k=.85+o()*.22;a.push({geo:E.woodLod1,wx:M,wy:L,wz:S,rotY:P,tiltX:0,tiltZ:0,scXZ:I,scY:N,rMul:k,gMul:k,bMul:k});const w=.76+o()*.34;if(E.spec.leafGroup==="cedar")l.push({geo:E.leafLod1,wx:M,wy:L,wz:S,rotY:P,tiltX:0,tiltZ:0,scXZ:I,scY:N,rMul:w*.88,gMul:w*1,bMul:w*.86});else{const T=h%5===0;c.push({geo:E.leafLod1,wx:M,wy:L,wz:S,rotY:P,tiltX:0,tiltZ:0,scXZ:I,scY:N,rMul:T?w*1.08:w*.85,gMul:T?w*.94:w*.99,bMul:T?w*.6:w*.72})}h++}const p=On(a,1.05);if(p){const m=new Lt(p,this.barkMat);m.receiveShadow=!0,n.add(m)}const g=On(l,1);if(g){const m=new Lt(g,this.cedarLeafMat);m.receiveShadow=!0,n.add(m)}const x=On(c,1);if(x){const m=new Lt(x,this.broadLeafMat);m.receiveShadow=!0,n.add(m)}return{group:n,count:h,cx:e,cz:t}}buildFarForestCell(e,t){const n=new fe,r=e*lr,s=t*lr,o=Zr(e,t,101),a=[],l=[],c=18,u=lr/c;let d=0;for(let g=0;g<c;g++)for(let x=0;x<c;x++){const m=r+(x+.1+o()*.8)*u,f=s+(g+.1+o()*.8)*u;if(Math.abs(m)>ae-24||Math.abs(f)>le-24)continue;const M=Hn(m,f),[,S]=hr(m,f,4);if(!this.canPlaceTree(m,f,M.height,S,M))continue;const b=M.height>600?Math.max(.48,1-(M.height-600)/260):1,C=(.98+o()*.88)*b,y=C*(.86+o()*.32),R=o()*Math.PI*2,E=.78+o()*.34;if(M.height<460&&o()<.38){const v=this.farBroadShapes[Math.floor(o()*this.farBroadShapes.length)],_=d%5===0;l.push({geo:v,wx:m,wy:M.height-1.4,wz:f,rotY:R,tiltX:0,tiltZ:0,scXZ:C,scY:y,rMul:_?E*1.08:E*.84,gMul:_?E*.95:E*.98,bMul:_?E*.64:E*.72})}else{const v=this.farCedarShapes[Math.floor(o()*this.farCedarShapes.length)];a.push({geo:v,wx:m,wy:M.height-1.6,wz:f,rotY:R,tiltX:0,tiltZ:0,scXZ:C,scY:y,rMul:E*.9,gMul:E*1.02,bMul:E*.88})}d++}const h=On(a,1);h&&n.add(new Lt(h,this.farCedarMat));const p=On(l,1);return p&&n.add(new Lt(p,this.farBroadMat)),{group:n,count:d,cx:e,cz:t}}buildGrassCell(e,t){const n=new fe,r=e*Ai,s=t*Ai,o=Zr(e,t,303),a=[],l=[],c=[],u=[];for(let h=0;h<460;h++){const p=r+o()*Ai,g=s+o()*Ai;if(Math.abs(p)>ae-8||Math.abs(g)>le-8)continue;const x=Hn(p,g);if(x.height<3.5||x.height>845||x.roadWeight>.68||x.trailWeight>.62||x.terraceWeight>.25&&qs(p,g,.35))continue;const[,m]=hr(p,g,2);if(m<.56)continue;const f=o()*Math.PI*2,M=.76+o()*.34,S=x.roadWeight>.12||x.trailWeight>.12||x.terraceWeight>.15;if(x.height>610)o()<.62?l.push([p,x.height-.08,g,.7+o()*.65,f,M]):a.push([p,x.height-.06,g,.75+o()*.5,f,M]);else if(S){const b=o();b<.45?a.push([p,x.height-.06,g,.8+o()*.65,f,M]):b<.75?l.push([p,x.height-.08,g,.75+o()*.65,f,M]):u.push([p,x.height-.05,g,.8+o()*.55,f,M])}else if(x.streamWeight>.2||x.height>320)o()<.65?c.push([p,x.height-.06,g,.85+o()*.65,f,M]):a.push([p,x.height-.06,g,.75+o()*.55,f,M]);else{const b=o();b<.52?a.push([p,x.height-.06,g,.85+o()*.7,f,M]):b<.78?l.push([p,x.height-.08,g,.8+o()*.7,f,M]):b<.9?c.push([p,x.height-.06,g,.8+o()*.55,f,M]):u.push([p,x.height-.05,g,.8+o()*.5,f,M])}}const d=(h,p,g)=>{if(h.length===0)return;const x=new Ua(p,g,h.length);for(let m=0;m<h.length;m++){const[f,M,S,b,C,y]=h[m];this.dummy.position.set(f,M,S),this.dummy.rotation.set(0,C,0),this.dummy.scale.set(b,b*(.85+m%4*.1),b),this.dummy.updateMatrix(),x.setMatrixAt(m,this.dummy.matrix),this.tmpColor.setRGB(y,y,y*.94),x.setColorAt(m,this.tmpColor)}x.receiveShadow=!0,x.castShadow=!1,n.add(x)};return d(a,this.weedGeo,this.weedMat),d(l,this.pampasGeo,this.pampasMat),d(c,this.fernGeo,this.fernMat),d(u,this.flowerWeedGeo,this.flowerWeedMat),{group:n,count:a.length+l.length+c.length+u.length,cx:e,cz:t}}disposeGroup(e){this.group.remove(e),e.traverse(t=>{t.isInstancedMesh?t.dispose():t.isMesh&&t.geometry.dispose()})}updateNearShadows(e,t){for(const r of this.nearCells.values()){if(!r.shadowMeshes)continue;const s=(r.cx+.5)*yn-e,o=(r.cz+.5)*yn-t,a=s*s+o*o<=15876;for(let l=0;l<r.shadowMeshes.length;l++)r.shadowMeshes[l].castShadow!==a&&(r.shadowMeshes[l].castShadow=a)}}warmStart(e,t){this.streamGrid(e,t,Ai,128,152,this.grassCells,(n,r)=>this.buildGrassCell(n,r),18),this.streamGrid(e,t,yn,155,188,this.nearCells,(n,r)=>this.buildNearForestCell(n,r),22),this.streamGrid(e,t,ar,465,525,this.midCells,(n,r)=>this.buildMidForestCell(n,r),28,136),this.streamGrid(e,t,lr,2500,3e3,this.farCells,(n,r)=>this.buildFarForestCell(n,r),68,425),this.updateNearShadows(e,t)}streamGrid(e,t,n,r,s,o,a,l,c=0){const u=n*.45;for(const[f,M]of o.entries()){const S=Math.hypot((M.cx+.5)*n-e,(M.cz+.5)*n-t);(S>s||c>0&&S<c-u)&&(this.disposeGroup(M.group),o.delete(f))}const d=Math.max(Math.floor(-ae/n),Math.floor((e-r)/n)),h=Math.min(Math.floor(ae/n)-1,Math.floor((e+r)/n)),p=Math.max(Math.floor(-le/n),Math.floor((t-r)/n)),g=Math.min(Math.floor(le/n)-1,Math.floor((t+r)/n)),x=[];for(let f=p;f<=g;f++)for(let M=d;M<=h;M++){const S=Math.hypot((M+.5)*n-e,(f+.5)*n-t);if(S>r||S<c)continue;const b=`${M},${f}`;o.has(b)||x.push({cx:M,cz:f,key:b,dist:S})}if(x.length===0)return;x.sort((f,M)=>f.dist-M.dist);const m=Math.min(l,x.length);for(let f=0;f<m;f++){const M=x[f],S=a(M.cx,M.cz);o.set(M.key,S),this.group.add(S.group)}}update(e,t,n){this.windUniform.value=n,this.streamGrid(e,t,Ai,132,162,this.grassCells,(r,s)=>this.buildGrassCell(r,s),2),this.streamGrid(e,t,yn,160,192,this.nearCells,(r,s)=>this.buildNearForestCell(r,s),2),this.streamGrid(e,t,ar,470,530,this.midCells,(r,s)=>this.buildMidForestCell(r,s),1,136),this.streamGrid(e,t,lr,2550,3050,this.farCells,(r,s)=>this.buildFarForestCell(r,s),2,425),this.updateNearShadows(e,t)}getStats(){let e=0,t=0;for(const n of this.nearCells.values())e+=n.count;for(const n of this.midCells.values())e+=n.count;for(const n of this.farCells.values())e+=n.count;for(const n of this.grassCells.values())t+=n.count;return{farForestCells:this.farCells.size,midForestCells:this.midCells.size,nearForestCells:this.nearCells.size,grassCells:this.grassCells.size,visibleTrees:e,visibleGrassTufts:t,archetypeCount:this.archetypes.length}}}function Yp(i,e){const t=new fe;t.name="SurroundingPacificOcean";const n={uTime:{value:0},uSunDir:{value:e.clone().normalize()},uDeepColor:{value:new Wt(730688)},uShallowColor:{value:new Wt(2057328)},uSkyColor:{value:new Wt(10536678)},uFogColor:{value:new Wt(12112100)},uFogDensity:{value:175e-6}},r=new xn({uniforms:n,vertexShader:`
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
    `,side:mn}),s=new Xi(5400,8200,128,160);s.rotateX(-Math.PI/2);const o=new Lt(s,r);t.add(o);const a=new Xi(34e3,34e3,24,24);a.rotateX(-Math.PI/2);const l=new Lt(a,r);l.position.y=-.22,t.add(l);const c=i.getMaterial("basalt_cliff",{repeatX:3,repeatY:3,roughness:.92,bumpScale:.08}),u=[[-390,2440,32,26,26],[435,2410,38,34,28],[195,2540,22,16,18],[-980,-1820,44,38,32],[-895,-2010,36,30,28],[-1120,240,42,36,34],[1140,-320,48,44,38],[-260,-2640,52,58,40],[320,-2680,56,66,44]];for(let d=0;d<u.length;d++){const[h,p,g,x,m]=u[d],f=new Tn(1,1),M=f.attributes.position;for(let b=0;b<M.count;b++){const C=M.getX(b),y=M.getY(b),R=M.getZ(b),E=.8+.34*Math.sin(C*4.1+d*2.1)*Math.cos(R*3.7-y*2.8);M.setXYZ(b,C*g*E,y*x*(y>0?1.15:.7),R*m*E)}f.computeVertexNormals();const S=new Lt(f,c);S.position.set(h,x*.25,p),S.rotation.y=d*1.17,S.castShadow=!0,S.receiveShadow=!0,t.add(S)}return{group:t,update(d){n.uTime.value=d}}}function Zp(i){const e=new fe;e.name="KuroisoInfrastructureAndSites";const t=i.getMaterial("ishigaki_mossy",{repeatX:3,repeatY:1,roughness:.94,bumpScale:.08}),n=i.getMaterial("ishigaki_rubble",{repeatX:3,repeatY:1,roughness:.95,bumpScale:.08}),r=i.getMaterial("charred_cedar",{repeatX:1,repeatY:3,roughness:.92,bumpScale:.05}),s=i.getMaterial("aged_timber_planks",{repeatX:1,repeatY:1,roughness:.92}),o=i.getMaterial("dark_iron_plate",{repeatX:1,repeatY:1,roughness:.75,metalness:.55}),a=i.getMaterial("peeling_paint_steel",{repeatX:2,repeatY:1,roughness:.78,metalness:.35}),l=i.getMaterial("mossy_aged_concrete",{repeatX:2,repeatY:1,roughness:.94,bumpScale:.05}),c=i.getMaterial("driftwood",{repeatX:2,repeatY:1,roughness:.94,bumpScale:.07}),u=i.getMaterial("seaweed_shore",{repeatX:2,repeatY:2,roughness:.72,bumpScale:.05}),d=i.getMaterial("barnacle_rock",{repeatX:2,repeatY:2,roughness:.9,bumpScale:.08}),h=i.getMaterial("moss_rock_heavy",{repeatX:2,repeatY:2,roughness:.92,bumpScale:.08}),p=i.getMaterial("coal_seam_rock",{repeatX:2,repeatY:2,roughness:.88,bumpScale:.08}),g=new Ql({color:1711136,transparent:!0,opacity:.72}),x=new Vt(.14,1.15,.14),m=new Vt(.45,.36,.45),f={house:9137746,shop:12081983,koban:3894440,park:4949835,secret_base:8162882,mine:4145994,port:3833228};for(let U=0;U<Je.length;U++){const K=Je[U],H=fs.has(K.id),B=new fe;B.position.set(K.x,K.y,K.z),B.rotation.y=K.yaw;const Z=new Set(["H07","H09","H13","H14","H15","H20","H21","H22","H23"]);if(K.category!=="secret_base"&&K.category!=="port"&&!Z.has(K.id)){const V=K.category==="park"?3.2:4.2,$=new Lt(new Vt(K.radiusX*1.96,V,K.radiusZ*1.96),U%2===0?t:n);$.position.y=-V*.5-.06,$.receiveShadow=!0,$.castShadow=!0,B.add($)}if(!H){const V=K.radiusX*.82,$=K.radiusZ*.82;for(const[q,ut]of[[-V,-$],[V,-$],[-V,$],[V,$]]){const ht=new Lt(m,l);ht.position.set(q,.14,ut),ht.receiveShadow=!0,B.add(ht)}const j=new Lt(x,s);j.position.set(0,.55,$+.25),j.castShadow=!0;const O=new Lt(new Vt(.22,.16,.22),new Fi({color:f[K.category]??9137746,roughness:.85}));O.position.set(0,1.16,$+.25),B.add(j,O)}e.add(B)}{const U=new fe;U.position.set(Pn.x,Pn.y,Pn.z),U.rotation.y=.2;const K=new Lt(new Vt(28,.72,.55),t);K.position.set(0,.36,-11.2);const H=new Lt(new Vt(.55,.72,22.4),t);H.position.set(-14,.36,0);const B=new Lt(new Vt(28,.72,.55),t);B.position.set(0,.36,11.2);for(const V of[-4.5,4.5]){const $=new Lt(new Vt(2.1,.12,.55),s);$.position.set(-7.5,.48,V);const j=new Lt(new Vt(2.1,.42,.1),s);j.position.set(-7.5,.78,V-.24);const O=new Lt(new Vt(.14,.48,.48),l);O.position.set(-8.35,.24,V);const q=new Lt(new Vt(.14,.48,.48),l);q.position.set(-6.65,.24,V),U.add($,j,O,q)}const Z=new Lt(new Ge(.45,.55,.85,8),l);Z.position.set(4.5,.42,0),U.add(K,H,B,Z),e.add(U)}{const U=new fe;U.position.set(cn.x,cn.y,cn.z);const K=[[-5.2,-3.5,2.2],[-2.5,-5.8,2.6],[2.4,-5.4,2.1],[5.5,-2,2.4],[4.8,3.6,1.9],[-5.4,2.8,2]];for(const[H,B,Z]of K){const V=new Lt(new Tn(Z,1),h);V.scale.set(1.2,.85,1),V.position.set(H,Z*.45,B),V.castShadow=!0,V.receiveShadow=!0,U.add(V)}for(let H=0;H<8;H++){const B=H/8*Math.PI*2,Z=new Lt(new Tn(.24,0),h);Z.position.set(Math.cos(B)*.85,.14,Math.sin(B)*.85),U.add(Z)}for(const[H,B,Z]of[[-2,.8,.3],[1.8,-1.2,-.7],[.4,2.3,1.45]]){const V=new Lt(new Ge(.22,.25,2.6,7),c);V.position.set(H,.22,B),V.rotation.set(Math.PI/2,Z,0),V.castShadow=!0,U.add(V)}e.add(U)}{const U=new fe;U.position.set(Ze.x,Ze.y,Ze.z);for(const[V,$,j]of[[-7.5,-5.5,3.2],[7.2,-5,3.5],[0,-8.5,4.2],[-9.2,2.5,2.1]]){const O=new Lt(new Tn(j,1),p);O.scale.set(1.25,.9,1),O.position.set(V,j*.45,$),O.castShadow=!0,O.receiveShadow=!0,U.add(O)}const K=new Lt(new Vt(1.4,4.2,2.2),t);K.position.set(-2.6,2.1,-6.2);const H=new Lt(new Vt(1.4,4.2,2.2),t);H.position.set(2.6,2.1,-6.2);const B=new Lt(new Vt(6.8,1.3,2.4),t);B.position.set(0,4.45,-6.2);const Z=new Lt(new Vt(3.8,3.8,1.2),new Fi({color:460810,roughness:1}));Z.position.set(0,1.9,-6.8),U.add(K,H,B,Z),e.add(U)}{const U=ce(_e.x,_e.z),K=new fe;K.position.set(_e.x,U,_e.z);const H=new Lt(new Vt(.98,.8,.98),l);H.position.y=-.1,H.castShadow=!0,H.receiveShadow=!0;const B=new Lt(new Vt(.32,.9,.32),l);B.position.y=.72,B.castShadow=!0;const Z=ce(_e.x+2.2,_e.z-1.2)-U,V=new Lt(new Vt(.16,3,.16),s);V.position.set(2.2,Z+.95,-1.2),V.castShadow=!0;const $=new Lt(new Vt(.34,1.15,.08),s);$.position.set(2.2,Z+1.85,-1.12),$.castShadow=!0;const j=ce(_e.x-2.6,_e.z+1.4)-U,O=[[.74,.14],[.58,.5],[.44,.8],[.3,1.04]];for(const[q,ut]of O){const ht=new Lt(new Tn(q,0),h);ht.scale.set(1.22,.56,1.12),ht.position.set(-2.6,j+ut,1.4),ht.castShadow=!0,ht.receiveShadow=!0,K.add(ht)}K.add(H,B,V,$),e.add(K)}{const U=new fe;U.position.set(un.x,un.y,un.z),U.rotation.y=Math.PI*.25;const K=new Lt(new Vt(28,4.2,10),n);K.position.set(0,-1.95,0),K.receiveShadow=!0,K.castShadow=!0;const H=new Lt(new Vt(28.2,.28,.75),l);H.position.set(0,.24,-4.65),H.receiveShadow=!0;for(const Z of[-10,-3.5,3.5,10]){const V=new Lt(new Ge(.18,.24,.55,8),o);V.position.set(Z,.58,-4.55),V.castShadow=!0,U.add(V)}const B=new Lt(new Vt(38,5.2,4.8),t);B.position.set(-22,-2,-18),B.rotation.y=.55,B.castShadow=!0,B.receiveShadow=!0;for(let Z=0;Z<6;Z++){const V=-7.5-Z*3.2;for(const $ of[-2.2,2.2]){const j=new Lt(new Ge(.16,.2,8.6,7),r);j.position.set($,-3.6,V),j.castShadow=!0,U.add(j)}if(Z<4){const $=new Lt(new Vt(4.8,.16,2.8),s);$.position.set(0,-.08,V),$.rotation.z=(Z%2===0?1:-1)*.02,$.receiveShadow=!0,U.add($)}}U.add(K,H,B),e.add(U)}const M=new Ge(.11,.17,8.8,6);M.translate(0,4.4,0);const S=new Vt(1.75,.11,.11),b=new Set(["road_village_mid","road_village_low","road_village_high"]);for(const U of Ni){if(!b.has(U.id))continue;const K=[],H=[];for(let B=0;B<U.points.length;B++){const[Z,V]=U.points[B],$=U.points[Math.min(B+1,U.points.length-1)],j=U.points[Math.max(B-1,0)],O=$[0]-j[0],q=$[1]-j[1],ut=Math.hypot(O,q)||1,ht=-q/ut*3.4,G=O/ut*3.4,mt=Z+ht,nt=V+G,st=ce(mt,nt)-.35,ct=Math.atan2(O,q),et=new fe;et.position.set(mt,st,nt),et.rotation.y=ct,et.rotation.z=(B%3-1)*.03;const tt=new Lt(M,r);tt.castShadow=!0;const F=new Lt(S,o);F.position.y=8;const A=new Lt(S,o);A.position.y=7.3,et.add(tt,F,A),e.add(et);const J=Math.cos(ct),ot=Math.sin(ct);K.push(new it(mt-.72*J,st+8.05,nt+.72*ot)),H.push(new it(mt+.72*J,st+8.05,nt-.72*ot))}for(const B of[K,H])for(let Z=0;Z<B.length-1;Z++){const V=B[Z],$=B[Z+1],j=V.distanceTo($);if(j>220)continue;const O=Math.min(3.5,j*.028),q=[];for(let ut=0;ut<=8;ut++){const ht=ut/8,G=new it().lerpVectors(V,$,ht);G.y-=4*ht*(1-ht)*O,q.push(G)}e.add(new N0(new we().setFromPoints(q),g))}}const C=gn.x+8.5,y=gn.z+10,R=ce(C,y),E=new Lt(new Vt(7.6,1.4,.72),t);E.position.set(C,R+.35,y),E.rotation.y=-.35,e.add(E);for(const[U,K,H,B]of[[-2,-1.2,.52,1.48],[-.7,-1.7,.42,1.18],[.6,-2.2,.48,1.34]]){const Z=C+U,V=y+K,$=ce(Z,V),j=new Lt(new Vt(H,B,H*.72),t);j.position.set(Z,$+B*.5,V),j.rotation.y=-.35,j.castShadow=!0,e.add(j)}const v=C+2.4,_=y-2.9,I=ce(v,_),N=new Lt(new Ge(.22,.34,.85,6),t);N.position.set(v,I+.42,_);const P=new Lt(new Vt(.46,.42,.46),t);P.position.set(v,I+1.05,_);const L=new Lt(new jo(.58,.36,4),t);L.position.set(v,I+1.42,_),L.rotation.y=Math.PI/4,e.add(N,P,L);const k=Ni.find(U=>U.id==="road_village_mid");if(k)for(let U=1;U<k.points.length-2;U+=2){const[K,H]=k.points[U],[B,Z]=k.points[U+1],V=B-K,$=Z-H,j=Math.hypot(V,$)||1,O=-2.8,q=Math.max(3,Math.floor(j/8));for(let ut=0;ut<q;ut++){const ht=ut/q,G=(ut+1)/q,mt=K+V*ht+O,nt=H+$*ht,st=K+V*G+O,ct=H+$*G,et=ce(mt,nt),tt=ce(st,ct),F=Math.hypot(st-mt,ct-nt),A=new Lt(new Ge(.055,.055,.95,5),o);A.position.set(mt,et+.45,nt);const J=new Lt(new Vt(.12,.28,F+.08),a);J.position.set((mt+st)*.5,(et+tt)*.5+.72,(nt+ct)*.5),J.rotation.y=Math.atan2(st-mt,ct-nt),J.rotation.x=-Math.atan2(tt-et,F),e.add(A,J)}}const w=[],T=[];let D=0;for(let U=-760;U<=2140;U+=18){const K=na(U),H=3.8+(U>1400?(U-1400)*.006:0),B=ce(K,U)+.55;if(w.push(K-H,B,U,K+H,B,U),D>0){const Z=(D-1)*2;T.push(Z,Z+2,Z+1,Z+1,Z+2,Z+3)}D++}const X=new we;X.setAttribute("position",new ue(w,3)),X.setIndex(T),X.computeVertexNormals();const W=new Lt(X,new Fi({color:3894904,roughness:.14,metalness:.22,transparent:!0,opacity:.78}));e.add(W);const Y=[[Kt.x-8,Kt.z-5,4.4,.26,.42],[Kt.x+9,Kt.z-3,5.1,.3,-.68],[Kt.x-16,Kt.z-11,5.6,.32,1.12],[Kt.x+18,Kt.z-9,3.8,.22,2.05],[Kt.x+2,Kt.z+7,3.2,.18,-1.25],[Kt.x-24,Kt.z+2,4.5,.28,-.32]];for(const[U,K,H,B,Z]of Y){const V=ce(U,K),$=new Lt(new Ge(B*.74,B,H,7),c);$.position.set(U,V+B*.55,K),$.rotation.set(Math.PI/2-.05,Z,.06),$.castShadow=!0,$.receiveShadow=!0,e.add($)}for(let U=0;U<14;U++){const K=Kt.x-36+U*5.6,H=Kt.z+9+Math.sin(U*1.9)*4.5,B=ce(K,H);if(!(B<.25||B>3.2))if(U%3===0){const Z=new Lt(new Vt(2.1+U%2*.7,.09,.32),c);Z.position.set(K,B+.02,H),Z.rotation.set(.05,U*.85,-.04),Z.castShadow=!0,Z.receiveShadow=!0,e.add(Z)}else{const Z=.55+U%4*.22,V=new Lt(new Jo(Z,1),U%2===0?u:d);V.scale.set(1.4,.42,1.15),V.position.set(K,B-Z*.14,H),V.rotation.set(.12*U,U*1.1,.08),V.receiveShadow=!0,e.add(V)}}for(const[U,K,H]of[[Kt.x-56,Kt.z+16,4.8],[Kt.x-72,Kt.z+28,6.8],[Kt.x+62,Kt.z+14,5.2],[Kt.x+78,Kt.z+28,7.2]]){const B=ce(U,K),Z=new Lt(new Tn(H,1),d);Z.scale.set(1.25,.72,1.05),Z.position.set(U,B+H*.22,K),Z.castShadow=!0,Z.receiveShadow=!0,e.add(Z)}return e}function qp(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new we;let c=0;for(let u=0;u<i.length;++u){const d=i[u];let h=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(d.attributes[p]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p])}if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0;const d=[];for(let h=0;h<i.length;++h){const p=i[h].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+u);u+=i[h].attributes.position.count}l.setIndex(d)}for(const u in s){const d=Sl(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(const u in o){const d=o[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){const p=[];for(let x=0;x<o[u].length;++x)p.push(o[u][x][h]);const g=Sl(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Sl(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const o=new e(s),a=new pe(o,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const d=l/t;for(let h=0,p=u.count;h<p;h++)for(let g=0;g<t;g++){const x=u.getComponent(h,g);a.setComponent(h+d,g,x)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}const Qn=new Xt,Ci=new Zi,Pi=new dn,Li=new it,$s=new it(1,1,1);function $p(i){const e=i.index?i.toNonIndexed():i;if(e.getAttribute("normal")||e.computeVertexNormals(),!e.getAttribute("uv")){const t=e.getAttribute("position").count;e.setAttribute("uv",new pe(new Float32Array(t*2),2))}for(const t of Object.keys(e.attributes))t!=="position"&&t!=="normal"&&t!=="uv"&&e.deleteAttribute(t);return e}function cr(i,e,t,n,r){if(r<=0)return;const s=i.getAttribute("uv"),o=[[n,t],[n,t],[e,n],[e,n],[e,t],[e,t]];for(let a=0;a<6;a++){const[l,c]=o[a],u=a*4;for(let d=0;d<4;d++){const h=u+d;s.setXY(h,s.getX(h)*l*r,s.getY(h)*c*r)}}s.needsUpdate=!0}function Kp(i,e,t,n,r){const s=i*.5,o=e*.5,a=n,l=[-s,0,0],c=[s,0,0],u=[-o,0,t],d=[o,0,t],h=[-s,-a,0],p=[s,-a,0],g=[-o,-a,t],x=[o,-a,t],m=[],f=[],M=(R,E,v,_,I,N)=>{m.push(R[0],R[1],R[2],E[0],E[1],E[2],v[0],v[1],v[2]),f.push(_[0],_[1],I[0],I[1],N[0],N[1])},S=(R,E,v,_,I,N,P,L)=>{M(R,E,v,I,N,P),M(R,v,_,I,P,L)},b=r;S(l,u,d,c,[-s*b,0],[-o*b,t*b],[o*b,t*b],[s*b,0]),S(h,p,x,g,[-s*b,0],[s*b,0],[o*b,t*b],[-o*b,t*b]),S(u,g,x,d,[0,a*b],[0,0],[e*b,0],[e*b,a*b]),i>.01&&S(c,p,h,l,[0,a*b],[0,0],[i*b,0],[i*b,a*b]);const C=Math.hypot(o-s,t);S(l,h,g,u,[0,a*b],[0,0],[C*b,0],[C*b,a*b]),S(d,x,p,c,[0,a*b],[0,0],[C*b,0],[C*b,a*b]);const y=new we;return y.setAttribute("position",new ue(m,3)),y.setAttribute("uv",new ue(f,2)),y.computeVertexNormals(),y}function jp(i,e,t,n){const r=i*.5,s=t*.5,o=n,a=[-r,0,s],l=[r,0,s],c=[0,e,s],u=[-r,0,-s],d=[r,0,-s],h=[0,e,-s],p=[],g=[],x=(M,S,b,C,y,R)=>{p.push(M[0],M[1],M[2],S[0],S[1],S[2],b[0],b[1],b[2]),g.push(C[0],C[1],y[0],y[1],R[0],R[1])};x(a,l,c,[0,0],[i*o,0],[r*o,e*o]),x(d,u,h,[0,0],[i*o,0],[r*o,e*o]);const m=Math.hypot(r,e);x(u,a,c,[0,0],[t*o,0],[t*o,m*o]),x(u,c,h,[0,0],[t*o,m*o],[0,m*o]),x(l,d,h,[0,0],[t*o,0],[t*o,m*o]),x(l,h,c,[0,0],[t*o,m*o],[0,m*o]),x(u,d,l,[0,0],[i*o,0],[i*o,t*o]),x(u,l,a,[0,0],[i*o,t*o],[0,t*o]);const f=new we;return f.setAttribute("position",new ue(p,3)),f.setAttribute("uv",new ue(g,2)),f.computeVertexNormals(),f}class Le{site;colliders=[];walkSurfaces=[];buckets=new Map;matIds=new WeakMap;nextMatId=1;minX=1/0;maxX=-1/0;minY=1/0;maxY=-1/0;minZ=1/0;maxZ=-1/0;constructor(e){this.site=e}getBucket(e,t,n,r){let s=this.matIds.get(t);s||(s=this.nextMatId++,this.matIds.set(t,s));const o=`${e}|${s}|${n?1:0}|${r?1:0}`;let a=this.buckets.get(o);return a||(a={layer:e,material:t,castShadow:n,receiveShadow:r,geometries:[]},this.buckets.set(o,a)),a}pushGeo(e,t,n,r,s,o){const a=$p(t);a.applyMatrix4(r),a.computeBoundingBox(),a.boundingBox&&(this.minX=Math.min(this.minX,a.boundingBox.min.x),this.maxX=Math.max(this.maxX,a.boundingBox.max.x),this.minY=Math.min(this.minY,a.boundingBox.min.y),this.maxY=Math.max(this.maxY,a.boundingBox.max.y),this.minZ=Math.min(this.minZ,a.boundingBox.min.z),this.maxZ=Math.max(this.maxZ,a.boundingBox.max.z)),this.getBucket(e,n,s,o).geometries.push(a)}collider(e,t,n,r,s,o){this.colliders.push({minX:Math.min(e,t),maxX:Math.max(e,t),minY:Math.min(n,r),maxY:Math.max(n,r),minZ:Math.min(s,o),maxZ:Math.max(s,o)})}floor(e,t,n,r,s){this.walkSurfaces.push({minX:Math.min(e,t),maxX:Math.max(e,t),minZ:Math.min(n,r),maxZ:Math.max(n,r),yMin:s,yMax:s,slopeAxis:"none"})}ramp(e,t,n,r,s,o,a,l){this.walkSurfaces.push({minX:Math.min(e,t),maxX:Math.max(e,t),minZ:Math.min(n,r),maxZ:Math.max(n,r),yMin:s,yMax:o,slopeAxis:a,slopeDir:l})}box(e,t,n,r,s,o,a,l,c={}){const u=new Vt(t,n,r),d=c.uvScale!==void 0?c.uvScale:.48;cr(u,t,n,r,d),Pi.set(c.rx??0,c.ry??0,c.rz??0,"YXZ"),Ci.setFromEuler(Pi),Li.set(s,o,a),Qn.compose(Li,Ci,$s);const h=c.castShadow??e==="ext",p=c.receiveShadow??!0;if(this.pushGeo(e,u,l,Qn,h,p),c.solid){const g=c.rx??0,x=c.ry??0,m=c.rz??0;if(Math.abs(g)<.01&&Math.abs(x)<.01&&Math.abs(m)<.01)this.collider(s-t*.5,s+t*.5,o-n*.5,o+n*.5,a-r*.5,a+r*.5);else{const f=t*.5,M=n*.5,S=r*.5,b=[[-f,-M,-S],[f,-M,-S],[-f,M,-S],[f,M,-S],[-f,-M,S],[f,-M,S],[-f,M,S],[f,M,S]];let C=1/0,y=-1/0,R=1/0,E=-1/0,v=1/0,_=-1/0;const I=new it;for(const[N,P,L]of b)I.set(N,P,L).applyMatrix4(Qn),I.x<C&&(C=I.x),I.x>y&&(y=I.x),I.y<R&&(R=I.y),I.y>E&&(E=I.y),I.z<v&&(v=I.z),I.z>_&&(_=I.z);this.collider(C,y,R,E,v,_)}}}cyl(e,t,n,r,s,o,a,l,c,u={}){const d=new Ge(t,n,r,s);Pi.set(u.rx??0,u.ry??0,u.rz??0,"YXZ"),Ci.setFromEuler(Pi),Li.set(o,a,l),Qn.compose(Li,Ci,$s),this.pushGeo(e,d,c,Qn,u.castShadow??e==="ext",u.receiveShadow??!0)}gablePrism(e,t,n,r,s,o,a,l,c={}){const u=jp(t,n,r,c.uvScale??.45);Pi.set(0,c.ry??0,0,"YXZ"),Ci.setFromEuler(Pi),Li.set(s,o,a),Qn.compose(Li,Ci,$s),this.pushGeo(e,u,l,Qn,c.castShadow??!0,!0)}kawaraSlope(e,t){const n=t.bottomWidth,r=t.topWidth??n,s=t.run,o=t.pitch,a=s/Math.cos(o),l=t.deckThickness??.14,c=t.ribSpacing??.38,u=t.castShadow??!0,d=new Xt,h=new Xt().makeRotationY(t.downslopeYaw),p=new Xt().makeRotationX(o),g=new Xt().makeTranslation(t.ridgeX,t.ridgeY,t.ridgeZ);d.multiplyMatrices(g,h).multiply(p);const x=Kp(r,n,a,l,.55);this.pushGeo(e,x,t.tileMat,d,u,!0);const m=t.eaveMat??t.ribMat,f=n*.5,M=r*.5,S=Math.max(.001,f-M),b=Math.max(2,Math.floor((n-.16)/c)+1),C=(n-.24)/Math.max(1,b-1),y=new Xt,R=new Xt,E=new Xt().makeRotationX(Math.PI*.5);for(let v=0;v<b;v++){const _=-f+.12+v*C;if(t.skipRibPredicate&&t.skipRibPredicate(_,v))continue;const I=Math.abs(_);let N=0;I>M&&(N=Math.min(a-.22,a*((I-M)/S)));const P=a+.04,L=Math.max(.18,P-N),k=new Vt(.115,.072,L);cr(k,.115,.072,L,.5),y.makeTranslation(_,.032,N+L*.5),R.multiplyMatrices(d,y),this.pushGeo(e,k,t.ribMat,R,!1,!0);const w=new Ge(.068,.068,.065,8);y.makeTranslation(_,.028,P+.015).multiply(E),R.multiplyMatrices(d,y),this.pushGeo(e,w,m,R,!1,!0)}if(t.rafters!==!1&&t.rafterMat){const _=Math.max(3,Math.floor((n-.24)/.62)+1),I=(n-.3)/Math.max(1,_-1);for(let L=0;L<_;L++){const k=-f+.15+L*I,w=Math.abs(k);let T=Math.max(0,a-1.35);w>M&&(T=Math.max(T,a*((w-M)/S)));const D=Math.max(.24,a-.06-T),X=new Vt(.075,.085,D);cr(X,.075,.085,D,.5),y.makeTranslation(k,-l-.042,T+D*.5),R.multiplyMatrices(d,y),this.pushGeo(e,X,t.rafterMat,R,!1,!0)}const N=t.fasciaMat??t.rafterMat,P=new Vt(n+.04,.11,.08);cr(P,n+.04,.11,.08,.45),y.makeTranslation(0,-l-.04,a-.16),R.multiplyMatrices(d,y),this.pushGeo(e,P,N,R,!1,!0)}}kawaraRidge(e,t,n,r,s,o,a,l,c,u={}){const d=u.scale??1,h=u.courses??2,p=new it(t,n,r),g=new it(s,o,a),x=new it().subVectors(g,p),m=x.length();if(m<.05)return;x.normalize();const f=new it().addVectors(p,g).multiplyScalar(.5),M=new it(0,1,0),S=new it().crossVectors(M,x);S.lengthSq()<1e-4?S.set(1,0,0):S.normalize();const b=new it().crossVectors(x,S).normalize(),C=new Xt().makeBasis(S,b,x),y=new Xt().makeTranslation(f.x,f.y,f.z).multiply(C),R=new Xt,E=new Xt;for(let P=0;P<h;P++){const L=(.32-P*.055)*d,k=.095*d,w=(.04+P*.088)*d,T=new Vt(L,k,m+.08*d);cr(T,L,k,m,.6),R.makeTranslation(0,w,0),E.multiplyMatrices(y,R),this.pushGeo(e,T,l,E,!0,!0)}const v=(.05+h*.088+.045)*d,_=new Ge(.115*d,.125*d,m+.12*d,8),I=new Xt().makeRotationX(Math.PI*.5);R.makeTranslation(0,v,0).multiply(I),E.multiplyMatrices(y,R),this.pushGeo(e,_,l,E,!0,!0);const N=P=>{const L=new Xt().multiplyMatrices(y,new Xt().makeTranslation(0,(.08+h*.088)*d,P)),k=new Vt(.38*d,.44*d,.14*d);this.pushGeo(e,k,c,L,!0,!0);const w=new Vt(.46*d,.14*d,.17*d);R.makeTranslation(0,.18*d,0),E.multiplyMatrices(L,R),this.pushGeo(e,w,c,E,!0,!0);for(const T of[-1,1]){const D=new Vt(.11*d,.24*d,.12*d);R.makeTranslation(T*.18*d,.3*d,0).multiply(new Xt().makeRotationZ(-T*.32)),E.multiplyMatrices(L,R),this.pushGeo(e,D,c,E,!0,!0)}};u.oniStart&&N(-m*.5-.05*d),u.oniEnd&&N(m*.5+.05*d)}stairRun(e,t){const n=t.x1-t.x0,r=t.z1-t.z0,s=Math.abs(n)>=Math.abs(r),o=Math.abs(s?n:r),a=(s?n:r)>=0?1:-1,l=t.y1-t.y0,c=Math.max(4,t.steps),u=t.width*.5,d=o/c,h=l/c,p=t.tiltZ??0;for(let b=0;b<c;b++){const C=(b+.5)/c,y=t.y0+(b+1)*h-.025,R=s?t.x0+n*C:t.x0,E=s?t.z0:t.z0+r*C,v=s?d+.04:t.width,_=s?t.width:d+.04;if(this.box(e,v,.052,_,R,y,E,t.treadMat,{rz:p,castShadow:!1,uvScale:.65}),t.closedRisers){const I=h,N=b/c,P=s?t.x0+n*N:t.x0,L=s?t.z0:t.z0+r*N,k=s?.04:t.width,w=s?t.width:.04;this.box(e,k,I,w,P,t.y0+(b+.5)*h,L,t.stringerMat,{rz:p,castShadow:!1,uvScale:.65})}if(t.boxChestMat){const I=Math.max(.15,(b+1)*h-.05),N=s?d:t.width-.06,P=s?t.width-.06:d;this.box(e,N,I,P,R,t.y0+I*.5,E,t.boxChestMat,{castShadow:!1,uvScale:0})}}const g=Math.atan2(l,o),x=Math.hypot(o,l),m=(t.x0+t.x1)*.5,f=(t.z0+t.z1)*.5,M=(t.y0+t.y1)*.5,S=t.railMat??t.stringerMat;for(const b of[-1,1]){const C=s?0:b*(u+.04),y=s?b*(u+.04):0;if(s?this.box(e,x+.14,.22,.07,m,M-.04,f+y,t.stringerMat,{rz:a*g,castShadow:!1}):this.box(e,.07,.22,x+.14,m+C,M-.04,f,t.stringerMat,{rx:-a*g,castShadow:!1}),b===-1?t.railLeft:t.railRight){for(const v of[.02,.5,.98]){const _=t.x0+n*v+C,I=t.z0+r*v+y,N=t.y0+l*v,P=v===.5?.055:.085;this.box(e,P,.96,P,_,N+.46,I,S,{castShadow:!1})}s?this.box(e,x+.16,.075,.08,m,M+.9,f+y,S,{rz:a*g,castShadow:!1}):this.box(e,.08,.075,x+.16,m+C,M+.9,f,S,{rx:-a*g,castShadow:!1})}if(b===-1?t.guardLeft??!0:t.guardRight??!0){const v=t.y0+.48,_=t.y1+.85,I=b*(u+.07);s?this.collider(Math.min(t.x0,t.x1)+.08,Math.max(t.x0,t.x1)-.08,v,_,t.z0+I-.04,t.z0+I+.04):this.collider(t.x0+I-.04,t.x0+I+.04,v,_,Math.min(t.z0,t.z1)+.08,Math.max(t.z0,t.z1)-.08)}}if(s){const b=Math.min(t.x0,t.x1),C=Math.max(t.x0,t.x1);this.ramp(b,C,t.z0-u+.04,t.z0+u-.04,t.y0,t.y1,"x",a),this.floor(t.x0-a*.25,t.x0+a*.05,t.z0-u,t.z0+u,t.y0),this.floor(t.x1-a*.05,t.x1+a*.25,t.z0-u,t.z0+u,t.y1)}else{const b=Math.min(t.z0,t.z1),C=Math.max(t.z0,t.z1);this.ramp(t.x0-u+.04,t.x0+u-.04,b,C,t.y0,t.y1,"z",a),this.floor(t.x0-u,t.x0+u,t.z0-a*.25,t.z0+a*.05,t.y0),this.floor(t.x0-u,t.x0+u,t.z1-a*.05,t.z1+a*.25,t.y1)}}stoneSteps(e,t,n,r,s,o,a,l,c){const u=r>=n?1:-1,d=Math.abs(r-n),h=o-s,p=d/l,g=h/l;for(let f=0;f<l;f++){const M=(f+1)*g,S=n+u*(f+.5)*p;this.box(e,a,M+.35,p+.04,t,s+M*.5-.175,S,c,{castShadow:!0,receiveShadow:!0,uvScale:.55})}const x=Math.min(n,r),m=Math.max(n,r);this.ramp(t-a*.5,t+a*.5,x,m,s,o,"z",u),this.floor(t-a*.5,t+a*.5,r-u*.05,r+u*.35,o)}kouranRailing(e,t,n,r,s,o,a,l,c=.56){const u=r-t,d=s-n,h=Math.hypot(u,d);if(h<.05)return;const p=(t+r)*.5,g=(n+s)*.5,x=Math.abs(u)>=Math.abs(d),m=Math.atan2(-d,u);this.box(e,h+.08,.085,.115,p,o+a-.04,g,l,{ry:m}),this.box(e,h,.065,.075,p,o+a*.52,g,l,{ry:m}),this.box(e,h,.11,.095,p,o+.055,g,l,{ry:m});const f=Math.max(2,Math.round(h/c)+1);for(let S=0;S<f;S++){const b=S/(f-1),C=t+u*b,y=n+d*b,R=S===0||S===f-1,E=R?.105:.058;this.box(e,E,a+(R?.04:0),E,C,o+a*.5,y,l,{ry:m})}const M=.06;x?this.collider(Math.min(t,r)-M,Math.max(t,r)+M,o,o+a,g-M,g+M):this.collider(p-M,p+M,o,o+a,Math.min(n,s)-M,Math.max(n,s)+M)}build(e){const t=new fe;t.name=`House_${e.id}_${e.name}`,t.position.set(this.site.x,this.site.y,this.site.z),t.rotation.y=this.site.yaw;const n=new fe;n.name=`${e.id}_Exterior`;const r=new fe;r.name=`${e.id}_Interior`;for(const y of this.buckets.values()){if(y.geometries.length===0)continue;const R=y.geometries.length===1?y.geometries[0]:qp(y.geometries,!1);if(!R)continue;if(y.geometries.length>1)for(const v of y.geometries)v.dispose();const E=new Lt(R,y.material);E.castShadow=y.layer==="ext"&&y.castShadow,E.receiveShadow=y.receiveShadow,y.layer==="ext"?n.add(E):r.add(E)}t.add(n,r);const s=new In,o=Math.cos(this.site.yaw),a=Math.sin(this.site.yaw),l=isFinite(this.minX)?this.minX:-this.site.radiusX,c=isFinite(this.maxX)?this.maxX:this.site.radiusX,u=isFinite(this.minY)?this.minY:-1,d=isFinite(this.maxY)?this.maxY:10,h=isFinite(this.minZ)?this.minZ:-this.site.radiusZ,p=isFinite(this.maxZ)?this.maxZ:this.site.radiusZ,g=new it;for(const y of[l,c])for(const R of[u,d])for(const E of[h,p])g.set(this.site.x+y*o+E*a,this.site.y+R,this.site.z-y*a+E*o),s.expandByPoint(g);const[x,m,f]=e.entryLocal,M=this.site.x+x*o+f*a,S=this.site.z-x*a+f*o,b=this.site.y+m,C=this.site.yaw+(e.entryLookLocalYaw??0);return{id:e.id,name:e.name,subtitle:e.subtitle,category:e.category,builtYear:e.builtYear,abandonedYear:e.abandonedYear,stories:e.stories,floorElevations:e.floorElevations,position:new it(this.site.x,this.site.y,this.site.z),yaw:this.site.yaw,group:t,interiorGroup:r,colliders:this.colliders,walkSurfaces:this.walkSurfaces,entryPoint:{x:M,y:b,z:S,lookYaw:C},worldBounds:s}}}function Jp(i,e){const t=new Le(i),n=e.getMaterial("ishigaki_cut",{roughness:.94,bumpScale:.07}),r=e.getMaterial("dressed_stone",{roughness:.92,bumpScale:.06}),s=e.getMaterial("charred_cedar",{roughness:.91,bumpScale:.05}),o=e.getMaterial("white_plaster",{roughness:.93,bumpScale:.04,tint:16052198}),a=e.getMaterial("washi_plaster",{roughness:.92,bumpScale:.03}),l=e.getMaterial("dark_hardwood",{roughness:.86,bumpScale:.04}),c=e.getMaterial("warm_wood_plank",{roughness:.85,bumpScale:.04}),u=e.getMaterial("light_wood_grain",{roughness:.84,bumpScale:.03}),d=e.getMaterial("cobblestone",{roughness:.93,bumpScale:.06}),h=e.getMaterial("tatami_bordered",{roughness:.92,bumpScale:.04}),p=e.getMaterial("carved_wood_lattice",{roughness:.86,bumpScale:.05}),g=e.getMaterial("cedar_louvers",{roughness:.88,bumpScale:.05}),x=e.getMaterial("shoji_sliding_door",{roughness:.88,bumpScale:.02,opacity:.92,transparent:!0}),m=e.getMaterial("linen_fusuma",{roughness:.9,bumpScale:.02}),f=e.getMaterial("frosted_grid_window",{roughness:.35,metalness:.08,opacity:.45,transparent:!0}),M=e.getMaterial("antique_tansu",{roughness:.78,bumpScale:.04}),S=e.getMaterial("retro_kitchen_unit",{roughness:.75,bumpScale:.03}),b=e.getMaterial("kitchen_cabinet",{roughness:.8,bumpScale:.03}),C=e.getMaterial("red_zabuton",{roughness:.92,bumpScale:.03}),y=e.getMaterial("shrine_facade",{roughness:.82,bumpScale:.04}),R=e.getMaterial("woven_rope_mat",{roughness:.95,bumpScale:.06}),E=e.getMaterial("shop_produce_crates",{roughness:.9,bumpScale:.05}),v=e.getMaterial("black_volcanic_gravel",{roughness:.97,bumpScale:.06}),_=e.getMaterial("matte_black_metal",{roughness:.58,metalness:.65}),I=e.getMaterial("deep_moss",{roughness:.96,bumpScale:.08}),N=e.getMaterial("slate_roof_dark",{roughness:.76,metalness:.14,bumpScale:.06,tint:13686494}),P=e.getMaterial("dark_slate",{roughness:.72,metalness:.18,bumpScale:.05,tint:12239564}),L=e.getMaterial("dark_iron_plate",{roughness:.68,metalness:.24,bumpScale:.04,tint:11055806}),k=e.getMaterial("matte_black_metal",{roughness:.62,metalness:.3,tint:9345188}),w=.45,T=3.45,D=6.25;t.box("ext",10,.9,8,0,w-.46,0,n),t.box("ext",3.4,.38,.22,-3.2,.16,-4.05,I),t.box("ext",.24,.42,3.2,-5.06,.18,-1.4,I),t.stoneSteps("ext",1,5.15,3.92,-.35,w,2,4,r),t.stoneSteps("ext",3.55,4.95,3.92,-.35,w,1.35,4,r),t.box("int",2.75,.08,7.6,3.52,w-.04,0,d),t.box("int",3.85,.12,5.6,.3,w+.02,-1,h),t.box("int",3.85,.08,2.1,.3,w-.04,2.82,d),t.box("int",3.3,.1,7.6,-3.22,w-.01,0,c),t.floor(-4.75,4.75,-3.75,3.95,w+.04);const X=T-w,W=w+X*.5;t.box("ext",5.15,X,.22,-2.32,W,3.85,s,{solid:!0}),t.box("ext",2.6,1.45,.34,-2.6,w+1.45,4.04,p,{uvScale:0}),t.box("ext",2.78,.14,.44,-2.6,w+2.22,4.06,l),t.box("ext",2.78,.14,.44,-2.6,w+.68,4.06,l),t.box("ext",1.2,X,.22,2.35,W,3.85,s,{solid:!0}),t.box("ext",.78,X,.22,4.54,W,3.85,s,{solid:!0}),t.box("ext",1.54,.8,.22,1,w+2.6,3.85,s,{solid:!0}),t.box("ext",1.24,.8,.22,3.55,w+2.6,3.85,s,{solid:!0}),t.box("ext",.82,2.15,.06,.05,w+1.08,3.72,x,{uvScale:0}),t.box("ext",1.35,X,.22,-4.25,W,-3.85,s,{solid:!0}),t.box("ext",1.45,.95,.22,-2.9,w+.475,-3.85,s,{solid:!0}),t.box("ext",1.45,.75,.22,-2.9,w+2.625,-3.85,s,{solid:!0}),t.box("ext",1.42,1.32,.06,-2.9,w+1.6,-3.85,f,{uvScale:0}),t.box("ext",7.15,X,.22,1.35,W,-3.85,s,{solid:!0}),t.box("ext",.22,X,2.75,-4.85,W,-2.52,s,{solid:!0}),t.box("ext",.22,.92,1.65,-4.85,w+.46,-.4,s,{solid:!0}),t.box("ext",.22,.78,1.65,-4.85,w+2.61,-.4,s,{solid:!0}),t.box("ext",.06,1.32,1.62,-4.85,w+1.56,-.4,f,{uvScale:0}),t.box("ext",.22,X,3.55,-4.85,W,2.15,s,{solid:!0}),t.box("ext",.22,X,7.82,4.85,W,0,s,{solid:!0}),t.box("int",9.45,X-.1,.06,0,W,-3.7,a),t.box("int",.06,X-.1,7.45,4.7,W,0,a);for(const ut of[-4.72,-1.6,2.2,4.72])for(const ht of[-3.72,1.8,3.72])t.box("int",.16,X,.16,ut,W,ht,l);for(const ut of[-2.4,-.6,1.2,2.8])t.box("int",9.4,.18,.16,0,T-.14,ut,l);t.box("int",.14,X,3.35,-1.6,W,-2.1,a,{solid:!0}),t.box("int",.14,X,2.65,-1.6,W,2.45,a,{solid:!0}),t.box("int",.14,.78,1.52,-1.6,w+2.61,.35,a,{solid:!0}),t.box("int",.95,X,.12,-4.35,W,1.1,a,{solid:!0}),t.box("int",.95,X,.12,-2.08,W,1.1,a,{solid:!0}),t.box("int",1.42,.78,.12,-3.2,w+2.61,1.1,a,{solid:!0}),t.box("int",3.75,.16,.24,.3,w+.08,1.82,l),t.box("int",1.55,.2,1.55,.2,w+.12,-1.1,l,{solid:!0}),t.box("int",1.18,.18,1.18,.2,w+.14,-1.1,v),t.cyl("int",.22,.25,.22,10,.2,w+.32,-1.1,_),t.cyl("int",.03,.03,2.15,6,.2,w+1.55,-1.1,_),t.box("int",.62,.07,.62,.2,w+.1,-2.25,C,{uvScale:0}),t.box("int",.62,.07,.62,-.95,w+.1,-1.1,C,{uvScale:0}),t.box("int",.62,.07,.62,1.35,w+.1,-1.1,C,{uvScale:0}),t.box("int",1.55,1.45,.56,.8,w+.78,-3.38,M,{solid:!0,uvScale:0}),t.box("int",1.85,.88,.66,-3.25,w+.44,-3.32,S,{solid:!0,uvScale:0}),t.box("int",.58,1.78,1.15,-4.42,w+.89,-1.85,b,{solid:!0,uvScale:0}),t.box("int",.92,.72,.68,-4.22,w+.36,2.95,E,{solid:!0,uvScale:0}),t.box("int",.74,.54,.58,-4.18,w+.98,2.92,E,{ry:.18,uvScale:0}),t.cyl("int",.42,.44,.26,10,-2.75,w+.15,3.05,R),t.stairRun("int",{x0:3.55,z0:1.75,x1:3.55,z1:-2.05,y0:w+.04,y1:T+.04,width:1.18,steps:14,treadMat:l,stringerMat:l,railMat:c,railLeft:!0,railRight:!1,closedRisers:!0,boxChestMat:M,guardLeft:!0,guardRight:!1}),t.box("int",7.48,.16,7.62,-1.07,T-.06,0,c),t.box("int",2.18,.16,1.78,3.72,T-.06,-2.92,c),t.box("int",2.18,.16,1.78,3.72,T-.06,2.92,c),t.box("int",5.3,.04,5.2,-2.05,T+.03,-1.1,h),t.box("int",1.85,.04,3.4,1.62,T+.03,-1.9,h),t.collider(-4.8,2.65,T-.18,T+.02,-3.8,3.8),t.collider(2.65,4.8,T-.18,T+.02,-3.8,-2.08),t.collider(2.65,4.8,T-.18,T+.02,2.08,3.8),t.floor(-4.75,2.65,-3.75,3.75,T+.04),t.floor(2.65,4.75,-3.75,-2,T+.04),t.floor(2.65,4.75,2,3.75,T+.04),t.box("int",.08,.92,4.05,2.65,T+.46,0,l,{solid:!0}),t.box("int",2.1,.92,.08,3.7,T+.46,2.04,l,{solid:!0});const Y=D-T,U=T+Y*.5;t.box("ext",2.4,Y,.22,-3.65,U,3.85,o,{solid:!0}),t.box("ext",1.8,.85,.22,-1.55,T+.42,3.85,o,{solid:!0}),t.box("ext",1.8,.75,.22,-1.55,T+2.42,3.85,o,{solid:!0}),t.box("ext",1.76,1.18,.08,-1.55,T+1.45,3.87,g,{uvScale:0}),t.box("ext",1.5,Y,.22,.1,U,3.85,o,{solid:!0}),t.box("ext",1.8,.85,.22,1.75,T+.42,3.85,o,{solid:!0}),t.box("ext",1.8,.75,.22,1.75,T+2.42,3.85,o,{solid:!0}),t.box("ext",1.76,1.18,.08,1.75,T+1.45,3.87,g,{uvScale:0}),t.box("ext",2.25,Y,.22,3.78,U,3.85,o,{solid:!0}),t.box("ext",3.4,Y,.22,-3.15,U,-3.85,o,{solid:!0}),t.box("ext",2.4,.82,.22,-.25,T+.41,-3.85,o,{solid:!0}),t.box("ext",2.4,.65,.22,-.25,T+2.47,-3.85,o,{solid:!0}),t.box("ext",2.36,1.32,.06,-.25,T+1.48,-3.85,f,{uvScale:0}),t.box("ext",4,Y,.22,2.95,U,-3.85,o,{solid:!0}),t.box("ext",.22,Y,2.8,4.85,U,-2.45,o,{solid:!0}),t.box("ext",.22,.9,2,4.85,T+.45,-.05,o,{solid:!0}),t.box("ext",.22,.65,2,4.85,T+2.47,-.05,o,{solid:!0}),t.box("ext",.06,1.25,1.96,4.85,T+1.52,-.05,f,{uvScale:0}),t.box("ext",.22,Y,2.95,4.85,U,2.42,o,{solid:!0}),t.box("ext",.22,Y,2.3,-4.85,U,-2.75,o,{solid:!0}),t.box("ext",.22,.68,1.55,-4.85,T+2.46,-.85,o,{solid:!0}),t.box("ext",.22,Y,4,-4.85,U,1.92,o,{solid:!0}),t.box("ext",1.28,.16,5.85,-5.45,T-.04,-.3,c),t.floor(-5.98,-4.75,-3.15,2.55,T+.04);for(const ut of[-2.8,-1.1,.6,2.2])t.box("ext",.14,1.25,.14,-5.32,T-.56,ut,l,{rz:-.78});t.kouranRailing("ext",-6.02,-3.18,-6.02,2.58,T,.94,l,.56),t.kouranRailing("ext",-6.02,-3.18,-4.85,-3.18,T,.94,l,.56),t.kouranRailing("ext",-6.02,2.58,-4.85,2.58,T,.94,l,.56);for(const ut of[-4.86,-2.5,.1,2.6,4.86])t.box("ext",.18,Y+.08,.28,ut,U,3.86,l),t.box("ext",.18,Y+.08,.28,ut,U,-3.86,l);t.box("ext",9.95,.22,.28,0,T+.04,3.86,l),t.box("ext",9.95,.22,.28,0,D-.08,3.86,l),t.box("int",2.6,Y,.12,-3.5,U,1.65,m,{solid:!0,uvScale:0}),t.box("int",1.55,.68,.12,-1.45,T+2.46,1.65,a,{solid:!0}),t.box("int",3.35,Y,.12,.98,U,1.65,m,{solid:!0,uvScale:0}),t.box("int",.12,Y,2.55,.65,U,-2.5,a,{solid:!0}),t.box("int",.12,.68,1.55,.65,T+2.46,-.45,a,{solid:!0}),t.box("int",.12,Y,1.35,.65,U,.98,a,{solid:!0}),t.box("int",9.6,.14,7.6,0,D-.06,0,u),t.collider(-4.8,4.8,D-.14,D+.1,-3.8,3.8),t.box("int",2.2,.18,.85,-3.2,T+.09,-3.35,l,{solid:!0}),t.box("int",.16,Y,.92,-2.08,U,-3.35,l),t.box("int",1.55,.36,.95,-2.1,T+.22,-.95,l,{solid:!0}),t.box("int",.58,.07,.58,-2.1,T+.07,-1.78,C,{uvScale:0}),t.box("int",.58,.07,.58,-2.1,T+.07,-.12,C,{uvScale:0}),t.box("int",1.45,1.4,.55,-.45,T+.72,-3.42,M,{solid:!0,uvScale:0}),t.box("int",1.25,1.65,.55,1.62,T+.86,-3.4,y,{solid:!0,uvScale:0}),t.kawaraSlope("ext",{bottomWidth:10.6,topWidth:10.6,run:1.45,pitch:.36,ridgeX:0,ridgeY:T+.14,ridgeZ:3.92,downslopeYaw:0,tileMat:N,ribMat:P,eaveMat:L,rafterMat:l,ribSpacing:.36}),t.kawaraSlope("ext",{bottomWidth:6.4,topWidth:6.4,run:1.55,pitch:.38,ridgeX:-4.85,ridgeY:D+.05,ridgeZ:-.3,downslopeYaw:-Math.PI*.5,tileMat:N,ribMat:P,eaveMat:L,rafterMat:l,ribSpacing:.38});const K=.48,B=2.35*Math.tan(K),Z=D+B-.15,V=5.05,$=V*Math.tan(K),j=D-.15+$;t.kawaraSlope("ext",{topWidth:7.2,bottomWidth:12.2,run:V,pitch:K,ridgeX:0,ridgeY:j,ridgeZ:0,downslopeYaw:0,tileMat:N,ribMat:P,eaveMat:L,rafterMat:l,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:7.2,bottomWidth:12.2,run:V,pitch:K,ridgeX:0,ridgeY:j,ridgeZ:0,downslopeYaw:Math.PI,tileMat:N,ribMat:P,eaveMat:L,rafterMat:l,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:5.2,bottomWidth:10.1,run:2.5,pitch:K,ridgeX:3.6,ridgeY:Z+.12,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:N,ribMat:P,eaveMat:L,rafterMat:l,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:5.2,bottomWidth:10.1,run:2.5,pitch:K,ridgeX:-3.6,ridgeY:Z+.12,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:N,ribMat:P,eaveMat:L,rafterMat:l,ribSpacing:.38});const O=j-(Z+.02);t.gablePrism("ext",5.2,O,.24,3.55,Z+.02,0,o,{ry:Math.PI*.5}),t.gablePrism("ext",5.2,O,.24,-3.55,Z+.02,0,o,{ry:Math.PI*.5}),t.box("ext",.14,.52,1.35,3.68,Z+.52,0,g,{uvScale:0}),t.box("ext",.14,.52,1.35,-3.68,Z+.52,0,g,{uvScale:0}),t.kawaraRidge("ext",-3.68,j+.04,0,3.68,j+.04,0,L,k,{scale:1.12,oniStart:!0,oniEnd:!0,courses:3});const q=D-.12;return t.kawaraRidge("ext",-3.6,Z+.12,2.55,-6.05,q,5,L,k,{scale:.72,oniEnd:!0,courses:2}),t.kawaraRidge("ext",3.6,Z+.12,2.55,6.05,q,5,L,k,{scale:.72,oniEnd:!0,courses:2}),t.kawaraRidge("ext",-3.6,Z+.12,-2.55,-6.05,q,-5,L,k,{scale:.72,oniEnd:!0,courses:2}),t.kawaraRidge("ext",3.6,Z+.12,-2.55,6.05,q,-5,L,k,{scale:.72,oniEnd:!0,courses:2}),t.build({id:i.id,name:"浜田家（網元の二階建町家）",subtitle:"明治9年築・焼杉と白漆喰真壁・いぶし銀本瓦入母屋・二階建",category:"house",builtYear:1876,abandonedYear:1985,stories:2,floorElevations:[w+.04,T+.04],entryLocal:[1,0,6.2]})}function Qp(i,e){const t=new Le(i),n=e.getMaterial("ishigaki_mossy",{roughness:.95,bumpScale:.08}),r=e.getMaterial("mossy_pavers",{roughness:.93,bumpScale:.06}),s=e.getMaterial("weathered_gray_planks",{roughness:.92,bumpScale:.05}),o=e.getMaterial("aged_timber_planks",{roughness:.91,bumpScale:.05}),a=e.getMaterial("rough_white_stucco",{roughness:.93,bumpScale:.05,tint:15854816}),l=e.getMaterial("charred_cedar",{roughness:.9,bumpScale:.05}),c=e.getMaterial("oak_flooring",{roughness:.84,bumpScale:.04}),u=e.getMaterial("tatami_plain",{roughness:.92,bumpScale:.04}),d=e.getMaterial("checker_linoleum",{roughness:.72,bumpScale:.02}),h=e.getMaterial("river_cobble",{roughness:.94,bumpScale:.06}),p=e.getMaterial("window_frosted_wood",{roughness:.36,opacity:.46,transparent:!0}),g=e.getMaterial("botanical_curtain",{roughness:.9,opacity:.85,transparent:!0}),x=e.getMaterial("door_wood_brown",{roughness:.85,bumpScale:.04}),m=e.getMaterial("retro_kitchen_unit",{roughness:.78,bumpScale:.03}),f=e.getMaterial("vanity_sink",{roughness:.72,bumpScale:.03}),M=e.getMaterial("wooden_dresser",{roughness:.82,bumpScale:.04}),S=e.getMaterial("antique_tansu",{roughness:.78,bumpScale:.04}),b=e.getMaterial("office_counter",{roughness:.84,bumpScale:.03}),C=e.getMaterial("storage_rack",{roughness:.88,bumpScale:.04}),y=e.getMaterial("cardboard_boxes",{roughness:.92,bumpScale:.04}),R=e.getMaterial("woven_rope_mat",{roughness:.95,bumpScale:.06}),E=e.getMaterial("island_map_sign",{roughness:.82,bumpScale:.02}),v=e.getMaterial("driftwood",{roughness:.93,bumpScale:.06}),_=e.getMaterial("ivory_plaster",{roughness:.91,bumpScale:.03}),I=e.getMaterial("glazed_brown_brick",{roughness:.56,metalness:.14,bumpScale:.05,tint:12744534}),N=e.getMaterial("glazed_brown_brick",{roughness:.5,metalness:.18,bumpScale:.05,tint:10771775}),P=e.getMaterial("old_red_brick",{roughness:.62,metalness:.12,bumpScale:.04,tint:9062450}),L=e.getMaterial("dark_iron_plate",{roughness:.58,metalness:.28,tint:7027241}),k=.4,w=3.3,T=6.2,D=8.95;t.box("ext",7.5,1.1,7.9,0,k-.56,0,n),t.stoneSteps("ext",0,5,3.85,-.35,k,1.9,4,r);const X=w-k,W=k+X*.5;t.box("int",7,.08,7.4,0,k-.04,0,h),t.floor(-3.45,3.45,-3.65,3.85,k+.04),t.box("ext",2.8,X,.22,-2.25,W,3.75,s,{solid:!0}),t.box("ext",2.8,X,.22,2.25,W,3.75,s,{solid:!0}),t.box("ext",1.74,.72,.22,0,k+2.54,3.75,s,{solid:!0}),t.box("ext",.9,2.12,.06,-1.18,k+1.06,3.6,x,{uvScale:0}),t.box("ext",2.6,X,.22,-2.35,W,-3.75,s,{solid:!0}),t.box("ext",2.1,1.05,.22,0,k+.52,-3.75,s,{solid:!0}),t.box("ext",2.1,.65,.22,0,k+2.57,-3.75,s,{solid:!0}),t.box("ext",2.06,1.2,.06,0,k+1.65,-3.75,p,{uvScale:0}),t.box("ext",2.6,X,.22,2.35,W,-3.75,s,{solid:!0}),t.box("ext",.22,X,7.62,-3.55,W,0,s,{solid:!0}),t.box("ext",.22,X,7.62,3.55,W,0,s,{solid:!0});for(const O of[-3.58,3.58])for(const q of[-3.76,-1.2,1.2,3.76])t.box("ext",.18,X,.18,O,W,q,l);t.box("int",.65,1.85,2.2,-3.08,k+.92,-1.2,C,{solid:!0,uvScale:0}),t.box("int",1.35,.85,.72,-2.4,k+.42,1.85,y,{solid:!0,uvScale:0}),t.cyl("int",.38,.42,.86,10,-1.8,k+.43,-2.85,v),t.cyl("int",.36,.4,.82,10,-.95,k+.41,-3.05,v),t.cyl("int",.48,.5,.28,10,.45,k+.16,-2.85,R),t.stairRun("int",{x0:2.65,z0:1.7,x1:2.65,z1:-2,y0:k+.04,y1:w+.04,width:1.15,steps:13,treadMat:c,stringerMat:l,railMat:l,railLeft:!0,railRight:!1,guardLeft:!0,guardRight:!1});const Y=T-w,U=w+Y*.5;t.box("int",5.38,.16,7.42,-.82,w-.06,0,c),t.box("int",1.65,.16,1.76,2.68,w-.06,-2.86,c),t.box("int",1.65,.16,1.76,2.68,w-.06,2.86,c),t.box("int",4.6,.04,3.8,-.9,w+.03,1.5,u),t.box("int",4.4,.04,2.4,-1,w+.03,-2.3,d),t.collider(-3.5,1.85,w-.16,w+.02,-3.7,3.7),t.collider(1.85,3.5,w-.16,w+.02,-3.7,-2.05),t.collider(1.85,3.5,w-.16,w+.02,2,3.7),t.floor(-3.45,1.85,-3.65,3.65,w+.04),t.floor(1.85,3.45,-3.65,-1.95,w+.04),t.floor(1.85,3.45,1.95,3.65,w+.04),t.box("int",.08,.92,3.95,1.86,w+.46,-.02,l,{solid:!0}),t.box("int",1.62,.92,.08,2.68,w+.46,1.98,l,{solid:!0}),t.box("ext",1.8,Y,.22,-2.65,U,3.75,o,{solid:!0}),t.box("ext",3.4,.85,.22,0,w+.42,3.75,o,{solid:!0}),t.box("ext",3.4,.65,.22,0,w+2.57,3.75,o,{solid:!0}),t.box("ext",3.36,1.4,.06,0,w+1.55,3.75,p,{uvScale:0}),t.box("ext",1.8,Y,.22,2.65,U,3.75,o,{solid:!0}),t.box("int",.55,1.45,.05,-1.35,w+1.55,3.58,g,{uvScale:0}),t.box("ext",2.2,Y,.22,-2.45,U,-3.75,o,{solid:!0}),t.box("ext",2.6,.92,.22,0,w+.46,-3.75,o,{solid:!0}),t.box("ext",2.6,.68,.22,0,w+2.56,-3.75,o,{solid:!0}),t.box("ext",2.56,1.3,.06,0,w+1.56,-3.75,p,{uvScale:0}),t.box("ext",2.2,Y,.22,2.45,U,-3.75,o,{solid:!0}),t.box("ext",.22,Y,2.4,-3.55,U,-2.55,o,{solid:!0}),t.box("ext",.22,.9,2.5,-3.55,w+.45,0,o,{solid:!0}),t.box("ext",.22,.68,2.5,-3.55,w+2.56,0,o,{solid:!0}),t.box("ext",.06,1.32,2.46,-3.55,w+1.56,0,p,{uvScale:0}),t.box("ext",.22,Y,2.4,-3.55,U,2.55,o,{solid:!0}),t.box("ext",.22,Y,7.62,3.55,U,0,o,{solid:!0}),t.box("int",1.85,.88,.62,-.4,w+.44,-3.28,m,{solid:!0,uvScale:0}),t.box("int",.82,.88,.56,1.05,w+.44,-3.3,f,{solid:!0,uvScale:0}),t.box("int",1.35,.4,.85,-.3,w+.22,1.25,l,{solid:!0}),t.box("int",1.25,1.15,.52,-.25,w+.6,3.22,M,{solid:!0,uvScale:0}),t.stairRun("int",{x0:-2.65,z0:-1.85,x1:-2.65,z1:1.85,y0:w+.04,y1:T+.04,width:1.15,steps:13,treadMat:c,stringerMat:l,railMat:l,railLeft:!1,railRight:!0,guardLeft:!1,guardRight:!0});const K=D-T,H=T+K*.5;t.box("int",5.1,.16,6.5,.7,T-.06,0,u),t.box("int",1.45,.16,1.45,-2.58,T-.06,-2.55,c),t.box("int",1.45,.16,1.45,-2.58,T-.06,2.55,c),t.box("ext",8.9,.14,1.15,0,T-.06,3.82,o),t.box("ext",8.9,.14,1.15,0,T-.06,-3.82,o),t.box("ext",1.15,.14,6.55,-3.82,T-.06,0,o),t.box("ext",1.15,.14,6.55,3.82,T-.06,0,o),t.kouranRailing("ext",-4.35,4.35,4.35,4.35,T,.96,l,.58),t.kouranRailing("ext",-4.35,-4.35,4.35,-4.35,T,.96,l,.58),t.kouranRailing("ext",-4.35,-4.35,-4.35,4.35,T,.96,l,.58),t.kouranRailing("ext",4.35,-4.35,4.35,4.35,T,.96,l,.58);for(const O of[-4.35,-1.5,1.5,4.35])t.box("ext",.14,1.08,.14,O,T+.54,4.35,l),t.box("ext",.14,1.08,.14,O,T+.54,-4.35,l);t.collider(-1.85,3.4,T-.16,T+.02,-3.4,3.4),t.collider(-3.4,-1.85,T-.16,T+.02,-3.4,-1.92),t.collider(-3.4,-1.85,T-.16,T+.02,1.92,3.4),t.floor(-1.85,4.25,-4.25,4.25,T+.04),t.floor(-4.25,-1.85,-4.25,-1.85,T+.04),t.floor(-4.25,-1.85,1.85,4.25,T+.04),t.floor(-4.25,-3.28,-1.85,1.85,T+.04),t.box("int",.08,.92,3.72,-1.86,T+.46,0,l,{solid:!0}),t.box("int",1.4,.92,.08,-2.56,T+.46,-1.9,l,{solid:!0}),t.box("ext",2.7,K,.2,-1.95,H,3.25,a,{solid:!0}),t.box("ext",1.55,.62,.2,.15,T+2.44,3.25,a,{solid:!0}),t.box("ext",2.35,K,.2,2.08,H,3.25,a,{solid:!0}),t.box("ext",1.25,K,.2,-2.62,H,-3.25,a,{solid:!0}),t.box("ext",4,.78,.2,0,T+.39,-3.25,a,{solid:!0}),t.box("ext",4,.55,.2,0,T+2.47,-3.25,a,{solid:!0}),t.box("ext",3.96,1.42,.06,0,T+1.48,-3.25,p,{uvScale:0}),t.box("ext",1.25,K,.2,2.62,H,-3.25,a,{solid:!0});for(const O of[-3.25,3.25])t.box("ext",.2,K,1.35,O,H,-2.58,a,{solid:!0}),t.box("ext",.2,.78,3.85,O,T+.39,0,a,{solid:!0}),t.box("ext",.2,.55,3.85,O,T+2.47,0,a,{solid:!0}),t.box("ext",.06,1.42,3.8,O,T+1.48,0,p,{uvScale:0}),t.box("ext",.2,K,1.35,O,H,2.58,a,{solid:!0});for(const O of[-2.2,0,2.2])t.box("int",6.4,.18,.16,0,D-.12,O,l);t.box("int",6.3,.1,6.3,0,D+.04,0,_),t.collider(-3.2,3.2,D-.05,D+.15,-3.2,3.2),t.box("int",1.65,.86,.68,1.65,T+.43,-1.85,b,{solid:!0,uvScale:0}),t.box("int",1.35,1.32,.54,2.52,T+.66,1.45,S,{solid:!0,uvScale:0}),t.box("int",1.45,.95,.05,2.15,T+1.65,3.1,E,{uvScale:0}),t.kawaraSlope("ext",{bottomWidth:8.2,run:1.25,pitch:.36,ridgeX:0,ridgeY:w+.12,ridgeZ:3.8,downslopeYaw:0,tileMat:I,ribMat:N,eaveMat:P,rafterMat:l,ribSpacing:.36}),t.kawaraSlope("ext",{topWidth:7.4,bottomWidth:9.2,run:1.15,pitch:.4,ridgeX:0,ridgeY:T-.1,ridgeZ:3.7,downslopeYaw:0,tileMat:I,ribMat:N,eaveMat:P,rafterMat:l,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:7.4,bottomWidth:9.2,run:1.15,pitch:.4,ridgeX:0,ridgeY:T-.1,ridgeZ:-3.7,downslopeYaw:Math.PI,tileMat:I,ribMat:N,eaveMat:P,rafterMat:l,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:7.6,bottomWidth:9.4,run:1.15,pitch:.4,ridgeX:3.55,ridgeY:T-.1,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:I,ribMat:N,eaveMat:P,rafterMat:l,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:7.6,bottomWidth:9.4,run:1.15,pitch:.4,ridgeX:-3.55,ridgeY:T-.1,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:I,ribMat:N,eaveMat:P,rafterMat:l,ribSpacing:.38});const B=.56,Z=4.65,V=Z*Math.tan(B),$=D-.25+V;t.kawaraSlope("ext",{bottomWidth:9.6,run:Z,pitch:B,ridgeX:0,ridgeY:$,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:I,ribMat:N,eaveMat:P,rafterMat:l,ribSpacing:.36}),t.kawaraSlope("ext",{bottomWidth:9.6,run:Z,pitch:B,ridgeX:0,ridgeY:$,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:I,ribMat:N,eaveMat:P,rafterMat:l,ribSpacing:.36}),t.gablePrism("ext",6.6,$-D+.18,.22,0,D-.08,3.25,a),t.gablePrism("ext",6.6,$-D+.18,.22,0,D-.08,-3.25,a);const j=Z/Math.cos(B);for(const O of[-4.72,4.72])t.box("ext",j,.24,.14,-Z*.5,$-V*.5,O,l,{rz:B}),t.box("ext",j,.24,.14,Z*.5,$-V*.5,O,l,{rz:-B});return t.kawaraRidge("ext",0,$+.06,-4.78,0,$+.06,4.78,P,L,{scale:1.15,oniStart:!0,oniEnd:!0,courses:3}),t.build({id:i.id,name:"磯部家（港見張りの三階櫓家）",subtitle:"明治14年築・石州赤茶釉薬瓦切妻・四周高欄見張り縁・三階建",category:"house",builtYear:1881,abandonedYear:1985,stories:3,floorElevations:[k+.04,w+.04,T+.04],entryLocal:[0,0,6.1]})}function t2(i,e){const t=new Le(i),n=e.getMaterial("ishigaki_rubble",{roughness:.95,bumpScale:.08}),r=e.getMaterial("cracked_concrete",{roughness:.93,bumpScale:.05}),s=e.getMaterial("aged_timber_planks",{roughness:.92,bumpScale:.05}),o=e.getMaterial("horizontal_wood_siding",{roughness:.9,bumpScale:.05}),a=e.getMaterial("galvanized_sheet",{roughness:.58,metalness:.52,bumpScale:.03}),l=e.getMaterial("charred_cedar",{roughness:.92,bumpScale:.05}),c=e.getMaterial("washi_plaster",{roughness:.91,bumpScale:.03}),u=e.getMaterial("woodchips",{roughness:.95,bumpScale:.06}),d=e.getMaterial("herringbone_wood",{roughness:.8,bumpScale:.03}),h=e.getMaterial("tatami_bordered",{roughness:.92,bumpScale:.04}),p=e.getMaterial("warm_wood_plank",{roughness:.86,bumpScale:.04}),g=e.getMaterial("driftwood",{roughness:.94,bumpScale:.06}),x=e.getMaterial("stacked_logs",{roughness:.93,bumpScale:.07}),m=e.getMaterial("pegboard",{roughness:.86,bumpScale:.04}),f=e.getMaterial("frosted_grid_window",{roughness:.38,opacity:.45,transparent:!0}),M=e.getMaterial("door_light_wood",{roughness:.86,bumpScale:.04}),S=e.getMaterial("kitchen_cabinet",{roughness:.82,bumpScale:.03}),b=e.getMaterial("vanity_sink",{roughness:.72,bumpScale:.03}),C=e.getMaterial("filled_bookshelf",{roughness:.84,bumpScale:.04}),y=e.getMaterial("chalkboard",{roughness:.88,bumpScale:.02}),R=e.getMaterial("floral_futon",{roughness:.93,bumpScale:.03}),E=e.getMaterial("wardrobe_wood",{roughness:.82,bumpScale:.04}),v=e.getMaterial("deep_moss",{roughness:.96,bumpScale:.08}),_=e.getMaterial("slate_roof_dark",{roughness:.8,metalness:.12,bumpScale:.06,tint:12765133}),I=e.getMaterial("dark_slate",{roughness:.76,metalness:.16,bumpScale:.05}),N=e.getMaterial("dark_iron_plate",{roughness:.72,metalness:.22,bumpScale:.04}),P=e.getMaterial("matte_black_metal",{roughness:.65,metalness:.28}),L=.4,k=3.45,w=5.6,T=6.2;t.box("ext",5.7,1,9.1,-2.9,L-.52,0,n),t.box("ext",5.7,1,6.7,2.7,L-.52,1,n),t.stoneSteps("ext",-2.9,5.55,4.42,-.35,L,2.6,4,r),t.stoneSteps("ext",2.9,5.25,4.22,-.35,L,1.5,4,r),t.box("int",5.4,.08,8.8,-2.9,L-.04,0,u),t.box("int",3.4,.05,2.8,-3.2,L+.01,-2.5,v),t.box("int",5.3,.1,6.3,2.65,L-.01,1,d),t.floor(-5.45,-.15,-4.25,4.45,L+.04),t.floor(-.25,5.25,-2.1,4.25,L+.04);const D=w-L,X=L+D*.5;t.box("ext",1.55,D,.22,-4.85,X,4.4,s,{solid:!0}),t.box("ext",1.55,D,.22,-.95,X,4.4,s,{solid:!0}),t.box("ext",2.45,2.35,.22,-2.9,L+4.02,4.4,s,{solid:!0}),t.box("ext",.08,2.75,1.18,-4.18,L+1.38,4.95,M,{ry:-.35,uvScale:0}),t.box("ext",.08,2.75,1.18,-1.62,L+1.38,4.95,M,{ry:.35,uvScale:0}),t.box("ext",.22,D,8.95,-5.6,X,0,s,{solid:!0}),t.box("ext",.06,2.2,3.4,-5.73,L+1.4,-1.5,a),t.box("ext",.06,1.8,2.6,-5.73,L+3.2,2.1,a),t.box("ext",5.5,D-.55,.22,-2.9,X-.28,-4.4,s,{solid:!0}),t.box("ext",2.4,1.35,.06,-3.2,L+1.8,-4.53,v),t.box("ext",.22,D,2.3,-.2,X,-3.3,s,{solid:!0});for(const q of[3.2,1.4,-.4])t.box("int",5.3,.22,.2,-2.9,w-.16,q,l);t.box("int",3.4,.16,.16,-3.4,w-1.15,-2.2,l,{rz:.58,ry:.15}),t.box("int",3.2,.14,.14,-2.3,w-1.45,-2.9,l,{rz:-.64,ry:-.12}),t.box("int",2.8,.14,.14,-3.8,L+1.15,-3.4,l,{rz:.42,ry:.25}),t.box("int",1.35,.65,.18,-3.4,L+.32,1,g),t.box("int",1.35,.65,.18,-3.4,L+.32,-2.2,g),t.box("int",.24,.22,4.9,-3.4,L+.72,-.6,p,{solid:!0}),t.box("int",.2,1.35,.22,-3.4,L+1.25,1.92,p,{rx:.42});for(let q=0;q<7;q++){const ut=-2.4+q*.62,G=.78*(.55+Math.sin((q+.5)/7*Math.PI)*.55);t.box("int",G,.1,.09,-3.4-G*.5,L+.85,ut,g,{rz:-.25}),t.box("int",G,.1,.09,-3.4+G*.5,L+.85,ut,g,{rz:.25}),t.box("int",.1,.72,.09,-3.4-G-.14,L+1.22,ut,g,{rz:.22}),t.box("int",.1,.72,.09,-3.4+G+.14,L+1.22,ut,g,{rz:-.22})}t.box("int",.78,.86,2.8,-5.05,L+.43,1.4,p,{solid:!0}),t.box("int",.06,1.35,2.4,-5.45,L+1.65,1.4,m,{uvScale:0}),t.box("int",.95,.88,2.2,-4.95,L+.44,-2.5,x,{solid:!0,uvScale:0}),t.box("int",.85,.22,.75,-2.1,L+.12,-3.3,_,{ry:.4,rx:.18}),t.box("int",.65,.18,.55,-2.9,L+.1,-3.7,I,{ry:-.5,rz:.22});const W=k-L,Y=L+W*.5;t.box("int",.18,W,3.4,-.2,Y,-.5,s,{solid:!0}),t.box("int",.18,.75,1.55,-.2,L+2.65,1.95,s,{solid:!0}),t.box("int",.18,W,1.65,-.2,Y,3.55,s,{solid:!0}),t.stairRun("int",{x0:-.88,z0:2.35,x1:-.88,z1:-1.35,y0:L+.04,y1:k+.04,width:1.12,steps:14,treadMat:p,stringerMat:l,railMat:l,railLeft:!0,railRight:!1,guardLeft:!0,guardRight:!1}),t.box("int",1.48,.16,1.35,-.88,k-.06,-1.92,p),t.floor(-1.58,.05,-2.52,-1.25,k+.04),t.box("int",.08,.94,1.35,-1.58,k+.47,-1.92,l,{solid:!0}),t.box("int",1.45,.94,.08,-.88,k+.47,-2.55,l,{solid:!0}),t.box("ext",2.45,W,.22,1,Y,4.2,o,{solid:!0}),t.box("ext",1.45,.78,.22,2.9,L+2.66,4.2,o,{solid:!0}),t.box("ext",1.85,W,.22,4.5,Y,4.2,o,{solid:!0}),t.box("ext",.22,W,2.2,5.4,Y,-1.1,o,{solid:!0}),t.box("ext",.22,.9,2.2,5.4,L+.45,1.1,o,{solid:!0}),t.box("ext",.22,.75,2.2,5.4,L+2.67,1.1,o,{solid:!0}),t.box("ext",.06,1.38,2.16,5.4,L+1.58,1.1,f,{uvScale:0}),t.box("ext",.22,W,2.1,5.4,Y,3.25,o,{solid:!0}),t.box("ext",5.65,W,.22,2.6,Y,-2.2,o,{solid:!0}),t.box("int",1.55,1.82,.48,2.4,L+.91,-1.82,C,{solid:!0,uvScale:0}),t.box("int",1.45,.42,.92,2.5,L+.24,.55,l,{solid:!0}),t.box("int",1.45,.88,.62,4.5,L+.44,2.9,S,{solid:!0,uvScale:0}),t.box("int",.85,.88,.58,.75,L+.44,3.72,b,{solid:!0,uvScale:0});const U=T-k,K=k+U*.5;t.box("int",5.55,.16,6.35,2.6,k-.06,1,p),t.box("int",5.2,.04,3,2.6,k+.03,2.55,h),t.collider(-.2,5.4,k-.16,k+.02,-2.2,4.2),t.floor(-.2,5.25,-2.05,4.05,k+.04),t.box("int",.12,.94,2.25,-.2,k+.47,.12,l,{solid:!0}),t.box("ext",.22,U,3.05,-.2,K,2.75,c,{solid:!0}),t.box("ext",5.65,U,.22,2.6,K,-2.2,c,{solid:!0}),t.box("ext",1.6,U,.22,.6,K,4.2,c,{solid:!0}),t.box("ext",2.4,.85,.22,2.6,k+.42,4.2,c,{solid:!0}),t.box("ext",2.4,.62,.22,2.6,k+2.44,4.2,c,{solid:!0}),t.box("ext",2.36,1.28,.06,2.6,k+1.48,4.2,f,{uvScale:0}),t.box("ext",1.6,U,.22,4.6,K,4.2,c,{solid:!0}),t.box("ext",.22,U,6.45,5.4,K,1,c,{solid:!0}),t.box("int",5.5,.12,6.3,2.6,T-.06,1,p),t.collider(-.2,5.4,T-.12,T+.1,-2.2,4.2),t.box("int",1.95,.82,.95,3.6,k+.41,-1.25,p,{solid:!0}),t.box("int",2.2,1.25,.06,3.4,k+1.68,-2.04,y,{uvScale:0}),t.box("int",1.45,.14,1.95,3.7,k+.1,2.65,R,{uvScale:0}),t.box("int",1.15,1.78,.56,.95,k+.89,3.72,E,{solid:!0,uvScale:0});const H=.5,B=3.55,Z=w-.12+B*Math.tan(H);t.kawaraSlope("ext",{bottomWidth:5.6,run:B,pitch:H,ridgeX:-2.9,ridgeY:Z,ridgeZ:2.35,downslopeYaw:-Math.PI*.5,tileMat:_,ribMat:I,eaveMat:N,rafterMat:l,ribSpacing:.38}),t.kawaraSlope("ext",{bottomWidth:5.6,run:B,pitch:H,ridgeX:-2.9,ridgeY:Z,ridgeZ:2.35,downslopeYaw:Math.PI*.5,tileMat:_,ribMat:I,eaveMat:N,rafterMat:l,ribSpacing:.38}),t.gablePrism("ext",5.6,Z-w+.14,.22,-2.9,w-.06,4.4,s),t.kawaraSlope("ext",{bottomWidth:4.5,run:1.55,pitch:.68,ridgeX:-4.65,ridgeY:w+.72,ridgeZ:-2.65,downslopeYaw:-Math.PI*.5,tileMat:_,ribMat:I,eaveMat:N,rafterMat:l,ribSpacing:.42,skipRibPredicate:(q,ut)=>ut%3===1}),t.kawaraRidge("ext",-2.9,Z+.04,-.35,-2.9,Z+.04,5.05,N,P,{scale:1.02,oniStart:!1,oniEnd:!0,courses:2});const V=.56,$=.34,j=2.15,O=T+.45+j*Math.tan(V);return t.kawaraSlope("ext",{bottomWidth:7.4,run:j,pitch:V,ridgeX:2.6,ridgeY:O,ridgeZ:1,downslopeYaw:Math.PI*.5,tileMat:_,ribMat:I,eaveMat:N,rafterMat:l,ribSpacing:.36}),t.kawaraSlope("ext",{bottomWidth:7.4,run:j,pitch:V,ridgeX:2.6,ridgeY:O,ridgeZ:1,downslopeYaw:-Math.PI*.5,tileMat:_,ribMat:I,eaveMat:N,rafterMat:l,ribSpacing:.36}),t.kawaraSlope("ext",{bottomWidth:7.8,run:1.75,pitch:$,ridgeX:4.65,ridgeY:T+.52,ridgeZ:1,downslopeYaw:Math.PI*.5,tileMat:_,ribMat:I,eaveMat:N,rafterMat:l,ribSpacing:.36}),t.kawaraSlope("ext",{bottomWidth:6.4,run:1.15,pitch:$,ridgeX:2.6,ridgeY:k+.14,ridgeZ:4.25,downslopeYaw:0,tileMat:_,ribMat:I,eaveMat:N,rafterMat:l,ribSpacing:.36}),t.gablePrism("ext",5.6,O-T+.12,.22,2.6,T-.06,4.2,c),t.gablePrism("ext",5.6,O-T+.12,.22,2.6,T-.06,-2.2,c),t.kawaraRidge("ext",2.6,O+.05,-2.65,2.6,O+.05,4.65,N,P,{scale:1.05,oniStart:!0,oniEnd:!0,courses:3}),t.build({id:i.id,name:"高木家（船大工のL字二階工房邸）",subtitle:"明治11年築・吹抜造船工房（北屋根半崩落・和船肋骨）＆いぶし銀錣屋根・二階建",category:"house",builtYear:1878,abandonedYear:1985,stories:2,floorElevations:[L+.04,k+.04],entryLocal:[-2.9,0,6.6]})}function e2(i,e){const t=new Le(i),n=e.getMaterial("ishigaki_rubble",{roughness:.95,bumpScale:.08}),r=e.getMaterial("ishigaki_mossy",{roughness:.96,bumpScale:.08}),s=e.getMaterial("dark_damp_stone",{roughness:.94,bumpScale:.07}),o=e.getMaterial("dressed_stone",{roughness:.91,bumpScale:.06}),a=e.getMaterial("heavy_studded_wood",{roughness:.85,bumpScale:.06}),l=e.getMaterial("washi_plaster",{roughness:.92,bumpScale:.03,tint:16051938}),c=e.getMaterial("charred_cedar",{roughness:.91,bumpScale:.05}),u=e.getMaterial("carved_wood_lattice",{roughness:.86,bumpScale:.05}),d=e.getMaterial("dark_hardwood",{roughness:.86,bumpScale:.04}),h=e.getMaterial("warm_wood_plank",{roughness:.85,bumpScale:.04}),p=e.getMaterial("cobblestone",{roughness:.93,bumpScale:.06}),g=e.getMaterial("blue_mosaic_tile",{roughness:.45,metalness:.06,bumpScale:.03}),x=e.getMaterial("floral_wallpaper_blue",{roughness:.88,bumpScale:.02}),m=e.getMaterial("tatami_green_border",{roughness:.92,bumpScale:.04}),f=e.getMaterial("frosted_grid_window",{roughness:.36,opacity:.46,transparent:!0}),M=e.getMaterial("antique_tansu",{roughness:.78,bumpScale:.04}),S=e.getMaterial("shrine_facade",{roughness:.82,bumpScale:.04}),b=e.getMaterial("full_bookcase",{roughness:.84,bumpScale:.04}),C=e.getMaterial("floral_futon",{roughness:.93,bumpScale:.03}),y=e.getMaterial("black_volcanic_gravel",{roughness:.97,bumpScale:.06}),R=e.getMaterial("matte_black_metal",{roughness:.6,metalness:.6}),E=e.getMaterial("deep_moss",{roughness:.96,bumpScale:.08}),v=e.getMaterial("dark_slate",{roughness:.82,metalness:.14,bumpScale:.06,tint:10134184}),_=e.getMaterial("slate_roof_dark",{roughness:.78,metalness:.18,bumpScale:.05,tint:8686740}),I=e.getMaterial("moss_rock_heavy",{roughness:.94,bumpScale:.08,tint:7308387}),N=e.getMaterial("dark_iron_plate",{roughness:.72,metalness:.22,tint:7765640}),P=e.getMaterial("matte_black_metal",{roughness:.62,metalness:.3}),L=.4,k=3.35,w=6.25,T=8.95;t.box("ext",9.5,1,7.7,0,L-.52,0,r),t.stoneSteps("ext",-.2,4.9,3.72,-.35,L,2,4,o);const D=k-L,X=L+D*.5;t.box("int",8.9,.08,7.1,0,L-.04,0,p),t.floor(-4.35,4.35,-3.45,3.75,L+.04),t.box("ext",3.75,D,.34,-2.8,X,3.65,n,{solid:!0}),t.box("ext",4.15,D,.34,2.6,X,3.65,n,{solid:!0}),t.box("ext",1.56,.72,.34,-.2,L+2.59,3.65,o,{solid:!0}),t.box("ext",.12,2.18,1.35,-1.04,L+1.09,3.05,a,{ry:.38,uvScale:0}),t.box("ext",9.45,D,.34,0,X,-3.65,r,{solid:!0}),t.box("ext",.34,D,7.55,-4.55,X,0,r,{solid:!0}),t.box("ext",.34,D,2.6,4.55,X,-2.4,n,{solid:!0}),t.box("ext",.34,1.05,1.8,4.55,L+.52,-.1,n,{solid:!0}),t.box("ext",.34,.65,1.8,4.55,L+2.62,-.1,n,{solid:!0}),t.box("ext",.06,1.25,1.76,4.55,L+1.68,-.1,f,{uvScale:0}),t.box("ext",.34,D,2.95,4.55,X,2.32,n,{solid:!0}),t.box("int",.28,D,4.2,-1.75,X,-1.5,s,{solid:!0}),t.box("int",.28,.72,1.45,-1.75,L+2.59,1.3,s,{solid:!0}),t.box("int",.28,D,1.65,-1.75,X,2.82,s,{solid:!0}),t.box("int",1.15,.68,.72,-3.55,L+.34,-2.55,o,{solid:!0}),t.box("int",.85,.56,.65,-3.45,L+.96,-2.45,o,{ry:.14}),t.box("int",.78,.82,1.85,-3.82,L+.41,-.25,d,{solid:!0}),t.box("int",1.75,.36,1.75,.25,L+.18,-.85,o,{solid:!0}),t.box("int",1.25,.32,1.25,.25,L+.22,-.85,y),t.cyl("int",.24,.28,.28,10,.25,L+.48,-.85,R),t.cyl("int",.03,.03,2.2,6,.25,L+1.65,-.85,R),t.stairRun("int",{x0:3.55,z0:1.85,x1:3.55,z1:-1.75,y0:L+.04,y1:k+.04,width:1.12,steps:13,treadMat:h,stringerMat:d,railMat:d,railLeft:!0,railRight:!1,guardLeft:!0,guardRight:!1});const W=w-k,Y=k+W*.5;t.box("int",7.3,.16,7.15,-.78,k-.06,0,h),t.box("int",1.62,.16,1.82,3.62,k-.06,-2.66,h),t.box("int",1.62,.16,1.65,3.62,k-.06,2.75,h),t.box("int",2.9,.04,3.1,-2.9,k+.03,-1.9,g),t.box("int",3.9,.04,3.4,.6,k+.03,-1.75,m),t.collider(-4.4,2.85,k-.16,k+.02,-3.55,3.55),t.collider(2.85,4.4,k-.16,k+.02,-3.55,-1.8),t.collider(2.85,4.4,k-.16,k+.02,2,3.55),t.floor(-4.35,2.85,-3.45,3.45,k+.04),t.floor(2.85,4.35,-3.45,-1.72,k+.04),t.floor(2.85,4.35,1.95,3.45,k+.04),t.box("int",.08,.92,3.72,2.86,k+.46,.1,d,{solid:!0}),t.box("int",1.56,.92,.08,3.62,k+.46,1.98,d,{solid:!0}),t.box("ext",2.4,W,.22,-3.4,Y,3.65,l,{solid:!0}),t.box("ext",3.6,.85,.22,-.4,k+.42,3.65,l,{solid:!0}),t.box("ext",3.6,.65,.22,-.4,k+2.57,3.65,l,{solid:!0}),t.box("ext",3.56,1.4,.06,-.4,k+1.55,3.65,f,{uvScale:0}),t.box("ext",3.25,W,.22,3.02,Y,3.65,l,{solid:!0}),t.box("ext",9.25,W,.22,0,Y,-3.65,l,{solid:!0}),t.box("ext",.22,W,7.42,4.55,Y,0,l,{solid:!0}),t.box("ext",.22,W,3.3,-4.55,Y,-2.05,l,{solid:!0}),t.box("ext",.22,.72,2.45,-4.55,k+.36,.8,l,{solid:!0}),t.box("ext",.22,.62,2.45,-4.55,k+2.59,.8,l,{solid:!0}),t.box("ext",.22,W,1.72,-4.55,Y,2.88,l,{solid:!0}),t.box("ext",.78,.16,2.55,-4.92,k+.66,.8,d),t.box("ext",.78,.16,2.55,-4.92,k+2.3,.8,d),t.box("ext",.06,1.52,2.42,-5.26,k+1.48,.8,f,{uvScale:0}),t.box("ext",.74,1.52,.12,-4.92,k+1.48,-.42,d),t.box("ext",.74,1.52,.12,-4.92,k+1.48,2.02,d),t.box("int",.14,W,3.25,-1.4,Y,-1.92,g,{solid:!0}),t.box("int",1.45,W,.14,-3.7,Y,-.3,g,{solid:!0}),t.box("int",1.6,.72,.14,-2.2,k+2.54,-.3,g,{solid:!0}),t.box("int",1.45,.65,1.05,-3.55,k+.34,-2.85,g,{solid:!0}),t.box("int",3.8,W-.12,.05,.55,Y,-3.48,x),t.box("int",1.45,1.38,.54,.45,k+.72,-3.12,M,{solid:!0,uvScale:0}),t.box("int",1.35,.44,.92,-2.55,k+.24,1.25,d,{solid:!0}),t.stairRun("int",{x0:2.05,z0:-1.75,x1:2.05,z1:1.85,y0:k+.04,y1:w+.04,width:1.12,steps:13,treadMat:h,stringerMat:d,railMat:d,railLeft:!0,railRight:!1,guardLeft:!0,guardRight:!1});const U=T-w,K=w+U*.5;t.box("int",5.85,.16,7.15,-1.55,w-.06,0,m),t.box("int",1.75,.16,7.15,3.6,w-.06,0,h),t.box("int",1.45,.16,1.82,2.05,w-.06,-2.66,h),t.box("int",1.45,.16,1.72,2.05,w-.06,2.7,h),t.collider(-4.45,1.35,w-.16,w+.02,-3.55,3.55),t.collider(2.75,4.45,w-.16,w+.02,-3.55,3.55),t.collider(1.35,2.75,w-.16,w+.02,-3.55,-1.8),t.collider(1.35,2.75,w-.16,w+.02,1.9,3.55),t.floor(-4.35,1.35,-3.45,3.45,w+.04),t.floor(2.75,4.35,-3.45,3.45,w+.04),t.floor(1.35,2.75,-3.45,-1.75,w+.04),t.floor(1.35,2.75,1.85,3.45,w+.04),t.box("int",.08,.92,3.65,1.36,w+.46,.05,d,{solid:!0}),t.box("int",.08,.92,3.65,2.74,w+.46,.05,d,{solid:!0}),t.box("int",1.42,.92,.08,2.05,w+.46,-1.78,d,{solid:!0});for(const j of[-3.65,3.65])t.box("ext",2.4,U,.22,-3.4,K,j,c,{solid:!0}),t.box("ext",3.4,.78,.22,-.5,w+.39,j,c,{solid:!0}),t.box("ext",3.4,.58,.22,-.5,w+2.41,j,c,{solid:!0}),t.box("ext",3.36,1.34,.08,-.5,w+1.45,j,u,{uvScale:0}),t.box("ext",3.45,U,.22,2.92,K,j,c,{solid:!0});for(const j of[-4.55,4.55])t.box("ext",.22,U,2.3,j,K,-2.55,c,{solid:!0}),t.box("ext",.22,.78,2.8,j,w+.39,0,c,{solid:!0}),t.box("ext",.22,.58,2.8,j,w+2.41,0,c,{solid:!0}),t.box("ext",.08,1.34,2.76,j,w+1.45,0,u,{uvScale:0}),t.box("ext",.22,U,2.3,j,K,2.55,c,{solid:!0});t.box("int",8.9,.12,7.1,0,T-.04,0,h),t.collider(-4.45,4.45,T-.12,T+.1,-3.55,3.55);for(const j of[-2.4,-.4,1.6])t.box("int",.12,.14,7,j,T-.14,0,d);for(const j of[-1.8,0,1.8])t.box("int",8.8,.14,.12,0,T-.14,j,d);t.box("int",1.65,1.75,.62,-3.55,w+.9,-2.85,S,{solid:!0,uvScale:0}),t.box("int",1.55,1.85,.5,-3.85,w+.94,.65,b,{solid:!0,uvScale:0}),t.box("int",1.55,.15,2.05,-1.65,w+.11,.35,C,{uvScale:0}),t.kawaraSlope("ext",{bottomWidth:9.8,run:1.05,pitch:.36,ridgeX:0,ridgeY:k+.08,ridgeZ:3.72,downslopeYaw:0,tileMat:v,ribMat:_,eaveMat:N,rafterMat:d,ribSpacing:.38}),t.kawaraSlope("ext",{bottomWidth:3.2,run:1.05,pitch:.38,ridgeX:-4.55,ridgeY:k+2.46,ridgeZ:.8,downslopeYaw:-Math.PI*.5,tileMat:v,ribMat:_,eaveMat:N,rafterMat:d,ribSpacing:.36});const H=.46,B=4.8,Z=4.1,V=T-.15+B*Math.tan(H);t.kawaraSlope("ext",{topWidth:3.2,bottomWidth:11.4,run:B,pitch:H,ridgeX:0,ridgeY:V,ridgeZ:0,downslopeYaw:0,tileMat:v,ribMat:_,eaveMat:N,rafterMat:d,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:3.2,bottomWidth:11.4,run:B,pitch:H,ridgeX:0,ridgeY:V,ridgeZ:0,downslopeYaw:Math.PI,tileMat:I,ribMat:_,eaveMat:N,rafterMat:d,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:.06,bottomWidth:9.6,run:Z,pitch:Math.atan2(V-(T-.15),Z),ridgeX:1.6,ridgeY:V,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:v,ribMat:_,eaveMat:N,rafterMat:d,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:.06,bottomWidth:9.6,run:Z,pitch:Math.atan2(V-(T-.15),Z),ridgeX:-1.6,ridgeY:V,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:I,ribMat:_,eaveMat:N,rafterMat:d,ribSpacing:.38}),t.kawaraRidge("ext",-1.65,V+.05,0,1.65,V+.05,0,N,P,{scale:1.15,oniStart:!0,oniEnd:!0,courses:3});const $=T-.12;return t.kawaraRidge("ext",-1.6,V+.02,0,-5.65,$,4.75,N,P,{scale:.78,oniEnd:!0,courses:2}),t.kawaraRidge("ext",1.6,V+.02,0,5.65,$,4.75,N,P,{scale:.78,oniEnd:!0,courses:2}),t.kawaraRidge("ext",-1.6,V+.02,0,-5.65,$,-4.75,N,P,{scale:.78,oniEnd:!0,courses:2}),t.kawaraRidge("ext",1.6,V+.02,0,5.65,$,-4.75,N,P,{scale:.78,oniEnd:!0,courses:2}),t.box("ext",2.8,.26,.65,-2.5,T-.04,-4.4,E),t.build({id:i.id,name:"岩崎家（石工の石壁三階民家）",subtitle:"明治7年築・1F野面積み石壁＆鉄鋲扉・苔むし黒瓦寄棟・青モザイク風呂・三階建",category:"house",builtYear:1874,abandonedYear:1985,stories:3,floorElevations:[L+.04,k+.04,w+.04],entryLocal:[-.2,0,5.9]})}function n2(i,e){const t=new Le(i),n=e.getMaterial("moss_rock_heavy",{roughness:.96,bumpScale:.08}),r=e.getMaterial("ivy_dense_wall",{roughness:.95,bumpScale:.07}),s=e.getMaterial("ivy_climbing_plaster",{roughness:.94,bumpScale:.06}),o=e.getMaterial("peeling_plaster_brick",{roughness:.94,bumpScale:.06}),a=e.getMaterial("crumbling_brick_stucco",{roughness:.95,bumpScale:.06}),l=e.getMaterial("deep_moss",{roughness:.97,bumpScale:.08}),c=e.getMaterial("fallen_leaves",{roughness:.96,bumpScale:.06}),u=e.getMaterial("dark_soil",{roughness:.97,bumpScale:.06}),d=e.getMaterial("aged_rush_mat",{roughness:.95,bumpScale:.05}),h=e.getMaterial("driftwood",{roughness:.95,bumpScale:.06}),p=e.getMaterial("charred_cedar",{roughness:.93,bumpScale:.05}),g=e.getMaterial("cracked_concrete",{roughness:.94,bumpScale:.05}),x=e.getMaterial("shoji_sliding_door",{roughness:.9,opacity:.78,transparent:!0}),m=e.getMaterial("empty_bookshelf",{roughness:.88,bumpScale:.04}),f=e.getMaterial("antique_tansu",{roughness:.84,bumpScale:.04}),M=e.getMaterial("wooden_vanity",{roughness:.86,bumpScale:.04}),S=e.getMaterial("deep_moss",{roughness:.95,bumpScale:.08,tint:8163176}),b=e.getMaterial("dark_slate",{roughness:.85,bumpScale:.06,tint:8292224}),C=e.getMaterial("slate_roof_dark",{roughness:.82,bumpScale:.05,tint:7305330}),y=e.getMaterial("dark_iron_plate",{roughness:.78,metalness:.18}),R=e.getMaterial("matte_black_metal",{roughness:.72,metalness:.22}),E=.35,v=3.2,_=5.9;t.box("ext",8.7,.95,7.3,0,E-.48,0,n),t.stoneSteps("ext",.95,4.75,3.55,-.35,E,2,4,n);const I=v-E,N=E+I*.5;t.box("int",8.2,.08,6.8,0,E-.04,0,u),t.box("int",4,.05,3.6,1.8,E+.02,1.4,c),t.box("int",4.2,.05,3.8,1.7,E+.02,-1.5,l),t.box("int",3.7,.06,6.4,-2.15,E+.01,0,h),t.floor(-4,4,-3.3,3.6,E+.04),t.box("ext",4.35,I,.24,-2.02,N,3.5,r,{solid:!0}),t.box("ext",1.74,.68,.24,1,E+2.51,3.5,o,{solid:!0}),t.box("ext",2.35,I,.24,3.02,N,3.5,s,{solid:!0}),t.box("ext",4.6,I,.24,-1.9,N,-3.5,r,{solid:!0}),t.box("ext",3.8,1.85,.24,2.3,E+.92,-3.5,a,{solid:!0}),t.box("ext",.24,I,7.15,-4.2,N,0,r,{solid:!0}),t.box("ext",.24,I,3.6,4.2,N,1.75,s,{solid:!0}),t.box("ext",.24,2.1,3.55,4.2,E+1.05,-1.78,a,{solid:!0}),t.box("int",.14,I,2.6,-.35,N,-2.1,o,{solid:!0}),t.box("int",.14,I,2.5,-.35,N,2.2,o,{solid:!0}),t.box("int",.14,.68,1.75,-.35,E+2.51,.05,o,{solid:!0}),t.box("int",.06,1.95,.92,-.15,E+.98,1.65,x,{rz:.14,ry:.22,uvScale:0}),t.box("int",1.65,1.85,.44,2.35,E+.42,-1.55,m,{rx:1.32,ry:.35,uvScale:0}),t.box("int",1.75,.84,.65,-2.55,E+.42,-3.02,g,{solid:!0}),t.box("int",1.45,.22,.55,-2.55,E+.88,-3.02,l),t.box("int",.95,1.25,.52,-3.55,E+.64,-1.55,M,{ry:.12,solid:!0,uvScale:0}),t.box("int",2.4,.16,.16,2.6,E+.48,-2.4,p,{rz:.32,ry:-.45}),t.box("int",1.2,.36,1,3.2,E+.18,-2.6,n),t.stairRun("int",{x0:-3.15,z0:1.75,x1:-3.15,z1:-1.75,y0:E+.04,y1:v+.04,width:1.12,steps:13,treadMat:h,stringerMat:p,railMat:p,railLeft:!1,railRight:!0,guardLeft:!1,guardRight:!0,tiltZ:.035});const P=_-v,L=v+P*.5;t.box("int",6.65,.16,6.85,.85,v-.06,0,h),t.box("int",1.65,.16,1.75,-3.28,v-.06,-2.58,h),t.box("int",1.65,.16,1.65,-3.28,v-.06,2.62,h),t.box("int",3.4,.04,5.2,-.55,v+.03,-.35,d),t.box("int",2.8,.05,3.6,2.45,v+.03,-1.25,l),t.box("int",1.8,.05,2.1,-.25,v+.04,-1.85,l),t.collider(-2.45,4.1,v-.16,v+.02,-3.4,3.4),t.collider(-4.1,-2.45,v-.16,v+.02,-3.4,-1.8),t.collider(-4.1,-2.45,v-.16,v+.02,1.9,3.4),t.floor(-2.45,4,-3.3,3.3,v+.04),t.floor(-4,-2.45,-3.3,-1.72,v+.04),t.floor(-4,-2.45,1.85,3.3,v+.04),t.box("int",.08,.9,3.65,-2.46,v+.45,.05,p,{solid:!0}),t.box("int",1.62,.9,.08,-3.28,v+.45,1.88,p,{solid:!0}),t.box("ext",2.6,P,.22,-2.9,L,3.5,s,{solid:!0}),t.box("ext",2.8,.85,.22,-.2,v+.42,3.5,o,{solid:!0}),t.box("ext",2.8,.55,.22,-.2,v+2.42,3.5,s,{solid:!0}),t.box("ext",3,P,.22,2.7,L,3.5,r,{solid:!0}),t.box("ext",.22,P,7.1,-4.2,L,0,r,{solid:!0}),t.box("ext",4.3,P,.22,-2.05,L,-3.5,s,{solid:!0}),t.box("ext",4.1,1.15,.22,2.15,v+.58,-3.5,a,{solid:!0}),t.box("ext",.22,P,3.4,4.2,L,1.8,s,{solid:!0}),t.box("ext",.22,1.25,3.7,4.2,v+.62,-1.75,a,{solid:!0}),t.box("int",4.2,.12,6.8,-2.05,_-.06,0,h),t.collider(-4.1,.05,_-.12,_+.1,-3.4,3.4),t.box("int",1.45,1.42,.56,-.95,v+.72,-2.92,f,{rz:-.1,solid:!0,uvScale:0}),t.box("int",3.45,.18,.18,2.62,v+.72,-1.55,p,{rz:.36,ry:.12}),t.box("int",.14,.14,3.15,1.85,v+.67,-2,p,{rx:.36,ry:-.14}),t.box("int",1.1,.24,.9,2.25,v+.14,-1.85,b,{ry:.5,rx:.14}),t.box("int",.85,.18,.75,1.45,v+.1,-2.45,C,{ry:-.4,rz:.16}),t.box("ext",2.85,.14,1.55,1.05,v+.05,4.18,b,{rx:.36,rz:-.16});for(let D=-3;D<=3;D++)t.box("ext",.11,.07,1.55,1.05+D*.38,v+.11-D*.06,4.18,C,{rx:.36,rz:-.16});t.box("ext",.14,2.85,.14,-.22,E+1.42,4.78,p,{rz:.08}),t.box("ext",.14,2.55,.14,2.25,E+1.25,4.78,p,{rz:-.16});const k=.5,w=4.45,T=_-.12+w*Math.tan(k);t.kawaraSlope("ext",{bottomWidth:9.8,run:w,pitch:k,ridgeX:0,ridgeY:T,ridgeZ:0,downslopeYaw:0,tileMat:S,ribMat:C,eaveMat:y,rafterMat:p,ribSpacing:.4,skipRibPredicate:D=>D>2.6}),t.kawaraSlope("ext",{bottomWidth:5.3,run:w,pitch:k,ridgeX:-2.25,ridgeY:T,ridgeZ:0,downslopeYaw:Math.PI,tileMat:S,ribMat:C,eaveMat:y,rafterMat:p,ribSpacing:.4,skipRibPredicate:D=>D<-1.9}),t.gablePrism("ext",7.2,T-_+.14,.22,-4.2,_-.06,0,s,{ry:Math.PI*.5}),t.kawaraRidge("ext",-4.85,T+.04,0,1.35,T+.04,0,y,R,{scale:1,oniStart:!0,oniEnd:!1,courses:2});for(let D=0;D<4;D++){const X=1.95-D*.24,W=.25+D*.62,Y=X*.5,U=-Y*Math.cos(k),K=T-.1-Y*Math.sin(k);t.box("ext",.11,.11,X,W,K,U,p,{rx:-k})}return t.build({id:i.id,name:"佐伯家（苔と蔦の半壊二階廃墟）",subtitle:"明治8年築・濃密蔦壁＆傾き庇・北東黒瓦屋根崩落（天井抜け青空露出）・二階建",category:"house",builtYear:1875,abandonedYear:1985,stories:2,floorElevations:[E+.04,v+.04],entryLocal:[1,0,5.8]})}function i2(i,e){const t=new Le(i),n=e.getMaterial("ishigaki_cut",{roughness:.92,bumpScale:.07}),r=e.getMaterial("ishigaki_rubble",{roughness:.94,bumpScale:.08}),s=e.getMaterial("dressed_stone",{roughness:.9,bumpScale:.06}),o=e.getMaterial("charred_cedar",{roughness:.9,bumpScale:.05}),a=e.getMaterial("aged_timber_planks",{roughness:.91,bumpScale:.06}),l=e.getMaterial("white_plaster",{roughness:.92,bumpScale:.04,tint:16249833}),c=e.getMaterial("washi_plaster",{roughness:.91,bumpScale:.03}),u=e.getMaterial("dark_hardwood",{roughness:.84,bumpScale:.04}),d=e.getMaterial("warm_wood_plank",{roughness:.82,bumpScale:.04}),h=e.getMaterial("oak_flooring",{roughness:.8,bumpScale:.03}),p=e.getMaterial("tree_bark",{roughness:.94,bumpScale:.07}),g=e.getMaterial("steel_truss_wall",{roughness:.62,metalness:.52,bumpScale:.05}),x=e.getMaterial("carved_wood_lattice",{roughness:.86,bumpScale:.05}),m=e.getMaterial("wood_slat_screen",{roughness:.85,bumpScale:.05}),f=e.getMaterial("woven_screen_brown",{roughness:.9,bumpScale:.05}),M=e.getMaterial("tatami_bordered",{roughness:.92,bumpScale:.04}),S=e.getMaterial("tatami_green_border",{roughness:.92,bumpScale:.04}),b=e.getMaterial("shoji_sliding_door",{roughness:.88,opacity:.9,transparent:!0}),C=e.getMaterial("window_frosted_wood",{roughness:.2,opacity:.2,transparent:!0,tint:14478324}),y=e.getMaterial("window_frosted_wood",{roughness:.32,opacity:.36,transparent:!0}),R=e.getMaterial("pegboard",{roughness:.84,bumpScale:.04}),E=e.getMaterial("dark_green_chalk",{roughness:.88,bumpScale:.02}),v=e.getMaterial("antique_tansu",{roughness:.78,bumpScale:.04}),_=e.getMaterial("red_zabuton",{roughness:.92,bumpScale:.03}),I=e.getMaterial("retro_kitchen_unit",{roughness:.78,bumpScale:.03}),N=e.getMaterial("wooden_dresser",{roughness:.82,bumpScale:.03}),P=e.getMaterial("full_bookcase",{roughness:.84,bumpScale:.04}),L=e.getMaterial("file_cabinet",{roughness:.66,metalness:.25}),k=e.getMaterial("office_counter",{roughness:.8,bumpScale:.03}),w=e.getMaterial("island_map_sign",{roughness:.8,bumpScale:.02}),T=e.getMaterial("coir_doormat",{roughness:.96,bumpScale:.06}),D=e.getMaterial("slate_roof_dark",{roughness:.68,metalness:.22,bumpScale:.06,tint:11976906}),X=e.getMaterial("dark_slate",{roughness:.64,metalness:.26,bumpScale:.05,tint:10397876}),W=e.getMaterial("dark_iron_plate",{roughness:.58,metalness:.32,tint:8818844}),Y=e.getMaterial("matte_black_metal",{roughness:.5,metalness:.42,tint:7371398}),U=.55,K=3.75,H=6.85,B=9.85,Z=12.55;t.box("ext",11.4,5.2,8.2,0,U-2.65,-.2,r),t.box("ext",12.9,.36,9.5,0,U-.22,0,u);for(const dt of[-6.15,-3.1,0,3.1,6.15])for(const lt of[-4.45,4.45])t.box("ext",.34,5.4,.34,dt,U-2.72,lt,u);for(const dt of[-4.6,-1.55,1.55,4.6])t.box("ext",3.4,.2,.2,dt,U-1.65,4.45,u,{rz:.42}),t.box("ext",3.4,.2,.2,dt,U-1.65,4.45,u,{rz:-.42}),t.box("ext",3.4,.2,.2,dt,U-1.65,-4.45,u,{rz:.42});t.box("ext",3.4,4.6,1.9,-1.4,U-2.34,5.35,n),t.stoneSteps("ext",-1.4,6.45,4.8,-.35,U,2.75,5,s),t.floor(-2.9,.1,4.4,5.4,U+.04);const V=K-U,$=U+V*.5;t.box("int",12.4,.12,9,0,U-.04,0,a),t.box("int",5.4,.04,8.5,3.45,U+.03,0,M),t.box("int",1.25,.03,.72,-1.4,U+.04,4.18,T,{uvScale:0}),t.floor(-6.15,6.15,-4.45,4.65,U+.04),t.box("ext",3.74,1.25,.26,-4.45,U+.62,4.6,o,{solid:!0}),t.box("ext",3.74,V-1.25,.26,-4.45,U+2.22,4.6,a,{solid:!0}),t.box("ext",2.44,.74,.26,-1.4,U+2.83,4.6,a,{solid:!0}),t.box("ext",6.54,1.2,.26,3.05,U+.6,4.6,o,{solid:!0}),t.box("ext",1.55,V-1.2,.26,.58,U+2.2,4.6,l,{solid:!0}),t.box("ext",2.85,.56,.26,2.75,U+2.92,4.6,l,{solid:!0}),t.box("ext",2.8,1.44,.07,2.75,U+1.92,4.6,x,{uvScale:0}),t.box("ext",2.15,V-1.2,.26,5.25,U+2.2,4.6,l,{solid:!0}),t.box("ext",12.65,1.25,.26,0,U+.62,-4.6,o,{solid:!0}),t.box("ext",12.65,V-1.25,.26,0,U+2.22,-4.6,l,{solid:!0}),t.box("ext",.26,1.25,9.25,-6.3,U+.62,0,o,{solid:!0}),t.box("ext",.26,V-1.25,9.25,-6.3,U+2.22,0,a,{solid:!0}),t.box("ext",.26,1.25,9.25,6.3,U+.62,0,o,{solid:!0}),t.box("ext",.26,V-1.25,9.25,6.3,U+2.22,0,l,{solid:!0}),t.box("int",.16,V,5.82,.6,$,-1.7,c,{solid:!0}),t.box("int",.16,.72,1.85,.6,U+2.84,2.1,m,{uvScale:0}),t.box("int",.16,V,1.62,.6,$,3.8,c,{solid:!0}),t.cyl("int",.24,.26,4.4,8,-5.25,U+.26,-1.2,p,{rx:Math.PI*.5}),t.cyl("int",.22,.25,4.2,8,-4.68,U+.24,-1.3,p,{rx:Math.PI*.5}),t.cyl("int",.2,.22,4,8,-4.96,U+.62,-1.25,p,{rx:Math.PI*.5}),t.collider(-5.65,-4.35,U,U+1,-3.45,1.05),t.box("int",1.15,.82,3.2,-2.55,U+.41,-1.65,d,{solid:!0}),t.box("int",.08,1.55,2.65,-6.12,U+1.85,1.65,R,{uvScale:0}),t.box("int",6.6,.48,.18,-2.9,K-.34,.2,g,{uvScale:0}),t.box("int",1.65,.38,1,2.95,U+.2,-1.15,u,{solid:!0}),t.box("int",.62,.08,.62,2.95,U+.08,-2.05,_,{uvScale:0}),t.box("int",.62,.08,.62,2.95,U+.08,-.25,_,{uvScale:0}),t.box("int",1.55,1.48,.52,2.65,U+.75,-4.15,v,{solid:!0,uvScale:0}),t.stairRun("int",{x0:5.2,z0:2.6,x1:5.2,z1:-1.5,y0:U+.04,y1:K+.04,width:1.2,steps:15,treadMat:u,stringerMat:u,railMat:d,railLeft:!0,railRight:!1,closedRisers:!0,guardLeft:!0,guardRight:!1});const j=H-K,O=K+j*.5;t.box("int",10.74,.16,9.2,-.93,K-.06,0,d),t.box("int",1.88,.16,3.06,5.36,K-.06,-3.07,d),t.box("int",1.88,.16,1.92,5.36,K-.06,3.64,d),t.box("int",8.8,.04,7.6,-.8,K+.03,0,S),t.collider(-6.3,4.44,K-.16,K+.02,-4.6,4.6),t.collider(4.44,6.3,K-.16,K+.02,-4.6,-1.56),t.collider(4.44,6.3,K-.16,K+.02,2.7,4.6),t.floor(-6.18,4.42,-4.48,4.52,K+.04),t.floor(4.38,6.18,-4.48,-1.5,K+.04),t.floor(4.38,6.18,2.66,4.48,K+.04),t.kouranRailing("int",4.44,-1.54,4.44,2.7,K,.94,u,.56),t.kouranRailing("int",4.44,2.7,6.18,2.7,K,.94,u,.52),t.box("ext",11.95,.16,1.18,0,K-.04,5.18,d),t.kouranRailing("ext",-5.92,5.72,5.92,5.72,K,.96,u,.56),t.kouranRailing("ext",-5.92,4.6,-5.92,5.72,K,.96,u,.52),t.kouranRailing("ext",5.92,4.6,5.92,5.72,K,.96,u,.52),t.floor(-5.82,5.82,4.5,5.65,K+.04),t.box("ext",5.42,j,.22,-3.6,O,4.6,l,{solid:!0}),t.box("ext",1.84,.72,.22,0,K+2.74,4.6,l,{solid:!0}),t.box("ext",5.42,j,.22,3.6,O,4.6,l,{solid:!0}),t.box("ext",12.65,j,.22,0,O,-4.6,l,{solid:!0}),t.box("ext",.22,j,9.25,-6.3,O,0,l,{solid:!0}),t.box("ext",.22,j,9.25,6.3,O,0,l,{solid:!0});for(const dt of[-6.32,-3.15,-.92,.92,3.15,6.32])t.box("ext",.18,j+.06,.28,dt,O,4.62,u);t.box("int",.14,j,3.25,.45,O,-2.95,x,{solid:!0,uvScale:0}),t.box("int",1.95,.92,.62,2.25,K+.46,-4.18,I,{solid:!0,uvScale:0}),t.box("int",1.35,1.15,.5,-5.15,K+.58,3.95,N,{solid:!0,uvScale:0}),t.box("int",2.4,1.65,.06,-1.65,K+1.55,-4.44,b,{uvScale:0}),t.stairRun("int",{x0:-3.65,z0:-2.4,x1:-3.65,z1:1.7,y0:K+.04,y1:H+.04,width:1.15,steps:14,treadMat:u,stringerMat:u,railMat:d,railLeft:!0,railRight:!0,closedRisers:!1,guardLeft:!0,guardRight:!0});const q=B-H,ut=H+q*.5;t.box("int",7.64,.16,7.2,.88,H-.06,0,h),t.box("int",1.82,.16,1.18,-3.81,H-.06,-3.02,h),t.box("int",1.82,.16,1.84,-3.81,H-.06,2.68,h),t.box("int",9.2,.08,7,0,B-.08,0,f),t.collider(-2.92,4.7,H-.16,H+.02,-3.6,3.6),t.collider(-4.7,-2.92,H-.16,H+.02,-3.6,-2.46),t.collider(-4.7,-2.92,H-.16,H+.02,1.78,3.6),t.floor(-2.9,4.58,-3.48,3.48,H+.04),t.floor(-4.58,-2.86,-3.48,-2.42,H+.04),t.floor(-4.58,-2.86,1.72,3.48,H+.04),t.kouranRailing("int",-2.92,-2.46,-2.92,1.78,H,.94,u,.56),t.kouranRailing("int",-4.58,-2.46,-2.92,-2.46,H,.94,u,.5),t.box("ext",9.45,.88,.22,0,H+.44,3.6,l,{solid:!0}),t.box("ext",2.6,q-.88,.22,-3.42,H+1.94,3.6,l,{solid:!0}),t.box("ext",4.2,.52,.22,0,H+2.74,3.6,l,{solid:!0}),t.box("ext",4.16,1.6,.06,0,H+1.68,3.6,C,{uvScale:0}),t.box("ext",2.65,q-.88,.22,3.4,H+1.94,3.6,l,{solid:!0}),t.box("ext",9.45,q,.22,0,ut,-3.6,l,{solid:!0}),t.box("ext",.22,q,7.25,-4.7,ut,0,l,{solid:!0}),t.box("ext",.22,.9,7.25,4.7,H+.45,0,l,{solid:!0}),t.box("ext",.22,q-.9,2.25,4.7,H+1.95,-2.5,l,{solid:!0}),t.box("ext",.22,.54,2.6,4.7,H+2.73,-.05,l,{solid:!0}),t.box("ext",.06,1.56,2.56,4.7,H+1.68,-.05,y,{uvScale:0}),t.box("ext",.22,q-.9,2.4,4.7,H+1.95,2.42,l,{solid:!0}),t.box("int",2.77,1.6,.05,-.55,H+1.72,-3.45,u),t.box("int",2.65,1.48,.06,-.55,H+1.72,-3.41,E,{uvScale:0}),t.box("int",1.85,.82,.92,-.55,H+.41,-.95,k,{solid:!0,uvScale:0}),t.box("int",1.92,.06,.98,-.55,H+.85,-.95,d,{solid:!0}),t.box("int",.52,1.95,1.75,4.26,H+.98,-2.15,P,{solid:!0,uvScale:0}),t.box("int",.56,1.48,.74,4.24,H+.74,1.95,L,{solid:!0,uvScale:0}),t.stairRun("int",{x0:1.75,z0:1.95,x1:1.75,z1:-1.75,y0:H+.04,y1:B+.04,width:1.08,steps:14,treadMat:u,stringerMat:u,railMat:d,railLeft:!0,railRight:!1,closedRisers:!1,guardLeft:!0,guardRight:!1});const ht=Z-B,G=B+ht*.5;t.box("int",3.8,.16,5.4,-.8,B-.06,0,h),t.box("int",1.64,.16,.92,1.88,B-.06,-2.24,h),t.box("int",1.64,.16,.72,1.88,B-.06,2.34,h),t.collider(-2.7,1.08,B-.16,B+.02,-2.7,2.7),t.collider(1.08,2.7,B-.16,B+.02,-2.7,-1.8),t.collider(1.08,2.7,B-.16,B+.02,2.02,2.7),t.floor(-2.65,1.06,-2.65,2.65,B+.04),t.floor(1.02,2.62,-2.65,-1.74,B+.04),t.floor(1.02,2.62,1.98,2.65,B+.04),t.kouranRailing("int",1.08,-1.78,1.08,2.02,B,.94,u,.52),t.kouranRailing("int",1.08,2.02,2.62,2.02,B,.94,u,.48),t.box("ext",7.58,.16,1.12,0,B-.04,3.24,d),t.box("ext",7.58,.16,1.12,0,B-.04,-3.24,d),t.box("ext",1.12,.16,5.44,-3.24,B-.04,0,d),t.box("ext",1.12,.16,5.44,3.24,B-.04,0,d),t.kouranRailing("ext",-3.76,3.76,3.76,3.76,B,.96,u,.54),t.kouranRailing("ext",-3.76,-3.76,3.76,-3.76,B,.96,u,.54),t.kouranRailing("ext",-3.76,-3.76,-3.76,3.76,B,.96,u,.54),t.kouranRailing("ext",3.76,-3.76,3.76,3.76,B,.96,u,.54),t.floor(-3.68,3.68,2.62,3.68,B+.04),t.floor(-3.68,3.68,-3.68,-2.62,B+.04),t.floor(-3.68,-2.62,-3.68,3.68,B+.04),t.floor(2.62,3.68,-3.68,3.68,B+.04),t.box("ext",1.12,ht,.2,-2.16,G,2.7,l,{solid:!0}),t.box("ext",1.6,.64,.2,-.82,B+2.38,2.7,l,{solid:!0}),t.box("ext",1.64,.09,.26,-.82,B+2.06,2.7,u),t.box("ext",.11,ht,.25,-1.6,G,2.7,u),t.box("ext",.11,ht,.25,-.04,G,2.7,u),t.box("ext",2.78,.78,.2,1.34,B+.39,2.7,l,{solid:!0}),t.box("ext",2.78,.08,.26,1.34,B+.8,2.7,u),t.box("ext",2.78,.09,.26,1.34,Z-.42,2.7,u),t.box("ext",.08,1.5,.14,.88,B+1.54,2.7,u),t.box("ext",.08,1.5,.14,1.8,B+1.54,2.7,u),t.box("ext",2.74,1.5,.06,1.34,B+1.54,2.7,C,{uvScale:0}),t.box("ext",2.78,.42,.2,1.34,Z-.21,2.7,l,{solid:!0}),t.box("ext",.2,ht,1.92,-2.7,G,-1.76,l,{solid:!0}),t.box("ext",.2,.64,1.6,-2.7,B+2.38,-.02,l,{solid:!0}),t.box("ext",.26,.09,1.64,-2.7,B+2.06,-.02,u),t.box("ext",.25,ht,.11,-2.7,G,-.8,u),t.box("ext",.25,ht,.11,-2.7,G,.76,u),t.box("ext",.2,ht,1.98,-2.7,G,1.74,l,{solid:!0}),t.box("ext",5.45,.78,.2,0,B+.39,-2.7,l,{solid:!0}),t.box("ext",3.84,.08,.26,0,B+.8,-2.7,u),t.box("ext",3.84,.09,.26,0,Z-.42,-2.7,u);for(const dt of[-.95,0,.95])t.box("ext",.08,1.5,.14,dt,B+1.54,-2.7,u);t.box("ext",.85,ht-.78,.2,-2.3,B+1.74,-2.7,l,{solid:!0}),t.box("ext",3.74,1.5,.06,0,B+1.54,-2.7,C,{uvScale:0}),t.box("ext",3.78,.42,.2,0,Z-.21,-2.7,l,{solid:!0}),t.box("ext",.85,ht-.78,.2,2.3,B+1.74,-2.7,l,{solid:!0}),t.box("ext",.2,.78,5.45,2.7,B+.39,0,l,{solid:!0}),t.box("ext",.26,.08,3.84,2.7,B+.8,0,u),t.box("ext",.26,.09,3.84,2.7,Z-.42,0,u);for(const dt of[-.95,0,.95])t.box("ext",.14,1.5,.08,2.7,B+1.54,dt,u);t.box("ext",.2,ht-.78,.85,2.7,B+1.74,-2.3,l,{solid:!0}),t.box("ext",.06,1.5,3.74,2.7,B+1.54,0,C,{uvScale:0}),t.box("ext",.2,.42,3.78,2.7,Z-.21,0,l,{solid:!0}),t.box("ext",.2,ht-.78,.85,2.7,B+1.74,2.3,l,{solid:!0});for(const[dt,lt]of[[-2.72,-2.72],[2.72,-2.72],[-2.72,2.72],[2.72,2.72]])t.box("ext",.22,ht+.08,.22,dt,G,lt,u);t.box("int",5.36,.08,5.36,0,Z-.04,0,f),t.box("int",5.2,.2,.2,0,Z-.14,0,u),t.box("int",.2,.2,5.2,0,Z-.14,0,u),t.box("int",1.15,.82,.92,-.75,B+.41,.1,u,{solid:!0}),t.box("int",.98,.03,.76,-.75,B+.84,.1,w,{uvScale:0}),t.kawaraSlope("ext",{bottomWidth:13.4,run:1.32,pitch:.36,ridgeX:0,ridgeY:K+.14,ridgeZ:4.56,downslopeYaw:0,tileMat:D,ribMat:X,rafterMat:u,ribSpacing:.38}),t.kawaraSlope("ext",{bottomWidth:10,run:1.05,pitch:.36,ridgeX:-6.26,ridgeY:K+.1,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:D,ribMat:X,rafterMat:u,ribSpacing:.38});const mt=.4;t.kawaraSlope("ext",{topWidth:9.6,bottomWidth:13.8,run:2.3,pitch:mt,ridgeX:0,ridgeY:H+.5,ridgeZ:3.58,downslopeYaw:0,tileMat:D,ribMat:X,rafterMat:u,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:9.6,bottomWidth:13.8,run:1.95,pitch:mt,ridgeX:0,ridgeY:H+.42,ridgeZ:-3.58,downslopeYaw:Math.PI,tileMat:D,ribMat:X,rafterMat:u,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:7.4,bottomWidth:10.6,run:2.25,pitch:mt,ridgeX:4.68,ridgeY:H+.48,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:D,ribMat:X,rafterMat:u,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:7.4,bottomWidth:10.6,run:2.25,pitch:mt,ridgeX:-4.68,ridgeY:H+.48,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:D,ribMat:X,rafterMat:u,ribSpacing:.38});const nt=.4;t.kawaraSlope("ext",{topWidth:7.6,bottomWidth:10.4,run:1.35,pitch:nt,ridgeX:0,ridgeY:B+.02,ridgeZ:3.74,downslopeYaw:0,tileMat:D,ribMat:X,rafterMat:u,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:7.6,bottomWidth:10.4,run:1.35,pitch:nt,ridgeX:0,ridgeY:B+.02,ridgeZ:-3.74,downslopeYaw:Math.PI,tileMat:D,ribMat:X,rafterMat:u,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:7.6,bottomWidth:9.2,run:1.55,pitch:nt,ridgeX:3.74,ridgeY:B+.06,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:D,ribMat:X,rafterMat:u,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:7.6,bottomWidth:9.2,run:1.55,pitch:nt,ridgeX:-3.74,ridgeY:B+.06,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:D,ribMat:X,rafterMat:u,ribSpacing:.38});const st=.52,ct=4.45,et=Z+ct*Math.tan(st)-.12,tt=1.65,F=ct*2,A=1.05,J=et-A;t.kawaraSlope("ext",{topWidth:tt*2,bottomWidth:F,run:ct,pitch:st,ridgeX:0,ridgeY:et,ridgeZ:0,downslopeYaw:0,tileMat:D,ribMat:X,rafterMat:u,ribSpacing:.34}),t.kawaraSlope("ext",{topWidth:tt*2,bottomWidth:F,run:ct,pitch:st,ridgeX:0,ridgeY:et,ridgeZ:0,downslopeYaw:Math.PI,tileMat:D,ribMat:X,rafterMat:u,ribSpacing:.34}),t.gablePrism("ext",3.4,A-.08,.18,tt,J,0,l,{ry:Math.PI*.5}),t.gablePrism("ext",3.4,A-.08,.18,-tt,J,0,l,{ry:Math.PI*.5}),t.kawaraSlope("ext",{topWidth:3.6,bottomWidth:F,run:ct-tt+.1,pitch:.48,ridgeX:tt,ridgeY:J,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:D,ribMat:X,rafterMat:u,ribSpacing:.34}),t.kawaraSlope("ext",{topWidth:3.6,bottomWidth:F,run:ct-tt+.1,pitch:.48,ridgeX:-tt,ridgeY:J,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:D,ribMat:X,rafterMat:u,ribSpacing:.34}),t.kawaraRidge("ext",-tt,et+.04,0,tt,et+.04,0,W,Y,{scale:1.12,courses:3,oniStart:!0,oniEnd:!0});const ot=et-ct*Math.tan(st);for(const dt of[-1,1])for(const lt of[-1,1])t.kawaraRidge("ext",dt*tt,J+.04,lt*1.75,dt*(ct-.1),ot+.05,lt*(ct-.1),W,Y,{scale:.72,courses:1,oniStart:!1,oniEnd:!0});return t.build({id:"H07",name:"安藤家（大工棟梁・懸造り四階木組櫓邸）",subtitle:"懸造り柱脚・木工刻み場・原寸図面室・4F 360°屋外回廊付望楼櫓",category:"house",builtYear:1877,abandonedYear:1985,stories:4,floorElevations:[U,K,H,B],entryLocal:[-1.4,0,7.6],entryLookLocalYaw:0})}function r2(i,e){const t=new Le(i),n=e.getMaterial("ishigaki_mossy",{roughness:.94,bumpScale:.08}),r=e.getMaterial("dressed_stone",{roughness:.91,bumpScale:.06}),s=e.getMaterial("white_plaster",{roughness:.92,bumpScale:.04,tint:16249576}),o=e.getMaterial("horizontal_wood_siding",{roughness:.89,bumpScale:.05}),a=e.getMaterial("dark_hardwood",{roughness:.86,bumpScale:.04}),l=e.getMaterial("warm_wood_plank",{roughness:.84,bumpScale:.04}),c=e.getMaterial("light_wood_grain",{roughness:.84,bumpScale:.03}),u=e.getMaterial("tatami_bordered",{roughness:.92,bumpScale:.04}),d=e.getMaterial("blue_bath_tile",{roughness:.42,metalness:.06,bumpScale:.03}),h=e.getMaterial("linen_fusuma",{roughness:.9,bumpScale:.02}),p=e.getMaterial("shoji_sliding_door",{roughness:.88,opacity:.9,transparent:!0}),g=e.getMaterial("window_frosted_wood",{roughness:.35,opacity:.45,transparent:!0}),x=e.getMaterial("retro_kitchen_unit",{roughness:.76,bumpScale:.03}),m=e.getMaterial("kitchen_cabinet",{roughness:.8,bumpScale:.03}),f=e.getMaterial("antique_tansu",{roughness:.78,bumpScale:.04}),M=e.getMaterial("wooden_dresser",{roughness:.82,bumpScale:.04}),S=e.getMaterial("full_bookcase",{roughness:.84,bumpScale:.04}),b=e.getMaterial("red_zabuton",{roughness:.92,bumpScale:.03}),C=e.getMaterial("vintage_rug_red",{roughness:.93,bumpScale:.03}),y=e.getMaterial("red_tin_roof",{roughness:.66,metalness:.16,bumpScale:.05,tint:14245962}),R=e.getMaterial("glazed_brown_brick",{roughness:.54,metalness:.18,bumpScale:.05,tint:11946552}),E=e.getMaterial("old_red_brick",{roughness:.64,metalness:.14,tint:9385512}),v=e.getMaterial("slate_roof_dark",{roughness:.76,metalness:.16,bumpScale:.05}),_=e.getMaterial("dark_slate",{roughness:.72,metalness:.2,bumpScale:.05}),I=e.getMaterial("matte_black_metal",{roughness:.6,metalness:.3,tint:7023650}),N=.5,P=3.55,L=6.55,k=9.3;t.box("ext",11.2,4.2,8.8,0,N-2.12,0,n),t.stoneSteps("ext",.2,7.15,4.25,-1.65,N,2.45,9,r),t.box("ext",.42,2.45,2.95,-1.25,-.8,5.7,n,{solid:!0}),t.box("ext",.42,2.45,2.95,1.65,-.8,5.7,n,{solid:!0});const w=P-N,T=N+w*.5;t.box("int",10.6,.1,8.2,0,N-.03,0,l),t.box("int",6.8,.04,4.4,.1,N+.03,1.4,u),t.box("int",2.8,.04,3.2,-3.7,N+.03,-2.35,d),t.floor(-5.2,5.2,-4.05,4.35,N+.04),t.box("ext",4.65,w,.22,-3.12,T,4.2,o,{solid:!0}),t.box("ext",2.05,.8,.22,.2,N+2.65,4.2,o,{solid:!0}),t.box("ext",4.25,w,.22,3.32,T,4.2,o,{solid:!0}),t.box("ext",1.05,2.2,.06,-1.25,N+1.1,4.04,p,{uvScale:0}),t.box("ext",5.8,w,.22,-2.55,T,-4.2,o,{solid:!0}),t.box("ext",2.4,.95,.22,1.55,N+.47,-4.2,o,{solid:!0}),t.box("ext",2.4,.72,.22,1.55,N+2.69,-4.2,o,{solid:!0}),t.box("ext",2.36,1.38,.06,1.55,N+1.64,-4.2,g,{uvScale:0}),t.box("ext",2.75,w,.22,4.08,T,-4.2,o,{solid:!0}),t.box("ext",.22,w,4.2,-5.4,T,-2.15,o,{solid:!0}),t.box("ext",.22,.88,2.4,-5.4,N+.44,1.15,o,{solid:!0}),t.box("ext",.22,.72,2.4,-5.4,N+2.69,1.15,o,{solid:!0}),t.box("ext",.06,1.45,2.36,-5.4,N+1.6,1.15,g,{uvScale:0}),t.box("ext",.22,w,1.95,-5.4,T,3.28,o,{solid:!0}),t.box("ext",.22,w,8.55,5.4,T,0,o,{solid:!0}),t.box("int",.14,w,3.4,-2.35,T,-2.4,d,{solid:!0}),t.box("int",1.75,w,.14,-4.45,T,-.75,d,{solid:!0}),t.box("int",1.35,.75,.14,-2.95,N+2.67,-.75,d,{solid:!0}),t.box("int",1.55,.65,1.05,-4.45,N+.34,-3.45,d,{solid:!0}),t.box("int",1.95,w,.12,-1.35,T,-.75,h,{solid:!0,uvScale:0}),t.box("int",1.95,.75,.12,.55,N+2.67,-.75,s,{solid:!0}),t.box("int",2,w,.12,2.5,T,-.75,h,{solid:!0,uvScale:0}),t.box("int",2.2,.18,.82,-3.9,N+.11,3.65,a,{solid:!0}),t.box("int",1.75,.38,1.05,-1.25,N+.22,1.35,a,{solid:!0}),t.box("int",.62,.07,.62,-1.25,N+.08,.45,b,{uvScale:0}),t.box("int",.62,.07,.62,-1.25,N+.08,2.25,b,{uvScale:0}),t.box("int",1.55,1.45,.56,2.45,N+.74,-.35,f,{solid:!0,uvScale:0}),t.box("int",2.1,.88,.66,2.2,N+.44,-3.72,x,{solid:!0,uvScale:0}),t.box("int",.62,1.82,1.25,4.92,N+.91,-2.4,m,{solid:!0,uvScale:0}),t.stairRun("int",{x0:4.35,z0:2.8,x1:4.35,z1:-1,y0:N+.04,y1:P+.04,width:1.18,steps:14,treadMat:l,stringerMat:a,railMat:a,railLeft:!0,railRight:!1,guardLeft:!0,guardRight:!1});const D=L-P,X=P+D*.5;t.box("int",8.95,.16,8.25,-.9,P-.06,0,l),t.box("int",1.78,.16,3.15,4.42,P-.06,-2.58,l),t.box("int",1.78,.16,1.35,4.42,P-.06,3.52,l),t.box("int",5.2,.04,5.4,-2.4,P+.03,.2,u),t.box("ext",1.35,.16,7.35,-6.02,P-.04,0,l);for(const V of[-3.2,-1.1,1.1,3.2])t.box("ext",.14,1.35,.14,-5.85,P-.62,V,a,{rz:-.78});t.kouranRailing("ext",-6.62,-3.62,-6.62,3.62,P,.96,a,.56),t.kouranRailing("ext",-6.62,-3.62,-5.4,-3.62,P,.96,a,.56),t.kouranRailing("ext",-6.62,3.62,-5.4,3.62,P,.96,a,.56),t.collider(-5.3,3.55,P-.16,P+.02,-4.1,4.1),t.collider(3.55,5.3,P-.16,P+.02,-4.1,-1.08),t.collider(3.55,5.3,P-.16,P+.02,2.92,4.1),t.floor(-6.55,3.55,-3.55,3.55,P+.04),t.floor(-5.25,3.55,-4.05,4.05,P+.04),t.floor(3.55,5.25,-4.05,-1,P+.04),t.floor(3.55,5.25,2.85,4.05,P+.04),t.box("int",.08,.92,3.95,3.56,P+.46,.92,a,{solid:!0}),t.box("int",1.72,.92,.08,4.42,P+.46,2.9,a,{solid:!0}),t.box("ext",3.4,D,.22,-3.75,X,4.2,s,{solid:!0}),t.box("ext",3.4,.85,.22,-.35,P+.42,4.2,s,{solid:!0}),t.box("ext",3.4,.65,.22,-.35,P+2.67,4.2,s,{solid:!0}),t.box("ext",3.36,1.5,.06,-.35,P+1.6,4.2,g,{uvScale:0}),t.box("ext",4.15,D,.22,3.4,X,4.2,s,{solid:!0}),t.box("ext",10.95,D,.22,0,X,-4.2,s,{solid:!0}),t.box("ext",.22,D,8.55,5.4,X,0,s,{solid:!0}),t.box("ext",.22,D,3.45,-5.4,X,-2.52,s,{solid:!0}),t.box("ext",.22,.72,2.05,-5.4,P+2.64,.2,s,{solid:!0}),t.box("ext",.22,D,3.05,-5.4,X,2.72,s,{solid:!0}),t.box("ext",.06,2.22,1.15,-5.24,P+1.12,-1.25,p,{uvScale:0});for(const V of[-5.42,5.42])for(const $ of[-4.22,4.22])t.box("ext",.28,D+.08,.28,V,X,$,a);for(const V of[-2.05,1.35])t.box("ext",.16,D,.26,V,X,4.21,a),t.box("ext",.16,D,.26,V,X,-4.21,a);t.box("ext",11.12,.18,.28,0,P+.04,4.22,a),t.box("ext",11.12,.18,.28,0,P+.04,-4.22,a),t.box("ext",.28,.18,8.68,-5.42,P+.04,0,a),t.box("ext",.28,.18,8.68,5.42,P+.04,0,a),t.box("int",1.45,1.38,.54,-2.55,P+.72,-3.75,f,{solid:!0,uvScale:0}),t.box("int",1.45,.36,.92,-2.45,P+.22,.35,a,{solid:!0}),t.box("int",.6,.07,.6,-2.45,P+.07,-.45,b,{uvScale:0}),t.box("int",.6,.07,.6,-2.45,P+.07,1.15,b,{uvScale:0}),t.stairRun("int",{x0:2.65,z0:-2.65,x1:-1.15,z1:-2.65,y0:P+.04,y1:L+.04,width:1.15,steps:14,treadMat:l,stringerMat:a,railMat:a,railLeft:!0,railRight:!1,guardLeft:!0,guardRight:!1});const W=k-L,Y=L+W*.5;t.box("int",8.35,.16,5.42,0,L-.06,.72,l),t.box("int",3.05,.16,1.55,-2.68,L-.06,-2.65,l),t.box("int",1.52,.16,1.55,3.45,L-.06,-2.65,l),t.box("int",3.8,.03,3.4,-.4,L+.03,.85,C),t.box("ext",1.32,.16,6.1,-4.82,L-.04,0,l),t.kouranRailing("ext",-5.42,-3.02,-5.42,3.02,L,.96,a,.56),t.kouranRailing("ext",-5.42,-3.02,-4.2,-3.02,L,.96,a,.56),t.kouranRailing("ext",-5.42,3.02,-4.2,3.02,L,.96,a,.56),t.collider(-4.2,4.2,L-.16,L+.02,-1.95,3.4),t.collider(-4.2,-1.22,L-.16,L+.02,-3.4,-1.95),t.collider(2.75,4.2,L-.16,L+.02,-3.4,-1.95),t.floor(-5.35,4.1,-1.95,2.95,L+.04),t.floor(-4.1,4.1,-1.95,3.3,L+.04),t.floor(-4.1,-1.15,-3.3,-1.9,L+.04),t.floor(2.75,4.1,-3.3,-1.9,L+.04),t.box("int",3.98,.92,.08,.78,L+.46,-1.95,a,{solid:!0}),t.box("int",.08,.92,1.42,2.76,L+.46,-2.66,a,{solid:!0}),t.box("ext",2.2,W,.22,-3.1,Y,3.4,s,{solid:!0}),t.box("ext",4,.8,.22,0,L+.4,3.4,s,{solid:!0}),t.box("ext",4,.58,.22,0,L+2.46,3.4,s,{solid:!0}),t.box("ext",3.96,1.38,.06,0,L+1.48,3.4,g,{uvScale:0}),t.box("ext",2.2,W,.22,3.1,Y,3.4,s,{solid:!0}),t.box("ext",8.55,W,.22,0,Y,-3.4,s,{solid:!0}),t.box("ext",.22,W,6.95,4.2,Y,0,s,{solid:!0}),t.box("ext",.22,W,2.85,-4.2,Y,-2.02,s,{solid:!0}),t.box("ext",.22,.62,1.65,-4.2,L+2.44,.2,s,{solid:!0}),t.box("ext",.22,W,2.45,-4.2,Y,2.22,s,{solid:!0});for(const V of[-4.22,4.22])for(const $ of[-3.42,3.42])t.box("ext",.26,W+.06,.26,V,Y,$,a);for(const V of[-2,2])t.box("ext",.16,W,.26,V,Y,3.41,a),t.box("ext",.16,W,.26,V,Y,-3.41,a);t.box("ext",8.7,.16,.28,0,L+.04,3.42,a),t.box("ext",8.7,.16,.28,0,L+.04,-3.42,a),t.box("ext",.28,.16,7.08,-4.22,L+.04,0,a),t.box("ext",.28,.16,7.08,4.22,L+.04,0,a),t.box("int",8.3,.12,6.7,0,k-.04,0,c),t.collider(-4.15,4.15,k-.12,k+.1,-3.35,3.35),t.box("int",.52,1.85,2.2,3.78,L+.94,.35,S,{solid:!0,uvScale:0}),t.box("int",1.45,.8,.78,1.35,L+.42,.65,a,{solid:!0}),t.box("int",1.25,1.15,.54,1.55,L+.6,2.95,M,{solid:!0,uvScale:0}),t.kawaraSlope("ext",{bottomWidth:11.4,run:1.25,pitch:.36,ridgeX:0,ridgeY:P+.1,ridgeZ:4.25,downslopeYaw:0,tileMat:v,ribMat:_,eaveMat:I,rafterMat:a,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:8.6,bottomWidth:12.2,run:1.75,pitch:.42,ridgeX:0,ridgeY:L+.35,ridgeZ:3.4,downslopeYaw:0,tileMat:y,ribMat:R,eaveMat:E,rafterMat:a,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:8.6,bottomWidth:12.2,run:1.75,pitch:.42,ridgeX:0,ridgeY:L+.35,ridgeZ:-3.4,downslopeYaw:Math.PI,tileMat:y,ribMat:R,eaveMat:E,rafterMat:a,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:6.9,bottomWidth:10.4,run:1.95,pitch:.4,ridgeX:4.2,ridgeY:L+.35,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:y,ribMat:R,eaveMat:E,rafterMat:a,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:6.9,bottomWidth:10.4,run:2.35,pitch:.36,ridgeX:-4.2,ridgeY:L+.42,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:y,ribMat:R,eaveMat:E,rafterMat:a,ribSpacing:.38});const U=.48,K=4.65,H=k-.14+K*Math.tan(U),B=k+1.05;t.kawaraSlope("ext",{topWidth:5.6,bottomWidth:11.4,run:K,pitch:U,ridgeX:0,ridgeY:H,ridgeZ:0,downslopeYaw:0,tileMat:y,ribMat:R,eaveMat:E,rafterMat:a,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:5.6,bottomWidth:11.4,run:K,pitch:U,ridgeX:0,ridgeY:H,ridgeZ:0,downslopeYaw:Math.PI,tileMat:y,ribMat:R,eaveMat:E,rafterMat:a,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:4.5,bottomWidth:9.3,run:2.95,pitch:U,ridgeX:2.8,ridgeY:B+.12,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:y,ribMat:R,eaveMat:E,rafterMat:a,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:4.5,bottomWidth:9.3,run:2.95,pitch:U,ridgeX:-2.8,ridgeY:B+.12,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:y,ribMat:R,eaveMat:E,rafterMat:a,ribSpacing:.38}),t.gablePrism("ext",4.6,H-B,.22,2.75,B,0,s,{ry:Math.PI*.5}),t.gablePrism("ext",4.6,H-B,.22,-2.75,B,0,s,{ry:Math.PI*.5});const Z=k-.12;return t.kawaraRidge("ext",-2.8,B+.12,2.25,-5.65,Z,4.6,E,I,{scale:.72,oniEnd:!0}),t.kawaraRidge("ext",2.8,B+.12,2.25,5.65,Z,4.6,E,I,{scale:.72,oniEnd:!0}),t.kawaraRidge("ext",-2.8,B+.12,-2.25,-5.65,Z,-4.6,E,I,{scale:.72,oniEnd:!0}),t.kawaraRidge("ext",2.8,B+.12,-2.25,5.65,Z,-4.6,E,I,{scale:.72,oniEnd:!0}),t.box("ext",3.4,.62,1.15,0,H+.16,0,s),t.kawaraSlope("ext",{bottomWidth:4.1,run:1.05,pitch:.44,ridgeX:0,ridgeY:H+.92,ridgeZ:0,downslopeYaw:0,tileMat:y,ribMat:R,eaveMat:E,rafterMat:a,ribSpacing:.34}),t.kawaraSlope("ext",{bottomWidth:4.1,run:1.05,pitch:.44,ridgeX:0,ridgeY:H+.92,ridgeZ:0,downslopeYaw:Math.PI,tileMat:y,ribMat:R,eaveMat:E,rafterMat:a,ribSpacing:.34}),t.kawaraRidge("ext",-2.05,H+.96,0,2.05,H+.96,0,E,I,{scale:1.05,oniStart:!0,oniEnd:!0,courses:2}),t.build({id:i.id,name:"森本家（見晴らし坂の赤瓦三階名家）",subtitle:"明治21年築・石州赤瓦三重入母屋＆越屋根・2F/3F見晴らし縁側・青タイル風呂・三階建",category:"house",builtYear:1888,abandonedYear:1985,stories:3,floorElevations:[N+.04,P+.04,L+.04],entryLocal:[.2,-1.5,8.2]})}function s2(i,e){const t=new Le(i),n=e.getMaterial("dressed_stone",{roughness:.91,bumpScale:.06}),r=e.getMaterial("concrete_steps",{roughness:.9,bumpScale:.05}),s=e.getMaterial("pale_brick",{roughness:.9,bumpScale:.06}),o=e.getMaterial("cream_plaster",{roughness:.9,bumpScale:.03,tint:16183518}),a=e.getMaterial("vertical_cedar_panel",{roughness:.88,bumpScale:.05}),l=e.getMaterial("dark_hardwood",{roughness:.84,bumpScale:.04}),c=e.getMaterial("white_plaster",{roughness:.86,bumpScale:.03}),u=e.getMaterial("terrazzo_floor",{roughness:.55,bumpScale:.02}),d=e.getMaterial("white_bath_tile",{roughness:.42,metalness:.05,bumpScale:.02}),h=e.getMaterial("herringbone_wood",{roughness:.78,bumpScale:.03}),p=e.getMaterial("oak_flooring",{roughness:.82,bumpScale:.03}),g=e.getMaterial("tatami_bordered",{roughness:.92,bumpScale:.04}),x=e.getMaterial("frosted_grid_window",{roughness:.34,opacity:.46,transparent:!0}),m=e.getMaterial("glass_double_door",{roughness:.38,opacity:.65,transparent:!0}),f=e.getMaterial("enamel_sign_blue",{roughness:.38,metalness:.25}),M=e.getMaterial("mailboxes_metal",{roughness:.6,metalness:.45}),S=e.getMaterial("office_counter",{roughness:.8,bumpScale:.03}),b=e.getMaterial("vanity_sink",{roughness:.68,bumpScale:.03}),C=e.getMaterial("shop_shelves_jars",{roughness:.72,bumpScale:.04}),y=e.getMaterial("file_cabinet",{roughness:.65,metalness:.35}),R=e.getMaterial("bulletin_board",{roughness:.88,bumpScale:.02}),E=e.getMaterial("retro_kitchen_unit",{roughness:.76,bumpScale:.03}),v=e.getMaterial("wooden_vanity",{roughness:.82,bumpScale:.03}),_=e.getMaterial("antique_tansu",{roughness:.78,bumpScale:.04}),I=e.getMaterial("floral_futon",{roughness:.93,bumpScale:.03}),N=e.getMaterial("botanical_curtain",{roughness:.9,opacity:.86,transparent:!0}),P=e.getMaterial("full_bookcase",{roughness:.84,bumpScale:.04}),L=e.getMaterial("filled_bookshelf",{roughness:.84,bumpScale:.04}),k=e.getMaterial("chalkboard",{roughness:.88,bumpScale:.02}),w=e.getMaterial("slate_roof_dark",{roughness:.74,metalness:.16,bumpScale:.06,tint:13292252}),T=e.getMaterial("dark_slate",{roughness:.7,metalness:.2,bumpScale:.05}),D=e.getMaterial("dark_iron_plate",{roughness:.66,metalness:.26}),X=e.getMaterial("matte_black_metal",{roughness:.58,metalness:.34}),W=.45,Y=3.55,U=6.55,K=9.35;t.box("ext",10.5,1,8.3,0,W-.52,0,n),t.box("ext",3.3,.95,1.55,1.2,W-.48,4.72,n),t.stoneSteps("ext",1.2,6.45,5.45,-.35,W,2.25,4,r),t.floor(-.4,2.8,3.9,5.5,W+.04),t.cyl("ext",.15,.17,2.85,10,-.15,W+1.42,5.25,c),t.cyl("ext",.15,.17,2.85,10,2.55,W+1.42,5.25,c),t.box("ext",3.25,.32,.28,1.2,W+2.94,5.25,c),t.box("ext",.65,1.35,.05,-.75,W+1.85,4.14,f,{uvScale:0}),t.box("ext",.62,.72,.18,3.25,W+1.45,4.18,M,{uvScale:0});const H=Y-W,B=W+H*.5;t.box("int",5.2,.08,7.8,2.45,W-.04,0,u),t.box("int",4.9,.08,7.8,-2.55,W-.04,0,d),t.floor(-4.95,4.95,-3.85,4.15,W+.04),t.box("ext",5.55,1.1,.24,-2.32,W+.55,4,s,{solid:!0}),t.box("ext",1.65,H-1.1,.24,-4.28,W+2.1,4,o,{solid:!0}),t.box("ext",1.8,.58,.24,-2.55,W+2.81,4,o,{solid:!0}),t.box("ext",1.76,1.42,.06,-2.55,W+1.81,4,x,{uvScale:0}),t.box("ext",2.1,H-1.1,.24,-.6,W+2.1,4,o,{solid:!0}),t.box("ext",1.54,.8,.24,1.2,W+2.7,4,o,{solid:!0}),t.box("ext",.82,2.25,.06,.1,W+1.12,3.84,m,{uvScale:0}),t.box("ext",3.2,1.1,.24,3.55,W+.55,4,s,{solid:!0}),t.box("ext",3.2,H-1.1,.24,3.55,W+2.1,4,o,{solid:!0}),t.box("ext",10.35,1.1,.24,0,W+.55,-4,s,{solid:!0}),t.box("ext",3.2,H-1.1,.24,-3.55,W+2.1,-4,o,{solid:!0}),t.box("ext",2.4,.55,.24,-.75,W+2.82,-4,o,{solid:!0}),t.box("ext",2.36,1.45,.06,-.75,W+1.82,-4,x,{uvScale:0}),t.box("ext",4.75,H-1.1,.24,2.78,W+2.1,-4,o,{solid:!0}),t.box("ext",.24,1.1,8.15,-5.1,W+.55,0,s,{solid:!0}),t.box("ext",.24,H-1.1,2.2,-5.1,W+2.1,-2.95,o,{solid:!0}),t.box("ext",.24,.58,1.5,-5.1,W+2.81,-1.1,o,{solid:!0}),t.box("ext",.06,1.42,1.46,-5.1,W+1.81,-1.1,x,{uvScale:0}),t.box("ext",.24,H-1.1,1.5,-5.1,W+2.1,.4,o,{solid:!0}),t.box("ext",.24,.58,1.5,-5.1,W+2.81,1.9,o,{solid:!0}),t.box("ext",.06,1.42,1.46,-5.1,W+1.81,1.9,x,{uvScale:0}),t.box("ext",.24,H-1.1,1.45,-5.1,W+2.1,3.35,o,{solid:!0}),t.box("ext",.24,1.1,8.15,5.1,W+.55,0,s,{solid:!0}),t.box("ext",.24,H-1.1,8.15,5.1,W+2.1,0,o,{solid:!0}),t.box("int",.14,H,4.5,-.25,B,-1.65,d,{solid:!0}),t.box("int",.14,.78,1.55,-.25,W+2.71,1.35,o,{solid:!0}),t.box("int",.14,H,1.95,-.25,B,3.05,d,{solid:!0}),t.box("int",1.85,.96,.65,1.35,W+.48,-.65,S,{solid:!0,uvScale:0}),t.box("int",1.75,.46,.48,2.55,W+.23,3.42,l,{solid:!0}),t.box("int",1.35,.92,.05,.02,W+1.65,2.85,R,{uvScale:0}),t.box("int",.85,.82,1.95,-2.65,W+.41,-1.45,c,{solid:!0}),t.box("int",1.55,1.82,.52,-2.55,W+.91,-3.55,C,{solid:!0,uvScale:0}),t.box("int",.88,.88,.56,-4.45,W+.44,-2.75,b,{solid:!0,uvScale:0}),t.box("int",.62,1.45,.58,-4.45,W+.72,2.85,y,{solid:!0,uvScale:0}),t.stairRun("int",{x0:3.95,z0:2.05,x1:3.95,z1:-1.95,y0:W+.04,y1:Y+.04,width:1.18,steps:14,treadMat:p,stringerMat:l,railMat:l,railLeft:!0,railRight:!1,guardLeft:!0,guardRight:!1});const Z=U-Y,V=Y+Z*.5;t.box("int",8.2,.16,7.85,-.92,Y-.06,0,h),t.box("int",1.92,.16,2.02,4.05,Y-.06,-2.96,p),t.box("int",1.92,.16,1.85,4.05,Y-.06,3.05,p),t.box("int",3.4,.04,4.6,1.25,Y+.03,1.45,g),t.collider(-5,3.15,Y-.16,Y+.02,-3.9,3.9),t.collider(3.15,5,Y-.16,Y+.02,-3.9,-2.02),t.collider(3.15,5,Y-.16,Y+.02,2.18,3.9),t.floor(-4.95,3.15,-3.85,3.85,Y+.04),t.floor(3.15,4.95,-3.85,-1.95,Y+.04),t.floor(3.15,4.95,2.1,3.85,Y+.04),t.box("int",.08,.92,4.18,3.16,Y+.46,.08,l,{solid:!0}),t.box("int",1.85,.92,.08,4.05,Y+.46,2.16,l,{solid:!0}),t.box("ext",1.6,Z,.22,-4.3,V,4,a,{solid:!0});for(const ct of[-2.75,0,2.75])t.box("ext",1.5,.85,.22,ct,Y+.42,4,a,{solid:!0}),t.box("ext",1.5,.65,.22,ct,Y+2.67,4,a,{solid:!0}),t.box("ext",1.46,1.5,.06,ct,Y+1.6,4,x,{uvScale:0});t.box("ext",1.25,Z,.22,-1.38,V,4,a,{solid:!0}),t.box("ext",1.25,Z,.22,1.38,V,4,a,{solid:!0}),t.box("ext",1.65,Z,.22,4.32,V,4,a,{solid:!0}),t.box("ext",10.35,Z,.22,0,V,-4,a,{solid:!0}),t.box("ext",.22,Z,2.6,-5.1,V,-2.7,a,{solid:!0}),t.box("ext",.22,.85,2.8,-5.1,Y+.42,0,a,{solid:!0}),t.box("ext",.22,.65,2.8,-5.1,Y+2.67,0,a,{solid:!0}),t.box("ext",.06,1.5,2.76,-5.1,Y+1.6,0,x,{uvScale:0}),t.box("ext",.22,Z,2.6,-5.1,V,2.7,a,{solid:!0}),t.box("ext",.22,Z,8.15,5.1,V,0,a,{solid:!0}),t.box("int",1.65,.76,.92,-2.55,Y+.38,1.15,l,{solid:!0}),t.box("int",.95,1.32,.5,-4.45,Y+.66,2.45,v,{solid:!0,uvScale:0}),t.box("int",.05,1.55,.65,-4.92,Y+1.6,-1.05,N,{uvScale:0}),t.box("int",1.85,.88,.62,-3.75,Y+.44,-3.45,E,{solid:!0,uvScale:0}),t.box("int",1.45,1.38,.54,1.35,Y+.72,3.45,_,{solid:!0,uvScale:0}),t.box("int",1.45,.14,1.95,1.25,Y+.11,.95,I,{uvScale:0}),t.stairRun("int",{x0:2.05,z0:-2.65,x1:-1.95,z1:-2.65,y0:Y+.04,y1:U+.04,width:1.15,steps:14,treadMat:p,stringerMat:l,railMat:l,railLeft:!0,railRight:!1,guardLeft:!0,guardRight:!1});const $=K-U,j=U+$*.5;t.box("int",10,.16,5.85,0,U-.06,.98,p),t.box("int",2.98,.16,1.95,-3.52,U-.06,-2.92,p),t.box("int",2.88,.16,1.95,3.55,U-.06,-2.92,p),t.collider(-5,5,U-.16,U+.02,-1.95,3.9),t.collider(-5,-2.05,U-.16,U+.02,-3.9,-1.95),t.collider(2.15,5,U-.16,U+.02,-3.9,-1.95),t.floor(-4.95,4.95,-1.95,3.85,U+.04),t.floor(-4.95,-1.95,-3.85,-1.9,U+.04),t.floor(2.15,4.95,-3.85,-1.9,U+.04),t.box("int",4.22,.92,.08,.05,U+.46,-1.96,l,{solid:!0}),t.box("int",.08,.92,1.92,2.15,U+.46,-2.92,l,{solid:!0}),t.box("ext",2.6,$,.22,-3.8,j,4,o,{solid:!0}),t.box("ext",5,.82,.22,0,U+.41,4,o,{solid:!0}),t.box("ext",5,.58,.22,0,U+2.51,4,o,{solid:!0}),t.box("ext",4.96,1.4,.06,0,U+1.52,4,x,{uvScale:0}),t.box("ext",2.6,$,.22,3.8,j,4,o,{solid:!0}),t.box("ext",10.35,$,.22,0,j,-4,o,{solid:!0}),t.box("ext",.22,$,8.15,-5.1,j,0,o,{solid:!0}),t.box("ext",.22,$,8.15,5.1,j,0,o,{solid:!0});for(const ct of[-5.12,5.12])for(const et of[-4.02,4.02])t.box("ext",.28,K-W,.28,ct,(W+K)*.5,et,l);t.box("int",10,.12,7.8,0,K-.04,0,o),t.collider(-5,5,K-.12,K+.1,-3.9,3.9),t.box("int",.52,1.95,2.4,-4.65,U+.98,.5,P,{solid:!0,uvScale:0}),t.box("int",.52,1.95,2.4,4.65,U+.98,.5,L,{solid:!0,uvScale:0}),t.box("int",2.4,1.32,.06,0,U+1.65,-3.82,k,{uvScale:0}),t.box("int",1.85,.8,.92,0,U+.42,.95,l,{solid:!0}),t.box("int",.64,1.48,.58,3.85,U+.74,3.35,y,{solid:!0,uvScale:0});const O=.48,q=1.95,ut=Y+.02+q*Math.tan(O);t.kawaraSlope("ext",{bottomWidth:2,run:q,pitch:O,ridgeX:1.2,ridgeY:ut,ridgeZ:4.82,downslopeYaw:Math.PI*.5,tileMat:w,ribMat:T,eaveMat:D,rafterMat:l,ribSpacing:.34}),t.kawaraSlope("ext",{bottomWidth:2,run:q,pitch:O,ridgeX:1.2,ridgeY:ut,ridgeZ:4.82,downslopeYaw:-Math.PI*.5,tileMat:w,ribMat:T,eaveMat:D,rafterMat:l,ribSpacing:.34}),t.gablePrism("ext",3.4,ut-Y+.08,.22,1.2,Y-.06,5.25,c),t.kawaraRidge("ext",1.2,ut+.04,3.95,1.2,ut+.04,5.82,D,X,{scale:.8,oniStart:!1,oniEnd:!0,courses:2});const ht=.48,G=5.15,mt=K-.14+G*Math.tan(ht),nt=K+1.15;t.kawaraSlope("ext",{topWidth:6.8,bottomWidth:12.6,run:G,pitch:ht,ridgeX:0,ridgeY:mt,ridgeZ:0,downslopeYaw:0,tileMat:w,ribMat:T,eaveMat:D,rafterMat:l,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:6.8,bottomWidth:12.6,run:G,pitch:ht,ridgeX:0,ridgeY:mt,ridgeZ:0,downslopeYaw:Math.PI,tileMat:w,ribMat:T,eaveMat:D,rafterMat:l,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:5,bottomWidth:10.3,run:2.95,pitch:ht,ridgeX:3.4,ridgeY:nt+.12,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:w,ribMat:T,eaveMat:D,rafterMat:l,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:5,bottomWidth:10.3,run:2.95,pitch:ht,ridgeX:-3.4,ridgeY:nt+.12,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:w,ribMat:T,eaveMat:D,rafterMat:l,ribSpacing:.38}),t.gablePrism("ext",5,mt-nt,.22,3.35,nt,0,o,{ry:Math.PI*.5}),t.gablePrism("ext",5,mt-nt,.22,-3.35,nt,0,o,{ry:Math.PI*.5}),t.kawaraRidge("ext",-3.45,mt+.05,0,3.45,mt+.05,0,D,X,{scale:1.15,oniStart:!0,oniEnd:!0,courses:3});const st=K-.12;return t.kawaraRidge("ext",-3.4,nt+.12,2.5,-6.25,st,5.1,D,X,{scale:.74,oniEnd:!0}),t.kawaraRidge("ext",3.4,nt+.12,2.5,6.25,st,5.1,D,X,{scale:.74,oniEnd:!0}),t.kawaraRidge("ext",-3.4,nt+.12,-2.5,-6.25,st,-5.1,D,X,{scale:.74,oniEnd:!0}),t.kawaraRidge("ext",3.4,nt+.12,-2.5,6.25,st,-5.1,D,X,{scale:.74,oniEnd:!0}),t.build({id:i.id,name:"白井医院（明治擬洋風三階木造診療所）",subtitle:"明治25年築・淡煉瓦腰壁＆青琺瑯看板・白タイル診察室・3F医学書庫・三階建",category:"house",builtYear:1892,abandonedYear:1985,stories:3,floorElevations:[W+.04,Y+.04,U+.04],entryLocal:[1.2,0,7.5]})}function o2(i,e){const t=new Le(i),n=e.getMaterial("ishigaki_cut",{roughness:.92,bumpScale:.07}),r=e.getMaterial("dressed_stone",{roughness:.9,bumpScale:.06}),s=e.getMaterial("charred_cedar",{roughness:.9,bumpScale:.05}),o=e.getMaterial("white_plaster",{roughness:.92,bumpScale:.04,tint:16249834}),a=e.getMaterial("washi_plaster",{roughness:.91,bumpScale:.03}),l=e.getMaterial("dark_hardwood",{roughness:.84,bumpScale:.04}),c=e.getMaterial("warm_wood_plank",{roughness:.83,bumpScale:.04}),u=e.getMaterial("oak_flooring",{roughness:.82,bumpScale:.03}),d=e.getMaterial("cobblestone",{roughness:.92,bumpScale:.06}),h=e.getMaterial("tatami_bordered",{roughness:.92,bumpScale:.04}),p=e.getMaterial("tatami_green_border",{roughness:.92,bumpScale:.04}),g=e.getMaterial("linen_fusuma",{roughness:.9,bumpScale:.02}),x=e.getMaterial("shoji_sliding_door",{roughness:.88,opacity:.9,transparent:!0}),m=e.getMaterial("carved_wood_lattice",{roughness:.86,bumpScale:.05}),f=e.getMaterial("window_frosted_wood",{roughness:.35,opacity:.44,transparent:!0}),M=e.getMaterial("window_frosted_wood",{roughness:.22,opacity:.2,transparent:!0,tint:14477554}),S=e.getMaterial("shrine_facade",{roughness:.8,bumpScale:.04}),b=e.getMaterial("antique_tansu",{roughness:.78,bumpScale:.04}),C=e.getMaterial("full_bookcase",{roughness:.84,bumpScale:.04}),y=e.getMaterial("office_counter",{roughness:.82,bumpScale:.03}),R=e.getMaterial("kitchen_cabinet",{roughness:.82,bumpScale:.03}),E=e.getMaterial("storage_rack",{roughness:.88,bumpScale:.04}),v=e.getMaterial("red_zabuton",{roughness:.92,bumpScale:.03}),_=e.getMaterial("vintage_rug_red",{roughness:.93,bumpScale:.03}),I=e.getMaterial("island_map_sign",{roughness:.82,bumpScale:.02}),N=e.getMaterial("matte_black_metal",{roughness:.58,metalness:.65}),P=e.getMaterial("slate_roof_dark",{roughness:.72,metalness:.18,bumpScale:.06,tint:13161180}),L=e.getMaterial("dark_slate",{roughness:.68,metalness:.22,bumpScale:.05,tint:11713736}),k=e.getMaterial("dark_iron_plate",{roughness:.64,metalness:.28,tint:10135220}),w=e.getMaterial("matte_black_metal",{roughness:.56,metalness:.36,tint:8556188}),T=.55,D=3.75,X=6.85,W=9.85,Y=12.4;t.box("ext",13,1.35,10,0,T-.68,0,n),t.box("ext",3.8,1.25,1.65,1,T-.64,5.55,n),t.stoneSteps("ext",1,7.45,6.3,-.35,T,2.8,5,r),t.floor(-.8,2.8,4.7,6.4,T+.04),t.box("ext",.22,3,.22,-.65,T+1.5,6.18,l),t.box("ext",.22,3,.22,2.65,T+1.5,6.18,l),t.box("ext",3.65,.28,.26,1,T+3.02,6.18,l);const U=D-T,K=T+U*.5;t.box("int",12.4,.1,9.4,0,T-.03,0,c),t.box("int",3.8,.06,9.2,-4.3,T+.01,0,d),t.box("int",7.8,.04,6.4,2,T+.03,-1.2,h),t.floor(-6.15,6.15,-4.65,4.85,T+.04),t.box("ext",6.25,1.35,.26,-3.22,T+.68,4.8,s,{solid:!0}),t.box("ext",6.25,U-1.35,.26,-3.22,T+2.28,4.8,o,{solid:!0}),t.box("ext",2.24,.85,.26,1,T+2.78,4.8,o,{solid:!0}),t.box("ext",1.15,2.3,.06,-.55,T+1.15,4.62,x,{uvScale:0}),t.box("ext",4.25,1.35,.26,4.22,T+.68,4.8,s,{solid:!0}),t.box("ext",4.25,U-1.35,.26,4.22,T+2.28,4.8,o,{solid:!0}),t.box("ext",12.75,1.15,.26,0,T+.58,-4.8,s,{solid:!0}),t.box("ext",4.8,U-1.15,.26,-3.95,T+2.18,-4.8,o,{solid:!0}),t.box("ext",3.4,.62,.26,.15,T+2.89,-4.8,o,{solid:!0}),t.box("ext",3.36,1.44,.06,.15,T+1.86,-4.8,f,{uvScale:0}),t.box("ext",4.6,U-1.15,.26,4.15,T+2.18,-4.8,o,{solid:!0}),t.box("ext",.26,1.35,9.75,-6.3,T+.68,0,s,{solid:!0}),t.box("ext",.26,U-1.35,9.75,-6.3,T+2.28,0,o,{solid:!0}),t.box("ext",.26,1.35,9.75,6.3,T+.68,0,s,{solid:!0}),t.box("ext",.26,U-1.35,2.8,6.3,T+2.28,-3.45,o,{solid:!0}),t.box("ext",.26,.65,3,6.3,T+2.88,-.55,o,{solid:!0}),t.box("ext",.06,1.25,2.96,6.3,T+1.95,-.55,m,{uvScale:0}),t.box("ext",.26,U-1.15,3.9,6.3,T+2.18,2.9,o,{solid:!0}),t.box("int",.16,U,5.65,-2.35,K,-1.9,a,{solid:!0}),t.box("int",.16,.8,1.75,-2.35,T+2.8,1.75,a,{solid:!0}),t.box("int",.16,U,2.15,-2.35,K,3.65,a,{solid:!0}),t.box("int",2.8,.22,.92,4.4,T+.12,-4.18,l,{solid:!0}),t.box("int",1.55,1.95,.62,5.62,T+1,-3.05,S,{solid:!0,ry:-Math.PI*.5,uvScale:0}),t.box("int",2.4,.38,1.15,1.6,T+.22,-1.35,l,{solid:!0});for(const et of[.85,1.6,2.35])t.box("int",.62,.07,.62,et,T+.08,-2.35,v,{uvScale:0}),t.box("int",.62,.07,.62,et,T+.08,-.35,v,{uvScale:0});t.box("int",1.85,.85,1.15,-4.85,T+.42,-3.85,n,{solid:!0}),t.cyl("int",.34,.3,.26,12,-4.85,T+.96,-3.85,N),t.box("int",.64,1.85,1.45,-5.85,T+.92,-1.65,R,{solid:!0,uvScale:0}),t.box("int",.64,1.85,1.55,-5.85,T+.92,2.85,E,{solid:!0,uvScale:0}),t.stairRun("int",{x0:-4.25,z0:2.65,x1:-4.25,z1:-1.35,y0:T+.04,y1:D+.04,width:1.24,steps:15,treadMat:l,stringerMat:l,railMat:c,railLeft:!1,railRight:!0,closedRisers:!0,guardLeft:!1,guardRight:!0});const H=X-D,B=D+H*.5;t.box("int",8.95,.16,7.95,.95,D-.06,0,c),t.box("int",1.95,.16,2.62,-4.4,D-.06,-2.68,c),t.box("int",1.95,.16,1.3,-4.4,D-.06,3.35,c),t.box("int",5.2,.04,6.8,2.5,D+.03,0,h),t.box("int",2.8,.03,3.4,-1.6,D+.03,-1.6,_),t.box("ext",9.75,.16,1.12,0,D-.04,4.54,c),t.kouranRailing("ext",-4.85,5.05,4.85,5.05,D,.94,l,.56),t.kouranRailing("ext",-4.85,4,-4.85,5.05,D,.94,l,.56),t.kouranRailing("ext",4.85,4,4.85,5.05,D,.94,l,.56),t.collider(-3.45,5.4,D-.16,D+.02,-4,4),t.collider(-5.4,-3.45,D-.16,D+.02,-4,-1.42),t.collider(-5.4,-3.45,D-.16,D+.02,2.78,4),t.floor(-3.45,5.3,-3.9,3.9,D+.04),t.floor(-5.3,-3.45,-3.9,-1.35,D+.04),t.floor(-5.3,-3.45,2.7,3.9,D+.04),t.floor(-4.75,4.75,3.9,4.98,D+.04),t.box("int",.08,.92,4.2,-3.46,D+.46,.68,l,{solid:!0}),t.box("int",1.85,.92,.08,-4.38,D+.46,2.76,l,{solid:!0}),t.box("ext",4.7,H,.22,-3.1,B,4,o,{solid:!0}),t.box("ext",1.65,.78,.22,0,D+2.71,4,o,{solid:!0}),t.box("ext",4.7,H,.22,3.1,B,4,o,{solid:!0}),t.box("ext",10.95,H,.22,0,B,-4,o,{solid:!0}),t.box("ext",.22,H,8.15,-5.4,B,0,o,{solid:!0}),t.box("ext",.22,H,8.15,5.4,B,0,o,{solid:!0});for(const et of[-5.42,-2.75,-.84,.84,2.75,5.42])t.box("ext",.18,H+.08,.28,et,B,4.02,l);for(const et of[-5.42,-2.7,0,2.7,5.42])t.box("ext",.18,H+.08,.28,et,B,-4.02,l);t.box("int",.12,H,3.4,-.05,B,-2.25,g,{solid:!0,uvScale:0}),t.box("int",2.2,1.95,.52,-1.6,D+.98,-3.62,C,{solid:!0,uvScale:0}),t.box("int",1.75,.84,.8,-1.6,D+.44,-1.45,y,{solid:!0,uvScale:0}),t.box("int",1.45,1.42,.54,1.45,D+.72,-3.62,b,{solid:!0,uvScale:0}),t.stairRun("int",{x0:3.55,z0:-1.85,x1:3.55,z1:1.95,y0:D+.04,y1:X+.04,width:1.18,steps:14,treadMat:l,stringerMat:l,railMat:c,railLeft:!0,railRight:!1,guardLeft:!0,guardRight:!1});const Z=W-X,V=X+Z*.5;t.box("int",7.2,.16,6.55,-.72,X-.06,0,p),t.box("int",1.48,.16,1.4,3.55,X-.06,-2.62,u),t.box("int",1.48,.16,1.35,3.55,X-.06,2.65,u),t.box("ext",8.1,.14,.9,0,X-.04,3.74,c),t.kouranRailing("ext",-4.02,4.16,4.02,4.16,X,.94,l,.54),t.kouranRailing("ext",-4.02,3.3,-4.02,4.16,X,.94,l,.54),t.kouranRailing("ext",4.02,3.3,4.02,4.16,X,.94,l,.54),t.collider(-4.3,2.85,X-.16,X+.02,-3.3,3.3),t.collider(2.85,4.3,X-.16,X+.02,-3.3,-1.98),t.collider(2.85,4.3,X-.16,X+.02,2.04,3.3),t.floor(-4.2,2.85,-3.2,3.2,X+.04),t.floor(2.85,4.2,-3.2,-1.9,X+.04),t.floor(2.85,4.2,1.98,3.2,X+.04),t.floor(-3.95,3.95,3.2,4.08,X+.04),t.box("int",.08,.92,4.02,2.86,X+.46,.04,l,{solid:!0}),t.box("int",1.4,.92,.08,3.55,X+.46,-1.96,l,{solid:!0}),t.box("ext",3.6,Z,.22,-2.55,V,3.3,o,{solid:!0}),t.box("ext",1.55,.72,.22,0,X+2.64,3.3,o,{solid:!0}),t.box("ext",3.6,Z,.22,2.55,V,3.3,o,{solid:!0}),t.box("ext",8.75,Z,.22,0,V,-3.3,o,{solid:!0}),t.box("ext",.22,Z,2,-4.3,V,-2.35,o,{solid:!0}),t.box("ext",.22,.8,2.8,-4.3,X+.4,.05,o,{solid:!0}),t.box("ext",.22,.62,2.8,-4.3,X+2.69,.05,o,{solid:!0}),t.box("ext",.06,1.5,2.76,-4.3,X+1.58,.05,f,{uvScale:0}),t.box("ext",.22,Z,2,-4.3,V,2.45,o,{solid:!0}),t.box("ext",.22,Z,6.75,4.3,V,0,o,{solid:!0}),t.box("int",2.2,.36,1.05,-.95,X+.22,.65,l,{solid:!0});for(const et of[-1.65,-.95,-.25])t.box("int",.58,.07,.58,et,X+.08,1.55,v,{uvScale:0}),t.box("int",.58,.07,.58,et,X+.08,-.25,v,{uvScale:0});t.box("int",1.45,1.42,.54,-3.85,X+.72,-1.85,b,{solid:!0,ry:Math.PI*.5,uvScale:0}),t.stairRun("int",{x0:1.75,z0:-1.75,x1:-1.55,z1:-1.75,y0:X+.04,y1:W+.04,width:1.12,steps:14,treadMat:u,stringerMat:l,railMat:l,railLeft:!0,railRight:!1,guardLeft:!0,guardRight:!1});const $=Y-W,j=W+$*.5;t.box("int",5.35,.16,3.6,0,W-.06,.72,u),t.box("int",1.15,.16,1.45,-2.15,W-.06,-1.78,u),t.box("int",.95,.16,1.45,2.25,W-.06,-1.78,u),t.collider(-4.3,4.3,W-.16,W+.02,-1.08,3.3),t.collider(-4.3,-1.62,W-.16,W+.02,-3.3,-1.08),t.collider(1.82,4.3,W-.16,W+.02,-3.3,-1.08),t.floor(-2.62,2.62,-1.08,2.42,W+.04),t.floor(-2.62,-1.55,-2.42,-1.05,W+.04),t.floor(1.8,2.62,-2.42,-1.05,W+.04),t.box("int",3.45,.9,.08,.1,W+.45,-1.1,l,{solid:!0}),t.box("int",.08,.9,1.38,1.82,W+.45,-1.78,l,{solid:!0});for(const et of[-2.5,2.5]){t.box("ext",5.55,.86,.2,0,W+.43,et,o,{solid:!0}),t.box("ext",5.55,.42,.2,0,W+2.34,et,l,{solid:!0});for(const tt of[-2.7,-.9,.9,2.7])t.box("ext",.18,$,.22,tt,j,et,l);for(const tt of[-1.8,0,1.8])t.box("ext",1.64,1.25,.04,tt,W+1.48,et,M,{uvScale:0})}for(const et of[-2.7,2.7]){t.box("ext",.2,.86,5.15,et,W+.43,0,o,{solid:!0}),t.box("ext",.2,.42,5.15,et,W+2.34,0,l,{solid:!0}),t.box("ext",.22,$,.18,et,j,0,l);for(const tt of[-1.25,1.25])t.box("ext",.04,1.25,2.32,et,W+1.48,tt,M,{uvScale:0})}t.box("int",5.3,.12,4.9,0,Y-.04,0,l),t.collider(-2.65,2.65,Y-.12,Y+.1,-2.45,2.45),t.box("int",1.45,.82,1.05,.15,W+.42,.85,l,{solid:!0}),t.box("int",1.25,.04,.85,.15,W+.85,.85,I,{uvScale:0});const O=.44,q=2.15,ut=D+.12+q*Math.tan(O);t.kawaraSlope("ext",{bottomWidth:2.3,run:q,pitch:O,ridgeX:1,ridgeY:ut,ridgeZ:5.55,downslopeYaw:Math.PI*.5,tileMat:P,ribMat:L,eaveMat:k,rafterMat:l,ribSpacing:.34}),t.kawaraSlope("ext",{bottomWidth:2.3,run:q,pitch:O,ridgeX:1,ridgeY:ut,ridgeZ:5.55,downslopeYaw:-Math.PI*.5,tileMat:P,ribMat:L,eaveMat:k,rafterMat:l,ribSpacing:.34}),t.gablePrism("ext",3.9,ut-D,.22,1,D-.04,6.2,o),t.kawaraRidge("ext",1,ut+.05,4.7,1,ut+.05,6.72,k,w,{scale:.92,oniStart:!1,oniEnd:!0,courses:2});const ht=(et,tt,F,A,J)=>{const ot=(et+F)*2,dt=(tt+F)*2,lt=A+F*Math.tan(J);t.kawaraSlope("ext",{topWidth:et*2,bottomWidth:ot,run:F,pitch:J,ridgeX:0,ridgeY:lt,ridgeZ:tt,downslopeYaw:0,tileMat:P,ribMat:L,eaveMat:k,rafterMat:l,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:et*2,bottomWidth:ot,run:F,pitch:J,ridgeX:0,ridgeY:lt,ridgeZ:-tt,downslopeYaw:Math.PI,tileMat:P,ribMat:L,eaveMat:k,rafterMat:l,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:tt*2,bottomWidth:dt,run:F,pitch:J,ridgeX:et,ridgeY:lt,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:P,ribMat:L,eaveMat:k,rafterMat:l,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:tt*2,bottomWidth:dt,run:F,pitch:J,ridgeX:-et,ridgeY:lt,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:P,ribMat:L,eaveMat:k,rafterMat:l,ribSpacing:.38}),t.kawaraRidge("ext",-et,lt,tt,-(et+F),A,tt+F,k,w,{scale:.68,oniEnd:!0,courses:2}),t.kawaraRidge("ext",et,lt,tt,et+F,A,tt+F,k,w,{scale:.68,oniEnd:!0,courses:2}),t.kawaraRidge("ext",-et,lt,-tt,-(et+F),A,-(tt+F),k,w,{scale:.68,oniEnd:!0,courses:2}),t.kawaraRidge("ext",et,lt,-tt,et+F,A,-(tt+F),k,w,{scale:.68,oniEnd:!0,courses:2})};ht(5.4,4,1.85,D-.14,.38),ht(4.3,3.3,1.9,X-.14,.4),ht(2.7,2.5,2.35,W-.14,.44);const G=.5,mt=3.65,nt=Y-.14+mt*Math.tan(G),st=Y+.85;t.kawaraSlope("ext",{topWidth:3.4,bottomWidth:7.7,run:mt,pitch:G,ridgeX:0,ridgeY:nt,ridgeZ:0,downslopeYaw:0,tileMat:P,ribMat:L,eaveMat:k,rafterMat:l,ribSpacing:.34}),t.kawaraSlope("ext",{topWidth:3.4,bottomWidth:7.7,run:mt,pitch:G,ridgeX:0,ridgeY:nt,ridgeZ:0,downslopeYaw:Math.PI,tileMat:P,ribMat:L,eaveMat:k,rafterMat:l,ribSpacing:.34}),t.kawaraSlope("ext",{topWidth:3.2,bottomWidth:7.3,run:2.15,pitch:G,ridgeX:1.7,ridgeY:st+.1,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:P,ribMat:L,eaveMat:k,rafterMat:l,ribSpacing:.34}),t.kawaraSlope("ext",{topWidth:3.2,bottomWidth:7.3,run:2.15,pitch:G,ridgeX:-1.7,ridgeY:st+.1,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:P,ribMat:L,eaveMat:k,rafterMat:l,ribSpacing:.34}),t.gablePrism("ext",3.2,nt-st,.2,1.66,st,0,o,{ry:Math.PI*.5}),t.gablePrism("ext",3.2,nt-st,.2,-1.66,st,0,o,{ry:Math.PI*.5}),t.kawaraRidge("ext",-1.8,nt+.06,0,1.8,nt+.06,0,k,w,{scale:1.3,oniStart:!0,oniEnd:!0,courses:3});const ct=Y-.12;return t.kawaraRidge("ext",-1.7,st+.1,1.6,-3.82,ct,3.62,k,w,{scale:.72,oniEnd:!0}),t.kawaraRidge("ext",1.7,st+.1,1.6,3.82,ct,3.62,k,w,{scale:.72,oniEnd:!0}),t.kawaraRidge("ext",-1.7,st+.1,-1.6,-3.82,ct,-3.62,k,w,{scale:.72,oniEnd:!0}),t.kawaraRidge("ext",1.7,st+.1,-1.6,3.82,ct,-3.62,k,w,{scale:.72,oniEnd:!0}),t.build({id:i.id,name:"黒田本家（1872年築・庄屋の四階望楼邸）",subtitle:"明治5年築・村最大最古・四重いぶし銀本瓦入母屋＆4F360°望楼展望室・四階建",category:"house",builtYear:1872,abandonedYear:1985,stories:4,floorElevations:[T+.04,D+.04,X+.04,W+.04],entryLocal:[1,0,8.6]})}function a2(i,e){const t=new Le(i),n=e.getMaterial("raw_concrete",{roughness:.92,bumpScale:.05}),r=e.getMaterial("concrete_steps",{roughness:.91,bumpScale:.05}),s=e.getMaterial("ivory_plaster",{roughness:.91,bumpScale:.04,tint:16052454}),o=e.getMaterial("weathered_mortar",{roughness:.93,bumpScale:.05,tint:14210250}),a=e.getMaterial("dark_hardwood",{roughness:.85,bumpScale:.04}),l=e.getMaterial("oak_flooring",{roughness:.82,bumpScale:.03}),c=e.getMaterial("checker_linoleum",{roughness:.7,bumpScale:.02}),u=e.getMaterial("vintage_rug_red",{roughness:.92,bumpScale:.03}),d=e.getMaterial("small_white_tile",{roughness:.42,metalness:.05,bumpScale:.02}),h=e.getMaterial("beige_carpet",{roughness:.94,bumpScale:.03}),p=e.getMaterial("tatami_green_border",{roughness:.92,bumpScale:.04}),g=e.getMaterial("window_curtained",{roughness:.42,opacity:.56,transparent:!0}),x=e.getMaterial("frosted_grid_window",{roughness:.36,opacity:.46,transparent:!0}),m=e.getMaterial("door_frosted_glass",{roughness:.45,bumpScale:.03}),f=e.getMaterial("electric_meter",{roughness:.65,metalness:.35}),M=e.getMaterial("brushed_steel",{roughness:.42,metalness:.72}),S=e.getMaterial("retro_kitchen_unit",{roughness:.75,bumpScale:.03}),b=e.getMaterial("kitchen_cabinet",{roughness:.8,bumpScale:.03}),C=e.getMaterial("vanity_sink",{roughness:.68,bumpScale:.03}),y=e.getMaterial("filled_bookshelf",{roughness:.84,bumpScale:.04}),R=e.getMaterial("cork_board",{roughness:.9,bumpScale:.03}),E=e.getMaterial("green_curtain",{roughness:.92,opacity:.88,transparent:!0}),v=e.getMaterial("floral_futon",{roughness:.93,bumpScale:.03}),_=e.getMaterial("wardrobe_wood",{roughness:.82,bumpScale:.04}),I=e.getMaterial("wooden_dresser",{roughness:.82,bumpScale:.04}),N=e.getMaterial("dark_slate",{roughness:.75,metalness:.16,bumpScale:.06,tint:10660274}),P=e.getMaterial("slate_roof_dark",{roughness:.7,metalness:.22,bumpScale:.05,tint:9344672}),L=e.getMaterial("dark_iron_plate",{roughness:.66,metalness:.26}),k=e.getMaterial("matte_black_metal",{roughness:.58,metalness:.34}),w=.45,T=3.4,D=6.2;t.box("ext",9.7,1,7.7,0,w-.52,0,n),t.stoneSteps("ext",-.45,4.95,3.75,-.35,w,2,4,r);const X=T-w,W=w+X*.5;t.box("int",9.2,.08,7.2,0,w-.04,0,l),t.box("int",5.2,.04,3.1,1.9,w+.03,-2,c),t.box("int",4.6,.04,3.6,1.5,w+.03,1.45,u),t.box("int",2.7,.04,3.1,-3.2,w+.03,-2,d),t.floor(-4.55,4.55,-3.55,3.85,w+.04),t.box("ext",3.55,1.15,.22,-3.02,w+.58,3.7,o,{solid:!0}),t.box("ext",3.55,X-1.15,.22,-3.02,w+2.05,3.7,s,{solid:!0}),t.box("ext",1.65,.72,.22,-.45,w+2.59,3.7,s,{solid:!0}),t.box("ext",.88,2.18,.06,-1.62,w+1.09,3.55,m,{uvScale:0}),t.box("ext",4.45,.9,.22,2.58,w+.45,3.7,o,{solid:!0}),t.box("ext",1.35,X-.9,.22,1.02,w+1.92,3.7,s,{solid:!0}),t.box("ext",2.1,.62,.22,2.75,w+2.64,3.7,s,{solid:!0}),t.box("ext",2.06,1.44,.06,2.75,w+1.62,3.7,g,{uvScale:0}),t.box("ext",1,X-.9,.22,4.3,w+1.92,3.7,s,{solid:!0}),t.box("ext",.44,.62,.16,-2.15,w+1.55,3.86,f,{uvScale:0}),t.box("ext",9.55,.95,.22,0,w+.48,-3.7,o,{solid:!0}),t.box("ext",5.4,X-.95,.22,-2.08,w+1.95,-3.7,s,{solid:!0}),t.box("ext",2.2,.62,.22,1.72,w+2.64,-3.7,s,{solid:!0}),t.box("ext",2.16,1.4,.06,1.72,w+1.64,-3.7,x,{uvScale:0}),t.box("ext",1.95,X-.95,.22,3.8,w+1.95,-3.7,s,{solid:!0}),t.box("ext",.22,1.15,7.55,-4.7,w+.58,0,o,{solid:!0}),t.box("ext",.22,X-1.15,7.55,-4.7,w+2.05,0,s,{solid:!0}),t.box("ext",.22,1.15,7.55,4.7,w+.58,0,o,{solid:!0}),t.box("ext",.22,X-1.15,7.55,4.7,w+2.05,0,s,{solid:!0}),t.box("int",.14,X,3.2,-1.85,W,-2.05,d,{solid:!0}),t.box("int",1.45,X,.14,-3.95,W,-.45,d,{solid:!0}),t.box("int",1.4,.75,.14,-2.55,w+2.58,-.45,s,{solid:!0}),t.box("int",1.35,.62,1.05,-3.85,w+.34,-2.95,d,{solid:!0}),t.box("int",.85,.88,.54,-2.45,w+.44,-3.25,C,{solid:!0,uvScale:0}),t.box("int",2.05,.88,.64,1.95,w+.44,-3.22,S,{solid:!0,uvScale:0}),t.box("int",.58,1.8,1.25,4.25,w+.9,-2.25,b,{solid:!0,uvScale:0}),t.box("int",1.55,.72,.92,1.75,w+.38,-1.25,a,{solid:!0}),t.box("int",1.45,.42,.85,1.85,w+.24,1.45,a,{solid:!0}),t.box("int",.52,1.78,1.85,4.28,w+.9,1.35,y,{solid:!0,uvScale:0}),t.stairRun("int",{x0:-3.75,z0:3.05,x1:-3.75,z1:-.25,y0:w+.04,y1:T+.04,width:1.12,steps:13,treadMat:l,stringerMat:a,railMat:a,railLeft:!1,railRight:!0,guardLeft:!1,guardRight:!0});const Y=D-T,U=T+Y*.5;t.box("int",7.65,.16,7.25,.78,T-.06,0,l),t.box("int",1.62,.16,3.35,-3.82,T-.06,-1.98,l),t.box("int",1.62,.16,.55,-3.82,T-.06,3.42,l),t.box("int",4.1,.04,4.4,-.8,T+.03,-1.35,h),t.box("int",3.4,.04,4.8,2.85,T+.03,-1.15,p),t.collider(-3.05,4.6,T-.16,T+.02,-3.6,3.6),t.collider(-4.6,-3.05,T-.16,T+.02,-3.6,-.32),t.floor(-3.05,4.55,-3.55,3.55,T+.04),t.floor(-4.55,-3.05,-3.55,-.22,T+.04),t.box("int",.08,.92,3.5,-3.06,T+.46,1.45,a,{solid:!0}),t.box("ext",2.2,Y,.22,-3.6,U,3.7,s,{solid:!0}),t.box("ext",4.6,.85,.22,-.2,T+.42,3.7,s,{solid:!0}),t.box("ext",4.6,.58,.22,-.2,T+2.51,3.7,s,{solid:!0}),t.box("ext",4.56,1.38,.06,-.2,T+1.54,3.7,x,{uvScale:0}),t.box("ext",2.65,Y,.22,3.42,U,3.7,s,{solid:!0}),t.box("ext",4.65,.05,.05,-.2,T+1.25,4.02,M),t.box("ext",4.65,.05,.05,-.2,T+.92,4.02,M);for(const Z of[-2.3,-.9,.5,1.9])t.box("ext",.04,.46,.04,Z,T+1.08,4.02,M),t.box("ext",.04,.04,.28,Z,T+.92,3.88,M);t.box("ext",9.55,Y,.22,0,U,-3.7,s,{solid:!0}),t.box("ext",.22,Y,7.55,-4.7,U,0,s,{solid:!0}),t.box("ext",.22,Y,2.2,4.7,U,-2.6,s,{solid:!0}),t.box("ext",.22,.85,2.4,4.7,T+.42,-.3,s,{solid:!0}),t.box("ext",.22,.58,2.4,4.7,T+2.51,-.3,s,{solid:!0}),t.box("ext",.06,1.38,2.36,4.7,T+1.54,-.3,g,{uvScale:0}),t.box("ext",.22,Y,2.8,4.7,U,2.3,s,{solid:!0}),t.box("int",.12,Y,5,1.15,U,-1.1,s,{solid:!0}),t.box("int",.12,.72,1.55,1.15,T+2.44,2.15,s,{solid:!0}),t.box("int",.12,Y,.82,1.15,U,3.3,s,{solid:!0}),t.box("int",9.2,.12,7.2,0,D-.04,0,s),t.collider(-4.6,4.6,D-.12,D+.1,-3.6,3.6),t.box("int",1.35,.78,.68,-1.25,T+.39,-3.15,a,{solid:!0}),t.box("int",1.25,.85,.05,-1.25,T+1.48,-3.52,R,{uvScale:0}),t.box("int",.48,1.72,1.45,.78,T+.86,-2.55,y,{solid:!0,uvScale:0}),t.box("int",.62,1.42,.05,-2.1,T+1.54,3.52,E,{uvScale:0}),t.box("int",1.45,.14,1.95,2.85,T+.11,-1.25,v,{uvScale:0}),t.box("int",1.15,1.82,.56,2.25,T+.91,-3.22,_,{solid:!0,uvScale:0}),t.box("int",1.15,1.08,.52,3.85,T+.56,-3.22,I,{solid:!0,uvScale:0}),t.kawaraSlope("ext",{bottomWidth:3.4,run:1.35,pitch:.36,ridgeX:-.45,ridgeY:T+.1,ridgeZ:3.76,downslopeYaw:0,tileMat:N,ribMat:P,eaveMat:L,rafterMat:a,ribSpacing:.36});const K=.46,H=4.9,B=D-.14+H*Math.tan(K);return t.kawaraSlope("ext",{bottomWidth:11.4,run:H,pitch:K,ridgeX:0,ridgeY:B,ridgeZ:0,downslopeYaw:0,tileMat:N,ribMat:P,eaveMat:L,rafterMat:a,ribSpacing:.38}),t.kawaraSlope("ext",{bottomWidth:11.4,run:H,pitch:K,ridgeX:0,ridgeY:B,ridgeZ:0,downslopeYaw:Math.PI,tileMat:N,ribMat:P,eaveMat:L,rafterMat:a,ribSpacing:.38}),t.gablePrism("ext",7.6,B-D+.14,.22,4.7,D-.06,0,s,{ry:Math.PI*.5}),t.gablePrism("ext",7.6,B-D+.14,.22,-4.7,D-.06,0,s,{ry:Math.PI*.5}),t.kawaraRidge("ext",-5.65,B+.05,0,5.65,B+.05,0,L,k,{scale:1.12,oniStart:!0,oniEnd:!0,courses:3}),t.build({id:i.id,name:"松岡家（中央V字谷の白壁瓦二階家）",subtitle:"明治19年築・白漆喰モルタル＆濃灰いぶし瓦大判切妻・昭和60年台所＆子供部屋・二階建",category:"house",builtYear:1886,abandonedYear:1985,stories:2,floorElevations:[w+.04,T+.04],entryLocal:[-.45,0,5.95]})}function l2(i,e){const t=new Le(i),n=e.getMaterial("ishigaki_cut",{roughness:.92,bumpScale:.07}),r=e.getMaterial("dressed_stone",{roughness:.9,bumpScale:.06}),s=e.getMaterial("charred_cedar",{roughness:.9,bumpScale:.05}),o=e.getMaterial("white_plaster",{roughness:.92,bumpScale:.04,tint:16249576}),a=e.getMaterial("washi_plaster",{roughness:.91,bumpScale:.03}),l=e.getMaterial("faded_red_wood",{roughness:.8,bumpScale:.04,tint:14247506}),c=e.getMaterial("wood_slat_screen",{roughness:.85,bumpScale:.05}),u=e.getMaterial("indigo_sakura_fabric",{roughness:.92,bumpScale:.02,doubleSide:!0}),d=e.getMaterial("carved_wood_lattice",{roughness:.86,bumpScale:.05}),h=e.getMaterial("dark_hardwood",{roughness:.84,bumpScale:.04}),p=e.getMaterial("warm_wood_plank",{roughness:.83,bumpScale:.04}),g=e.getMaterial("peeling_yellow_wall",{roughness:.92,bumpScale:.04}),x=e.getMaterial("frosted_transom",{roughness:.42,opacity:.62,transparent:!0}),m=e.getMaterial("woven_screen_brown",{roughness:.9,bumpScale:.05}),f=e.getMaterial("coir_doormat",{roughness:.96,bumpScale:.06}),M=e.getMaterial("thatch_straw",{roughness:.94,bumpScale:.07}),S=e.getMaterial("green_tile",{roughness:.46,bumpScale:.04}),b=e.getMaterial("cream_ceramic_tile",{roughness:.48,bumpScale:.03}),C=e.getMaterial("tatami_bordered",{roughness:.92,bumpScale:.04}),y=e.getMaterial("tatami_plain",{roughness:.92,bumpScale:.04}),R=e.getMaterial("tatami_green_border",{roughness:.92,bumpScale:.04}),E=e.getMaterial("shrine_facade",{roughness:.8,bumpScale:.04}),v=e.getMaterial("red_zabuton",{roughness:.92,bumpScale:.03}),_=e.getMaterial("antique_tansu",{roughness:.78,bumpScale:.04}),I=e.getMaterial("full_bookcase",{roughness:.84,bumpScale:.04}),N=e.getMaterial("wooden_dresser",{roughness:.82,bumpScale:.03}),P=e.getMaterial("wooden_vanity",{roughness:.82,bumpScale:.03}),L=e.getMaterial("shoji_sliding_door",{roughness:.88,opacity:.9,transparent:!0}),k=e.getMaterial("linen_fusuma",{roughness:.9,bumpScale:.02}),w=e.getMaterial("cobblestone",{roughness:.92,bumpScale:.06}),T=e.getMaterial("retro_kitchen_unit",{roughness:.78,bumpScale:.03}),D=e.getMaterial("kitchen_cabinet",{roughness:.82,bumpScale:.03}),X=e.getMaterial("shop_shelves_jars",{roughness:.84,bumpScale:.03}),W=e.getMaterial("deep_moss",{roughness:.95,bumpScale:.07}),Y=e.getMaterial("moss_rock_heavy",{roughness:.93,bumpScale:.08}),U=e.getMaterial("river_cobble",{roughness:.9,bumpScale:.06}),K=e.getMaterial("window_frosted_wood",{roughness:.32,opacity:.38,transparent:!0}),H=e.getMaterial("window_frosted_wood",{roughness:.22,opacity:.22,transparent:!0,tint:14543090}),B=e.getMaterial("slate_roof_dark",{roughness:.7,metalness:.2,bumpScale:.06,tint:10133672}),Z=e.getMaterial("dark_slate",{roughness:.66,metalness:.24,bumpScale:.05,tint:8817812}),V=e.getMaterial("dark_iron_plate",{roughness:.6,metalness:.3,tint:8028298}),$=e.getMaterial("matte_black_metal",{roughness:.52,metalness:.4,tint:7107194}),j=.5,O=3.6,q=6.6,ut=9.4;t.box("ext",12.1,3.62,9.4,0,j-1.82,0,n),t.box("ext",3.4,2.2,1.35,.4,j-1.12,5.05,n),t.stoneSteps("ext",.4,5.85,4.72,-.06,j,2.55,4,r),t.box("ext",2.4,.24,2.6,.4,-.14,6.75,U),t.floor(-1,1.8,4.4,8.6,.04),t.floor(-1,1.8,4.5,5.1,j+.04);const ht=.4,G=6.65;t.box("ext",.46,1.25,.46,ht-1.48,-.45,G,r),t.box("ext",.46,1.25,.46,ht+1.48,-.45,G,r),t.box("ext",.26,3.08,.26,ht-1.48,1.54,G,l,{solid:!0}),t.box("ext",.26,3.08,.26,ht+1.48,1.54,G,l,{solid:!0});for(const Rt of[-1,1])t.box("ext",.16,2.35,.16,ht+Rt*1.48,1.18,G-.58,l,{solid:!0}),t.box("ext",.14,.16,.72,ht+Rt*1.48,2.25,G-.28,l);t.box("ext",4.35,.28,.28,ht,3.02,G,l),t.box("ext",3.45,.18,.16,ht,2.58,G,l),t.box("ext",2.45,.56,.04,ht,2.34,G+.08,u,{uvScale:0});for(const Rt of[-1,1]){const Zt=ht+Rt*2.45;t.box("ext",1.65,1.15,.28,Zt,.12,G,n,{solid:!0}),t.box("ext",1.65,1.25,.24,Zt,1.3,G,o,{solid:!0}),t.box("ext",1.8,.18,.42,Zt,2,G,B)}const mt=.45,nt=1.05,st=3.68;t.kawaraSlope("ext",{bottomWidth:4.55,run:nt,pitch:mt,ridgeX:ht,ridgeY:st,ridgeZ:G,downslopeYaw:0,tileMat:B,ribMat:Z,rafterMat:h,ribSpacing:.34}),t.kawaraSlope("ext",{bottomWidth:4.55,run:nt,pitch:mt,ridgeX:ht,ridgeY:st,ridgeZ:G,downslopeYaw:Math.PI,tileMat:B,ribMat:Z,rafterMat:h,ribSpacing:.34}),t.kawaraRidge("ext",ht-2.24,st+.03,G,ht+2.24,st+.03,G,V,$,{scale:.72,courses:2,oniStart:!0,oniEnd:!0});const ct=O-j,et=j+ct*.5;t.box("int",8,.12,9,1.8,j-.04,0,h),t.box("int",3.6,.12,5.6,-4,j-.04,1.7,p),t.box("int",5.8,.04,4.7,.9,j+.03,-2,C),t.box("int",2,.05,1.9,4.75,j+.02,3.45,w),t.box("int",1.15,.03,.72,.4,j+.04,4.1,f,{uvScale:0});const tt=j-.12;t.box("ext",3.6,.16,3.4,-4,tt-.08,-2.8,W),t.box("ext",2.4,.08,2.2,-3.9,tt+.01,-2.6,U);for(const[Rt,Zt]of[[-3.3,-1.55],[-3.8,-2.25],[-4.45,-2.95]])t.cyl("ext",.34,.38,.14,7,Rt,tt+.06,Zt,r);t.box("ext",.95,.62,.85,-5.05,tt+.28,-3.75,Y,{solid:!0,ry:.28}),t.box("ext",.72,.48,.68,-2.75,tt+.22,-3.85,Y,{solid:!0,ry:-.4}),t.cyl("ext",.34,.4,.56,8,-4.95,tt+.28,-2.05,r),t.cyl("ext",.24,.24,.1,8,-4.95,tt+.58,-2.05,Y),t.cyl("ext",.14,.2,.82,6,-3.15,tt+.41,-3.95,r),t.box("ext",.34,.34,.34,-3.15,tt+.96,-3.95,r),t.box("ext",.52,.16,.52,-3.15,tt+1.22,-3.95,Y),t.box("ext",3.75,.75,.28,-3.95,j+.25,-4.5,n,{solid:!0}),t.box("ext",3.75,1.65,.24,-3.95,j+1.45,-4.5,o,{solid:!0}),t.box("ext",3.9,.16,.44,-3.95,j+2.34,-4.5,B),t.box("ext",.28,.75,3.55,-5.8,j+.25,-2.8,n,{solid:!0}),t.box("ext",.24,1.65,3.55,-5.8,j+1.45,-2.8,o,{solid:!0}),t.box("ext",.44,.16,3.68,-5.8,j+2.34,-2.8,B),t.floor(-5.68,5.68,-1.1,4.55,j+.04),t.floor(-2.2,5.68,-4.4,-1.05,j+.04),t.floor(-5.55,-2.25,-4.25,-1.1,tt+.08),t.box("ext",5.12,1.2,.26,-3.26,j+.6,4.5,s,{solid:!0}),t.box("ext",1.55,ct-1.2,.26,-5.04,j+2.15,4.5,o,{solid:!0}),t.box("ext",2.4,.62,.26,-3.1,j+2.79,4.5,o,{solid:!0}),t.box("ext",2.36,1.28,.07,-3.1,j+1.84,4.5,c,{uvScale:0}),t.box("ext",1.22,ct-1.2,.26,-1.31,j+2.15,4.5,o,{solid:!0}),t.box("ext",2.24,.72,.26,.4,j+2.74,4.5,o,{solid:!0}),t.box("ext",2.5,.16,.3,.4,j+2.36,4.54,l),t.box("ext",1.05,2.3,.06,-1.18,j+1.15,4.3,L,{uvScale:0}),t.box("ext",4.34,1.2,.26,3.66,j+.6,4.5,s,{solid:!0}),t.box("ext",1.45,ct-1.2,.26,2.22,j+2.15,4.5,o,{solid:!0}),t.box("ext",1.8,.65,.26,3.85,j+2.78,4.5,o,{solid:!0}),t.box("ext",1.76,1.25,.07,3.85,j+1.82,4.5,d,{uvScale:0}),t.box("ext",1.1,ct-1.2,.26,5.26,j+2.15,4.5,o,{solid:!0}),t.box("ext",8.05,1.15,.26,1.8,j+.58,-4.5,s,{solid:!0}),t.box("ext",8.05,ct-1.15,.26,1.8,j+2.12,-4.5,o,{solid:!0}),t.box("ext",.26,1.15,5.65,-5.8,j+.58,1.7,s,{solid:!0}),t.box("ext",.26,ct-1.15,1.65,-5.8,j+2.12,-.28,o,{solid:!0}),t.box("ext",.26,.62,2.4,-5.8,j+2.79,1.75,o,{solid:!0}),t.box("ext",.06,1.3,2.36,-5.8,j+1.8,1.75,K,{uvScale:0}),t.box("ext",.26,ct-1.15,1.6,-5.8,j+2.12,3.72,o,{solid:!0}),t.box("ext",.26,1.2,9.05,5.8,j+.6,0,s,{solid:!0}),t.box("ext",.26,ct-1.2,9.05,5.8,j+2.15,0,o,{solid:!0});for(const[Rt,Zt]of[[-5.82,4.52],[-.74,4.52],[1.54,4.52],[5.82,4.52],[5.82,-4.52]])t.box("ext",.2,ct+.06,.2,Rt,et,Zt,l);t.box("int",1.72,ct,.16,-4.92,et,-1.1,h,{solid:!0}),t.box("int",1.6,.72,.16,-3.3,j+2.74,-1.1,x,{uvScale:0}),t.box("int",.42,ct,.16,-2.35,et,-1.1,h,{solid:!0}),t.box("int",.16,.52,3.45,-2.2,j+.26,-2.8,h,{solid:!0}),t.box("int",.06,1.88,3.2,-2.2,j+1.46,-2.8,H,{uvScale:0}),t.box("int",.16,.7,3.45,-2.2,j+2.75,-2.8,x,{uvScale:0}),t.box("int",1.85,ct,.14,-1.25,et,.45,k,{solid:!0,uvScale:0}),t.box("int",2.25,.7,.14,.8,j+2.75,.45,x,{uvScale:0}),t.box("int",1.95,ct,.14,2.9,et,.45,a,{solid:!0}),t.box("int",.04,.62,1.95,-2.18,j+2.66,2.15,u,{uvScale:0}),t.box("int",3.4,.24,.96,1.15,j+.12,-3.95,h,{solid:!0}),t.box("int",2.15,2.1,.64,1.15,j+1.28,-4.02,E,{solid:!0,uvScale:0}),t.box("int",.16,2.65,.16,-.18,j+1.44,-3.55,l,{solid:!0}),t.box("int",.16,2.65,.16,2.48,j+1.44,-3.55,l,{solid:!0}),t.box("int",3.1,.16,.18,1.15,j+2.72,-3.55,l),t.box("int",1.35,.46,.56,1.15,j+.26,-2.7,l,{solid:!0});for(const Rt of[.35,1.15,1.95])t.box("int",.64,.08,.64,Rt,j+.08,-1.65,v,{uvScale:0});t.box("int",1.45,1.45,.52,-4.65,j+.74,3.85,_,{solid:!0,uvScale:0}),t.box("int",1.75,.92,.62,4.65,j+.46,4.05,T,{solid:!0,uvScale:0}),t.box("int",.58,1.85,1.1,5.4,j+.94,3.1,D,{solid:!0,uvScale:0}),t.box("int",.52,1.65,1.25,3.45,j+.84,3.72,X,{solid:!0,uvScale:0}),t.stairRun("int",{x0:4.85,z0:1.85,x1:4.85,z1:-2.05,y0:j+.04,y1:O+.04,width:1.18,steps:14,treadMat:h,stringerMat:h,railMat:l,railLeft:!0,railRight:!1,closedRisers:!0,guardLeft:!0,guardRight:!1});const F=q-O,A=O+F*.5;t.box("int",6.32,.16,9,.96,O-.06,0,p),t.box("int",3.6,.16,5.6,-4,O-.06,1.7,p),t.box("int",1.68,.16,2.45,4.94,O-.06,-3.28,p),t.box("int",1.68,.16,2.5,4.94,O-.06,3.25,p),t.box("int",5.8,.04,4.1,.95,O+.03,-2.35,y),t.box("int",3.45,.05,5.35,-3.95,O+.02,1.7,S),t.collider(-2.2,4.12,O-.16,O+.02,-4.5,4.5),t.collider(-5.8,-2.2,O-.16,O+.02,-1.1,4.5),t.collider(4.12,5.8,O-.16,O+.02,-4.5,-2.06),t.collider(4.12,5.8,O-.16,O+.02,2.02,4.5),t.floor(-2.15,4.1,-4.4,4.45,O+.04),t.floor(-5.68,-2.15,-1.05,4.4,O+.04),t.floor(4.05,5.68,-4.4,-2,O+.04),t.floor(4.05,5.68,2,4.4,O+.04),t.kouranRailing("ext",-5.72,-1.1,-2.2,-1.1,O,.96,l,.52),t.kouranRailing("ext",-2.2,-4.42,-2.2,-1.1,O,.96,l,.52),t.kouranRailing("int",4.12,-2.04,4.12,2.02,O,.94,h,.56),t.kouranRailing("int",4.12,2.02,5.72,2.02,O,.94,h,.56),t.box("ext",9.75,.16,1.18,0,O-.04,5.08,p),t.kouranRailing("ext",-4.85,5.62,4.85,5.62,O,.96,l,.54),t.kouranRailing("ext",-4.85,4.5,-4.85,5.62,O,.96,l,.54),t.kouranRailing("ext",4.85,4.5,4.85,5.62,O,.96,l,.54),t.floor(-4.75,4.75,4.4,5.56,O+.04),t.box("ext",4.98,F,.22,-3.32,A,4.5,o,{solid:!0}),t.box("ext",1.72,.72,.22,0,O+2.64,4.5,o,{solid:!0}),t.box("ext",4.98,F,.22,3.32,A,4.5,o,{solid:!0}),t.box("ext",8.05,.96,.22,1.8,O+.48,-4.5,o,{solid:!0}),t.box("ext",2.45,F-.96,.22,-.98,O+1.98,-4.5,o,{solid:!0}),t.box("ext",3,.56,.22,1.75,O+2.72,-4.5,o,{solid:!0}),t.box("ext",2.96,1.48,.06,1.75,O+1.7,-4.5,K,{uvScale:0}),t.box("ext",2.55,F-.96,.22,4.52,O+1.98,-4.5,o,{solid:!0}),t.box("ext",.22,F,5.65,-5.8,A,1.7,o,{solid:!0}),t.box("ext",.22,F,9.05,5.8,A,0,o,{solid:!0});for(const Rt of[-5.82,-2.9,-.88,.88,2.9,5.82])t.box("ext",.16,F+.06,.26,Rt,A,4.52,l);t.box("ext",11.75,.16,.26,0,q-.06,4.54,l),t.box("int",1.65,F,.14,-1.38,A,-.25,k,{solid:!0,uvScale:0}),t.box("int",1.95,.68,.14,.4,O+2.66,-.25,x,{uvScale:0}),t.box("int",2.75,F,.14,2.75,A,-.25,a,{solid:!0}),t.box("int",3.4,F-.1,.12,.9,A,-4.34,g),t.box("int",2.2,.56,.95,1.1,O+.28,-2.4,p,{solid:!0}),t.box("int",1.65,.26,.58,1,O+.69,-2.42,M),t.cyl("int",.26,.28,1.15,8,-.85,O+.58,-3.72,M),t.cyl("int",.22,.25,1.05,8,-1.42,O+.53,-3.62,M),t.box("int",1.35,1.45,.52,3.05,O+.74,-3.95,_,{solid:!0,uvScale:0}),t.box("int",1.15,1.15,.48,3.25,O+.58,-1.65,N,{solid:!0,uvScale:0}),t.box("int",.14,F,1.45,-2.15,A,-.38,b,{solid:!0}),t.box("int",.14,.68,1.6,-2.15,O+2.66,1.12,b,{solid:!0}),t.box("int",.14,F,2.6,-2.15,A,3.2,b,{solid:!0}),t.box("int",.1,1.35,5.2,-5.66,O+.68,1.7,S),t.box("int",.1,1.6,5.2,-5.66,O+2.15,1.7,b),t.box("int",1.55,.68,1.25,-4.82,O+.34,3.45,S,{solid:!0}),t.box("int",1.15,1.45,.52,-3.35,O+.74,4.05,P,{solid:!0,uvScale:0}),t.stairRun("int",{x0:2.9,z0:2.25,x1:-1,z1:2.25,y0:O+.04,y1:q+.04,width:1.15,steps:14,treadMat:h,stringerMat:h,railMat:l,railLeft:!0,railRight:!0,closedRisers:!1,guardLeft:!0,guardRight:!0});const J=ut-q,ot=q+J*.5;t.box("int",8.2,.16,4.92,0,q-.06,-.84,p),t.box("int",3.1,.16,1.72,-2.55,q-.06,2.44,p),t.box("int",1.1,.16,1.72,3.55,q-.06,2.44,p),t.box("int",6.8,.04,4.2,.15,q+.03,-.95,R),t.box("int",8,.08,6.4,0,ut-.08,0,m),t.collider(-4.1,4.1,q-.16,q+.02,-3.3,1.6),t.collider(-4.1,-1.02,q-.16,q+.02,1.6,3.3),t.collider(3.02,4.1,q-.16,q+.02,1.6,3.3),t.floor(-4.02,4.02,-3.22,1.6,q+.04),t.floor(-4.02,-1,1.55,3.25,q+.04),t.floor(3.02,4.02,1.55,3.25,q+.04),t.kouranRailing("int",-1.02,1.6,3.04,1.6,q,.94,l,.54),t.kouranRailing("int",3.04,1.6,3.04,3.2,q,.94,l,.54),t.box("ext",9.3,.16,1.08,-.52,q-.04,3.82,p),t.box("ext",1.08,.16,6.65,-4.64,q-.04,0,p),t.kouranRailing("ext",-5.14,4.32,4.1,4.32,q,.96,l,.54),t.kouranRailing("ext",4.1,3.3,4.1,4.32,q,.96,l,.54),t.kouranRailing("ext",-5.14,-3.3,-5.14,4.32,q,.96,l,.54),t.kouranRailing("ext",-5.14,-3.3,-4.1,-3.3,q,.96,l,.54),t.floor(-5.05,4.02,3.22,4.25,q+.04),t.floor(-5.05,-4.02,-3.22,4.25,q+.04),t.box("ext",.9,J,.2,-3.68,ot,3.3,o,{solid:!0}),t.box("ext",1.64,.68,.2,-2.45,q+2.46,3.3,o,{solid:!0}),t.box("ext",5.8,J,.2,1.24,ot,3.3,o,{solid:!0}),t.box("ext",8.25,.78,.2,0,q+.39,-3.3,o,{solid:!0}),t.box("ext",1.85,J-.78,.2,-3.2,q+1.79,-3.3,o,{solid:!0}),t.box("ext",4.6,.44,.2,0,q+2.58,-3.3,o,{solid:!0}),t.box("ext",4.56,1.58,.06,0,q+1.57,-3.3,H,{uvScale:0}),t.box("ext",1.85,J-.78,.2,3.2,q+1.79,-3.3,o,{solid:!0}),t.box("ext",.2,J,2.48,-4.1,ot,-2.08,o,{solid:!0}),t.box("ext",.2,.68,1.64,-4.1,q+2.46,-.05,o,{solid:!0}),t.box("ext",.2,J,2.58,-4.1,ot,2.02,o,{solid:!0}),t.box("ext",.2,.9,6.65,4.1,q+.45,0,o,{solid:!0}),t.box("ext",.2,J-.9,2.05,4.1,q+1.85,-2.3,o,{solid:!0}),t.box("ext",.2,.5,2.5,4.1,q+2.55,-.05,o,{solid:!0}),t.box("ext",.06,1.4,2.46,4.1,q+1.6,-.05,d,{uvScale:0}),t.box("ext",.2,J-.9,2.15,4.1,q+1.85,2.25,o,{solid:!0});for(const[Rt,Zt]of[[-4.12,-3.32],[4.12,-3.32],[-4.12,3.32],[4.12,3.32]])t.box("ext",.18,J+.08,.18,Rt,ot,Zt,l);t.box("int",1.65,.42,.78,0,q+.24,-2.15,l,{solid:!0}),t.box("int",.64,.08,.64,0,q+.08,-1.25,v,{uvScale:0}),t.box("int",.52,2.05,1.75,3.68,q+1.04,-1.95,I,{solid:!0,uvScale:0}),t.box("int",.52,2.05,1.75,3.68,q+1.04,.15,I,{solid:!0,uvScale:0}),t.kawaraSlope("ext",{bottomWidth:12.6,run:1.38,pitch:.36,ridgeX:0,ridgeY:O+.14,ridgeZ:4.46,downslopeYaw:0,tileMat:B,ribMat:Z,rafterMat:h,ribSpacing:.38}),t.kawaraSlope("ext",{bottomWidth:9.8,run:1.15,pitch:.36,ridgeX:5.76,ridgeY:O+.1,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:B,ribMat:Z,rafterMat:h,ribSpacing:.38}),t.kawaraSlope("ext",{bottomWidth:6.2,run:1.15,pitch:.36,ridgeX:-5.76,ridgeY:O+.1,ridgeZ:1.7,downslopeYaw:-Math.PI*.5,tileMat:B,ribMat:Z,rafterMat:h,ribSpacing:.38});const dt=.4;t.kawaraSlope("ext",{topWidth:8.6,bottomWidth:12.8,run:2.35,pitch:dt,ridgeX:0,ridgeY:q+.52,ridgeZ:3.3,downslopeYaw:0,tileMat:B,ribMat:Z,rafterMat:h,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:8.6,bottomWidth:9.8,run:1.85,pitch:dt,ridgeX:1.2,ridgeY:q+.38,ridgeZ:-3.3,downslopeYaw:Math.PI,tileMat:B,ribMat:Z,rafterMat:h,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:6.8,bottomWidth:10.6,run:2.3,pitch:dt,ridgeX:4.1,ridgeY:q+.5,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:B,ribMat:Z,rafterMat:h,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:4.4,bottomWidth:6.8,run:2.25,pitch:dt,ridgeX:-4.1,ridgeY:q+.48,ridgeZ:1.75,downslopeYaw:-Math.PI*.5,tileMat:B,ribMat:Z,rafterMat:h,ribSpacing:.38});const lt=4.62,Et=q+.04,gt=3.2,_t=1.46,zt=1.35;t.gablePrism("ext",gt,_t,zt,0,Et,lt-zt*.42,o);const Mt=Math.atan2(_t,gt*.5),At=gt*.5+.36;t.kawaraSlope("ext",{bottomWidth:zt+.55,run:At,pitch:Mt,ridgeX:0,ridgeY:Et+_t+.14,ridgeZ:lt-zt*.36,downslopeYaw:Math.PI*.5,tileMat:B,ribMat:Z,rafterMat:l,ribSpacing:.34}),t.kawaraSlope("ext",{bottomWidth:zt+.55,run:At,pitch:Mt,ridgeX:0,ridgeY:Et+_t+.14,ridgeZ:lt-zt*.36,downslopeYaw:-Math.PI*.5,tileMat:B,ribMat:Z,rafterMat:l,ribSpacing:.34});const kt=Math.hypot(gt*.5+.25,_t+.16);for(const Rt of[-1,1])t.box("ext",kt,.16,.12,Rt*(gt*.25+.06),Et+_t*.5+.06,lt+.3,l,{rz:-Rt*Mt});t.box("ext",.28,.56,.12,0,Et+_t-.28,lt+.34,l),t.kawaraRidge("ext",0,Et+_t+.16,lt-zt*.9,0,Et+_t+.16,lt+.32,V,$,{scale:.78,courses:2,oniStart:!1,oniEnd:!0});const Ft=.48,St=4.65,Nt=ut+St*Math.tan(Ft)-.1,Ut=3.05,Yt=11.4,Q=9.3,yt=Yt*.5-Ut;t.kawaraSlope("ext",{topWidth:Ut*2,bottomWidth:Yt,run:St,pitch:Ft,ridgeX:-.45,ridgeY:Nt,ridgeZ:.25,downslopeYaw:0,tileMat:B,ribMat:Z,rafterMat:h,ribSpacing:.36}),t.kawaraSlope("ext",{topWidth:Ut*2,bottomWidth:Yt,run:St,pitch:Ft,ridgeX:-.45,ridgeY:Nt,ridgeZ:.25,downslopeYaw:Math.PI,tileMat:B,ribMat:Z,rafterMat:h,ribSpacing:.36});const xt=1.15,bt=Nt-xt,wt=yt+.45;t.gablePrism("ext",4.4,xt+.15,.22,-.45+Ut,bt-.05,.25,o,{ry:Math.PI*.5}),t.gablePrism("ext",4.4,xt+.15,.22,-.45-Ut,bt-.05,.25,o,{ry:Math.PI*.5}),t.kawaraSlope("ext",{topWidth:4.5,bottomWidth:Q,run:wt,pitch:.44,ridgeX:-.45+Ut,ridgeY:bt,ridgeZ:.25,downslopeYaw:Math.PI*.5,tileMat:B,ribMat:Z,rafterMat:h,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:4.5,bottomWidth:Q,run:wt,pitch:.44,ridgeX:-.45-Ut,ridgeY:bt,ridgeZ:.25,downslopeYaw:-Math.PI*.5,tileMat:B,ribMat:Z,rafterMat:h,ribSpacing:.38}),t.kawaraRidge("ext",-.45-Ut,Nt+.04,.25,-.45+Ut,Nt+.04,.25,V,$,{scale:1.12,courses:3,oniStart:!0,oniEnd:!0});const Tt=Nt-St*Math.tan(Ft);for(const Rt of[-1,1])for(const Zt of[-1,1])t.kawaraRidge("ext",-.45+Rt*Ut,bt+.04,.25+Zt*2.15,-.45+Rt*(Yt*.5-.12),Tt+.05,.25+Zt*(St-.1),V,$,{scale:.72,courses:1,oniStart:!1,oniEnd:!0});return t.build({id:"H13",name:"神谷家（鎮守宮守・朱塗冠木門三階社家）",subtitle:"独立冠木門・苔石坪庭吹抜・千鳥破風本瓦三階邸",category:"house",builtYear:1879,abandonedYear:1985,stories:3,floorElevations:[j,O,q],entryLocal:[.4,0,8.35],entryLookLocalYaw:0})}function c2(i,e){const t=new Le(i),n=e.getMaterial("ishigaki_cut",{roughness:.92,bumpScale:.07}),r=e.getMaterial("dressed_stone",{roughness:.9,bumpScale:.06}),s=e.getMaterial("charred_cedar",{roughness:.9,bumpScale:.05}),o=e.getMaterial("white_plaster",{roughness:.92,bumpScale:.04,tint:16052196}),a=e.getMaterial("pebble_dash_wall",{roughness:.94,bumpScale:.06,tint:15130576}),l=e.getMaterial("red_brick",{roughness:.9,bumpScale:.06}),c=e.getMaterial("old_red_brick",{roughness:.92,bumpScale:.07}),u=e.getMaterial("dark_hardwood",{roughness:.84,bumpScale:.04}),d=e.getMaterial("warm_wood_plank",{roughness:.83,bumpScale:.04}),h=e.getMaterial("oak_flooring",{roughness:.8,bumpScale:.03}),p=e.getMaterial("dark_bolted_steel",{roughness:.62,metalness:.6,bumpScale:.04}),g=e.getMaterial("herringbone_wood",{roughness:.74,bumpScale:.03}),x=e.getMaterial("dark_damp_stone",{roughness:.86,bumpScale:.07}),m=e.getMaterial("charred_soil",{roughness:.96,bumpScale:.07}),f=e.getMaterial("matte_black_metal",{roughness:.54,metalness:.68}),M=e.getMaterial("tatami_bordered",{roughness:.92,bumpScale:.04}),S=e.getMaterial("tatami_plain",{roughness:.92,bumpScale:.04}),b=e.getMaterial("tatami_green_border",{roughness:.92,bumpScale:.04}),C=e.getMaterial("frosted_acrylic",{roughness:.3,opacity:.54,transparent:!0}),y=e.getMaterial("window_frosted_wood",{roughness:.3,opacity:.34,transparent:!0}),R=e.getMaterial("window_frosted_wood",{roughness:.2,opacity:.2,transparent:!0,tint:14477554}),E=e.getMaterial("shoji_sliding_door",{roughness:.88,opacity:.9,transparent:!0}),v=e.getMaterial("linen_fusuma",{roughness:.9,bumpScale:.02}),_=e.getMaterial("washi_plaster",{roughness:.91,bumpScale:.03}),I=e.getMaterial("peeling_yellow_wall",{roughness:.92,bumpScale:.04}),N=e.getMaterial("woven_fabric_gray",{roughness:.94,bumpScale:.04}),P=e.getMaterial("retro_tile_wall",{roughness:.5,bumpScale:.03}),L=e.getMaterial("green_tile",{roughness:.46,bumpScale:.04}),k=e.getMaterial("coir_doormat",{roughness:.96,bumpScale:.06}),w=e.getMaterial("antique_tansu",{roughness:.78,bumpScale:.04}),T=e.getMaterial("red_zabuton",{roughness:.92,bumpScale:.03}),D=e.getMaterial("retro_kitchen_unit",{roughness:.78,bumpScale:.03}),X=e.getMaterial("kitchen_cabinet",{roughness:.82,bumpScale:.03}),W=e.getMaterial("wooden_dresser",{roughness:.82,bumpScale:.03}),Y=e.getMaterial("floral_futon",{roughness:.92,bumpScale:.03}),U=e.getMaterial("full_bookcase",{roughness:.84,bumpScale:.04}),K=e.getMaterial("office_counter",{roughness:.8,bumpScale:.03}),H=e.getMaterial("carved_wood_lattice",{roughness:.86,bumpScale:.05}),B=e.getMaterial("mossy_aged_concrete",{roughness:.92,bumpScale:.05}),Z=e.getMaterial("slate_roof_dark",{roughness:.68,metalness:.16,bumpScale:.06,tint:11307636}),V=e.getMaterial("dark_slate",{roughness:.64,metalness:.2,bumpScale:.05,tint:9860706}),$=e.getMaterial("dark_iron_plate",{roughness:.6,metalness:.26,tint:8545362}),j=e.getMaterial("matte_black_metal",{roughness:.52,metalness:.36,tint:7230534}),O=.5,q=3.65,ut=6.7,ht=9.5;t.box("ext",12.9,3.65,9.2,0,O-1.84,0,n),t.box("ext",3.2,2,1.3,-.5,O-1.02,4.95,n),t.stoneSteps("ext",-.5,5.8,4.65,-.1,O,2.55,4,r),t.floor(-1.9,.9,4.3,5.2,O+.04);const G=6.55,mt=-2.15;t.box("ext",1.75,3.2,1.75,G,-1.1,mt,n,{solid:!0}),t.box("ext",1.52,3.8,1.52,G,2.3,mt,c,{solid:!0}),t.box("ext",1.28,3.6,1.28,G,5.95,mt,l,{solid:!0}),t.box("ext",1.05,3.85,1.05,G,9.65,mt,l,{solid:!0}),t.box("ext",1.32,.28,1.32,G,11.72,mt,c);for(const gt of[4.2,7.6,10.4]){const _t=gt<5?1.44:gt<8?1.2:1.12;t.box("ext",_t,.12,_t,G,gt,mt,p)}const nt=q-O,st=O+nt*.5;t.box("int",12.2,.12,8.6,0,O-.04,0,d),t.box("int",7.1,.04,8.2,-2.55,O+.03,0,M),t.box("int",4.8,.04,5.8,3.65,O+.03,1.35,g),t.box("int",4.8,.05,2.6,3.65,O+.02,-3,L),t.box("int",1.2,.03,.72,-.5,O+.04,4.02,k,{uvScale:0}),t.floor(-6.05,6.05,-4.25,4.42,O+.04),t.box("ext",4.68,1.25,.26,-3.88,O+.62,4.4,s,{solid:!0}),t.box("ext",1.35,nt-1.25,.26,-5.54,O+2.2,4.4,o,{solid:!0}),t.box("ext",2.25,.58,.26,-3.72,O+2.86,4.4,o,{solid:!0}),t.box("ext",2.2,1.32,.07,-3.72,O+1.9,4.4,H,{uvScale:0}),t.box("ext",1.08,nt-1.25,.26,-2.06,O+2.2,4.4,o,{solid:!0}),t.box("ext",2.14,.74,.26,-.5,O+2.78,4.4,o,{solid:!0}),t.box("ext",1.05,2.34,.06,-1.95,O+1.18,4.2,E,{uvScale:0}),t.box("ext",5.68,1.12,.26,3.38,O+.56,4.4,a,{solid:!0}),t.box("ext",1.35,nt-1.12,.26,1.22,O+2.14,4.4,a,{solid:!0}),t.box("ext",2.55,.54,.26,3.18,O+2.88,4.4,a,{solid:!0}),t.box("ext",2.5,1.48,.06,3.18,O+1.86,4.4,R,{uvScale:0}),t.box("ext",1.78,nt-1.12,.26,5.34,O+2.14,4.4,a,{solid:!0}),t.box("ext",7.45,1.2,.26,-2.48,O+.6,-4.4,s,{solid:!0}),t.box("ext",7.45,nt-1.2,.26,-2.48,O+2.18,-4.4,o,{solid:!0}),t.box("ext",5.05,nt,.26,3.7,st,-4.4,a,{solid:!0}),t.box("ext",.26,1.2,8.85,-6.2,O+.6,0,s,{solid:!0}),t.box("ext",.26,nt-1.2,8.85,-6.2,O+2.18,0,o,{solid:!0}),t.box("ext",.26,nt,8.85,6.2,st,0,a,{solid:!0}),t.box("int",.16,nt,5.58,1.2,st,-1.62,_,{solid:!0}),t.box("int",.16,.72,1.85,1.2,O+2.79,2.05,C,{uvScale:0}),t.box("int",.16,nt,1.48,1.2,st,3.68,_,{solid:!0}),t.box("int",.68,nt,.14,1.54,st,-1.75,P,{solid:!0}),t.box("int",1.6,.72,.14,2.62,O+2.79,-1.75,P,{solid:!0}),t.box("int",2.85,nt,.14,4.82,st,-1.75,P,{solid:!0}),t.box("int",.42,nt,.42,-1.95,st,.25,u,{solid:!0}),t.box("int",1.55,.2,1.55,-3.35,O+.1,-1.65,x,{solid:!0}),t.box("int",1.12,.12,1.12,-3.35,O+.18,-1.65,m),t.cyl("int",.22,.2,.22,10,-3.35,O+.36,-1.65,f),t.cyl("int",.03,.03,2.65,6,-3.35,O+1.8,-1.65,f);for(const[gt,_t]of[[-3.35,-.55],[-2.2,-1.65],[-3.35,-2.75]])t.box("int",.62,.08,.62,gt,O+.08,_t,T,{uvScale:0});t.box("int",1.45,1.48,.52,-.45,O+.75,-3.95,w,{solid:!0,uvScale:0}),t.box("int",1.75,.92,.62,-2.45,O+.46,-3.98,D,{solid:!0,uvScale:0}),t.box("int",.56,1.85,1.25,.85,O+.94,-3.35,X,{solid:!0,uvScale:0}),t.box("int",1.15,2.55,1.25,5.42,O+1.28,-.35,c,{solid:!0}),t.box("int",1.24,.16,1.34,5.42,O+2.58,-.35,l),t.box("int",.54,.62,.08,4.82,O+.72,-.35,f),t.box("int",1.95,.52,.82,3.65,O+.28,3.45,N,{solid:!0}),t.box("int",1.25,.58,.72,3.65,O+.3,1.95,u,{solid:!0}),t.box("int",1.65,.68,1.15,5.15,O+.34,-3.55,L,{solid:!0}),t.stairRun("int",{x0:-5.2,z0:2.3,x1:-5.2,z1:-1.75,y0:O+.04,y1:q+.04,width:1.18,steps:14,treadMat:u,stringerMat:u,railMat:d,railLeft:!1,railRight:!0,closedRisers:!0,guardLeft:!1,guardRight:!0});const ct=ut-q,et=q+ct*.5;t.box("int",10.66,.16,8.8,.87,q-.06,0,d),t.box("int",1.74,.16,2.62,-5.33,q-.06,-3.1,d),t.box("int",1.74,.16,2,-5.33,q-.06,3.4,d),t.box("int",4.6,.04,5.2,-1.9,q+.03,1.2,S),t.box("int",5.2,.04,7.6,3.4,q+.03,.2,b),t.collider(-4.46,6.2,q-.16,q+.02,-4.4,4.4),t.collider(-6.2,-4.46,q-.16,q+.02,-4.4,-1.8),t.collider(-6.2,-4.46,q-.16,q+.02,2.42,4.4),t.floor(-4.42,6.08,-4.28,4.35,q+.04),t.floor(-6.08,-4.4,-4.28,-1.75,q+.04),t.floor(-6.08,-4.4,2.4,4.28,q+.04),t.kouranRailing("int",-4.46,-1.78,-4.46,2.42,q,.94,u,.56),t.kouranRailing("int",-6.08,2.42,-4.46,2.42,q,.94,u,.52),t.box("ext",11.35,.16,1.1,0,q-.04,4.94,d),t.kouranRailing("ext",-5.62,5.44,5.62,5.44,q,.94,u,.54),t.kouranRailing("ext",-5.62,4.4,-5.62,5.44,q,.94,u,.54),t.kouranRailing("ext",5.62,4.4,5.62,5.44,q,.94,u,.54),t.floor(-5.52,5.52,4.32,5.36,q+.04),t.box("ext",5.38,ct,.22,-3.52,et,4.4,o,{solid:!0}),t.box("ext",1.74,.72,.22,0,q+2.69,4.4,o,{solid:!0}),t.box("ext",5.38,ct,.22,3.52,et,4.4,a,{solid:!0}),t.box("ext",7.45,ct,.22,-2.48,et,-4.4,o,{solid:!0}),t.box("ext",5.05,ct,.22,3.7,et,-4.4,a,{solid:!0}),t.box("ext",.22,ct,8.85,-6.2,et,0,o,{solid:!0}),t.box("ext",.22,ct,8.85,6.2,et,0,a,{solid:!0});for(const gt of[-6.22,-3.1,-.88,.88,3.6,6.22])t.box("ext",.16,ct+.06,.26,gt,et,4.42,u);t.box("int",.14,ct,4.12,2.45,et,-2.35,v,{solid:!0,uvScale:0}),t.box("int",.14,.72,2.05,2.45,q+2.69,.7,C,{uvScale:0}),t.box("int",.14,ct,2.72,2.45,et,3.05,v,{solid:!0,uvScale:0}),t.box("int",.1,ct-.1,3.2,6.04,et,1.4,I),t.box("int",1.65,.34,2.15,4.45,q+.21,1.55,Y,{solid:!0,uvScale:0}),t.box("int",1.25,1.15,.5,4.65,q+.58,-3.95,W,{solid:!0,uvScale:0}),t.box("int",1.45,1.45,.52,-1.85,q+.74,3.92,w,{solid:!0,uvScale:0}),t.stairRun("int",{x0:1.05,z0:-2.35,x1:-2.85,z1:-2.35,y0:q+.04,y1:ut+.04,width:1.14,steps:14,treadMat:u,stringerMat:u,railMat:d,railLeft:!0,railRight:!0,closedRisers:!1,guardLeft:!0,guardRight:!0});const tt=ht-ut,F=ut+tt*.5;t.box("int",7.8,.16,4.96,-2.1,ut-.06,.72,h),t.box("int",3.14,.16,1.46,-4.43,ut-.06,-2.47,h),t.box("int",.7,.16,1.46,1.45,ut-.06,-2.47,h),t.box("ext",4.3,.18,6.55,3.92,ut-.06,0,B),t.box("ext",3.9,.05,6.1,3.92,ut+.04,0,d),t.kouranRailing("ext",1.8,3.22,6.02,3.22,ut,.96,u,.54),t.kouranRailing("ext",6.02,-3.22,6.02,3.22,ut,.96,u,.54),t.kouranRailing("ext",1.8,-3.22,6.02,-3.22,ut,.96,u,.54);for(const gt of[-2.4,2.4])t.box("ext",.1,1.95,.1,5.25,ut+.98,gt,u);t.cyl("ext",.032,.032,5.1,6,5.25,ut+1.82,0,d,{rx:Math.PI*.5}),t.collider(-6,1.8,ut-.16,ut+.02,-1.74,3.2),t.collider(-6,-2.88,ut-.16,ut+.02,-3.2,-1.74),t.collider(1.12,1.8,ut-.16,ut+.02,-3.2,-1.74),t.collider(1.8,6.05,ut-.18,ut+.02,-3.25,3.25),t.floor(-5.88,1.85,-1.72,3.12,ut+.04),t.floor(-5.88,-2.82,-3.12,-1.7,ut+.04),t.floor(1.12,1.85,-3.12,-1.7,ut+.04),t.floor(1.75,5.92,-3.12,3.12,ut+.04),t.kouranRailing("int",-2.86,-1.74,1.12,-1.74,ut,.94,u,.54),t.kouranRailing("int",1.12,-3.12,1.12,-1.74,ut,.94,u,.5),t.box("ext",.22,tt,3.4,1.8,F,-1.52,o,{solid:!0}),t.box("ext",.22,.68,1.8,1.8,ut+2.46,1.02,o,{solid:!0}),t.box("ext",.22,tt,1.34,1.8,F,2.56,o,{solid:!0}),t.box("ext",7.85,.85,.22,-2.1,ut+.42,3.2,o,{solid:!0}),t.box("ext",2.05,tt-.85,.22,-5,ut+1.82,3.2,o,{solid:!0}),t.box("ext",3.6,.46,.22,-2.15,ut+2.57,3.2,o,{solid:!0}),t.box("ext",3.56,1.48,.06,-2.15,ut+1.6,3.2,R,{uvScale:0}),t.box("ext",2.25,tt-.85,.22,.72,ut+1.82,3.2,o,{solid:!0}),t.box("ext",7.85,tt,.22,-2.1,F,-3.2,o,{solid:!0}),t.box("ext",.22,.88,6.45,-6,ut+.44,0,o,{solid:!0}),t.box("ext",.22,tt-.88,1.85,-6,ut+1.84,-2.3,o,{solid:!0}),t.box("ext",.22,.48,2.65,-6,ut+2.56,-.05,o,{solid:!0}),t.box("ext",.06,1.44,2.6,-6,ut+1.6,-.05,y,{uvScale:0}),t.box("ext",.22,tt-.88,1.98,-6,ut+1.84,2.24,o,{solid:!0}),t.box("int",1.85,.84,.82,-2.25,ut+.44,1.95,K,{solid:!0,uvScale:0}),t.box("int",.52,1.95,1.75,-5.58,ut+.98,1.85,U,{solid:!0,uvScale:0}),t.box("int",1.45,1.1,.48,-4.45,ut+.56,-2.8,W,{solid:!0,uvScale:0}),t.kawaraSlope("ext",{bottomWidth:13.2,run:1.32,pitch:.36,ridgeX:0,ridgeY:q+.12,ridgeZ:4.36,downslopeYaw:0,tileMat:Z,ribMat:V,rafterMat:u,ribSpacing:.38}),t.kawaraSlope("ext",{bottomWidth:9.6,run:1.05,pitch:.36,ridgeX:-6.16,ridgeY:q+.1,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:Z,ribMat:V,rafterMat:u,ribSpacing:.38}),t.kawaraSlope("ext",{bottomWidth:13.4,run:2.35,pitch:.38,ridgeX:0,ridgeY:ut+.24,ridgeZ:3.22,downslopeYaw:0,tileMat:Z,ribMat:V,rafterMat:u,ribSpacing:.38}),t.kawaraSlope("ext",{bottomWidth:13.4,run:1.95,pitch:.38,ridgeX:0,ridgeY:ut+.2,ridgeZ:-3.22,downslopeYaw:Math.PI,tileMat:Z,ribMat:V,rafterMat:u,ribSpacing:.38});const A=.48,J=4.25,ot=ht+J*Math.tan(A)-.1,dt=-2.1,lt=9.5,Et=ot-ht+.1;return t.gablePrism("ext",6.5,Et,.22,-6,ht-.04,0,o,{ry:Math.PI*.5}),t.gablePrism("ext",6.5,Et,.22,1.8,ht-.04,0,o,{ry:Math.PI*.5}),t.kawaraSlope("ext",{bottomWidth:lt,run:J,pitch:A,ridgeX:dt,ridgeY:ot,ridgeZ:0,downslopeYaw:0,tileMat:Z,ribMat:V,rafterMat:u,ribSpacing:.36}),t.kawaraSlope("ext",{bottomWidth:lt,run:J,pitch:A,ridgeX:dt,ridgeY:ot,ridgeZ:0,downslopeYaw:Math.PI,tileMat:Z,ribMat:V,rafterMat:u,ribSpacing:.36}),t.kawaraRidge("ext",dt-lt*.5+.06,ot+.04,0,dt+lt*.5-.06,ot+.04,0,$,j,{scale:1.08,courses:3,oniStart:!0,oniEnd:!0}),t.build({id:"H14",name:"村田家（赤煉瓦ペチカ煙突＆物干しデッキ三階邸）",subtitle:"11.8m赤煉瓦大煙突・リシン洋間・囲炉裏大黒柱・3F開放デッキ",category:"house",builtYear:1883,abandonedYear:1985,stories:3,floorElevations:[O,q,ut],entryLocal:[-.5,0,6.8],entryLookLocalYaw:0})}function u2(i,e){const t=new Le(i),n=e.getMaterial("ishigaki_cut",{roughness:.92,bumpScale:.07}),r=e.getMaterial("dressed_stone",{roughness:.9,bumpScale:.06}),s=e.getMaterial("charred_cedar",{roughness:.9,bumpScale:.05}),o=e.getMaterial("white_plaster",{roughness:.92,bumpScale:.04,tint:16052454});e.getMaterial("washi_plaster",{roughness:.91,bumpScale:.03});const a=e.getMaterial("dark_hardwood",{roughness:.84,bumpScale:.04}),l=e.getMaterial("warm_wood_plank",{roughness:.83,bumpScale:.04}),c=e.getMaterial("oak_flooring",{roughness:.8,bumpScale:.03}),u=e.getMaterial("cobblestone",{roughness:.92,bumpScale:.06}),d=e.getMaterial("tatami_bordered",{roughness:.92,bumpScale:.04}),h=e.getMaterial("tatami_plain",{roughness:.92,bumpScale:.04}),p=e.getMaterial("shoji_sliding_door",{roughness:.88,opacity:.9,transparent:!0}),g=e.getMaterial("carved_wood_lattice",{roughness:.86,bumpScale:.05}),x=e.getMaterial("window_frosted_wood",{roughness:.22,opacity:.22,transparent:!0,tint:14478324}),m=e.getMaterial("coir_doormat",{roughness:.96,bumpScale:.06}),f=e.getMaterial("antique_tansu",{roughness:.78,bumpScale:.04}),M=e.getMaterial("red_zabuton",{roughness:.92,bumpScale:.03}),S=e.getMaterial("retro_kitchen_unit",{roughness:.78,bumpScale:.03}),b=e.getMaterial("kitchen_cabinet",{roughness:.82,bumpScale:.03}),C=e.getMaterial("stained_concrete",{roughness:.92,bumpScale:.05}),y=e.getMaterial("rust_streaked_concrete",{roughness:.92,bumpScale:.06}),R=e.getMaterial("tire_track_concrete",{roughness:.9,bumpScale:.05}),E=e.getMaterial("roll_shutter",{roughness:.56,metalness:.55,bumpScale:.05}),v=e.getMaterial("door_rusted_green",{roughness:.74,metalness:.36,bumpScale:.04}),_=e.getMaterial("corrugated_gray",{roughness:.68,metalness:.45,bumpScale:.06,doubleSide:!0}),I=e.getMaterial("galvanized_zinc",{roughness:.54,metalness:.6,bumpScale:.04,doubleSide:!0}),N=e.getMaterial("rusted_plate_bolts",{roughness:.74,metalness:.48,bumpScale:.05}),P=e.getMaterial("peeling_paint_steel",{roughness:.74,metalness:.4,bumpScale:.04}),L=e.getMaterial("mine_valve_pipes",{roughness:.62,metalness:.55,bumpScale:.06}),k=e.getMaterial("green_textured_mat",{roughness:.94,bumpScale:.05}),w=e.getMaterial("woven_fabric_gray",{roughness:.94,bumpScale:.04}),T=e.getMaterial("coarse_canvas",{roughness:.95,bumpScale:.05,doubleSide:!0}),D=e.getMaterial("dark_bolted_steel",{roughness:.62,metalness:.6,bumpScale:.04}),X=e.getMaterial("storage_rack",{roughness:.88,bumpScale:.04}),W=e.getMaterial("wooden_dresser",{roughness:.82,bumpScale:.03}),Y=e.getMaterial("full_bookcase",{roughness:.84,bumpScale:.04}),U=e.getMaterial("floral_futon",{roughness:.92,bumpScale:.03}),K=e.getMaterial("slate_roof_dark",{roughness:.72,metalness:.18,bumpScale:.06,tint:10529460}),H=e.getMaterial("dark_slate",{roughness:.68,metalness:.22,bumpScale:.05,tint:9147808}),B=e.getMaterial("dark_iron_plate",{roughness:.62,metalness:.28,tint:7766156}),Z=e.getMaterial("matte_black_metal",{roughness:.54,metalness:.38,tint:6581880}),V=.45,$=3.55,j=6.5;t.box("ext",8.6,3.55,9.2,-3.2,V-1.79,0,n),t.box("ext",1.8,3.35,8.6,1.6,V-1.7,0,u),t.box("ext",5.4,3.55,8.6,4.8,V-1.79,0,C),t.stoneSteps("ext",-3,5.75,4.55,-.08,V,2.35,4,r),t.floor(-4.3,-1.7,4.2,4.9,V+.04),t.stoneSteps("ext",1.6,5.45,4.25,-.08,V,1.35,3,u),t.stoneSteps("ext",4.8,5.45,4.18,-.08,V,2.95,3,R),t.floor(3.3,6.3,3.9,4.5,V+.04);const O=$-V,q=V+O*.5;t.box("int",8,.12,8.6,-3.2,V-.04,0,l),t.box("int",5.2,.04,5.4,-2.1,V+.03,-1.25,d),t.box("int",1.15,.03,.7,-3,V+.04,4,m,{uvScale:0}),t.box("ext",1.5,.08,8.5,1.6,V-.02,0,u),t.box("int",4.9,.12,8,4.8,V-.04,0,R),t.floor(-7.15,7.15,-4.25,4.4,V+.04),t.box("ext",3.34,1.2,.26,-5.65,V+.6,4.4,s,{solid:!0}),t.box("ext",3.34,O-1.2,.26,-5.65,V+2.15,4.4,o,{solid:!0}),t.box("ext",2.04,.72,.26,-3,V+2.74,4.4,o,{solid:!0}),t.box("ext",1,2.3,.06,-4.35,V+1.15,4.2,p,{uvScale:0}),t.box("ext",2.94,1.2,.26,-.55,V+.6,4.4,s,{solid:!0}),t.box("ext",.65,O-1.2,.26,-1.7,V+2.15,4.4,o,{solid:!0}),t.box("ext",1.65,.56,.26,-.55,V+2.82,4.4,o,{solid:!0}),t.box("ext",1.6,1.32,.07,-.55,V+1.88,4.4,g,{uvScale:0}),t.box("ext",.65,O-1.2,.26,.6,V+2.15,4.4,o,{solid:!0}),t.box("ext",8.25,1.2,.26,-3.2,V+.6,-4.4,s,{solid:!0}),t.box("ext",8.25,O-1.2,.26,-3.2,V+2.15,-4.4,o,{solid:!0}),t.box("ext",.26,1.2,8.85,-7.3,V+.6,0,s,{solid:!0}),t.box("ext",.26,O-1.2,8.85,-7.3,V+2.15,0,o,{solid:!0}),t.box("ext",.26,O,3.64,.9,q,-2.6,o,{solid:!0}),t.box("ext",.26,.72,1.65,.9,V+2.74,0,o,{solid:!0}),t.box("ext",.26,O,3.64,.9,q,2.6,o,{solid:!0}),t.box("int",1.65,.38,.98,-2.25,V+.2,-1.15,a,{solid:!0}),t.box("int",.62,.08,.62,-2.25,V+.08,-2.05,M,{uvScale:0}),t.box("int",.62,.08,.62,-2.25,V+.08,-.25,M,{uvScale:0}),t.box("int",1.55,1.48,.52,-.25,V+.75,-3.95,f,{solid:!0,uvScale:0}),t.box("int",1.85,.92,.62,-3.55,V+.46,-3.98,S,{solid:!0,uvScale:0}),t.box("int",.56,1.85,1.25,-4.95,V+.94,-3.45,b,{solid:!0,uvScale:0}),t.stairRun("int",{x0:-6.15,z0:2.35,x1:-6.15,z1:-1.65,y0:V+.04,y1:$+.04,width:1.15,steps:14,treadMat:a,stringerMat:a,railMat:l,railLeft:!1,railRight:!0,closedRisers:!0,guardLeft:!1,guardRight:!0}),t.box("ext",1.14,O,.26,2.85,q,4.1,y,{solid:!0}),t.box("ext",2.86,.84,.16,4.8,V+2.68,4.12,E,{solid:!0,uvScale:0}),t.box("ext",3.04,.34,.34,4.8,V+3.04,4.24,N),t.box("ext",1.14,O,.26,6.75,q,4.1,y,{solid:!0}),t.box("ext",5.05,O,.26,4.8,q,-4.1,C,{solid:!0}),t.box("ext",.26,O,8.25,7.3,q,0,y,{solid:!0}),t.box("ext",.26,O,3.34,2.3,q,-2.45,C,{solid:!0}),t.box("ext",.26,.72,1.65,2.3,V+2.74,0,C,{solid:!0}),t.box("ext",.26,O,3.34,2.3,q,2.45,C,{solid:!0}),t.box("ext",.08,2.24,1.1,2.62,V+1.12,1.25,v,{ry:.45,uvScale:0}),t.box("int",1.65,1.85,.56,3.85,V+.94,-3.62,X,{solid:!0,uvScale:0}),t.box("int",1.15,1.25,.52,2.95,V+.64,2.55,P,{solid:!0,uvScale:0}),t.box("int",.54,1.45,1.65,2.75,V+.74,-2.25,L,{solid:!0,uvScale:0}),t.stairRun("int",{x0:6.35,z0:1.95,x1:6.35,z1:-1.95,y0:V+.04,y1:$+.04,width:1.06,steps:14,treadMat:c,stringerMat:D,railMat:D,railLeft:!0,railRight:!1,closedRisers:!1,guardLeft:!0,guardRight:!1});const ut=j-$,ht=$+ut*.5;t.box("int",6.32,.16,8.8,-2.26,$-.06,0,l),t.box("int",1.88,.16,2.72,-6.36,$-.06,-3.04,l),t.box("int",1.88,.16,1.96,-6.36,$-.06,3.42,l),t.box("int",5.2,.04,7.6,-2.1,$+.03,0,h),t.collider(-5.42,.9,$-.16,$+.02,-4.4,4.4),t.collider(-7.3,-5.42,$-.16,$+.02,-4.4,-1.72),t.collider(-7.3,-5.42,$-.16,$+.02,2.46,4.4),t.floor(-5.38,.95,-4.28,4.35,$+.04),t.floor(-7.18,-5.36,-4.28,-1.68,$+.04),t.floor(-7.18,-5.36,2.42,4.28,$+.04),t.kouranRailing("int",-5.42,-1.7,-5.42,2.46,$,.94,a,.54),t.kouranRailing("int",-7.18,2.46,-5.42,2.46,$,.94,a,.5),t.box("ext",7.3,.16,1,-3.2,$-.04,4.88,l),t.kouranRailing("ext",-6.82,5.34,.42,5.34,$,.94,a,.54),t.kouranRailing("ext",-6.82,4.4,-6.82,5.34,$,.94,a,.54),t.kouranRailing("ext",.42,4.4,.42,5.34,$,.94,a,.54),t.floor(-6.72,.34,4.32,5.26,$+.04),t.box("ext",3.48,ut,.22,-5.56,ht,4.4,o,{solid:!0}),t.box("ext",1.74,.68,.22,-3,$+2.61,4.4,o,{solid:!0}),t.box("ext",3.08,ut,.22,-.62,ht,4.4,o,{solid:!0}),t.box("ext",8.25,ut,.22,-3.2,ht,-4.4,o,{solid:!0}),t.box("ext",.22,ut,8.85,-7.3,ht,0,o,{solid:!0}),t.box("ext",.22,ut,3.32,.9,ht,-2.75,o,{solid:!0}),t.box("ext",.22,.66,2.24,.9,$+2.62,0,o,{solid:!0}),t.box("ext",.22,ut,3.32,.9,ht,2.75,o,{solid:!0}),t.box("int",1.65,.34,2.1,-2.45,$+.21,-2.45,U,{solid:!0,uvScale:0}),t.box("int",1.25,1.15,.5,-.35,$+.58,-3.95,W,{solid:!0,uvScale:0}),t.box("ext",1.65,.22,3.1,1.6,$-.08,0,a),t.box("int",1.6,.04,2.95,1.6,$+.03,0,c),t.collider(.85,2.35,$-.2,$+.02,-1.5,1.5),t.floor(.82,2.4,-1.38,1.38,$+.04);for(const tt of[-1.5,1.5])t.box("ext",1.55,.85,.16,1.6,$+.42,tt,s,{solid:!0}),t.box("ext",1.5,1.52,.06,1.6,$+1.6,tt,x,{uvScale:0}),t.box("ext",1.55,.46,.16,1.6,$+2.6,tt,a,{solid:!0});t.kawaraSlope("ext",{bottomWidth:1.95,run:1.95,pitch:.42,ridgeX:1.6,ridgeY:j+.72,ridgeZ:0,downslopeYaw:0,tileMat:K,ribMat:H,rafterMat:a,ribSpacing:.36}),t.kawaraSlope("ext",{bottomWidth:1.95,run:1.95,pitch:.42,ridgeX:1.6,ridgeY:j+.72,ridgeZ:0,downslopeYaw:Math.PI,tileMat:K,ribMat:H,rafterMat:a,ribSpacing:.36}),t.box("int",3.4,.16,8.2,4,$-.06,0,c),t.box("int",1.64,.16,2.12,6.48,$-.06,-3.04,c),t.box("int",1.64,.16,2.12,6.48,$-.06,3.04,c),t.box("int",3.1,.04,6.8,4,$+.03,0,k),t.collider(2.3,5.68,$-.16,$+.02,-4.1,4.1),t.collider(5.68,7.3,$-.16,$+.02,-4.1,-2.02),t.collider(5.68,7.3,$-.16,$+.02,2.02,4.1),t.floor(2.25,5.66,-3.98,3.98,$+.04),t.floor(5.62,7.18,-3.98,-1.96,$+.04),t.floor(5.62,7.18,2,3.98,$+.04),t.kouranRailing("int",5.68,-2,5.68,2.02,$,.94,D,.54),t.kouranRailing("int",5.68,2.02,7.18,2.02,$,.94,D,.5),t.box("ext",5.05,.96,.2,4.8,$+.48,4.1,_,{solid:!0}),t.box("ext",1.15,ut-.96,.2,2.86,$+1.96,4.1,_,{solid:!0}),t.box("ext",2.45,.52,.2,4.65,$+2.69,4.1,I,{solid:!0}),t.box("ext",2.4,1.48,.06,4.65,$+1.7,4.1,x,{uvScale:0}),t.box("ext",1.45,ut-.96,.2,6.58,$+1.96,4.1,_,{solid:!0}),t.box("ext",5.05,ut,.2,4.8,ht,-4.1,_,{solid:!0}),t.box("ext",.2,ut,8.25,7.3,ht,0,I,{solid:!0}),t.box("ext",.2,ut,3.02,2.3,ht,-2.6,_,{solid:!0}),t.box("ext",.2,.66,2.24,2.3,$+2.62,0,_,{solid:!0}),t.box("ext",.2,ut,3.02,2.3,ht,2.6,_,{solid:!0}),t.box("int",1.85,.54,.8,4.15,$+.28,3.45,w,{solid:!0}),t.box("int",.52,1.95,1.65,2.75,$+.98,2.45,Y,{solid:!0,uvScale:0}),t.box("int",1.55,2.1,.05,4.1,$+1.85,-1.65,T,{uvScale:0}),t.box("int",1.25,1.12,.48,3.85,$+.56,-3.62,W,{solid:!0,uvScale:0}),t.kawaraSlope("ext",{bottomWidth:8.8,run:1.25,pitch:.36,ridgeX:-3.2,ridgeY:$+.12,ridgeZ:4.36,downslopeYaw:0,tileMat:K,ribMat:H,rafterMat:a,ribSpacing:.38});const G=.48,mt=5.3,nt=j+mt*Math.tan(G)-.1,st=-3.2,ct=9.7,et=nt-j+.1;t.gablePrism("ext",8.9,et,.24,-7.3,j-.04,0,o,{ry:Math.PI*.5}),t.gablePrism("ext",8.9,et,.24,.9,j-.04,0,o,{ry:Math.PI*.5}),t.kawaraSlope("ext",{bottomWidth:ct,run:mt,pitch:G,ridgeX:st,ridgeY:nt,ridgeZ:0,downslopeYaw:0,tileMat:K,ribMat:H,rafterMat:a,ribSpacing:.36}),t.kawaraSlope("ext",{bottomWidth:ct,run:mt,pitch:G,ridgeX:st,ridgeY:nt,ridgeZ:0,downslopeYaw:Math.PI,tileMat:K,ribMat:H,rafterMat:a,ribSpacing:.36}),t.kawaraRidge("ext",st-ct*.5+.06,nt+.04,0,st+ct*.5-.06,nt+.04,0,B,Z,{scale:1.06,courses:3,oniStart:!0,oniEnd:!0}),t.box("ext",.2,1.1,8.25,2.3,j+.5,0,_),t.box("ext",6.1,.12,9.2,5,j+.54,0,I,{rz:-.2}),t.box("ext",6.12,.06,3.05,5,j+.61,-2.6,_,{rz:-.2});for(const tt of[-3.4,-1.1,1.2,3.4])t.box("int",5.2,.14,.12,4.8,j+.42,tt,D,{rz:-.2});return t.build({id:"H15",name:"吉田家（明治本瓦本屋×昭和トタン車庫・空中渡り廊下邸）",subtitle:"1880年本瓦本屋と1958年トタン車庫を2Fガラス渡り廊下で連結",category:"house",builtYear:1880,abandonedYear:1985,stories:2,floorElevations:[V,$],entryLocal:[-3,0,6.8],entryLookLocalYaw:0})}function d2(i,e){const t=new Le(i),n=e.getMaterial("exterior_tile_beige",{roughness:.84,bumpScale:.05}),r=e.getMaterial("travertine_stone",{roughness:.86,bumpScale:.05}),s=e.getMaterial("black_marble",{roughness:.34,metalness:.14,bumpScale:.02}),o=e.getMaterial("weathered_sage_paint",{roughness:.84,bumpScale:.05,tint:14214619}),a=e.getMaterial("dark_green_wood",{roughness:.8,bumpScale:.04}),l=e.getMaterial("white_plaster",{roughness:.9,bumpScale:.03,tint:16250351}),c=e.getMaterial("dark_hardwood",{roughness:.82,bumpScale:.04}),u=e.getMaterial("wood_panel_door",{roughness:.8,bumpScale:.04}),d=e.getMaterial("herringbone_wood",{roughness:.72,bumpScale:.03}),h=e.getMaterial("oak_flooring",{roughness:.78,bumpScale:.03}),p=e.getMaterial("faded_blue_plaster",{roughness:.9,bumpScale:.04}),g=e.getMaterial("white_fabric_wall",{roughness:.92,bumpScale:.03}),x=e.getMaterial("red_brick",{roughness:.9,bumpScale:.06}),m=e.getMaterial("gingham_cloth",{roughness:.92,bumpScale:.02}),f=e.getMaterial("botanical_curtain",{roughness:.9,bumpScale:.02,doubleSide:!0}),M=e.getMaterial("tatami_bordered",{roughness:.92,bumpScale:.04}),S=e.getMaterial("shoji_sliding_door",{roughness:.88,opacity:.9,transparent:!0}),b=e.getMaterial("retro_tile_wall",{roughness:.5,bumpScale:.03}),C=e.getMaterial("cream_ceramic_tile",{roughness:.48,bumpScale:.03}),y=e.getMaterial("green_tile",{roughness:.46,bumpScale:.04}),R=e.getMaterial("woven_carpet_gray",{roughness:.94,bumpScale:.04}),E=e.getMaterial("checker_linoleum",{roughness:.62,bumpScale:.02}),v=e.getMaterial("coir_doormat",{roughness:.96,bumpScale:.06}),_=e.getMaterial("retro_kitchen_unit",{roughness:.78,bumpScale:.03}),I=e.getMaterial("kitchen_cabinet",{roughness:.82,bumpScale:.03}),N=e.getMaterial("office_counter",{roughness:.8,bumpScale:.03}),P=e.getMaterial("island_map_sign",{roughness:.8,bumpScale:.02}),L=e.getMaterial("chalkboard",{roughness:.88,bumpScale:.02}),k=e.getMaterial("cork_board",{roughness:.92,bumpScale:.03}),w=e.getMaterial("file_cabinet",{roughness:.66,metalness:.25}),T=e.getMaterial("wardrobe_wood",{roughness:.82,bumpScale:.03}),D=e.getMaterial("wooden_dresser",{roughness:.82,bumpScale:.03}),X=e.getMaterial("floral_futon",{roughness:.92,bumpScale:.03}),W=e.getMaterial("vanity_sink",{roughness:.56,bumpScale:.03}),Y=e.getMaterial("full_bookcase",{roughness:.84,bumpScale:.04}),U=e.getMaterial("storage_rack",{roughness:.88,bumpScale:.04}),K=e.getMaterial("notice_board",{roughness:.88,bumpScale:.02}),H=e.getMaterial("deep_moss",{roughness:.95,bumpScale:.07}),B=e.getMaterial("dry_ferns",{roughness:.93,bumpScale:.06}),Z=e.getMaterial("coal_seam_rock",{roughness:.86,bumpScale:.08}),V=e.getMaterial("gneiss_rock",{roughness:.9,bumpScale:.08}),$=e.getMaterial("frosted_grid_window",{roughness:.3,opacity:.34,transparent:!0}),j=e.getMaterial("window_frosted_wood",{roughness:.2,opacity:.2,transparent:!0,tint:14478581}),O=e.getMaterial("slate_roof_dark",{roughness:.68,metalness:.2,bumpScale:.06,tint:11189432}),q=e.getMaterial("dark_slate",{roughness:.64,metalness:.24,bumpScale:.05,tint:9611428}),ut=e.getMaterial("dark_iron_plate",{roughness:.58,metalness:.3,tint:8164496}),ht=e.getMaterial("matte_black_metal",{roughness:.5,metalness:.42,tint:6453878}),G=e.getMaterial("dark_iron_plate",{roughness:.44,metalness:.52,tint:6136978}),mt=.55,nt=3.75,st=6.9,ct=9.95,et=12.65;t.box("ext",13.7,3.82,9.5,0,mt-1.92,-.1,r),t.box("ext",5.2,3.82,1.35,-4.2,mt-1.92,4.9,r),t.box("ext",13.85,.22,9.65,0,mt-.14,-.1,r),t.box("ext",3.6,2.2,1.55,2.2,mt-1.12,5.12,r),t.box("ext",3.55,.14,1.52,2.2,mt-.03,5.12,s),t.stoneSteps("ext",2.2,6.65,5.45,-.12,mt,2.8,5,s),t.floor(.55,3.85,4.35,5.65,mt+.04);for(const xe of[.65,3.75])t.box("ext",.34,.32,.34,xe,mt+.16,5.68,s),t.box("ext",.24,2.86,.24,xe,mt+1.65,5.68,l,{solid:!0}),t.box("ext",.34,.2,.34,xe,mt+3.08,5.68,l);t.box("ext",3.65,.28,.32,2.2,mt+3.22,5.68,l);const tt=nt-mt,F=mt+tt*.5;t.box("int",13,.1,8.9,0,mt-.04,-.1,h),t.box("int",6.7,.05,6.2,-3.2,mt+.02,2,d),t.box("int",4.3,.05,5.5,2.25,mt+.02,1.65,s),t.box("int",6.3,.05,3.3,-3.35,mt+.03,-2.85,M),t.box("int",4.4,.05,3.3,2.05,mt+.02,-2.85,C),t.box("int",1.25,.03,.72,2.2,mt+.05,4.02,v,{uvScale:0}),t.floor(-6.45,6.45,-4.45,4.45,mt+.04),t.floor(-6.45,-1.85,4.25,5.05,mt+.04),t.box("ext",2.98,1.35,.26,-.32,mt+.68,4.4,n,{solid:!0}),t.box("ext",2.98,tt-1.35,.26,-.32,mt+2.28,4.4,o,{solid:!0}),t.box("ext",2.14,.75,.26,2.2,mt+2.82,4.4,o,{solid:!0}),t.box("ext",.96,2.38,.08,.72,mt+1.2,4.16,u,{uvScale:0}),t.box("ext",3.38,1.35,.26,4.92,mt+.68,4.4,n,{solid:!0}),t.box("ext",1.15,tt-1.35,.26,3.82,mt+2.28,4.4,o,{solid:!0}),t.box("ext",1.3,.52,.26,5.02,mt+2.94,4.4,o,{solid:!0}),t.box("ext",1.26,1.35,.06,5.02,mt+2.02,4.4,j,{uvScale:0}),t.box("ext",.34,1.4,.08,4.24,mt+2.02,4.54,a),t.box("ext",.34,1.4,.08,5.8,mt+2.02,4.54,a),t.box("ext",.96,tt-1.35,.26,6.14,mt+2.28,4.4,o,{solid:!0}),t.box("ext",4.85,1.15,.26,-4.2,mt+.58,5.2,n,{solid:!0}),t.box("ext",1.15,tt-1.15,.26,-6.04,mt+2.18,5.2,o,{solid:!0}),t.box("ext",2.55,.55,.26,-4.2,mt+2.92,5.2,o,{solid:!0}),t.box("ext",2.5,1.52,.06,-4.2,mt+1.9,5.2,j,{uvScale:0}),t.box("ext",.42,1.58,.08,-5.68,mt+1.9,5.34,a),t.box("ext",.42,1.58,.08,-2.72,mt+1.9,5.34,a),t.box("ext",1.15,tt-1.15,.26,-2.36,mt+2.18,5.2,o,{solid:!0}),t.box("ext",.26,1.35,.9,-1.8,mt+.68,4.8,n,{solid:!0}),t.box("ext",.26,tt-1.35,.9,-1.8,mt+2.28,4.8,o,{solid:!0}),t.box("ext",13.25,1.15,.26,0,mt+.58,-4.6,n,{solid:!0}),t.box("ext",1.75,tt-1.15,.26,-5.74,mt+2.18,-4.6,o,{solid:!0}),t.box("ext",3.4,.58,.26,-3.2,mt+2.91,-4.6,o,{solid:!0}),t.box("ext",3.36,1.48,.06,-3.2,mt+1.88,-4.6,S,{uvScale:0}),t.box("ext",8.15,tt-1.15,.26,2.55,mt+2.18,-4.6,o,{solid:!0}),t.box("ext",.26,1.35,9.85,-6.6,mt+.68,.3,n,{solid:!0}),t.box("ext",.26,tt-1.35,9.85,-6.6,mt+2.28,.3,o,{solid:!0}),t.box("ext",.26,1.35,9.05,6.6,mt+.68,-.1,n,{solid:!0}),t.box("ext",.26,tt-1.35,9.05,6.6,mt+2.28,-.1,o,{solid:!0});for(const[xe,se]of[[-6.62,5.22],[-1.78,5.22],[6.62,4.42],[-6.62,-4.62],[6.62,-4.62]])t.box("ext",.26,tt+.06,.26,xe,F,se,l);t.box("int",3.65,tt,.16,-4.75,F,-1.2,p,{solid:!0}),t.box("int",1.8,.72,.16,-2.05,mt+2.84,-1.2,p,{solid:!0}),t.box("int",2.45,tt,.16,.05,F,-1.2,p,{solid:!0}),t.box("int",1.8,.72,.16,2.15,mt+2.84,-1.2,b,{solid:!0}),t.box("int",1.55,tt,.16,3.8,F,-1.2,b,{solid:!0}),t.box("int",.16,tt,3.4,-.2,F,-2.9,b,{solid:!0}),t.box("int",.22,tt,2.25,.2,F,-.1,l,{solid:!0}),t.box("int",.22,.65,2.65,.2,mt+2.88,2.32,l,{solid:!0}),t.box("int",.22,tt,.85,.2,F,4.02,l,{solid:!0}),t.box("int",.1,tt-.1,6.2,-6.44,F,2,p),t.box("int",.78,1.52,1.95,-6.1,mt+.76,1.7,x,{solid:!0}),t.box("int",.62,1.65,1.25,-6.16,mt+2.34,1.7,x,{solid:!0}),t.box("int",.9,.16,2.18,-6.04,mt+1.54,1.7,s),t.box("int",.92,.12,2.15,-6,mt+.06,1.7,s),t.box("int",.65,2.25,.06,-5.65,mt+1.95,4.98,f,{uvScale:0}),t.box("int",.65,2.25,.06,-2.75,mt+1.95,4.98,f,{uvScale:0}),t.box("int",1.65,.76,1.05,-3.45,mt+.38,1.95,m,{solid:!0,uvScale:0}),t.box("int",1.35,1.45,.52,-5.45,mt+.74,-3.98,T,{solid:!0,uvScale:0}),t.box("int",1.95,.92,.64,1.65,mt+.46,-4.18,_,{solid:!0,uvScale:0}),t.box("int",1.35,1.85,.56,3.65,mt+.94,-4.18,I,{solid:!0,uvScale:0}),t.stairRun("int",{x0:5.45,z0:2.5,x1:5.45,z1:-1.55,y0:mt+.04,y1:nt+.04,width:1.24,steps:15,treadMat:c,stringerMat:l,railMat:c,railLeft:!0,railRight:!1,closedRisers:!0,guardLeft:!0,guardRight:!1});const A=st-nt,J=nt+A*.5;t.box("int",11.26,.16,9,-.97,nt-.06,-.1,h),t.box("int",4.8,.16,.9,-4.2,nt-.06,4.8,h),t.box("int",1.94,.16,3,5.63,nt-.06,-3.1,h),t.box("int",1.94,.16,1.8,5.63,nt-.06,3.5,h),t.box("int",3.7,.04,3.3,2.55,nt+.03,.65,R),t.box("int",3.6,.04,3.2,-4.7,nt+.03,-2.9,y),t.collider(-6.6,4.66,nt-.16,nt+.02,-4.6,4.4),t.collider(-6.6,-1.8,nt-.16,nt+.02,4.4,5.2),t.collider(4.66,6.6,nt-.16,nt+.02,-4.6,-1.62),t.collider(4.66,6.6,nt-.16,nt+.02,2.66,4.4),t.floor(-6.45,4.64,-4.45,4.35,nt+.04),t.floor(-6.45,-1.85,4.25,5.08,nt+.04),t.floor(4.6,6.45,-4.45,-1.55,nt+.04),t.floor(4.6,6.45,2.65,4.35,nt+.04),t.kouranRailing("int",4.66,-1.58,4.66,2.66,nt,.94,c,.56),t.kouranRailing("int",4.66,2.66,6.48,2.66,nt,.94,c,.56),t.box("ext",7.8,.16,1.24,2.12,nt-.04,5,h),t.kouranRailing("ext",-1.75,5.56,5.96,5.56,nt,.96,l,.52),t.kouranRailing("ext",5.96,4.4,5.96,5.56,nt,.96,l,.52),t.floor(-1.68,5.88,4.35,5.5,nt+.04),t.box("ext",3.08,A,.24,-.28,J,4.4,o,{solid:!0}),t.box("ext",1.84,.72,.24,2.15,nt+2.79,4.4,o,{solid:!0}),t.box("ext",3.58,A,.24,4.82,J,4.4,o,{solid:!0}),t.box("ext",4.85,.96,.24,-4.2,nt+.48,5.2,o,{solid:!0}),t.box("ext",1.15,A-.96,.24,-6.04,nt+2.06,5.2,o,{solid:!0}),t.box("ext",2.55,.56,.24,-4.2,nt+2.87,5.2,o,{solid:!0}),t.box("ext",2.5,1.62,.06,-4.2,nt+1.78,5.2,j,{uvScale:0}),t.box("ext",.42,1.68,.08,-5.68,nt+1.78,5.34,a),t.box("ext",.42,1.68,.08,-2.72,nt+1.78,5.34,a),t.box("ext",1.15,A-.96,.24,-2.36,nt+2.06,5.2,o,{solid:!0}),t.box("ext",.24,A,.9,-1.8,J,4.8,o,{solid:!0}),t.box("ext",13.25,A,.24,0,J,-4.6,o,{solid:!0}),t.box("ext",.24,.98,9.85,-6.6,nt+.49,.3,o,{solid:!0}),t.box("ext",.24,A-.98,3.85,-6.6,nt+2.06,-2.68,o,{solid:!0}),t.box("ext",.24,.55,2.4,-6.6,nt+2.88,.45,o,{solid:!0}),t.box("ext",.06,1.62,2.36,-6.6,nt+1.79,.45,j,{uvScale:0}),t.box("ext",.24,A-.98,3.55,-6.6,nt+2.06,3.45,o,{solid:!0}),t.box("ext",.24,A,9.05,6.6,J,-.1,o,{solid:!0});for(const[xe,se]of[[-6.62,5.22],[-1.78,5.22],[6.62,4.42],[-6.62,-4.62],[6.62,-4.62]])t.box("ext",.24,A+.06,.24,xe,J,se,l);t.box("int",.14,A,3.62,-2.85,J,-2.8,C,{solid:!0}),t.box("int",1.48,A,.14,-5.85,J,-1,g,{solid:!0}),t.box("int",1.6,.72,.14,-4.32,nt+2.79,-1,g,{solid:!0}),t.box("int",.75,A,.14,-3.2,J,-1,g,{solid:!0}),t.box("int",1.6,.66,1.1,-5.55,nt+.34,-3.82,y,{solid:!0}),t.box("int",1.15,1.42,.52,-3.85,nt+.72,-4.15,W,{solid:!0,uvScale:0}),t.box("int",.1,1.45,2.35,-6.42,nt+1.68,2.85,L,{uvScale:0}),t.box("int",1.95,1.35,.08,-1.25,nt+1.72,4.22,P,{uvScale:0}),t.box("int",1.35,1.05,.08,-3.95,nt+1.78,-.88,k,{uvScale:0}),t.box("int",2.05,.88,.96,-4.15,nt+.44,2.55,N,{solid:!0,uvScale:0}),t.box("int",1.75,.88,.9,-1.55,nt+.44,1.45,N,{solid:!0,uvScale:0}),t.box("int",.56,1.48,.75,-6.12,nt+.74,4.35,w,{solid:!0,uvScale:0}),t.box("int",.56,1.48,.75,-6.12,nt+.74,-.15,w,{solid:!0,uvScale:0}),t.box("int",.14,A,3.15,.65,J,.75,g,{solid:!0}),t.box("int",1.55,.36,2.1,2.75,nt+.22,.65,X,{solid:!0,uvScale:0}),t.box("int",1.25,1.15,.5,3.75,nt+.58,-.45,D,{solid:!0,uvScale:0}),t.stairRun("int",{x0:3.1,z0:-3.05,x1:-1.1,z1:-3.05,y0:nt+.04,y1:st+.04,width:1.18,steps:14,treadMat:c,stringerMat:l,railMat:c,railLeft:!0,railRight:!1,closedRisers:!1,guardLeft:!0,guardRight:!1});const ot=ct-st,dt=st+ot*.5;t.box("int",11,.16,6.8,-1.1,st-.06,1,h),t.box("int",5.46,.16,1.44,-3.87,st-.06,-3.1,h),t.box("int",1.22,.16,1.44,3.8,st-.06,-3.1,h),t.box("int",4.8,.16,.9,-4.2,st-.06,4.8,E),t.box("int",10.6,.04,4.45,-1.1,st+.03,2.08,E),t.collider(-6.6,4.4,st-.16,st+.02,-2.38,4.4),t.collider(-6.6,-1.14,st-.16,st+.02,-3.8,-2.38),t.collider(3.2,4.4,st-.16,st+.02,-3.8,-2.38),t.collider(-6.6,-1.8,st-.16,st+.02,4.4,5.2),t.floor(-6.45,4.32,-2.35,4.35,st+.04),t.floor(-6.45,-1.1,-3.72,-2.3,st+.04),t.floor(3.2,4.32,-3.72,-2.3,st+.04),t.floor(-6.45,-1.85,4.25,5.08,st+.04),t.kouranRailing("int",-1.14,-2.38,3.2,-2.38,st,.94,c,.56),t.kouranRailing("int",3.2,-3.72,3.2,-2.38,st,.94,c,.56),t.box("ext",6.2,.16,.96,1.32,st-.04,4.86,h),t.kouranRailing("ext",-1.75,5.28,4.36,5.28,st,.94,l,.52),t.kouranRailing("ext",4.36,4.4,4.36,5.28,st,.94,l,.52),t.floor(-1.68,4.3,4.35,5.22,st+.04),t.box("ext",2.98,.65,.22,-.32,st+.32,4.4,o,{solid:!0}),t.box("ext",2.94,1.98,.06,-.32,st+1.65,4.4,$,{uvScale:0}),t.box("ext",2.98,.42,.22,-.32,st+2.84,4.4,l,{solid:!0}),t.box("ext",1.64,.66,.22,1.95,st+2.72,4.4,l,{solid:!0}),t.box("ext",1.68,.65,.22,3.58,st+.32,4.4,o,{solid:!0}),t.box("ext",1.64,1.98,.06,3.58,st+1.65,4.4,$,{uvScale:0}),t.box("ext",1.68,.42,.22,3.58,st+2.84,4.4,l,{solid:!0}),t.box("ext",4.85,.68,.22,-4.2,st+.34,5.2,o,{solid:!0}),t.box("ext",.85,ot-.68,.22,-6.18,st+1.86,5.2,o,{solid:!0}),t.box("ext",3.16,1.92,.06,-4.2,st+1.64,5.2,$,{uvScale:0}),t.box("ext",3.2,.45,.22,-4.2,st+2.82,5.2,o,{solid:!0}),t.box("ext",.85,ot-.68,.22,-2.22,st+1.86,5.2,o,{solid:!0}),t.box("ext",.22,ot,.9,-1.8,dt,4.8,o,{solid:!0}),t.box("ext",11.05,ot,.22,-1.1,dt,-3.8,o,{solid:!0}),t.box("ext",.22,.72,9.05,-6.6,st+.36,.7,o,{solid:!0}),t.box("ext",.22,ot-.72,4.05,-6.6,st+1.88,-1.78,o,{solid:!0}),t.box("ext",.06,1.88,3.6,-6.6,st+1.66,2.05,$,{uvScale:0}),t.box("ext",.22,.46,3.64,-6.6,st+2.82,2.05,o,{solid:!0}),t.box("ext",.22,ot-.72,1.4,-6.6,st+1.88,4.52,o,{solid:!0}),t.box("ext",.22,.68,8.25,4.4,st+.34,.3,o,{solid:!0}),t.box("ext",.22,ot-.68,3.05,4.4,st+1.86,-2.28,o,{solid:!0}),t.box("ext",.06,1.92,4.2,4.4,st+1.64,1.4,$,{uvScale:0}),t.box("ext",.22,.46,4.25,4.4,st+2.82,1.4,l,{solid:!0}),t.box("ext",.22,ot-.68,.96,4.4,st+1.86,3.94,o,{solid:!0}),t.box("int",3.45,.56,.88,-4.55,st+.28,4.55,x,{solid:!0}),t.box("int",3.3,.22,.74,-4.55,st+.62,4.55,H),t.box("int",1.35,.48,.64,-5.25,st+.88,4.55,B),t.box("int",1.2,.42,.58,-3.75,st+.84,4.52,B),t.box("int",.88,.56,2.85,3.82,st+.28,1.45,x,{solid:!0}),t.box("int",.74,.22,2.7,3.82,st+.62,1.45,H),t.box("int",.62,.45,1.95,3.82,st+.86,1.45,B),t.box("int",1.35,.74,.96,.45,st+.38,1.85,m,{solid:!0,uvScale:0}),t.box("int",2.05,1.95,.52,-4.95,st+.98,-3.45,Y,{solid:!0,uvScale:0}),t.box("int",.54,1.85,1.65,-6.18,st+.94,-1.75,U,{solid:!0,uvScale:0}),t.box("int",1.35,1.05,.08,-2.55,st+1.68,-3.65,K,{uvScale:0}),t.box("int",.75,.82,.75,-4.85,st+.41,-1.15,l,{solid:!0}),t.box("int",.46,.36,.42,-4.85,st+.96,-1.15,Z,{ry:.4}),t.box("int",.75,.82,.75,-4.85,st+.41,.15,l,{solid:!0}),t.box("int",.48,.34,.44,-4.85,st+.96,.15,V,{ry:-.35}),t.stairRun("int",{x0:-2.55,z0:-.85,x1:-2.55,z1:2.95,y0:st+.04,y1:ct+.04,width:1.1,steps:14,treadMat:c,stringerMat:l,railMat:c,railLeft:!0,railRight:!0,closedRisers:!1,guardLeft:!0,guardRight:!0});const lt=et-ct,Et=ct+lt*.5,gt=-4.2,_t=2.8;t.box("int",3.4,.16,4.8,-4.9,ct-.06,2.8,d),t.box("int",1.42,.16,2.2,-2.5,ct-.06,4.1,d),t.collider(-6.6,-3.2,ct-.16,ct+.02,.4,5.2),t.collider(-3.2,-1.8,ct-.16,ct+.02,3.02,5.2),t.floor(-6.45,-3.18,.52,5.08,ct+.04),t.floor(-3.22,-1.92,2.98,5.08,ct+.04),t.kouranRailing("int",-3.2,.48,-3.2,3.02,ct,.94,c,.52);const zt=(xe,se,ge)=>{const he=lt-.78-.42;xe==="z"?(t.box("ext",4.85,.78,.2,ge,ct+.78*.5,se,o,{solid:!0}),t.box("ext",4.85,.42,.2,ge,et-.42*.5,se,o,{solid:!0}),t.box("ext",.72,he,.2,ge-2.06,ct+.78+he*.5,se,o,{solid:!0}),t.box("ext",.72,he,.2,ge+2.06,ct+.78+he*.5,se,o,{solid:!0}),t.box("ext",3.4,he,.06,ge,ct+.78+he*.5,se,j,{uvScale:0}),t.box("ext",.1,he,.12,ge-.85,ct+.78+he*.5,se,a),t.box("ext",.1,he,.12,ge+.85,ct+.78+he*.5,se,a)):(t.box("ext",.2,.78,4.85,se,ct+.78*.5,ge,o,{solid:!0}),t.box("ext",.2,.42,4.85,se,et-.42*.5,ge,o,{solid:!0}),t.box("ext",.2,he,.72,se,ct+.78+he*.5,ge-2.06,o,{solid:!0}),t.box("ext",.2,he,.72,se,ct+.78+he*.5,ge+2.06,o,{solid:!0}),t.box("ext",.06,he,3.4,se,ct+.78+he*.5,ge,j,{uvScale:0}),t.box("ext",.12,he,.1,se,ct+.78+he*.5,ge-.85,a),t.box("ext",.12,he,.1,se,ct+.78+he*.5,ge+.85,a))};zt("z",5.2,gt),zt("z",.4,gt),zt("x",-6.6,_t),zt("x",-1.8,_t);for(const[xe,se]of[[-6.62,5.22],[-1.78,5.22],[-6.62,.38],[-1.78,.38]])t.box("ext",.24,lt+.08,.24,xe,Et,se,l);t.box("ext",5.1,.18,.26,gt,et-.04,5.2,l),t.box("ext",5.1,.18,.26,gt,et-.04,.4,l),t.box("ext",.26,.18,5.1,-6.6,et-.04,_t,l),t.box("ext",.26,.18,5.1,-1.8,et-.04,_t,l),t.cyl("int",.44,.54,.86,8,-4.95,ct+.43,2.75,s),t.box("int",1.25,.1,1.05,-4.95,ct+.9,2.75,s,{solid:!0}),t.box("int",1.05,.03,.84,-4.95,ct+.96,2.75,P,{uvScale:0});for(const xe of[-1,1])for(const se of[-1,1])t.box("int",.14,.18,3.6,gt+xe*1.15,et+.95,_t+se*1.15,c,{ry:Math.atan2(xe,se),rx:-.58});const Mt=.44,At=nt+.72;t.gablePrism("ext",3.7,.72,.22,2.2,nt+.02,5.75,l),t.kawaraSlope("ext",{bottomWidth:2.05,run:2.15,pitch:Mt,ridgeX:2.2,ridgeY:At,ridgeZ:5.15,downslopeYaw:Math.PI*.5,tileMat:O,ribMat:q,rafterMat:c,ribSpacing:.34}),t.kawaraSlope("ext",{bottomWidth:2.05,run:2.15,pitch:Mt,ridgeX:2.2,ridgeY:At,ridgeZ:5.15,downslopeYaw:-Math.PI*.5,tileMat:O,ribMat:q,rafterMat:c,ribSpacing:.34}),t.kawaraRidge("ext",2.2,At+.04,4.25,2.2,At+.04,6.18,ut,ht,{scale:.76,courses:2,oniStart:!1,oniEnd:!0}),t.kawaraSlope("ext",{bottomWidth:9.8,run:2.65,pitch:.42,ridgeX:4.4,ridgeY:st+.92,ridgeZ:-.1,downslopeYaw:Math.PI*.5,tileMat:O,ribMat:q,rafterMat:c,ribSpacing:.38}),t.kawaraSlope("ext",{bottomWidth:14,run:1.55,pitch:.4,ridgeX:0,ridgeY:st+.48,ridgeZ:-3.8,downslopeYaw:Math.PI,tileMat:O,ribMat:q,rafterMat:c,ribSpacing:.38}),t.kawaraSlope("ext",{bottomWidth:5.6,run:.92,pitch:.38,ridgeX:gt,ridgeY:st+.14,ridgeZ:5.16,downslopeYaw:0,tileMat:O,ribMat:q,rafterMat:c,ribSpacing:.34}),t.kawaraSlope("ext",{bottomWidth:10.6,run:.95,pitch:.38,ridgeX:-6.56,ridgeY:st+.14,ridgeZ:.3,downslopeYaw:-Math.PI*.5,tileMat:O,ribMat:q,rafterMat:c,ribSpacing:.38});const kt=.45,Ft=4.9,St=ct+Ft*Math.tan(kt)-.12,Nt=1.8,Ut=.3,Yt=7.2,Q=4.6,yt=Ft*2;t.kawaraSlope("ext",{topWidth:Q,bottomWidth:Yt,run:Ft,pitch:kt,ridgeX:Nt,ridgeY:St,ridgeZ:Ut,downslopeYaw:0,tileMat:O,ribMat:q,rafterMat:c,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:Q,bottomWidth:Yt,run:Ft,pitch:kt,ridgeX:Nt,ridgeY:St,ridgeZ:Ut,downslopeYaw:Math.PI,tileMat:O,ribMat:q,rafterMat:c,ribSpacing:.38});const xt=1.1,bt=St-xt;t.gablePrism("ext",4.4,xt+.14,.22,Nt+Q*.5,bt-.04,Ut,l,{ry:Math.PI*.5}),t.kawaraSlope("ext",{topWidth:4.4,bottomWidth:yt,run:2.3,pitch:.44,ridgeX:Nt+Q*.5,ridgeY:bt,ridgeZ:Ut,downslopeYaw:Math.PI*.5,tileMat:O,ribMat:q,rafterMat:c,ribSpacing:.38}),t.gablePrism("ext",yt-.8,St-ct+.06,.2,-1.78,ct-.04,Ut,o,{ry:Math.PI*.5}),t.kawaraRidge("ext",-1.78,St+.04,Ut,Nt+Q*.5,St+.04,Ut,ut,ht,{scale:1.05,courses:3,oniStart:!1,oniEnd:!0});const wt=.42,Tt=4.96,Rt=ct+Tt*Math.tan(wt)-.12;t.kawaraSlope("ext",{bottomWidth:5.35,run:Tt,pitch:wt,ridgeX:-4.4,ridgeY:Rt,ridgeZ:.36,downslopeYaw:Math.PI,tileMat:O,ribMat:q,rafterMat:c,ribSpacing:.38}),t.kawaraRidge("ext",-7.02,Rt+.04,.34,-1.78,Rt+.04,.34,ut,ht,{scale:.78,courses:1,oniStart:!0,oniEnd:!1});const Zt=.64,me=3.05,ne=me*2,Re=et+me*Math.tan(Zt)-.05;for(const xe of[0,Math.PI*.5,Math.PI,-Math.PI*.5])t.kawaraSlope("ext",{topWidth:.24,bottomWidth:ne,run:me,pitch:Zt,ridgeX:gt,ridgeY:Re,ridgeZ:_t,downslopeYaw:xe,tileMat:O,ribMat:q,rafterMat:c,ribSpacing:.34});const Qe=et-.05;for(const xe of[-1,1])for(const se of[-1,1])t.kawaraRidge("ext",gt+xe*.14,Re+.04,_t+se*.14,gt+xe*(me-.08),Qe+.06,_t+se*(me-.08),ut,ht,{scale:.72,courses:1,oniStart:!1,oniEnd:!0});return t.box("ext",.62,.2,.62,gt,Re+.1,_t,G),t.cyl("ext",.24,.3,.18,10,gt,Re+.28,_t,G),t.cyl("ext",.1,.14,.24,8,gt,Re+.46,_t,G),t.cyl("ext",.03,.16,.34,10,gt,Re+.72,_t,G),t.build({id:"H20",name:"旧黒磯炭鉱・明治技師館（洋和折衷四階望楼邸）",subtitle:"青磁色下見板・3F苔シダ温室・4F角望楼宝形本瓦尖塔",category:"house",builtYear:1891,abandonedYear:1985,stories:4,floorElevations:[mt,nt,st,ct],entryLocal:[2.2,0,7.65],entryLookLocalYaw:0})}function h2(i,e){const t=new Le(i),n=e.getMaterial("ishigaki_cut",{roughness:.92,bumpScale:.07}),r=e.getMaterial("dressed_stone",{roughness:.9,bumpScale:.06}),s=e.getMaterial("aged_timber_planks",{roughness:.92,bumpScale:.06}),o=e.getMaterial("charred_cedar",{roughness:.9,bumpScale:.05}),a=e.getMaterial("white_plaster",{roughness:.92,bumpScale:.04,tint:15854816}),l=e.getMaterial("washi_plaster",{roughness:.91,bumpScale:.03}),c=e.getMaterial("dark_hardwood",{roughness:.84,bumpScale:.04}),u=e.getMaterial("warm_wood_plank",{roughness:.83,bumpScale:.04}),d=e.getMaterial("oak_flooring",{roughness:.8,bumpScale:.03}),h=e.getMaterial("cobblestone",{roughness:.92,bumpScale:.06}),p=e.getMaterial("window_frosted_wood",{roughness:.34,opacity:.36,transparent:!0});e.getMaterial("shoji_sliding_door",{roughness:.88,opacity:.9,transparent:!0});const g=e.getMaterial("carved_wood_lattice",{roughness:.86,bumpScale:.05}),x=e.getMaterial("wood_slat_screen",{roughness:.85,bumpScale:.05}),m=e.getMaterial("indigo_sakura_fabric",{roughness:.92,bumpScale:.02,doubleSide:!0}),f=e.getMaterial("tatami_bordered",{roughness:.92,bumpScale:.04}),M=e.getMaterial("tatami_plain",{roughness:.92,bumpScale:.04}),S=e.getMaterial("tatami_green_border",{roughness:.92,bumpScale:.04}),b=e.getMaterial("red_zabuton",{roughness:.92,bumpScale:.03}),C=e.getMaterial("antique_tansu",{roughness:.78,bumpScale:.04}),y=e.getMaterial("retro_kitchen_unit",{roughness:.78,bumpScale:.03}),R=e.getMaterial("kitchen_cabinet",{roughness:.82,bumpScale:.03}),E=e.getMaterial("floral_futon",{roughness:.92,bumpScale:.03}),v=e.getMaterial("wooden_dresser",{roughness:.82,bumpScale:.03}),_=e.getMaterial("wardrobe_wood",{roughness:.82,bumpScale:.03}),I=e.getMaterial("coir_doormat",{roughness:.96,bumpScale:.06}),N=e.getMaterial("dark_green_chalk",{roughness:.88,bumpScale:.02}),P=e.getMaterial("mine_control_panel",{roughness:.62,metalness:.45,bumpScale:.04}),L=e.getMaterial("mine_valve_pipes",{roughness:.62,metalness:.55,bumpScale:.06}),k=e.getMaterial("office_counter",{roughness:.8,bumpScale:.03}),w=e.getMaterial("file_cabinet",{roughness:.66,metalness:.25}),T=e.getMaterial("notice_board",{roughness:.88,bumpScale:.02}),D=e.getMaterial("cork_board",{roughness:.92,bumpScale:.03}),X=e.getMaterial("woven_carpet_gray",{roughness:.94,bumpScale:.04}),W=e.getMaterial("full_bookcase",{roughness:.84,bumpScale:.04}),Y=e.getMaterial("mossy_wall_patch",{roughness:.94,bumpScale:.06}),U=e.getMaterial("mossy_concrete_stain",{roughness:.94,bumpScale:.06}),K=e.getMaterial("door_rusted_green",{roughness:.74,metalness:.36,bumpScale:.04}),H=e.getMaterial("coarse_canvas",{roughness:.95,bumpScale:.05,doubleSide:!0}),B=e.getMaterial("storage_rack",{roughness:.88,bumpScale:.04}),Z=e.getMaterial("slate_roof_dark",{roughness:.74,metalness:.16,bumpScale:.06,tint:8817812}),V=e.getMaterial("dark_slate",{roughness:.7,metalness:.2,bumpScale:.05,tint:7501952}),$=e.getMaterial("dark_iron_plate",{roughness:.62,metalness:.28,tint:6449264}),j=e.getMaterial("matte_black_metal",{roughness:.54,metalness:.38,tint:5396576}),O=.45,q=3.55,ut=6.5;t.box("ext",20.2,3.65,9,0,O-1.84,0,n),t.box("ext",19.8,2.2,1.45,0,O-1.12,4.92,n),t.box("ext",19.7,.08,1.38,0,O-.02,4.92,h),t.floor(-9.75,9.75,4.15,5.55,O+.04);for(const ot of[-6.5,0,6.5])t.stoneSteps("ext",ot,6.45,5.45,-.1,O,2.25,3,r);for(const ot of[-9.65,-7.85,-5.15,-3.2,-1.25,1.25,3.2,5.15,7.85,9.65])t.box("ext",.28,.22,.28,ot,O+.11,5.48,r),t.box("ext",.16,2.96,.16,ot,O+1.62,5.48,c,{solid:!0});t.box("ext",19.8,.2,.2,0,O+3.06,5.48,c);const ht=q-O,G=O+ht*.5;t.box("int",19.4,.12,8.2,0,O-.04,0,u),t.box("int",2.4,.05,2.5,-6.5,O+.02,2.85,h),t.box("int",4.6,.04,5.4,-5.6,O+.03,-1.35,f),t.box("int",1.1,.03,.68,-6.5,O+.04,3.85,I,{uvScale:0}),t.box("int",6.1,.05,5.2,0,O+.02,1.5,d),t.box("int",4.4,.04,2.9,-.8,O+.03,-2.6,S),t.box("int",1.1,.03,.68,0,O+.04,3.85,I,{uvScale:0}),t.box("int",6.3,.05,3.6,6.5,O+.02,2.25,U),t.box("int",5.8,.04,4.3,6.2,O+.03,-1.85,s),t.floor(-9.68,9.68,-4.08,4.28,O+.04);const mt=(ot,dt,lt)=>{const Et=dt-ot,gt=(ot+dt)*.5;if(t.box("ext",Et,1.18,.24,gt,O+.59,4.2,o,{solid:!0}),lt&&Et>=2.2){const _t=(Et-1.55)*.5;t.box("ext",_t,ht-1.18,.24,ot+_t*.5,O+2.14,4.2,s,{solid:!0}),t.box("ext",1.58,.56,.24,gt,O+2.82,4.2,s,{solid:!0}),t.box("ext",1.54,1.36,.07,gt,O+1.86,4.2,lt,{uvScale:0}),t.box("ext",_t,ht-1.18,.24,dt-_t*.5,O+2.14,4.2,s,{solid:!0})}else t.box("ext",Et,ht-1.18,.24,gt,O+2.14,4.2,s,{solid:!0})};mt(-9.8,-7.4,x),t.box("ext",1.84,.72,.24,-6.5,O+2.74,4.2,s,{solid:!0}),t.box("ext",1.65,.52,.04,-6.5,O+2.16,4.35,m,{uvScale:0}),mt(-5.6,-.9,g),t.box("ext",1.84,.72,.24,0,O+2.74,4.2,s,{solid:!0}),t.box("ext",1.15,.88,.08,-1.65,O+1.72,4.36,T,{uvScale:0}),mt(.9,5.6,p),t.box("ext",1.84,.72,.24,6.5,O+2.74,4.2,Y,{solid:!0}),t.box("ext",.96,2.28,.08,7.62,O+1.14,4.55,K,{ry:.65,uvScale:0}),mt(7.4,9.8,x),t.box("ext",19.65,1.15,.24,0,O+.58,-4.2,o,{solid:!0}),t.box("ext",19.65,ht-1.15,.24,0,O+2.12,-4.2,s,{solid:!0}),t.box("ext",.24,ht,8.45,-9.8,G,0,s,{solid:!0}),t.box("ext",.24,ht,8.45,9.8,G,0,Y,{solid:!0}),t.box("int",.2,ht,8.2,-3.2,G,0,l,{solid:!0}),t.box("int",.2,ht,8.2,3.2,G,0,Y,{solid:!0}),t.box("int",1.45,.36,.88,-5.55,O+.2,-1.15,c,{solid:!0}),t.box("int",.6,.07,.6,-5.55,O+.07,-1.95,b,{uvScale:0}),t.box("int",.6,.07,.6,-5.55,O+.07,-.35,b,{uvScale:0}),t.box("int",1.75,.92,.62,-4.75,O+.46,-3.78,y,{solid:!0,uvScale:0}),t.box("int",.54,1.45,1.35,-3.55,O+.74,1.25,C,{solid:!0,uvScale:0}),t.stairRun("int",{x0:-8.75,z0:2.15,x1:-8.75,z1:-1.8,y0:O+.04,y1:q+.04,width:1.08,steps:14,treadMat:c,stringerMat:c,railMat:u,railLeft:!1,railRight:!0,closedRisers:!0,guardLeft:!1,guardRight:!0}),t.box("int",.05,1.47,2.37,-3.07,O+1.65,1.35,c),t.box("int",.06,1.35,2.25,-3.03,O+1.65,1.35,N,{uvScale:0}),t.box("int",1.45,1.65,.56,-2.05,O+.84,-3.72,P,{solid:!0,uvScale:0}),t.box("int",1.65,.82,.76,-1.35,O+.41,1.25,k,{solid:!0,uvScale:0}),t.box("int",1.72,.06,.82,-1.35,O+.85,1.25,u,{solid:!0}),t.box("int",.56,1.48,.74,-2.65,O+.74,3.25,w,{solid:!0,uvScale:0}),t.box("int",1.25,.96,.08,.15,O+1.68,-4.04,D,{uvScale:0}),t.stairRun("int",{x0:2.25,z0:2.15,x1:2.25,z1:-1.8,y0:O+.04,y1:q+.04,width:1.08,steps:14,treadMat:c,stringerMat:c,railMat:u,railLeft:!0,railRight:!1,closedRisers:!1,guardLeft:!0,guardRight:!1}),t.box("int",.1,ht-.1,7.6,3.34,G,0,Y),t.box("int",.54,1.75,1.55,3.68,O+.88,-2.45,B,{solid:!0,uvScale:0}),t.box("int",1.25,1.05,.52,4.95,O+.54,-3.55,v,{solid:!0,rz:.1,uvScale:0}),t.box("int",1.45,.78,1.15,4.55,O+.4,.85,H,{solid:!0}),t.box("int",.54,1.8,1.25,3.65,O+.92,2.75,R,{solid:!0,uvScale:0}),t.stairRun("int",{x0:8.75,z0:2.15,x1:8.75,z1:-1.8,y0:O+.04,y1:q+.04,width:1.08,steps:14,treadMat:s,stringerMat:c,railMat:s,railLeft:!0,railRight:!1,closedRisers:!1,guardLeft:!0,guardRight:!1});const nt=ut-q,st=q+nt*.5;t.box("int",19.6,.16,2.34,0,q-.06,-3.03,u),t.box("int",19.6,.16,1.96,0,q-.06,3.22,u),t.box("int",9.58,.16,4.14,-3.25,q-.06,.2,u),t.box("int",4.92,.16,4.14,5.58,q-.06,.2,s),t.box("int",4.6,.04,6.2,-5.6,q+.03,.6,M),t.box("int",4.4,.04,6.2,-.8,q+.03,.6,X),t.collider(-9.8,9.8,q-.16,q+.02,-4.2,-1.86),t.collider(-9.8,9.8,q-.16,q+.02,2.26,4.2),t.collider(-8.04,1.54,q-.16,q+.02,-1.86,2.26),t.collider(3.12,8.04,q-.16,q+.02,-1.86,2.26),t.floor(-9.68,9.68,-4.08,-1.8,q+.04),t.floor(-9.68,9.68,2.22,4.15,q+.04),t.floor(-8.02,1.52,-1.86,2.26,q+.04),t.floor(3.14,8.02,-1.86,2.26,q+.04),t.kouranRailing("int",-8.04,-1.84,-8.04,2.26,q,.94,c,.56),t.kouranRailing("int",-9.68,2.26,-8.04,2.26,q,.94,c,.5),t.kouranRailing("int",1.54,-1.84,1.54,2.26,q,.94,c,.56),t.kouranRailing("int",1.54,2.26,3.12,2.26,q,.94,c,.5),t.kouranRailing("int",8.04,-1.84,8.04,2.26,q,.94,c,.56),t.kouranRailing("int",8.04,2.26,9.68,2.26,q,.94,c,.5),t.box("ext",19.55,.16,1.14,0,q-.04,4.76,u),t.kouranRailing("ext",-9.72,5.28,9.72,5.28,q,.94,c,.58),t.kouranRailing("ext",-9.72,4.2,-9.72,5.28,q,.94,c,.52),t.kouranRailing("ext",9.72,4.2,9.72,5.28,q,.94,c,.52),t.floor(-9.62,9.62,4.12,5.22,q+.04);const ct=(ot,dt)=>{t.box("ext",dt-ot,nt,.22,(ot+dt)*.5,st,4.2,a,{solid:!0})};ct(-9.8,-7.3),t.box("ext",1.64,.68,.22,-6.5,q+2.61,4.2,a,{solid:!0}),ct(-5.7,-.8),t.box("ext",1.64,.68,.22,0,q+2.61,4.2,a,{solid:!0}),ct(.8,5.7),t.box("ext",1.64,.68,.22,6.5,q+2.61,4.2,a,{solid:!0}),ct(7.3,9.8);for(const ot of[-9.82,-7.32,-5.68,-3.2,-.82,.82,3.2,5.68,7.32,9.82])t.box("ext",.16,nt+.06,.26,ot,st,4.22,c);t.box("ext",19.65,nt,.22,0,st,-4.2,a,{solid:!0}),t.box("ext",.22,nt,8.45,-9.8,st,0,a,{solid:!0}),t.box("ext",.22,nt,8.45,9.8,st,0,Y,{solid:!0});for(const ot of[-3.2,3.2])t.box("int",.18,nt,.52,ot,st,-3.95,l,{solid:!0}),t.box("int",.18,.68,1.6,ot,q+2.61,-2.92,l,{solid:!0}),t.box("int",.18,nt,6.38,ot,st,1.02,l,{solid:!0});t.box("int",1.45,.34,2.05,-6.35,q+.21,.2,E,{solid:!0,uvScale:0}),t.box("int",1.45,.34,2.05,-4.55,q+.21,.2,E,{solid:!0,uvScale:0}),t.box("int",1.25,1.15,.48,-5.45,q+.58,-3.82,v,{solid:!0,uvScale:0}),t.box("int",1.85,1.95,.52,-1.65,q+.98,-3.82,W,{solid:!0,uvScale:0}),t.box("int",.52,1.65,1.55,-2.82,q+.84,.35,L,{solid:!0,uvScale:0}),t.box("int",1.15,.42,1.15,-.55,q+.22,.45,c,{solid:!0}),t.box("int",.56,1.85,1.35,3.62,q+.94,.65,_,{solid:!0,uvScale:0}),t.box("int",2.25,2.15,.05,5.55,q+1.85,-1.45,H,{uvScale:0}),t.box("int",1.35,.46,.72,6.15,q+.24,.95,s,{solid:!0,ry:.35}),t.kawaraSlope("ext",{bottomWidth:20.6,run:1.72,pitch:.34,ridgeX:0,ridgeY:q+.14,ridgeZ:4.18,downslopeYaw:0,tileMat:Z,ribMat:V,rafterMat:c,ribSpacing:.4});const et=.46,tt=5.45,F=ut+tt*Math.tan(et)-.1,A=21.2,J=F-ut+.1;return t.gablePrism("ext",8.5,J,.24,-9.8,ut-.04,0,a,{ry:Math.PI*.5}),t.gablePrism("ext",8.5,J,.24,9.8,ut-.04,0,Y,{ry:Math.PI*.5}),t.kawaraSlope("ext",{bottomWidth:A,run:tt,pitch:et,ridgeX:0,ridgeY:F,ridgeZ:0,downslopeYaw:0,tileMat:Z,ribMat:V,rafterMat:c,ribSpacing:.4}),t.kawaraSlope("ext",{bottomWidth:A,run:tt,pitch:et,ridgeX:0,ridgeY:F,ridgeZ:0,downslopeYaw:Math.PI,tileMat:Z,ribMat:V,rafterMat:c,ribSpacing:.4}),t.kawaraRidge("ext",-A*.5+.06,F+.04,0,A*.5-.06,F+.04,0,$,j,{scale:1.16,courses:3,oniStart:!0,oniEnd:!0}),t.build({id:"H21",name:"第一坑夫長屋（19.6m三戸連棟炭住長屋）",subtitle:"全3戸個別間取り＆階段・2F通し高欄回廊・21m連続本瓦大屋根",category:"house",builtYear:1893,abandonedYear:1985,stories:2,floorElevations:[O,q],entryLocal:[0,0,7.6],entryLookLocalYaw:0})}function f2(i,e){const t=new Le(i),n=e.getMaterial("ishigaki_cut",{roughness:.92,bumpScale:.07}),r=e.getMaterial("dressed_stone",{roughness:.9,bumpScale:.06}),s=e.getMaterial("old_red_brick",{roughness:.9,bumpScale:.06}),o=e.getMaterial("horizontal_wood_siding",{roughness:.89,bumpScale:.05}),a=e.getMaterial("ivory_plaster",{roughness:.91,bumpScale:.04,tint:16052194}),l=e.getMaterial("charred_cedar",{roughness:.92,bumpScale:.05}),c=e.getMaterial("dark_hardwood",{roughness:.84,bumpScale:.04}),u=e.getMaterial("parquet_floor",{roughness:.78,bumpScale:.03}),d=e.getMaterial("oak_flooring",{roughness:.82,bumpScale:.03}),h=e.getMaterial("warm_wood_plank",{roughness:.84,bumpScale:.04}),p=e.getMaterial("tatami_bordered",{roughness:.92,bumpScale:.04}),g=e.getMaterial("vintage_rug_red",{roughness:.93,bumpScale:.03}),x=e.getMaterial("frosted_grid_window",{roughness:.35,opacity:.44,transparent:!0}),m=e.getMaterial("shoji_sliding_door",{roughness:.88,opacity:.88,transparent:!0}),f=e.getMaterial("island_map_sign",{roughness:.82,bumpScale:.02}),M=e.getMaterial("chalkboard",{roughness:.88,bumpScale:.02}),S=e.getMaterial("notice_board",{roughness:.88,bumpScale:.02}),b=e.getMaterial("office_counter",{roughness:.8,bumpScale:.03}),C=e.getMaterial("file_cabinet",{roughness:.66,metalness:.35}),y=e.getMaterial("full_bookcase",{roughness:.84,bumpScale:.04}),R=e.getMaterial("antique_tansu",{roughness:.78,bumpScale:.04}),E=e.getMaterial("red_zabuton",{roughness:.92,bumpScale:.03}),v=e.getMaterial("floral_futon",{roughness:.93,bumpScale:.03}),_=e.getMaterial("cardboard_boxes",{roughness:.92,bumpScale:.04}),I=e.getMaterial("black_volcanic_gravel",{roughness:.96,bumpScale:.06}),N=e.getMaterial("dark_slate",{roughness:.74,metalness:.16,bumpScale:.06,tint:11187390}),P=e.getMaterial("slate_roof_dark",{roughness:.7,metalness:.22,bumpScale:.05}),L=e.getMaterial("glazed_brown_brick",{roughness:.56,metalness:.16,bumpScale:.05,tint:12217164}),k=e.getMaterial("old_red_brick",{roughness:.6,metalness:.16,bumpScale:.05,tint:9719350}),w=e.getMaterial("dark_iron_plate",{roughness:.64,metalness:.28}),T=e.getMaterial("matte_black_metal",{roughness:.56,metalness:.34}),D=.5,X=3.6,W=6.65,Y=9.65,U=12.15;t.box("ext",10.6,2.4,6.2,0,D-1.22,-1.2,n),t.box("ext",10.6,.32,3.6,0,D-.18,3.6,c);for(const nt of[-4.9,-2.45,0,2.45,4.9])t.box("ext",.28,5.4,.28,nt,D-2.85,5.15,l),t.box("ext",.26,4.4,.26,nt,D-2.35,3.35,l),t.box("ext",.16,.2,2,nt,D-1.65,4.25,l),t.box("ext",.16,.2,2,nt,D-3.25,4.25,l);for(const nt of[-3.68,-1.22,1.22,3.68])t.box("ext",2.65,.16,.16,nt,D-1.55,5.15,l,{rz:.48}),t.box("ext",2.65,.16,.16,nt,D-1.55,5.15,l,{rz:-.48}),t.box("ext",2.65,.16,.16,nt,D-3.15,5.15,l,{rz:.48});t.stoneSteps("ext",.9,6.35,5.35,-.35,D,2.2,4,r),t.kouranRailing("ext",-5.18,5.32,-.32,5.32,D,.94,c,.56),t.kouranRailing("ext",2.12,5.32,5.18,5.32,D,.94,c,.56),t.kouranRailing("ext",-5.18,4.1,-5.18,5.32,D,.94,c,.56),t.kouranRailing("ext",5.18,4.1,5.18,5.32,D,.94,c,.56),t.box("ext",1.15,15.2,1.45,5.32,7.1,-.35,s),t.box("ext",1.32,.34,1.62,5.32,14.65,-.35,n),t.box("ext",1.24,.24,1.54,5.32,14.92,-.35,s);const K=X-D,H=D+K*.5;t.box("int",10.2,.1,8,0,D-.03,0,u),t.box("int",4.6,.03,4.2,1.65,D+.03,-.45,g),t.floor(-5.05,5.05,-3.95,5.35,D+.04),t.box("ext",5.35,K,.22,-2.62,H,4.1,o,{solid:!0}),t.box("ext",1.65,.8,.22,.9,D+2.7,4.1,o,{solid:!0}),t.box("ext",3.55,K,.22,3.48,H,4.1,o,{solid:!0}),t.box("ext",10.55,K,.22,0,H,-4.1,o,{solid:!0}),t.box("ext",.22,K,8.35,-5.2,H,0,o,{solid:!0}),t.box("ext",.22,K,8.35,5.2,H,0,o,{solid:!0}),t.box("int",.85,2.25,1.95,4.68,D+1.12,-.35,s,{solid:!0}),t.box("int",.52,.85,1.15,4.42,D+.42,-.35,I),t.box("int",.98,.16,2.15,4.64,D+1.45,-.35,c),t.box("int",1.75,.76,.95,1.65,D+.4,-.45,c,{solid:!0}),t.box("int",2.2,1.92,.52,1.65,D+.96,-3.65,y,{solid:!0,uvScale:0}),t.stairRun("int",{x0:-4.25,z0:2.05,x1:-4.25,z1:-1.85,y0:D+.04,y1:X+.04,width:1.12,steps:14,treadMat:d,stringerMat:c,railMat:c,railLeft:!1,railRight:!0,guardLeft:!1,guardRight:!0});const B=W-X,Z=X+B*.5;t.box("int",8.75,.16,8.05,.8,X-.06,0,d),t.box("int",1.58,.16,2.15,-4.32,X-.06,-2.98,d),t.box("int",1.58,.16,1.92,-4.32,X-.06,3.08,d),t.box("ext",9.75,.16,1.3,0,X-.04,4.72,h),t.kouranRailing("ext",-4.85,5.34,4.85,5.34,X,.96,c,.56),t.kouranRailing("ext",-4.85,4.1,-4.85,5.34,X,.96,c,.56),t.kouranRailing("ext",4.85,4.1,4.85,5.34,X,.96,c,.56),t.collider(-3.55,5.1,X-.16,X+.02,-4,4),t.collider(-5.1,-3.55,X-.16,X+.02,-4,-1.92),t.collider(-5.1,-3.55,X-.16,X+.02,2.18,4),t.floor(-3.55,5.05,-3.95,3.95,X+.04),t.floor(-5.05,-3.55,-3.95,-1.85,X+.04),t.floor(-5.05,-3.55,2.1,3.95,X+.04),t.floor(-4.75,4.75,3.95,5.26,X+.04),t.box("int",.08,.92,4.08,-3.56,X+.46,.14,c,{solid:!0}),t.box("int",1.52,.92,.08,-4.32,X+.46,2.16,c,{solid:!0}),t.box("ext",5.45,B,.22,-2.52,Z,4.1,a,{solid:!0}),t.box("ext",1.65,.75,.22,1,X+2.68,4.1,a,{solid:!0}),t.box("ext",3.45,B,.22,3.52,Z,4.1,a,{solid:!0}),t.box("ext",10.55,B,.22,0,Z,-4.1,a,{solid:!0}),t.box("ext",.22,B,8.35,-5.2,Z,0,a,{solid:!0}),t.box("ext",.22,B,8.35,5.2,Z,0,a,{solid:!0}),t.box("int",2.4,1.55,.06,1.25,X+1.68,-3.92,f,{uvScale:0}),t.box("int",2,1.25,.06,4.98,X+1.65,-2.45,M,{ry:-Math.PI*.5,uvScale:0}),t.box("int",1.35,.92,.05,4.98,X+1.65,2.25,S,{ry:-Math.PI*.5,uvScale:0}),t.box("int",2.2,.92,.78,1.35,X+.46,-.55,b,{solid:!0,uvScale:0}),t.box("int",.64,1.52,.58,4.45,X+.76,1.05,C,{solid:!0,uvScale:0}),t.box("int",.64,1.52,.58,4.45,X+.76,1.72,C,{solid:!0,uvScale:0}),t.stairRun("int",{x0:-2.65,z0:-1.85,x1:-2.65,z1:2.05,y0:X+.04,y1:W+.04,width:1.12,steps:14,treadMat:d,stringerMat:c,railMat:c,railLeft:!1,railRight:!0,guardLeft:!1,guardRight:!0});const V=Y-W,$=W+V*.5;t.box("int",7.1,.16,8.05,1.58,W-.06,0,p),t.box("int",1.75,.16,8.05,-4.22,W-.06,0,h),t.box("int",1.45,.16,2.08,-2.65,W-.06,-2.98,h),t.box("int",1.45,.16,1.92,-2.65,W-.06,3.05,h),t.box("ext",9.35,.14,1.1,0,W-.04,4.62,h),t.kouranRailing("ext",-4.64,5.14,4.64,5.14,W,.96,c,.56),t.kouranRailing("ext",-4.64,4.1,-4.64,5.14,W,.96,c,.56),t.kouranRailing("ext",4.64,4.1,4.64,5.14,W,.96,c,.56),t.collider(-1.95,5.1,W-.16,W+.02,-4,4),t.collider(-5.1,-3.35,W-.16,W+.02,-4,4),t.collider(-3.35,-1.95,W-.16,W+.02,-4,-1.98),t.collider(-3.35,-1.95,W-.16,W+.02,2.12,4),t.floor(-1.95,5.05,-3.95,3.95,W+.04),t.floor(-5.05,-3.35,-3.95,3.95,W+.04),t.floor(-3.35,-1.95,-3.95,-1.9,W+.04),t.floor(-3.35,-1.95,2.05,3.95,W+.04),t.floor(-4.55,4.55,3.95,5.06,W+.04),t.box("int",.08,.92,4.08,-1.96,W+.46,.06,c,{solid:!0}),t.box("int",.08,.92,4.08,-3.34,W+.46,.06,c,{solid:!0}),t.box("int",1.4,.92,.08,-2.65,W+.46,-1.96,c,{solid:!0}),t.box("ext",5.2,V,.22,-2.65,$,4.1,o,{solid:!0}),t.box("ext",1.85,.72,.22,.85,W+2.64,4.1,o,{solid:!0}),t.box("ext",3.45,V,.22,3.52,$,4.1,o,{solid:!0}),t.box("ext",1.05,2.22,.06,-.45,W+1.12,3.94,m,{uvScale:0}),t.box("ext",10.55,V,.22,0,$,-4.1,o,{solid:!0}),t.box("ext",.22,V,8.35,-5.2,$,0,o,{solid:!0}),t.box("ext",.22,V,8.35,5.2,$,0,o,{solid:!0}),t.box("int",2.4,.2,.86,3.55,W+.12,-3.55,c,{solid:!0}),t.box("int",1.45,1.42,.54,.65,W+.72,-3.65,R,{solid:!0,uvScale:0}),t.box("int",1.65,.36,.98,1.45,W+.22,.45,c,{solid:!0}),t.box("int",.6,.07,.6,1.45,W+.08,-.45,E,{uvScale:0}),t.box("int",.6,.07,.6,1.45,W+.08,1.35,E,{uvScale:0}),t.box("int",1.55,.14,2.05,3.85,W+.11,1.45,v,{uvScale:0}),t.stairRun("int",{x0:-4.25,z0:2.05,x1:-4.25,z1:-1.85,y0:W+.04,y1:Y+.04,width:1.12,steps:14,treadMat:d,stringerMat:c,railMat:c,railLeft:!1,railRight:!0,guardLeft:!1,guardRight:!0});const j=U-Y,O=Y+j*.5;t.box("int",8.2,.16,7.25,.52,Y-.06,0,h),t.box("int",1.3,.16,1.72,-4.18,Y-.06,-2.76,h),t.box("int",1.3,.16,1.5,-4.18,Y-.06,2.88,h),t.collider(-3.55,4.6,Y-.16,Y+.02,-3.6,3.6),t.collider(-4.8,-3.55,Y-.16,Y+.02,-3.6,-1.92),t.collider(-4.8,-3.55,Y-.16,Y+.02,2.18,3.6),t.floor(-3.55,4.5,-3.5,3.5,Y+.04),t.floor(-4.72,-3.55,-3.5,-1.85,Y+.04),t.floor(-4.72,-3.55,2.1,3.5,Y+.04),t.box("int",.08,.9,4.1,-3.56,Y+.45,.14,c,{solid:!0}),t.box("int",1.25,.9,.08,-4.18,Y+.45,2.16,c,{solid:!0});for(const nt of[-3.6,3.6])t.box("ext",1.8,j,.22,-3.95,O,nt,a,{solid:!0}),t.box("ext",5.8,.85,.22,-.15,Y+.42,nt,a,{solid:!0}),t.box("ext",5.8,.42,.22,-.15,Y+2.29,nt,c,{solid:!0}),t.box("ext",5.76,1.24,.06,-.15,Y+1.46,nt,x,{uvScale:0}),t.box("ext",2,j,.22,3.68,O,nt,a,{solid:!0});t.box("ext",.22,j,7.35,-4.8,O,0,a,{solid:!0}),t.box("ext",.22,j,7.35,4.6,O,0,a,{solid:!0});for(const nt of[-2.4,-.4,1.6,3.4])t.box("int",.18,.2,7,nt,U-.14,0,c);t.box("int",9.2,.12,7,-.1,U+.02,0,h),t.collider(-4.75,4.55,U-.1,U+.12,-3.55,3.55),t.box("int",1.75,.82,.85,.85,Y+.42,1.45,c,{solid:!0}),t.box("int",1.45,.92,.82,3.45,Y+.46,-2.45,_,{solid:!0,uvScale:0}),t.box("int",.85,.65,.72,3.4,Y+1.24,-2.42,_,{ry:.24,uvScale:0}),t.kawaraSlope("ext",{bottomWidth:11.2,run:1.45,pitch:.36,ridgeX:0,ridgeY:X+.12,ridgeZ:4.15,downslopeYaw:0,tileMat:N,ribMat:P,eaveMat:w,rafterMat:c,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:9.6,bottomWidth:12.2,run:1.75,pitch:.4,ridgeX:-.1,ridgeY:Y+.24,ridgeZ:3.6,downslopeYaw:0,tileMat:L,ribMat:k,eaveMat:w,rafterMat:c,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:9.6,bottomWidth:12.2,run:1.75,pitch:.4,ridgeX:-.1,ridgeY:Y+.24,ridgeZ:-3.6,downslopeYaw:Math.PI,tileMat:L,ribMat:k,eaveMat:w,rafterMat:c,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:7.3,bottomWidth:10.6,run:1.65,pitch:.4,ridgeX:4.6,ridgeY:Y+.24,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:L,ribMat:k,eaveMat:w,rafterMat:c,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:7.3,bottomWidth:10.6,run:1.65,pitch:.4,ridgeX:-4.8,ridgeY:Y+.24,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:L,ribMat:k,eaveMat:w,rafterMat:c,ribSpacing:.38});const q=.48,ut=4.65,ht=U-.14+ut*Math.tan(q),G=U+1.05;t.kawaraSlope("ext",{topWidth:6,bottomWidth:11.6,run:ut,pitch:q,ridgeX:-.1,ridgeY:ht,ridgeZ:0,downslopeYaw:0,tileMat:N,ribMat:P,eaveMat:w,rafterMat:c,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:6,bottomWidth:11.6,run:ut,pitch:q,ridgeX:-.1,ridgeY:ht,ridgeZ:0,downslopeYaw:Math.PI,tileMat:N,ribMat:P,eaveMat:w,rafterMat:c,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:4.6,bottomWidth:9.3,run:2.85,pitch:q,ridgeX:2.9,ridgeY:G+.12,ridgeZ:0,downslopeYaw:Math.PI*.5,tileMat:N,ribMat:P,eaveMat:w,rafterMat:c,ribSpacing:.38}),t.kawaraSlope("ext",{topWidth:4.6,bottomWidth:9.3,run:2.85,pitch:q,ridgeX:-3.1,ridgeY:G+.12,ridgeZ:0,downslopeYaw:-Math.PI*.5,tileMat:N,ribMat:P,eaveMat:w,rafterMat:c,ribSpacing:.38}),t.gablePrism("ext",4.6,ht-G,.22,2.85,G,0,a,{ry:Math.PI*.5}),t.gablePrism("ext",4.6,ht-G,.22,-3.05,G,0,a,{ry:Math.PI*.5});const mt=U-.12;return t.kawaraRidge("ext",-3.1,G+.12,2.3,-5.85,mt,4.6,w,T,{scale:.74,oniEnd:!0}),t.kawaraRidge("ext",2.9,G+.12,2.3,5.65,mt,4.6,w,T,{scale:.74,oniEnd:!0}),t.kawaraRidge("ext",-3.1,G+.12,-2.3,-5.85,mt,-4.6,w,T,{scale:.74,oniEnd:!0}),t.kawaraRidge("ext",2.9,G+.12,-2.3,5.65,mt,-4.6,w,T,{scale:.74,oniEnd:!0}),t.box("ext",3.6,.58,1.15,-.1,ht+.14,0,a),t.kawaraSlope("ext",{bottomWidth:4.3,run:1.05,pitch:.44,ridgeX:-.1,ridgeY:ht+.88,ridgeZ:0,downslopeYaw:0,tileMat:L,ribMat:k,eaveMat:w,rafterMat:c,ribSpacing:.34}),t.kawaraSlope("ext",{bottomWidth:4.3,run:1.05,pitch:.44,ridgeX:-.1,ridgeY:ht+.88,ridgeZ:0,downslopeYaw:Math.PI,tileMat:L,ribMat:k,eaveMat:w,rafterMat:c,ribSpacing:.34}),t.kawaraRidge("ext",-2.25,ht+.92,0,2.05,ht+.92,0,w,T,{scale:1.15,oniStart:!0,oniEnd:!0,courses:3}),t.build({id:i.id,name:"黒岩監督邸（高台・懸造り四階洋和館）",subtitle:"明治27年築・急斜面懸造り木柱脚・4層赤煉瓦煙突・黒＆赤茶重層瓦入母屋・四階建",category:"house",builtYear:1894,abandonedYear:1985,stories:4,floorElevations:[D+.04,X+.04,W+.04,Y+.04],entryLocal:[.9,0,7.5]})}function p2(i,e){const t=new Le(i),n=e.getMaterial("ishigaki_cut",{roughness:.92,bumpScale:.07}),r=e.getMaterial("aged_timber_planks",{roughness:.92,bumpScale:.06,tint:12366500}),s=e.getMaterial("charred_cedar",{roughness:.91,bumpScale:.05}),o=e.getMaterial("white_plaster",{roughness:.92,bumpScale:.04,tint:15920868}),a=e.getMaterial("heavy_studded_wood",{roughness:.86,bumpScale:.06}),l=e.getMaterial("red_brick",{roughness:.9,bumpScale:.06}),c=e.getMaterial("old_red_brick",{roughness:.92,bumpScale:.07}),u=e.getMaterial("oxidized_riveted_steel",{roughness:.68,metalness:.55,bumpScale:.05}),d=e.getMaterial("dark_bolted_steel",{roughness:.62,metalness:.6,bumpScale:.05}),h=e.getMaterial("blue_rust_corrugated",{roughness:.72,metalness:.42,bumpScale:.06,doubleSide:!0}),p=e.getMaterial("rusted_corrugated",{roughness:.78,metalness:.36,bumpScale:.06,doubleSide:!0}),g=e.getMaterial("corrugated_zinc_bolts",{roughness:.62,metalness:.5,bumpScale:.05,doubleSide:!0}),x=e.getMaterial("metal_louver_vent",{roughness:.65,metalness:.48,bumpScale:.06}),m=e.getMaterial("cedar_louvers",{roughness:.88,bumpScale:.05}),f=e.getMaterial("diamond_plate",{roughness:.56,metalness:.65,bumpScale:.05}),M=e.getMaterial("hazard_stripes",{roughness:.76,bumpScale:.02}),S=e.getMaterial("dark_hardwood",{roughness:.84,bumpScale:.04}),b=e.getMaterial("matte_black_metal",{roughness:.5,metalness:.72}),C=e.getMaterial("charred_soil",{roughness:.96,bumpScale:.07}),y=e.getMaterial("coal_seam_rock",{roughness:.86,bumpScale:.08}),R=e.getMaterial("metal_grate",{roughness:.6,metalness:.62,bumpScale:.06}),E=e.getMaterial("drain_grate",{roughness:.62,metalness:.58,bumpScale:.06}),v=e.getMaterial("fire_extinguisher_box",{roughness:.54,metalness:.25}),_=e.getMaterial("scrap_metal_patch",{roughness:.72,metalness:.52,bumpScale:.06}),I=e.getMaterial("tree_bark",{roughness:.94,bumpScale:.07}),N=e.getMaterial("dark_damp_stone",{roughness:.84,bumpScale:.07}),P=e.getMaterial("pegboard",{roughness:.84,bumpScale:.04}),L=e.getMaterial("storage_rack",{roughness:.88,bumpScale:.04}),k=e.getMaterial("oak_flooring",{roughness:.8,bumpScale:.03}),w=e.getMaterial("warm_wood_plank",{roughness:.83,bumpScale:.04}),T=e.getMaterial("woven_screen_brown",{roughness:.9,bumpScale:.05}),D=e.getMaterial("coir_doormat",{roughness:.96,bumpScale:.06}),X=e.getMaterial("tatami_green_border",{roughness:.92,bumpScale:.04}),W=e.getMaterial("tatami_bordered",{roughness:.92,bumpScale:.04}),Y=e.getMaterial("shoji_sliding_door",{roughness:.88,opacity:.9,transparent:!0}),U=e.getMaterial("antique_tansu",{roughness:.78,bumpScale:.04}),K=e.getMaterial("red_zabuton",{roughness:.92,bumpScale:.03}),H=e.getMaterial("retro_kitchen_unit",{roughness:.78,bumpScale:.03}),B=e.getMaterial("kitchen_cabinet",{roughness:.82,bumpScale:.03}),Z=e.getMaterial("blue_bath_tile",{roughness:.48,bumpScale:.03}),V=e.getMaterial("floral_futon",{roughness:.92,bumpScale:.03}),$=e.getMaterial("wardrobe_wood",{roughness:.82,bumpScale:.03}),j=e.getMaterial("wooden_dresser",{roughness:.82,bumpScale:.03}),O=e.getMaterial("chalkboard",{roughness:.88,bumpScale:.02}),q=e.getMaterial("file_cabinet",{roughness:.66,metalness:.25}),ut=e.getMaterial("full_bookcase",{roughness:.84,bumpScale:.04}),ht=e.getMaterial("cork_board",{roughness:.92,bumpScale:.03}),G=e.getMaterial("window_frosted_wood",{roughness:.34,opacity:.36,transparent:!0}),mt=e.getMaterial("slate_roof_dark",{roughness:.76,metalness:.16,bumpScale:.06,tint:7633538}),nt=e.getMaterial("dark_slate",{roughness:.72,metalness:.2,bumpScale:.05,tint:6449264}),st=e.getMaterial("dark_iron_plate",{roughness:.64,metalness:.28,tint:5659748}),ct=e.getMaterial("matte_black_metal",{roughness:.54,metalness:.38,tint:4935768}),et=.4,tt=3.55,F=6.55;t.box("ext",13.3,3.45,9.2,0,et-1.74,0,n),t.box("ext",3.2,1.45,1.45,-3.1,et-.74,5.05,n),t.box("ext",2.9,.08,1.45,-3.1,et-.02,5.05,f),t.box("ext",2.8,.12,.24,-3.1,et+.04,4.42,M,{uvScale:0}),t.stoneSteps("ext",-3.1,6.05,5.15,-.08,et,2.75,3,f),t.floor(-4.5,-1.7,4.3,5.25,et+.04),t.stoneSteps("ext",3.5,5.55,4.55,-.08,et,1.95,3,n),t.floor(2.5,4.5,4.3,4.7,et+.04);const A=-6.65,J=-.8;t.box("ext",1.85,3.4,1.85,A,-1.2,J,n,{solid:!0}),t.box("ext",1.65,3.6,1.65,A,2.2,J,c,{solid:!0}),t.box("ext",1.42,3.4,1.42,A,5.65,J,l,{solid:!0}),t.box("ext",1.2,3.1,1.2,A,8.85,J,l,{solid:!0}),t.box("ext",1.06,1.65,1.06,A,11.15,J,c,{solid:!0}),t.box("ext",1.34,.28,1.34,A,12.02,J,c);for(const Rt of[4.1,7.2,10.2]){const Zt=Rt<5?1.56:Rt<8?1.32:1.16;t.box("ext",Zt,.14,Zt,A,Rt,J,d)}t.box("ext",1.75,2,6.7,-7.22,-.8,-.65,n);for(const Rt of[-3.75,-2.05,.65,2.45])t.box("ext",.16,2.85,.16,-7.85,et+1.32,Rt,r,{solid:!0});t.box("ext",1.76,.08,2.25,-7.42,et+2.92,-2.75,h,{rz:.24}),t.box("ext",1.76,.08,2.25,-7.42,et+2.92,-.55,p,{rz:.24}),t.box("ext",1.76,.08,2.3,-7.42,et+2.92,1.68,g,{rz:.24}),t.box("ext",1.05,.72,1.85,-7.15,et+.32,1.45,y,{solid:!0}),t.box("ext",.85,.56,1.45,-7.1,et+.25,-2.65,_,{solid:!0});const ot=tt-et,dt=et+ot*.5,lt=F-et,Et=et+lt*.5;t.box("int",7,.12,8.7,-2.9,et-.04,0,C),t.box("int",1.15,.04,5.4,-2.15,et+.02,-.5,E),t.box("int",1.35,.04,1.85,-4.35,et+.02,-.8,R),t.box("int",5.8,.12,8.7,3.5,et-.04,0,w),t.box("int",5.3,.04,4.7,3.45,et+.03,1.75,X),t.box("int",2.2,.05,2.5,5.2,et+.02,-3,Z),t.box("int",1.1,.03,.68,3.5,et+.04,4.02,D,{uvScale:0}),t.floor(-6.25,6.25,-4.25,4.42,et+.04),t.box("ext",2.04,lt,.28,-5.4,Et,4.4,r,{solid:!0}),t.box("ext",2.64,lt-2.68,.28,-3.1,et+2.68+(lt-2.68)*.5,4.4,r,{solid:!0}),t.box("ext",2.44,lt,.28,-.6,Et,4.4,r,{solid:!0}),t.box("ext",1.85,1.35,.32,-5.4,et+.72,4.42,u),t.box("ext",2.15,1.35,.32,-.6,et+.72,4.42,u),t.box("ext",2.2,.95,.16,-3.1,tt+1.75,4.5,x,{uvScale:0}),t.box("ext",1.26,2.62,.12,-4.85,et+1.31,4.92,u,{ry:-.78,solid:!0,uvScale:0}),t.box("ext",1.26,2.62,.12,-1.35,et+1.31,4.92,a,{ry:.78,solid:!0,uvScale:0}),t.box("ext",.28,lt,8.85,-6.4,Et,0,r,{solid:!0}),t.box("ext",.32,1.4,8.85,-6.42,et+.7,0,u),t.box("ext",.14,1.05,2.85,-6.5,tt+1.65,2.15,x,{uvScale:0}),t.box("ext",7.05,ot+.95,.28,-2.9,et+(ot+.95)*.5,-4.4,r,{solid:!0}),t.box("ext",1.95,lt-ot-.95,.28,-5.44,tt+1.98,-4.4,r,{solid:!0}),t.box("ext",3,.55,.28,-2.98,F-.28,-4.4,r,{solid:!0}),t.box("ext",2.96,1.5,.06,-2.98,tt+1.7,-4.4,G,{uvScale:0}),t.box("ext",2.15,lt-ot-.95,.28,-.42,tt+1.98,-4.4,r,{solid:!0}),t.box("ext",2.14,1.25,.26,1.65,et+.62,4.4,s,{solid:!0}),t.box("ext",2.14,ot-1.25,.26,1.65,et+2.2,4.4,o,{solid:!0}),t.box("ext",1.64,.78,.26,3.5,et+2.76,4.4,o,{solid:!0}),t.box("ext",2.14,1.25,.26,5.35,et+.62,4.4,s,{solid:!0}),t.box("ext",2.14,ot-1.25,.26,5.35,et+2.2,4.4,o,{solid:!0}),t.box("ext",5.85,1.25,.26,3.5,et+.62,-4.4,s,{solid:!0}),t.box("ext",5.85,ot-1.25,.26,3.5,et+2.2,-4.4,o,{solid:!0}),t.box("ext",.26,1.15,8.85,6.4,et+.58,0,s,{solid:!0}),t.box("ext",.26,ot-1.15,3.85,6.4,et+2.15,-2.5,o,{solid:!0}),t.box("ext",.26,.58,2.7,6.4,et+2.86,.8,o,{solid:!0}),t.box("ext",.06,1.42,2.66,6.4,et+1.86,.8,Y,{uvScale:0}),t.box("ext",.26,ot-1.15,2.3,6.4,et+2.15,3.28,o,{solid:!0}),t.box("int",.22,ot,6.68,.6,dt,-1.08,c,{solid:!0}),t.box("int",.22,.72,1.55,.6,et+2.79,3,c,{solid:!0}),t.box("int",.22,ot,.68,.6,dt,4.08,c,{solid:!0}),t.box("int",1.75,1.05,2.05,-5.32,et+.52,-.8,l,{solid:!0}),t.box("int",1.65,.65,.34,-5.32,et+1.38,-1.68,c,{solid:!0}),t.box("int",1.65,.65,.34,-5.32,et+1.38,.08,c,{solid:!0}),t.box("int",.95,.24,1.18,-5.25,et+1.12,-.8,y),t.box("int",1.92,.42,2.18,-5.22,et+2.38,-.8,d),t.box("int",1.48,.75,1.64,-5.44,et+2.96,-.8,u),t.box("int",1.04,1.15,1.16,-5.68,et+3.9,-.8,d),t.box("int",.92,.72,.92,-6.02,et+4.45,-.8,u),t.box("int",1.15,.88,1.05,-5.25,et+.44,1.08,r,{solid:!0}),t.cyl("int",.05,.05,.65,6,-4.42,et+.65,1.08,b,{rz:Math.PI*.5}),t.cyl("int",.38,.44,.66,10,-3.35,et+.33,-.65,I),t.collider(-3.78,-2.92,et,et+1.05,-1.08,-.22),t.box("int",.32,.22,.72,-3.35,et+.78,-.65,b),t.box("int",.22,.14,.32,-3.35,et+.82,-.2,b),t.box("int",.72,.7,1.05,-3.35,et+.35,1.15,N,{solid:!0}),t.box("int",1.45,.72,1.25,-5.45,et+.36,3.1,y,{solid:!0}),t.box("int",.08,1.45,2.35,.44,et+1.68,-.65,P,{uvScale:0}),t.box("int",.52,1.75,1.55,-5.98,et+.88,-3.35,L,{solid:!0,uvScale:0}),t.box("int",.48,.96,1.25,-4.25,et+.48,-3.85,_,{solid:!0}),t.box("int",.36,.82,.24,-1.35,et+.98,4.18,v,{solid:!0,uvScale:0}),t.box("int",1.05,ot,.14,1.12,dt,-.8,o,{solid:!0}),t.box("int",1.8,.72,.14,2.52,et+2.79,-.8,o,{solid:!0}),t.box("int",3,ot,.14,4.9,dt,-.8,o,{solid:!0}),t.box("int",1.55,.38,.96,3.55,et+.2,1.45,S,{solid:!0}),t.box("int",.62,.07,.62,3.55,et+.07,.55,K,{uvScale:0}),t.box("int",.62,.07,.62,3.55,et+.07,2.35,K,{uvScale:0}),t.box("int",.52,1.48,1.45,5.95,et+.75,2.95,U,{solid:!0,uvScale:0}),t.box("int",1.85,.92,.62,2.15,et+.46,-3.98,H,{solid:!0,uvScale:0}),t.box("int",.56,1.85,1.35,1.02,et+.94,-2.55,B,{solid:!0,uvScale:0}),t.box("int",1.55,.66,1.15,5.45,et+.33,-3.55,Z,{solid:!0}),t.stairRun("int",{x0:-.25,z0:2.55,x1:-.25,z1:-1.45,y0:et+.04,y1:tt+.04,width:1.16,steps:14,treadMat:k,stringerMat:d,railMat:d,railLeft:!0,railRight:!1,closedRisers:!1,guardLeft:!0,guardRight:!1});const gt=F-tt,_t=tt+gt*.5;t.box("int",6.95,.18,1.92,-2.88,tt-.07,-3.4,k),t.box("int",3.45,.04,1.3,-3.65,tt+.03,-3.3,R),t.box("int",1.6,.18,1.05,-.18,tt-.07,-1.96,k),t.box("int",6.95,.24,.22,-2.88,tt-.24,-2.5,d),t.collider(-6.35,.6,tt-.18,tt+.02,-4.35,-2.45),t.collider(-.96,.6,tt-.18,tt+.02,-2.45,-1.45),t.floor(-6.22,.65,-4.25,-2.46,tt+.04),t.floor(-.95,.65,-2.48,-1.44,tt+.04),t.kouranRailing("int",-6.26,-2.46,-.96,-2.46,tt,.96,d,.52),t.kouranRailing("int",-.96,-2.46,-.96,-1.46,tt,.96,d,.5),t.box("int",5.8,.16,8.8,3.5,tt-.06,0,k),t.box("int",5.45,.04,4.45,3.5,tt+.03,2,W),t.box("int",5.65,.08,4.65,3.5,F-.08,2,T),t.collider(.6,6.4,tt-.16,tt+.02,-4.4,4.4),t.floor(.6,6.28,-4.28,4.35,tt+.04),t.box("ext",5.45,.16,1.08,3.5,tt-.04,4.94,w),t.kouranRailing("ext",.8,5.42,6.18,5.42,tt,.94,S,.52),t.kouranRailing("ext",.8,4.4,.8,5.42,tt,.94,S,.52),t.kouranRailing("ext",6.18,4.4,6.18,5.42,tt,.94,S,.52),t.floor(.88,6.1,4.32,5.36,tt+.04),t.box("int",.22,gt,.62,.6,_t,-4.1,o,{solid:!0}),t.box("int",.22,.72,1.65,.6,tt+2.64,-3,o,{solid:!0}),t.box("int",.22,gt,6.62,.6,_t,1.1,o,{solid:!0}),t.box("ext",2.08,gt,.22,1.64,_t,4.4,o,{solid:!0}),t.box("ext",1.74,.7,.22,3.5,tt+2.65,4.4,o,{solid:!0}),t.box("ext",2.08,gt,.22,5.36,_t,4.4,o,{solid:!0}),t.box("ext",5.85,gt,.22,3.5,_t,-4.4,o,{solid:!0}),t.box("ext",.22,.94,8.85,6.4,tt+.47,0,o,{solid:!0}),t.box("ext",.22,gt-.94,2.5,6.4,tt+1.97,-3.15,o,{solid:!0}),t.box("ext",.22,.56,2.6,6.4,tt+2.72,-.6,o,{solid:!0}),t.box("ext",.06,1.5,2.56,6.4,tt+1.69,-.6,G,{uvScale:0}),t.box("ext",.22,gt-.94,3.75,6.4,tt+1.97,2.55,o,{solid:!0});for(const Rt of[.64,2.62,4.38,6.42])t.box("ext",.16,gt+.06,.26,Rt,_t,4.42,S);t.box("int",1.68,gt,.14,1.44,_t,-.4,o,{solid:!0}),t.box("int",1.7,.7,.14,3.08,tt+2.65,-.4,o,{solid:!0}),t.box("int",2.52,gt,.14,5.15,_t,-.4,o,{solid:!0}),t.box("int",2.15,1.35,.08,3.55,tt+1.7,-4.22,O,{uvScale:0}),t.box("int",1.25,.98,.08,1.55,tt+1.72,-4.22,ht,{uvScale:0}),t.box("int",.52,1.95,1.65,5.98,tt+.98,-3.25,ut,{solid:!0,uvScale:0}),t.box("int",.56,1.48,.74,5.95,tt+.74,-1.75,q,{solid:!0,uvScale:0}),t.box("int",1.65,.34,2.15,4.85,tt+.21,1.75,V,{solid:!0,uvScale:0}),t.box("int",.56,1.82,1.35,1.05,tt+.92,1.35,$,{solid:!0,uvScale:0}),t.box("int",1.2,1.12,.48,1.55,tt+.56,3.88,j,{solid:!0,uvScale:0});for(const Rt of[-4.6,-2.4,-.4])t.box("int",.22,.26,8.6,Rt,F-.15,0,S),t.box("int",.18,2.15,.18,Rt,F+.96,0,S);t.box("int",6.8,.24,.22,-2.9,F+2.05,0,S),t.kawaraSlope("ext",{bottomWidth:6.2,run:1.25,pitch:.36,ridgeX:3.55,ridgeY:tt+.1,ridgeZ:4.38,downslopeYaw:0,tileMat:mt,ribMat:nt,rafterMat:S,ribSpacing:.38});const zt=.48,Mt=5.45,At=F+Mt*Math.tan(zt)-.1,kt=14.3,Ft=At-F+.12;t.gablePrism("ext",8.9,Ft,.26,6.4,F-.04,0,o,{ry:Math.PI*.5}),t.gablePrism("ext",8.9,Ft,.26,-6.4,F-.04,0,r,{ry:Math.PI*.5}),t.box("ext",.14,.85,1.85,-6.54,F+1.15,0,m,{uvScale:0}),t.box("ext",.14,.85,1.85,6.54,F+1.15,0,m,{uvScale:0}),t.kawaraSlope("ext",{bottomWidth:kt,run:Mt,pitch:zt,ridgeX:0,ridgeY:At,ridgeZ:0,downslopeYaw:0,tileMat:mt,ribMat:nt,rafterMat:S,ribSpacing:.38}),t.kawaraSlope("ext",{bottomWidth:kt,run:Mt,pitch:zt,ridgeX:0,ridgeY:At,ridgeZ:0,downslopeYaw:Math.PI,tileMat:mt,ribMat:nt,rafterMat:S,ribSpacing:.38}),t.kawaraRidge("ext",-kt*.5+.06,At+.04,0,kt*.5-.06,At+.04,0,st,ct,{scale:1.14,courses:3,oniStart:!0,oniEnd:!0});const St=9.5,Nt=2.15,Ut=At-.42,Yt=At+.96,Q=Yt-Ut,yt=Ut+Q*.5;t.box("ext",St,Q,.16,0,yt,Nt*.5,x,{uvScale:.7}),t.box("ext",St,Q,.16,0,yt,-Nt*.5,m,{uvScale:.7}),t.box("ext",.18,Q,Nt,-St*.5,yt,0,s),t.box("ext",.18,Q,Nt,St*.5,yt,0,s);for(const Rt of[-4.75,-2.85,-.95,.95,2.85,4.75])t.box("ext",.14,Q+.08,.22,Rt,yt,Nt*.5+.04,S),t.box("ext",.14,Q+.08,.22,Rt,yt,-Nt*.5-.04,S);const xt=.44,bt=1.62,wt=Yt+bt*Math.tan(xt)-.06,Tt=St+.95;return t.gablePrism("ext",Nt+.1,wt-Yt+.08,.18,-St*.5,Yt-.04,0,s,{ry:Math.PI*.5}),t.gablePrism("ext",Nt+.1,wt-Yt+.08,.18,St*.5,Yt-.04,0,s,{ry:Math.PI*.5}),t.kawaraSlope("ext",{bottomWidth:Tt,run:bt,pitch:xt,ridgeX:0,ridgeY:wt,ridgeZ:0,downslopeYaw:0,tileMat:mt,ribMat:nt,rafterMat:S,ribSpacing:.36}),t.kawaraSlope("ext",{bottomWidth:Tt,run:bt,pitch:xt,ridgeX:0,ridgeY:wt,ridgeZ:0,downslopeYaw:Math.PI,tileMat:mt,ribMat:nt,rafterMat:S,ribSpacing:.36}),t.kawaraRidge("ext",-Tt*.5+.05,wt+.04,0,Tt*.5-.05,wt+.04,0,st,ct,{scale:.88,courses:2,oniStart:!0,oniEnd:!0}),t.build({id:"H23",name:"鉄山鍛冶場（越屋根＆煉瓦大煙突の吹抜二階鍛冶屋）",subtitle:"6.5m吹抜鍛冶工房・2F見下ろし回廊・煙出し越屋根＆12m大煙突",category:"house",builtYear:1885,abandonedYear:1985,stories:2,floorElevations:[et,tt],entryLocal:[-3.1,0,6.45],entryLookLocalYaw:0})}const m2=1750*1750,x2=15625,yl=[{id:"H01",build:Jp},{id:"H02",build:Qp},{id:"H03",build:t2},{id:"H04",build:e2},{id:"H05",build:n2},{id:"H07",build:i2},{id:"H09",build:r2},{id:"H10",build:s2},{id:"H11",build:o2},{id:"H12",build:a2},{id:"H13",build:l2},{id:"H14",build:c2},{id:"H15",build:u2},{id:"H20",build:d2},{id:"H21",build:h2},{id:"H22",build:f2},{id:"H23",build:p2}];function g2(i){const e=new Map;for(let l=0;l<Je.length;l++)e.set(Je[l].id,Je[l]);const t=new fe;t.name="kuroiso_houses_phase4";const n=[],r=new Map;for(let l=0;l<yl.length;l++){const c=yl[l],u=e.get(c.id);if(!u)throw new Error(`Missing PlannedSite for built house ${c.id}`);const d=c.build(u,i);n.push(d),r.set(d.id,d),t.add(d.group)}let s=n.length,o=n.length;return{group:t,structures:n,getById:l=>r.get(l),update:l=>{let c=0,u=0;const d=l.x,h=l.z;for(let p=0;p<n.length;p++){const g=n[p],x=g.position.x-d,m=g.position.z-h,f=x*x+m*m,M=f<=m2;if(g.group.visible!==M&&(g.group.visible=M),M&&(c++,g.interiorGroup)){const S=f<=x2;g.interiorGroup.visible!==S&&(g.interiorGroup.visible=S),S&&u++}}s=c,o=u},getStats:()=>({totalHouses:n.length,visibleHouses:s,visibleInteriors:o})}}const ti=1.68,wl=1.06,b2=5.8,_2=14.5,M2=3.1,El=8.4,v2=22;class S2{position=new it;yaw=Kt.yaw;pitch=-.05;grounded=!0;sprinting=!1;crouching=!1;inIntro=!0;insideStructure=null;camera;domElement;collision;velocityY=0;eyeOffset=ti;bobPhase=0;bobAmount=0;introProgress=0;introRising=!1;inputLocked=!1;keys=new Set;pointerLocked=!1;mouseDragging=!1;lastMouseX=0;lastMouseY=0;touchMoveX=0;touchMoveY=0;touchSprint=!1;touchJumpQueued=!1;onKeyDownBound;onKeyUpBound;onMouseMoveBound;onMouseDownBound;onMouseUpBound;onPointerLockChangeBound;constructor(e,t,n,r=!1){this.camera=e,this.domElement=t,this.collision=n;const s=Math.max(.35,ce(Kt.x,Kt.z));this.position.set(Kt.x,s,Kt.z),this.yaw=Kt.yaw,this.pitch=.04,r?(this.inIntro=!1,this.introProgress=1,this.eyeOffset=ti):(this.inIntro=!0,this.introProgress=0,this.eyeOffset=.34),this.onKeyDownBound=o=>{o.code==="Space"&&this.grounded&&!this.inIntro&&!this.inputLocked&&(this.velocityY=El,this.grounded=!1),o.code==="KeyC"&&(this.crouching=!this.crouching),this.keys.add(o.code)},this.onKeyUpBound=o=>{this.keys.delete(o.code)},this.onMouseMoveBound=o=>{if(!(this.inIntro||this.inputLocked)){if(this.pointerLocked)this.applyLookDelta(o.movementX,o.movementY,.0021);else if(this.mouseDragging){const a=o.clientX-this.lastMouseX,l=o.clientY-this.lastMouseY;this.lastMouseX=o.clientX,this.lastMouseY=o.clientY,this.applyLookDelta(a,l,.0032)}}},this.onMouseDownBound=o=>{if(!(this.inIntro||this.inputLocked)&&o.button===0&&(this.mouseDragging=!0,this.lastMouseX=o.clientX,this.lastMouseY=o.clientY,!this.pointerLocked&&document.pointerLockElement!==this.domElement))try{this.domElement.requestPointerLock?.()}catch{}},this.onMouseUpBound=()=>{this.mouseDragging=!1},this.onPointerLockChangeBound=()=>{this.pointerLocked=document.pointerLockElement===this.domElement},window.addEventListener("keydown",this.onKeyDownBound),window.addEventListener("keyup",this.onKeyUpBound),window.addEventListener("mousemove",this.onMouseMoveBound),this.domElement.addEventListener("mousedown",this.onMouseDownBound),window.addEventListener("mouseup",this.onMouseUpBound),document.addEventListener("pointerlockchange",this.onPointerLockChangeBound),this.syncCamera(0)}setModalOpen(e){this.inputLocked=e,e&&document.pointerLockElement===this.domElement&&document.exitPointerLock?.(),e&&(this.keys.clear(),this.touchMoveX=0,this.touchMoveY=0,this.touchSprint=!1)}beginWakeUp(){this.inIntro&&(this.introRising=!0)}skipIntroImmediately(){this.inIntro=!1,this.introRising=!1,this.introProgress=1,this.eyeOffset=ti,this.syncCamera(0)}setTouchMove(e,t,n){this.touchMoveX=e,this.touchMoveY=t,this.touchSprint=n}triggerTouchJump(){!this.inIntro&&!this.inputLocked&&(this.touchJumpQueued=!0)}toggleCrouch(){return this.crouching=!this.crouching,this.crouching}applyLookDelta(e,t,n=.0036){this.inIntro||this.inputLocked||(this.yaw-=e*n,this.pitch=Math.max(-1.42,Math.min(1.42,this.pitch-t*n)))}teleport(e,t,n,r=-.06,s){const o=s!==void 0?s:Math.max(.35,ce(e,t));this.position.set(e,o,t),this.velocityY=0,this.grounded=!0,this.inIntro=!1,this.introProgress=1,this.eyeOffset=this.crouching?wl:ti,n!==void 0&&(this.yaw=n),this.pitch=r,this.syncCamera(0)}update(e){const t=Math.min(e,.05);if(this.inIntro){if(this.introRising){this.introProgress=Math.min(1,this.introProgress+t/2.2);const E=this.introProgress*this.introProgress*(3-2*this.introProgress);this.eyeOffset=.34+(ti-.34)*E,this.yaw=Kt.yaw+(1-E)*2.15,this.pitch=-.02+Math.sin(E*Math.PI)*.14,this.introProgress>=1&&(this.inIntro=!1,this.eyeOffset=ti,this.yaw=Kt.yaw,this.pitch=.04)}else{const E=performance.now()*.001;this.eyeOffset=.34+Math.sin(E*1.4)*.015,this.yaw=Kt.yaw+2.15+Math.sin(E*.4)*.06,this.pitch=.08+Math.cos(E*.55)*.02}return this.syncCamera(this.inIntro&&!this.introRising?.16:0),this.getState()}let n=0,r=0;this.inputLocked||((this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(n+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(n-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(r+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(r-=1),n+=-this.touchMoveY,r+=this.touchMoveX);const s=Math.hypot(n,r);s>1&&(n/=s,r/=s),this.touchJumpQueued&&(this.touchJumpQueued=!1,this.grounded&&(this.velocityY=El,this.grounded=!1));const o=!this.crouching&&s>.15&&(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.touchSprint);this.sprinting=o;const a=this.crouching?M2:o?_2:b2,l=Math.sin(this.yaw),c=Math.cos(this.yaw),u=-l,d=-c,h=c,p=-l,g=(u*n+h*r)*a*t,x=(d*n+p*r)*a*t,m=this.position.x+g,f=this.position.z+x,M=ce(m,f);let S=m,b=f;M<-.35&&(ce(m,this.position.z)>=-.35?b=this.position.z:ce(this.position.x,f)>=-.35?S=this.position.x:(S=this.position.x,b=this.position.z)),this.velocityY-=v2*t;const C=this.collision.resolveMove(this.position,new it(S,this.position.y,b),this.velocityY,t,this.crouching?1.25:1.72);this.position.copy(C.position),this.grounded=C.grounded,this.insideStructure=C.insideStructure,this.grounded&&this.velocityY<0&&(this.velocityY=0);const y=this.crouching?wl:ti;this.eyeOffset+=(y-this.eyeOffset)*Math.min(1,t*12);const R=Math.hypot(g,x)/Math.max(t,.001);if(this.grounded&&R>.4){const E=o?11.5:7.6;this.bobPhase+=t*E;const v=o?.052:.032;this.bobAmount+=(v-this.bobAmount)*Math.min(1,t*10)}else this.bobAmount*=Math.max(0,1-t*10);return this.syncCamera(0),this.getState()}syncCamera(e){const t=Math.sin(this.bobPhase)*this.bobAmount,n=Math.cos(this.bobPhase*.5)*this.bobAmount*.45;this.camera.position.set(this.position.x+Math.cos(this.yaw)*n,this.position.y+this.eyeOffset+t,this.position.z-Math.sin(this.yaw)*n),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch,this.camera.rotation.z=e}getState(){return{position:this.position,yaw:this.yaw,pitch:this.pitch,grounded:this.grounded,sprinting:this.sprinting,crouching:this.crouching,inIntro:this.inIntro,insideStructure:this.insideStructure}}dispose(){window.removeEventListener("keydown",this.onKeyDownBound),window.removeEventListener("keyup",this.onKeyUpBound),window.removeEventListener("mousemove",this.onMouseMoveBound),this.domElement.removeEventListener("mousedown",this.onMouseDownBound),window.removeEventListener("mouseup",this.onMouseUpBound),document.removeEventListener("pointerlockchange",this.onPointerLockChangeBound)}}const y2=[{label:"漂着浜（目覚め地点）",elev:"2m",x:Kt.x,z:Kt.z,yaw:Kt.yaw,pitch:.04},{label:"見晴らし坂（廃村展望）",elev:"268m",x:gn.x,z:gn.z,yaw:.56,pitch:-.05},{label:"黒磯駐在所・交番予定地 (K01)",elev:"238m",x:ls.x-14,z:ls.z+10,yaw:-.45,pitch:-.02},{label:"よろず商店予定地 (S01)",elev:"252m",x:118,z:325,yaw:.32,pitch:-.02},{label:"購買部みなとや予定地 (S02)",elev:"258m",x:-55,z:-158,yaw:.4,pitch:-.03},{label:"見晴らし村営公園 (P01)",elev:"242m",x:Pn.x+8,z:Pn.z+6,yaw:.65,pitch:-.02},{label:"1890年炭鉱坑口予定地 (M01)",elev:"348m",x:Ze.x+8,z:Ze.z+24,yaw:.12,pitch:.05},{label:"子供たちの山奥秘密基地 (B01)",elev:"376m",x:cn.x-8,z:cn.z+8,yaw:-.68,pitch:.02},{label:"山頂獣道・東尾根中腹",elev:"629m",x:355,z:-1245,yaw:.96,pitch:.12},{label:"★ 黒磯岳 主峰山頂",elev:"865m",x:_e.x-4.5,z:_e.z-5.5,yaw:-2.46,pitch:-.14},{label:"秘境の旧港・建設案 (PORT01)",elev:"2.8m",x:un.x+2.5,z:un.z+2.5,yaw:.785,pitch:-.08}],w2=["北","北東","東","南東","南","南西","西","北西"];function E2(i){const e=(-i*180/Math.PI%360+360)%360,t=Math.round(e/45)%8;return`${w2[t]} ${Math.round(e)}°`}function T2(i,e,t){return Math.hypot(i-_e.x,t-_e.z)<85&&e>800?"黒磯岳 主峰山頂（標高865m）":Math.hypot(i-un.x,t-un.z)<110?"秘境の旧港（建設案・北西入江）":Math.hypot(i-cn.x,t-cn.z)<65?"子供たちの山奥の秘密基地 (B01)":Math.hypot(i-Ze.x,t-Ze.z)<95?"旧黒磯炭鉱 1890 坑口予定地 (M01)":Math.hypot(i-gn.x,t-gn.z)<65?"見晴らし坂（廃村展望カーブ）":Math.hypot(i-Pn.x,t-Pn.z)<42?"見晴らし村営公園 (P01)":t>1950&&e<35?"漂着浜（南端入江）":t>650&&t<=1950?"海岸林道・南山腹斜面":i>-240&&i<280&&t>=-480&&t<=650?"廃村・黒磯村（山腹斜面集落）":i<-300&&t<-1020?"秘境の旧港へのけもの道":t<-420&&i>60&&e>350?"黒磯岳 山頂への獣道":t<-420?"黒磯林道・北山岳地帯":"黒磯島 山岳原生林"}class R2{root;controller;callbacks;builtStructures;structureById=new Map;mapQuickPoints=[];settings;zoneEl;elevEl;compassEl;siteHintEl;telemetryEl;wakeupOverlay;settingsModal;mapModal;touchLayer;touchToggleBtn;mapCanvas;mapBaseImage=null;mapOverlayCanvas;mapOpen=!1;settingsOpen=!1;touchEnabled=!1;lastUiSync=0;MAP_W=220;MAP_H=550;constructor(e,t,n,r,s=!1,o=[]){this.root=e,this.controller=t,this.settings={...n},this.callbacks=r,this.builtStructures=o;for(let a=0;a<o.length;a++)this.structureById.set(o[a].id,o[a]);this.touchEnabled=window.matchMedia("(pointer: coarse)").matches||(navigator.maxTouchPoints??0)>0,this.mapQuickPoints.push(...y2);for(let a=0;a<o.length;a++){const l=o[a],c=l.stories?`${l.stories}F`:"2F";this.mapQuickPoints.push({label:`[${l.id}] ${l.name}`,elev:`${c} · ${Math.round(l.position.y)}m`,x:l.entryPoint.x,z:l.entryPoint.z,yaw:l.entryPoint.lookYaw??l.yaw,pitch:.04,isHouse:!0})}this.renderMarkup(s),this.bindEvents()}renderMarkup(e){const t=this.mapQuickPoints.map((a,l)=>({lm:a,idx:l})).filter(a=>!a.lm.isHouse).map(({lm:a,idx:l})=>`
        <button class="map-tp-btn" data-tp-idx="${l}">
          <span>${a.label}</span>
          <span class="map-tp-elev">${a.elev}</span>
        </button>`).join(""),n=this.mapQuickPoints.map((a,l)=>({lm:a,idx:l})).filter(a=>a.lm.isHouse).map(({lm:a,idx:l})=>`
        <button class="map-tp-btn" style="border-color: rgba(255, 211, 110, 0.35);" data-tp-idx="${l}">
          <span>${a.label}</span>
          <span class="map-tp-elev">${a.elev}</span>
        </button>`).join(""),r=this.builtStructures.length,s=Je.filter(a=>a.category==="house").length,o=Math.max(0,s-r);this.root.innerHTML=`
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
              ※ 残り${o}軒・商業施設2軒・1890年炭鉱内部・KHDR・Shadow Flameは次フェーズにて実装予定。
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
                <div class="legend-item"><span class="legend-swatch" style="background:#a87b58;"></span>民家予定地(${o})</div>
                <div class="legend-item"><span class="legend-swatch" style="background:#f2e7cc;"></span>村道/海岸林道</div>
                <div class="legend-item"><span class="legend-swatch" style="background:#f2a649;"></span>獣道/けもの道</div>
                <div class="legend-item"><span class="legend-swatch" style="background:#e85b48;"></span>商店(2)/交番(1)</div>
                <div class="legend-item"><span class="legend-swatch" style="background:#63c778;"></span>公園/秘密基地</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,this.zoneEl=this.root.querySelector("#hud-zone"),this.elevEl=this.root.querySelector("#hud-elev"),this.compassEl=this.root.querySelector("#hud-compass"),this.siteHintEl=this.root.querySelector("#hud-site-hint"),this.telemetryEl=this.root.querySelector("#hud-telemetry"),this.wakeupOverlay=this.root.querySelector("#wakeup-overlay"),this.settingsModal=this.root.querySelector("#settings-modal"),this.mapModal=this.root.querySelector("#map-modal"),this.touchLayer=this.root.querySelector("#touch-layer"),this.touchToggleBtn=this.root.querySelector("#btn-toggle-touch"),this.mapCanvas=this.root.querySelector("#topo-map-canvas"),this.mapOverlayCanvas=document.createElement("canvas"),this.mapOverlayCanvas.width=this.MAP_W,this.mapOverlayCanvas.height=this.MAP_H}async requestLandscapeFullscreen(){try{document.fullscreenElement||await document.documentElement.requestFullscreen?.(),await screen.orientation?.lock?.("landscape")}catch{}}dismissWakeup(){this.wakeupOverlay.classList.add("fading"),this.callbacks.onWakeUp(),window.setTimeout(()=>{this.wakeupOverlay.classList.add("hidden")},950)}setMapOpen(e){this.mapOpen=e,e?(this.settingsOpen=!1,this.settingsModal.classList.remove("open"),this.mapModal.classList.add("open"),this.ensureTopoMapRendered(),this.drawDynamicMapOverlay()):this.mapModal.classList.remove("open"),this.controller.setModalOpen(this.mapOpen||this.settingsOpen)}setSettingsOpen(e){this.settingsOpen=e,e?(this.mapOpen=!1,this.mapModal.classList.remove("open"),this.settingsModal.classList.add("open")):this.settingsModal.classList.remove("open"),this.controller.setModalOpen(this.mapOpen||this.settingsOpen)}bindEvents(){this.root.querySelector("#btn-portrait-fs")?.addEventListener("click",()=>{this.requestLandscapeFullscreen(),this.root.querySelector("#portrait-banner")?.classList.add("dismissed")}),this.root.querySelector("#btn-portrait-dismiss")?.addEventListener("click",()=>{this.root.querySelector("#portrait-banner")?.classList.add("dismissed")}),this.root.querySelector("#btn-wake-start")?.addEventListener("click",()=>{this.dismissWakeup()}),this.root.querySelector("#btn-wake-fs")?.addEventListener("click",()=>{this.requestLandscapeFullscreen(),this.dismissWakeup()}),this.root.querySelector("#btn-open-map")?.addEventListener("click",()=>{this.setMapOpen(!this.mapOpen)}),this.root.querySelector("#btn-close-map")?.addEventListener("click",()=>{this.setMapOpen(!1)}),this.root.querySelector("#btn-open-settings")?.addEventListener("click",()=>{this.setSettingsOpen(!this.settingsOpen)}),this.root.querySelector("#btn-close-settings")?.addEventListener("click",()=>{this.setSettingsOpen(!1)}),this.root.querySelector("#btn-fullscreen")?.addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen?.():this.requestLandscapeFullscreen()}),this.touchToggleBtn.addEventListener("click",()=>{this.touchEnabled=!this.touchEnabled,this.touchLayer.classList.toggle("enabled",this.touchEnabled),this.touchToggleBtn.classList.toggle("active",this.touchEnabled)}),window.addEventListener("keydown",e=>{e.code==="KeyM"&&!this.controller.inIntro?this.setMapOpen(!this.mapOpen):e.code==="Escape"&&(this.mapOpen?this.setMapOpen(!1):this.settingsOpen&&this.setSettingsOpen(!1))}),this.root.querySelectorAll("#res-group .seg-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.res;this.settings.resolution=t,this.root.querySelectorAll("#res-group .seg-btn").forEach(r=>r.classList.remove("selected")),e.classList.add("selected");const n=this.root.querySelector("#settings-res-readout");n&&(n.textContent=t),this.callbacks.onGraphicsChange({...this.settings})})}),this.root.querySelectorAll("#fps-group .seg-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.fps;this.settings.fpsLimit=t,this.root.querySelectorAll("#fps-group .seg-btn").forEach(r=>r.classList.remove("selected")),e.classList.add("selected");const n=this.root.querySelector("#settings-fps-readout");n&&(n.textContent=t==="120"?"120 FPS":"無制限"),this.callbacks.onGraphicsChange({...this.settings})})}),this.root.querySelectorAll(".map-tp-btn").forEach(e=>{e.addEventListener("click",()=>{const t=Number(e.dataset.tpIdx),n=this.mapQuickPoints[t];n&&(this.wakeupOverlay.classList.add("hidden"),this.callbacks.onTeleport(n.x,n.z,n.yaw,n.pitch??-.05),this.setMapOpen(!1))})}),this.mapCanvas.addEventListener("click",e=>{const t=this.mapCanvas.getBoundingClientRect(),n=(e.clientX-t.left)/t.width,r=(e.clientY-t.top)/t.height,s=-ae+n*ae*2,o=-le+r*le*2;ce(s,o)>.3&&(this.wakeupOverlay.classList.add("hidden"),this.callbacks.onTeleport(s,o),this.setMapOpen(!1))}),this.bindTouchControls()}bindTouchControls(){const e=this.root.querySelector("#touch-stick-zone"),t=this.root.querySelector("#touch-stick-base"),n=this.root.querySelector("#touch-stick-knob"),r=this.root.querySelector("#touch-look-zone"),s=this.root.querySelector("#touch-btn-jump"),o=this.root.querySelector("#touch-btn-crouch");let a=null;const l=42,c=(x,m)=>{const f=t.getBoundingClientRect(),M=f.left+f.width*.5,S=f.top+f.height*.5;let b=x-M,C=m-S;const y=Math.hypot(b,C);y>l&&(b=b/y*l,C=C/y*l),n.style.transform=`translate3d(${b.toFixed(1)}px, ${C.toFixed(1)}px, 0)`;const R=b/l,E=C/l,v=Math.hypot(R,E)>.82&&E<-.25;t.classList.toggle("sprinting",v),this.controller.setTouchMove(R,E,v)},u=()=>{a=null,n.style.transform="translate3d(0, 0, 0)",t.classList.remove("sprinting"),this.controller.setTouchMove(0,0,!1)};e.addEventListener("pointerdown",x=>{a===null&&(a=x.pointerId,e.setPointerCapture(x.pointerId),c(x.clientX,x.clientY))}),e.addEventListener("pointermove",x=>{x.pointerId===a&&c(x.clientX,x.clientY)}),e.addEventListener("pointerup",x=>{x.pointerId===a&&u()}),e.addEventListener("pointercancel",x=>{x.pointerId===a&&u()});let d=null,h=0,p=0;r.addEventListener("pointerdown",x=>{d===null&&(d=x.pointerId,h=x.clientX,p=x.clientY,r.setPointerCapture(x.pointerId))}),r.addEventListener("pointermove",x=>{if(x.pointerId!==d)return;const m=x.clientX-h,f=x.clientY-p;h=x.clientX,p=x.clientY,this.controller.applyLookDelta(m,f,.0052)});const g=x=>{x.pointerId===d&&(d=null)};r.addEventListener("pointerup",g),r.addEventListener("pointercancel",g),s.addEventListener("pointerdown",x=>{x.preventDefault(),this.controller.triggerTouchJump()}),o.addEventListener("pointerdown",x=>{x.preventDefault();const m=this.controller.toggleCrouch();o.classList.toggle("active",m)})}worldToMap(e,t){const n=(e+ae)/(ae*2)*this.MAP_W,r=(t+le)/(le*2)*this.MAP_H;return[n,r]}ensureTopoMapRendered(){if(this.mapBaseImage)return;const e=this.mapOverlayCanvas.getContext("2d");if(!e)return;const t=this.MAP_W,n=this.MAP_H,r=e.createImageData(t,n),s=r.data,o=new Float32Array(t*n);for(let d=0;d<n;d++){const h=-le+d/(n-1)*le*2;for(let p=0;p<t;p++){const g=-ae+p/(t-1)*ae*2,x=ce(g,h);o[d*t+p]=x}}for(let d=0;d<n;d++)for(let h=0;h<t;h++){const p=d*t+h,g=o[p],x=h+1<t?o[p+1]:g,m=d+1<n?o[p+t]:g,f=Math.max(.72,Math.min(1.24,1+(g-x)*.045+(g-m)*.035));let M=12,S=42,b=68;if(g<=0){const y=Math.max(0,1+g/24);M=10+y*22,S=36+y*58,b=60+y*52}else if(g<6)M=176,S=162,b=128;else if(g<190){const y=(g-6)/184;M=(50+y*24)*f,S=(98+y*26)*f,b=(56+y*14)*f}else if(g<320){const y=(g-190)/130;M=(78+y*28)*f,S=(126+y*14)*f,b=(70+y*6)*f}else if(g<620){const y=(g-320)/300;M=(94+y*34)*f,S=(118-y*10)*f,b=(68+y*14)*f}else{const y=Math.min(1,(g-620)/245);M=(132+y*62)*f,S=(126+y*66)*f,b=(104+y*76)*f}if(g>5&&h+1<t&&d+1<n){const y=Math.floor(g/50),R=Math.floor(x/50),E=Math.floor(m/50);if(y!==R||y!==E){const _=y%2===0?.42:.22;M*=1-_,S*=1-_,b*=1-_}}const C=p*4;s[C]=Math.max(0,Math.min(255,M)),s[C+1]=Math.max(0,Math.min(255,S)),s[C+2]=Math.max(0,Math.min(255,b)),s[C+3]=255}e.putImageData(r,0,0);for(const d of Ni){e.beginPath();for(let h=0;h<d.points.length;h++){const[p,g]=this.worldToMap(d.points[h][0],d.points[h][1]);h===0?e.moveTo(p,g):e.lineTo(p,g)}d.kind==="road"?(e.strokeStyle="rgba(246, 236, 206, 0.92)",e.lineWidth=2,e.setLineDash([])):d.kind==="forestry"?(e.strokeStyle="rgba(224, 198, 136, 0.85)",e.lineWidth=1.6,e.setLineDash([])):(e.strokeStyle="rgba(246, 170, 74, 0.95)",e.lineWidth=1.45,e.setLineDash([4,3])),e.stroke()}e.setLineDash([]);const a={house:"#a87b58",shop:"#f06449",koban:"#4d96ff",park:"#63c778",secret_base:"#b4e362",mine:"#4bc4df",port:"#56e0f5"};for(const d of Je){const[h,p]=this.worldToMap(d.x,d.z);if(d.category==="house"&&fs.has(d.id))e.fillStyle="#ffd36e",e.fillRect(h-4.8*.5,p-4.8*.5,4.8,4.8),e.strokeStyle="#2e1f12",e.lineWidth=1,e.strokeRect(h-4.8*.5,p-4.8*.5,4.8,4.8);else{e.fillStyle=a[d.category]??"#ffffff";const g=d.category==="house"?3:5.2;e.fillRect(h-g*.5,p-g*.5,g,g)}}const[l,c]=this.worldToMap(_e.x,_e.z);e.fillStyle="#ffe675",e.beginPath(),e.arc(l,c,4.5,0,Math.PI*2),e.fill(),e.strokeStyle="#1b1d20",e.lineWidth=1.2,e.stroke(),e.font="bold 9.5px sans-serif",e.fillStyle="#fff5d0",e.strokeStyle="rgba(0,0,0,0.75)",e.lineWidth=2.4;const u=(d,h,p,g=6,x=3)=>{const[m,f]=this.worldToMap(h,p);e.strokeText(d,m+g,f+x),e.fillText(d,m+g,f+x)};u("▲黒磯岳 865m",_e.x,_e.z,-42,-10),u("秘境旧港",un.x,un.z,6,4),u("1890炭鉱",Ze.x,Ze.z,7,3),u("秘密基地",cn.x,cn.z,-48,4),u("廃村(254m)",120,120,6,4),u("漂着浜",Kt.x,Kt.z,-20,16),this.mapBaseImage=e.getImageData(0,0,t,n)}drawDynamicMapOverlay(){const e=this.mapCanvas.getContext("2d");if(!e||!this.mapBaseImage)return;e.putImageData(this.mapBaseImage,0,0);const t=this.controller.position,[n,r]=this.worldToMap(t.x,t.z);e.save(),e.translate(n,r),e.rotate(-this.controller.yaw),e.fillStyle="#ffffff",e.strokeStyle="#0d1a24",e.lineWidth=1.6,e.beginPath(),e.moveTo(0,-7),e.lineTo(5,6),e.lineTo(0,3),e.lineTo(-5,6),e.closePath(),e.fill(),e.stroke(),e.restore()}update(e,t){if(t-this.lastUiSync<140)return;this.lastUiSync=t;const n=this.controller.position,r=this.controller.insideStructure;if(r){const o=n.y-r.position.y,a=r.floorElevations;let l=1;if(a&&a.length>0)for(let d=0;d<a.length;d++)o>=a[d]-.55&&(l=d+1);const c=Math.max(1,r.builtYear-1867),u=r.name.split("（")[0];this.zoneEl.textContent=`[${r.id}] ${u} — ${l}F / 全${r.stories??a?.length??2}階`,this.siteHintEl.textContent=`${r.name} ｜ 明治${c}年（${r.builtYear}年）築・${r.abandonedYear}年廃村`,this.siteHintEl.classList.add("visible")}else{this.zoneEl.textContent=T2(n.x,n.y,n.z);let o=28,a=null;for(let l=0;l<Je.length;l++){const c=Je[l],u=Math.hypot(n.x-c.x,n.z-c.z);u<o&&(o=u,a=c)}if(a){const l=this.structureById.get(a.id);if(l){const c=l.stories??l.floorElevations?.length??2;this.siteHintEl.textContent=`建築済 [${l.id}] ${l.name}（${c}階建・${l.builtYear}年築）— 入室・階段昇降可`}else this.siteHintEl.textContent=`造成予定地 [${a.id}] ${a.name}（${a.note}）`;this.siteHintEl.classList.add("visible")}else this.siteHintEl.classList.remove("visible")}this.elevEl.textContent=`標高 ${n.y.toFixed(1)}m`,this.compassEl.textContent=E2(this.controller.yaw);const s=(e.terrain.approxTriangles/1e3).toFixed(0);this.telemetryEl.innerHTML=`<strong>${e.fps.toFixed(0)} FPS</strong> · ${e.frameMs.toFixed(1)}ms · ${e.renderWidth}×${e.renderHeight}<br/>地形 ${e.terrain.activeChunks}ch (${s}k△) · 木${e.foliage.visibleTrees} / 民家${e.houses.visibleHouses}(内装${e.houses.visibleInteriors})`,this.mapOpen&&this.drawDynamicMapOverlay()}}const Oo=12112100,A2=175e-6,ur=new it(.54,.68,.49).normalize(),C2={HD:{maxW:1280,maxH:720},FHD:{maxW:1920,maxH:1080},"1.5K":{maxW:2560,maxH:1440}};function P2(i){const e=new Qo(16e3,32,20),t=new xn({side:ze,depthWrite:!1,fog:!1,uniforms:{uSunDir:{value:i.clone().normalize()},uZenith:{value:new Wt(4423362)},uMidSky:{value:new Wt(8369378)},uHorizon:{value:new Wt(Oo)}},vertexShader:`
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
    `}),n=new Lt(e,t);return n.frustumCulled=!1,n}const L2={beach:{x:Kt.x,z:Kt.z,yaw:Kt.yaw,pitch:.05},lookout:{x:gn.x,z:gn.z,yaw:.56,pitch:-.05},village:{x:118,z:325,yaw:.36,pitch:-.04},koban:{x:ls.x-14,z:ls.z+10,yaw:-.45,pitch:-.02},park:{x:Pn.x+8,z:Pn.z+6,yaw:.65,pitch:-.02},mine:{x:Ze.x+8,z:Ze.z+24,yaw:.12,pitch:.05},secret:{x:cn.x-8,z:cn.z+8,yaw:-.68,pitch:.02},trail:{x:355,z:-1245,yaw:.96,pitch:.12},summit:{x:_e.x-4.5,z:_e.z-5.5,yaw:-2.46,pitch:-.14},port:{x:un.x+2.5,z:un.z+2.5,yaw:.785,pitch:-.08}};function I2(){const i=new URLSearchParams(window.location.search),e=i.get("skipIntro")==="1"||i.has("tp"),t=i.get("hideHud")==="1",r={resolution:["HD","FHD","1.5K"].includes(i.get("res")||"")?i.get("res"):"FHD",fpsLimit:"120"},s=document.getElementById("webgl-canvas"),o=document.getElementById("hud-root");t&&(o.style.display="none");const a=new Ip({canvas:s,antialias:!0,powerPreference:"high-performance",stencil:!1});a.toneMapping=Cl,a.toneMappingExposure=1.06,a.outputColorSpace=Ne,a.shadowMap.enabled=!0,a.shadowMap.type=Rl;const l=new I0;l.background=new Wt(Oo),l.fog=new $o(Oo,A2);const c=new je(62,window.innerWidth/Math.max(1,window.innerHeight),.25,18500),u=P2(ur);l.add(u);const d=new V0(12378367,5663558,1.08);l.add(d);const h=new Z0(16774626,2.32);h.castShadow=!0,h.shadow.mapSize.set(2048,2048),h.shadow.camera.near=20,h.shadow.camera.far=520;const p=108;h.shadow.camera.left=-p,h.shadow.camera.right=p,h.shadow.camera.top=p,h.shadow.camera.bottom=-p,h.shadow.bias=-5e-4,h.shadow.normalBias=.04,l.add(h),l.add(h.target);const g=new Dp(a),x=new Fp,m=new Hp(g),f=new Xp(g),M=Yp(g,ur),S=Zp(g),b=g2(g);x.registerStructures(b.structures),l.add(m.group),l.add(f.group),l.add(M.group),l.add(S),l.add(b.group);const C={...L2};for(let U=0;U<b.structures.length;U++){const K=b.structures[U];C[K.id.toLowerCase()]={x:K.entryPoint.x,z:K.entryPoint.z,yaw:K.entryPoint.lookYaw??K.yaw,pitch:.04}}const y=new S2(c,s,x,e),R=i.get("tp")?.toLowerCase();if(R&&C[R]){const U=C[R],K=i.has("yaw")?Number(i.get("yaw")):U.yaw,H=i.has("pitch")?Number(i.get("pitch")):U.pitch;y.teleport(U.x,U.z,K,H)}const E=()=>{m.warmStart(y.position.x,y.position.z),f.warmStart(y.position.x,y.position.z),b.update(y.position)};E();let v=1280,_=720;const I=()=>{const U=Math.max(320,window.innerWidth),K=Math.max(200,window.innerHeight),H=U/K,B=C2[r.resolution];let Z=B.maxW,V=Math.round(Z/H);V>B.maxH&&(V=B.maxH,Z=Math.round(V*H)),v=Math.max(320,Z),_=Math.max(200,V),a.setPixelRatio(1),a.setSize(v,_,!1),c.aspect=H,c.updateProjectionMatrix()};I(),window.addEventListener("resize",I),window.addEventListener("orientationchange",()=>window.setTimeout(I,120));const N=new R2(o,y,r,{onGraphicsChange:U=>{r.resolution=U.resolution,r.fpsLimit=U.fpsLimit,I()},onTeleport:(U,K,H,B)=>{y.teleport(U,K,H,B),E()},onWakeUp:()=>{y.beginWakeUp()}},e,b.structures);let P=performance.now(),L=P,k=16.6;const w=P;let T=0,D=!1;const X=()=>{const U=Math.round(y.position.x*.5)*2,K=Math.round(y.position.y*.5)*2,H=Math.round(y.position.z*.5)*2;h.target.position.set(U,K,H),h.position.set(U+ur.x*240,K+ur.y*240,H+ur.z*240),h.target.updateMatrixWorld()},W=(U,K=!1)=>{const H=Math.max(1,U-P),B=Math.max(.001,(U-L)*.001);P=U,L=U;const Z=(U-w)*.001;if(y.update(B),u.position.copy(c.position),X(),M.update(Z),m.update(y.position.x,y.position.z,4.2),f.update(y.position.x,y.position.z,Z),b.update(y.position),a.render(l,c),T>=3){const $=Math.min(250,H);k=T===3?$:k*.88+$*.12}const V=Math.min(999,1e3/Math.max(1,k));N.update({fps:V,frameMs:k,renderWidth:v,renderHeight:_,terrain:m.getStats(),foliage:f.getStats(),houses:b.getStats()},K?U+500:U),T++,T===8&&(window.__KUROISO_READY__=!0)},Y=U=>{requestAnimationFrame(Y),!D&&(r.fpsLimit==="120"&&U-P<7.883333333333334||W(U))};window.__KUROISO_DEBUG__={setPaused:U=>{D=U},renderFrame:()=>{W(performance.now(),!0)},teleport:(U,K,H,B,Z)=>{y.teleport(U,K,H,B,Z),E(),u.position.copy(c.position),X()},teleportPreset:(U,K,H)=>{const B=C[U.toLowerCase()];B&&(y.teleport(B.x,B.z,K??B.yaw,H??B.pitch),E(),u.position.copy(c.position),X())},teleportHouse:(U,K,H,B,Z=0,V=-.04)=>{const $=b.getById(U.toUpperCase());if(!$)return!1;const j=Math.cos($.yaw),O=Math.sin($.yaw),q=$.position.x+K*j+B*O,ut=$.position.z-K*O+B*j,ht=H===null?void 0:$.position.y+H;return y.teleport(q,ut,$.yaw+Z,V,ht),E(),u.position.copy(c.position),X(),!0},houses:b.structures.map(U=>({id:U.id,name:U.name,stories:U.stories,pos:U.position.toArray(),yaw:U.yaw,entry:U.entryPoint,floors:U.floorElevations})),getStats:()=>({pos:y.position.toArray(),inside:y.insideStructure?.id??null,terrain:m.getStats(),foliage:f.getStats(),houses:b.getStats(),render:[v,_],rendererInfo:{calls:a.info.render.calls,triangles:a.info.render.triangles,geometries:a.info.memory.geometries}})},requestAnimationFrame(Y)}I2();
