// ES6 import
import $ from 'jquery'

// 导入样式（在 webpack 中，一切皆模块，都可以通过 ES6 导入语法进行导入和使用）
// 模块中，使用 from 接收到的成员为 undefined，则没有必要进行接受
import './css/index.css';
import './less/index.less';
import './scss/index.scss';

// 导入图片，得到图片文件
import logo from './images/benz-logo.jpg';
import bmw from './images/bmw.jpg';

// 给 img 标签 src 动态赋值
$('.logo').attr('src', logo);
$('.bmw').attr('src', bmw);

$(function() {
    $('li:odd').css('background-color', 'yellow')
    $('li:even').css('background-color', 'orange')
})


// 装饰器函数
function info(target) {
    target.info = "Person static info"
}

// 普通类
@info
class Person{}

console.log(Person.info)

