(() => {
  let avenger: number = 10;

  console.log(avenger);

  const villains: number = 20;

  if (avenger < villains) {
    console.log("estamos en problemas");
  } else {
    console.log("estamos salvados");
  }

  avenger = Number('123A');

  console.log(avenger);
})();
