function KingQin() {
  this.name = 'qin';
  this.attack = function() {
    console.log(`${this.name}: attack`);
  };
}

function KingChu() {
  this.name = 'chu';
  this.attack = function() {
    console.log(`${this.name}: attack`);
  };
}

const KingFactory = (function KingFactory() {
  function f() {
    this.getKing = function() {
      return new KingChu();
    };

    this.getEmperior = function() {
      return new KingQin();
    };
  }
  const ins = new f();
  return ins;
})();

const qin = KingFactory.getEmperior();
qin.attack();
