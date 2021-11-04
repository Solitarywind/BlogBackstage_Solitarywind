(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c2df256"],{"057f":function(t,e,n){var r=n("fc6a"),o=n("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?c(t):o(r(t))}},"0f8a":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"note"},[n("header",{staticClass:"noteHead"},[n("SelectDate",{on:{input:t.changeDate}}),n("el-select",{staticClass:"selelabel",attrs:{multiple:"",placeholder:"请选择"},model:{value:t.nodeData.labelVal,callback:function(e){t.$set(t.nodeData,"labelVal",e)},expression:"nodeData.labelVal"}},t._l(t.labeList,(function(t){return n("el-option",{key:t.label,attrs:{label:t.label,value:t.label}})})),1),n("Search",{on:{confirmBtn:t.confirmBtn}})],1),n("el-table",{staticClass:"tBox",attrs:{border:"",data:t.noteList}},[n("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),n("el-table-column",{attrs:{prop:"crateTime",label:"发布时间",align:"center"}}),n("el-table-column",{attrs:{prop:"noteTitle",label:"笔记标题",align:"center"}}),n("el-table-column",{attrs:{prop:"noteCode",label:"作者笔名",align:"center"}}),n("el-table-column",{attrs:{prop:"noteLabel",label:"笔记标签",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.noteLabel,(function(e){return n("span",{key:e,staticStyle:{"margin-right":"5px"}},[t._v(t._s(e)+" ")])}))}}])}),n("el-table-column",{attrs:{fixed:"right",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{staticClass:"textLook",attrs:{type:"warning"},on:{click:function(n){return t.checkout(e.$index)}}},[t._v("查看")]),n("el-button",{staticClass:"texteEdit",attrs:{type:"primary"},on:{click:function(n){return n.stopPropagation(),t.editOut(e.$index)}}},[t._v("编辑")]),n("el-button",{staticClass:"textDel",attrs:{type:"danger"}},[t._v("删除")])]}}])})],1),n("Popup",{attrs:{popupStatus:t.popupStatus},on:{closePopup:t.closePopup},scopedSlots:t._u([{key:"content",fn:function(){return[n("div",{domProps:{innerHTML:t._s(t.noteData.noteCont)}})]},proxy:!0}])})],1)},o=[],i=n("5530"),a=n("2f62"),c=n("d892"),l=n("69b8"),s=n("7130"),u={name:"NoteList",data:function(){return{noteData:{},popupStatus:!1,nodeData:{selectDate:"",labelVal:[],key:""},noteList:[{id:1,crateTime:"2021年8月11日22:49:49",noteTitle:"JS_Bom",noteLabel:["Javascript","BOM"],noteCode:"solitaryWind",noteCont:'<h2><a id="BOM_0"></a>BOM</h2><ul><li><h3><a id="BOM_1"></a>什么是BOM</h3><p>BOM是browser object model的缩写，简称浏览器对象模型</p><p>主要处理浏览器窗口（window）和框架（iframe），描述了与浏览器进行交互的方法和接口，可以对浏览器窗口进行访问和操作，不过通常浏览器特定的 JavaScript 扩展都被看做 BOM 的一部分。扩展如下：</p><pre><code>1.弹出新的浏览器窗口 (例如‘open’)\n<p>2.移动、关闭浏览器窗口以及调整窗口大小</p>\n<p>3.提供 Web 浏览器详细信息的定位对象</p>\n<p>4.提供用户屏幕分辨率详细信息的屏幕对象</p>\n<p>5.对 cookie 的支持</p>\n<p>6.IE 扩展了BOM，加入了ActiveXObject 类，可以通过 JavaScript 实例化 ActiveX 对象<br />\n</code></pre></p>\n</li>\n<li>\n<h3><a id="BOMWindow_18"></a>BOM的核心就是Window</h3>\n<p>实际上操作BOM对象就是在操作Window对象<br />\nwindow对象是BOM的顶层(核心)对象<br />\nWindow对象它具有双重角色，既是通过js访问浏览器窗口的一个接口，又是一个全局对象。这意味着在网页中定义的任何对象，变量和函数，都是window的属性；</p>\n<p>Window 对象表示一个浏览器窗口或一个框架。在客户端 JavaScript 中，Window 对象是全局对象，所有的表达式都在当前的环境中计算。也就是说，要引用当前窗口根本不需要特殊的语法，可以把那个窗口的属性作为全局变量来使用。</p>\n</li>\n<li>\n<h3><a id="BOM_25"></a>BOM的组成</h3>\n<p>1)Window 在 JavaScript 层级中的顶层对象表示<br />\n浏览器窗口<br />\n2)Navigator包含客户端浏览器信息<br />\n3)History包含了浏览器窗口访问过的URL<br />\n4)Location包含了当前URL的信息<br />\n5)Screen包含了客户端显示屏的信息</p>\n</li>\n<li>\n<h3><a id="BOMWindow_33"></a>BOM的语法（实际上是Window的对象属性）</h3>\n<ol>\n<li>\n<p>window对象<br />\n常用：</p>\n<pre><code class="lang-html">   innerheight :返回窗口的文档显示区的高度;\n   innerweight :返回窗口的文档显示区的宽度;\n   pageXOffset :设置或返回当前页面相对于窗口显示区左上角的 X 位置。\n   pageYOffset :设置或返回当前页面相对于窗口显示区左上角的 Y 位置。\n<p>screenLeft  ：只读整数。声明了窗口的左上角在屏幕上的的 x 坐标和 y 坐标。IE、Safari、Chrome 和 Opera 支持 screenLeft和 screenTop，而Chrome、Firefox 和 Safari 支持 screenX 和 screenY。<br />\nscreenTop<br />\nscreenX<br />\nscreenY</p>\n<p>% 这里的兼容性写法  window.screenLeft || wimdow.screenX 指 声明了窗口的左上角在屏幕上的的 x 坐标<br />\nwindow.screenTop || wimdow. screenY 指 声明了窗口的左上角在屏幕上的的 y 坐标</p>\n<p>小demo(模拟懒加载)<br />\n&lt;html&gt;<br />\n&lt;style&gt;<br />\nbody {<br />\nheight: 3000px;<br />\n}<br />\ndiv {<br />\nposition: absolute;<br />\nleft: 200px;<br />\ntop: 1500px;<br />\nwidth: 200px;<br />\nheight: 200px;<br />\nbackground: red;<br />\n}<br />\n&lt;/style&gt;<br />\n&lt;body&gt;<br />\n&lt;div id=“smolldome” style=“opacity:.3”&gt;&lt;/div&gt;<br />\n&lt;/body&gt;<br />\n&lt;script&gt;<br />\nfunction(_id){<br />\nvar oId = doucment.getElementById(‘dome’);<br />\nif(oId.offsetTop &lt;= window.pageYOffset + window.innerHeight){<br />\noID.timer = setInterval(function(){<br />\nif(oId.style.opacity == ‘1’){<br />\nclearInterval(oId.timer)<br />\n}else{<br />\noId.style.opacity = parseFloat(oId.style.opacity) + 0.03<br />\n}<br />\n},100)<br />\n}<br />\n}<br />\nwindow.onscroll = function(){<br />\ncheck(‘dome’)<br />\n}<br />\n&lt;/script&gt;<br />\n&lt;/html&gt;<br />\n</code></pre></p>\n</li>\n<li>\n<p>window的对象方法</p>\n<pre><code class="lang-html">   alert() :显示带有一段消息和一个确认按钮的警告框。()可以传消息内容\n   clearInterval() :取消由 setInterval() 设置的 timeout。\n   clearTimeout() :取消由 setTimeout() 方法设置的 timeout。\n   close() :关闭浏览器窗口。\n   confirm() :显示带有一段消息以及确认按钮和取消按钮的对话框。\n   open() :打开一个新的浏览器窗口或查找一个已命名的窗口.window.open(URL,name,features,replace)。\n   prompt() :显示可提示用户输入的对话框。\n   scrollBy() :按照指定的像素值来滚动内容。     \n   scrollTo() :把内容滚动到指定的坐标。\n   setInterval() :按照指定的周期（以毫秒计）来调用函数或计算表达式。\n   setTimeout() :在指定的毫秒数后调用函数或计算表达式。 \n   例子：\n   &lt;html&gt;\n       &lt;body&gt;\n           &lt;script&gt;\n               window.alert(\'今天学习了吗？\'); //弹出警告框\n               window.close();//关闭窗口\n               window.confirm(\'是否关闭当前窗口\');//弹出提示框\n               window.open(\'https://www.baidu.com\',\'baidu\',\'width=100,height=100\'); //另外打开一个页面\n               window.prompt(\'asd\');//弹出可输入的窗口\n               window.scrollBy(x,y); //x,y代表的是横坐标和纵坐标（必传）\n               window.onbeforeunload = function(){return \'\'};//这个是退出当前页面的提示信息\n               window.scrollTo(x,y)//x,y代表的是横坐标和纵坐标（必传）\n                var timer = setInterval(function(){ //这个是属于无限执行\n                   clearInterval(timer) //关闭定时器\n                 },100);\n                  var timers = setTimeout(function(){ //这个是属于只执行一次的\n                   clearTimeout(timer)    //关闭定时器\n                 },100)\n           &lt;/script&gt;\n       &lt;/body&gt;    \n   &lt;/html&gt;      \n</code></pre>\n</li>\n<li>\n<p>Navigator 对象</p>\n<p>Navigator 对象包含的属性描述了正在使用的浏览器。可以使用这些属性进行平台专用的配置。虽然这个对象的<br />\n名称显而易见的是 Netscape 的 Navigator 浏览器，但其他实现了 JavaScript 的浏览器也支持这个对象。</p>\n</li>\n</ol>\n<pre><code class="lang-html">   对象属性\n   cookieEnabled :返回指明浏览器中是否启用 cookie 的布尔值。\n   online :返回指明系统是否处于脱机模式的布尔值\n   userAgent :返回由客户机发送服务器的 user-agent 头部的值。\n</code></pre>\n<ol start="4">\n<li>History 对象<br />\nHistory 对象包含用户（在浏览器窗口中）访问过的 URL</li>\n</ol>\n<pre><code class="lang-html">  对象属性\n  length: 返回浏览器历史列表中的 URL 数量。\n<p>对象方法<br />\nback() :加载 history 列表中的前一个 URL (即返回上一个浏览窗口)<br />\nforward() :加载 history 列表中的下一个 URL (即返回下一个浏览窗口)<br />\ngo() :加载 history 列表中的某个具体页面。<br />\n&lt;html&gt;<br />\n&lt;body&gt;<br />\n&lt;script&gt;<br />\nhistory.back() //（）里面可以传参 例如 history.back(2)；即返回上两个浏览窗口<br />\nhistory.forward() //（）里面可以传参 例如 history.forward(2)；即返回下两个浏览窗口<br />\nhistory.go() //（）里面可以传参 当值为正的时候返回下面的页面 当值为负数的时候，返回上面的页面<br />\n&lt;/script&gt;<br />\n&lt;/body&gt;<br />\n&lt;/html&gt;<br />\n</code></pre></p>\n<ol start="5">\n<li>\n<p>Location 对象</p>\n<p>Location 对象包含有关当前 URL 的信息。</p>\n<pre><code class="lang-html">   Location 对象属性\n     hash :设置或返回从井号 (#) 开始的 URL（锚）。\n     host :设置或返回主机名和当前 URL 的端口号。\n     href :设置或返回完整的 URL。\n     pathname :设置或返回当前 URL 的路径部分。\n     protocal :设置或返回当前 URL 的协议。\n     search :设置或返回从问号 (?) 开始的 URL（查询部分）。\n<p>Location 对象方法<br />\nassgin() :加载新的文档。<br />\nreload(‘force’) :重新加载当前文档。参数可选，不填或填 false 则取浏览器缓存的文档<br />\nreplace() :用新的文档替换当前文档。<br />\n</code></pre></p>\n</li>\n</ol>\n<p>注：以上的内容仅仅为开发中常用内容，想要了解更多内容请查阅<a href="https://www.runoob.com/jsref/obj-window.html" target="_blank">https://www.runoob.com/jsref/obj-window.html</a></p>\n</li>\n</ul>\n'}]}},computed:Object(i["a"])({},Object(a["b"])({labeList:function(t){return t.Note.labeList}})),watch:{nodeData:{handler:function(t){console.log(t)},deep:!0}},methods:{changeDate:function(t){this.nodeData.nodeData=t},confirmBtn:function(t){this.nodeData.key=t},checkout:function(t){this.popupStatus=!0,this.noteData=this.noteList[t]},closePopup:function(){this.popupStatus=!1},editOut:function(t){this.$store.commit("Note/getNoteData",{noteData:this.noteList[t]}),this.$router.push({name:"AddNote",meta:{name:"编辑笔记",isLogin:!0},params:{id:1}})}},components:{SelectDate:s["a"],Search:l["a"],Popup:c["a"]}},p=u,f=(n("f897"),n("2877")),b=Object(f["a"])(p,r,o,!1,null,"320e36ab",null);e["default"]=b.exports},"53cf":function(t,e,n){},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"69b8":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-input",{staticStyle:{width:"280px"},attrs:{placeholder:t.placeholder},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}},[n("el-button",{attrs:{slot:"append",type:"primary"},on:{click:function(e){return e.stopPropagation(),t.confirmBtn.apply(null,arguments)}},slot:"append"},[t._v(t._s(t.confirmText))])],1)},o=[],i={name:"Search",props:{placeholder:{default:"输入你想输入的"},confirmText:{default:"搜索"}},data:function(){return{keyword:""}},methods:{confirmBtn:function(){this.$emit("confirmBtn",this.keyword),this.keyword=""}}},a=i,c=n("2877"),l=Object(c["a"])(a,r,o,!1,null,null,null);e["a"]=l.exports},7130:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions,clearable:"","value-format":"yyyy-MM-dd"},on:{change:t.selectTime},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},o=[],i={name:"SelectDate",data:function(){return{value:"",pickerOptions:{disabledDate:function(t){return t.getTime()>Date.now()}}}},methods:{selectTime:function(t){this.$emit("input",t)}}},a=i,c=n("2877"),l=Object(c["a"])(a,r,o,!1,null,null,null);e["a"]=l.exports},"746f":function(t,e,n){var r=n("428f"),o=n("5135"),i=n("e538"),a=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),i=n("d066"),a=n("c430"),c=n("83ab"),l=n("4930"),s=n("fdbf"),u=n("d039"),p=n("5135"),f=n("e8b5"),b=n("861d"),d=n("825a"),h=n("7b0b"),m=n("fc6a"),w=n("c04e"),y=n("5c6c"),g=n("7c73"),v=n("df75"),O=n("241c"),S=n("057f"),k=n("7418"),j=n("06cf"),L=n("9bf2"),x=n("d1e7"),P=n("9112"),D=n("6eeb"),_=n("5692"),B=n("f772"),T=n("d012"),M=n("90e3"),I=n("b622"),E=n("e538"),N=n("746f"),C=n("d44e"),R=n("69f3"),U=n("b727").forEach,W=B("hidden"),$="Symbol",J="prototype",X=I("toPrimitive"),H=R.set,Y=R.getterFor($),A=Object[J],F=o.Symbol,V=i("JSON","stringify"),Q=j.f,q=L.f,z=S.f,G=x.f,K=_("symbols"),Z=_("op-symbols"),tt=_("string-to-symbol-registry"),et=_("symbol-to-string-registry"),nt=_("wks"),rt=o.QObject,ot=!rt||!rt[J]||!rt[J].findChild,it=c&&u((function(){return 7!=g(q({},"a",{get:function(){return q(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=Q(A,e);r&&delete A[e],q(t,e,n),r&&t!==A&&q(A,e,r)}:q,at=function(t,e){var n=K[t]=g(F[J]);return H(n,{type:$,tag:t,description:e}),c||(n.description=e),n},ct=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof F},lt=function(t,e,n){t===A&&lt(Z,e,n),d(t);var r=w(e,!0);return d(n),p(K,r)?(n.enumerable?(p(t,W)&&t[W][r]&&(t[W][r]=!1),n=g(n,{enumerable:y(0,!1)})):(p(t,W)||q(t,W,y(1,{})),t[W][r]=!0),it(t,r,n)):q(t,r,n)},st=function(t,e){d(t);var n=m(e),r=v(n).concat(dt(n));return U(r,(function(e){c&&!pt.call(n,e)||lt(t,e,n[e])})),t},ut=function(t,e){return void 0===e?g(t):st(g(t),e)},pt=function(t){var e=w(t,!0),n=G.call(this,e);return!(this===A&&p(K,e)&&!p(Z,e))&&(!(n||!p(this,e)||!p(K,e)||p(this,W)&&this[W][e])||n)},ft=function(t,e){var n=m(t),r=w(e,!0);if(n!==A||!p(K,r)||p(Z,r)){var o=Q(n,r);return!o||!p(K,r)||p(n,W)&&n[W][r]||(o.enumerable=!0),o}},bt=function(t){var e=z(m(t)),n=[];return U(e,(function(t){p(K,t)||p(T,t)||n.push(t)})),n},dt=function(t){var e=t===A,n=z(e?Z:m(t)),r=[];return U(n,(function(t){!p(K,t)||e&&!p(A,t)||r.push(K[t])})),r};if(l||(F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=M(t),n=function(t){this===A&&n.call(Z,t),p(this,W)&&p(this[W],e)&&(this[W][e]=!1),it(this,e,y(1,t))};return c&&ot&&it(A,e,{configurable:!0,set:n}),at(e,t)},D(F[J],"toString",(function(){return Y(this).tag})),D(F,"withoutSetter",(function(t){return at(M(t),t)})),x.f=pt,L.f=lt,j.f=ft,O.f=S.f=bt,k.f=dt,E.f=function(t){return at(I(t),t)},c&&(q(F[J],"description",{configurable:!0,get:function(){return Y(this).description}}),a||D(A,"propertyIsEnumerable",pt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:F}),U(v(nt),(function(t){N(t)})),r({target:$,stat:!0,forced:!l},{for:function(t){var e=String(t);if(p(tt,e))return tt[e];var n=F(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(p(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),r({target:"Object",stat:!0,forced:!l,sham:!c},{create:ut,defineProperty:lt,defineProperties:st,getOwnPropertyDescriptor:ft}),r({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:bt,getOwnPropertySymbols:dt}),r({target:"Object",stat:!0,forced:u((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(h(t))}}),V){var ht=!l||u((function(){var t=F();return"[null]"!=V([t])||"{}"!=V({a:t})||"{}"!=V(Object(t))}));r({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,n){var r,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(r=e,(b(e)||void 0!==t)&&!ct(t))return f(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ct(e))return e}),o[1]=e,V.apply(null,o)}})}F[J][X]||P(F[J],X,F[J].valueOf),C(F,$),T[W]=!0},b5e7:function(t,e,n){"use strict";n("c18b")},c18b:function(t,e,n){},d892:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{visible:t.popupStatus,width:"800px","before-close":t.closePopup},on:{"update:visible":function(e){t.popupStatus=e}}},[t._t("content")],2)},o=[],i={name:"Popup",props:["popupStatus"],methods:{closePopup:function(){this.$emit("closePopup")}}},a=i,c=(n("b5e7"),n("2877")),l=Object(c["a"])(a,r,o,!1,null,"a2d06810",null);e["a"]=l.exports},dbb4:function(t,e,n){var r=n("23e7"),o=n("83ab"),i=n("56ef"),a=n("fc6a"),c=n("06cf"),l=n("8418");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,n,r=a(t),o=c.f,s=i(r),u={},p=0;while(s.length>p)n=o(r,e=s[p++]),void 0!==n&&l(u,e,n);return u}})},e439:function(t,e,n){var r=n("23e7"),o=n("d039"),i=n("fc6a"),a=n("06cf").f,c=n("83ab"),l=o((function(){a(1)})),s=!c||l;r({target:"Object",stat:!0,forced:s,sham:!c},{getOwnPropertyDescriptor:function(t,e){return a(i(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},f897:function(t,e,n){"use strict";n("53cf")}}]);
//# sourceMappingURL=chunk-2c2df256.c002433a.js.map