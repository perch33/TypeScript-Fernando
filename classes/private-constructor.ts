(() => {
  class Apocalipsis {
    static intace: Apocalipsis;

    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.intace) {
        Apocalipsis.intace = new Apocalipsis("soy Apocalipsis el unico");
      }
      return Apocalipsis.intace;
    }

    changeName(newName: string): void {
      this.name = newName;
    }
  }

  const apocalipsis1 = Apocalipsis.callApocalipsis();

  /* const apocalipsis1 = new Apocalipsis('Soy Apocalipsis') */

  /* console.log(apocalipsis1); */
})();
