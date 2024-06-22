(() => {
  type Avengers = {
    nick: string;
    ironMan: string;
    vision: string;
    activo: boolean;
    poder: number;
  };

  const avengers: Avengers = {
    nick: "Samuel Jackson",
    ironMan: "Robert Downey Jr",
    vision: "Paul Bettany",
    activo: true,
    poder: 1500.123123,
  };

  /* const { poder, vision } = avenger;

  console.log(poder.toFixed(2), vision.toUpperCase()); */

  const printAvenger = ({ vision, activo, ...resto }: Avengers) => {
    console.log(vision, activo, resto);
  };

  /*  printAvenger(avengers); */

  const avengerArr: [string, boolean, number] = ["cap. America", false, 123];

  const [cap, ironMan, numero] = avengerArr;

  /* console.log(cap, ironMan, numero); */
})();
