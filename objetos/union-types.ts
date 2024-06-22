(() => {
  type Hero = {
    name: string;
    age?: number;
    power: number[];
    getName?: () => string;
  };

  let myCustomVariable: string | number | Hero = "percy";

  console.log(typeof myCustomVariable);

  myCustomVariable = 20;

  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name: "bruce",
    age: 43,
    power: [1],
  };
  
  console.log(typeof myCustomVariable);
})();
