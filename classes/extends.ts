(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      /* console.log(`constructor Avenger llamado`); */
    }
    protected getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(
      public name: string,
      public realName: string,
      public isMutant: boolean
    ) {
      super(name, realName);
      /* console.log("constructor Xmen llamado"); */
    }

    get fullName() {
      return `${this.name} - ${this.realName}`;
    }
    set fullName(name: string) {
      this.name = name;
    }

    getFullNameDesdeXmen() {
      console.log(super.getFullName());
    }
  }
  const wolverine = new Xmen("Wolverine", "logan", true);

  /* console.log(wolverine.fullName); */

  wolverine.fullName = "Percy";
  /* console.log(wolverine.fullName); */
})();
