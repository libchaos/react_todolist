### 初始：
  - state 数据
  - JSX 模板
  - 数据 和 模板 相结合生成真实的Dom， 来显示
  - state 发生改变
  - 数据 + 模板 结合 生成真实的dom 显示
### 缺陷：
  第一次 生成一个完整的DOM
  第二次 生成一个完成DOM
  第二次 的DOM 替换 第一次的 Dom 非常损耗性能

### 第二版
1. state 数据
2. jsx 模板
3. 数据 + 模板 结合 生成真实DOM 显示
4. state 发生改变
5. 数据 + 模板 结合 生成真实DOM 并不直接替换原始的DOM
6. 新DOM 和 原始Dom 做对比 找差异
7. 找出input框发生了变化
8. 只用新DOM中的input元素，替换掉老的Dom中的input元素

缺陷：
1. 性能提升并不明显

### 第三版

1. state
2. jsx
3. 数据 + 模板 生成真实DOM 显示
```html
<div id="abc"><span>hello world</span></div>
```
4. 生成虚拟DOM (虚拟DOM就是一个js对象，用它来描述真实DOM)
```javascript
['div', {id: 'abc'}, ['span', {}, 'hello world']]
```
3. 数据 + 模板 生成真实DOM 显示
5. state 变化
6. 生成新的虚拟dom
```javascript
['div', {id: 'abc'}, ['span', {}, 'bye bye']]
```
7. 比较原始虚拟DOM和新的虚拟DOM的区别，找到区别是span中的内容
8. 直接操作DOM,

**实际是上是先生成虚拟DOM**

优点：
  1. dom比对边js对象比对
  2. 跨端应用

---

#### Diff算法 介绍
自顶向下逐层比较

---
### 生命周期：
  生命周期函数是指在某一时刻组件会自动调用执行的函数

![生命周期](https://ws1.sinaimg.cn/large/9e58a4edly1fxp2odeutmj21460kdwm1.jpg)

---


## redux

![why](https://ws1.sinaimg.cn/large/9e58a4edly1fxq6hwqg3ej20ww0ic768.jpg)



![redux图解](https://ws1.sinaimg.cn/large/9e58a4edgy1fxr0rwykuxj21320k640t.jpg)





