(() => {
  const fullName = (
    firstName: string,
    lastName?: string | boolean,
    upper: boolean = false
  ): string => {
    if (upper) {
      return `${firstName} ${lastName || "sin last name"}`.toUpperCase();
    } else {
      return `${firstName} ${lastName || "sin last name"}`;
    }
  };

  const name = fullName("Tony", "Stark");

  console.log(name);
})();
