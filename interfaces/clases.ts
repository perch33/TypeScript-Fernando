(() => {
  interface Xmen {
    name: string;
    realName: string;
    mutanPower(id: number): string;
  }

  interface Human {
    age: number;
  }

  class Mutan implements Xmen, Human {
    public age: number;
    public name: string;
    public realName: string;
    mutanPower(id: number): string {
      return this.name;
    }
  }
})();
