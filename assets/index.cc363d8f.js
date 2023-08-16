(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))s(f);new MutationObserver(f=>{for(const y of f)if(y.type==="childList")for(const S of y.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&s(S)}).observe(document,{childList:!0,subtree:!0});function o(f){const y={};return f.integrity&&(y.integrity=f.integrity),f.referrerpolicy&&(y.referrerPolicy=f.referrerpolicy),f.crossorigin==="use-credentials"?y.credentials="include":f.crossorigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function s(f){if(f.ep)return;f.ep=!0;const y=o(f);fetch(f.href,y)}})();function Ae(){}function Ze(n){return n()}function Ne(){return Object.create(null)}function Te(n){n.forEach(Ze)}function Ge(n){return typeof n=="function"}function tt(n,r){return n!=n?r==r:n!==r||n&&typeof n=="object"||typeof n=="function"}function rt(n){return Object.keys(n).length===0}function Ie(n){return n==null?"":n}function c(n,r){n.appendChild(r)}function we(n,r,o){n.insertBefore(r,o||null)}function ye(n){n.parentNode&&n.parentNode.removeChild(n)}function qe(n,r){for(let o=0;o<n.length;o+=1)n[o]&&n[o].d(r)}function k(n){return document.createElement(n)}function ie(n){return document.createTextNode(n)}function H(){return ie(" ")}function M(n,r,o){o==null?n.removeAttribute(r):n.getAttribute(r)!==o&&n.setAttribute(r,o)}function nt(n){return Array.from(n.childNodes)}function ce(n,r){r=""+r,n.data!==r&&(n.data=r)}let $e;function Re(n){$e=n}const Oe=[],Pe=[];let Se=[];const Ue=[],it=Promise.resolve();let xe=!1;function st(){xe||(xe=!0,it.then(Ve))}function Fe(n){Se.push(n)}const ze=new Set;let Ce=0;function Ve(){if(Ce!==0)return;const n=$e;do{try{for(;Ce<Oe.length;){const r=Oe[Ce];Ce++,Re(r),at(r.$$)}}catch(r){throw Oe.length=0,Ce=0,r}for(Re(null),Oe.length=0,Ce=0;Pe.length;)Pe.pop()();for(let r=0;r<Se.length;r+=1){const o=Se[r];ze.has(o)||(ze.add(o),o())}Se.length=0}while(Oe.length);for(;Ue.length;)Ue.pop()();xe=!1,ze.clear(),Re(n)}function at(n){if(n.fragment!==null){n.update(),Te(n.before_update);const r=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,r),n.after_update.forEach(Fe)}}function ot(n){const r=[],o=[];Se.forEach(s=>n.indexOf(s)===-1?r.push(s):o.push(s)),o.forEach(s=>s()),Se=r}const lt=new Set;function ut(n,r){n&&n.i&&(lt.delete(n),n.i(r))}function ft(n,r,o,s){const{fragment:f,after_update:y}=n.$$;f&&f.m(r,o),s||Fe(()=>{const S=n.$$.on_mount.map(Ze).filter(Ge);n.$$.on_destroy?n.$$.on_destroy.push(...S):Te(S),n.$$.on_mount=[]}),y.forEach(Fe)}function ht(n,r){const o=n.$$;o.fragment!==null&&(ot(o.after_update),Te(o.on_destroy),o.fragment&&o.fragment.d(r),o.on_destroy=o.fragment=null,o.ctx=[])}function ct(n,r){n.$$.dirty[0]===-1&&(Oe.push(n),st(),n.$$.dirty.fill(0)),n.$$.dirty[r/31|0]|=1<<r%31}function dt(n,r,o,s,f,y,S,Y=[-1]){const p=$e;Re(n);const b=n.$$={fragment:null,ctx:[],props:y,update:Ae,not_equal:f,bound:Ne(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(p?p.$$.context:[])),callbacks:Ne(),dirty:Y,skip_bound:!1,root:r.target||p.$$.root};S&&S(b.root);let x=!1;if(b.ctx=o?o(n,r.props||{},(T,P,...B)=>{const K=B.length?B[0]:P;return b.ctx&&f(b.ctx[T],b.ctx[T]=K)&&(!b.skip_bound&&b.bound[T]&&b.bound[T](K),x&&ct(n,T)),P}):[],b.update(),x=!0,Te(b.before_update),b.fragment=s?s(b.ctx):!1,r.target){if(r.hydrate){const T=nt(r.target);b.fragment&&b.fragment.l(T),T.forEach(ye)}else b.fragment&&b.fragment.c();r.intro&&ut(n.$$.fragment),ft(n,r.target,r.anchor,r.customElement),Ve()}Re(p)}class pt{$destroy(){ht(this,1),this.$destroy=Ae}$on(r,o){if(!Ge(o))return Ae;const s=this.$$.callbacks[r]||(this.$$.callbacks[r]=[]);return s.push(o),()=>{const f=s.indexOf(o);f!==-1&&s.splice(f,1)}}$set(r){this.$$set&&!rt(r)&&(this.$$.skip_bound=!0,this.$$set(r),this.$$.skip_bound=!1)}}var _t=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},et={exports:{}};/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(n,r){(function(o,s){n.exports=s()})(_t,function o(){var s=typeof self<"u"?self:typeof window<"u"?window:s!==void 0?s:{},f=!s.document&&!!s.postMessage,y=s.IS_PAPA_WORKER||!1,S={},Y=0,p={parse:function(t,e){var i=(e=e||{}).dynamicTyping||!1;if(d(i)&&(e.dynamicTypingFunction=i,i={}),e.dynamicTyping=i,e.transform=!!d(e.transform)&&e.transform,e.worker&&p.WORKERS_SUPPORTED){var a=function(){if(!p.WORKERS_SUPPORTED)return!1;var h=(C=s.URL||s.webkitURL||null,A=o.toString(),p.BLOB_URL||(p.BLOB_URL=C.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",A,")();"],{type:"text/javascript"})))),g=new s.Worker(h),C,A;return g.onmessage=te,g.id=Y++,S[g.id]=g}();return a.userStep=e.step,a.userChunk=e.chunk,a.userComplete=e.complete,a.userError=e.error,e.step=d(e.step),e.chunk=d(e.chunk),e.complete=d(e.complete),e.error=d(e.error),delete e.worker,void a.postMessage({input:t,config:e,workerId:a.id})}var l=null;return p.NODE_STREAM_INPUT,typeof t=="string"?(t=function(h){return h.charCodeAt(0)===65279?h.slice(1):h}(t),l=e.download?new T(e):new B(e)):t.readable===!0&&d(t.read)&&d(t.on)?l=new K(e):(s.File&&t instanceof File||t instanceof Object)&&(l=new P(e)),l.stream(t)},unparse:function(t,e){var i=!1,a=!0,l=",",h=`\r
`,g='"',C=g+g,A=!1,_=null,L=!1;(function(){if(typeof e=="object"){if(typeof e.delimiter!="string"||p.BAD_DELIMITERS.filter(function(u){return e.delimiter.indexOf(u)!==-1}).length||(l=e.delimiter),(typeof e.quotes=="boolean"||typeof e.quotes=="function"||Array.isArray(e.quotes))&&(i=e.quotes),typeof e.skipEmptyLines!="boolean"&&typeof e.skipEmptyLines!="string"||(A=e.skipEmptyLines),typeof e.newline=="string"&&(h=e.newline),typeof e.quoteChar=="string"&&(g=e.quoteChar),typeof e.header=="boolean"&&(a=e.header),Array.isArray(e.columns)){if(e.columns.length===0)throw new Error("Option columns is empty");_=e.columns}e.escapeChar!==void 0&&(C=e.escapeChar+g),(typeof e.escapeFormulae=="boolean"||e.escapeFormulae instanceof RegExp)&&(L=e.escapeFormulae instanceof RegExp?e.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var m=new RegExp(se(g),"g");if(typeof t=="string"&&(t=JSON.parse(t)),Array.isArray(t)){if(!t.length||Array.isArray(t[0]))return D(null,t,A);if(typeof t[0]=="object")return D(_||Object.keys(t[0]),t,A)}else if(typeof t=="object")return typeof t.data=="string"&&(t.data=JSON.parse(t.data)),Array.isArray(t.data)&&(t.fields||(t.fields=t.meta&&t.meta.fields||_),t.fields||(t.fields=Array.isArray(t.data[0])?t.fields:typeof t.data[0]=="object"?Object.keys(t.data[0]):[]),Array.isArray(t.data[0])||typeof t.data[0]=="object"||(t.data=[t.data])),D(t.fields||[],t.data||[],A);throw new Error("Unable to serialize unrecognized input");function D(u,$,re){var U="";typeof u=="string"&&(u=JSON.parse(u)),typeof $=="string"&&($=JSON.parse($));var ee=Array.isArray(u)&&0<u.length,Z=!Array.isArray($[0]);if(ee&&a){for(var G=0;G<u.length;G++)0<G&&(U+=l),U+=E(u[G],G);0<$.length&&(U+=h)}for(var v=0;v<$.length;v++){var O=ee?u.length:$[v].length,N=!1,J=ee?Object.keys($[v]).length===0:$[v].length===0;if(re&&!ee&&(N=re==="greedy"?$[v].join("").trim()==="":$[v].length===1&&$[v][0].length===0),re==="greedy"&&ee){for(var I=[],ne=0;ne<O;ne++){var j=Z?u[ne]:ne;I.push($[v][j])}N=I.join("").trim()===""}if(!N){for(var z=0;z<O;z++){0<z&&!J&&(U+=l);var he=ee&&Z?u[z]:z;U+=E($[v][he],z)}v<$.length-1&&(!re||0<O&&!J)&&(U+=h)}}return U}function E(u,$){if(u==null)return"";if(u.constructor===Date)return JSON.stringify(u).slice(1,25);var re=!1;L&&typeof u=="string"&&L.test(u)&&(u="'"+u,re=!0);var U=u.toString().replace(m,C);return(re=re||i===!0||typeof i=="function"&&i(u,$)||Array.isArray(i)&&i[$]||function(ee,Z){for(var G=0;G<Z.length;G++)if(-1<ee.indexOf(Z[G]))return!0;return!1}(U,p.BAD_DELIMITERS)||-1<U.indexOf(l)||U.charAt(0)===" "||U.charAt(U.length-1)===" ")?g+U+g:U}}};if(p.RECORD_SEP=String.fromCharCode(30),p.UNIT_SEP=String.fromCharCode(31),p.BYTE_ORDER_MARK="\uFEFF",p.BAD_DELIMITERS=["\r",`
`,'"',p.BYTE_ORDER_MARK],p.WORKERS_SUPPORTED=!f&&!!s.Worker,p.NODE_STREAM_INPUT=1,p.LocalChunkSize=10485760,p.RemoteChunkSize=5242880,p.DefaultDelimiter=",",p.Parser=ae,p.ParserHandle=X,p.NetworkStreamer=T,p.FileStreamer=P,p.StringStreamer=B,p.ReadableStreamStreamer=K,s.jQuery){var b=s.jQuery;b.fn.parse=function(t){var e=t.config||{},i=[];return this.each(function(h){if(!(b(this).prop("tagName").toUpperCase()==="INPUT"&&b(this).attr("type").toLowerCase()==="file"&&s.FileReader)||!this.files||this.files.length===0)return!0;for(var g=0;g<this.files.length;g++)i.push({file:this.files[g],inputElem:this,instanceConfig:b.extend({},e)})}),a(),this;function a(){if(i.length!==0){var h,g,C,A,_=i[0];if(d(t.before)){var L=t.before(_.file,_.inputElem);if(typeof L=="object"){if(L.action==="abort")return h="AbortError",g=_.file,C=_.inputElem,A=L.reason,void(d(t.error)&&t.error({name:h},g,C,A));if(L.action==="skip")return void l();typeof L.config=="object"&&(_.instanceConfig=b.extend(_.instanceConfig,L.config))}else if(L==="skip")return void l()}var m=_.instanceConfig.complete;_.instanceConfig.complete=function(D){d(m)&&m(D,_.file,_.inputElem),l()},p.parse(_.file,_.instanceConfig)}else d(t.complete)&&t.complete()}function l(){i.splice(0,1),a()}}}function x(t){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var i=Q(e);i.chunkSize=parseInt(i.chunkSize),e.step||e.chunk||(i.chunkSize=null),this._handle=new X(i),(this._handle.streamer=this)._config=i}.call(this,t),this.parseChunk=function(e,i){if(this.isFirstChunk&&d(this._config.beforeFirstChunk)){var a=this._config.beforeFirstChunk(e);a!==void 0&&(e=a)}this.isFirstChunk=!1,this._halted=!1;var l=this._partialLine+e;this._partialLine="";var h=this._handle.parse(l,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var g=h.meta.cursor;this._finished||(this._partialLine=l.substring(g-this._baseIndex),this._baseIndex=g),h&&h.data&&(this._rowCount+=h.data.length);var C=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(y)s.postMessage({results:h,workerId:p.WORKER_ID,finished:C});else if(d(this._config.chunk)&&!i){if(this._config.chunk(h,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);h=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(h.data),this._completeResults.errors=this._completeResults.errors.concat(h.errors),this._completeResults.meta=h.meta),this._completed||!C||!d(this._config.complete)||h&&h.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),C||h&&h.meta.paused||this._nextChunk(),h}this._halted=!0},this._sendError=function(e){d(this._config.error)?this._config.error(e):y&&this._config.error&&s.postMessage({workerId:p.WORKER_ID,error:e,finished:!1})}}function T(t){var e;(t=t||{}).chunkSize||(t.chunkSize=p.RemoteChunkSize),x.call(this,t),this._nextChunk=f?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(i){this._input=i,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(e=new XMLHttpRequest,this._config.withCredentials&&(e.withCredentials=this._config.withCredentials),f||(e.onload=w(this._chunkLoaded,this),e.onerror=w(this._chunkError,this)),e.open(this._config.downloadRequestBody?"POST":"GET",this._input,!f),this._config.downloadRequestHeaders){var i=this._config.downloadRequestHeaders;for(var a in i)e.setRequestHeader(a,i[a])}if(this._config.chunkSize){var l=this._start+this._config.chunkSize-1;e.setRequestHeader("Range","bytes="+this._start+"-"+l)}try{e.send(this._config.downloadRequestBody)}catch(h){this._chunkError(h.message)}f&&e.status===0&&this._chunkError()}},this._chunkLoaded=function(){e.readyState===4&&(e.status<200||400<=e.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:e.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(i){var a=i.getResponseHeader("Content-Range");return a===null?-1:parseInt(a.substring(a.lastIndexOf("/")+1))}(e),this.parseChunk(e.responseText)))},this._chunkError=function(i){var a=e.statusText||i;this._sendError(new Error(a))}}function P(t){var e,i;(t=t||{}).chunkSize||(t.chunkSize=p.LocalChunkSize),x.call(this,t);var a=typeof FileReader<"u";this.stream=function(l){this._input=l,i=l.slice||l.webkitSlice||l.mozSlice,a?((e=new FileReader).onload=w(this._chunkLoaded,this),e.onerror=w(this._chunkError,this)):e=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var l=this._input;if(this._config.chunkSize){var h=Math.min(this._start+this._config.chunkSize,this._input.size);l=i.call(l,this._start,h)}var g=e.readAsText(l,this._config.encoding);a||this._chunkLoaded({target:{result:g}})},this._chunkLoaded=function(l){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(l.target.result)},this._chunkError=function(){this._sendError(e.error)}}function B(t){var e;x.call(this,t=t||{}),this.stream=function(i){return e=i,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var i,a=this._config.chunkSize;return a?(i=e.substring(0,a),e=e.substring(a)):(i=e,e=""),this._finished=!e,this.parseChunk(i)}}}function K(t){x.call(this,t=t||{});var e=[],i=!0,a=!1;this.pause=function(){x.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){x.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(l){this._input=l,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){a&&e.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),e.length?this.parseChunk(e.shift()):i=!0},this._streamData=w(function(l){try{e.push(typeof l=="string"?l:l.toString(this._config.encoding)),i&&(i=!1,this._checkIsFinished(),this.parseChunk(e.shift()))}catch(h){this._streamError(h)}},this),this._streamError=w(function(l){this._streamCleanUp(),this._sendError(l)},this),this._streamEnd=w(function(){this._streamCleanUp(),a=!0,this._streamData("")},this),this._streamCleanUp=w(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function X(t){var e,i,a,l=Math.pow(2,53),h=-l,g=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,C=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,A=this,_=0,L=0,m=!1,D=!1,E=[],u={data:[],errors:[],meta:{}};if(d(t.step)){var $=t.step;t.step=function(v){if(u=v,ee())U();else{if(U(),u.data.length===0)return;_+=v.data.length,t.preview&&_>t.preview?i.abort():(u.data=u.data[0],$(u,A))}}}function re(v){return t.skipEmptyLines==="greedy"?v.join("").trim()==="":v.length===1&&v[0].length===0}function U(){return u&&a&&(G("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+p.DefaultDelimiter+"'"),a=!1),t.skipEmptyLines&&(u.data=u.data.filter(function(v){return!re(v)})),ee()&&function(){if(!u)return;function v(N,J){d(t.transformHeader)&&(N=t.transformHeader(N,J)),E.push(N)}if(Array.isArray(u.data[0])){for(var O=0;ee()&&O<u.data.length;O++)u.data[O].forEach(v);u.data.splice(0,1)}else u.data.forEach(v)}(),function(){if(!u||!t.header&&!t.dynamicTyping&&!t.transform)return u;function v(N,J){var I,ne=t.header?{}:[];for(I=0;I<N.length;I++){var j=I,z=N[I];t.header&&(j=I>=E.length?"__parsed_extra":E[I]),t.transform&&(z=t.transform(z,j)),z=Z(j,z),j==="__parsed_extra"?(ne[j]=ne[j]||[],ne[j].push(z)):ne[j]=z}return t.header&&(I>E.length?G("FieldMismatch","TooManyFields","Too many fields: expected "+E.length+" fields but parsed "+I,L+J):I<E.length&&G("FieldMismatch","TooFewFields","Too few fields: expected "+E.length+" fields but parsed "+I,L+J)),ne}var O=1;return!u.data.length||Array.isArray(u.data[0])?(u.data=u.data.map(v),O=u.data.length):u.data=v(u.data,0),t.header&&u.meta&&(u.meta.fields=E),L+=O,u}()}function ee(){return t.header&&E.length===0}function Z(v,O){return N=v,t.dynamicTypingFunction&&t.dynamicTyping[N]===void 0&&(t.dynamicTyping[N]=t.dynamicTypingFunction(N)),(t.dynamicTyping[N]||t.dynamicTyping)===!0?O==="true"||O==="TRUE"||O!=="false"&&O!=="FALSE"&&(function(J){if(g.test(J)){var I=parseFloat(J);if(h<I&&I<l)return!0}return!1}(O)?parseFloat(O):C.test(O)?new Date(O):O===""?null:O):O;var N}function G(v,O,N,J){var I={type:v,code:O,message:N};J!==void 0&&(I.row=J),u.errors.push(I)}this.parse=function(v,O,N){var J=t.quoteChar||'"';if(t.newline||(t.newline=function(j,z){j=j.substring(0,1048576);var he=new RegExp(se(z)+"([^]*?)"+se(z),"gm"),oe=(j=j.replace(he,"")).split("\r"),de=j.split(`
`),pe=1<de.length&&de[0].length<oe[0].length;if(oe.length===1||pe)return`
`;for(var le=0,q=0;q<oe.length;q++)oe[q][0]===`
`&&le++;return le>=oe.length/2?`\r
`:"\r"}(v,J)),a=!1,t.delimiter)d(t.delimiter)&&(t.delimiter=t.delimiter(v),u.meta.delimiter=t.delimiter);else{var I=function(j,z,he,oe,de){var pe,le,q,W;de=de||[",","	","|",";",p.RECORD_SEP,p.UNIT_SEP];for(var be=0;be<de.length;be++){var R=de[be],Ee=0,_e=0,ke=0;q=void 0;for(var ge=new ae({comments:oe,delimiter:R,newline:z,preview:10}).parse(j),me=0;me<ge.data.length;me++)if(he&&re(ge.data[me]))ke++;else{var ve=ge.data[me].length;_e+=ve,q!==void 0?0<ve&&(Ee+=Math.abs(ve-q),q=ve):q=ve}0<ge.data.length&&(_e/=ge.data.length-ke),(le===void 0||Ee<=le)&&(W===void 0||W<_e)&&1.99<_e&&(le=Ee,pe=R,W=_e)}return{successful:!!(t.delimiter=pe),bestDelimiter:pe}}(v,t.newline,t.skipEmptyLines,t.comments,t.delimitersToGuess);I.successful?t.delimiter=I.bestDelimiter:(a=!0,t.delimiter=p.DefaultDelimiter),u.meta.delimiter=t.delimiter}var ne=Q(t);return t.preview&&t.header&&ne.preview++,e=v,i=new ae(ne),u=i.parse(e,O,N),U(),m?{meta:{paused:!0}}:u||{meta:{paused:!1}}},this.paused=function(){return m},this.pause=function(){m=!0,i.abort(),e=d(t.chunk)?"":e.substring(i.getCharIndex())},this.resume=function(){A.streamer._halted?(m=!1,A.streamer.parseChunk(e,!0)):setTimeout(A.resume,3)},this.aborted=function(){return D},this.abort=function(){D=!0,i.abort(),u.meta.aborted=!0,d(t.complete)&&t.complete(u),e=""}}function se(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ae(t){var e,i=(t=t||{}).delimiter,a=t.newline,l=t.comments,h=t.step,g=t.preview,C=t.fastMode,A=e=t.quoteChar===void 0||t.quoteChar===null?'"':t.quoteChar;if(t.escapeChar!==void 0&&(A=t.escapeChar),(typeof i!="string"||-1<p.BAD_DELIMITERS.indexOf(i))&&(i=","),l===i)throw new Error("Comment character same as delimiter");l===!0?l="#":(typeof l!="string"||-1<p.BAD_DELIMITERS.indexOf(l))&&(l=!1),a!==`
`&&a!=="\r"&&a!==`\r
`&&(a=`
`);var _=0,L=!1;this.parse=function(m,D,E){if(typeof m!="string")throw new Error("Input must be a string");var u=m.length,$=i.length,re=a.length,U=l.length,ee=d(h),Z=[],G=[],v=[],O=_=0;if(!m)return ue();if(t.header&&!D){var N=m.split(a)[0].split(i),J=[],I={},ne=!1;for(var j in N){var z=N[j];d(t.transformHeader)&&(z=t.transformHeader(z,j));var he=z,oe=I[z]||0;for(0<oe&&(ne=!0,he=z+"_"+oe),I[z]=oe+1;J.includes(he);)he=he+"_"+oe;J.push(he)}if(ne){var de=m.split(a);de[0]=J.join(i),m=de.join(a)}}if(C||C!==!1&&m.indexOf(e)===-1){for(var pe=m.split(a),le=0;le<pe.length;le++){if(v=pe[le],_+=v.length,le!==pe.length-1)_+=a.length;else if(E)return ue();if(!l||v.substring(0,U)!==l){if(ee){if(Z=[],ke(v.split(i)),De(),L)return ue()}else ke(v.split(i));if(g&&g<=le)return Z=Z.slice(0,g),ue(!0)}}return ue()}for(var q=m.indexOf(i,_),W=m.indexOf(a,_),be=new RegExp(se(A)+se(e),"g"),R=m.indexOf(e,_);;)if(m[_]!==e)if(l&&v.length===0&&m.substring(_,_+U)===l){if(W===-1)return ue();_=W+re,W=m.indexOf(a,_),q=m.indexOf(i,_)}else if(q!==-1&&(q<W||W===-1))v.push(m.substring(_,q)),_=q+$,q=m.indexOf(i,_);else{if(W===-1)break;if(v.push(m.substring(_,W)),ve(W+re),ee&&(De(),L))return ue();if(g&&Z.length>=g)return ue(!0)}else for(R=_,_++;;){if((R=m.indexOf(e,R+1))===-1)return E||G.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:Z.length,index:_}),me();if(R===u-1)return me(m.substring(_,R).replace(be,e));if(e!==A||m[R+1]!==A){if(e===A||R===0||m[R-1]!==A){q!==-1&&q<R+1&&(q=m.indexOf(i,R+1)),W!==-1&&W<R+1&&(W=m.indexOf(a,R+1));var Ee=ge(W===-1?q:Math.min(q,W));if(m.substr(R+1+Ee,$)===i){v.push(m.substring(_,R).replace(be,e)),m[_=R+1+Ee+$]!==e&&(R=m.indexOf(e,_)),q=m.indexOf(i,_),W=m.indexOf(a,_);break}var _e=ge(W);if(m.substring(R+1+_e,R+1+_e+re)===a){if(v.push(m.substring(_,R).replace(be,e)),ve(R+1+_e+re),q=m.indexOf(i,_),R=m.indexOf(e,_),ee&&(De(),L))return ue();if(g&&Z.length>=g)return ue(!0);break}G.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:Z.length,index:_}),R++}}else R++}return me();function ke(fe){Z.push(fe),O=_}function ge(fe){var Me=0;if(fe!==-1){var Le=m.substring(R+1,fe);Le&&Le.trim()===""&&(Me=Le.length)}return Me}function me(fe){return E||(fe===void 0&&(fe=m.substring(_)),v.push(fe),_=u,ke(v),ee&&De()),ue()}function ve(fe){_=fe,ke(v),v=[],W=m.indexOf(a,_)}function ue(fe){return{data:Z,errors:G,meta:{delimiter:i,linebreak:a,aborted:L,truncated:!!fe,cursor:O+(D||0)}}}function De(){h(ue()),Z=[],G=[]}},this.abort=function(){L=!0},this.getCharIndex=function(){return _}}function te(t){var e=t.data,i=S[e.workerId],a=!1;if(e.error)i.userError(e.error,e.file);else if(e.results&&e.results.data){var l={abort:function(){a=!0,V(e.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:F,resume:F};if(d(i.userStep)){for(var h=0;h<e.results.data.length&&(i.userStep({data:e.results.data[h],errors:e.results.errors,meta:e.results.meta},l),!a);h++);delete e.results}else d(i.userChunk)&&(i.userChunk(e.results,l,e.file),delete e.results)}e.finished&&!a&&V(e.workerId,e.results)}function V(t,e){var i=S[t];d(i.userComplete)&&i.userComplete(e),i.terminate(),delete S[t]}function F(){throw new Error("Not implemented.")}function Q(t){if(typeof t!="object"||t===null)return t;var e=Array.isArray(t)?[]:{};for(var i in t)e[i]=Q(t[i]);return e}function w(t,e){return function(){t.apply(e,arguments)}}function d(t){return typeof t=="function"}return y&&(s.onmessage=function(t){var e=t.data;if(p.WORKER_ID===void 0&&e&&(p.WORKER_ID=e.workerId),typeof e.input=="string")s.postMessage({workerId:p.WORKER_ID,results:p.parse(e.input,e.config),finished:!0});else if(s.File&&e.input instanceof File||e.input instanceof Object){var i=p.parse(e.input,e.config);i&&s.postMessage({workerId:p.WORKER_ID,results:i,finished:!0})}}),(T.prototype=Object.create(x.prototype)).constructor=T,(P.prototype=Object.create(x.prototype)).constructor=P,(B.prototype=Object.create(B.prototype)).constructor=B,(K.prototype=Object.create(x.prototype)).constructor=K,p})})(et);const Be=et.exports;function je(n,r,o){const s=n.slice();return s[2]=r[o],s}function He(n,r,o){const s=n.slice();return s[2]=r[o],s}function We(n){let r,o,s;return{c(){r=k("a"),o=ie("Code"),M(r,"href",s=n[2]["Code repository"]),M(r,"target","_blank")},m(f,y){we(f,r,y),c(r,o)},p(f,y){y&1&&s!==(s=f[2]["Code repository"])&&M(r,"href",s)},d(f){f&&ye(r)}}}function Ke(n){let r,o,s;return{c(){r=k("a"),o=ie("Scraper"),M(r,"href",s=n[2]["Scraper repository"]),M(r,"target","_blank")},m(f,y){we(f,r,y),c(r,o)},p(f,y){y&1&&s!==(s=f[2]["Scraper repository"])&&M(r,"href",s)},d(f){f&&ye(r)}}}function Qe(n){let r,o,s;return{c(){r=k("a"),o=ie("Datasheet"),M(r,"href",s=n[2]["Data sheet"]),M(r,"target","_blank")},m(f,y){we(f,r,y),c(r,o)},p(f,y){y&1&&s!==(s=f[2]["Data sheet"])&&M(r,"href",s)},d(f){f&&ye(r)}}}function Je(n){let r,o,s,f=n[2].Name+"",y,S,Y,p,b=n[2].Status+"",x,T,P,B,K=n[2].Owner+"",X,se,ae,te=n[2].Notes+"",V,F,Q,w,d,t,e,i,a=n[2]["Code repository"]&&We(n),l=n[2]["Scraper repository"]&&Ke(n),h=n[2]["Data sheet"]&&Qe(n);return{c(){r=k("tr"),o=k("td"),s=k("a"),y=ie(f),Y=H(),p=k("td"),x=ie(b),P=H(),B=k("td"),X=ie(K),se=H(),ae=k("td"),V=ie(te),F=H(),Q=k("td"),a&&a.c(),w=H(),d=k("td"),l&&l.c(),t=H(),e=k("td"),h&&h.c(),i=H(),M(s,"href",S=n[2].Link),M(s,"target","_blank"),M(p,"class",T=Ie(n[2].Status.replace(/\s/g,""))+" svelte-1prezxq")},m(g,C){we(g,r,C),c(r,o),c(o,s),c(s,y),c(r,Y),c(r,p),c(p,x),c(r,P),c(r,B),c(B,X),c(r,se),c(r,ae),c(ae,V),c(r,F),c(r,Q),a&&a.m(Q,null),c(r,w),c(r,d),l&&l.m(d,null),c(r,t),c(r,e),h&&h.m(e,null),c(r,i)},p(g,C){C&1&&f!==(f=g[2].Name+"")&&ce(y,f),C&1&&S!==(S=g[2].Link)&&M(s,"href",S),C&1&&b!==(b=g[2].Status+"")&&ce(x,b),C&1&&T!==(T=Ie(g[2].Status.replace(/\s/g,""))+" svelte-1prezxq")&&M(p,"class",T),C&1&&K!==(K=g[2].Owner+"")&&ce(X,K),C&1&&te!==(te=g[2].Notes+"")&&ce(V,te),g[2]["Code repository"]?a?a.p(g,C):(a=We(g),a.c(),a.m(Q,null)):a&&(a.d(1),a=null),g[2]["Scraper repository"]?l?l.p(g,C):(l=Ke(g),l.c(),l.m(d,null)):l&&(l.d(1),l=null),g[2]["Data sheet"]?h?h.p(g,C):(h=Qe(g),h.c(),h.m(e,null)):h&&(h.d(1),h=null)},d(g){g&&ye(r),a&&a.d(),l&&l.d(),h&&h.d()}}}function Ye(n){let r=n[2]["Run location"]+"",o;return{c(){o=ie(r)},m(s,f){we(s,o,f)},p(s,f){f&2&&r!==(r=s[2]["Run location"]+"")&&ce(o,r)},d(s){s&&ye(o)}}}function Xe(n){let r,o,s=n[2].Name+"",f,y,S,Y=n[2].Status+"",p,b,x,T,P,B=n[2].Owner+"",K,X,se,ae,te=n[2].Notes+"",V,F,Q,w,d,t,e,i,a,l,h=n[2].Schedule+"",g,C,A,_=n[2].Duration+"",L,m,D=n[2]["Run location"]&&Ye(n);return{c(){r=k("tr"),o=k("td"),f=ie(s),y=H(),S=k("td"),p=ie(Y),x=H(),T=k("td"),P=k("a"),K=ie(B),se=H(),ae=k("td"),V=ie(te),F=H(),Q=k("td"),w=k("a"),d=ie("Scraper"),e=H(),i=k("td"),D&&D.c(),a=H(),l=k("td"),g=ie(h),C=H(),A=k("td"),L=ie(_),m=H(),M(S,"class",b=Ie(n[2].Status.replace(/\s/g,""))+" svelte-1prezxq"),M(P,"href",X=n[2].Owner),M(w,"href",t=n[2]["Scraper repository"]),M(w,"target","_blank")},m(E,u){we(E,r,u),c(r,o),c(o,f),c(r,y),c(r,S),c(S,p),c(r,x),c(r,T),c(T,P),c(P,K),c(r,se),c(r,ae),c(ae,V),c(r,F),c(r,Q),c(Q,w),c(w,d),c(r,e),c(r,i),D&&D.m(i,null),c(r,a),c(r,l),c(l,g),c(r,C),c(r,A),c(A,L),c(r,m)},p(E,u){u&2&&s!==(s=E[2].Name+"")&&ce(f,s),u&2&&Y!==(Y=E[2].Status+"")&&ce(p,Y),u&2&&b!==(b=Ie(E[2].Status.replace(/\s/g,""))+" svelte-1prezxq")&&M(S,"class",b),u&2&&B!==(B=E[2].Owner+"")&&ce(K,B),u&2&&X!==(X=E[2].Owner)&&M(P,"href",X),u&2&&te!==(te=E[2].Notes+"")&&ce(V,te),u&2&&t!==(t=E[2]["Scraper repository"])&&M(w,"href",t),E[2]["Run location"]?D?D.p(E,u):(D=Ye(E),D.c(),D.m(i,null)):D&&(D.d(1),D=null),u&2&&h!==(h=E[2].Schedule+"")&&ce(g,h),u&2&&_!==(_=E[2].Duration+"")&&ce(L,_)},d(E){E&&ye(r),D&&D.d()}}}function gt(n){let r,o,s,f,y,S,Y,p,b,x,T,P,B,K,X,se,ae,te,V=n[0],F=[];for(let d=0;d<V.length;d+=1)F[d]=Je(He(n,V,d));let Q=n[1],w=[];for(let d=0;d<Q.length;d+=1)w[d]=Xe(je(n,Q,d));return{c(){r=k("main"),o=k("div"),o.innerHTML=`<h1>Data Visualization and Pipeline Directory</h1> 
    <a href="https://centre.humdata.org" target="_blank" rel="noreferrer" class="svelte-1prezxq"><img src="images/centreforHumdata_green_TransparentBG.png" class="logo svelte-1prezxq" alt="Centre for Humanitarian Data Logo"/></a>`,s=H(),f=k("section"),y=k("h2"),y.textContent="Data Visualizations",S=H(),Y=k("table"),p=k("thead"),p.innerHTML=`<tr><th>Name</th> 
          <th>Status</th> 
          <th>Owner</th> 
          <th>Notes</th> 
          <th>Code</th> 
          <th>Scraper</th> 
          <th>Datasheet</th></tr>`,b=H(),x=k("tbody");for(let d=0;d<F.length;d+=1)F[d].c();T=H(),P=k("section"),B=k("h2"),B.textContent="Pipelines",K=H(),X=k("table"),se=k("thead"),se.innerHTML=`<tr><th>Name</th> 
          <th>Status</th> 
          <th>Owner</th> 
          <th>Notes</th> 
          <th>Scraper</th> 
          <th>Run location</th> 
          <th>Schedule</th> 
          <th>Duration</th></tr>`,ae=H(),te=k("tbody");for(let d=0;d<w.length;d+=1)w[d].c();M(o,"class","header svelte-1prezxq"),M(Y,"class","svelte-1prezxq"),M(X,"class","svelte-1prezxq")},m(d,t){we(d,r,t),c(r,o),c(r,s),c(r,f),c(f,y),c(f,S),c(f,Y),c(Y,p),c(Y,b),c(Y,x);for(let e=0;e<F.length;e+=1)F[e]&&F[e].m(x,null);c(r,T),c(r,P),c(P,B),c(P,K),c(P,X),c(X,se),c(X,ae),c(X,te);for(let e=0;e<w.length;e+=1)w[e]&&w[e].m(te,null)},p(d,[t]){if(t&1){V=d[0];let e;for(e=0;e<V.length;e+=1){const i=He(d,V,e);F[e]?F[e].p(i,t):(F[e]=Je(i),F[e].c(),F[e].m(x,null))}for(;e<F.length;e+=1)F[e].d(1);F.length=V.length}if(t&2){Q=d[1];let e;for(e=0;e<Q.length;e+=1){const i=je(d,Q,e);w[e]?w[e].p(i,t):(w[e]=Xe(i),w[e].c(),w[e].m(te,null))}for(;e<w.length;e+=1)w[e].d(1);w.length=Q.length}},i:Ae,o:Ae,d(d){d&&ye(r),qe(F,d),qe(w,d)}}}function mt(n,r,o){let s=[];Be.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vRqBuIYkkzFIMlq541njH9S9mO-nda40sab-AMP4tlhcWFiZt0QrcXOVS44ALJtDW17yu53vyhbUEuY/pub?gid=0&single=true&output=csv",{header:!0,download:!0,complete(y){o(0,s=y.data)}});let f=[];return Be.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vRqBuIYkkzFIMlq541njH9S9mO-nda40sab-AMP4tlhcWFiZt0QrcXOVS44ALJtDW17yu53vyhbUEuY/pub?gid=87687849&single=true&output=csv",{header:!0,download:!0,complete(y){o(1,f=y.data),console.log(f)}}),[s,f]}class vt extends pt{constructor(r){super(),dt(this,r,mt,gt,tt,{})}}new vt({target:document.getElementById("app")});
