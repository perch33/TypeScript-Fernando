(() => {
  class Avenger {
    name;
    power;
    constructor(name = "no name", power = 0) {
      this.name = name;
      this.power = power;
    }
  }

  class FlyingAvenger extends Avenger {
    Flying;
    constructor(name, power) {
      super(name, power);
      this.Flying = true;
    }
  }

  const hulk = new Avenger("hulk", 9001);
  const falcon = new FlyingAvenger("falcon", 50);

  console.log(hulk);
  console.log(falcon);
})();
