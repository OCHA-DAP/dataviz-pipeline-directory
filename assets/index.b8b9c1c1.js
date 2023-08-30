(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function a(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=a(i);fetch(i.href,l)}})();function Oe(){}function ht(t){return t()}function Ze(){return Object.create(null)}function De(t){t.forEach(ht)}function Ie(t){return typeof t=="function"}function He(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function vt(t){return Object.keys(t).length===0}function o(t,e){t.appendChild(e)}function le(t,e,a){t.insertBefore(e,a||null)}function ae(t){t.parentNode&&t.parentNode.removeChild(t)}function Fe(t,e){for(let a=0;a<t.length;a+=1)t[a]&&t[a].d(e)}function k(t){return document.createElement(t)}function Z(t){return document.createTextNode(t)}function T(){return Z(" ")}function dt(){return Z("")}function Ne(t,e,a,r){return t.addEventListener(e,a,r),()=>t.removeEventListener(e,a,r)}function I(t,e,a){a==null?t.removeAttribute(e):t.getAttribute(e)!==a&&t.setAttribute(e,a)}function bt(t){return Array.from(t.childNodes)}function ne(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ve(t,e,a){t.classList[a?"add":"remove"](e)}let je;function ze(t){je=t}const Ae=[],Xe=[];let Le=[];const xe=[],kt=Promise.resolve();let qe=!1;function wt(){qe||(qe=!0,kt.then(pt))}function Be(t){Le.push(t)}const Ue=new Set;let Te=0;function pt(){if(Te!==0)return;const t=je;do{try{for(;Te<Ae.length;){const e=Ae[Te];Te++,ze(e),Ct(e.$$)}}catch(e){throw Ae.length=0,Te=0,e}for(ze(null),Ae.length=0,Te=0;Xe.length;)Xe.pop()();for(let e=0;e<Le.length;e+=1){const a=Le[e];Ue.has(a)||(Ue.add(a),a())}Le.length=0}while(Ae.length);for(;xe.length;)xe.pop()();qe=!1,Ue.clear(),ze(t)}function Ct(t){if(t.fragment!==null){t.update(),De(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Be)}}function Et(t){const e=[],a=[];Le.forEach(r=>t.indexOf(r)===-1?e.push(r):a.push(r)),a.forEach(r=>r()),Le=e}const $e=new Set;let Ee;function _t(){Ee={r:0,c:[],p:Ee}}function gt(){Ee.r||De(Ee.c),Ee=Ee.p}function ge(t,e){t&&t.i&&($e.delete(t),t.i(e))}function Re(t,e,a,r){if(t&&t.o){if($e.has(t))return;$e.add(t),Ee.c.push(()=>{$e.delete(t),r&&(a&&t.d(1),r())}),t.o(e)}else r&&r()}function mt(t){t&&t.c()}function We(t,e,a,r){const{fragment:i,after_update:l}=t.$$;i&&i.m(e,a),r||Be(()=>{const d=t.$$.on_mount.map(ht).filter(Ie);t.$$.on_destroy?t.$$.on_destroy.push(...d):De(d),t.$$.on_mount=[]}),l.forEach(Be)}function Ke(t,e){const a=t.$$;a.fragment!==null&&(Et(a.after_update),De(a.on_destroy),a.fragment&&a.fragment.d(e),a.on_destroy=a.fragment=null,a.ctx=[])}function Ot(t,e){t.$$.dirty[0]===-1&&(Ae.push(t),wt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Qe(t,e,a,r,i,l,d,L=[-1]){const c=je;ze(t);const g=t.$$={fragment:null,ctx:[],props:l,update:Oe,not_equal:i,bound:Ze(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Ze(),dirty:L,skip_bound:!1,root:e.target||c.$$.root};d&&d(g.root);let O=!1;if(g.ctx=a?a(t,e.props||{},(A,D,...B)=>{const C=B.length?B[0]:D;return g.ctx&&i(g.ctx[A],g.ctx[A]=C)&&(!g.skip_bound&&g.bound[A]&&g.bound[A](C),O&&Ot(t,A)),D}):[],g.update(),O=!0,De(g.before_update),g.fragment=r?r(g.ctx):!1,e.target){if(e.hydrate){const A=bt(e.target);g.fragment&&g.fragment.l(A),A.forEach(ae)}else g.fragment&&g.fragment.c();e.intro&&ge(t.$$.fragment),We(t,e.target,e.anchor,e.customElement),pt()}ze(c)}class Ye{$destroy(){Ke(this,1),this.$destroy=Oe}$on(e,a){if(!Ie(a))return Oe;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(a),()=>{const i=r.indexOf(a);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!vt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var Rt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},yt={exports:{}};/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(t,e){(function(a,r){t.exports=r()})(Rt,function a(){var r=typeof self<"u"?self:typeof window<"u"?window:r!==void 0?r:{},i=!r.document&&!!r.postMessage,l=r.IS_PAPA_WORKER||!1,d={},L=0,c={parse:function(s,n){var u=(n=n||{}).dynamicTyping||!1;if(R(u)&&(n.dynamicTypingFunction=u,u={}),n.dynamicTyping=u,n.transform=!!R(n.transform)&&n.transform,n.worker&&c.WORKERS_SUPPORTED){var f=function(){if(!c.WORKERS_SUPPORTED)return!1;var m=(F=r.URL||r.webkitURL||null,H=a.toString(),c.BLOB_URL||(c.BLOB_URL=F.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",H,")();"],{type:"text/javascript"})))),_=new r.Worker(m),F,H;return _.onmessage=ue,_.id=L++,d[_.id]=_}();return f.userStep=n.step,f.userChunk=n.chunk,f.userComplete=n.complete,f.userError=n.error,n.step=R(n.step),n.chunk=R(n.chunk),n.complete=R(n.complete),n.error=R(n.error),delete n.worker,void f.postMessage({input:s,config:n,workerId:f.id})}var h=null;return c.NODE_STREAM_INPUT,typeof s=="string"?(s=function(m){return m.charCodeAt(0)===65279?m.slice(1):m}(s),h=n.download?new A(n):new B(n)):s.readable===!0&&R(s.read)&&R(s.on)?h=new C(n):(r.File&&s instanceof File||s instanceof Object)&&(h=new D(n)),h.stream(s)},unparse:function(s,n){var u=!1,f=!0,h=",",m=`\r
`,_='"',F=_+_,H=!1,y=null,P=!1;(function(){if(typeof n=="object"){if(typeof n.delimiter!="string"||c.BAD_DELIMITERS.filter(function(p){return n.delimiter.indexOf(p)!==-1}).length||(h=n.delimiter),(typeof n.quotes=="boolean"||typeof n.quotes=="function"||Array.isArray(n.quotes))&&(u=n.quotes),typeof n.skipEmptyLines!="boolean"&&typeof n.skipEmptyLines!="string"||(H=n.skipEmptyLines),typeof n.newline=="string"&&(m=n.newline),typeof n.quoteChar=="string"&&(_=n.quoteChar),typeof n.header=="boolean"&&(f=n.header),Array.isArray(n.columns)){if(n.columns.length===0)throw new Error("Option columns is empty");y=n.columns}n.escapeChar!==void 0&&(F=n.escapeChar+_),(typeof n.escapeFormulae=="boolean"||n.escapeFormulae instanceof RegExp)&&(P=n.escapeFormulae instanceof RegExp?n.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var v=new RegExp(w(_),"g");if(typeof s=="string"&&(s=JSON.parse(s)),Array.isArray(s)){if(!s.length||Array.isArray(s[0]))return U(null,s,H);if(typeof s[0]=="object")return U(y||Object.keys(s[0]),s,H)}else if(typeof s=="object")return typeof s.data=="string"&&(s.data=JSON.parse(s.data)),Array.isArray(s.data)&&(s.fields||(s.fields=s.meta&&s.meta.fields||y),s.fields||(s.fields=Array.isArray(s.data[0])?s.fields:typeof s.data[0]=="object"?Object.keys(s.data[0]):[]),Array.isArray(s.data[0])||typeof s.data[0]=="object"||(s.data=[s.data])),U(s.fields||[],s.data||[],H);throw new Error("Unable to serialize unrecognized input");function U(p,b,N){var W="";typeof p=="string"&&(p=JSON.parse(p)),typeof b=="string"&&(b=JSON.parse(b));var j=Array.isArray(p)&&0<p.length,S=!Array.isArray(b[0]);if(j&&f){for(var M=0;M<p.length;M++)0<M&&(W+=h),W+=z(p[M],M);0<b.length&&(W+=m)}for(var E=0;E<b.length;E++){var q=j?p.length:b[E].length,V=!1,re=j?Object.keys(b[E]).length===0:b[E].length===0;if(N&&!j&&(V=N==="greedy"?b[E].join("").trim()==="":b[E].length===1&&b[E][0].length===0),N==="greedy"&&j){for(var Q=[],oe=0;oe<q;oe++){var x=S?p[oe]:oe;Q.push(b[E][x])}V=Q.join("").trim()===""}if(!V){for(var J=0;J<q;J++){0<J&&!re&&(W+=h);var pe=j&&S?p[J]:J;W+=z(b[E][pe],J)}E<b.length-1&&(!N||0<q&&!re)&&(W+=m)}}return W}function z(p,b){if(p==null)return"";if(p.constructor===Date)return JSON.stringify(p).slice(1,25);var N=!1;P&&typeof p=="string"&&P.test(p)&&(p="'"+p,N=!0);var W=p.toString().replace(v,F);return(N=N||u===!0||typeof u=="function"&&u(p,b)||Array.isArray(u)&&u[b]||function(j,S){for(var M=0;M<S.length;M++)if(-1<j.indexOf(S[M]))return!0;return!1}(W,c.BAD_DELIMITERS)||-1<W.indexOf(h)||W.charAt(0)===" "||W.charAt(W.length-1)===" ")?_+W+_:W}}};if(c.RECORD_SEP=String.fromCharCode(30),c.UNIT_SEP=String.fromCharCode(31),c.BYTE_ORDER_MARK="\uFEFF",c.BAD_DELIMITERS=["\r",`
`,'"',c.BYTE_ORDER_MARK],c.WORKERS_SUPPORTED=!i&&!!r.Worker,c.NODE_STREAM_INPUT=1,c.LocalChunkSize=10485760,c.RemoteChunkSize=5242880,c.DefaultDelimiter=",",c.Parser=Y,c.ParserHandle=$,c.NetworkStreamer=A,c.FileStreamer=D,c.StringStreamer=B,c.ReadableStreamStreamer=C,r.jQuery){var g=r.jQuery;g.fn.parse=function(s){var n=s.config||{},u=[];return this.each(function(m){if(!(g(this).prop("tagName").toUpperCase()==="INPUT"&&g(this).attr("type").toLowerCase()==="file"&&r.FileReader)||!this.files||this.files.length===0)return!0;for(var _=0;_<this.files.length;_++)u.push({file:this.files[_],inputElem:this,instanceConfig:g.extend({},n)})}),f(),this;function f(){if(u.length!==0){var m,_,F,H,y=u[0];if(R(s.before)){var P=s.before(y.file,y.inputElem);if(typeof P=="object"){if(P.action==="abort")return m="AbortError",_=y.file,F=y.inputElem,H=P.reason,void(R(s.error)&&s.error({name:m},_,F,H));if(P.action==="skip")return void h();typeof P.config=="object"&&(y.instanceConfig=g.extend(y.instanceConfig,P.config))}else if(P==="skip")return void h()}var v=y.instanceConfig.complete;y.instanceConfig.complete=function(U){R(v)&&v(U,y.file,y.inputElem),h()},c.parse(y.file,y.instanceConfig)}else R(s.complete)&&s.complete()}function h(){u.splice(0,1),f()}}}function O(s){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(n){var u=te(n);u.chunkSize=parseInt(u.chunkSize),n.step||n.chunk||(u.chunkSize=null),this._handle=new $(u),(this._handle.streamer=this)._config=u}.call(this,s),this.parseChunk=function(n,u){if(this.isFirstChunk&&R(this._config.beforeFirstChunk)){var f=this._config.beforeFirstChunk(n);f!==void 0&&(n=f)}this.isFirstChunk=!1,this._halted=!1;var h=this._partialLine+n;this._partialLine="";var m=this._handle.parse(h,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var _=m.meta.cursor;this._finished||(this._partialLine=h.substring(_-this._baseIndex),this._baseIndex=_),m&&m.data&&(this._rowCount+=m.data.length);var F=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(l)r.postMessage({results:m,workerId:c.WORKER_ID,finished:F});else if(R(this._config.chunk)&&!u){if(this._config.chunk(m,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);m=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(m.data),this._completeResults.errors=this._completeResults.errors.concat(m.errors),this._completeResults.meta=m.meta),this._completed||!F||!R(this._config.complete)||m&&m.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),F||m&&m.meta.paused||this._nextChunk(),m}this._halted=!0},this._sendError=function(n){R(this._config.error)?this._config.error(n):l&&this._config.error&&r.postMessage({workerId:c.WORKER_ID,error:n,finished:!1})}}function A(s){var n;(s=s||{}).chunkSize||(s.chunkSize=c.RemoteChunkSize),O.call(this,s),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(u){this._input=u,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(n=new XMLHttpRequest,this._config.withCredentials&&(n.withCredentials=this._config.withCredentials),i||(n.onload=G(this._chunkLoaded,this),n.onerror=G(this._chunkError,this)),n.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var u=this._config.downloadRequestHeaders;for(var f in u)n.setRequestHeader(f,u[f])}if(this._config.chunkSize){var h=this._start+this._config.chunkSize-1;n.setRequestHeader("Range","bytes="+this._start+"-"+h)}try{n.send(this._config.downloadRequestBody)}catch(m){this._chunkError(m.message)}i&&n.status===0&&this._chunkError()}},this._chunkLoaded=function(){n.readyState===4&&(n.status<200||400<=n.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:n.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(u){var f=u.getResponseHeader("Content-Range");return f===null?-1:parseInt(f.substring(f.lastIndexOf("/")+1))}(n),this.parseChunk(n.responseText)))},this._chunkError=function(u){var f=n.statusText||u;this._sendError(new Error(f))}}function D(s){var n,u;(s=s||{}).chunkSize||(s.chunkSize=c.LocalChunkSize),O.call(this,s);var f=typeof FileReader<"u";this.stream=function(h){this._input=h,u=h.slice||h.webkitSlice||h.mozSlice,f?((n=new FileReader).onload=G(this._chunkLoaded,this),n.onerror=G(this._chunkError,this)):n=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var h=this._input;if(this._config.chunkSize){var m=Math.min(this._start+this._config.chunkSize,this._input.size);h=u.call(h,this._start,m)}var _=n.readAsText(h,this._config.encoding);f||this._chunkLoaded({target:{result:_}})},this._chunkLoaded=function(h){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(h.target.result)},this._chunkError=function(){this._sendError(n.error)}}function B(s){var n;O.call(this,s=s||{}),this.stream=function(u){return n=u,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var u,f=this._config.chunkSize;return f?(u=n.substring(0,f),n=n.substring(f)):(u=n,n=""),this._finished=!n,this.parseChunk(u)}}}function C(s){O.call(this,s=s||{});var n=[],u=!0,f=!1;this.pause=function(){O.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){O.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(h){this._input=h,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){f&&n.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),n.length?this.parseChunk(n.shift()):u=!0},this._streamData=G(function(h){try{n.push(typeof h=="string"?h:h.toString(this._config.encoding)),u&&(u=!1,this._checkIsFinished(),this.parseChunk(n.shift()))}catch(m){this._streamError(m)}},this),this._streamError=G(function(h){this._streamCleanUp(),this._sendError(h)},this),this._streamEnd=G(function(){this._streamCleanUp(),f=!0,this._streamData("")},this),this._streamCleanUp=G(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function $(s){var n,u,f,h=Math.pow(2,53),m=-h,_=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,F=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,H=this,y=0,P=0,v=!1,U=!1,z=[],p={data:[],errors:[],meta:{}};if(R(s.step)){var b=s.step;s.step=function(E){if(p=E,j())W();else{if(W(),p.data.length===0)return;y+=E.data.length,s.preview&&y>s.preview?u.abort():(p.data=p.data[0],b(p,H))}}}function N(E){return s.skipEmptyLines==="greedy"?E.join("").trim()==="":E.length===1&&E[0].length===0}function W(){return p&&f&&(M("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+c.DefaultDelimiter+"'"),f=!1),s.skipEmptyLines&&(p.data=p.data.filter(function(E){return!N(E)})),j()&&function(){if(!p)return;function E(V,re){R(s.transformHeader)&&(V=s.transformHeader(V,re)),z.push(V)}if(Array.isArray(p.data[0])){for(var q=0;j()&&q<p.data.length;q++)p.data[q].forEach(E);p.data.splice(0,1)}else p.data.forEach(E)}(),function(){if(!p||!s.header&&!s.dynamicTyping&&!s.transform)return p;function E(V,re){var Q,oe=s.header?{}:[];for(Q=0;Q<V.length;Q++){var x=Q,J=V[Q];s.header&&(x=Q>=z.length?"__parsed_extra":z[Q]),s.transform&&(J=s.transform(J,x)),J=S(x,J),x==="__parsed_extra"?(oe[x]=oe[x]||[],oe[x].push(J)):oe[x]=J}return s.header&&(Q>z.length?M("FieldMismatch","TooManyFields","Too many fields: expected "+z.length+" fields but parsed "+Q,P+re):Q<z.length&&M("FieldMismatch","TooFewFields","Too few fields: expected "+z.length+" fields but parsed "+Q,P+re)),oe}var q=1;return!p.data.length||Array.isArray(p.data[0])?(p.data=p.data.map(E),q=p.data.length):p.data=E(p.data,0),s.header&&p.meta&&(p.meta.fields=z),P+=q,p}()}function j(){return s.header&&z.length===0}function S(E,q){return V=E,s.dynamicTypingFunction&&s.dynamicTyping[V]===void 0&&(s.dynamicTyping[V]=s.dynamicTypingFunction(V)),(s.dynamicTyping[V]||s.dynamicTyping)===!0?q==="true"||q==="TRUE"||q!=="false"&&q!=="FALSE"&&(function(re){if(_.test(re)){var Q=parseFloat(re);if(m<Q&&Q<h)return!0}return!1}(q)?parseFloat(q):F.test(q)?new Date(q):q===""?null:q):q;var V}function M(E,q,V,re){var Q={type:E,code:q,message:V};re!==void 0&&(Q.row=re),p.errors.push(Q)}this.parse=function(E,q,V){var re=s.quoteChar||'"';if(s.newline||(s.newline=function(x,J){x=x.substring(0,1048576);var pe=new RegExp(w(J)+"([^]*?)"+w(J),"gm"),fe=(x=x.replace(pe,"")).split("\r"),_e=x.split(`
`),me=1<_e.length&&_e[0].length<fe[0].length;if(fe.length===1||me)return`
`;for(var ce=0,X=0;X<fe.length;X++)fe[X][0]===`
`&&ce++;return ce>=fe.length/2?`\r
`:"\r"}(E,re)),f=!1,s.delimiter)R(s.delimiter)&&(s.delimiter=s.delimiter(E),p.meta.delimiter=s.delimiter);else{var Q=function(x,J,pe,fe,_e){var me,ce,X,ee;_e=_e||[",","	","|",";",c.RECORD_SEP,c.UNIT_SEP];for(var we=0;we<_e.length;we++){var K=_e[we],Se=0,ye=0,Ce=0;X=void 0;for(var ve=new Y({comments:fe,delimiter:K,newline:J,preview:10}).parse(x),be=0;be<ve.data.length;be++)if(pe&&N(ve.data[be]))Ce++;else{var ke=ve.data[be].length;ye+=ke,X!==void 0?0<ke&&(Se+=Math.abs(ke-X),X=ke):X=ke}0<ve.data.length&&(ye/=ve.data.length-Ce),(ce===void 0||Se<=ce)&&(ee===void 0||ee<ye)&&1.99<ye&&(ce=Se,me=K,ee=ye)}return{successful:!!(s.delimiter=me),bestDelimiter:me}}(E,s.newline,s.skipEmptyLines,s.comments,s.delimitersToGuess);Q.successful?s.delimiter=Q.bestDelimiter:(f=!0,s.delimiter=c.DefaultDelimiter),p.meta.delimiter=s.delimiter}var oe=te(s);return s.preview&&s.header&&oe.preview++,n=E,u=new Y(oe),p=u.parse(n,q,V),W(),v?{meta:{paused:!0}}:p||{meta:{paused:!1}}},this.paused=function(){return v},this.pause=function(){v=!0,u.abort(),n=R(s.chunk)?"":n.substring(u.getCharIndex())},this.resume=function(){H.streamer._halted?(v=!1,H.streamer.parseChunk(n,!0)):setTimeout(H.resume,3)},this.aborted=function(){return U},this.abort=function(){U=!0,u.abort(),p.meta.aborted=!0,R(s.complete)&&s.complete(p),n=""}}function w(s){return s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Y(s){var n,u=(s=s||{}).delimiter,f=s.newline,h=s.comments,m=s.step,_=s.preview,F=s.fastMode,H=n=s.quoteChar===void 0||s.quoteChar===null?'"':s.quoteChar;if(s.escapeChar!==void 0&&(H=s.escapeChar),(typeof u!="string"||-1<c.BAD_DELIMITERS.indexOf(u))&&(u=","),h===u)throw new Error("Comment character same as delimiter");h===!0?h="#":(typeof h!="string"||-1<c.BAD_DELIMITERS.indexOf(h))&&(h=!1),f!==`
`&&f!=="\r"&&f!==`\r
`&&(f=`
`);var y=0,P=!1;this.parse=function(v,U,z){if(typeof v!="string")throw new Error("Input must be a string");var p=v.length,b=u.length,N=f.length,W=h.length,j=R(m),S=[],M=[],E=[],q=y=0;if(!v)return he();if(s.header&&!U){var V=v.split(f)[0].split(u),re=[],Q={},oe=!1;for(var x in V){var J=V[x];R(s.transformHeader)&&(J=s.transformHeader(J,x));var pe=J,fe=Q[J]||0;for(0<fe&&(oe=!0,pe=J+"_"+fe),Q[J]=fe+1;re.includes(pe);)pe=pe+"_"+fe;re.push(pe)}if(oe){var _e=v.split(f);_e[0]=re.join(u),v=_e.join(f)}}if(F||F!==!1&&v.indexOf(n)===-1){for(var me=v.split(f),ce=0;ce<me.length;ce++){if(E=me[ce],y+=E.length,ce!==me.length-1)y+=f.length;else if(z)return he();if(!h||E.substring(0,W)!==h){if(j){if(S=[],Ce(E.split(u)),Me(),P)return he()}else Ce(E.split(u));if(_&&_<=ce)return S=S.slice(0,_),he(!0)}}return he()}for(var X=v.indexOf(u,y),ee=v.indexOf(f,y),we=new RegExp(w(H)+w(n),"g"),K=v.indexOf(n,y);;)if(v[y]!==n)if(h&&E.length===0&&v.substring(y,y+W)===h){if(ee===-1)return he();y=ee+N,ee=v.indexOf(f,y),X=v.indexOf(u,y)}else if(X!==-1&&(X<ee||ee===-1))E.push(v.substring(y,X)),y=X+b,X=v.indexOf(u,y);else{if(ee===-1)break;if(E.push(v.substring(y,ee)),ke(ee+N),j&&(Me(),P))return he();if(_&&S.length>=_)return he(!0)}else for(K=y,y++;;){if((K=v.indexOf(n,K+1))===-1)return z||M.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:S.length,index:y}),be();if(K===p-1)return be(v.substring(y,K).replace(we,n));if(n!==H||v[K+1]!==H){if(n===H||K===0||v[K-1]!==H){X!==-1&&X<K+1&&(X=v.indexOf(u,K+1)),ee!==-1&&ee<K+1&&(ee=v.indexOf(f,K+1));var Se=ve(ee===-1?X:Math.min(X,ee));if(v.substr(K+1+Se,b)===u){E.push(v.substring(y,K).replace(we,n)),v[y=K+1+Se+b]!==n&&(K=v.indexOf(n,y)),X=v.indexOf(u,y),ee=v.indexOf(f,y);break}var ye=ve(ee);if(v.substring(K+1+ye,K+1+ye+N)===f){if(E.push(v.substring(y,K).replace(we,n)),ke(K+1+ye+N),X=v.indexOf(u,y),K=v.indexOf(n,y),j&&(Me(),P))return he();if(_&&S.length>=_)return he(!0);break}M.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:S.length,index:y}),K++}}else K++}return be();function Ce(de){S.push(de),q=y}function ve(de){var Je=0;if(de!==-1){var Pe=v.substring(K+1,de);Pe&&Pe.trim()===""&&(Je=Pe.length)}return Je}function be(de){return z||(de===void 0&&(de=v.substring(y)),E.push(de),y=p,Ce(E),j&&Me()),he()}function ke(de){y=de,Ce(E),E=[],ee=v.indexOf(f,y)}function he(de){return{data:S,errors:M,meta:{delimiter:u,linebreak:f,aborted:P,truncated:!!de,cursor:q+(U||0)}}}function Me(){m(he()),S=[],M=[]}},this.abort=function(){P=!0},this.getCharIndex=function(){return y}}function ue(s){var n=s.data,u=d[n.workerId],f=!1;if(n.error)u.userError(n.error,n.file);else if(n.results&&n.results.data){var h={abort:function(){f=!0,ie(n.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:se,resume:se};if(R(u.userStep)){for(var m=0;m<n.results.data.length&&(u.userStep({data:n.results.data[m],errors:n.results.errors,meta:n.results.meta},h),!f);m++);delete n.results}else R(u.userChunk)&&(u.userChunk(n.results,h,n.file),delete n.results)}n.finished&&!f&&ie(n.workerId,n.results)}function ie(s,n){var u=d[s];R(u.userComplete)&&u.userComplete(n),u.terminate(),delete d[s]}function se(){throw new Error("Not implemented.")}function te(s){if(typeof s!="object"||s===null)return s;var n=Array.isArray(s)?[]:{};for(var u in s)n[u]=te(s[u]);return n}function G(s,n){return function(){s.apply(n,arguments)}}function R(s){return typeof s=="function"}return l&&(r.onmessage=function(s){var n=s.data;if(c.WORKER_ID===void 0&&n&&(c.WORKER_ID=n.workerId),typeof n.input=="string")r.postMessage({workerId:c.WORKER_ID,results:c.parse(n.input,n.config),finished:!0});else if(r.File&&n.input instanceof File||n.input instanceof Object){var u=c.parse(n.input,n.config);u&&r.postMessage({workerId:c.WORKER_ID,results:u,finished:!0})}}),(A.prototype=Object.create(O.prototype)).constructor=A,(D.prototype=Object.create(O.prototype)).constructor=D,(B.prototype=Object.create(B.prototype)).constructor=B,(C.prototype=Object.create(O.prototype)).constructor=C,c})})(yt);const Ge=yt.exports;function et(t,e,a){const r=t.slice();return r[3]=e[a],r}function Dt(t){let e=t[3].Owner+"",a;return{c(){a=Z(e)},m(r,i){le(r,a,i)},p(r,i){i&1&&e!==(e=r[3].Owner+"")&&ne(a,e)},d(r){r&&ae(a)}}}function St(t){let e,a=t[3].Owner+"",r,i;return{c(){e=k("a"),r=Z(a),I(e,"href",i="mailto:"+t[3]["Owner email"])},m(l,d){le(l,e,d),o(e,r)},p(l,d){d&1&&a!==(a=l[3].Owner+"")&&ne(r,a),d&1&&i!==(i="mailto:"+l[3]["Owner email"])&&I(e,"href",i)},d(l){l&&ae(e)}}}function tt(t){let e,a,r;return{c(){e=k("a"),a=Z("Code"),I(e,"href",r=t[3]["Code repository"]),I(e,"target","_blank")},m(i,l){le(i,e,l),o(e,a)},p(i,l){l&1&&r!==(r=i[3]["Code repository"])&&I(e,"href",r)},d(i){i&&ae(e)}}}function rt(t){let e,a,r;return{c(){e=k("a"),a=Z("Scraper"),I(e,"href",r=t[3]["Scraper repository"]),I(e,"target","_blank")},m(i,l){le(i,e,l),o(e,a)},p(i,l){l&1&&r!==(r=i[3]["Scraper repository"])&&I(e,"href",r)},d(i){i&&ae(e)}}}function nt(t){let e,a,r;return{c(){e=k("a"),a=Z("Datasheet"),I(e,"href",r=t[3]["Data sheet"]),I(e,"target","_blank")},m(i,l){le(i,e,l),o(e,a)},p(i,l){l&1&&r!==(r=i[3]["Data sheet"])&&I(e,"href",r)},d(i){i&&ae(e)}}}function it(t){let e,a,r,i=t[3].Name+"",l,d,L,c,g=t[3].Status+"",O,A,D,B,C,$,w=t[3].Notes+"",Y,ue,ie,se=t[3]["Date created"]+"",te,G,R,s=t[3]["Date retired"]+"",n,u,f,h,m,_,F,H;function y(b,N){return b[3]["Owner email"]?St:Dt}let P=y(t),v=P(t),U=t[3]["Code repository"]&&tt(t),z=t[3]["Scraper repository"]&&rt(t),p=t[3]["Data sheet"]&&nt(t);return{c(){e=k("tr"),a=k("td"),r=k("a"),l=Z(i),L=T(),c=k("td"),O=Z(g),D=T(),B=k("td"),v.c(),C=T(),$=k("td"),Y=Z(w),ue=T(),ie=k("td"),te=Z(se),G=T(),R=k("td"),n=Z(s),u=T(),f=k("td"),U&&U.c(),h=T(),m=k("td"),z&&z.c(),_=T(),F=k("td"),p&&p.c(),H=T(),I(r,"href",d=t[3].Link),I(r,"target","_blank"),I(c,"class",A=t[3].Status.replace(/\s/g,""))},m(b,N){le(b,e,N),o(e,a),o(a,r),o(r,l),o(e,L),o(e,c),o(c,O),o(e,D),o(e,B),v.m(B,null),o(e,C),o(e,$),o($,Y),o(e,ue),o(e,ie),o(ie,te),o(e,G),o(e,R),o(R,n),o(e,u),o(e,f),U&&U.m(f,null),o(e,h),o(e,m),z&&z.m(m,null),o(e,_),o(e,F),p&&p.m(F,null),o(e,H)},p(b,N){N&1&&i!==(i=b[3].Name+"")&&ne(l,i),N&1&&d!==(d=b[3].Link)&&I(r,"href",d),N&1&&g!==(g=b[3].Status+"")&&ne(O,g),N&1&&A!==(A=b[3].Status.replace(/\s/g,""))&&I(c,"class",A),P===(P=y(b))&&v?v.p(b,N):(v.d(1),v=P(b),v&&(v.c(),v.m(B,null))),N&1&&w!==(w=b[3].Notes+"")&&ne(Y,w),N&1&&se!==(se=b[3]["Date created"]+"")&&ne(te,se),N&1&&s!==(s=b[3]["Date retired"]+"")&&ne(n,s),b[3]["Code repository"]?U?U.p(b,N):(U=tt(b),U.c(),U.m(f,null)):U&&(U.d(1),U=null),b[3]["Scraper repository"]?z?z.p(b,N):(z=rt(b),z.c(),z.m(m,null)):z&&(z.d(1),z=null),b[3]["Data sheet"]?p?p.p(b,N):(p=nt(b),p.c(),p.m(F,null)):p&&(p.d(1),p=null)},d(b){b&&ae(e),v.d(),U&&U.d(),z&&z.d(),p&&p.d()}}}function Tt(t){let e,a,r,i,l,d,L,c,g,O,A,D,B,C,$,w,Y,ue,ie,se,te,G,R,s,n,u=t[0],f=[];for(let h=0;h<u.length;h+=1)f[h]=it(et(t,u,h));return{c(){e=k("section"),a=k("table"),r=k("thead"),i=k("tr"),l=k("th"),l.innerHTML='Name <i class="icon-sort"></i>',d=T(),L=k("th"),L.innerHTML='Status <i class="icon-sort"></i>',c=T(),g=k("th"),g.textContent="Owner",O=T(),A=k("th"),A.textContent="Notes",D=T(),B=k("th"),B.textContent="Date created",C=T(),$=k("th"),$.textContent="Date retired",w=T(),Y=k("th"),Y.textContent="Code",ue=T(),ie=k("th"),ie.textContent="Scraper",se=T(),te=k("th"),te.textContent="Datasheet",G=T(),R=k("tbody");for(let h=0;h<f.length;h+=1)f[h].c();I(l,"class","sortable"),I(L,"class","sortable")},m(h,m){le(h,e,m),o(e,a),o(a,r),o(r,i),o(i,l),o(i,d),o(i,L),o(i,c),o(i,g),o(i,O),o(i,A),o(i,D),o(i,B),o(i,C),o(i,$),o(i,w),o(i,Y),o(i,ue),o(i,ie),o(i,se),o(i,te),o(a,G),o(a,R);for(let _=0;_<f.length;_+=1)f[_]&&f[_].m(R,null);s||(n=[Ne(l,"click",function(){Ie(t[1]("Name"))&&t[1]("Name").apply(this,arguments)}),Ne(L,"click",function(){Ie(t[1]("Status"))&&t[1]("Status").apply(this,arguments)})],s=!0)},p(h,[m]){if(t=h,m&1){u=t[0];let _;for(_=0;_<u.length;_+=1){const F=et(t,u,_);f[_]?f[_].p(F,m):(f[_]=it(F),f[_].c(),f[_].m(R,null))}for(;_<f.length;_+=1)f[_].d(1);f.length=u.length}},i:Oe,o:Oe,d(h){h&&ae(e),Fe(f,h),s=!1,De(n)}}}function At(t,e,a){let r,{data:i}=e,l={col:"Name",ascending:!0};return t.$$set=d=>{"data"in d&&a(0,i=d.data)},t.$$.update=()=>{t.$$.dirty&5&&a(1,r=d=>{l.col==d?a(2,l.ascending=!l.ascending,l):(a(2,l.col=d,l),a(2,l.ascending=!0,l));let L=l.ascending?1:-1,c=(g,O)=>g[d]<O[d]?-1*L:g[d]>O[d]?1*L:0;a(0,i=i.sort(c))})},[i,r,l]}class Lt extends Ye{constructor(e){super(),Qe(this,e,At,Tt,He,{data:0})}}function st(t,e,a){const r=t.slice();return r[3]=e[a],r}function It(t){let e=t[3].Owner+"",a;return{c(){a=Z(e)},m(r,i){le(r,a,i)},p(r,i){i&1&&e!==(e=r[3].Owner+"")&&ne(a,e)},d(r){r&&ae(a)}}}function zt(t){let e,a=t[3].Owner+"",r,i;return{c(){e=k("a"),r=Z(a),I(e,"href",i="mailto:"+t[3]["Owner email"])},m(l,d){le(l,e,d),o(e,r)},p(l,d){d&1&&a!==(a=l[3].Owner+"")&&ne(r,a),d&1&&i!==(i="mailto:"+l[3]["Owner email"])&&I(e,"href",i)},d(l){l&&ae(e)}}}function Nt(t){let e=t[3]["Run location"]+"",a;return{c(){a=Z(e)},m(r,i){le(r,a,i)},p(r,i){i&1&&e!==(e=r[3]["Run location"]+"")&&ne(a,e)},d(r){r&&ae(a)}}}function Mt(t){let e,a=t[3]["Run location"]+"",r,i;return{c(){e=k("a"),r=Z(a),I(e,"href",i=t[3]["Run URL"]),I(e,"target","_blank")},m(l,d){le(l,e,d),o(e,r)},p(l,d){d&1&&a!==(a=l[3]["Run location"]+"")&&ne(r,a),d&1&&i!==(i=l[3]["Run URL"])&&I(e,"href",i)},d(l){l&&ae(e)}}}function at(t){let e,a,r,i=t[3].Name+"",l,d,L,c,g=t[3].Status+"",O,A,D,B,C,$,w=t[3].Notes+"",Y,ue,ie,se=t[3]["Date created"]+"",te,G,R,s=t[3]["Date retired"]+"",n,u,f,h,m,_=t[3].Schedule+"",F,H,y,P=t[3].Duration+"",v,U;function z(S,M){return S[3]["Owner email"]?zt:It}let p=z(t),b=p(t);function N(S,M){return S[3]["Run URL"]?Mt:Nt}let W=N(t),j=W(t);return{c(){e=k("tr"),a=k("td"),r=k("a"),l=Z(i),L=T(),c=k("td"),O=Z(g),D=T(),B=k("td"),b.c(),C=T(),$=k("td"),Y=Z(w),ue=T(),ie=k("td"),te=Z(se),G=T(),R=k("td"),n=Z(s),u=T(),f=k("td"),j.c(),h=T(),m=k("td"),F=Z(_),H=T(),y=k("td"),v=Z(P),U=T(),I(r,"href",d=t[3]["Scraper repository"]),I(r,"target","_blank"),I(c,"class",A=t[3].Status.replace(/\s/g,""))},m(S,M){le(S,e,M),o(e,a),o(a,r),o(r,l),o(e,L),o(e,c),o(c,O),o(e,D),o(e,B),b.m(B,null),o(e,C),o(e,$),o($,Y),o(e,ue),o(e,ie),o(ie,te),o(e,G),o(e,R),o(R,n),o(e,u),o(e,f),j.m(f,null),o(e,h),o(e,m),o(m,F),o(e,H),o(e,y),o(y,v),o(e,U)},p(S,M){M&1&&i!==(i=S[3].Name+"")&&ne(l,i),M&1&&d!==(d=S[3]["Scraper repository"])&&I(r,"href",d),M&1&&g!==(g=S[3].Status+"")&&ne(O,g),M&1&&A!==(A=S[3].Status.replace(/\s/g,""))&&I(c,"class",A),p===(p=z(S))&&b?b.p(S,M):(b.d(1),b=p(S),b&&(b.c(),b.m(B,null))),M&1&&w!==(w=S[3].Notes+"")&&ne(Y,w),M&1&&se!==(se=S[3]["Date created"]+"")&&ne(te,se),M&1&&s!==(s=S[3]["Date retired"]+"")&&ne(n,s),W===(W=N(S))&&j?j.p(S,M):(j.d(1),j=W(S),j&&(j.c(),j.m(f,null))),M&1&&_!==(_=S[3].Schedule+"")&&ne(F,_),M&1&&P!==(P=S[3].Duration+"")&&ne(v,P)},d(S){S&&ae(e),b.d(),j.d()}}}function $t(t){let e,a,r,i,l,d,L,c,g,O,A,D,B,C,$,w,Y,ue,ie,se,te,G,R,s,n,u=t[0],f=[];for(let h=0;h<u.length;h+=1)f[h]=at(st(t,u,h));return{c(){e=k("section"),a=k("table"),r=k("thead"),i=k("tr"),l=k("th"),l.innerHTML='Name <i class="icon-sort"></i>',d=T(),L=k("th"),L.innerHTML='Status <i class="icon-sort"></i>',c=T(),g=k("th"),g.textContent="Owner",O=T(),A=k("th"),A.textContent="Notes",D=T(),B=k("th"),B.textContent="Date created",C=T(),$=k("th"),$.textContent="Date retired",w=T(),Y=k("th"),Y.textContent="Run location",ue=T(),ie=k("th"),ie.textContent="Schedule",se=T(),te=k("th"),te.textContent="Duration",G=T(),R=k("tbody");for(let h=0;h<f.length;h+=1)f[h].c();I(l,"class","sortable"),I(L,"class","sortable")},m(h,m){le(h,e,m),o(e,a),o(a,r),o(r,i),o(i,l),o(i,d),o(i,L),o(i,c),o(i,g),o(i,O),o(i,A),o(i,D),o(i,B),o(i,C),o(i,$),o(i,w),o(i,Y),o(i,ue),o(i,ie),o(i,se),o(i,te),o(a,G),o(a,R);for(let _=0;_<f.length;_+=1)f[_]&&f[_].m(R,null);s||(n=[Ne(l,"click",function(){Ie(t[1]("Name"))&&t[1]("Name").apply(this,arguments)}),Ne(L,"click",function(){Ie(t[1]("Status"))&&t[1]("Status").apply(this,arguments)})],s=!0)},p(h,[m]){if(t=h,m&1){u=t[0];let _;for(_=0;_<u.length;_+=1){const F=st(t,u,_);f[_]?f[_].p(F,m):(f[_]=at(F),f[_].c(),f[_].m(R,null))}for(;_<f.length;_+=1)f[_].d(1);f.length=u.length}},i:Oe,o:Oe,d(h){h&&ae(e),Fe(f,h),s=!1,De(n)}}}function Ft(t,e,a){let r,{data:i}=e,l={col:"Name",ascending:!0};return t.$$set=d=>{"data"in d&&a(0,i=d.data)},t.$$.update=()=>{t.$$.dirty&5&&a(1,r=d=>{l.col==d?a(2,l.ascending=!l.ascending,l):(a(2,l.col=d,l),a(2,l.ascending=!0,l));let L=l.ascending?1:-1,c=(g,O)=>g[d]<O[d]?-1*L:g[d]>O[d]?1*L:0;a(0,i=i.sort(c))})},[i,r,l]}class Pt extends Ye{constructor(e){super(),Qe(this,e,Ft,$t,He,{data:0})}}function lt(t,e,a){const r=t.slice();return r[5]=e[a],r[7]=a,r}function ot(t,e,a){const r=t.slice();return r[5]=e[a],r[7]=a,r}function ut(t){let e,a=t[5].name+"",r,i,l,d;function L(){return t[4](t[7])}return{c(){e=k("div"),r=Z(a),i=T(),I(e,"class","tab svelte-12zfymz"),Ve(e,"active",t[7]===t[2])},m(c,g){le(c,e,g),o(e,r),o(e,i),l||(d=Ne(e,"click",L),l=!0)},p(c,g){t=c,g&8&&a!==(a=t[5].name+"")&&ne(r,a),g&4&&Ve(e,"active",t[7]===t[2])},d(c){c&&ae(e),l=!1,d()}}}function ft(t){let e,a,r,i;const l=[qt,Ut],d=[];function L(c,g){return c[7]===0?0:1}return e=L(t),a=d[e]=l[e](t),{c(){a.c(),r=dt()},m(c,g){d[e].m(c,g),le(c,r,g),i=!0},p(c,g){a.p(c,g)},i(c){i||(ge(a),i=!0)},o(c){Re(a),i=!1},d(c){d[e].d(c),c&&ae(r)}}}function Ut(t){let e,a;return e=new Pt({props:{data:t[1]}}),{c(){mt(e.$$.fragment)},m(r,i){We(e,r,i),a=!0},p(r,i){const l={};i&2&&(l.data=r[1]),e.$set(l)},i(r){a||(ge(e.$$.fragment,r),a=!0)},o(r){Re(e.$$.fragment,r),a=!1},d(r){Ke(e,r)}}}function qt(t){let e,a;return e=new Lt({props:{data:t[0]}}),{c(){mt(e.$$.fragment)},m(r,i){We(e,r,i),a=!0},p(r,i){const l={};i&1&&(l.data=r[0]),e.$set(l)},i(r){a||(ge(e.$$.fragment,r),a=!0)},o(r){Re(e.$$.fragment,r),a=!1},d(r){Ke(e,r)}}}function ct(t){let e,a,r=t[7]===t[2]&&ft(t);return{c(){r&&r.c(),e=dt()},m(i,l){r&&r.m(i,l),le(i,e,l),a=!0},p(i,l){i[7]===i[2]?r?(r.p(i,l),l&4&&ge(r,1)):(r=ft(i),r.c(),ge(r,1),r.m(e.parentNode,e)):r&&(_t(),Re(r,1,1,()=>{r=null}),gt())},i(i){a||(ge(r),a=!0)},o(i){Re(r),a=!1},d(i){r&&r.d(i),i&&ae(e)}}}function Bt(t){let e,a,r,i,l,d,L,c,g=t[3],O=[];for(let C=0;C<g.length;C+=1)O[C]=ut(ot(t,g,C));let A=t[3],D=[];for(let C=0;C<A.length;C+=1)D[C]=ct(lt(t,A,C));const B=C=>Re(D[C],1,1,()=>{D[C]=null});return{c(){e=k("main"),a=k("div"),a.innerHTML=`<h1>Data Visualization and Pipeline Directory</h1> 
    <a href="https://centre.humdata.org" target="_blank" rel="noreferrer" class="svelte-12zfymz"><img src="images/centreforHumdata_green_TransparentBG.png" class="logo svelte-12zfymz" alt="Centre for Humanitarian Data Logo"/></a>`,r=T(),i=k("a"),i.textContent="DIRECTORY DATA",l=T(),d=k("div");for(let C=0;C<O.length;C+=1)O[C].c();L=T();for(let C=0;C<D.length;C+=1)D[C].c();I(a,"class","header svelte-12zfymz"),I(i,"href","https://docs.google.com/spreadsheets/d/1T_ylCD9j6BYnz6T1uBmRHv0ftz0zLTQLTYucJgYiTZ4"),I(i,"target","_blank"),I(d,"class","tabs svelte-12zfymz")},m(C,$){le(C,e,$),o(e,a),o(e,r),o(e,i),o(e,l),o(e,d);for(let w=0;w<O.length;w+=1)O[w]&&O[w].m(d,null);o(e,L);for(let w=0;w<D.length;w+=1)D[w]&&D[w].m(e,null);c=!0},p(C,[$]){if($&12){g=C[3];let w;for(w=0;w<g.length;w+=1){const Y=ot(C,g,w);O[w]?O[w].p(Y,$):(O[w]=ut(Y),O[w].c(),O[w].m(d,null))}for(;w<O.length;w+=1)O[w].d(1);O.length=g.length}if($&15){A=C[3];let w;for(w=0;w<A.length;w+=1){const Y=lt(C,A,w);D[w]?(D[w].p(Y,$),ge(D[w],1)):(D[w]=ct(Y),D[w].c(),ge(D[w],1),D[w].m(e,null))}for(_t(),w=A.length;w<D.length;w+=1)B(w);gt()}},i(C){if(!c){for(let $=0;$<A.length;$+=1)ge(D[$]);c=!0}},o(C){D=D.filter(Boolean);for(let $=0;$<D.length;$+=1)Re(D[$]);c=!1},d(C){C&&ae(e),Fe(O,C),Fe(D,C)}}}function Ht(t,e,a){let r,i,l=[];Ge.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vRqBuIYkkzFIMlq541njH9S9mO-nda40sab-AMP4tlhcWFiZt0QrcXOVS44ALJtDW17yu53vyhbUEuY/pub?gid=0&single=true&output=csv",{header:!0,download:!0,complete(c){a(0,l=c.data)}});let d=[];Ge.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vRqBuIYkkzFIMlq541njH9S9mO-nda40sab-AMP4tlhcWFiZt0QrcXOVS44ALJtDW17yu53vyhbUEuY/pub?gid=87687849&single=true&output=csv",{header:!0,download:!0,complete(c){a(1,d=c.data)}});const L=c=>a(2,i=c);return a(3,r=[{name:"Data Visualizations"},{name:"Pipelines"}]),a(2,i=0),[l,d,i,r,L]}class jt extends Ye{constructor(e){super(),Qe(this,e,Ht,Bt,He,{})}}new jt({target:document.getElementById("app")});
