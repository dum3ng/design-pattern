# Bridge

Decouple an abstraction from its implementation so that the two can vary independently.

将抽象和它的实现进行解耦, 使两者可以独立的进行改变.

**桥接模式**实际上是组合优于继承思想的提现.
具体实现的细节被从一个继承层级, 变成了具有另外一种继承层级的其他对象

## 现实例子

假设有一把武器, 其上可以进行附魔.
那么是创建多种附魔后的武器,
还是创建多个魔法, 然后将其附着在一种武器上?

```dart
/// before
class Weapon {

}

class Sword extends Weapon {

}

class FireSword extends Sword {}

```

with bridge pattern, we move the magic to another hierarchy

```dart
class Weapon {
  Magic magic;
  void enchant(Magic magic) {this.magic = magic;}
}
class Sword extends Weapon {
}

class Magic {}
class FireMagic extends Magic{}

/// to make a fire sword, instead of directly
/// create a FireSword instance, we create a Sword, and enchant with FireMagic
var sword = Sword();
var fire = FireMagic();
sword.enchant(fire);
```
