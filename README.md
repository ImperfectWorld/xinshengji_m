# xingshengji_m

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
