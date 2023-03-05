---
title: 闭包
date: 2023-3-1 23:59:14
description: 前端面试2：闭包是什么，它的特点作用是什么，还有应用场景防抖与节流。
tags:
  - interview
  - javascript

---



## 作用域

在理解闭包之前，有个重要的概念需要先了解一下，就是 js 执行上下文。

当代码在JavaScript中运行时，执行代码的环境非常重要，并将概括为以下几点：

**全局作用域**——第一次执行代码的默认环境。

**函数作用域**——当执行流进入函数体时。

换句话说，当我们启动程序时，我们从全局执行上下文中开始。一些变量是在全局执行上下文中声明的。我们称之为全局变量。当程序调用一个函数时，会发生什么?

1. JavaScript创建一个新的执行上下文，我们叫作本地执行上下文。
2. 这个本地执行上下文将有它自己的一组变量，这些变量将是这个执行上下文的本地变量。
3. 新的执行上下文被推到到执行堆栈中。可以将执行堆栈看作是一种保存程序在其执行中的位置的容器。

函数什么时候结束?当它遇到一个`return`语句或一个结束括号`}`。

当一个函数结束时，会发生以下情况:

1. 这个本地执行上下文从执行堆栈中弹出。
2. 函数将返回值返回调用上下文。调用上下文是调用这个本地的执行上下文，它可以是全局执行上下文，也可以是另外一个本地的执行上下文。这取决于调用执行上下文来处理此时的返回值，返回的值可以是一个对象、一个数组、一个函数、一个布尔值等等，如果函数没有`return`语句，则返回`undefined`。
3. 这个本地执行上下文被销毁，销毁是很重要，这个本地执行上下文中声明的所有变量都将被删除，不在有变量，这个就是为什么 称为本地执行上下文中自有的变量。



## 变量查找

函数在使用变量是会首先查找函数本地上下文，是否有该变量，如果有就直接使用，如果没有就往上一级上下文查找，直到查找到全局上下文，如果仍然没有找到，值就为`undefined`

``` js
	let a = 'Laffey'
    function cl (){
      let a = 0
      console.log(a)
    }
	cl() // 0
```





## 一个简单的例子

调用函数cl 会创建一个执行上下文，并在这个函数内定义一个变量a = 0，当cl函数返回时，返回值为一个函数，该函数能够访问 函数本地上下文的a=0 变量，在函数结束时，该上下文会被销毁，a=0的变量会作为闭包与返回的函数脱离**本地上下文**，来到**全局上下文**。

``` js
    let a = 'Laffey'
    function cl (){
      let a = 0
      return ()=>{
        console.log(a)
      }
    }
    let fn = cl()
    fn() // 0
```



闭包不但可以是返回函数也可以是返回对象，如下返回的一个对象，里面包含两个函数可以操作、查看闭包的变量。

``` js
    function cl2 (){
      let a = 0
      return {
        add:()=>{
          a += 1
        },
        csl:()=>{
          console.log(a)
        }
      }
    }
    let fn2 = cl2()
    fn2.csl() // 0
    fn2.add() 
    fn2.csl() // 1
```





## 闭包冲突

如下例子闭包是不会发生内容的冲突的，可以复用

``` js
    let a = 'Laffey'
    function cl (num){
      let a = num
      return ()=>{
        console.log(a)
      }
    }
    let fn = cl(1)
    let rn = cl(2)
    fn() // 1
    rn() // 2
```





## 防抖

防抖，就是多次触发任务时，我们要去计算它的触发次数，然后最后一次的触发任务后才一次性全部完成内容。

使用场景：

1. 如用户输入内容时不需要马上校验
2. window窗口大小变化resize时使用
3. 按钮触发ajax时



``` js
function throttling(){
  let timer = null // 定时器
  let times = 0 // 点击次数
  return ()=>{
    times += 1 // 计算点击次数
    clearTimeout(timer) // 清理计时器
    timer = setTimeout(()=>{
        console.log(times) // 输出点击次数
        clearTimeout(timer)
        timer = null
        times = 0
    },2000)
  }
}

let th = throttling()
let btn1 = document.getElementById('btn1')
btn1.addEventListener('click',th)
```





## 节流

节流的跟防抖是大同小异，不过节流是一段时间内只触发任务一次，如下面这串代码，每秒只会执行一次。

```js
function debounce(){
  let times = 0
  let timer = null
  return ()=>{
    times += 1 
    if (timer){
        // 判断定时器是否为空
      return 
    }
    timer = setTimeout(()=>{
        console.log(times)
        clearTimeout(timer)
        timer = null
    },1000)
}}
let de = debounce()
let btn2 = document.getElementById('btn2')
btn2.addEventListener('click',de)
```

