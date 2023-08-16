(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const g of o)if(g.type==="childList")for(const C of g.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&i(C)}).observe(document,{childList:!0,subtree:!0});function s(o){const g={};return o.integrity&&(g.integrity=o.integrity),o.referrerpolicy&&(g.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?g.credentials="include":o.crossorigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function i(o){if(o.ep)return;o.ep=!0;const g=s(o);fetch(o.href,g)}})();function De(){}function Ve(r){return r()}function $e(){return Object.create(null)}function Ie(r){r.forEach(Ve)}function Se(r){return typeof r=="function"}function nt(r,t){return r!=r?t==t:r!==t||r&&typeof r=="object"||typeof r=="function"}function rt(r){return Object.keys(r).length===0}function Ne(r){return r==null?"":r}function l(r,t){r.appendChild(t)}function ge(r,t,s){r.insertBefore(t,s||null)}function pe(r){r.parentNode&&r.parentNode.removeChild(r)}function Ue(r,t){for(let s=0;s<r.length;s+=1)r[s]&&r[s].d(t)}function b(r){return document.createElement(r)}function ne(r){return document.createTextNode(r)}function T(){return ne(" ")}function Te(r,t,s,i){return r.addEventListener(t,s,i),()=>r.removeEventListener(t,s,i)}function $(r,t,s){s==null?r.removeAttribute(t):r.getAttribute(t)!==s&&r.setAttribute(t,s)}function it(r){return Array.from(r.childNodes)}function ue(r,t){t=""+t,r.data!==t&&(r.data=t)}let xe;function Ae(r){xe=r}const Oe=[],Be=[];let Re=[];const je=[],st=Promise.resolve();let ze=!1;function at(){ze||(ze=!0,st.then(et))}function Pe(r){Re.push(r)}const Me=new Set;let Ee=0;function et(){if(Ee!==0)return;const r=xe;do{try{for(;Ee<Oe.length;){const t=Oe[Ee];Ee++,Ae(t),ot(t.$$)}}catch(t){throw Oe.length=0,Ee=0,t}for(Ae(null),Oe.length=0,Ee=0;Be.length;)Be.pop()();for(let t=0;t<Re.length;t+=1){const s=Re[t];Me.has(s)||(Me.add(s),s())}Re.length=0}while(Oe.length);for(;je.length;)je.pop()();ze=!1,Me.clear(),Ae(r)}function ot(r){if(r.fragment!==null){r.update(),Ie(r.before_update);const t=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,t),r.after_update.forEach(Pe)}}function lt(r){const t=[],s=[];Re.forEach(i=>r.indexOf(i)===-1?t.push(i):s.push(i)),s.forEach(i=>i()),Re=t}const ut=new Set;function ft(r,t){r&&r.i&&(ut.delete(r),r.i(t))}function ht(r,t,s,i){const{fragment:o,after_update:g}=r.$$;o&&o.m(t,s),i||Pe(()=>{const C=r.$$.on_mount.map(Ve).filter(Se);r.$$.on_destroy?r.$$.on_destroy.push(...C):Ie(C),r.$$.on_mount=[]}),g.forEach(Pe)}function ct(r,t){const s=r.$$;s.fragment!==null&&(lt(s.after_update),Ie(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function dt(r,t){r.$$.dirty[0]===-1&&(Oe.push(r),at(),r.$$.dirty.fill(0)),r.$$.dirty[t/31|0]|=1<<t%31}function pt(r,t,s,i,o,g,C,z=[-1]){const p=xe;Ae(r);const k=r.$$={fragment:null,ctx:[],props:g,update:De,not_equal:o,bound:$e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:$e(),dirty:z,skip_bound:!1,root:t.target||p.$$.root};C&&C(k.root);let F=!1;if(k.ctx=s?s(r,t.props||{},(N,H,...K)=>{const te=K.length?K[0]:H;return k.ctx&&o(k.ctx[N],k.ctx[N]=te)&&(!k.skip_bound&&k.bound[N]&&k.bound[N](te),F&&dt(r,N)),H}):[],k.update(),F=!0,Ie(k.before_update),k.fragment=i?i(k.ctx):!1,t.target){if(t.hydrate){const N=it(t.target);k.fragment&&k.fragment.l(N),N.forEach(pe)}else k.fragment&&k.fragment.c();t.intro&&ft(r.$$.fragment),ht(r,t.target,t.anchor,t.customElement),et()}Ae(p)}class _t{$destroy(){ct(this,1),this.$destroy=De}$on(t,s){if(!Se(s))return De;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(s),()=>{const o=i.indexOf(s);o!==-1&&i.splice(o,1)}}$set(t){this.$$set&&!rt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var gt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},tt={exports:{}};/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(r,t){(function(s,i){r.exports=i()})(gt,function s(){var i=typeof self<"u"?self:typeof window<"u"?window:i!==void 0?i:{},o=!i.document&&!!i.postMessage,g=i.IS_PAPA_WORKER||!1,C={},z=0,p={parse:function(n,e){var a=(e=e||{}).dynamicTyping||!1;if(R(a)&&(e.dynamicTypingFunction=a,a={}),e.dynamicTyping=a,e.transform=!!R(e.transform)&&e.transform,e.worker&&p.WORKERS_SUPPORTED){var u=function(){if(!p.WORKERS_SUPPORTED)return!1;var c=(d=i.URL||i.webkitURL||null,y=s.toString(),p.BLOB_URL||(p.BLOB_URL=d.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",y,")();"],{type:"text/javascript"})))),m=new i.Worker(c),d,y;return m.onmessage=_e,m.id=z++,C[m.id]=m}();return u.userStep=e.step,u.userChunk=e.chunk,u.userComplete=e.complete,u.userError=e.error,e.step=R(e.step),e.chunk=R(e.chunk),e.complete=R(e.complete),e.error=R(e.error),delete e.worker,void u.postMessage({input:n,config:e,workerId:u.id})}var h=null;return p.NODE_STREAM_INPUT,typeof n=="string"?(n=function(c){return c.charCodeAt(0)===65279?c.slice(1):c}(n),h=e.download?new N(e):new K(e)):n.readable===!0&&R(n.read)&&R(n.on)?h=new te(e):(i.File&&n instanceof File||n instanceof Object)&&(h=new H(e)),h.stream(n)},unparse:function(n,e){var a=!1,u=!0,h=",",c=`\r
`,m='"',d=m+m,y=!1,f=null,S=!1;(function(){if(typeof e=="object"){if(typeof e.delimiter!="string"||p.BAD_DELIMITERS.filter(function(_){return e.delimiter.indexOf(_)!==-1}).length||(h=e.delimiter),(typeof e.quotes=="boolean"||typeof e.quotes=="function"||Array.isArray(e.quotes))&&(a=e.quotes),typeof e.skipEmptyLines!="boolean"&&typeof e.skipEmptyLines!="string"||(y=e.skipEmptyLines),typeof e.newline=="string"&&(c=e.newline),typeof e.quoteChar=="string"&&(m=e.quoteChar),typeof e.header=="boolean"&&(u=e.header),Array.isArray(e.columns)){if(e.columns.length===0)throw new Error("Option columns is empty");f=e.columns}e.escapeChar!==void 0&&(d=e.escapeChar+m),(typeof e.escapeFormulae=="boolean"||e.escapeFormulae instanceof RegExp)&&(S=e.escapeFormulae instanceof RegExp?e.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var w=new RegExp(G(m),"g");if(typeof n=="string"&&(n=JSON.parse(n)),Array.isArray(n)){if(!n.length||Array.isArray(n[0]))return se(null,n,y);if(typeof n[0]=="object")return se(f||Object.keys(n[0]),n,y)}else if(typeof n=="object")return typeof n.data=="string"&&(n.data=JSON.parse(n.data)),Array.isArray(n.data)&&(n.fields||(n.fields=n.meta&&n.meta.fields||f),n.fields||(n.fields=Array.isArray(n.data[0])?n.fields:typeof n.data[0]=="object"?Object.keys(n.data[0]):[]),Array.isArray(n.data[0])||typeof n.data[0]=="object"||(n.data=[n.data])),se(n.fields||[],n.data||[],y);throw new Error("Unable to serialize unrecognized input");function se(_,P,X){var U="";typeof _=="string"&&(_=JSON.parse(_)),typeof P=="string"&&(P=JSON.parse(P));var Q=Array.isArray(_)&&0<_.length,J=!Array.isArray(P[0]);if(Q&&u){for(var j=0;j<_.length;j++)0<j&&(U+=h),U+=V(_[j],j);0<P.length&&(U+=c)}for(var v=0;v<P.length;v++){var D=Q?_.length:P[v].length,x=!1,W=Q?Object.keys(P[v]).length===0:P[v].length===0;if(X&&!Q&&(x=X==="greedy"?P[v].join("").trim()==="":P[v].length===1&&P[v][0].length===0),X==="greedy"&&Q){for(var I=[],L=0;L<D;L++){var M=J?_[L]:L;I.push(P[v][M])}x=I.join("").trim()===""}if(!x){for(var O=0;O<D;O++){0<O&&!W&&(U+=h);var A=Q&&J?_[O]:O;U+=V(P[v][A],O)}v<P.length-1&&(!X||0<D&&!W)&&(U+=c)}}return U}function V(_,P){if(_==null)return"";if(_.constructor===Date)return JSON.stringify(_).slice(1,25);var X=!1;S&&typeof _=="string"&&S.test(_)&&(_="'"+_,X=!0);var U=_.toString().replace(w,d);return(X=X||a===!0||typeof a=="function"&&a(_,P)||Array.isArray(a)&&a[P]||function(Q,J){for(var j=0;j<J.length;j++)if(-1<Q.indexOf(J[j]))return!0;return!1}(U,p.BAD_DELIMITERS)||-1<U.indexOf(h)||U.charAt(0)===" "||U.charAt(U.length-1)===" ")?m+U+m:U}}};if(p.RECORD_SEP=String.fromCharCode(30),p.UNIT_SEP=String.fromCharCode(31),p.BYTE_ORDER_MARK="\uFEFF",p.BAD_DELIMITERS=["\r",`
`,'"',p.BYTE_ORDER_MARK],p.WORKERS_SUPPORTED=!o&&!!i.Worker,p.NODE_STREAM_INPUT=1,p.LocalChunkSize=10485760,p.RemoteChunkSize=5242880,p.DefaultDelimiter=",",p.Parser=oe,p.ParserHandle=le,p.NetworkStreamer=N,p.FileStreamer=H,p.StringStreamer=K,p.ReadableStreamStreamer=te,i.jQuery){var k=i.jQuery;k.fn.parse=function(n){var e=n.config||{},a=[];return this.each(function(c){if(!(k(this).prop("tagName").toUpperCase()==="INPUT"&&k(this).attr("type").toLowerCase()==="file"&&i.FileReader)||!this.files||this.files.length===0)return!0;for(var m=0;m<this.files.length;m++)a.push({file:this.files[m],inputElem:this,instanceConfig:k.extend({},e)})}),u(),this;function u(){if(a.length!==0){var c,m,d,y,f=a[0];if(R(n.before)){var S=n.before(f.file,f.inputElem);if(typeof S=="object"){if(S.action==="abort")return c="AbortError",m=f.file,d=f.inputElem,y=S.reason,void(R(n.error)&&n.error({name:c},m,d,y));if(S.action==="skip")return void h();typeof S.config=="object"&&(f.instanceConfig=k.extend(f.instanceConfig,S.config))}else if(S==="skip")return void h()}var w=f.instanceConfig.complete;f.instanceConfig.complete=function(se){R(w)&&w(se,f.file,f.inputElem),h()},p.parse(f.file,f.instanceConfig)}else R(n.complete)&&n.complete()}function h(){a.splice(0,1),u()}}}function F(n){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var a=ie(e);a.chunkSize=parseInt(a.chunkSize),e.step||e.chunk||(a.chunkSize=null),this._handle=new le(a),(this._handle.streamer=this)._config=a}.call(this,n),this.parseChunk=function(e,a){if(this.isFirstChunk&&R(this._config.beforeFirstChunk)){var u=this._config.beforeFirstChunk(e);u!==void 0&&(e=u)}this.isFirstChunk=!1,this._halted=!1;var h=this._partialLine+e;this._partialLine="";var c=this._handle.parse(h,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var m=c.meta.cursor;this._finished||(this._partialLine=h.substring(m-this._baseIndex),this._baseIndex=m),c&&c.data&&(this._rowCount+=c.data.length);var d=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(g)i.postMessage({results:c,workerId:p.WORKER_ID,finished:d});else if(R(this._config.chunk)&&!a){if(this._config.chunk(c,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);c=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(c.data),this._completeResults.errors=this._completeResults.errors.concat(c.errors),this._completeResults.meta=c.meta),this._completed||!d||!R(this._config.complete)||c&&c.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),d||c&&c.meta.paused||this._nextChunk(),c}this._halted=!0},this._sendError=function(e){R(this._config.error)?this._config.error(e):g&&this._config.error&&i.postMessage({workerId:p.WORKER_ID,error:e,finished:!1})}}function N(n){var e;(n=n||{}).chunkSize||(n.chunkSize=p.RemoteChunkSize),F.call(this,n),this._nextChunk=o?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(a){this._input=a,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(e=new XMLHttpRequest,this._config.withCredentials&&(e.withCredentials=this._config.withCredentials),o||(e.onload=Y(this._chunkLoaded,this),e.onerror=Y(this._chunkError,this)),e.open(this._config.downloadRequestBody?"POST":"GET",this._input,!o),this._config.downloadRequestHeaders){var a=this._config.downloadRequestHeaders;for(var u in a)e.setRequestHeader(u,a[u])}if(this._config.chunkSize){var h=this._start+this._config.chunkSize-1;e.setRequestHeader("Range","bytes="+this._start+"-"+h)}try{e.send(this._config.downloadRequestBody)}catch(c){this._chunkError(c.message)}o&&e.status===0&&this._chunkError()}},this._chunkLoaded=function(){e.readyState===4&&(e.status<200||400<=e.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:e.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(a){var u=a.getResponseHeader("Content-Range");return u===null?-1:parseInt(u.substring(u.lastIndexOf("/")+1))}(e),this.parseChunk(e.responseText)))},this._chunkError=function(a){var u=e.statusText||a;this._sendError(new Error(u))}}function H(n){var e,a;(n=n||{}).chunkSize||(n.chunkSize=p.LocalChunkSize),F.call(this,n);var u=typeof FileReader<"u";this.stream=function(h){this._input=h,a=h.slice||h.webkitSlice||h.mozSlice,u?((e=new FileReader).onload=Y(this._chunkLoaded,this),e.onerror=Y(this._chunkError,this)):e=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var h=this._input;if(this._config.chunkSize){var c=Math.min(this._start+this._config.chunkSize,this._input.size);h=a.call(h,this._start,c)}var m=e.readAsText(h,this._config.encoding);u||this._chunkLoaded({target:{result:m}})},this._chunkLoaded=function(h){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(h.target.result)},this._chunkError=function(){this._sendError(e.error)}}function K(n){var e;F.call(this,n=n||{}),this.stream=function(a){return e=a,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var a,u=this._config.chunkSize;return u?(a=e.substring(0,u),e=e.substring(u)):(a=e,e=""),this._finished=!e,this.parseChunk(a)}}}function te(n){F.call(this,n=n||{});var e=[],a=!0,u=!1;this.pause=function(){F.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){F.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(h){this._input=h,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){u&&e.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),e.length?this.parseChunk(e.shift()):a=!0},this._streamData=Y(function(h){try{e.push(typeof h=="string"?h:h.toString(this._config.encoding)),a&&(a=!1,this._checkIsFinished(),this.parseChunk(e.shift()))}catch(c){this._streamError(c)}},this),this._streamError=Y(function(h){this._streamCleanUp(),this._sendError(h)},this),this._streamEnd=Y(function(){this._streamCleanUp(),u=!0,this._streamData("")},this),this._streamCleanUp=Y(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function le(n){var e,a,u,h=Math.pow(2,53),c=-h,m=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,d=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,y=this,f=0,S=0,w=!1,se=!1,V=[],_={data:[],errors:[],meta:{}};if(R(n.step)){var P=n.step;n.step=function(v){if(_=v,Q())U();else{if(U(),_.data.length===0)return;f+=v.data.length,n.preview&&f>n.preview?a.abort():(_.data=_.data[0],P(_,y))}}}function X(v){return n.skipEmptyLines==="greedy"?v.join("").trim()==="":v.length===1&&v[0].length===0}function U(){return _&&u&&(j("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+p.DefaultDelimiter+"'"),u=!1),n.skipEmptyLines&&(_.data=_.data.filter(function(v){return!X(v)})),Q()&&function(){if(!_)return;function v(x,W){R(n.transformHeader)&&(x=n.transformHeader(x,W)),V.push(x)}if(Array.isArray(_.data[0])){for(var D=0;Q()&&D<_.data.length;D++)_.data[D].forEach(v);_.data.splice(0,1)}else _.data.forEach(v)}(),function(){if(!_||!n.header&&!n.dynamicTyping&&!n.transform)return _;function v(x,W){var I,L=n.header?{}:[];for(I=0;I<x.length;I++){var M=I,O=x[I];n.header&&(M=I>=V.length?"__parsed_extra":V[I]),n.transform&&(O=n.transform(O,M)),O=J(M,O),M==="__parsed_extra"?(L[M]=L[M]||[],L[M].push(O)):L[M]=O}return n.header&&(I>V.length?j("FieldMismatch","TooManyFields","Too many fields: expected "+V.length+" fields but parsed "+I,S+W):I<V.length&&j("FieldMismatch","TooFewFields","Too few fields: expected "+V.length+" fields but parsed "+I,S+W)),L}var D=1;return!_.data.length||Array.isArray(_.data[0])?(_.data=_.data.map(v),D=_.data.length):_.data=v(_.data,0),n.header&&_.meta&&(_.meta.fields=V),S+=D,_}()}function Q(){return n.header&&V.length===0}function J(v,D){return x=v,n.dynamicTypingFunction&&n.dynamicTyping[x]===void 0&&(n.dynamicTyping[x]=n.dynamicTypingFunction(x)),(n.dynamicTyping[x]||n.dynamicTyping)===!0?D==="true"||D==="TRUE"||D!=="false"&&D!=="FALSE"&&(function(W){if(m.test(W)){var I=parseFloat(W);if(c<I&&I<h)return!0}return!1}(D)?parseFloat(D):d.test(D)?new Date(D):D===""?null:D):D;var x}function j(v,D,x,W){var I={type:v,code:D,message:x};W!==void 0&&(I.row=W),_.errors.push(I)}this.parse=function(v,D,x){var W=n.quoteChar||'"';if(n.newline||(n.newline=function(M,O){M=M.substring(0,1048576);var A=new RegExp(G(O)+"([^]*?)"+G(O),"gm"),ee=(M=M.replace(A,"")).split("\r"),E=M.split(`
`),ae=1<E.length&&E[0].length<ee[0].length;if(ee.length===1||ae)return`
`;for(var he=0,B=0;B<ee.length;B++)ee[B][0]===`
`&&he++;return he>=ee.length/2?`\r
`:"\r"}(v,W)),u=!1,n.delimiter)R(n.delimiter)&&(n.delimiter=n.delimiter(v),_.meta.delimiter=n.delimiter);else{var I=function(M,O,A,ee,E){var ae,he,B,Z;E=E||[",","	","|",";",p.RECORD_SEP,p.UNIT_SEP];for(var be=0;be<E.length;be++){var q=E[be],Ce=0,me=0,we=0;B=void 0;for(var ye=new oe({comments:ee,delimiter:q,newline:O,preview:10}).parse(M),ve=0;ve<ye.data.length;ve++)if(A&&X(ye.data[ve]))we++;else{var ke=ye.data[ve].length;me+=ke,B!==void 0?0<ke&&(Ce+=Math.abs(ke-B),B=ke):B=ke}0<ye.data.length&&(me/=ye.data.length-we),(he===void 0||Ce<=he)&&(Z===void 0||Z<me)&&1.99<me&&(he=Ce,ae=q,Z=me)}return{successful:!!(n.delimiter=ae),bestDelimiter:ae}}(v,n.newline,n.skipEmptyLines,n.comments,n.delimitersToGuess);I.successful?n.delimiter=I.bestDelimiter:(u=!0,n.delimiter=p.DefaultDelimiter),_.meta.delimiter=n.delimiter}var L=ie(n);return n.preview&&n.header&&L.preview++,e=v,a=new oe(L),_=a.parse(e,D,x),U(),w?{meta:{paused:!0}}:_||{meta:{paused:!1}}},this.paused=function(){return w},this.pause=function(){w=!0,a.abort(),e=R(n.chunk)?"":e.substring(a.getCharIndex())},this.resume=function(){y.streamer._halted?(w=!1,y.streamer.parseChunk(e,!0)):setTimeout(y.resume,3)},this.aborted=function(){return se},this.abort=function(){se=!0,a.abort(),_.meta.aborted=!0,R(n.complete)&&n.complete(_),e=""}}function G(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function oe(n){var e,a=(n=n||{}).delimiter,u=n.newline,h=n.comments,c=n.step,m=n.preview,d=n.fastMode,y=e=n.quoteChar===void 0||n.quoteChar===null?'"':n.quoteChar;if(n.escapeChar!==void 0&&(y=n.escapeChar),(typeof a!="string"||-1<p.BAD_DELIMITERS.indexOf(a))&&(a=","),h===a)throw new Error("Comment character same as delimiter");h===!0?h="#":(typeof h!="string"||-1<p.BAD_DELIMITERS.indexOf(h))&&(h=!1),u!==`
`&&u!=="\r"&&u!==`\r
`&&(u=`
`);var f=0,S=!1;this.parse=function(w,se,V){if(typeof w!="string")throw new Error("Input must be a string");var _=w.length,P=a.length,X=u.length,U=h.length,Q=R(c),J=[],j=[],v=[],D=f=0;if(!w)return ce();if(n.header&&!se){var x=w.split(u)[0].split(a),W=[],I={},L=!1;for(var M in x){var O=x[M];R(n.transformHeader)&&(O=n.transformHeader(O,M));var A=O,ee=I[O]||0;for(0<ee&&(L=!0,A=O+"_"+ee),I[O]=ee+1;W.includes(A);)A=A+"_"+ee;W.push(A)}if(L){var E=w.split(u);E[0]=W.join(a),w=E.join(u)}}if(d||d!==!1&&w.indexOf(e)===-1){for(var ae=w.split(u),he=0;he<ae.length;he++){if(v=ae[he],f+=v.length,he!==ae.length-1)f+=u.length;else if(V)return ce();if(!h||v.substring(0,U)!==h){if(Q){if(J=[],we(v.split(a)),Le(),S)return ce()}else we(v.split(a));if(m&&m<=he)return J=J.slice(0,m),ce(!0)}}return ce()}for(var B=w.indexOf(a,f),Z=w.indexOf(u,f),be=new RegExp(G(y)+G(e),"g"),q=w.indexOf(e,f);;)if(w[f]!==e)if(h&&v.length===0&&w.substring(f,f+U)===h){if(Z===-1)return ce();f=Z+X,Z=w.indexOf(u,f),B=w.indexOf(a,f)}else if(B!==-1&&(B<Z||Z===-1))v.push(w.substring(f,B)),f=B+P,B=w.indexOf(a,f);else{if(Z===-1)break;if(v.push(w.substring(f,Z)),ke(Z+X),Q&&(Le(),S))return ce();if(m&&J.length>=m)return ce(!0)}else for(q=f,f++;;){if((q=w.indexOf(e,q+1))===-1)return V||j.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:J.length,index:f}),ve();if(q===_-1)return ve(w.substring(f,q).replace(be,e));if(e!==y||w[q+1]!==y){if(e===y||q===0||w[q-1]!==y){B!==-1&&B<q+1&&(B=w.indexOf(a,q+1)),Z!==-1&&Z<q+1&&(Z=w.indexOf(u,q+1));var Ce=ye(Z===-1?B:Math.min(B,Z));if(w.substr(q+1+Ce,P)===a){v.push(w.substring(f,q).replace(be,e)),w[f=q+1+Ce+P]!==e&&(q=w.indexOf(e,f)),B=w.indexOf(a,f),Z=w.indexOf(u,f);break}var me=ye(Z);if(w.substring(q+1+me,q+1+me+X)===u){if(v.push(w.substring(f,q).replace(be,e)),ke(q+1+me+X),B=w.indexOf(a,f),q=w.indexOf(e,f),Q&&(Le(),S))return ce();if(m&&J.length>=m)return ce(!0);break}j.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:J.length,index:f}),q++}}else q++}return ve();function we(de){J.push(de),D=f}function ye(de){var qe=0;if(de!==-1){var Fe=w.substring(q+1,de);Fe&&Fe.trim()===""&&(qe=Fe.length)}return qe}function ve(de){return V||(de===void 0&&(de=w.substring(f)),v.push(de),f=_,we(v),Q&&Le()),ce()}function ke(de){f=de,we(v),v=[],Z=w.indexOf(u,f)}function ce(de){return{data:J,errors:j,meta:{delimiter:a,linebreak:u,aborted:S,truncated:!!de,cursor:D+(se||0)}}}function Le(){c(ce()),J=[],j=[]}},this.abort=function(){S=!0},this.getCharIndex=function(){return f}}function _e(n){var e=n.data,a=C[e.workerId],u=!1;if(e.error)a.userError(e.error,e.file);else if(e.results&&e.results.data){var h={abort:function(){u=!0,re(e.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:fe,resume:fe};if(R(a.userStep)){for(var c=0;c<e.results.data.length&&(a.userStep({data:e.results.data[c],errors:e.results.errors,meta:e.results.meta},h),!u);c++);delete e.results}else R(a.userChunk)&&(a.userChunk(e.results,h,e.file),delete e.results)}e.finished&&!u&&re(e.workerId,e.results)}function re(n,e){var a=C[n];R(a.userComplete)&&a.userComplete(e),a.terminate(),delete C[n]}function fe(){throw new Error("Not implemented.")}function ie(n){if(typeof n!="object"||n===null)return n;var e=Array.isArray(n)?[]:{};for(var a in n)e[a]=ie(n[a]);return e}function Y(n,e){return function(){n.apply(e,arguments)}}function R(n){return typeof n=="function"}return g&&(i.onmessage=function(n){var e=n.data;if(p.WORKER_ID===void 0&&e&&(p.WORKER_ID=e.workerId),typeof e.input=="string")i.postMessage({workerId:p.WORKER_ID,results:p.parse(e.input,e.config),finished:!0});else if(i.File&&e.input instanceof File||e.input instanceof Object){var a=p.parse(e.input,e.config);a&&i.postMessage({workerId:p.WORKER_ID,results:a,finished:!0})}}),(N.prototype=Object.create(F.prototype)).constructor=N,(H.prototype=Object.create(F.prototype)).constructor=H,(K.prototype=Object.create(K.prototype)).constructor=K,(te.prototype=Object.create(F.prototype)).constructor=te,p})})(tt);const We=tt.exports;function He(r,t,s){const i=r.slice();return i[4]=t[s],i}function Ke(r,t,s){const i=r.slice();return i[4]=t[s],i}function mt(r){let t=r[4].Owner+"",s;return{c(){s=ne(t)},m(i,o){ge(i,s,o)},p(i,o){o&1&&t!==(t=i[4].Owner+"")&&ue(s,t)},d(i){i&&pe(s)}}}function yt(r){let t,s=r[4].Owner+"",i,o;return{c(){t=b("a"),i=ne(s),$(t,"href",o="mailto:"+r[4]["Owner email"])},m(g,C){ge(g,t,C),l(t,i)},p(g,C){C&1&&s!==(s=g[4].Owner+"")&&ue(i,s),C&1&&o!==(o="mailto:"+g[4]["Owner email"])&&$(t,"href",o)},d(g){g&&pe(t)}}}function Qe(r){let t,s,i;return{c(){t=b("a"),s=ne("Code"),$(t,"href",i=r[4]["Code repository"]),$(t,"target","_blank")},m(o,g){ge(o,t,g),l(t,s)},p(o,g){g&1&&i!==(i=o[4]["Code repository"])&&$(t,"href",i)},d(o){o&&pe(t)}}}function Je(r){let t,s,i;return{c(){t=b("a"),s=ne("Scraper"),$(t,"href",i=r[4]["Scraper repository"]),$(t,"target","_blank")},m(o,g){ge(o,t,g),l(t,s)},p(o,g){g&1&&i!==(i=o[4]["Scraper repository"])&&$(t,"href",i)},d(o){o&&pe(t)}}}function Ye(r){let t,s,i;return{c(){t=b("a"),s=ne("Datasheet"),$(t,"href",i=r[4]["Data sheet"]),$(t,"target","_blank")},m(o,g){ge(o,t,g),l(t,s)},p(o,g){g&1&&i!==(i=o[4]["Data sheet"])&&$(t,"href",i)},d(o){o&&pe(t)}}}function Xe(r){let t,s,i,o=r[4].Name+"",g,C,z,p,k=r[4].Status+"",F,N,H,K,te,le,G=r[4].Notes+"",oe,_e,re,fe,ie,Y,R,n;function e(d,y){return d[4]["Owner email"]?yt:mt}let a=e(r),u=a(r),h=r[4]["Code repository"]&&Qe(r),c=r[4]["Scraper repository"]&&Je(r),m=r[4]["Data sheet"]&&Ye(r);return{c(){t=b("tr"),s=b("td"),i=b("a"),g=ne(o),z=T(),p=b("td"),F=ne(k),H=T(),K=b("td"),u.c(),te=T(),le=b("td"),oe=ne(G),_e=T(),re=b("td"),h&&h.c(),fe=T(),ie=b("td"),c&&c.c(),Y=T(),R=b("td"),m&&m.c(),n=T(),$(i,"href",C=r[4].Link),$(i,"target","_blank"),$(p,"class",N=Ne(r[4].Status.replace(/\s/g,""))+" svelte-a19o30")},m(d,y){ge(d,t,y),l(t,s),l(s,i),l(i,g),l(t,z),l(t,p),l(p,F),l(t,H),l(t,K),u.m(K,null),l(t,te),l(t,le),l(le,oe),l(t,_e),l(t,re),h&&h.m(re,null),l(t,fe),l(t,ie),c&&c.m(ie,null),l(t,Y),l(t,R),m&&m.m(R,null),l(t,n)},p(d,y){y&1&&o!==(o=d[4].Name+"")&&ue(g,o),y&1&&C!==(C=d[4].Link)&&$(i,"href",C),y&1&&k!==(k=d[4].Status+"")&&ue(F,k),y&1&&N!==(N=Ne(d[4].Status.replace(/\s/g,""))+" svelte-a19o30")&&$(p,"class",N),a===(a=e(d))&&u?u.p(d,y):(u.d(1),u=a(d),u&&(u.c(),u.m(K,null))),y&1&&G!==(G=d[4].Notes+"")&&ue(oe,G),d[4]["Code repository"]?h?h.p(d,y):(h=Qe(d),h.c(),h.m(re,null)):h&&(h.d(1),h=null),d[4]["Scraper repository"]?c?c.p(d,y):(c=Je(d),c.c(),c.m(ie,null)):c&&(c.d(1),c=null),d[4]["Data sheet"]?m?m.p(d,y):(m=Ye(d),m.c(),m.m(R,null)):m&&(m.d(1),m=null)},d(d){d&&pe(t),u.d(),h&&h.d(),c&&c.d(),m&&m.d()}}}function vt(r){let t=r[4].Owner+"",s;return{c(){s=ne(t)},m(i,o){ge(i,s,o)},p(i,o){o&2&&t!==(t=i[4].Owner+"")&&ue(s,t)},d(i){i&&pe(s)}}}function kt(r){let t,s=r[4].Owner+"",i,o;return{c(){t=b("a"),i=ne(s),$(t,"href",o="mailto:"+r[4]["Owner email"])},m(g,C){ge(g,t,C),l(t,i)},p(g,C){C&2&&s!==(s=g[4].Owner+"")&&ue(i,s),C&2&&o!==(o="mailto:"+g[4]["Owner email"])&&$(t,"href",o)},d(g){g&&pe(t)}}}function Ze(r){let t=r[4]["Run location"]+"",s;return{c(){s=ne(t)},m(i,o){ge(i,s,o)},p(i,o){o&2&&t!==(t=i[4]["Run location"]+"")&&ue(s,t)},d(i){i&&pe(s)}}}function Ge(r){let t,s,i,o=r[4].Name+"",g,C,z,p,k=r[4].Status+"",F,N,H,K,te,le,G=r[4].Notes+"",oe,_e,re,fe,ie,Y=r[4].Schedule+"",R,n,e,a=r[4].Duration+"",u,h;function c(f,S){return f[4]["Owner email"]?kt:vt}let m=c(r),d=m(r),y=r[4]["Run location"]&&Ze(r);return{c(){t=b("tr"),s=b("td"),i=b("a"),g=ne(o),z=T(),p=b("td"),F=ne(k),H=T(),K=b("td"),d.c(),te=T(),le=b("td"),oe=ne(G),_e=T(),re=b("td"),y&&y.c(),fe=T(),ie=b("td"),R=ne(Y),n=T(),e=b("td"),u=ne(a),h=T(),$(i,"href",C=r[4]["Scraper repository"]),$(i,"target","_blank"),$(p,"class",N=Ne(r[4].Status.replace(/\s/g,""))+" svelte-a19o30")},m(f,S){ge(f,t,S),l(t,s),l(s,i),l(i,g),l(t,z),l(t,p),l(p,F),l(t,H),l(t,K),d.m(K,null),l(t,te),l(t,le),l(le,oe),l(t,_e),l(t,re),y&&y.m(re,null),l(t,fe),l(t,ie),l(ie,R),l(t,n),l(t,e),l(e,u),l(t,h)},p(f,S){S&2&&o!==(o=f[4].Name+"")&&ue(g,o),S&2&&C!==(C=f[4]["Scraper repository"])&&$(i,"href",C),S&2&&k!==(k=f[4].Status+"")&&ue(F,k),S&2&&N!==(N=Ne(f[4].Status.replace(/\s/g,""))+" svelte-a19o30")&&$(p,"class",N),m===(m=c(f))&&d?d.p(f,S):(d.d(1),d=m(f),d&&(d.c(),d.m(K,null))),S&2&&G!==(G=f[4].Notes+"")&&ue(oe,G),f[4]["Run location"]?y?y.p(f,S):(y=Ze(f),y.c(),y.m(re,null)):y&&(y.d(1),y=null),S&2&&Y!==(Y=f[4].Schedule+"")&&ue(R,Y),S&2&&a!==(a=f[4].Duration+"")&&ue(u,a)},d(f){f&&pe(t),d.d(),y&&y.d()}}}function bt(r){let t,s,i,o,g,C,z,p,k,F,N,H,K,te,le,G,oe,_e,re,fe,ie,Y,R,n,e,a,u,h,c,m,d,y,f,S,w,se,V,_,P,X,U,Q,J,j,v,D,x,W,I=r[0],L=[];for(let A=0;A<I.length;A+=1)L[A]=Xe(Ke(r,I,A));let M=r[1],O=[];for(let A=0;A<M.length;A+=1)O[A]=Ge(He(r,M,A));return{c(){t=b("main"),s=b("div"),s.innerHTML=`<h1>Data Visualization and Pipeline Directory</h1> 
    <a href="https://centre.humdata.org" target="_blank" rel="noreferrer" class="svelte-a19o30"><img src="images/centreforHumdata_green_TransparentBG.png" class="logo svelte-a19o30" alt="Centre for Humanitarian Data Logo"/></a>`,i=T(),o=b("section"),g=b("h2"),g.textContent="Data Visualizations",C=T(),z=b("table"),p=b("thead"),k=b("tr"),F=b("th"),F.textContent="Name",N=T(),H=b("th"),H.textContent="Status",K=T(),te=b("th"),te.textContent="Owner",le=T(),G=b("th"),G.textContent="Notes",oe=T(),_e=b("th"),_e.textContent="Code",re=T(),fe=b("th"),fe.textContent="Scraper",ie=T(),Y=b("th"),Y.textContent="Datasheet",R=T(),n=b("tbody");for(let A=0;A<L.length;A+=1)L[A].c();e=T(),a=b("section"),u=b("h2"),u.textContent="Pipelines",h=T(),c=b("table"),m=b("thead"),d=b("tr"),y=b("th"),y.textContent="Name",f=T(),S=b("th"),S.textContent="Status",w=T(),se=b("th"),se.textContent="Owner",V=T(),_=b("th"),_.textContent="Notes",P=T(),X=b("th"),X.textContent="Run location",U=T(),Q=b("th"),Q.textContent="Schedule",J=T(),j=b("th"),j.textContent="Duration",v=T(),D=b("tbody");for(let A=0;A<O.length;A+=1)O[A].c();$(s,"class","header svelte-a19o30"),$(z,"class","svelte-a19o30"),$(c,"class","svelte-a19o30")},m(A,ee){ge(A,t,ee),l(t,s),l(t,i),l(t,o),l(o,g),l(o,C),l(o,z),l(z,p),l(p,k),l(k,F),l(k,N),l(k,H),l(k,K),l(k,te),l(k,le),l(k,G),l(k,oe),l(k,_e),l(k,re),l(k,fe),l(k,ie),l(k,Y),l(z,R),l(z,n);for(let E=0;E<L.length;E+=1)L[E]&&L[E].m(n,null);l(t,e),l(t,a),l(a,u),l(a,h),l(a,c),l(c,m),l(m,d),l(d,y),l(d,f),l(d,S),l(d,w),l(d,se),l(d,V),l(d,_),l(d,P),l(d,X),l(d,U),l(d,Q),l(d,J),l(d,j),l(c,v),l(c,D);for(let E=0;E<O.length;E+=1)O[E]&&O[E].m(D,null);x||(W=[Te(F,"click",function(){Se(r[2]("Name"))&&r[2]("Name").apply(this,arguments)}),Te(H,"click",function(){Se(r[2]("Status"))&&r[2]("Status").apply(this,arguments)}),Te(y,"click",function(){Se(r[2]("Name","pipeline"))&&r[2]("Name","pipeline").apply(this,arguments)}),Te(S,"click",function(){Se(r[2]("Status","pipeline"))&&r[2]("Status","pipeline").apply(this,arguments)})],x=!0)},p(A,[ee]){if(r=A,ee&1){I=r[0];let E;for(E=0;E<I.length;E+=1){const ae=Ke(r,I,E);L[E]?L[E].p(ae,ee):(L[E]=Xe(ae),L[E].c(),L[E].m(n,null))}for(;E<L.length;E+=1)L[E].d(1);L.length=I.length}if(ee&2){M=r[1];let E;for(E=0;E<M.length;E+=1){const ae=He(r,M,E);O[E]?O[E].p(ae,ee):(O[E]=Ge(ae),O[E].c(),O[E].m(D,null))}for(;E<O.length;E+=1)O[E].d(1);O.length=M.length}},i:De,o:De,d(A){A&&pe(t),Ue(L,A),Ue(O,A),x=!1,Ie(W)}}}function wt(r,t,s){let i,o=[];We.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vRqBuIYkkzFIMlq541njH9S9mO-nda40sab-AMP4tlhcWFiZt0QrcXOVS44ALJtDW17yu53vyhbUEuY/pub?gid=0&single=true&output=csv",{header:!0,download:!0,complete(z){s(0,o=z.data)}});let g=[];We.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vRqBuIYkkzFIMlq541njH9S9mO-nda40sab-AMP4tlhcWFiZt0QrcXOVS44ALJtDW17yu53vyhbUEuY/pub?gid=87687849&single=true&output=csv",{header:!0,download:!0,complete(z){s(1,g=z.data)}});let C={col:"Name",ascending:!0};return r.$$.update=()=>{r.$$.dirty&11&&s(2,i=(z,p)=>{C.col==z?s(3,C.ascending=!C.ascending,C):(s(3,C.col=z,C),s(3,C.ascending=!0,C));let k=C.ascending?1:-1,F=(N,H)=>N[z]<H[z]?-1*k:N[z]>H[z]?1*k:0;p=="pipeline"?s(1,g=g.sort(F)):s(0,o=o.sort(F))})},[o,g,i,C]}class Ct extends _t{constructor(t){super(),pt(this,t,wt,bt,nt,{})}}new Ct({target:document.getElementById("app")});
