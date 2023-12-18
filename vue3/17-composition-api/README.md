## Reactive API

- isProxy：检查对象是否由 reactive 或 readonly 创建proxy
- isReactive: 是否由 reactive创建响应式代理，改代理时 readonly建的，但包括了 reactive创建另一个代理，也会返回 true
- isReadonly: 检查对象是否由 readonly 创建的只读代理
- toRaw: 返回 reactive 或 readonly 代理的原始对象
- shallowReactive: 根据其自身 property 的响应性，但**不执行嵌套对象的深层响应式转换**
- shallowReadonly: 根据其自身 property 为只读，但**不执行嵌套对象的深层响应式转换**


- **shalloRef**: 创建浅层的ref对象
- **triggerRef**: 手动触发和 shallowRef 相关联的副作用

## toRefs

```js
const info = reactive({name: "why", age: 18})

// 1.toRefs: 将reactive对象中的所有属性都转成ref, 建立链接
let { name, age } = toRefs(info);

// 2.toRef: 对其中一个属性进行转换ref, 建立链接
let { name } = info // 普通变量
let age = toRef(info, "age") // age时ref对象


const name = ref('Alice')
foo('Alice')
function foo(bar) {
  unref(bar) // isRef(val) ? val.value : val 获取 ref引用中的value，使用 unref
}

```

## JSX

```sh
#babel支持vuejsx插件
pnpm i @vue/babel-plugin-jsx -D

vim babel.csonfig.js
module.exports = {
    presets: [
        '@babel/preset-env'
    ],
    plugins: [
        '@vue/babel-plugin-jsx'
    ]
}
```