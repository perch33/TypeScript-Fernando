(() => {
  type Hero = {
    name: string;
    age?: number;
    power: number[];
    getName?: () => string;
  };

  let flash: Hero = {
    name: "barry hallen",
    age: 24,
    power: [1,2],
  };

  let superman: Hero = {
    name: "clark kent",
    age: 30,
    power: [1,2],
    getName() {
      return this.name;
    },
  };
})();
