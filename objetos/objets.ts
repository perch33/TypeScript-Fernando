(() => {
  let flash: {
    name: string;
    age?: number;
    power: string[];
    getName?: () => string;
  } = {
    name: "barry hallen",
    age: 24,
    power: ["super velocidad", "viajar en el tiempo"],
  };

  flash = {
    name: "clark kent",
    power: ["super fuerza"],
    getName() {
      return this.name;
    },
  };


  let superman: {
    name: string;
    age?: number;
    power: string[];
    getName?: () => string;
  } = {
    name: "clark kent",
    age: 30,
    power: ["super velocidad", "viajar en el tiempo"],
  };


})();
