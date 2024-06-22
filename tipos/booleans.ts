(() => {
  let isSuperman: string | boolean = true;
  let isBatman: string | boolean = false;

  isSuperman = isBatman ? true : "false";

  console.log(isSuperman);
})();
