# 各种设备BUG解决方案

## 解决iOS下input和fixed 问题

> 在ios下如果页面底部有fixed 元素当有input输入框触发键盘时fixed会浮动在页面

解决方法有很多种，但是要根据实际需要更改

### 方法一、css解决（弊端：当有大面积input元素时会出现滑动不顺畅问题）

这里给内容区域设置 position:absolute，并且设置一个距离fixed的底部距离

```css
.main {
  position: absolute;
  bottom: rem-calc(80px); // fixed元素的高度
  top: 0;
  left: 0;
  width: 100%;
}
```

## 方法二、js解决方法（弊端：每次input焦点事件时要执行一次）

```css
.pos-rel {
  position: relative;
}
```

```js
$(function() {
  var isIOS = (/iphone|ipad/gi).test(navigator.appVersion); // 判断是不是ios系统
  if (isIOS) {
    $('.main').on('focus', 'input', function () {
      $('.fixed-bottom').addClass('pos-rel')
    }).on('focusout', 'input', function () {
      $('.fixed-bottom').removeClass('pos-rel')
    })
  }
})
```

当然还有其它的解决方法例如使用 `iscroll.js` 刚开始就用的这种解决方式，后来发现在`input`元素较多或是有`click`事件页面引入`iscroll.js`会遇到各种坑不建议使用，当然也可以把`fixed`设置成`absolute`每次页面滚动变化时重新计算，这种方式也非常的消耗资源

综合以上还是觉得在带有`input`元素的页面尽量避免`fixed`元素的使用