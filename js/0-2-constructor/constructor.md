# constructor

构造器在 js 中通过函数来实现.
一个函数 function 如果可以通过 `new` 来调用, 并将生成的对象返回, 那么
这个函数就可以作为一个构造器, 用来生成对象.

js 中, 箭头函数 ArrowFunction 不能作为构造器, 因为箭头函数默认即绑定当前上下文
的`this`对象, 它不能用来生成新的对象, 只能作为单纯的函数使用.

```js
function Person({ name, age }) {
  this.name = name;
  this.age = age;
  return this;
}

Person.prototype.die = function() {};
```

由构造器创建的对象, 会有一个 `__proto` 属性, 其值为构造器的`prototype`,
即

```js
person.__proto === Person.prototype;
```

而 `__proto` 正是 js 中原型链中向上查找的对象.

构造器的`prototype`, 除了包含显式的赋给的值之外, 还有一个默认的`constructor`属性,
它的值为构造器本身, 即

```js
newObjectPersos.prototype.constructor === Person;
```

在 js 中, 一个构造器, 即相当于类 **class** 的地位, 用来生成对象.
在 ES5 中, 加入了对关键字 `class` 的支持, 实际上是 `function` 的语法糖.
