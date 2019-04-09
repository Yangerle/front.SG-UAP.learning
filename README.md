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

