import Vue from 'vue'

// bus：基于事件的同一个载体对象
let EventBus = new Vue()

// $on(事件名, function (){} ) -> $emit('事件名', 数据)
export default EventBus
