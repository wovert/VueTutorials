// ES6 import
import $ from 'jquery'

// 导入样式（在 webpack 中，一切皆模块，都可以通过 ES6 导入语法进行导入和使用）
import'./css/index.css';
import './less/index.less';
import './scss/index.scss';


$(function() {
    $('li:odd').css('background-color', 'yellow')
    $('li:even').css('background-color', 'orange')
})
