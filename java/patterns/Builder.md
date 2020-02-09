# Builder

Separate the construction of a complex object from its representation so that the same construction process can create different representations.

将一个复杂对象的**构造**和**表现**分离开来,
这样相同的构造*过程*可以创造不同的表现.

```dart
class Foo {
  /// many properties
  Bar bar;
  Baz baz;
  FooBar foobar;
  Foo(FooBuilder builder) {
    /// assign builder properties to this
  }
}
class FooBuilder {
  Bar bar;
  Baz baz;
  FooBar foobar;

 FooBuilder(){}
  FooBuilder withBar(Bar bar) {}

 Foo build() => Foo(this);
}
```

---

Telescoping constructor anti-pattern

如果一个对象可以有多种表现形式, 那么使用构造函数的方法,
将会需要很多个构造函数, 构造函数的参数列表也会很长.

---

对于支持关键字参数的语言来说, 似乎不是一个问题?

```dart
void foo({String a,  String b, int c= 3,}) {}
```
