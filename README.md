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

