(()=>{"use strict";var e,a,c,t,f,r={},d={};function b(e){var a=d[e];if(void 0!==a)return a.exports;var c=d[e]={id:e,loaded:!1,exports:{}};return r[e].call(c.exports,c,c.exports,b),c.loaded=!0,c.exports}b.m=r,b.c=d,e=[],b.O=(a,c,t,f)=>{if(!c){var r=1/0;for(i=0;i<e.length;i++){c=e[i][0],t=e[i][1],f=e[i][2];for(var d=!0,o=0;o<c.length;o++)(!1&f||r>=f)&&Object.keys(b.O).every((e=>b.O[e](c[o])))?c.splice(o--,1):(d=!1,f<r&&(r=f));if(d){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[c,t,f]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var f=Object.create(null);b.r(f);var r={};a=a||[null,c({}),c([]),c(c)];for(var d=2&t&&e;"object"==typeof d&&!~a.indexOf(d);d=c(d))Object.getOwnPropertyNames(d).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,b.d(f,r),f},b.d=(e,a)=>{for(var c in a)b.o(a,c)&&!b.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,c)=>(b.f[c](e,a),a)),[])),b.u=e=>"assets/js/"+({23:"7afca92e",212:"0233ec7f",497:"a80da1cf",893:"c1f704fa",954:"8238a2f9",1497:"e16015ca",1618:"da6c7707",1800:"bd59397f",1878:"6e0e8678",1991:"b2b675dd",2138:"1a4e3797",2161:"4c9e35b1",2583:"3de4d16a",2634:"c4f5d8e4",2711:"9e4087bc",2778:"62104af9",3148:"c5292f08",3249:"ccc49370",3302:"c8ca56da",3549:"62701ccf",4077:"579e4cbe",4134:"393be207",4651:"e587f797",4722:"608ae6a4",4813:"6875c492",5092:"63163d77",5097:"b3e64b2f",5222:"44d895ad",5894:"b2f554cd",6033:"91c85a50",6061:"1f391b9e",6127:"43694170",6365:"abd2d863",6903:"f8409a7e",7098:"a7bd4aaa",7122:"001bbe4c",7472:"814f3328",7643:"a6aa9e1f",7843:"9989919b",7868:"e2e31f2e",8194:"b62850c5",8209:"01a85c17",8378:"b2014dbb",8401:"17896441",8573:"ca31a9b5",8581:"935f2afb",8609:"925b3f96",8726:"324eacfe",8745:"5e6e110a",9048:"a94703ab",9267:"a7023ddc",9328:"e273c56f",9379:"3e8067da",9413:"4d2f7e20",9551:"b65cac1c",9647:"5e95c892",9764:"57b50aa2",9829:"1d2c3c7c"}[e]||e)+"."+{23:"6f79629c",212:"87074510",489:"1312c2bc",497:"369e8930",614:"e0634e76",893:"abd3f79d",954:"60a4c5c9",1497:"84d0cad6",1618:"4085a22c",1800:"29661cbf",1878:"52a03587",1991:"8861d9a4",2138:"da2b1103",2161:"56dea096",2237:"a527828a",2583:"cc296a88",2634:"9c155b8e",2711:"bf6e56a0",2778:"6ff4f2f3",3148:"ec6419b6",3249:"c0fefa03",3302:"ceeb52e6",3549:"ae36e826",4077:"7907661c",4134:"1924aea2",4306:"d802dfc3",4651:"89b6a319",4722:"9e95a866",4813:"e0b3106d",5022:"8e50e4b6",5092:"f3f53f8a",5097:"867fbfd8",5222:"f1f662e7",5741:"0f218bc5",5894:"70653431",6033:"92fb03a1",6061:"21c736a5",6127:"7dd99c3a",6365:"bce3c70e",6903:"e40c12f9",7098:"b3810bc2",7122:"a7b2628d",7472:"1a38d26d",7643:"59e64382",7843:"d6f29ca2",7868:"32a17917",8194:"4188c3fc",8209:"5e3c9ca8",8378:"4ada01df",8401:"b0bbc790",8573:"3e513f45",8581:"930cdcac",8609:"8386cd19",8726:"2206132f",8745:"0a0843dc",8747:"8fdfe21a",9048:"fc6834d5",9214:"285be325",9267:"04ff52e5",9328:"5bd14816",9379:"47f472fc",9413:"9760d4e3",9551:"327dd44c",9647:"3b1e4d71",9764:"cd7eeba6",9829:"10c02adc"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},f="matro-docs:",b.l=(e,a,c,r)=>{if(t[e])t[e].push(a);else{var d,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+c){d=u;break}}d||(o=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",f+c),d.src=e),t[e]=[a];var l=(a,c)=>{d.onerror=d.onload=null,clearTimeout(s);var f=t[e];if(delete t[e],d.parentNode&&d.parentNode.removeChild(d),f&&f.forEach((e=>e(c))),a)return a(c)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),o&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/",b.gca=function(e){return e={17896441:"8401",43694170:"6127","7afca92e":"23","0233ec7f":"212",a80da1cf:"497",c1f704fa:"893","8238a2f9":"954",e16015ca:"1497",da6c7707:"1618",bd59397f:"1800","6e0e8678":"1878",b2b675dd:"1991","1a4e3797":"2138","4c9e35b1":"2161","3de4d16a":"2583",c4f5d8e4:"2634","9e4087bc":"2711","62104af9":"2778",c5292f08:"3148",ccc49370:"3249",c8ca56da:"3302","62701ccf":"3549","579e4cbe":"4077","393be207":"4134",e587f797:"4651","608ae6a4":"4722","6875c492":"4813","63163d77":"5092",b3e64b2f:"5097","44d895ad":"5222",b2f554cd:"5894","91c85a50":"6033","1f391b9e":"6061",abd2d863:"6365",f8409a7e:"6903",a7bd4aaa:"7098","001bbe4c":"7122","814f3328":"7472",a6aa9e1f:"7643","9989919b":"7843",e2e31f2e:"7868",b62850c5:"8194","01a85c17":"8209",b2014dbb:"8378",ca31a9b5:"8573","935f2afb":"8581","925b3f96":"8609","324eacfe":"8726","5e6e110a":"8745",a94703ab:"9048",a7023ddc:"9267",e273c56f:"9328","3e8067da":"9379","4d2f7e20":"9413",b65cac1c:"9551","5e95c892":"9647","57b50aa2":"9764","1d2c3c7c":"9829"}[e]||e,b.p+b.u(e)},(()=>{var e={5354:0,1869:0};b.f.j=(a,c)=>{var t=b.o(e,a)?e[a]:void 0;if(0!==t)if(t)c.push(t[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var f=new Promise(((c,f)=>t=e[a]=[c,f]));c.push(t[2]=f);var r=b.p+b.u(a),d=new Error;b.l(r,(c=>{if(b.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var f=c&&("load"===c.type?"missing":c.type),r=c&&c.target&&c.target.src;d.message="Loading chunk "+a+" failed.\n("+f+": "+r+")",d.name="ChunkLoadError",d.type=f,d.request=r,t[1](d)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,c)=>{var t,f,r=c[0],d=c[1],o=c[2],n=0;if(r.some((a=>0!==e[a]))){for(t in d)b.o(d,t)&&(b.m[t]=d[t]);if(o)var i=o(b)}for(a&&a(c);n<r.length;n++)f=r[n],b.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return b.O(i)},c=self.webpackChunkmatro_docs=self.webpackChunkmatro_docs||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();