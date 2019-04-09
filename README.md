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