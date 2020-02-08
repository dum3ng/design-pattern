# Liskov Substitution Principle

LSP: Liskov 替代原则

> Objects in a program should be replaceable with instances of their subtypes
> without altering the correctness of that program.
>
> 程序中的对象应该是在不需要修改程序的正确性, 就可以被他们的子类型的实例替换的.

LSP 主要的应用领域是类继承.

---

1, 基类和衍生类中的方法的参数应该具有 抗变性 contravariance, 即衍生类方法中的参数类型应该
和基类中的方法参数类型相同, 或者更宽松;
而方法的返回值应该具有协变性 `covariance`, 即衍生类方法的返回值的类型应该更严格.

2, precondition 和 postcondition.

precondition: 执行代码之前的系统状态.
postcondition: 执行代码之后的系统状态.
系统的状态限制. 基类的前状态不应该被衍生类所加强,
后状态也不应该白衍生类所弱化.

3, invariant 不变量

对于基类某个方法执行前或之后系统的某个状态,
衍生类不应该改变.

i.e. 一个文件在基类的方法执行前是关闭的, 那么衍生类的方法执行前也应该是关闭的.

4, history constraint 历史约束

衍生类的方法不应该用基类不允许的行为来修改对象的状态.

5, 异常

衍生类方法不应该抛出基类方法没有抛出的异常

---

## example

```dart
class A {

  string say(B b) {}
}

class B extends A {
  string say(A a) { super.say(); }
}
// consumer function
function job(A instance) {
  var a = A();
  print(instance.say(a));
}
```

当将一个`B`的实例对象传递给函数时, 代码应该正常的运行.

---

[lsp](http://www.blackwasp.co.uk/lsp.aspx)
