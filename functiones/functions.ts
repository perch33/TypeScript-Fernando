(() => {
  const hero: string = "flash";

  function returName(): string {
    return hero;
  }

  const activeBatisignal = (): string => {
    return "batiseñal activa";
  };

  console.log(typeof activeBatisignal);

  const heroName: string = returName()
})();
