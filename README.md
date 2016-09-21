# xingshengji

一个移动端小项目，利用一些新的技术解决方案处理移动端常见问题。

[![Travis](https://img.shields.io/badge/node-v4.x-green.svg)]()
[![Travis](https://img.shields.io/badge/npm-v2.15.9-blue.svg)]()
[![Travis](https://img.shields.io/badge/fis3-v3.0.0-blue.svg)]()
[![Travis](https://img.shields.io/badge/LESS-webstorm11-blue.svg)]()
[![Travis](https://img.shields.io/badge/standard-BEM-blue.svg)]()



#方案

>#新技术应用

###技术方案
***
* LESS框架应用
* BEM命名规范
* 移动端最佳实践手淘方案
* 动态生成viewport + rem + flex + px
* Fis3：压缩、雪碧图、代码部署功能应用

>***
* 摒弃原始百分比布局方式，利用动态生成viewport的方式，动态改变html-fontSize大小。对需要适配的固定宽高比的模块运用rem布局；根据设备像素比（window.devicePixelRatio）给<html>设置data-dpr，根据data-dpr设置fontsize适配字体大小；文字类模块使用flex布局。
* font-size根据设计稿的情况，固定为big、middle、small三类字体，根据data-dpr单独设置样式来控制各个模块的字体大小。
* LESS框架直接应用webstorm编译。

####Fis3
> ***
  * 将项目发布到指定目录
  * 默认文件的配置
  * png/css/js 添加md5
  * css/js 资源压缩合并打包
  * 预览及调试

##项目发布目录规范
---
    |---static              #静态资源
    |   |---img             #图片目录
    |   |---js              #打包js层组件
    |   |---static          #打包样式文件
    |   |   |---main.css
    |   |---README.md
    |---tempalte            #模板文件夹
    |   |---index.html
