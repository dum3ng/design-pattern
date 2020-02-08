# Abstract Factory

抽象工厂: 工厂类的工厂

Provide an interface for creating families of related or dependent objects without specifying their concrete classes.

提供这样一个接口: 创建一系列相关或独立的对象, 而不需要指定具体的类.

工厂模式提供了对象的创建.

```plain
Factory of Factory Interface
          ^
          | implements
          +
  Factory of Factory          +-->   object
          +                   |
      create                  |
          +-------->  Factory +-->   object
          |
          +-------->  Factory2
          |
          +-------->  Factory3

```
