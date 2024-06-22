(() => {
  class Avenger {
    /* private name: string; */
    /* public team: string; */
    /* public realName?: string; */
    static avgAge: number = 35;
    static getAvgAge(){
      return this.name
    }

    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {}
    public bio() {
      return `${this.name} (${this.team})`;
    }
  }

  const antman = new Avenger("Antman", "Capitan", "Scoot Lang");

/*   console.log(antman);
  console.log(antman.bio()); */
})();
