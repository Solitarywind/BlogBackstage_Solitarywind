<template>
  <div class="note">
    <header class="noteHead">
      <SelectDate @input="changeDate" />
      <el-select
        class="selelabel"
        v-model="nodeData.labelVal"
        multiple
        placeholder="请选择"
      >
        <el-option
          v-for="item in labeList"
          :key="item.label"
          :label="item.label"
          :value="item.label"
        >
        </el-option>
      </el-select>
      <Search @confirmBtn="confirmBtn" />
    </header>
    <el-table class="tBox" border :data="noteList">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column prop="crateTime" label="发布时间" align="center" />
      <el-table-column prop="noteTitle" label="笔记标题" align="center" />
      <el-table-column prop="noteCode" label="作者笔名" align="center" />
      <el-table-column prop="noteLabel" label="笔记标签" align="center">
        <template slot-scope="scope">
          <span
            style="margin-right: 5px"
            v-for="item in scope.row.noteLabel"
            :key="item"
            >{{ item }}
          </span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            class="textLook"
            type="warning"
            @click="checkout(scope.$index)"
            >查看</el-button
          >
          <el-button
            class="texteEdit"
            type="primary"
            @click.stop="editOut(scope.$index)"
            >编辑</el-button
          >
          <el-button class="textDel" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Popup :popupStatus="popupStatus" @closePopup="closePopup">
        <template #content>
           <div v-html="noteData.noteCont"></div>
        </template>
    </Popup>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Popup from '../../components/other/Popup.vue';
import Search from '../../components/other/Search.vue';
import SelectDate from '../../components/other/SelectDate.vue';

export default {
  name: 'NoteList',
  data() {
    return {
      noteData: {},
      popupStatus: false,
      nodeData: {
        selectDate: '',
        labelVal: [],
        key: '',
      },
      noteList: [
        {
          id: 1,
          crateTime: '2021年8月11日22:49:49',
          noteTitle: 'JS_Bom',
          noteLabel: ['Javascript', 'BOM'],
          noteCode: 'solitaryWind',
          noteCont: `<h2><a id="BOM_0"></a>BOM</h2><ul><li><h3><a id="BOM_1"></a>什么是BOM</h3><p>BOM是browser object model的缩写，简称浏览器对象模型</p><p>主要处理浏览器窗口（window）和框架（iframe），描述了与浏览器进行交互的方法和接口，可以对浏览器窗口进行访问和操作，不过通常浏览器特定的 JavaScript 扩展都被看做 BOM 的一部分。扩展如下：</p><pre><code>1.弹出新的浏览器窗口 (例如‘open’)
<p>2.移动、关闭浏览器窗口以及调整窗口大小</p>
<p>3.提供 Web 浏览器详细信息的定位对象</p>
<p>4.提供用户屏幕分辨率详细信息的屏幕对象</p>
<p>5.对 cookie 的支持</p>
<p>6.IE 扩展了BOM，加入了ActiveXObject 类，可以通过 JavaScript 实例化 ActiveX 对象<br />
</code></pre></p>
</li>
<li>
<h3><a id="BOMWindow_18"></a>BOM的核心就是Window</h3>
<p>实际上操作BOM对象就是在操作Window对象<br />
window对象是BOM的顶层(核心)对象<br />
Window对象它具有双重角色，既是通过js访问浏览器窗口的一个接口，又是一个全局对象。这意味着在网页中定义的任何对象，变量和函数，都是window的属性；</p>
<p>Window 对象表示一个浏览器窗口或一个框架。在客户端 JavaScript 中，Window 对象是全局对象，所有的表达式都在当前的环境中计算。也就是说，要引用当前窗口根本不需要特殊的语法，可以把那个窗口的属性作为全局变量来使用。</p>
</li>
<li>
<h3><a id="BOM_25"></a>BOM的组成</h3>
<p>1)Window 在 JavaScript 层级中的顶层对象表示<br />
浏览器窗口<br />
2)Navigator包含客户端浏览器信息<br />
3)History包含了浏览器窗口访问过的URL<br />
4)Location包含了当前URL的信息<br />
5)Screen包含了客户端显示屏的信息</p>
</li>
<li>
<h3><a id="BOMWindow_33"></a>BOM的语法（实际上是Window的对象属性）</h3>
<ol>
<li>
<p>window对象<br />
常用：</p>
<pre><code class="lang-html">   innerheight :返回窗口的文档显示区的高度;
   innerweight :返回窗口的文档显示区的宽度;
   pageXOffset :设置或返回当前页面相对于窗口显示区左上角的 X 位置。
   pageYOffset :设置或返回当前页面相对于窗口显示区左上角的 Y 位置。
<p>screenLeft  ：只读整数。声明了窗口的左上角在屏幕上的的 x 坐标和 y 坐标。IE、Safari、Chrome 和 Opera 支持 screenLeft和 screenTop，而Chrome、Firefox 和 Safari 支持 screenX 和 screenY。<br />
screenTop<br />
screenX<br />
screenY</p>
<p>% 这里的兼容性写法  window.screenLeft || wimdow.screenX 指 声明了窗口的左上角在屏幕上的的 x 坐标<br />
window.screenTop || wimdow. screenY 指 声明了窗口的左上角在屏幕上的的 y 坐标</p>
<p>小demo(模拟懒加载)<br />
&lt;html&gt;<br />
&lt;style&gt;<br />
body {<br />
height: 3000px;<br />
}<br />
div {<br />
position: absolute;<br />
left: 200px;<br />
top: 1500px;<br />
width: 200px;<br />
height: 200px;<br />
background: red;<br />
}<br />
&lt;/style&gt;<br />
&lt;body&gt;<br />
&lt;div id=“smolldome” style=“opacity:.3”&gt;&lt;/div&gt;<br />
&lt;/body&gt;<br />
&lt;script&gt;<br />
function(_id){<br />
var oId = doucment.getElementById(‘dome’);<br />
if(oId.offsetTop &lt;= window.pageYOffset + window.innerHeight){<br />
oID.timer = setInterval(function(){<br />
if(oId.style.opacity == ‘1’){<br />
clearInterval(oId.timer)<br />
}else{<br />
oId.style.opacity = parseFloat(oId.style.opacity) + 0.03<br />
}<br />
},100)<br />
}<br />
}<br />
window.onscroll = function(){<br />
check(‘dome’)<br />
}<br />
&lt;/script&gt;<br />
&lt;/html&gt;<br />
</code></pre></p>
</li>
<li>
<p>window的对象方法</p>
<pre><code class="lang-html">   alert() :显示带有一段消息和一个确认按钮的警告框。()可以传消息内容
   clearInterval() :取消由 setInterval() 设置的 timeout。
   clearTimeout() :取消由 setTimeout() 方法设置的 timeout。
   close() :关闭浏览器窗口。
   confirm() :显示带有一段消息以及确认按钮和取消按钮的对话框。
   open() :打开一个新的浏览器窗口或查找一个已命名的窗口.window.open(URL,name,features,replace)。
   prompt() :显示可提示用户输入的对话框。
   scrollBy() :按照指定的像素值来滚动内容。     
   scrollTo() :把内容滚动到指定的坐标。
   setInterval() :按照指定的周期（以毫秒计）来调用函数或计算表达式。
   setTimeout() :在指定的毫秒数后调用函数或计算表达式。 
   例子：
   &lt;html&gt;
       &lt;body&gt;
           &lt;script&gt;
               window.alert('今天学习了吗？'); //弹出警告框
               window.close();//关闭窗口
               window.confirm('是否关闭当前窗口');//弹出提示框
               window.open('https://www.baidu.com','baidu','width=100,height=100'); //另外打开一个页面
               window.prompt('asd');//弹出可输入的窗口
               window.scrollBy(x,y); //x,y代表的是横坐标和纵坐标（必传）
               window.onbeforeunload = function(){return ''};//这个是退出当前页面的提示信息
               window.scrollTo(x,y)//x,y代表的是横坐标和纵坐标（必传）
                var timer = setInterval(function(){ //这个是属于无限执行
                   clearInterval(timer) //关闭定时器
                 },100);
                  var timers = setTimeout(function(){ //这个是属于只执行一次的
                   clearTimeout(timer)    //关闭定时器
                 },100)
           &lt;/script&gt;
       &lt;/body&gt;    
   &lt;/html&gt;      
</code></pre>
</li>
<li>
<p>Navigator 对象</p>
<p>Navigator 对象包含的属性描述了正在使用的浏览器。可以使用这些属性进行平台专用的配置。虽然这个对象的<br />
名称显而易见的是 Netscape 的 Navigator 浏览器，但其他实现了 JavaScript 的浏览器也支持这个对象。</p>
</li>
</ol>
<pre><code class="lang-html">   对象属性
   cookieEnabled :返回指明浏览器中是否启用 cookie 的布尔值。
   online :返回指明系统是否处于脱机模式的布尔值
   userAgent :返回由客户机发送服务器的 user-agent 头部的值。
</code></pre>
<ol start="4">
<li>History 对象<br />
History 对象包含用户（在浏览器窗口中）访问过的 URL</li>
</ol>
<pre><code class="lang-html">  对象属性
  length: 返回浏览器历史列表中的 URL 数量。
<p>对象方法<br />
back() :加载 history 列表中的前一个 URL (即返回上一个浏览窗口)<br />
forward() :加载 history 列表中的下一个 URL (即返回下一个浏览窗口)<br />
go() :加载 history 列表中的某个具体页面。<br />
&lt;html&gt;<br />
&lt;body&gt;<br />
&lt;script&gt;<br />
history.back() //（）里面可以传参 例如 history.back(2)；即返回上两个浏览窗口<br />
history.forward() //（）里面可以传参 例如 history.forward(2)；即返回下两个浏览窗口<br />
history.go() //（）里面可以传参 当值为正的时候返回下面的页面 当值为负数的时候，返回上面的页面<br />
&lt;/script&gt;<br />
&lt;/body&gt;<br />
&lt;/html&gt;<br />
</code></pre></p>
<ol start="5">
<li>
<p>Location 对象</p>
<p>Location 对象包含有关当前 URL 的信息。</p>
<pre><code class="lang-html">   Location 对象属性
     hash :设置或返回从井号 (#) 开始的 URL（锚）。
     host :设置或返回主机名和当前 URL 的端口号。
     href :设置或返回完整的 URL。
     pathname :设置或返回当前 URL 的路径部分。
     protocal :设置或返回当前 URL 的协议。
     search :设置或返回从问号 (?) 开始的 URL（查询部分）。
<p>Location 对象方法<br />
assgin() :加载新的文档。<br />
reload(‘force’) :重新加载当前文档。参数可选，不填或填 false 则取浏览器缓存的文档<br />
replace() :用新的文档替换当前文档。<br />
</code></pre></p>
</li>
</ol>
<p>注：以上的内容仅仅为开发中常用内容，想要了解更多内容请查阅<a href="https://www.runoob.com/jsref/obj-window.html" target="_blank">https://www.runoob.com/jsref/obj-window.html</a></p>
</li>
</ul>
`,
        },
      ],
    };
  },
  computed: {
    ...mapState({
      labeList: (state) => state.Note.labeList,
    }),
  },
  watch: {
    nodeData: {
      handler(val) {
        console.log(val);
      },
      deep: true,
    },
  },
  methods: {
    changeDate(val) {
      this.nodeData.nodeData = val;
    },
    confirmBtn(val) {
      this.nodeData.key = val;
    },
    // 查看
    checkout(index) {
      this.popupStatus = true;
      this.noteData = this.noteList[index];
    },
    closePopup() {
      this.popupStatus = false;
    },
    editOut(index) {
      this.$store.commit('Note/getNoteData', { noteData: this.noteList[index] });
      this.$router.push({
        name: 'AddNote',
        meta: {
          name: '编辑笔记',
          isLogin: true,
        },
        params: {
          id: 1,
        },
      });
    },
  },
  components: {
    SelectDate,
    Search,
    Popup,
  },
};
</script>

<style lang="scss" scoped>
.note {
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  .noteHead {
    display: flex;
    .selelabel {
      margin: 0px 10px;
    }
  }
}
.tBox{
  margin-top:20px;
}
.textLook,
.textDel,
.texteEdit {
  padding: 10px;
}
</style>
