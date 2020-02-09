# Chain of responsibility

Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. Chain the receiving objects and pass the request along the chain until an object handles it.

避免将一个请求的发送者和它的接收者通过传递多个对象

将接收请求的对象串联起来, 让请求沿着对象链进行传递,
直到一个对象能够处理这个请求.

## 现实例子

国王发出一个命令, 首先响应的是离得最近的指挥官,
然后是军官, 最后是士兵.

🙅‍♂️: 不使用 chain of responsibility pattern

```dart
enum RequestType {foo, bar}

class Request {
  final RequestType type;
  Request({this.type});
}

class King {
  Commander commander;
  Officer officer;
  Solider solider;
  void makeRequest(Request request) {
    if(request.type == RequestType.foo)
      commander.handleRequest();
    else if ...
      officer.handlerRequest();
      /// other else...
  }
}

class Commander {}
class Officer {}
class Soldier {}

```

💁🏻‍♀️: 使用 chain of responsibility pattern

```dart
 class RequestHandler {
   final RequestHandler next;

   RequestHandler(this.next);

   handleRequest(Request request) {
     if(request != null)
      this.next.handleRequest(request);
   }
 }

class King extends RequestHandler{

  Commander chain;

  buildChain() {
    this.chain = Commander(Officer(Solider));
  }

  makeRequest(Request req) {
    this.chain.handleRequest(req);
  }
}

class Commander extends RequestHandler{

  @override
  handleRequest(Request req) {
    if(req.type == RequestType.foo) {
      print('handled by commander');
    }else super.handleRequest(req);
  }
}

/// and Officer, and Soldier
```

yeah, much more elegant 🎻!
