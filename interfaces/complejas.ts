(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress?(id: string): string;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const cliente: Client = {
    name: "Fernando",
    age: 25,
    address: {
      id: 125,
      zip: "Ky2 sud",
      city: "Ottawa",
    },
    getFullAddress(id) {
      return this.name;
    },
  };

  const client2: Client = {
    name: "Melissa",
    age: 30,
    address: {
      city: "toronto",
      id: 120,
      zip: "k25 u2a",
    },
  };
})();
