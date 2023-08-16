(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const g of o)if(g.type==="childList")for(const C of g.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&i(C)}).observe(document,{childList:!0,subtree:!0});function s(o){const g={};return o.integrity&&(g.integrity=o.integrity),o.referrerpolicy&&(g.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?g.credentials="include":o.crossorigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function i(o){if(o.ep)return;o.ep=!0;const g=s(o);fetch(o.href,g)}})();function De(){}function Ve(n){return n()}function $e(){return Object.create(null)}function Ie(n){n.forEach(Ve)}function Se(n){return typeof n=="function"}function rt(n,t){return n!=n?t==t:n!==t||n&&typeof n=="object"||typeof n=="function"}function nt(n){return Object.keys(n).length===0}function ze(n){return n==null?"":n}function l(n,t){n.appendChild(t)}function ge(n,t,s){n.insertBefore(t,s||null)}function pe(n){n.parentNode&&n.parentNode.removeChild(n)}function Ue(n,t){for(let s=0;s<n.length;s+=1)n[s]&&n[s].d(t)}function b(n){return document.createElement(n)}function re(n){return document.createTextNode(n)}function T(){return re(" ")}function Te(n,t,s,i){return n.addEventListener(t,s,i),()=>n.removeEventListener(t,s,i)}function $(n,t,s){s==null?n.removeAttribute(t):n.getAttribute(t)!==s&&n.setAttribute(t,s)}function it(n){return Array.from(n.childNodes)}function ue(n,t){t=""+t,n.data!==t&&(n.data=t)}let Me;function Ae(n){Me=n}const Oe=[],Be=[];let Re=[];const je=[],st=Promise.resolve();let xe=!1;function at(){xe||(xe=!0,st.then(et))}function qe(n){Re.push(n)}const Fe=new Set;let Ee=0;function et(){if(Ee!==0)return;const n=Me;do{try{for(;Ee<Oe.length;){const t=Oe[Ee];Ee++,Ae(t),ot(t.$$)}}catch(t){throw Oe.length=0,Ee=0,t}for(Ae(null),Oe.length=0,Ee=0;Be.length;)Be.pop()();for(let t=0;t<Re.length;t+=1){const s=Re[t];Fe.has(s)||(Fe.add(s),s())}Re.length=0}while(Oe.length);for(;je.length;)je.pop()();xe=!1,Fe.clear(),Ae(n)}function ot(n){if(n.fragment!==null){n.update(),Ie(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(qe)}}function lt(n){const t=[],s=[];Re.forEach(i=>n.indexOf(i)===-1?t.push(i):s.push(i)),s.forEach(i=>i()),Re=t}const ut=new Set;function ft(n,t){n&&n.i&&(ut.delete(n),n.i(t))}function ht(n,t,s,i){const{fragment:o,after_update:g}=n.$$;o&&o.m(t,s),i||qe(()=>{const C=n.$$.on_mount.map(Ve).filter(Se);n.$$.on_destroy?n.$$.on_destroy.push(...C):Ie(C),n.$$.on_mount=[]}),g.forEach(qe)}function ct(n,t){const s=n.$$;s.fragment!==null&&(lt(s.after_update),Ie(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function dt(n,t){n.$$.dirty[0]===-1&&(Oe.push(n),at(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function pt(n,t,s,i,o,g,C,x=[-1]){const p=Me;Ae(n);const k=n.$$={fragment:null,ctx:[],props:g,update:De,not_equal:o,bound:$e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:$e(),dirty:x,skip_bound:!1,root:t.target||p.$$.root};C&&C(k.root);let N=!1;if(k.ctx=s?s(n,t.props||{},(z,H,...K)=>{const te=K.length?K[0]:H;return k.ctx&&o(k.ctx[z],k.ctx[z]=te)&&(!k.skip_bound&&k.bound[z]&&k.bound[z](te),N&&dt(n,z)),H}):[],k.update(),N=!0,Ie(k.before_update),k.fragment=i?i(k.ctx):!1,t.target){if(t.hydrate){const z=it(t.target);k.fragment&&k.fragment.l(z),z.forEach(pe)}else k.fragment&&k.fragment.c();t.intro&&ft(n.$$.fragment),ht(n,t.target,t.anchor,t.customElement),et()}Ae(p)}class _t{$destroy(){ct(this,1),this.$destroy=De}$on(t,s){if(!Se(s))return De;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(s),()=>{const o=i.indexOf(s);o!==-1&&i.splice(o,1)}}$set(t){this.$$set&&!nt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var gt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},tt={exports:{}};/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(n,t){(function(s,i){n.exports=i()})(gt,function s(){var i=typeof self<"u"?self:typeof window<"u"?window:i!==void 0?i:{},o=!i.document&&!!i.postMessage,g=i.IS_PAPA_WORKER||!1,C={},x=0,p={parse:function(r,e){var a=(e=e||{}).dynamicTyping||!1;if(R(a)&&(e.dynamicTypingFunction=a,a={}),e.dynamicTyping=a,e.transform=!!R(e.transform)&&e.transform,e.worker&&p.WORKERS_SUPPORTED){var u=function(){if(!p.WORKERS_SUPPORTED)return!1;var c=(d=i.URL||i.webkitURL||null,y=s.toString(),p.BLOB_URL||(p.BLOB_URL=d.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",y,")();"],{type:"text/javascript"})))),m=new i.Worker(c),d,y;return m.onmessage=_e,m.id=x++,C[m.id]=m}();return u.userStep=e.step,u.userChunk=e.chunk,u.userComplete=e.complete,u.userError=e.error,e.step=R(e.step),e.chunk=R(e.chunk),e.complete=R(e.complete),e.error=R(e.error),delete e.worker,void u.postMessage({input:r,config:e,workerId:u.id})}var h=null;return p.NODE_STREAM_INPUT,typeof r=="string"?(r=function(c){return c.charCodeAt(0)===65279?c.slice(1):c}(r),h=e.download?new z(e):new K(e)):r.readable===!0&&R(r.read)&&R(r.on)?h=new te(e):(i.File&&r instanceof File||r instanceof Object)&&(h=new H(e)),h.stream(r)},unparse:function(r,e){var a=!1,u=!0,h=",",c=`\r
`,m='"',d=m+m,y=!1,f=null,S=!1;(function(){if(typeof e=="object"){if(typeof e.delimiter!="string"||p.BAD_DELIMITERS.filter(function(_){return e.delimiter.indexOf(_)!==-1}).length||(h=e.delimiter),(typeof e.quotes=="boolean"||typeof e.quotes=="function"||Array.isArray(e.quotes))&&(a=e.quotes),typeof e.skipEmptyLines!="boolean"&&typeof e.skipEmptyLines!="string"||(y=e.skipEmptyLines),typeof e.newline=="string"&&(c=e.newline),typeof e.quoteChar=="string"&&(m=e.quoteChar),typeof e.header=="boolean"&&(u=e.header),Array.isArray(e.columns)){if(e.columns.length===0)throw new Error("Option columns is empty");f=e.columns}e.escapeChar!==void 0&&(d=e.escapeChar+m),(typeof e.escapeFormulae=="boolean"||e.escapeFormulae instanceof RegExp)&&(S=e.escapeFormulae instanceof RegExp?e.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var w=new RegExp(G(m),"g");if(typeof r=="string"&&(r=JSON.parse(r)),Array.isArray(r)){if(!r.length||Array.isArray(r[0]))return se(null,r,y);if(typeof r[0]=="object")return se(f||Object.keys(r[0]),r,y)}else if(typeof r=="object")return typeof r.data=="string"&&(r.data=JSON.parse(r.data)),Array.isArray(r.data)&&(r.fields||(r.fields=r.meta&&r.meta.fields||f),r.fields||(r.fields=Array.isArray(r.data[0])?r.fields:typeof r.data[0]=="object"?Object.keys(r.data[0]):[]),Array.isArray(r.data[0])||typeof r.data[0]=="object"||(r.data=[r.data])),se(r.fields||[],r.data||[],y);throw new Error("Unable to serialize unrecognized input");function se(_,q,X){var U="";typeof _=="string"&&(_=JSON.parse(_)),typeof q=="string"&&(q=JSON.parse(q));var Q=Array.isArray(_)&&0<_.length,J=!Array.isArray(q[0]);if(Q&&u){for(var j=0;j<_.length;j++)0<j&&(U+=h),U+=V(_[j],j);0<q.length&&(U+=c)}for(var v=0;v<q.length;v++){var D=Q?_.length:q[v].length,M=!1,W=Q?Object.keys(q[v]).length===0:q[v].length===0;if(X&&!Q&&(M=X==="greedy"?q[v].join("").trim()==="":q[v].length===1&&q[v][0].length===0),X==="greedy"&&Q){for(var I=[],L=0;L<D;L++){var F=J?_[L]:L;I.push(q[v][F])}M=I.join("").trim()===""}if(!M){for(var O=0;O<D;O++){0<O&&!W&&(U+=h);var A=Q&&J?_[O]:O;U+=V(q[v][A],O)}v<q.length-1&&(!X||0<D&&!W)&&(U+=c)}}return U}function V(_,q){if(_==null)return"";if(_.constructor===Date)return JSON.stringify(_).slice(1,25);var X=!1;S&&typeof _=="string"&&S.test(_)&&(_="'"+_,X=!0);var U=_.toString().replace(w,d);return(X=X||a===!0||typeof a=="function"&&a(_,q)||Array.isArray(a)&&a[q]||function(Q,J){for(var j=0;j<J.length;j++)if(-1<Q.indexOf(J[j]))return!0;return!1}(U,p.BAD_DELIMITERS)||-1<U.indexOf(h)||U.charAt(0)===" "||U.charAt(U.length-1)===" ")?m+U+m:U}}};if(p.RECORD_SEP=String.fromCharCode(30),p.UNIT_SEP=String.fromCharCode(31),p.BYTE_ORDER_MARK="\uFEFF",p.BAD_DELIMITERS=["\r",`
`,'"',p.BYTE_ORDER_MARK],p.WORKERS_SUPPORTED=!o&&!!i.Worker,p.NODE_STREAM_INPUT=1,p.LocalChunkSize=10485760,p.RemoteChunkSize=5242880,p.DefaultDelimiter=",",p.Parser=oe,p.ParserHandle=le,p.NetworkStreamer=z,p.FileStreamer=H,p.StringStreamer=K,p.ReadableStreamStreamer=te,i.jQuery){var k=i.jQuery;k.fn.parse=function(r){var e=r.config||{},a=[];return this.each(function(c){if(!(k(this).prop("tagName").toUpperCase()==="INPUT"&&k(this).attr("type").toLowerCase()==="file"&&i.FileReader)||!this.files||this.files.length===0)return!0;for(var m=0;m<this.files.length;m++)a.push({file:this.files[m],inputElem:this,instanceConfig:k.extend({},e)})}),u(),this;function u(){if(a.length!==0){var c,m,d,y,f=a[0];if(R(r.before)){var S=r.before(f.file,f.inputElem);if(typeof S=="object"){if(S.action==="abort")return c="AbortError",m=f.file,d=f.inputElem,y=S.reason,void(R(r.error)&&r.error({name:c},m,d,y));if(S.action==="skip")return void h();typeof S.config=="object"&&(f.instanceConfig=k.extend(f.instanceConfig,S.config))}else if(S==="skip")return void h()}var w=f.instanceConfig.complete;f.instanceConfig.complete=function(se){R(w)&&w(se,f.file,f.inputElem),h()},p.parse(f.file,f.instanceConfig)}else R(r.complete)&&r.complete()}function h(){a.splice(0,1),u()}}}function N(r){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var a=ie(e);a.chunkSize=parseInt(a.chunkSize),e.step||e.chunk||(a.chunkSize=null),this._handle=new le(a),(this._handle.streamer=this)._config=a}.call(this,r),this.parseChunk=function(e,a){if(this.isFirstChunk&&R(this._config.beforeFirstChunk)){var u=this._config.beforeFirstChunk(e);u!==void 0&&(e=u)}this.isFirstChunk=!1,this._halted=!1;var h=this._partialLine+e;this._partialLine="";var c=this._handle.parse(h,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var m=c.meta.cursor;this._finished||(this._partialLine=h.substring(m-this._baseIndex),this._baseIndex=m),c&&c.data&&(this._rowCount+=c.data.length);var d=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(g)i.postMessage({results:c,workerId:p.WORKER_ID,finished:d});else if(R(this._config.chunk)&&!a){if(this._config.chunk(c,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);c=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(c.data),this._completeResults.errors=this._completeResults.errors.concat(c.errors),this._completeResults.meta=c.meta),this._completed||!d||!R(this._config.complete)||c&&c.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),d||c&&c.meta.paused||this._nextChunk(),c}this._halted=!0},this._sendError=function(e){R(this._config.error)?this._config.error(e):g&&this._config.error&&i.postMessage({workerId:p.WORKER_ID,error:e,finished:!1})}}function z(r){var e;(r=r||{}).chunkSize||(r.chunkSize=p.RemoteChunkSize),N.call(this,r),this._nextChunk=o?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(a){this._input=a,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(e=new XMLHttpRequest,this._config.withCredentials&&(e.withCredentials=this._config.withCredentials),o||(e.onload=Y(this._chunkLoaded,this),e.onerror=Y(this._chunkError,this)),e.open(this._config.downloadRequestBody?"POST":"GET",this._input,!o),this._config.downloadRequestHeaders){var a=this._config.downloadRequestHeaders;for(var u in a)e.setRequestHeader(u,a[u])}if(this._config.chunkSize){var h=this._start+this._config.chunkSize-1;e.setRequestHeader("Range","bytes="+this._start+"-"+h)}try{e.send(this._config.downloadRequestBody)}catch(c){this._chunkError(c.message)}o&&e.status===0&&this._chunkError()}},this._chunkLoaded=function(){e.readyState===4&&(e.status<200||400<=e.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:e.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(a){var u=a.getResponseHeader("Content-Range");return u===null?-1:parseInt(u.substring(u.lastIndexOf("/")+1))}(e),this.parseChunk(e.responseText)))},this._chunkError=function(a){var u=e.statusText||a;this._sendError(new Error(u))}}function H(r){var e,a;(r=r||{}).chunkSize||(r.chunkSize=p.LocalChunkSize),N.call(this,r);var u=typeof FileReader<"u";this.stream=function(h){this._input=h,a=h.slice||h.webkitSlice||h.mozSlice,u?((e=new FileReader).onload=Y(this._chunkLoaded,this),e.onerror=Y(this._chunkError,this)):e=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var h=this._input;if(this._config.chunkSize){var c=Math.min(this._start+this._config.chunkSize,this._input.size);h=a.call(h,this._start,c)}var m=e.readAsText(h,this._config.encoding);u||this._chunkLoaded({target:{result:m}})},this._chunkLoaded=function(h){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(h.target.result)},this._chunkError=function(){this._sendError(e.error)}}function K(r){var e;N.call(this,r=r||{}),this.stream=function(a){return e=a,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var a,u=this._config.chunkSize;return u?(a=e.substring(0,u),e=e.substring(u)):(a=e,e=""),this._finished=!e,this.parseChunk(a)}}}function te(r){N.call(this,r=r||{});var e=[],a=!0,u=!1;this.pause=function(){N.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){N.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(h){this._input=h,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){u&&e.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),e.length?this.parseChunk(e.shift()):a=!0},this._streamData=Y(function(h){try{e.push(typeof h=="string"?h:h.toString(this._config.encoding)),a&&(a=!1,this._checkIsFinished(),this.parseChunk(e.shift()))}catch(c){this._streamError(c)}},this),this._streamError=Y(function(h){this._streamCleanUp(),this._sendError(h)},this),this._streamEnd=Y(function(){this._streamCleanUp(),u=!0,this._streamData("")},this),this._streamCleanUp=Y(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function le(r){var e,a,u,h=Math.pow(2,53),c=-h,m=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,d=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,y=this,f=0,S=0,w=!1,se=!1,V=[],_={data:[],errors:[],meta:{}};if(R(r.step)){var q=r.step;r.step=function(v){if(_=v,Q())U();else{if(U(),_.data.length===0)return;f+=v.data.length,r.preview&&f>r.preview?a.abort():(_.data=_.data[0],q(_,y))}}}function X(v){return r.skipEmptyLines==="greedy"?v.join("").trim()==="":v.length===1&&v[0].length===0}function U(){return _&&u&&(j("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+p.DefaultDelimiter+"'"),u=!1),r.skipEmptyLines&&(_.data=_.data.filter(function(v){return!X(v)})),Q()&&function(){if(!_)return;function v(M,W){R(r.transformHeader)&&(M=r.transformHeader(M,W)),V.push(M)}if(Array.isArray(_.data[0])){for(var D=0;Q()&&D<_.data.length;D++)_.data[D].forEach(v);_.data.splice(0,1)}else _.data.forEach(v)}(),function(){if(!_||!r.header&&!r.dynamicTyping&&!r.transform)return _;function v(M,W){var I,L=r.header?{}:[];for(I=0;I<M.length;I++){var F=I,O=M[I];r.header&&(F=I>=V.length?"__parsed_extra":V[I]),r.transform&&(O=r.transform(O,F)),O=J(F,O),F==="__parsed_extra"?(L[F]=L[F]||[],L[F].push(O)):L[F]=O}return r.header&&(I>V.length?j("FieldMismatch","TooManyFields","Too many fields: expected "+V.length+" fields but parsed "+I,S+W):I<V.length&&j("FieldMismatch","TooFewFields","Too few fields: expected "+V.length+" fields but parsed "+I,S+W)),L}var D=1;return!_.data.length||Array.isArray(_.data[0])?(_.data=_.data.map(v),D=_.data.length):_.data=v(_.data,0),r.header&&_.meta&&(_.meta.fields=V),S+=D,_}()}function Q(){return r.header&&V.length===0}function J(v,D){return M=v,r.dynamicTypingFunction&&r.dynamicTyping[M]===void 0&&(r.dynamicTyping[M]=r.dynamicTypingFunction(M)),(r.dynamicTyping[M]||r.dynamicTyping)===!0?D==="true"||D==="TRUE"||D!=="false"&&D!=="FALSE"&&(function(W){if(m.test(W)){var I=parseFloat(W);if(c<I&&I<h)return!0}return!1}(D)?parseFloat(D):d.test(D)?new Date(D):D===""?null:D):D;var M}function j(v,D,M,W){var I={type:v,code:D,message:M};W!==void 0&&(I.row=W),_.errors.push(I)}this.parse=function(v,D,M){var W=r.quoteChar||'"';if(r.newline||(r.newline=function(F,O){F=F.substring(0,1048576);var A=new RegExp(G(O)+"([^]*?)"+G(O),"gm"),ee=(F=F.replace(A,"")).split("\r"),E=F.split(`
`),ae=1<E.length&&E[0].length<ee[0].length;if(ee.length===1||ae)return`
`;for(var he=0,B=0;B<ee.length;B++)ee[B][0]===`
`&&he++;return he>=ee.length/2?`\r
`:"\r"}(v,W)),u=!1,r.delimiter)R(r.delimiter)&&(r.delimiter=r.delimiter(v),_.meta.delimiter=r.delimiter);else{var I=function(F,O,A,ee,E){var ae,he,B,Z;E=E||[",","	","|",";",p.RECORD_SEP,p.UNIT_SEP];for(var be=0;be<E.length;be++){var P=E[be],Ce=0,me=0,we=0;B=void 0;for(var ye=new oe({comments:ee,delimiter:P,newline:O,preview:10}).parse(F),ve=0;ve<ye.data.length;ve++)if(A&&X(ye.data[ve]))we++;else{var ke=ye.data[ve].length;me+=ke,B!==void 0?0<ke&&(Ce+=Math.abs(ke-B),B=ke):B=ke}0<ye.data.length&&(me/=ye.data.length-we),(he===void 0||Ce<=he)&&(Z===void 0||Z<me)&&1.99<me&&(he=Ce,ae=P,Z=me)}return{successful:!!(r.delimiter=ae),bestDelimiter:ae}}(v,r.newline,r.skipEmptyLines,r.comments,r.delimitersToGuess);I.successful?r.delimiter=I.bestDelimiter:(u=!0,r.delimiter=p.DefaultDelimiter),_.meta.delimiter=r.delimiter}var L=ie(r);return r.preview&&r.header&&L.preview++,e=v,a=new oe(L),_=a.parse(e,D,M),U(),w?{meta:{paused:!0}}:_||{meta:{paused:!1}}},this.paused=function(){return w},this.pause=function(){w=!0,a.abort(),e=R(r.chunk)?"":e.substring(a.getCharIndex())},this.resume=function(){y.streamer._halted?(w=!1,y.streamer.parseChunk(e,!0)):setTimeout(y.resume,3)},this.aborted=function(){return se},this.abort=function(){se=!0,a.abort(),_.meta.aborted=!0,R(r.complete)&&r.complete(_),e=""}}function G(r){return r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function oe(r){var e,a=(r=r||{}).delimiter,u=r.newline,h=r.comments,c=r.step,m=r.preview,d=r.fastMode,y=e=r.quoteChar===void 0||r.quoteChar===null?'"':r.quoteChar;if(r.escapeChar!==void 0&&(y=r.escapeChar),(typeof a!="string"||-1<p.BAD_DELIMITERS.indexOf(a))&&(a=","),h===a)throw new Error("Comment character same as delimiter");h===!0?h="#":(typeof h!="string"||-1<p.BAD_DELIMITERS.indexOf(h))&&(h=!1),u!==`
`&&u!=="\r"&&u!==`\r
`&&(u=`
`);var f=0,S=!1;this.parse=function(w,se,V){if(typeof w!="string")throw new Error("Input must be a string");var _=w.length,q=a.length,X=u.length,U=h.length,Q=R(c),J=[],j=[],v=[],D=f=0;if(!w)return ce();if(r.header&&!se){var M=w.split(u)[0].split(a),W=[],I={},L=!1;for(var F in M){var O=M[F];R(r.transformHeader)&&(O=r.transformHeader(O,F));var A=O,ee=I[O]||0;for(0<ee&&(L=!0,A=O+"_"+ee),I[O]=ee+1;W.includes(A);)A=A+"_"+ee;W.push(A)}if(L){var E=w.split(u);E[0]=W.join(a),w=E.join(u)}}if(d||d!==!1&&w.indexOf(e)===-1){for(var ae=w.split(u),he=0;he<ae.length;he++){if(v=ae[he],f+=v.length,he!==ae.length-1)f+=u.length;else if(V)return ce();if(!h||v.substring(0,U)!==h){if(Q){if(J=[],we(v.split(a)),Le(),S)return ce()}else we(v.split(a));if(m&&m<=he)return J=J.slice(0,m),ce(!0)}}return ce()}for(var B=w.indexOf(a,f),Z=w.indexOf(u,f),be=new RegExp(G(y)+G(e),"g"),P=w.indexOf(e,f);;)if(w[f]!==e)if(h&&v.length===0&&w.substring(f,f+U)===h){if(Z===-1)return ce();f=Z+X,Z=w.indexOf(u,f),B=w.indexOf(a,f)}else if(B!==-1&&(B<Z||Z===-1))v.push(w.substring(f,B)),f=B+q,B=w.indexOf(a,f);else{if(Z===-1)break;if(v.push(w.substring(f,Z)),ke(Z+X),Q&&(Le(),S))return ce();if(m&&J.length>=m)return ce(!0)}else for(P=f,f++;;){if((P=w.indexOf(e,P+1))===-1)return V||j.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:J.length,index:f}),ve();if(P===_-1)return ve(w.substring(f,P).replace(be,e));if(e!==y||w[P+1]!==y){if(e===y||P===0||w[P-1]!==y){B!==-1&&B<P+1&&(B=w.indexOf(a,P+1)),Z!==-1&&Z<P+1&&(Z=w.indexOf(u,P+1));var Ce=ye(Z===-1?B:Math.min(B,Z));if(w.substr(P+1+Ce,q)===a){v.push(w.substring(f,P).replace(be,e)),w[f=P+1+Ce+q]!==e&&(P=w.indexOf(e,f)),B=w.indexOf(a,f),Z=w.indexOf(u,f);break}var me=ye(Z);if(w.substring(P+1+me,P+1+me+X)===u){if(v.push(w.substring(f,P).replace(be,e)),ke(P+1+me+X),B=w.indexOf(a,f),P=w.indexOf(e,f),Q&&(Le(),S))return ce();if(m&&J.length>=m)return ce(!0);break}j.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:J.length,index:f}),P++}}else P++}return ve();function we(de){J.push(de),D=f}function ye(de){var Pe=0;if(de!==-1){var Ne=w.substring(P+1,de);Ne&&Ne.trim()===""&&(Pe=Ne.length)}return Pe}function ve(de){return V||(de===void 0&&(de=w.substring(f)),v.push(de),f=_,we(v),Q&&Le()),ce()}function ke(de){f=de,we(v),v=[],Z=w.indexOf(u,f)}function ce(de){return{data:J,errors:j,meta:{delimiter:a,linebreak:u,aborted:S,truncated:!!de,cursor:D+(se||0)}}}function Le(){c(ce()),J=[],j=[]}},this.abort=function(){S=!0},this.getCharIndex=function(){return f}}function _e(r){var e=r.data,a=C[e.workerId],u=!1;if(e.error)a.userError(e.error,e.file);else if(e.results&&e.results.data){var h={abort:function(){u=!0,ne(e.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:fe,resume:fe};if(R(a.userStep)){for(var c=0;c<e.results.data.length&&(a.userStep({data:e.results.data[c],errors:e.results.errors,meta:e.results.meta},h),!u);c++);delete e.results}else R(a.userChunk)&&(a.userChunk(e.results,h,e.file),delete e.results)}e.finished&&!u&&ne(e.workerId,e.results)}function ne(r,e){var a=C[r];R(a.userComplete)&&a.userComplete(e),a.terminate(),delete C[r]}function fe(){throw new Error("Not implemented.")}function ie(r){if(typeof r!="object"||r===null)return r;var e=Array.isArray(r)?[]:{};for(var a in r)e[a]=ie(r[a]);return e}function Y(r,e){return function(){r.apply(e,arguments)}}function R(r){return typeof r=="function"}return g&&(i.onmessage=function(r){var e=r.data;if(p.WORKER_ID===void 0&&e&&(p.WORKER_ID=e.workerId),typeof e.input=="string")i.postMessage({workerId:p.WORKER_ID,results:p.parse(e.input,e.config),finished:!0});else if(i.File&&e.input instanceof File||e.input instanceof Object){var a=p.parse(e.input,e.config);a&&i.postMessage({workerId:p.WORKER_ID,results:a,finished:!0})}}),(z.prototype=Object.create(N.prototype)).constructor=z,(H.prototype=Object.create(N.prototype)).constructor=H,(K.prototype=Object.create(K.prototype)).constructor=K,(te.prototype=Object.create(N.prototype)).constructor=te,p})})(tt);const We=tt.exports;function He(n,t,s){const i=n.slice();return i[4]=t[s],i}function Ke(n,t,s){const i=n.slice();return i[4]=t[s],i}function mt(n){let t=n[4].Owner+"",s;return{c(){s=re(t)},m(i,o){ge(i,s,o)},p(i,o){o&1&&t!==(t=i[4].Owner+"")&&ue(s,t)},d(i){i&&pe(s)}}}function yt(n){let t,s=n[4].Owner+"",i,o;return{c(){t=b("a"),i=re(s),$(t,"href",o="mailto:"+n[4]["Owner email"])},m(g,C){ge(g,t,C),l(t,i)},p(g,C){C&1&&s!==(s=g[4].Owner+"")&&ue(i,s),C&1&&o!==(o="mailto:"+g[4]["Owner email"])&&$(t,"href",o)},d(g){g&&pe(t)}}}function Qe(n){let t,s,i;return{c(){t=b("a"),s=re("Code"),$(t,"href",i=n[4]["Code repository"]),$(t,"target","_blank")},m(o,g){ge(o,t,g),l(t,s)},p(o,g){g&1&&i!==(i=o[4]["Code repository"])&&$(t,"href",i)},d(o){o&&pe(t)}}}function Je(n){let t,s,i;return{c(){t=b("a"),s=re("Scraper"),$(t,"href",i=n[4]["Scraper repository"]),$(t,"target","_blank")},m(o,g){ge(o,t,g),l(t,s)},p(o,g){g&1&&i!==(i=o[4]["Scraper repository"])&&$(t,"href",i)},d(o){o&&pe(t)}}}function Ye(n){let t,s,i;return{c(){t=b("a"),s=re("Datasheet"),$(t,"href",i=n[4]["Data sheet"]),$(t,"target","_blank")},m(o,g){ge(o,t,g),l(t,s)},p(o,g){g&1&&i!==(i=o[4]["Data sheet"])&&$(t,"href",i)},d(o){o&&pe(t)}}}function Xe(n){let t,s,i,o=n[4].Name+"",g,C,x,p,k=n[4].Status+"",N,z,H,K,te,le,G=n[4].Notes+"",oe,_e,ne,fe,ie,Y,R,r;function e(d,y){return d[4]["Owner email"]?yt:mt}let a=e(n),u=a(n),h=n[4]["Code repository"]&&Qe(n),c=n[4]["Scraper repository"]&&Je(n),m=n[4]["Data sheet"]&&Ye(n);return{c(){t=b("tr"),s=b("td"),i=b("a"),g=re(o),x=T(),p=b("td"),N=re(k),H=T(),K=b("td"),u.c(),te=T(),le=b("td"),oe=re(G),_e=T(),ne=b("td"),h&&h.c(),fe=T(),ie=b("td"),c&&c.c(),Y=T(),R=b("td"),m&&m.c(),r=T(),$(i,"href",C=n[4].Link),$(i,"target","_blank"),$(p,"class",z=ze(n[4].Status.replace(/\s/g,""))+" svelte-1prezxq")},m(d,y){ge(d,t,y),l(t,s),l(s,i),l(i,g),l(t,x),l(t,p),l(p,N),l(t,H),l(t,K),u.m(K,null),l(t,te),l(t,le),l(le,oe),l(t,_e),l(t,ne),h&&h.m(ne,null),l(t,fe),l(t,ie),c&&c.m(ie,null),l(t,Y),l(t,R),m&&m.m(R,null),l(t,r)},p(d,y){y&1&&o!==(o=d[4].Name+"")&&ue(g,o),y&1&&C!==(C=d[4].Link)&&$(i,"href",C),y&1&&k!==(k=d[4].Status+"")&&ue(N,k),y&1&&z!==(z=ze(d[4].Status.replace(/\s/g,""))+" svelte-1prezxq")&&$(p,"class",z),a===(a=e(d))&&u?u.p(d,y):(u.d(1),u=a(d),u&&(u.c(),u.m(K,null))),y&1&&G!==(G=d[4].Notes+"")&&ue(oe,G),d[4]["Code repository"]?h?h.p(d,y):(h=Qe(d),h.c(),h.m(ne,null)):h&&(h.d(1),h=null),d[4]["Scraper repository"]?c?c.p(d,y):(c=Je(d),c.c(),c.m(ie,null)):c&&(c.d(1),c=null),d[4]["Data sheet"]?m?m.p(d,y):(m=Ye(d),m.c(),m.m(R,null)):m&&(m.d(1),m=null)},d(d){d&&pe(t),u.d(),h&&h.d(),c&&c.d(),m&&m.d()}}}function vt(n){let t=n[4].Owner+"",s;return{c(){s=re(t)},m(i,o){ge(i,s,o)},p(i,o){o&2&&t!==(t=i[4].Owner+"")&&ue(s,t)},d(i){i&&pe(s)}}}function kt(n){let t,s=n[4].Owner+"",i,o;return{c(){t=b("a"),i=re(s),$(t,"href",o="mailto:"+n[4]["Owner email"])},m(g,C){ge(g,t,C),l(t,i)},p(g,C){C&2&&s!==(s=g[4].Owner+"")&&ue(i,s),C&2&&o!==(o="mailto:"+g[4]["Owner email"])&&$(t,"href",o)},d(g){g&&pe(t)}}}function Ze(n){let t=n[4]["Run location"]+"",s;return{c(){s=re(t)},m(i,o){ge(i,s,o)},p(i,o){o&2&&t!==(t=i[4]["Run location"]+"")&&ue(s,t)},d(i){i&&pe(s)}}}function Ge(n){let t,s,i,o=n[4].Name+"",g,C,x,p,k=n[4].Status+"",N,z,H,K,te,le,G=n[4].Notes+"",oe,_e,ne,fe,ie,Y=n[4].Schedule+"",R,r,e,a=n[4].Duration+"",u,h;function c(f,S){return f[4]["Owner email"]?kt:vt}let m=c(n),d=m(n),y=n[4]["Run location"]&&Ze(n);return{c(){t=b("tr"),s=b("td"),i=b("a"),g=re(o),x=T(),p=b("td"),N=re(k),H=T(),K=b("td"),d.c(),te=T(),le=b("td"),oe=re(G),_e=T(),ne=b("td"),y&&y.c(),fe=T(),ie=b("td"),R=re(Y),r=T(),e=b("td"),u=re(a),h=T(),$(i,"href",C=n[4]["Scraper repository"]),$(i,"target","_blank"),$(p,"class",z=ze(n[4].Status.replace(/\s/g,""))+" svelte-1prezxq")},m(f,S){ge(f,t,S),l(t,s),l(s,i),l(i,g),l(t,x),l(t,p),l(p,N),l(t,H),l(t,K),d.m(K,null),l(t,te),l(t,le),l(le,oe),l(t,_e),l(t,ne),y&&y.m(ne,null),l(t,fe),l(t,ie),l(ie,R),l(t,r),l(t,e),l(e,u),l(t,h)},p(f,S){S&2&&o!==(o=f[4].Name+"")&&ue(g,o),S&2&&C!==(C=f[4]["Scraper repository"])&&$(i,"href",C),S&2&&k!==(k=f[4].Status+"")&&ue(N,k),S&2&&z!==(z=ze(f[4].Status.replace(/\s/g,""))+" svelte-1prezxq")&&$(p,"class",z),m===(m=c(f))&&d?d.p(f,S):(d.d(1),d=m(f),d&&(d.c(),d.m(K,null))),S&2&&G!==(G=f[4].Notes+"")&&ue(oe,G),f[4]["Run location"]?y?y.p(f,S):(y=Ze(f),y.c(),y.m(ne,null)):y&&(y.d(1),y=null),S&2&&Y!==(Y=f[4].Schedule+"")&&ue(R,Y),S&2&&a!==(a=f[4].Duration+"")&&ue(u,a)},d(f){f&&pe(t),d.d(),y&&y.d()}}}function bt(n){let t,s,i,o,g,C,x,p,k,N,z,H,K,te,le,G,oe,_e,ne,fe,ie,Y,R,r,e,a,u,h,c,m,d,y,f,S,w,se,V,_,q,X,U,Q,J,j,v,D,M,W,I=n[0],L=[];for(let A=0;A<I.length;A+=1)L[A]=Xe(Ke(n,I,A));let F=n[1],O=[];for(let A=0;A<F.length;A+=1)O[A]=Ge(He(n,F,A));return{c(){t=b("main"),s=b("div"),s.innerHTML=`<h1>Data Visualization and Pipeline Directory</h1> 
    <a href="https://centre.humdata.org" target="_blank" rel="noreferrer" class="svelte-1prezxq"><img src="images/centreforHumdata_green_TransparentBG.png" class="logo svelte-1prezxq" alt="Centre for Humanitarian Data Logo"/></a>`,i=T(),o=b("section"),g=b("h2"),g.textContent="Data Visualizations",C=T(),x=b("table"),p=b("thead"),k=b("tr"),N=b("th"),N.textContent="Name",z=T(),H=b("th"),H.textContent="Status",K=T(),te=b("th"),te.textContent="Owner",le=T(),G=b("th"),G.textContent="Notes",oe=T(),_e=b("th"),_e.textContent="Code",ne=T(),fe=b("th"),fe.textContent="Scraper",ie=T(),Y=b("th"),Y.textContent="Datasheet",R=T(),r=b("tbody");for(let A=0;A<L.length;A+=1)L[A].c();e=T(),a=b("section"),u=b("h2"),u.textContent="Pipelines",h=T(),c=b("table"),m=b("thead"),d=b("tr"),y=b("th"),y.textContent="Name",f=T(),S=b("th"),S.textContent="Status",w=T(),se=b("th"),se.textContent="Owner",V=T(),_=b("th"),_.textContent="Notes",q=T(),X=b("th"),X.textContent="Run location",U=T(),Q=b("th"),Q.textContent="Schedule",J=T(),j=b("th"),j.textContent="Duration",v=T(),D=b("tbody");for(let A=0;A<O.length;A+=1)O[A].c();$(s,"class","header svelte-1prezxq"),$(x,"class","svelte-1prezxq"),$(c,"class","svelte-1prezxq")},m(A,ee){ge(A,t,ee),l(t,s),l(t,i),l(t,o),l(o,g),l(o,C),l(o,x),l(x,p),l(p,k),l(k,N),l(k,z),l(k,H),l(k,K),l(k,te),l(k,le),l(k,G),l(k,oe),l(k,_e),l(k,ne),l(k,fe),l(k,ie),l(k,Y),l(x,R),l(x,r);for(let E=0;E<L.length;E+=1)L[E]&&L[E].m(r,null);l(t,e),l(t,a),l(a,u),l(a,h),l(a,c),l(c,m),l(m,d),l(d,y),l(d,f),l(d,S),l(d,w),l(d,se),l(d,V),l(d,_),l(d,q),l(d,X),l(d,U),l(d,Q),l(d,J),l(d,j),l(c,v),l(c,D);for(let E=0;E<O.length;E+=1)O[E]&&O[E].m(D,null);M||(W=[Te(N,"click",function(){Se(n[2]("Name"))&&n[2]("Name").apply(this,arguments)}),Te(H,"click",function(){Se(n[2]("Status"))&&n[2]("Status").apply(this,arguments)}),Te(y,"click",function(){Se(n[2]("Name","pipeline"))&&n[2]("Name","pipeline").apply(this,arguments)}),Te(S,"click",function(){Se(n[2]("Status","pipeline"))&&n[2]("Status","pipeline").apply(this,arguments)})],M=!0)},p(A,[ee]){if(n=A,ee&1){I=n[0];let E;for(E=0;E<I.length;E+=1){const ae=Ke(n,I,E);L[E]?L[E].p(ae,ee):(L[E]=Xe(ae),L[E].c(),L[E].m(r,null))}for(;E<L.length;E+=1)L[E].d(1);L.length=I.length}if(ee&2){F=n[1];let E;for(E=0;E<F.length;E+=1){const ae=He(n,F,E);O[E]?O[E].p(ae,ee):(O[E]=Ge(ae),O[E].c(),O[E].m(D,null))}for(;E<O.length;E+=1)O[E].d(1);O.length=F.length}},i:De,o:De,d(A){A&&pe(t),Ue(L,A),Ue(O,A),M=!1,Ie(W)}}}function wt(n,t,s){let i,o=[];We.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vRqBuIYkkzFIMlq541njH9S9mO-nda40sab-AMP4tlhcWFiZt0QrcXOVS44ALJtDW17yu53vyhbUEuY/pub?gid=0&single=true&output=csv",{header:!0,download:!0,complete(x){s(0,o=x.data)}});let g=[];We.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vRqBuIYkkzFIMlq541njH9S9mO-nda40sab-AMP4tlhcWFiZt0QrcXOVS44ALJtDW17yu53vyhbUEuY/pub?gid=87687849&single=true&output=csv",{header:!0,download:!0,complete(x){s(1,g=x.data)}});let C={col:"Name",ascending:!0};return n.$$.update=()=>{n.$$.dirty&11&&s(2,i=(x,p)=>{C.col==x?s(3,C.ascending=!C.ascending,C):(s(3,C.col=x,C),s(3,C.ascending=!0,C));let k=C.ascending?1:-1,N=(z,H)=>z[x]<H[x]?-1*k:z[x]>H[x]?1*k:0;p=="pipeline"?s(1,g=g.sort(N)):s(0,o=o.sort(N))})},[o,g,i,C]}class Ct extends _t{constructor(t){super(),pt(this,t,wt,bt,rt,{})}}new Ct({target:document.getElementById("app")});
