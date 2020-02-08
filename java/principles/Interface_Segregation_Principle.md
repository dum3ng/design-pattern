# Interface Segregation Principle

接口分离原则.

避免臃肿的接口定义. 将其拆分为更细小的接口.
一个接口如何定义(包含哪些方法)应该更依赖于调用它的代码, 而不是实现代码.

## example

```dart
abstract class Job {

}

class PrintJob implements Job {

}

class StapleJob implements Job {

}

```

```dart
abstract class Printable {
  print();
}

abstract class Staplable {
  staple();
}

class PrintJob extends Job implements Printable {

}

class StapleJob extends Job implements Staplable {

}

```

参考[SRP](Single_Responsibility_Principle.md)

Wiki:
[Interface segregation principle](https://en.wikipedia.org/wiki/Interface_segregation_principle)
