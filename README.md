# thallo

## 简介
一个基于Canvas的组件化游戏框架。

## demo

- [first](https://fanmingfei.github.io/thallo/example/first/)
- [rotation](https://fanmingfei.github.io/thallo/example/rotation/)
- [input](https://fanmingfei.github.io/thallo/example/input/)
- [text](https://fanmingfei.github.io/thallo/example/text/)
- [touch](https://fanmingfei.github.io/thallo/example/touch/)
- [简单模仿淘宝造物节](https://fanmingfei.github.io/thallo/example/tb/) [淘宝造物节](http://c.b1yt.com/h.kKLunM?cv=OKLDZzXw9nG&sm=c4250e)

## 工作原理

![](http://p4.qhimg.com/t01aee1d92f40e1cb81.jpg)

- Canvas 显示相机内容，相机需要放到游戏场景内
- 创建游戏对象后将游戏对象添加到场景
- 游戏对象可以添加组件（component），控制对象的属性（图片、动画、文字、位置）

![](http://p3.qhimg.com/t0196cc1a97bf0dd10d.jpg)

- 创建“场景”
- 创建“相机”，并将场景传递给相机
- 创建“Canvas”，并将“相机”传递给Canvas
- 创建“敌人”，“玩家”两个游戏对象
- 创建“状态”、“键盘操作”、“镜头跟随”脚本
- 给“敌人”绑定“状态”脚本
- 给“玩家”绑定“状态”、“键盘操作”、“镜头跟随”组件
- 将“敌人”，“玩家”添加到“场景”

当然，你需要给他们设置图片，这样才能在游戏视图中显示出来。

