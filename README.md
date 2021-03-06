# front.SG-UAP.learning

[TOC]



## 创建日期：2019.4.9

## 修改日期：2019.4.9

## source

- [AppCan](http://newdocx.appcan.cn/AppCan)

## 创建项目

安装uap-studio,并在菜单栏中做以下选择：

File->New->UAP-Mobile项目->选择新建项目->点击Next->填写项目名称、应用名称、应用ID、应用KEY->点击Next->选择空模板->点击Next->设置模板主题->点击Finish完成创建。

## 移动用户交互界面开发

### 界面元素弹性布局

#### 横向布局

创建box-hor页面：

在phone文件夹上右键->选择New->UAP-Mobile页面可拖拽->输入File name:box-hor->点击Finish完成创建。

在设计器中创建如下布局树：

```makefile
└─Body
    └─Page 
        └─Box
            └─Box
            └─Text
            └─Icon
```

代码分析：

![](https://ws1.sinaimg.cn/large/005WaqBHly1g1wfgb4zuwj30k808qq3l.jpg)

对应于我们在设计器中的配置，容器Box中class属性里ub定义了此Box为弹性容器，默认为横向布局。文字Text控件的class属性里ub-f1定义了此控件在容器Box中占用一份空间。文字Text控件的class属性里的ub ub-ac分别定义此Text控件也是一个弹性盒子，且其子元素需要纵向居中对齐。

#### 纵向布局

创建box-ver页面：

在设计器创建如下布局树：
```makefile
└─Body
    └─Page 
        └─Box
            └─Box
            └─Text
            └─Icon
```

代码分析：

![](https://ws1.sinaimg.cn/large/005WaqBHly1g1wi1yyhwej30mf0950tm.jpg)

对应于我们在设计器中的配置，容器Box中class属性里ub定义了此Box为弹性容器，通过ub-ver设定其为纵向布局。加入的子Box控件，通过ub-f1使其占据一份空间。文字Text控件的class属性里的ub ub-pc分别定义此Text控件也是一个弹性盒子，且其子元素需要横向居中对齐。

#### 弹性布局要点

弹性盒子布局，适用于高或宽或高宽都已知的元素进行分割的布局。

当设定一个容器采用弹性盒子布局时，要使用ub进行定义。当需要纵向布局时，需要再附加ub-ver来进行设定。当需要对弹性盒子内的子元素进行横向居中、居右对齐或者纵向居中、居下对齐时需要为容器设定ub-ac、ub-ae和ub-pc、ub-pe进行设定，容器默认子元素居左、居上对齐。

容器中的子元素分为可自行确定高宽的元素和弹性高宽的元素。自行确定高宽的元素一种是通过直接设定元素样式的高度宽度来定义，例如：

```html
<div style=”width:30px”></div>
```

弹性高宽的元素则需要使用ub-f1、ub-f2、ub-f3、ub-f4等进行设定，分别表示占用1到4份。那么容器中的子元素每一份占用的高宽可以通过如下公式计算得到,以横向弹性布局为例:

1份宽度 = (W - SUM(已知宽度元素的宽))/SUM(每个弹性元素占用份数)

w = (200 - (24 + 32))/(1+2)=48

那么四个元素的宽度分别为 24px、32px、48px、96px。

弹性盒子布局中使用的 ub ub-ver ub-ac ub-pc ub-f1 等是对弹性布局CSS样式的封装，可参考 ui-box.css 文件查看具体样式属性。

ub-ac、ub-ae和ub-pc、ub-pe两组属性用于控制弹性盒子容器**子元素**的对齐属性，当弹性盒子为横向模式时，ub-ac、ub-ae代表纵向居中对齐和底部对齐，ub-pc和ub-pe代表横向居中对齐和右对齐，但当弹性盒子容器采用ub-ver进行纵向布局时，ub-ac、ub-ae和ub-pc、ub-pe的作用会正好相反。通过UI设计器的控制图标可以很清晰看到和使用。

### 设计器UI控件

IDE的UI设计器中包含很多常用的UI组件，方便我们在应用界面布局之中使用。主要包含：

![](https://ws1.sinaimg.cn/large/005WaqBHly1g1wlec6qv4j30bi0dfwfa.jpg)

#### ECHARTS BI组件

ECharts组件是互联网开源的BI组件库，基于Javascript和HTML Canvas技术实现。它有美观的界面交互效果和强大的功能，适合构建高体验的报表界面。UI设计器提供我们在移动应用开发中最常用的折线图、柱状图、饼状图、雷达图、仪表盘和地图六种组件。由于ECharts配置属性众多，UI设计器提供最常用的配置属性来构建组件，同时支持与MVVM集成实现数据自动映射。

1. 折线控件

   可以构建单线和多线的折线效果控件，支持面积累加等效果

2. 柱状图控件

   可以构建单条目和多条亩的柱状效果控件，支持累加等效果

3. 饼状图控件

   可以构建单类和多类的饼状效果控件，支持单控件多饼状图显示

4. 雷达图控件

   可以构建雷达图控件，支持单控件多系列数据显示

5. 仪表盘控件

   可以构建仪表盘控件，用于变化数据的动态显示

6. 地图控件

   支持中国及所有省市的独立地图显示。全国地图支持所有省份的划分。省与直辖市支持二级县市划分。

#### 基础组件

1. 盒子控件

2. 正方形盒子控件

3. 输入框控件

4. 搜索框控件

5. 带图标控件

6. 按钮控件

7. 开关控件

   一个最基础的开关控件。

8. 选择控件

   一个基于`<select>`元素定义的选择器组件，用于从已有条目中选择。

9. 图片滑块控件

   一个用于多张图片通过手指触摸实现横向循环切换的控件，控件数据属性可以通过属性编辑界面进行调整。

10. 标签导航控件

    一个支持多条目标签的控件，可用于下导航、条目分类导航等场景。

11. 文本标签控件

    用于显示一段文本的控件。

12. 图标控件

    用于显示一个图标的控件，图标可以从图标库中选择，也可人工自定义输入。

13. 图片控件

    用于显示一个图片的控件，对应于`<img>`标签。当然也可以通过为其他控件设定背景图片来显示图片。例如为box控件设定背景图片。大部分场景这两种模式可以通用。

14. 自定义列表控件

    用于显示用户自定义设计的列表条目的容器控件，设计人员可以向列表中插入其他控件来组织一个列表的条目。自定义列表控件可以与数据模型组件进行关联，实现数据与列表界面的自动映射。可参考后续MVVM章节。

15. 单行列表控件

    基于JSSDK的列表控件，可配置显示单行文本、小图标、箭头等。列表样式已经由sdk中模版进行定制。设计人员可以为其配置静态数据进行展现。对于需要从服务器获取数据且数据条目逐渐增多的场景，建议采用自定义列表控件。

16. 多行列表控件

    基于JSSDK的列表控件，可配置显示多行文本、小图标、箭头等。列表样式已经由sdk中模版进行定制。设计人员可以为其配置静态数据进行展现。对于需要从服务器获取数据且数据条目逐渐增多的场景，建议采用自定义列表控件。

17. 分组列表控件

    基于JSSDK的分组列表控件，可配置显示单行文本、小图标、箭头等。列表样式已经由sdk中模版进行定制。设计人员可以为其配置静态数据进行展现，例如按首字母分类的城市名称列表等。对于需要从服务器获取数据且数据条目逐渐增多的场景，建议采用自定义列表控件。

18. 折叠列表控件

    基于JSSDK的分组列表控件。列表样式已经由sdk中模版进行定制。设计人员可以为其配置静态数据进行展现。

### 常见界面布局排布范例

#### 侧边栏目布局范例

注：注意名称的定义，设计器中会自动生成特殊名称，如果想使用方便，我们可以直接在设计器中对控件重命名（IDE设计器页面左侧id输入框内更改），然后导出，就可以在删除设计器后方便的使用id,做js操作。

创建如下布局树：

```makefile
└─Body
    └─Header
    └─Page_0
    └─Page_1
```

* 为Header添加左右按钮图标

* 设置Page_0定位为fixed,宽度为100%，这个是承载侧边栏的容器

* 设置Page_1的x为0，用来初始化窗口位移动画时的起始位置

* 保存并导出全部

* 编辑js目录下生成的multi.js，加入滑动效果：

  ```javascript
  (function($) {
  	var status=0;
  	
      uap.button("#nav-left", "btn-act",
      function() {
      	status=(status?0:1);
      	$("#Page_1")
      	.css("box-shadow","rgba(120,120,120,0.298039) -10px 0px 8px")
      	.animate({
      		"translateX":status?"70%":"0%"
      	})
      	$("#Header").animate({
      		"translateX":status?"70%":"0%"
      	})
      	
      	
      });
      uap.button("#nav-right", "btn-act",
      function() {
      	status=(status?0:1);
      	$("#Page_1")
      	.css("box-shadow","rgba(120,120,120,0.298039) 10px 0px 8px")
      	.animate({
      		"translateX":status?"-70%":"0%"
      	})
      	$("#Header").animate({
      		"translateX":status?"-70%":"0%"
      	})
      });
  
  })($);
  ```

* 通过模拟器分别点击标题按钮，查看效果

第一个Page我们使用了ufix使其成为一个相对于物理屏幕位置的定位的容器，我们可以用它来承载侧边栏。第二个Page我们用来作为内容的主界面来使用。由于添加顺序Page_1会盖在Page_0之上。而Header由于其z-index属性值较高会显示在最上层。

左右两个按钮代码很相似。首先是使用css函数对Page_1加入了一个阴影，使其和Page_0产生错位效果。然后调用animate函数使Page_1进行位移动画，通过status控制位移的方向。在Page_1位移的同时，我们同时对Header进行了相同位置的移动。

我们把Header放到了Page之外，同时在动画移动时，Page和Header分别进行位移，这是因为当Header位于Page之内时，由于Header的position属性为fixed，这时如果对Page使用transform进行动画变换，会造成Header的fixed属性失效，引起header定位问题。

#### 多内容组（未实现再议）

注：打开页面报错如下:

```bash
Uncaught TypeError: Cannot read property 'template' of undefined
    at Object.<anonymous> (uap.tab.js:10)
    at Object.uap.define (uap.js:4510)
    at uap.tab.js:1
```

界面没有达到想要的效果，具体原因仍未排查出。设想自己可以写js来调整界面的隐藏和显示。

创建如下布局树：

```makefile
└─Body
    └─Header
    └─ScrollContent
        └─Pane
            └─Text
       	└─Pane
		└─Pane
    └─Footer
		└─Tab
```

* 为scrollContent加上上部和下部被Header和Footer遮住区域的余量

* Pane控件默认是隐藏的，打开Pane的Active属性，然后分别在Pane控件加入文字控件

* 使第一个Pane的Active属性为选择状态，其他Pane的Active属性为不选择，然后保存并导出全部

* 在导出的pane.js中加入代码控制Pane的切换:

  ```javascript
  tabview_Tab_96bNbc.on("click",function(obj,index){
      $(".tab_pane").removeClass("active");
      $($(".tab_pane")[index]).addClass("active");
  })
  ```

码中当前显示的pane使用active类，四个Pane按顺序存放于scrollbox中，只有第一个被显示在界面上。

下部的多标签导航控件使用的是一个JS控件，当使用者点击某个标签时，会触发click事件，并告知点击的标签的索引。因此我们在代码中当某个标签被点击时，我们使用$(“.tab_pane”)得到所有4个Pane组件，并移除active类，使所有Pane隐藏，然后根据索引找到需要显示的Pane为其添加active类使其显示在界面上，完成切换。

通过$(“.tab_pane”)[index]即可获得需要显示的Pane的DOM对象，然后在通过$($(“.tab_pane”)[index])把他转换为JQuery DOM对象，使其可以调用addClass函数来添加active类属性。

#### 九宫格界面

注：

box布局（uap目前所使用的）是2009年提出来的，是旧版的写法。

flex布局标准是2012年提出来的，相比之下，现代浏览器对flex的支持度更高。不用写-webkit-等前缀都基本上能解析。包括ie11，ie-edge,safari,opera,chrome都能很好地支持这个布局。

综上所述，弹性布局在使用时应该以flex为主。如果要兼容老版本的web或手机浏览器，再加入-webkit-box,-moz-box等兼容代码。而如果要兼容ie10,ie11，那就只能用flex布局了。

相关文档：

* [css：弹性布局box和flex总结](https://www.jianshu.com/p/5dc27b37d642)
* [Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

前言：

九宫格界面泛指通过把界面进行横纵等分的布局类型，最早由于常见横纵各三个，称之为九宫格。九宫格在屏幕宽度上进行等分成多份，如果不考虑每一个格子的高度的话，是比较容易排布实现的，但如果要保持每一个格子横纵比相同同时宽度还要等分，就稍微复杂一点了。

早期九宫格等排布在宽度上通常采用宽为33.3333%这种比率来定义，但这种方式有可能会产生四舍五入问题，造成三个格子的宽度相加大于了屏幕宽度，造成最后一个格子换行显示。这个问题在PC上还比较容易解决，因为屏幕差异不大，但在移动终端上这个问题就比较明显了，由于屏幕分辨率众多，很容易出现上述问题。因此一般在移动终端中屏幕等分的布局方式一般采用弹性盒子模型，可以有效规避这一问题。

在高度上由于要保证每一个格子的纵横比，保证格子中的内容对齐，早期通常使用JS来动态计算高度进行设定，保证在不同分辨率下都有一致的体验。但这种方式由于存在计算时间点的问题，有些终端会出现闪屏的情况。目前比较常见的是使用CSS的padding特性来实现，简单易行。控件库中的正方形盒子即采用这种技术进行实现。

界面设计：

* 创建一个页面，并命名为square
* 添加一个Page、一个Header、一个ScrollContent组件构建基础布局
* 在ScrollContent中添加一个图片slider组件,并调整其外边距。
* 在ScrollContent中添加一个Box，设定Box为弹性盒子，为Box设定上边框
* 在Box中添加4个SquareBox控件，并设定他们的布局比例为1
* 为前三个SquareBox设定边框
* 重复4到6步几次，最后添加的Box需要同时设定上下边框
* 为最后一个SquareBox添加一个加号图标
* 保存并导出全部

正方形盒子SquareBox是由三个Div组合而成的。这三个div是如何实现高宽同步的呢？首先最外面的Div定义了正方型盒子的宽度，然后内嵌的第一个div定义了正方形盒子的高度。

Div中的bracket类定义了他的高度为0，内边界padding-top为100%。由于padding的百分比是根据元素的宽度进行相对计算的，因此padding-top=100%就等于了宽度。当外部div的宽度变化时，高度也会自动跟着变化，保证了正方形的效果。第三个div主要是用来做为子元素的容器存在的，使用absolute定位模式，避免子元素的大小影响正方形的显示。如果我们需要实现其他比率的长方形，也可以在自己的样式文件里重新定义bracket类，设定padding-top的值来定义纵横比。例如16:9的长方形：

```css
.bracket{
    padding-top:56.25% !important;
}
```

